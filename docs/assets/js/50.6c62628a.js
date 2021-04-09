(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{405:function(e,v,_){"use strict";_.r(v);var t=_(42),l=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"uitableview"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#uitableview"}},[e._v("#")]),e._v(" UITableView")]),e._v(" "),_("h2",{attrs:{id:"一、滑动卡顿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、滑动卡顿"}},[e._v("#")]),e._v(" 一、滑动卡顿")]),e._v(" "),_("h3",{attrs:{id:"出现的情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#出现的情况"}},[e._v("#")]),e._v(" 出现的情况")]),e._v(" "),_("ol",[_("li",[e._v("主线程"),_("code",[e._v("阻塞")]),e._v("。例如请求数据也是主线程，请求时 + 滑动页面")]),e._v(" "),_("li",[_("code",[e._v("图片")]),e._v("过大 + 显示条目多")]),e._v(" "),_("li",[e._v("滑动"),_("code",[e._v("动画代码")]),e._v("过于复杂")]),e._v(" "),_("li",[_("code",[e._v("短时")]),e._v("请求次数过多，不断重置 tableview.datasource 数据内容")]),e._v(" "),_("li",[_("code",[e._v("短时")]),e._v("多次请求数据 + cell 在input 输入情况")]),e._v(" "),_("li",[e._v("...")])]),e._v(" "),_("h3",{attrs:{id:"解决"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[e._v("#")]),e._v(" 解决")]),e._v(" "),_("ol",[_("li",[_("code",[e._v("请求阻塞主线程")]),e._v(": 请求采用异步，滑动页面 判断是否请求中，避免重复请求数据")]),e._v(" "),_("li",[_("code",[e._v("图片 + 条目过多")]),e._v(": 下载后的图片(压缩、后台处理)，异步渲染 cell 。仅渲染页面停留的cell")]),e._v(" "),_("li",[_("code",[e._v("滑动动画代码过于复杂")]),e._v(": 优化动画代码、不要滑动动画")]),e._v(" "),_("li",[_("code",[e._v("短时请求次数过多")]),e._v(": 看第1条")]),e._v(" "),_("li",[_("code",[e._v("短时多次请求数据 + cell 在input 输入情况")]),e._v("： 看第1条，在渲染前，是否缓存输入的内容，在渲染时在重新赋值刚输入的内容")])]),e._v(" "),_("p",[_("code",[e._v("预渲染、绘制 都需要注意时机。")])]),e._v(" "),_("h2",{attrs:{id:"二、cell-不定高-我常用1-、-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、cell-不定高-我常用1-、-2"}},[e._v("#")]),e._v(" 二、cell 不定高 (我常用"),_("code",[e._v("1")]),e._v(" 、 "),_("code",[e._v("2")]),e._v(")")]),e._v(" "),_("ol",[_("li",[e._v("在 "),_("code",[e._v("数据模型赋值时")]),e._v("，算出高度 (请求数据结果赋值时，并调用计算高度方法 结果给model的一个属性: "),_("code",[e._v("model.height = xx")]),e._v(")")]),e._v(" "),_("li",[e._v("在 "),_("code",[e._v("渲染cell高度")]),e._v(" 时，根据 indexPath.section 中区分高度(渲染cell高度 尽量避免计算) "),_("code",[e._v("多个section中同cell一样高度")])]),e._v(" "),_("li",[e._v("预设高度 "),_("code",[e._v("estimatedRowHeight")]),e._v(" + "),_("code",[e._v("tableView.rowHeight = UITableViewAutomaticDimension")]),e._v(" (注意：这是"),_("code",[e._v("所有cell")]),e._v("的都不定高了)")])])])}),[],!1,null,null,null);v.default=l.exports}}]);