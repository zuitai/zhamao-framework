<?php

declare(strict_types=1);

use Doctrine\Common\Annotations\AnnotationReader;
use Koriym\Attributes\AttributeReader;
use Koriym\Attributes\DualReader;
use ZM\Annotation\Swoole\OnSetup;
use ZM\Annotation\Swoole\SwooleHandler;
use ZM\ConsoleApplication;
use ZM\Exception\InitException;
use ZM\Utils\DataProvider;
use ZM\Utils\ZMUtil;

require_once((!is_dir(__DIR__ . '/../../vendor')) ? getcwd() : (__DIR__ . '/../..')) . '/vendor/autoload.php';

try {
    try {
        (new ConsoleApplication('zhamao'))->initEnv();
    } catch (InitException $e) {
    }
    $base_path = DataProvider::getSourceRootDir();
    $scan_paths = [];
    $composer = json_decode(file_get_contents($base_path . '/composer.json'), true);
    $exclude_annotations = array_merge($composer['extra']['exclude_annotate'] ?? [], $composer['extra']['zm']['exclude-annotation-path'] ?? []);
    foreach (($composer['autoload']['psr-4'] ?? []) as $k => $v) {
        if (is_dir($base_path . '/' . $v) && !in_array($v, $exclude_annotations)) {
            $scan_paths[trim($k, '\\')] = $base_path . '/' . $v;
        }
    }
    foreach (($composer['autoload-dev']['psr-4'] ?? []) as $k => $v) {
        if (is_dir($base_path . '/' . $v) && !in_array($v, $exclude_annotations)) {
            $scan_paths[trim($k, '\\')] = $base_path . '/' . $v;
        }
    }
    $all_event_class = [];
    foreach ($scan_paths as $namespace => $autoload_path) {
        $all_event_class = array_merge($all_event_class, ZMUtil::getClassesPsr4($autoload_path, $namespace));
    }

    $reader = new DualReader(new AnnotationReader(), new AttributeReader());
    $event_list = [];
    $setup_list = [];
    foreach ($all_event_class as $v) {
        $reflection_class = new ReflectionClass($v);
        $methods = $reflection_class->getMethods(ReflectionMethod::IS_PUBLIC);
        foreach ($methods as $vs) {
            $method_annotations = $reader->getMethodAnnotations($vs);
            if ($method_annotations != []) {
                $annotation = $method_annotations[0];
                if ($annotation instanceof SwooleHandler) {
                    $event_list[] = [
                        'class' => $v,
                        'method' => $vs->getName(),
                        'event' => $annotation->event,
                    ];
                } elseif ($annotation instanceof OnSetup) {
                    $setup_list[] = [
                        'class' => $v,
                        'method' => $vs->getName(),
                    ];
                }
            }
        }
    }
    echo json_encode(['setup' => $setup_list, 'event' => $event_list]);
} catch (Throwable $e) {
    $stderr = fopen('php://stderr', 'w');
    fwrite($stderr, zm_internal_errcode('E00031') . $e->getMessage() . ' in ' . $e->getFile() . ' at line ' . $e->getLine() . PHP_EOL);
    fclose($stderr);
    exit(1);
}
