var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>AuthRecord Struct Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_auth_record.html\', tocPrefix);\n\
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
            <h1>AuthRecord Struct Reference</h1>\n\
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
<div class=\"title\">AuthRecord Struct Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"struct_auth_record.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauthdefs__qws_8h_source.html\">qtransportauthdefs_qws.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauthdefs__qws_8h_source.html#l00120\">120</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauthdefs__qws_8h_source.html\">qtransportauthdefs_qws.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:aaecf0f07f013d19736c320576f3eb03f\"><td class=\"memItemLeft\" translate=\"no\">union {</td></tr>\n\
<tr class=\"memitem:ae6661cd380724515ecd4663b512fc6c4\"><td class=\"memItemLeft\" translate=\"no\">&#160;&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_auth_cookie.html\">AuthCookie</a>&#160;&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_auth_record.html#ae6661cd380724515ecd4663b512fc6c4\">auth</a></td></tr>\n\
<tr class=\"separator:ae6661cd380724515ecd4663b512fc6c4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7e9550ddf85bcd470f4502b9a7c73f1c\"><td class=\"memItemLeft\" translate=\"no\">&#160;&#160;&#160;char&#160;&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_auth_record.html#a7e9550ddf85bcd470f4502b9a7c73f1c\">data</a> [sizeof(struct <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_auth_cookie.html\">AuthCookie</a>)]</td></tr>\n\
<tr class=\"separator:a7e9550ddf85bcd470f4502b9a7c73f1c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaecf0f07f013d19736c320576f3eb03f\"><td class=\"memItemLeft\" translate=\"no\" valign=\"top\">};&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"></td></tr>\n\
<tr class=\"separator:aaecf0f07f013d19736c320576f3eb03f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a86538f9d837b43381ca139dd2c065066\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">time_t&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_auth_record.html#a86538f9d837b43381ca139dd2c065066\">change_time</a></td></tr>\n\
<tr class=\"separator:a86538f9d837b43381ca139dd2c065066\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"ae6661cd380724515ecd4663b512fc6c4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_auth_cookie.html\">AuthCookie</a> auth</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauthdefs__qws_8h_source.html#l00123\">123</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauthdefs__qws_8h_source.html\">qtransportauthdefs_qws.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7e9550ddf85bcd470f4502b9a7c73f1c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">char <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>[sizeof(struct <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_auth_cookie.html\">AuthCookie</a>)]</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauthdefs__qws_8h_source.html#l00124\">124</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauthdefs__qws_8h_source.html\">qtransportauthdefs_qws.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aaecf0f07f013d19736c320576f3eb03f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">union { ... } </td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a86538f9d837b43381ca139dd2c065066\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">time_t change_time</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauthdefs__qws_8h_source.html#l00126\">126</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauthdefs__qws_8h_source.html\">qtransportauthdefs_qws.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this struct was generated from the following file:<ul>\n\
<li>QtGui/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauthdefs__qws_8h_source.html\">qtransportauthdefs_qws.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";