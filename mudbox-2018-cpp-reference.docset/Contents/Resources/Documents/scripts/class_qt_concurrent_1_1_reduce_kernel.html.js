var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>ReduceKernel&lt; ReduceFunctor, ReduceResultType, T &gt; Class Template Reference</title>\n\
   \n\
\n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'class_qt_concurrent_1_1_reduce_kernel.html\', tocPrefix);\n\
    dQuery(document).trigger(\'toc_initialized\');\n\
}\n\
if (tocSystemNeedsToBeLoaded)\n\
{\n\
	yepnope([{\n\
	load:[tocPrefix + \'json3.min.js\', tocPrefix + \'jquery.js\', tocPrefix + \'ref-toc-controller.js\', tocPrefix + \'dynsections.js\'],\n\
	complete: function() {\n\
	  if (typeof(dQuery) == \'undefined\')\n\
	  {\n\
	    dQuery = jQuery.noConflict(true);\n\
	  }\n\
	  else { jQuery.noConflict(true); }\n\
	  $(document).ready(cpp_ref_initializeToc);\n\
	}\n\
 	}])\n\
}\n\
if (!weAreIn21) { // if in AKN...\n\
$(window).load( function() {\n\
    setTimeout( function() {\n\
        var content = $(\'body > div\').not(\'#body-content\');     // take any divs under body that are not id=body-content\n\
        content.each( function() { \n\
            $(this).css( { \'padding-left\': $(this).css(\'margin-left\') } );       // and if they have any padding-left already, move it to margin-left.\n\
        } );\n\
        var width = cpp_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>ReduceKernel&lt; ReduceFunctor, ReduceResultType, T &gt; Class Template Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
</div><!-- top -->\n\
<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n\
  <div id=\"nav-tree\">\n\
    <div id=\"nav-tree-contents\">\n\
      <div id=\"nav-sync\" class=\"sync\"></div>\n\
    </div>\n\
  </div>\n\
  <div id=\"splitbar\" style=\"-moz-user-select:none;\" class=\"ui-resizable-handle\">\n\
  </div>\n\
</div>\n\
\n\
<div id=\"doc-content\">\n\
<div class=\"header\">\n\
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">ReduceKernel&lt; ReduceFunctor, ReduceResultType, T &gt; Class Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_qt_concurrent_1_1_reduce_kernel.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html\">qtconcurrentreducekernel.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;typename ReduceFunctor, typename ReduceResultType, typename T&gt;<br>\n\
class QtConcurrent::ReduceKernel&lt; ReduceFunctor, ReduceResultType, T &gt;</h3>\n\
\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html#l00104\">104</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html\">qtconcurrentreducekernel.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:af9843a1b9fb6184e5dc328d433a27003\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_reduce_kernel.html#af9843a1b9fb6184e5dc328d433a27003\">ReduceKernel</a> (ReduceOptions _reduceOptions)</td></tr>\n\
<tr class=\"separator:af9843a1b9fb6184e5dc328d433a27003\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab595bc12b9c5567fd5ad325cdfd66720\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_reduce_kernel.html#ab595bc12b9c5567fd5ad325cdfd66720\">runReduce</a> (ReduceFunctor &amp;reduce, ReduceResultType &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_intermediate_results.html\">IntermediateResults</a>&lt; T &gt; &amp;result)</td></tr>\n\
<tr class=\"separator:ab595bc12b9c5567fd5ad325cdfd66720\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5d63da27c00781268df218c078d63942\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_reduce_kernel.html#a5d63da27c00781268df218c078d63942\">finish</a> (ReduceFunctor &amp;reduce, ReduceResultType &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>)</td></tr>\n\
<tr class=\"separator:a5d63da27c00781268df218c078d63942\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a540f006768bd4eabe810a3e6dabf7daa\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_reduce_kernel.html#a540f006768bd4eabe810a3e6dabf7daa\">shouldThrottle</a> ()</td></tr>\n\
<tr class=\"separator:a540f006768bd4eabe810a3e6dabf7daa\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa590002c60b8f7f08b44b63e7603ba8c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_reduce_kernel.html#aa590002c60b8f7f08b44b63e7603ba8c\">shouldStartThread</a> ()</td></tr>\n\
<tr class=\"separator:aa590002c60b8f7f08b44b63e7603ba8c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"af9843a1b9fb6184e5dc328d433a27003\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_reduce_kernel.html\">ReduceKernel</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">ReduceOptions&#160;</td>\n\
          <td class=\"paramname\"><em>_reduceOptions</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html#l00143\">143</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html\">qtconcurrentreducekernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00144\"></a><span class=\"lineno\">  144</span>&#160;        : reduceOptions(_reduceOptions), progress(0), resultsMapSize(0), </div>\n\
<div class=\"line\"><a name=\"l00145\"></a><span class=\"lineno\">  145</span>&#160;          threadCount(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_thread_pool.html#ad59bc3f083c1a878364365266f8e95ad\">QThreadPool::globalInstance</a>()-&gt;maxThreadCount())</div>\n\
<div class=\"line\"><a name=\"l00146\"></a><span class=\"lineno\">  146</span>&#160;    { }</div>\n\
<div class=\"ttc\" id=\"class_q_thread_pool_html_ad59bc3f083c1a878364365266f8e95ad\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_thread_pool.html#ad59bc3f083c1a878364365266f8e95ad\">QThreadPool::globalInstance</a></div><div class=\"ttdeci\">static QThreadPool * globalInstance()</div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ab595bc12b9c5567fd5ad325cdfd66720\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> runReduce </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">ReduceFunctor &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>reduce</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">ReduceResultType &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_intermediate_results.html\">IntermediateResults</a>&lt; T &gt; &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>result</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html#l00148\">148</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html\">qtconcurrentreducekernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00151\"></a><span class=\"lineno\">  151</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00152\"></a><span class=\"lineno\">  152</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_mutex_locker.html\">QMutexLocker</a> locker(&amp;mutex);</div>\n\
<div class=\"line\"><a name=\"l00153\"></a><span class=\"lineno\">  153</span>&#160;        <span class=\"keywordflow\">if</span> (!canReduce(result.begin)) {</div>\n\
<div class=\"line\"><a name=\"l00154\"></a><span class=\"lineno\">  154</span>&#160;            ++resultsMapSize;</div>\n\
<div class=\"line\"><a name=\"l00155\"></a><span class=\"lineno\">  155</span>&#160;            resultsMap.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_map.html#a3a50129691f72ab053e495ebd27c6383\">insert</a>(result.begin, result);</div>\n\
<div class=\"line\"><a name=\"l00156\"></a><span class=\"lineno\">  156</span>&#160;            <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"><a name=\"l00157\"></a><span class=\"lineno\">  157</span>&#160;        }</div>\n\
<div class=\"line\"><a name=\"l00158\"></a><span class=\"lineno\">  158</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00159\"></a><span class=\"lineno\">  159</span>&#160;        <span class=\"keywordflow\">if</span> (reduceOptions &amp; <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a6e8a99c1c817425ae89109ee5aae1eb1ae64119993cc637f3f1bbe0d0c6e25bc7\">UnorderedReduce</a>) {</div>\n\
<div class=\"line\"><a name=\"l00160\"></a><span class=\"lineno\">  160</span>&#160;            <span class=\"comment\">// UnorderedReduce</span></div>\n\
<div class=\"line\"><a name=\"l00161\"></a><span class=\"lineno\">  161</span>&#160;            progress = -1;</div>\n\
<div class=\"line\"><a name=\"l00162\"></a><span class=\"lineno\">  162</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00163\"></a><span class=\"lineno\">  163</span>&#160;            <span class=\"comment\">// reduce this result</span></div>\n\
<div class=\"line\"><a name=\"l00164\"></a><span class=\"lineno\">  164</span>&#160;            locker.unlock();</div>\n\
<div class=\"line\"><a name=\"l00165\"></a><span class=\"lineno\">  165</span>&#160;            reduceResult(reduce, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>, result);</div>\n\
<div class=\"line\"><a name=\"l00166\"></a><span class=\"lineno\">  166</span>&#160;            locker.relock();</div>\n\
<div class=\"line\"><a name=\"l00167\"></a><span class=\"lineno\">  167</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00168\"></a><span class=\"lineno\">  168</span>&#160;            <span class=\"comment\">// reduce all stored results as well</span></div>\n\
<div class=\"line\"><a name=\"l00169\"></a><span class=\"lineno\">  169</span>&#160;            <span class=\"keywordflow\">while</span> (!resultsMap.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_map.html#a479432127ee77145cc19d6a2d1590821\">isEmpty</a>()) {</div>\n\
<div class=\"line\"><a name=\"l00170\"></a><span class=\"lineno\">  170</span>&#160;                ResultsMap resultsMapCopy = resultsMap;</div>\n\
<div class=\"line\"><a name=\"l00171\"></a><span class=\"lineno\">  171</span>&#160;                resultsMap.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_map.html#a71cf7617343cdfe13553c9bacd4d34b7\">clear</a>();</div>\n\
<div class=\"line\"><a name=\"l00172\"></a><span class=\"lineno\">  172</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00173\"></a><span class=\"lineno\">  173</span>&#160;                locker.unlock();</div>\n\
<div class=\"line\"><a name=\"l00174\"></a><span class=\"lineno\">  174</span>&#160;                reduceResults(reduce, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>, resultsMapCopy);</div>\n\
<div class=\"line\"><a name=\"l00175\"></a><span class=\"lineno\">  175</span>&#160;                locker.relock();</div>\n\
<div class=\"line\"><a name=\"l00176\"></a><span class=\"lineno\">  176</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00177\"></a><span class=\"lineno\">  177</span>&#160;                resultsMapSize -= resultsMapCopy.size();</div>\n\
<div class=\"line\"><a name=\"l00178\"></a><span class=\"lineno\">  178</span>&#160;            }</div>\n\
<div class=\"line\"><a name=\"l00179\"></a><span class=\"lineno\">  179</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00180\"></a><span class=\"lineno\">  180</span>&#160;            progress = 0;</div>\n\
<div class=\"line\"><a name=\"l00181\"></a><span class=\"lineno\">  181</span>&#160;        } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\"><a name=\"l00182\"></a><span class=\"lineno\">  182</span>&#160;            <span class=\"comment\">// reduce this result</span></div>\n\
<div class=\"line\"><a name=\"l00183\"></a><span class=\"lineno\">  183</span>&#160;            locker.unlock();</div>\n\
<div class=\"line\"><a name=\"l00184\"></a><span class=\"lineno\">  184</span>&#160;            reduceResult(reduce, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>, result);</div>\n\
<div class=\"line\"><a name=\"l00185\"></a><span class=\"lineno\">  185</span>&#160;            locker.relock();</div>\n\
<div class=\"line\"><a name=\"l00186\"></a><span class=\"lineno\">  186</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00187\"></a><span class=\"lineno\">  187</span>&#160;            <span class=\"comment\">// OrderedReduce</span></div>\n\
<div class=\"line\"><a name=\"l00188\"></a><span class=\"lineno\">  188</span>&#160;            progress += result.end - result.begin;</div>\n\
<div class=\"line\"><a name=\"l00189\"></a><span class=\"lineno\">  189</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00190\"></a><span class=\"lineno\">  190</span>&#160;            <span class=\"comment\">// reduce as many other results as possible</span></div>\n\
<div class=\"line\"><a name=\"l00191\"></a><span class=\"lineno\">  191</span>&#160;            <span class=\"keyword\">typename</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_map.html#a67171474c4da6cc8efe0c7fafefd2b2d\">ResultsMap::iterator</a> it = resultsMap.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_map.html#ad69bd11391be1a1dba5c8202259664f8\">begin</a>();</div>\n\
<div class=\"line\"><a name=\"l00192\"></a><span class=\"lineno\">  192</span>&#160;            <span class=\"keywordflow\">while</span> (it != resultsMap.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_map.html#acad38d52497a975bfb6f2f6acd76631f\">end</a>()) {</div>\n\
<div class=\"line\"><a name=\"l00193\"></a><span class=\"lineno\">  193</span>&#160;                <span class=\"keywordflow\">if</span> (it.value().begin != progress)</div>\n\
<div class=\"line\"><a name=\"l00194\"></a><span class=\"lineno\">  194</span>&#160;                    <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\"><a name=\"l00195\"></a><span class=\"lineno\">  195</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00196\"></a><span class=\"lineno\">  196</span>&#160;                locker.unlock();</div>\n\
<div class=\"line\"><a name=\"l00197\"></a><span class=\"lineno\">  197</span>&#160;                reduceResult(reduce, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>, it.value());</div>\n\
<div class=\"line\"><a name=\"l00198\"></a><span class=\"lineno\">  198</span>&#160;                locker.relock();</div>\n\
<div class=\"line\"><a name=\"l00199\"></a><span class=\"lineno\">  199</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00200\"></a><span class=\"lineno\">  200</span>&#160;                --resultsMapSize;</div>\n\
<div class=\"line\"><a name=\"l00201\"></a><span class=\"lineno\">  201</span>&#160;                progress += it.value().end - it.value().begin;</div>\n\
<div class=\"line\"><a name=\"l00202\"></a><span class=\"lineno\">  202</span>&#160;                it = resultsMap.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_map.html#a3e8787118056d0e5fecebef83ceb464f\">erase</a>(it);</div>\n\
<div class=\"line\"><a name=\"l00203\"></a><span class=\"lineno\">  203</span>&#160;            }</div>\n\
<div class=\"line\"><a name=\"l00204\"></a><span class=\"lineno\">  204</span>&#160;        }</div>\n\
<div class=\"line\"><a name=\"l00205\"></a><span class=\"lineno\">  205</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"class_q_map_html_acad38d52497a975bfb6f2f6acd76631f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_map.html#acad38d52497a975bfb6f2f6acd76631f\">QMap::end</a></div><div class=\"ttdeci\">iterator end()</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qmap_8h_source.html#l00375\">qmap.h:375</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a28666c5860e73f899079b4ee29200aec\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a></div><div class=\"ttdeci\">GLdouble GLdouble GLdouble r</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01189\">GLee.h:1189</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_map_html_a3e8787118056d0e5fecebef83ceb464f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_map.html#a3e8787118056d0e5fecebef83ceb464f\">QMap::erase</a></div><div class=\"ttdeci\">iterator erase(iterator it)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qmap_8h_source.html#l00717\">qmap.h:717</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_map_html_a3a50129691f72ab053e495ebd27c6383\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_map.html#a3a50129691f72ab053e495ebd27c6383\">QMap::insert</a></div><div class=\"ttdeci\">iterator insert(const Key &amp;key, const T &amp;value)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qmap_8h_source.html#l00559\">qmap.h:559</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_map_html_a67171474c4da6cc8efe0c7fafefd2b2d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_map.html#a67171474c4da6cc8efe0c7fafefd2b2d\">QMap&lt; int, IntermediateResults&lt; T &gt; &gt;::iterator</a></div><div class=\"ttdeci\">friend class iterator</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qmap_8h_source.html#l00299\">qmap.h:299</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_mutex_locker_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_mutex_locker.html\">QMutexLocker</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qmutex_8h_source.html#l00101\">qmutex.h:101</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_map_html_ad69bd11391be1a1dba5c8202259664f8\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_map.html#ad69bd11391be1a1dba5c8202259664f8\">QMap::begin</a></div><div class=\"ttdeci\">iterator begin()</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qmap_8h_source.html#l00372\">qmap.h:372</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_qt_concurrent_html_a6e8a99c1c817425ae89109ee5aae1eb1ae64119993cc637f3f1bbe0d0c6e25bc7\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a6e8a99c1c817425ae89109ee5aae1eb1ae64119993cc637f3f1bbe0d0c6e25bc7\">QtConcurrent::UnorderedReduce</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html#l00092\">qtconcurrentreducekernel.h:92</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_map_html_a71cf7617343cdfe13553c9bacd4d34b7\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_map.html#a71cf7617343cdfe13553c9bacd4d34b7\">QMap::clear</a></div><div class=\"ttdeci\">void clear()</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qmap_8h_source.html#l00444\">qmap.h:444</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_map_html_a479432127ee77145cc19d6a2d1590821\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_map.html#a479432127ee77145cc19d6a2d1590821\">QMap::isEmpty</a></div><div class=\"ttdeci\">bool isEmpty() const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qmap_8h_source.html#l00203\">qmap.h:203</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a5d63da27c00781268df218c078d63942\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> finish </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">ReduceFunctor &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>reduce</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">ReduceResultType &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html#l00208\">208</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html\">qtconcurrentreducekernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00209\"></a><span class=\"lineno\">  209</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00210\"></a><span class=\"lineno\">  210</span>&#160;        reduceResults(reduce, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>, resultsMap);</div>\n\
<div class=\"line\"><a name=\"l00211\"></a><span class=\"lineno\">  211</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a28666c5860e73f899079b4ee29200aec\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a></div><div class=\"ttdeci\">GLdouble GLdouble GLdouble r</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01189\">GLee.h:1189</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a540f006768bd4eabe810a3e6dabf7daa\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool shouldThrottle </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html#l00213\">213</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html\">qtconcurrentreducekernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00214\"></a><span class=\"lineno\">  214</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00215\"></a><span class=\"lineno\">  215</span>&#160;        <span class=\"keywordflow\">return</span> (resultsMapSize &gt; (<a class=\"code\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a70ad55be767ca0a42c9150d24618e4caa65115e6fcaca7db10925814ed26e1494\">ReduceQueueThrottleLimit</a> * threadCount));</div>\n\
<div class=\"line\"><a name=\"l00216\"></a><span class=\"lineno\">  216</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"namespace_qt_concurrent_html_a70ad55be767ca0a42c9150d24618e4caa65115e6fcaca7db10925814ed26e1494\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a70ad55be767ca0a42c9150d24618e4caa65115e6fcaca7db10925814ed26e1494\">QtConcurrent::ReduceQueueThrottleLimit</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html#l00075\">qtconcurrentreducekernel.h:75</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa590002c60b8f7f08b44b63e7603ba8c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool shouldStartThread </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html#l00218\">218</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html\">qtconcurrentreducekernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00219\"></a><span class=\"lineno\">  219</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00220\"></a><span class=\"lineno\">  220</span>&#160;        <span class=\"keywordflow\">return</span> (resultsMapSize &lt;= (<a class=\"code\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a70ad55be767ca0a42c9150d24618e4caa96b1c1e81cf941968e94c6e1bad66d5b\">ReduceQueueStartLimit</a> * threadCount));</div>\n\
<div class=\"line\"><a name=\"l00221\"></a><span class=\"lineno\">  221</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"namespace_qt_concurrent_html_a70ad55be767ca0a42c9150d24618e4caa96b1c1e81cf941968e94c6e1bad66d5b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a70ad55be767ca0a42c9150d24618e4caa96b1c1e81cf941968e94c6e1bad66d5b\">QtConcurrent::ReduceQueueStartLimit</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html#l00074\">qtconcurrentreducekernel.h:74</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtCore/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentreducekernel_8h_source.html\">qtconcurrentreducekernel.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";