var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>ThreadEngineStarter&lt; void &gt; Class Template Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_qt_concurrent_1_1_thread_engine_starter_3_01void_01_4.html\', tocPrefix);\n\
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
            <h1>ThreadEngineStarter&lt; void &gt; Class Template Reference</h1>\n\
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
<div class=\"title\">ThreadEngineStarter&lt; void &gt; Class Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_qt_concurrent_1_1_thread_engine_starter_3_01void_01_4.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentthreadengine_8h_source.html\">qtconcurrentthreadengine.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;&gt;<br>\n\
class QtConcurrent::ThreadEngineStarter&lt; void &gt;</h3>\n\
\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentthreadengine_8h_source.html#l00257\">257</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentthreadengine_8h_source.html\">qtconcurrentthreadengine.h</a>.</p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for ThreadEngineStarter&lt; void &gt;:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_3_01void_01_4.png\" usemap=\"#ThreadEngineStarter&lt; void &gt;_map\" alt=\"\">\n\
  <map id=\"ThreadEngineStarter&lt; void &gt;_map\" name=\"ThreadEngineStarter&lt; void &gt;_map\">\n\
<area href=\"class_qt_concurrent_1_1_thread_engine_starter_base.html\" alt=\"ThreadEngineStarterBase&lt; void &gt;\" shape=\"rect\" coords=\"0,0,205,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a9f97611545eb305cbd67317026d021af\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_3_01void_01_4.html#a9f97611545eb305cbd67317026d021af\">ThreadEngineStarter</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine.html\">ThreadEngine</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> &gt; *_threadEngine)</td></tr>\n\
<tr class=\"separator:a9f97611545eb305cbd67317026d021af\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab73427842547954c282c377fc396306a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_3_01void_01_4.html#ab73427842547954c282c377fc396306a\">startBlocking</a> ()</td></tr>\n\
<tr class=\"separator:ab73427842547954c282c377fc396306a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_qt_concurrent_1_1_thread_engine_starter_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_qt_concurrent_1_1_thread_engine_starter_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html\">ThreadEngineStarterBase&lt; void &gt;</a></td></tr>\n\
<tr class=\"memitem:a071ee7e917e5f91ef8c7a02d1067f7fe inherit pub_methods_class_qt_concurrent_1_1_thread_engine_starter_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html#a071ee7e917e5f91ef8c7a02d1067f7fe\">ThreadEngineStarterBase</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine.html\">ThreadEngine</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> &gt; *_threadEngine)</td></tr>\n\
<tr class=\"separator:a071ee7e917e5f91ef8c7a02d1067f7fe inherit pub_methods_class_qt_concurrent_1_1_thread_engine_starter_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9b2e39d45765bac905b2aecda14e6a7d inherit pub_methods_class_qt_concurrent_1_1_thread_engine_starter_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html#a9b2e39d45765bac905b2aecda14e6a7d\">ThreadEngineStarterBase</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html\">ThreadEngineStarterBase</a> &amp;other)</td></tr>\n\
<tr class=\"separator:a9b2e39d45765bac905b2aecda14e6a7d inherit pub_methods_class_qt_concurrent_1_1_thread_engine_starter_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a54d6f31d913ed55a7e874c2429857395 inherit pub_methods_class_qt_concurrent_1_1_thread_engine_starter_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future.html\">QFuture</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html#a54d6f31d913ed55a7e874c2429857395\">startAsynchronously</a> ()</td></tr>\n\
<tr class=\"separator:a54d6f31d913ed55a7e874c2429857395 inherit pub_methods_class_qt_concurrent_1_1_thread_engine_starter_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aed3ada05a80ff042a21d0d49aef00dea inherit pub_methods_class_qt_concurrent_1_1_thread_engine_starter_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html#aed3ada05a80ff042a21d0d49aef00dea\">operator QFuture&lt; void &gt;</a> ()</td></tr>\n\
<tr class=\"separator:aed3ada05a80ff042a21d0d49aef00dea inherit pub_methods_class_qt_concurrent_1_1_thread_engine_starter_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pro_attribs_class_qt_concurrent_1_1_thread_engine_starter_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pro_attribs_class_qt_concurrent_1_1_thread_engine_starter_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Protected Attributes inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html\">ThreadEngineStarterBase&lt; void &gt;</a></td></tr>\n\
<tr class=\"memitem:afd5f8c275c4d0ec7ba554c160bf67bac inherit pro_attribs_class_qt_concurrent_1_1_thread_engine_starter_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine.html\">ThreadEngine</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> &gt; *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html#afd5f8c275c4d0ec7ba554c160bf67bac\">threadEngine</a></td></tr>\n\
<tr class=\"separator:afd5f8c275c4d0ec7ba554c160bf67bac inherit pro_attribs_class_qt_concurrent_1_1_thread_engine_starter_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a9f97611545eb305cbd67317026d021af\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter.html\">ThreadEngineStarter</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine.html\">ThreadEngine</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> &gt; *&#160;</td>\n\
          <td class=\"paramname\"><em>_threadEngine</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentthreadengine_8h_source.html#l00260\">260</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentthreadengine_8h_source.html\">qtconcurrentthreadengine.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00261\"></a><span class=\"lineno\">  261</span>&#160;    :ThreadEngineStarterBase&lt;void&gt;(_threadEngine) {}</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ab73427842547954c282c377fc396306a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> startBlocking </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentthreadengine_8h_source.html#l00263\">263</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentthreadengine_8h_source.html\">qtconcurrentthreadengine.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00264\"></a><span class=\"lineno\">  264</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00265\"></a><span class=\"lineno\">  265</span>&#160;        this-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html#afd5f8c275c4d0ec7ba554c160bf67bac\">threadEngine</a>-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine.html#a040056227e14351e0933d062133c8b20\">startBlocking</a>();</div>\n\
<div class=\"line\"><a name=\"l00266\"></a><span class=\"lineno\">  266</span>&#160;        <span class=\"keyword\">delete</span> this-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html#afd5f8c275c4d0ec7ba554c160bf67bac\">threadEngine</a>;</div>\n\
<div class=\"line\"><a name=\"l00267\"></a><span class=\"lineno\">  267</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"class_qt_concurrent_1_1_thread_engine_html_a040056227e14351e0933d062133c8b20\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine.html#a040056227e14351e0933d062133c8b20\">QtConcurrent::ThreadEngine::startBlocking</a></div><div class=\"ttdeci\">T * startBlocking()</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtconcurrentthreadengine_8h_source.html#l00160\">qtconcurrentthreadengine.h:160</a></div></div>\n\
<div class=\"ttc\" id=\"class_qt_concurrent_1_1_thread_engine_starter_base_html_afd5f8c275c4d0ec7ba554c160bf67bac\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html#afd5f8c275c4d0ec7ba554c160bf67bac\">QtConcurrent::ThreadEngineStarterBase&lt; void &gt;::threadEngine</a></div><div class=\"ttdeci\">ThreadEngine&lt; void &gt; * threadEngine</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtconcurrentthreadengine_8h_source.html#l00231\">qtconcurrentthreadengine.h:231</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtCore/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentthreadengine_8h_source.html\">qtconcurrentthreadengine.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";