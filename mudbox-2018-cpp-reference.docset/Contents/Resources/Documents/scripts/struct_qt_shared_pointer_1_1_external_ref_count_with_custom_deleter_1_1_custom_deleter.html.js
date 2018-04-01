var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>ExternalRefCountWithCustomDeleter&lt; T, Deleter &gt;::CustomDeleter Struct Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter.html\', tocPrefix);\n\
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
            <h1>ExternalRefCountWithCustomDeleter&lt; T, Deleter &gt;::CustomDeleter Struct Reference</h1>\n\
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
<div class=\"title\">ExternalRefCountWithCustomDeleter&lt; T, Deleter &gt;::CustomDeleter Struct Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html\">qsharedpointer_impl.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;class T, typename Deleter&gt;<br>\n\
struct QtSharedPointer::ExternalRefCountWithCustomDeleter&lt; T, Deleter &gt;::CustomDeleter</h3>\n\
\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00234\">234</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html\">qsharedpointer_impl.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a71139d61d6af52d280e9cfd2ca96de7c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter.html#a71139d61d6af52d280e9cfd2ca96de7c\">CustomDeleter</a> (T *<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a>, Deleter d)</td></tr>\n\
<tr class=\"separator:a71139d61d6af52d280e9cfd2ca96de7c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a1cb5aeed8a939417f043027a42f67e65\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Deleter&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter.html#a1cb5aeed8a939417f043027a42f67e65\">deleter</a></td></tr>\n\
<tr class=\"separator:a1cb5aeed8a939417f043027a42f67e65\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4e0fab5bba27ff507e909503f0770e58\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">T *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter.html#a4e0fab5bba27ff507e909503f0770e58\">ptr</a></td></tr>\n\
<tr class=\"separator:a4e0fab5bba27ff507e909503f0770e58\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a71139d61d6af52d280e9cfd2ca96de7c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter.html\">CustomDeleter</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">T *&#160;</td>\n\
          <td class=\"paramname\"><em>p</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">Deleter&#160;</td>\n\
          <td class=\"paramname\"><em>d</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00239\">239</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html\">qsharedpointer_impl.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00239\"></a><span class=\"lineno\">  239</span>&#160;: <a class=\"code\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter.html#a1cb5aeed8a939417f043027a42f67e65\">deleter</a>(d), <a class=\"code\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter.html#a4e0fab5bba27ff507e909503f0770e58\">ptr</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a>) {}</div>\n\
<div class=\"ttc\" id=\"struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter_html_a4e0fab5bba27ff507e909503f0770e58\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter.html#a4e0fab5bba27ff507e909503f0770e58\">QtSharedPointer::ExternalRefCountWithCustomDeleter::CustomDeleter::ptr</a></div><div class=\"ttdeci\">T * ptr</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00237\">qsharedpointer_impl.h:237</a></div></div>\n\
<div class=\"ttc\" id=\"struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter_html_a1cb5aeed8a939417f043027a42f67e65\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter_1_1_custom_deleter.html#a1cb5aeed8a939417f043027a42f67e65\">QtSharedPointer::ExternalRefCountWithCustomDeleter::CustomDeleter::deleter</a></div><div class=\"ttdeci\">Deleter deleter</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00236\">qsharedpointer_impl.h:236</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_aa5367c14d90f462230c2611b81b41d23\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a></div><div class=\"ttdeci\">GLfloat GLfloat p</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05416\">GLee.h:5416</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a1cb5aeed8a939417f043027a42f67e65\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Deleter deleter</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00236\">236</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html\">qsharedpointer_impl.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4e0fab5bba27ff507e909503f0770e58\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">T* ptr</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00237\">237</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html\">qsharedpointer_impl.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this struct was generated from the following file:<ul>\n\
<li>QtCore/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html\">qsharedpointer_impl.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";