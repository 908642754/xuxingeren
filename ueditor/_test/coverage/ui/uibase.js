/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['ui/uibase.js']) {
  _$jscoverage['ui/uibase.js'] = [];
  _$jscoverage['ui/uibase.js'][1] = 0;
  _$jscoverage['ui/uibase.js'][2] = 0;
  _$jscoverage['ui/uibase.js'][8] = 0;
  _$jscoverage['ui/uibase.js'][12] = 0;
  _$jscoverage['ui/uibase.js'][13] = 0;
  _$jscoverage['ui/uibase.js'][14] = 0;
  _$jscoverage['ui/uibase.js'][16] = 0;
  _$jscoverage['ui/uibase.js'][19] = 0;
  _$jscoverage['ui/uibase.js'][22] = 0;
  _$jscoverage['ui/uibase.js'][23] = 0;
  _$jscoverage['ui/uibase.js'][26] = 0;
  _$jscoverage['ui/uibase.js'][27] = 0;
  _$jscoverage['ui/uibase.js'][28] = 0;
  _$jscoverage['ui/uibase.js'][29] = 0;
  _$jscoverage['ui/uibase.js'][30] = 0;
  _$jscoverage['ui/uibase.js'][32] = 0;
  _$jscoverage['ui/uibase.js'][33] = 0;
  _$jscoverage['ui/uibase.js'][34] = 0;
  _$jscoverage['ui/uibase.js'][35] = 0;
  _$jscoverage['ui/uibase.js'][38] = 0;
  _$jscoverage['ui/uibase.js'][39] = 0;
  _$jscoverage['ui/uibase.js'][40] = 0;
  _$jscoverage['ui/uibase.js'][41] = 0;
  _$jscoverage['ui/uibase.js'][43] = 0;
  _$jscoverage['ui/uibase.js'][44] = 0;
  _$jscoverage['ui/uibase.js'][46] = 0;
  _$jscoverage['ui/uibase.js'][47] = 0;
  _$jscoverage['ui/uibase.js'][48] = 0;
  _$jscoverage['ui/uibase.js'][50] = 0;
  _$jscoverage['ui/uibase.js'][53] = 0;
  _$jscoverage['ui/uibase.js'][54] = 0;
  _$jscoverage['ui/uibase.js'][56] = 0;
  _$jscoverage['ui/uibase.js'][60] = 0;
  _$jscoverage['ui/uibase.js'][63] = 0;
  _$jscoverage['ui/uibase.js'][66] = 0;
  _$jscoverage['ui/uibase.js'][67] = 0;
  _$jscoverage['ui/uibase.js'][74] = 0;
  _$jscoverage['ui/uibase.js'][77] = 0;
  _$jscoverage['ui/uibase.js'][78] = 0;
  _$jscoverage['ui/uibase.js'][79] = 0;
  _$jscoverage['ui/uibase.js'][82] = 0;
}
_$jscoverage['ui/uibase.js'].source = ["<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">var</span> utils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>utils<span class=\"k\">,</span>","        uiUtils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>uiUtils<span class=\"k\">,</span>","        EventBase <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>EventBase<span class=\"k\">,</span>","        UIBase <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>UIBase <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","        <span class=\"k\">}</span><span class=\"k\">;</span>","","    UIBase<span class=\"k\">.</span>prototype <span class=\"k\">=</span> <span class=\"k\">{</span>","        className<span class=\"k\">:</span><span class=\"s\">''</span><span class=\"k\">,</span>","        uiName<span class=\"k\">:</span><span class=\"s\">''</span><span class=\"k\">,</span>","        initOptions<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>options<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","            <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> k <span class=\"k\">in</span> options<span class=\"k\">)</span> <span class=\"k\">{</span>","                me<span class=\"k\">[</span>k<span class=\"k\">]</span> <span class=\"k\">=</span> options<span class=\"k\">[</span>k<span class=\"k\">];</span>","            <span class=\"k\">}</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>id <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>id <span class=\"k\">||</span> <span class=\"s\">'edui'</span> <span class=\"k\">+</span> uiUtils<span class=\"k\">.</span>uid<span class=\"k\">();</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        initUIBase<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>_globalKey <span class=\"k\">=</span> utils<span class=\"k\">.</span>unhtml<span class=\"k\">(</span>uiUtils<span class=\"k\">.</span>setGlobal<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>id<span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">));</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        render<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>holder<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> html <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>renderHtml<span class=\"k\">();</span>","            <span class=\"k\">var</span> el <span class=\"k\">=</span> uiUtils<span class=\"k\">.</span>createElementByHtml<span class=\"k\">(</span>html<span class=\"k\">);</span>","","            <span class=\"c\">//by xuheng &#32473;&#27599;&#20010;node&#28155;&#21152;class</span>","            <span class=\"k\">var</span> list <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>getElementsByTagName<span class=\"k\">(</span>el<span class=\"k\">,</span> <span class=\"s\">\"*\"</span><span class=\"k\">);</span>","            <span class=\"k\">var</span> theme <span class=\"k\">=</span> <span class=\"s\">\"edui-\"</span> <span class=\"k\">+</span> <span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>theme <span class=\"k\">||</span> <span class=\"k\">this</span><span class=\"k\">.</span>editor<span class=\"k\">.</span>options<span class=\"k\">.</span>theme<span class=\"k\">);</span>","            <span class=\"k\">var</span> layer <span class=\"k\">=</span> document<span class=\"k\">.</span>getElementById<span class=\"k\">(</span><span class=\"s\">'edui_fixedlayer'</span><span class=\"k\">);</span>","            <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">,</span> node<span class=\"k\">;</span> node <span class=\"k\">=</span> list<span class=\"k\">[</span>i<span class=\"k\">++];)</span> <span class=\"k\">{</span>","                domUtils<span class=\"k\">.</span>addClass<span class=\"k\">(</span>node<span class=\"k\">,</span> theme<span class=\"k\">);</span>","            <span class=\"k\">}</span>","            domUtils<span class=\"k\">.</span>addClass<span class=\"k\">(</span>el<span class=\"k\">,</span> theme<span class=\"k\">);</span>","            <span class=\"k\">if</span><span class=\"k\">(</span>layer<span class=\"k\">)</span><span class=\"k\">{</span>","                layer<span class=\"k\">.</span>className<span class=\"k\">=</span><span class=\"s\">\"\"</span><span class=\"k\">;</span>","                domUtils<span class=\"k\">.</span>addClass<span class=\"k\">(</span>layer<span class=\"k\">,</span>theme<span class=\"k\">);</span>","            <span class=\"k\">}</span>","","            <span class=\"k\">var</span> seatEl <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getDom<span class=\"k\">();</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>seatEl <span class=\"k\">!=</span> <span class=\"k\">null</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                seatEl<span class=\"k\">.</span>parentNode<span class=\"k\">.</span>replaceChild<span class=\"k\">(</span>el<span class=\"k\">,</span> seatEl<span class=\"k\">);</span>","                uiUtils<span class=\"k\">.</span>copyAttributes<span class=\"k\">(</span>el<span class=\"k\">,</span> seatEl<span class=\"k\">);</span>","            <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","                <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"k\">typeof</span> holder <span class=\"k\">==</span> <span class=\"s\">'string'</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                    holder <span class=\"k\">=</span> document<span class=\"k\">.</span>getElementById<span class=\"k\">(</span>holder<span class=\"k\">);</span>","                <span class=\"k\">}</span>","                holder <span class=\"k\">=</span> holder <span class=\"k\">||</span> uiUtils<span class=\"k\">.</span>getFixedLayer<span class=\"k\">();</span>","                domUtils<span class=\"k\">.</span>addClass<span class=\"k\">(</span>holder<span class=\"k\">,</span> theme<span class=\"k\">);</span>","                holder<span class=\"k\">.</span>appendChild<span class=\"k\">(</span>el<span class=\"k\">);</span>","            <span class=\"k\">}</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>postRender<span class=\"k\">();</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        getDom<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>name<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">if</span> <span class=\"k\">(!</span>name<span class=\"k\">)</span> <span class=\"k\">{</span>","                <span class=\"k\">return</span> document<span class=\"k\">.</span>getElementById<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>id<span class=\"k\">);</span>","            <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","                <span class=\"k\">return</span> document<span class=\"k\">.</span>getElementById<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>id <span class=\"k\">+</span> <span class=\"s\">'_'</span> <span class=\"k\">+</span> name<span class=\"k\">);</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        postRender<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>fireEvent<span class=\"k\">(</span><span class=\"s\">'postrender'</span><span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        getHtmlTpl<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">return</span> <span class=\"s\">''</span><span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        formatHtml<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>tpl<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> prefix <span class=\"k\">=</span> <span class=\"s\">'edui-'</span> <span class=\"k\">+</span> <span class=\"k\">this</span><span class=\"k\">.</span>uiName<span class=\"k\">;</span>","            <span class=\"k\">return</span> <span class=\"k\">(</span>tpl","                <span class=\"k\">.</span>replace<span class=\"k\">(</span><span class=\"s\">/##/g</span><span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>id<span class=\"k\">)</span>","                <span class=\"k\">.</span>replace<span class=\"k\">(</span><span class=\"s\">/%%-/g</span><span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>uiName <span class=\"k\">?</span> prefix <span class=\"k\">+</span> <span class=\"s\">'-'</span> <span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">)</span>","                <span class=\"k\">.</span>replace<span class=\"k\">(</span><span class=\"s\">/%%/g</span><span class=\"k\">,</span> <span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>uiName <span class=\"k\">?</span> prefix <span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">' '</span> <span class=\"k\">+</span> <span class=\"k\">this</span><span class=\"k\">.</span>className<span class=\"k\">)</span>","                <span class=\"k\">.</span>replace<span class=\"k\">(</span><span class=\"s\">/\\$\\$/g</span><span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>_globalKey<span class=\"k\">));</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        renderHtml<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>formatHtml<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>getHtmlTpl<span class=\"k\">());</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        dispose<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> box <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getDom<span class=\"k\">();</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>box<span class=\"k\">)</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>dom<span class=\"k\">.</span>domUtils<span class=\"k\">.</span>remove<span class=\"k\">(</span>box<span class=\"k\">);</span>","            uiUtils<span class=\"k\">.</span>unsetGlobal<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>id<span class=\"k\">);</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","    utils<span class=\"k\">.</span>inherits<span class=\"k\">(</span>UIBase<span class=\"k\">,</span> EventBase<span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">)();</span>"];
_$jscoverage['ui/uibase.js'][1]++;
(function () {
  _$jscoverage['ui/uibase.js'][2]++;
  var utils = baidu.editor.utils, uiUtils = baidu.editor.ui.uiUtils, EventBase = baidu.editor.EventBase, UIBase = (baidu.editor.ui.UIBase = (function () {
}));
  _$jscoverage['ui/uibase.js'][8]++;
  UIBase.prototype = {className: "", uiName: "", initOptions: (function (options) {
  _$jscoverage['ui/uibase.js'][12]++;
  var me = this;
  _$jscoverage['ui/uibase.js'][13]++;
  for (var k in options) {
    _$jscoverage['ui/uibase.js'][14]++;
    me[k] = options[k];
}
  _$jscoverage['ui/uibase.js'][16]++;
  this.id = (this.id || ("edui" + uiUtils.uid()));
}), initUIBase: (function () {
  _$jscoverage['ui/uibase.js'][19]++;
  this._globalKey = utils.unhtml(uiUtils.setGlobal(this.id, this));
}), render: (function (holder) {
  _$jscoverage['ui/uibase.js'][22]++;
  var html = this.renderHtml();
  _$jscoverage['ui/uibase.js'][23]++;
  var el = uiUtils.createElementByHtml(html);
  _$jscoverage['ui/uibase.js'][26]++;
  var list = domUtils.getElementsByTagName(el, "*");
  _$jscoverage['ui/uibase.js'][27]++;
  var theme = ("edui-" + (this.theme || this.editor.options.theme));
  _$jscoverage['ui/uibase.js'][28]++;
  var layer = document.getElementById("edui_fixedlayer");
  _$jscoverage['ui/uibase.js'][29]++;
  for (var i = 0, node; (node = list[(i++)]);) {
    _$jscoverage['ui/uibase.js'][30]++;
    domUtils.addClass(node, theme);
}
  _$jscoverage['ui/uibase.js'][32]++;
  domUtils.addClass(el, theme);
  _$jscoverage['ui/uibase.js'][33]++;
  if (layer) {
    _$jscoverage['ui/uibase.js'][34]++;
    layer.className = "";
    _$jscoverage['ui/uibase.js'][35]++;
    domUtils.addClass(layer, theme);
  }
  _$jscoverage['ui/uibase.js'][38]++;
  var seatEl = this.getDom();
  _$jscoverage['ui/uibase.js'][39]++;
  if ((seatEl != null)) {
    _$jscoverage['ui/uibase.js'][40]++;
    seatEl.parentNode.replaceChild(el, seatEl);
    _$jscoverage['ui/uibase.js'][41]++;
    uiUtils.copyAttributes(el, seatEl);
  }
  else {
    _$jscoverage['ui/uibase.js'][43]++;
    if (((typeof holder) == "string")) {
      _$jscoverage['ui/uibase.js'][44]++;
      holder = document.getElementById(holder);
    }
    _$jscoverage['ui/uibase.js'][46]++;
    holder = (holder || uiUtils.getFixedLayer());
    _$jscoverage['ui/uibase.js'][47]++;
    domUtils.addClass(holder, theme);
    _$jscoverage['ui/uibase.js'][48]++;
    holder.appendChild(el);
  }
  _$jscoverage['ui/uibase.js'][50]++;
  this.postRender();
}), getDom: (function (name) {
  _$jscoverage['ui/uibase.js'][53]++;
  if ((! name)) {
    _$jscoverage['ui/uibase.js'][54]++;
    return document.getElementById(this.id);
  }
  else {
    _$jscoverage['ui/uibase.js'][56]++;
    return document.getElementById((this.id + "_" + name));
  }
}), postRender: (function () {
  _$jscoverage['ui/uibase.js'][60]++;
  this.fireEvent("postrender");
}), getHtmlTpl: (function () {
  _$jscoverage['ui/uibase.js'][63]++;
  return "";
}), formatHtml: (function (tpl) {
  _$jscoverage['ui/uibase.js'][66]++;
  var prefix = ("edui-" + this.uiName);
  _$jscoverage['ui/uibase.js'][67]++;
  return tpl.replace(/##/g, this.id).replace(/%%-/g, (this.uiName? (prefix + "-"): "")).replace(/%%/g, ((this.uiName? prefix: "") + " " + this.className)).replace(/\$\$/g, this._globalKey);
}), renderHtml: (function () {
  _$jscoverage['ui/uibase.js'][74]++;
  return this.formatHtml(this.getHtmlTpl());
}), dispose: (function () {
  _$jscoverage['ui/uibase.js'][77]++;
  var box = this.getDom();
  _$jscoverage['ui/uibase.js'][78]++;
  if (box) {
    _$jscoverage['ui/uibase.js'][78]++;
    baidu.editor.dom.domUtils.remove(box);
  }
  _$jscoverage['ui/uibase.js'][79]++;
  uiUtils.unsetGlobal(this.id);
})};
  _$jscoverage['ui/uibase.js'][82]++;
  utils.inherits(UIBase, EventBase);
})();
