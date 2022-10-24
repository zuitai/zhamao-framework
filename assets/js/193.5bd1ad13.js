(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{874:function(t,a,s){"use strict";s.r(a);var e=s(81),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"存储管理-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储管理-文件"}},[t._v("#")]),t._v(" 存储管理（文件）")]),t._v(" "),a("p",[t._v("DataProvider 是框架内提供的一个简易的文件管理类。")]),t._v(" "),a("p",[t._v("定义："),a("code",[t._v("\\ZM\\Utils\\DataProvider")])]),t._v(" "),a("h2",{attrs:{id:"dataprovider-getworkingdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataprovider-getworkingdir"}},[t._v("#")]),t._v(" DataProvider::getWorkingDir()")]),t._v(" "),a("p",[t._v("同 "),a("code",[t._v("working_dir()")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"dataprovider-getsourcerootdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataprovider-getsourcerootdir"}},[t._v("#")]),t._v(" DataProvider::getSourceRootDir()")]),t._v(" "),a("p",[t._v("获取用户的源码根目录，除 Phar 模式外与 "),a("code",[t._v("getWorkingDir()")]),t._v(" 相同。")]),t._v(" "),a("h2",{attrs:{id:"dataprovider-getframeworklink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataprovider-getframeworklink"}},[t._v("#")]),t._v(" DataProvider::getFrameworkLink()")]),t._v(" "),a("p",[t._v("同 "),a("code",[t._v('ZMConfig::get("global", "http_reverse_link")')]),t._v("，获取反向代理的链接。")]),t._v(" "),a("h2",{attrs:{id:"dataprovider-getdatafolder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataprovider-getdatafolder"}},[t._v("#")]),t._v(" DataProvider::getDataFolder()")]),t._v(" "),a("p",[t._v("获取配置项 "),a("code",[t._v("zm_data")]),t._v(" 指定的目录。")]),t._v(" "),a("p",[t._v("如果指定参数 "),a("code",[t._v("$second")]),t._v("，则返回二级目录地址，如果二级目录不存在则自动创建。")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("DataProvider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDataFolder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"TestModule"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 例如返回 /root/zhamao-framework/zm_data/TestModule/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"dataprovider-getframeworkrootdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataprovider-getframeworkrootdir"}},[t._v("#")]),t._v(" DataProvider::getFrameworkRootDir()")]),t._v(" "),a("p",[t._v("返回框架本体的根目录。")]),t._v(" "),a("h2",{attrs:{id:"dataprovider-savetojson"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataprovider-savetojson"}},[t._v("#")]),t._v(" DataProvider::saveToJson()")]),t._v(" "),a("p",[t._v("将变量内容保存为 json 格式的文件，存储在 "),a("code",[t._v("zm_data/config/")]),t._v(" 目录下或子目录下。")]),t._v(" "),a("p",[t._v("定义："),a("code",[t._v("saveToJson($filename, $file_array)")])]),t._v(" "),a("p",[a("code",[t._v("$filename")]),t._v(" 是文件名，不需要加后缀，比如你想保存成 "),a("code",[t._v("foo/bar.json")]),t._v("，这里写 "),a("code",[t._v("foo/bar")]),t._v(" 就好。如果不想要二级目录，就直接写 "),a("code",[t._v("bar")]),t._v("，不需要加 "),a("code",[t._v(".json")]),t._v(" 后缀。")]),t._v(" "),a("p",[t._v("这里只支持二级目录，不支持更多级的子目录。")]),t._v(" "),a("p",[a("code",[t._v("$file_array")]),t._v(" 为内容，一般是数组，比如你缓存了一个 API 接口返回的数据，然后直接解析成数组后丢给它就好了。")]),t._v(" "),a("h2",{attrs:{id:"dataprovider-loadfromjson"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataprovider-loadfromjson"}},[t._v("#")]),t._v(" DataProvider::loadFromJson()")]),t._v(" "),a("p",[t._v("从 json 文件加载内容至变量。")]),t._v(" "),a("p",[t._v("定义："),a("code",[t._v("loadFromJson($filename)")])]),t._v(" "),a("p",[t._v("文件名同上 "),a("code",[t._v("saveToJson()")]),t._v(" 的定义，解析后的返回值为原先的内容或 "),a("code",[t._v("null")]),t._v("（如果文件不存在或 json 解析失败）。")]),t._v(" "),a("h2",{attrs:{id:"dataprovider-scandirfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataprovider-scandirfiles"}},[t._v("#")]),t._v(" DataProvider::scanDirFiles()")]),t._v(" "),a("p",[t._v("递归或非递归扫描目录，返回相对目录的文件列表或绝对目录的文件列表。（非常好用）")]),t._v(" "),a("p",[t._v("定义："),a("code",[t._v("scanDirFiles($dir, $recursive = true, $relative = false, $include_dir = false)")])]),t._v(" "),a("p",[a("code",[t._v("$dir")]),t._v(" 为要扫描的目录，"),a("code",[t._v("$recursive")]),t._v(" 为是否递归，"),a("code",[t._v("$relative")]),t._v(" 为是否返回相对目录的文件列表。")]),t._v(" "),a("p",[a("code",[t._v("$include_dir")]),t._v(" 只有在 "),a("code",[t._v("$recursive === false")]),t._v(" 的情况才生效，当 "),a("code",[t._v("$include_dir")]),t._v(" 为 "),a("code",[t._v("true")]),t._v(" 时，返回的非递归文件列表会包含目录，否则只包含文件。")]),t._v(" "),a("p",[t._v("从给定的目录下开始遍历整个目录，如果将 "),a("code",[t._v("$recursive")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v("，则会递归扫描子目录，否则将返回包含目录的文件列表。")]),t._v(" "),a("p",[t._v("如果将 "),a("code",[t._v("$relative")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v("，则会返回文件列表的相对路径，否则返回绝对路径。")]),t._v(" "),a("p",[t._v("例如：假设目录 "),a("code",[t._v("/home/test/")]),t._v(" 下有两个文件："),a("code",[t._v("test1.txt")]),t._v(" 和 "),a("code",[t._v("testdir/test2.txt")]),t._v("：如果将 "),a("code",[t._v("$recursive")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v("，"),a("code",[t._v("$relative")]),t._v(" 设置为 "),a("code",[t._v("false")]),t._v("，则返回的文件列表为：")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/test/test1.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"home/test/testdir/test2.txt"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("相同条件下，如果将 "),a("code",[t._v("$relative")]),t._v(" 设置为 "),a("code",[t._v("true")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test1.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testdir/test2.txt"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("如果再把 "),a("code",[t._v("$recursive")]),t._v(" 设置为 "),a("code",[t._v("false")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test1.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testdir"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"其他文件读取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他文件读取"}},[t._v("#")]),t._v(" 其他文件读取")]),t._v(" "),a("p",[t._v("框架比较贴近原生的 PHP，所以推荐直接使用原生的方法来读写文件（"),a("code",[t._v("file_get_contents")]),t._v(" 和 "),a("code",[t._v("file_put_contents")]),t._v("）。但有一点要注意，框架内最好使用"),a("strong",[t._v("工作目录或者绝对路径")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取框架工作目录的文件 composer.json 文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$r")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file_get_contents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("working_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"/composer.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写入 Linux 临时目录下的文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file_put_contents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"/tmp/test.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("在默认的情况里，框架的根目录均为可写可读的，在读写文件时务必要注意目录的位置和权限。使用 "),a("code",[t._v("working_dir()")]),t._v(" 获取目录后面需要加 "),a("code",[t._v("/")]),t._v(" 再追加自己的文件名或子目录名。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);