var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QArgument&lt; T &amp; &gt; Class Template Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_argument_3_01_t_01_6_01_4.html\', tocPrefix);\n\
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
            <h1>QArgument&lt; T &amp; &gt; Class Template Reference</h1>\n\
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
<div class=\"title\">QArgument&lt; T &amp; &gt; Class Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_q_argument_3_01_t_01_6_01_4.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html\">qobjectdefs.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;class T&gt;<br>\n\
class QArgument&lt; T &amp; &gt;</h3>\n\
\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00286\">286</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html\">qobjectdefs.h</a>.</p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for QArgument&lt; T &amp; &gt;:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/class_q_argument_3_01_t_01_6_01_4.png\" usemap=\"#QArgument&lt; T &amp; &gt;_map\" alt=\"\">\n\
  <map id=\"QArgument&lt; T &amp; &gt;_map\" name=\"QArgument&lt; T &amp; &gt;_map\">\n\
<area href=\"class_q_generic_argument.html\" alt=\"QGenericArgument\" shape=\"rect\" coords=\"0,0,121,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a39e20be96996b141303f48f1514cfd85\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_argument_3_01_t_01_6_01_4.html#a39e20be96996b141303f48f1514cfd85\">QArgument</a> (const char *aName, T &amp;aData)</td></tr>\n\
<tr class=\"separator:a39e20be96996b141303f48f1514cfd85\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_q_generic_argument\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_q_generic_argument\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_generic_argument.html\">QGenericArgument</a></td></tr>\n\
<tr class=\"memitem:a379fcc7b308f36006e746db62682736c inherit pub_methods_class_q_generic_argument\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_generic_argument.html#a379fcc7b308f36006e746db62682736c\">QGenericArgument</a> (const char *aName=0, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *aData=0)</td></tr>\n\
<tr class=\"separator:a379fcc7b308f36006e746db62682736c inherit pub_methods_class_q_generic_argument\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0eb6777ba4d5e9d5532a7490e9610827 inherit pub_methods_class_q_generic_argument\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_generic_argument.html#a0eb6777ba4d5e9d5532a7490e9610827\">data</a> () const </td></tr>\n\
<tr class=\"separator:a0eb6777ba4d5e9d5532a7490e9610827 inherit pub_methods_class_q_generic_argument\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a862958aa3c2b9bf36903f1f0f2e81c54 inherit pub_methods_class_q_generic_argument\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_generic_argument.html#a862958aa3c2b9bf36903f1f0f2e81c54\">name</a> () const </td></tr>\n\
<tr class=\"separator:a862958aa3c2b9bf36903f1f0f2e81c54 inherit pub_methods_class_q_generic_argument\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a39e20be96996b141303f48f1514cfd85\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_argument.html\">QArgument</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const char *&#160;</td>\n\
          <td class=\"paramname\"><em>aName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">T &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>aData</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00289\">289</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html\">qobjectdefs.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00290\"></a><span class=\"lineno\">  290</span>&#160;        : <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_generic_argument.html#a379fcc7b308f36006e746db62682736c\">QGenericArgument</a>(aName, static_cast&lt;const void *&gt;(&amp;aData))</div>\n\
<div class=\"line\"><a name=\"l00291\"></a><span class=\"lineno\">  291</span>&#160;        {}</div>\n\
<div class=\"ttc\" id=\"class_q_generic_argument_html_a379fcc7b308f36006e746db62682736c\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_generic_argument.html#a379fcc7b308f36006e746db62682736c\">QGenericArgument::QGenericArgument</a></div><div class=\"ttdeci\">QGenericArgument(const char *aName=0, const void *aData=0)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00259\">qobjectdefs.h:259</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtCore/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html\">qobjectdefs.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";