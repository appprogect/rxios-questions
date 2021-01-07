(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{369:function(e,a,s){"use strict";s.r(a);var t=s(42),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"编译-和-链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译-和-链接"}},[e._v("#")]),e._v(" 编译 和 链接")]),e._v(" "),s("h2",{attrs:{id:"一、编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、编译"}},[e._v("#")]),e._v(" 一、编译")]),e._v(" "),s("p",[e._v("编译又包含了："),s("code",[e._v("预处理")]),e._v("、"),s("code",[e._v("编译")]),e._v("、"),s("code",[e._v("汇编")]),e._v("和"),s("code",[e._v("链接(二进制可重定位文件)")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-mermaid line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("graph LR\n    A(hello.c) -- -E_预处理 --\x3eB(hello.i)\n    B -- -S_编译 --\x3e C[hello.s]\n    C -- -c_汇编 --\x3e E[hello.o]\n    E -- 链接 --\x3e F(可执行文件)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"_1-预处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-预处理"}},[e._v("#")]),e._v(" 1. 预处理:")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("  gcc -E hello.c -o hello.i\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("将所有的“#define”删除，并且展开所有的宏定义")]),e._v(" "),s("li",[e._v("处理所有的条件编译指令，比如"),s("code",[e._v("#if")]),e._v("、"),s("code",[e._v("#ifdef")]),e._v("、"),s("code",[e._v("#elif")]),e._v("、"),s("code",[e._v("#else")]),e._v("、"),s("code",[e._v("#endif")])]),e._v(" "),s("li",[e._v("处理"),s("code",[e._v("#include")]),e._v("预编译指令，将被包含的头文件插入到该编译指令的位置。（这个过程是递归进行的，因为被包含的文件可能还包含了其他文件）")]),e._v(" "),s("li",[e._v("删除所有的注释"),s("code",[e._v("//")]),e._v("和"),s("code",[e._v("/* */")]),e._v("。")]),e._v(" "),s("li",[e._v("添加行号和文件名标识，方便后边编译时编译器产生调试用的行号心意以及编译时产生编译错误或警告时能够显示行号。")]),e._v(" "),s("li",[e._v("保留所有的"),s("code",[e._v("#pragma")]),e._v("编译指令，因为编译器需要使用它们")])]),e._v(" "),s("h3",{attrs:{id:"_2-编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译"}},[e._v("#")]),e._v(" 2. 编译:")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("  gcc -S hello.i -o hello.o\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("编译过程是整个程序构建的核心部分，编译成功，会将源代码由文本形式转换成机器语言，编译过程就是把预处理完的文件进行一系列词法分析、语法分析、语义分析以及优化后生成相应的汇编代码文件。")])]),e._v(" "),s("h3",{attrs:{id:"_3-链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-链接"}},[e._v("#")]),e._v(" 3. 链接:")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("  gcc hello.o -o hello\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),s("h2",{attrs:{id:"四、参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、参考"}},[e._v("#")]),e._v(" 四、参考")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/guaiguaihenguai/article/details/81160310",target:"_blank",rel:"noopener noreferrer"}},[e._v("csdn - 编译和链接的过程"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/Gamebot/article/details/78301714",target:"_blank",rel:"noopener noreferrer"}},[e._v("csdn - 编译与链接详解"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/2310b61e687e",target:"_blank",rel:"noopener noreferrer"}},[e._v("简书 - 编译与链接过程的思考"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);