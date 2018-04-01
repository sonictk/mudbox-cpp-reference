var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QWebPage::ErrorPageExtensionReturn Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_web_page_1_1_error_page_extension_return.html\', tocPrefix);\n\
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
            <h1>QWebPage::ErrorPageExtensionReturn Class Reference</h1>\n\
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
<div class=\"title\">QWebPage::ErrorPageExtensionReturn Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_q_web_page_1_1_error_page_extension_return.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_q_web_page_1_1_error_page_extension_return.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html\">qwebpage.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html#l00353\">353</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html\">qwebpage.h</a>.</p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for QWebPage::ErrorPageExtensionReturn:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/class_q_web_page_1_1_error_page_extension_return.png\" usemap=\"#QWebPage::ErrorPageExtensionReturn_map\" alt=\"\">\n\
  <map id=\"QWebPage::ErrorPageExtensionReturn_map\" name=\"QWebPage::ErrorPageExtensionReturn_map\">\n\
<area href=\"class_q_web_page_1_1_extension_return.html\" alt=\"QWebPage::ExtensionReturn\" shape=\"rect\" coords=\"0,0,162,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:acfaa954e940a36222efd0976db2c4390\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_page_1_1_error_page_extension_return.html#acfaa954e940a36222efd0976db2c4390\">ErrorPageExtensionReturn</a> ()</td></tr>\n\
<tr class=\"separator:acfaa954e940a36222efd0976db2c4390\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a8ab375bf31a242a7827a809c49856f9e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_page_1_1_error_page_extension_return.html#a8ab375bf31a242a7827a809c49856f9e\">contentType</a></td></tr>\n\
<tr class=\"separator:a8ab375bf31a242a7827a809c49856f9e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac6c75be4bad7ffac67ad5e406a36d343\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_page_1_1_error_page_extension_return.html#ac6c75be4bad7ffac67ad5e406a36d343\">encoding</a></td></tr>\n\
<tr class=\"separator:ac6c75be4bad7ffac67ad5e406a36d343\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afe62df03ca2771bfe2dde38e95b40262\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_url.html\">QUrl</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_page_1_1_error_page_extension_return.html#afe62df03ca2771bfe2dde38e95b40262\">baseUrl</a></td></tr>\n\
<tr class=\"separator:afe62df03ca2771bfe2dde38e95b40262\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acf67da21d10dc0b5475666d2ba31d805\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_page_1_1_error_page_extension_return.html#acf67da21d10dc0b5475666d2ba31d805\">content</a></td></tr>\n\
<tr class=\"separator:acf67da21d10dc0b5475666d2ba31d805\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"acfaa954e940a36222efd0976db2c4390\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_page_1_1_error_page_extension_return.html\">ErrorPageExtensionReturn</a> </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html#l00355\">355</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html\">qwebpage.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00355\"></a><span class=\"lineno\">  355</span>&#160;: <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_page_1_1_error_page_extension_return.html#a8ab375bf31a242a7827a809c49856f9e\">contentType</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html\">QLatin1String</a>(<span class=\"stringliteral\">&quot;text/html&quot;</span>)), <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_page_1_1_error_page_extension_return.html#ac6c75be4bad7ffac67ad5e406a36d343\">encoding</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html\">QLatin1String</a>(<span class=\"stringliteral\">&quot;utf-8&quot;</span>)) {};</div>\n\
<div class=\"ttc\" id=\"class_q_latin1_string_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_latin1_string.html\">QLatin1String</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00654\">qstring.h:654</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_web_page_1_1_error_page_extension_return_html_ac6c75be4bad7ffac67ad5e406a36d343\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_web_page_1_1_error_page_extension_return.html#ac6c75be4bad7ffac67ad5e406a36d343\">QWebPage::ErrorPageExtensionReturn::encoding</a></div><div class=\"ttdeci\">QString encoding</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwebpage_8h_source.html#l00357\">qwebpage.h:357</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_web_page_1_1_error_page_extension_return_html_a8ab375bf31a242a7827a809c49856f9e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_web_page_1_1_error_page_extension_return.html#a8ab375bf31a242a7827a809c49856f9e\">QWebPage::ErrorPageExtensionReturn::contentType</a></div><div class=\"ttdeci\">QString contentType</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwebpage_8h_source.html#l00355\">qwebpage.h:355</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a8ab375bf31a242a7827a809c49856f9e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> contentType</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html#l00355\">355</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html\">qwebpage.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac6c75be4bad7ffac67ad5e406a36d343\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> encoding</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html#l00357\">357</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html\">qwebpage.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afe62df03ca2771bfe2dde38e95b40262\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_url.html\">QUrl</a> baseUrl</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html#l00358\">358</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html\">qwebpage.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acf67da21d10dc0b5475666d2ba31d805\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> content</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html#l00359\">359</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html\">qwebpage.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtWebKit/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwebpage_8h_source.html\">qwebpage.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";