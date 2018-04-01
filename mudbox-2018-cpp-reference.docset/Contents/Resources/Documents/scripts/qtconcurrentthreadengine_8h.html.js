var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtCore/qtconcurrentthreadengine.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qtconcurrentthreadengine_8h.html\', tocPrefix);\n\
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
            <h1>QtCore/qtconcurrentthreadengine.h File Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>File&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/globals.html\"><span>File&#160;Members</span></a></li>\n\
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
<div class=\"title\">qtconcurrentthreadengine.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"qtconcurrentthreadengine_8h.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"qtconcurrentthreadengine_8h.html#namespaces\">Namespaces</a> &#124;\n\
<a href=\"qtconcurrentthreadengine_8h.html#enum-members\">Enumerations</a> &#124;\n\
<a href=\"qtconcurrentthreadengine_8h.html#func-members\">Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qglobal_8h_source.html\">QtCore/qglobal.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qthreadpool_8h_source.html\">QtCore/qthreadpool.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qfuture_8h_source.html\">QtCore/qfuture.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qdebug_8h_source.html\">QtCore/qdebug.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentexception_8h_source.html\">QtCore/qtconcurrentexception.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwaitcondition_8h_source.html\">QtCore/qwaitcondition.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic_8h_source.html\">QtCore/qatomic.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsemaphore_8h_source.html\">QtCore/qsemaphore.h</a>&gt;</code><br>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_barrier.html\">ThreadEngineBarrier</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_base.html\">ThreadEngineBase</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine.html\">ThreadEngine&lt; T &gt;</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html\">ThreadEngineStarterBase&lt; T &gt;</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter.html\">ThreadEngineStarter&lt; T &gt;</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_3_01void_01_4.html\">ThreadEngineStarter&lt; void &gt;</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"namespaces\"></a>\n\
Namespaces</h2></td></tr>\n\
<tr class=\"memitem:namespace_qt_concurrent\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"> &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html\">QtConcurrent</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"enum-members\"></a>\n\
Enumerations</h2></td></tr>\n\
<tr class=\"memitem:a305abcf818c95af6b4ca5a8c3b805874\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a305abcf818c95af6b4ca5a8c3b805874\">ThreadFunctionResult</a> { <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a305abcf818c95af6b4ca5a8c3b805874aee9787c943296a52ea4eaba98b7432b3\">ThrottleThread</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a305abcf818c95af6b4ca5a8c3b805874a08bc03ce784c6a9629efba07a65df531\">ThreadFinished</a>\n\
 }<tr class=\"separator:a305abcf818c95af6b4ca5a8c3b805874\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:ab5e62a40f6d79272ea87f5ca9b3e565e\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename ThreadEngine &gt; </td></tr>\n\
<tr class=\"memitem:ab5e62a40f6d79272ea87f5ca9b3e565e\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\">ThreadEngineStarter&lt; typename ThreadEngine::ResultType &gt;&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#ab5e62a40f6d79272ea87f5ca9b3e565e\">startThreadEngine</a> (ThreadEngine *threadEngine)</td></tr>\n\
<tr class=\"separator:ab5e62a40f6d79272ea87f5ca9b3e565e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
\n\
<p><a href=\"#!/url=./cpp_ref/qtconcurrentthreadengine_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";