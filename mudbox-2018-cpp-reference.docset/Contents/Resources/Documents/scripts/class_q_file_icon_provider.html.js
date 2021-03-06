var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QFileIconProvider Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_file_icon_provider.html\', tocPrefix);\n\
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
            <h1>QFileIconProvider Class Reference</h1>\n\
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
<div class=\"title\">QFileIconProvider Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_q_file_icon_provider.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_q_file_icon_provider.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_q_file_icon_provider.html#friends\">Friends</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html\">qfileiconprovider.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html#l00059\">59</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html\">qfileiconprovider.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:a0ad09eae84a6167ac8765174aca532f7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7\">IconType</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7af3db4a48281b6e0a478397720bb0cd68\">Computer</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7ad650d7aa55032444aa8094818552b314\">Desktop</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a469765a057cd3a3e0cec8a0dfb75c6da\">Trashcan</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a80537b922c8f6fc87c728e968f548334\">Network</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a1254942834ebd7f4d71182b5476a6327\">Drive</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a1b8179343a0e464cac281bb3518f9ece\">Folder</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a1ab5ebbd194ab0b95e5697aca9ba274f\">File</a>\n\
<br>\n\
 }<tr class=\"separator:a0ad09eae84a6167ac8765174aca532f7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aa8f65720248d703cd84c730c0f790574\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#aa8f65720248d703cd84c730c0f790574\">QFileIconProvider</a> ()</td></tr>\n\
<tr class=\"separator:aa8f65720248d703cd84c730c0f790574\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4db34b31b41e0d832ac8836fd369ef11\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a4db34b31b41e0d832ac8836fd369ef11\">~QFileIconProvider</a> ()</td></tr>\n\
<tr class=\"separator:a4db34b31b41e0d832ac8836fd369ef11\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9fef75830a453a9fecc2f96a1541847b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_icon.html\">QIcon</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a9fef75830a453a9fecc2f96a1541847b\">icon</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7\">IconType</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a>) const </td></tr>\n\
<tr class=\"separator:a9fef75830a453a9fecc2f96a1541847b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a12b44760a344f2e233bb2f758b211521\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_icon.html\">QIcon</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a12b44760a344f2e233bb2f758b211521\">icon</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_info.html\">QFileInfo</a> &amp;info) const </td></tr>\n\
<tr class=\"separator:a12b44760a344f2e233bb2f758b211521\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac0ffc013d5b8e518c8af90152c04ed73\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#ac0ffc013d5b8e518c8af90152c04ed73\">type</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_info.html\">QFileInfo</a> &amp;info) const </td></tr>\n\
<tr class=\"separator:ac0ffc013d5b8e518c8af90152c04ed73\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:a9266292efc8aebc87875d79c3166ff3d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a9266292efc8aebc87875d79c3166ff3d\">QFileDialog</a></td></tr>\n\
<tr class=\"separator:a9266292efc8aebc87875d79c3166ff3d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"a0ad09eae84a6167ac8765174aca532f7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7\">IconType</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a0ad09eae84a6167ac8765174aca532f7af3db4a48281b6e0a478397720bb0cd68\"></a>Computer&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a0ad09eae84a6167ac8765174aca532f7ad650d7aa55032444aa8094818552b314\"></a>Desktop&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a0ad09eae84a6167ac8765174aca532f7a469765a057cd3a3e0cec8a0dfb75c6da\"></a>Trashcan&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a0ad09eae84a6167ac8765174aca532f7a80537b922c8f6fc87c728e968f548334\"></a>Network&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a0ad09eae84a6167ac8765174aca532f7a1254942834ebd7f4d71182b5476a6327\"></a>Drive&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a0ad09eae84a6167ac8765174aca532f7a1b8179343a0e464cac281bb3518f9ece\"></a>Folder&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a0ad09eae84a6167ac8765174aca532f7a1ab5ebbd194ab0b95e5697aca9ba274f\"></a>File&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
</table>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html#l00064\">64</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html\">qfileiconprovider.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;{ <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7af3db4a48281b6e0a478397720bb0cd68\">Computer</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7ad650d7aa55032444aa8094818552b314\">Desktop</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a469765a057cd3a3e0cec8a0dfb75c6da\">Trashcan</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a80537b922c8f6fc87c728e968f548334\">Network</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a1254942834ebd7f4d71182b5476a6327\">Drive</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a1b8179343a0e464cac281bb3518f9ece\">Folder</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a1ab5ebbd194ab0b95e5697aca9ba274f\">File</a> };</div>\n\
<div class=\"ttc\" id=\"class_q_file_icon_provider_html_a0ad09eae84a6167ac8765174aca532f7a1ab5ebbd194ab0b95e5697aca9ba274f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a1ab5ebbd194ab0b95e5697aca9ba274f\">QFileIconProvider::File</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html#l00064\">qfileiconprovider.h:64</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_file_icon_provider_html_a0ad09eae84a6167ac8765174aca532f7ad650d7aa55032444aa8094818552b314\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7ad650d7aa55032444aa8094818552b314\">QFileIconProvider::Desktop</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html#l00064\">qfileiconprovider.h:64</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_file_icon_provider_html_a0ad09eae84a6167ac8765174aca532f7a1254942834ebd7f4d71182b5476a6327\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a1254942834ebd7f4d71182b5476a6327\">QFileIconProvider::Drive</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html#l00064\">qfileiconprovider.h:64</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_file_icon_provider_html_a0ad09eae84a6167ac8765174aca532f7af3db4a48281b6e0a478397720bb0cd68\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7af3db4a48281b6e0a478397720bb0cd68\">QFileIconProvider::Computer</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html#l00064\">qfileiconprovider.h:64</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_file_icon_provider_html_a0ad09eae84a6167ac8765174aca532f7a80537b922c8f6fc87c728e968f548334\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a80537b922c8f6fc87c728e968f548334\">QFileIconProvider::Network</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html#l00064\">qfileiconprovider.h:64</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_file_icon_provider_html_a0ad09eae84a6167ac8765174aca532f7a1b8179343a0e464cac281bb3518f9ece\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a1b8179343a0e464cac281bb3518f9ece\">QFileIconProvider::Folder</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html#l00064\">qfileiconprovider.h:64</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_file_icon_provider_html_a0ad09eae84a6167ac8765174aca532f7a469765a057cd3a3e0cec8a0dfb75c6da\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7a469765a057cd3a3e0cec8a0dfb75c6da\">QFileIconProvider::Trashcan</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html#l00064\">qfileiconprovider.h:64</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"aa8f65720248d703cd84c730c0f790574\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html\">QFileIconProvider</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4db34b31b41e0d832ac8836fd369ef11\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual ~<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html\">QFileIconProvider</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a9fef75830a453a9fecc2f96a1541847b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_icon.html\">QIcon</a> icon </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_icon_provider.html#a0ad09eae84a6167ac8765174aca532f7\">IconType</a>&#160;</td>\n\
          <td class=\"paramname\"><em>type</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a12b44760a344f2e233bb2f758b211521\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_icon.html\">QIcon</a> icon </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_info.html\">QFileInfo</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>info</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac0ffc013d5b8e518c8af90152c04ed73\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_info.html\">QFileInfo</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>info</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Friends And Related Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a9266292efc8aebc87875d79c3166ff3d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">friend class <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_dialog.html\">QFileDialog</a></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">friend</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html#l00073\">73</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html\">qfileiconprovider.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtGui/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qfileiconprovider_8h_source.html\">qfileiconprovider.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";