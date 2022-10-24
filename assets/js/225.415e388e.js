(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{906:function(s,t,a){"use strict";a.r(t);var n=a(81),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"配置文件变更记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件变更记录"}},[s._v("#")]),s._v(" 配置文件变更记录")]),s._v(" "),t("p",[s._v("这里将会记录各个主版本的框架升级后，涉及 "),t("code",[s._v("global.php")]),s._v(" 的更新日志，你可以根据这里描述的内容与你的旧配置文件进行合并。")]),s._v(" "),t("h2",{attrs:{id:"v2-7-0-build-447"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2-7-0-build-447"}},[s._v("#")]),s._v(" v2.7.0 (build 447)")]),s._v(" "),t("ul",[t("li",[s._v("新增 "),t("code",[s._v("$config['runtime']")]),s._v(" 下的 "),t("code",[s._v("annotation_reader_ignore")]),s._v(" 项。")])]),s._v(" "),t("h2",{attrs:{id:"v2-6-6-build-434"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2-6-6-build-434"}},[s._v("#")]),s._v(" v2.6.6 (build 434)")]),s._v(" "),t("ul",[t("li",[s._v("新增 "),t("code",[s._v("$config['runtime']")]),s._v(" 下的 "),t("code",[s._v("save_console_log_file")]),s._v(" 项。")])]),s._v(" "),t("h2",{attrs:{id:"v2-6-0-build-427"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2-6-0-build-427"}},[s._v("#")]),s._v(" v2.6.0 (build 427)")]),s._v(" "),t("ul",[t("li",[s._v("新增 "),t("code",[s._v("$config['runtime']")]),s._v(" 下的 "),t("code",[s._v("reload_delay_time")]),s._v("、"),t("code",[s._v("global_middleware_binding")]),s._v(" 项。")]),s._v(" "),t("li",[s._v("新增 "),t("code",[s._v("$config['onebot']")]),s._v(" 下的 "),t("code",[s._v("message_convert_string")]),s._v(" 项。")])]),s._v(" "),t("h2",{attrs:{id:"v2-5-1-build-417"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2-5-1-build-417"}},[s._v("#")]),s._v(" v2.5.1 (build 417)")]),s._v(" "),t("ul",[t("li",[s._v("新增 "),t("code",[s._v("$config['runtime']")]),s._v(" 下的 "),t("code",[s._v("middleware_error_policy")]),s._v(" 选项。")])]),s._v(" "),t("h2",{attrs:{id:"v2-5-0-build-413"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2-5-0-build-413"}},[s._v("#")]),s._v(" v2.5.0 (build 413)")]),s._v(" "),t("ul",[t("li",[s._v("新增 "),t("code",[s._v("$config['runtime']")]),s._v(" 运行时设置。")]),s._v(" "),t("li",[s._v("删除 "),t("code",[s._v("$config['server_event_handler_class']")]),s._v("，默认在启动时全局扫描。")]),s._v(" "),t("li",[s._v("新增 "),t("code",[s._v("$config['module_loader']")]),s._v(" 模块/插件 打包配置选项。")]),s._v(" "),t("li",[s._v("新增 "),t("code",[s._v("$config['mysql_config']")]),s._v("，取代原先的 "),t("code",[s._v("$config['sql_config']")]),s._v("，此外废弃原先的MySQL 查询器 "),t("code",[s._v("\\ZM\\DB\\DB")]),s._v(" 类。")])]),s._v(" "),t("p",[s._v("更新部分：")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 一些框架与Swoole运行时设置的调整 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'runtime'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'swoole_coroutine_hook_flags'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SWOOLE_HOOK_ALL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SWOOLE_HOOK_CURL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'swoole_server_mode'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SWOOLE_PROCESS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** MySQL数据库连接信息，host留空则启动时不创建sql连接池 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'mysql_config'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'host'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'port'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'unix_socket'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'username'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'password'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'dbname'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'adb'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'charset'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'utf8mb4'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'pool_size'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'options'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("PDO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ATTR_STRINGIFY_FETCHES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("PDO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ATTR_DEFAULT_FETCH_MODE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("PDO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FETCH_ASSOC")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 注册 Swoole Server 事件注解的类列表(deleted) */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h2",{attrs:{id:"v2-4-0-build-400"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2-4-0-build-400"}},[s._v("#")]),s._v(" v2.4.0 (build 400)")]),s._v(" "),t("ul",[t("li",[s._v("调整 "),t("code",[s._v("$config['modules']['onebot']")]),s._v(" 配置项到 "),t("code",[s._v("$config['onebot']")]),s._v("，旧版本的此段会向下兼容，建议更新，")]),s._v(" "),t("li",[s._v("新增 "),t("code",[s._v("$config['remote_terminal']")]),s._v(" 远程终端的配置项，新增此段即可。")])]),s._v(" "),t("p",[s._v("更新部分：")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 机器人解析模块，关闭后无法使用如CQCommand等注解(上面的modules即将废弃) */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'onebot'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'status'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'single_bot_mode'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'message_level'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99999")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** 一个远程简易终端，使用nc直接连接即可，但是不建议开放host为0.0.0.0(远程连接) */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'remote_terminal'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'status'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'host'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'127.0.0.1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'port'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20002")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'token'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);