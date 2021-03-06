var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QWidgetData Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_widget_data.html\', tocPrefix);\n\
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
            <h1>QWidgetData Class Reference</h1>\n\
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
<div class=\"title\">QWidgetData Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_q_widget_data.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00114\">114</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a9a18bff4c165aa91bf578b467ea1b62b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwindowdefs_8h.html#a08fcbd33489219e78cbe3dd55b1c0f5e\">WId</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a9a18bff4c165aa91bf578b467ea1b62b\">winid</a></td></tr>\n\
<tr class=\"separator:a9a18bff4c165aa91bf578b467ea1b62b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a38154d293ea4bc365258f13c8f7fd5b8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a38154d293ea4bc365258f13c8f7fd5b8\">widget_attributes</a></td></tr>\n\
<tr class=\"separator:a38154d293ea4bc365258f13c8f7fd5b8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a05416c2e2ebbf943a385001c32277601\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Qt::WindowFlags&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a05416c2e2ebbf943a385001c32277601\">window_flags</a></td></tr>\n\
<tr class=\"separator:a05416c2e2ebbf943a385001c32277601\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1c9b86f03a83e5dcd3e5989a28fc418d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a1c9b86f03a83e5dcd3e5989a28fc418d\">window_state</a>: 4</td></tr>\n\
<tr class=\"separator:a1c9b86f03a83e5dcd3e5989a28fc418d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a718d98cb739041ae1795ad9b9581c191\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a718d98cb739041ae1795ad9b9581c191\">focus_policy</a>: 4</td></tr>\n\
<tr class=\"separator:a718d98cb739041ae1795ad9b9581c191\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae4a3fc664d57c0eb6c4d8ca3a1ab901c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#ae4a3fc664d57c0eb6c4d8ca3a1ab901c\">sizehint_forced</a>:1</td></tr>\n\
<tr class=\"separator:ae4a3fc664d57c0eb6c4d8ca3a1ab901c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad6b866d97e763ad509bee22a26f41a19\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#ad6b866d97e763ad509bee22a26f41a19\">is_closing</a>:1</td></tr>\n\
<tr class=\"separator:ad6b866d97e763ad509bee22a26f41a19\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0b3320c5d6bd0ad44c245c0c7ef448b3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a0b3320c5d6bd0ad44c245c0c7ef448b3\">in_show</a>: 1</td></tr>\n\
<tr class=\"separator:a0b3320c5d6bd0ad44c245c0c7ef448b3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af0e3144685df5ad51f9bb55e3b5ac46b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#af0e3144685df5ad51f9bb55e3b5ac46b\">in_set_window_state</a>: 1</td></tr>\n\
<tr class=\"separator:af0e3144685df5ad51f9bb55e3b5ac46b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a135064cea5d7587628f3056f2f66c035\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a135064cea5d7587628f3056f2f66c035\">fstrut_dirty</a>: 1</td></tr>\n\
<tr class=\"separator:a135064cea5d7587628f3056f2f66c035\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a13a4deae5a2bd3a7f8bae91823151dd6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a13a4deae5a2bd3a7f8bae91823151dd6\">context_menu_policy</a>: 3</td></tr>\n\
<tr class=\"separator:a13a4deae5a2bd3a7f8bae91823151dd6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a452a557c503bfd9c127ea913ba2da480\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a452a557c503bfd9c127ea913ba2da480\">window_modality</a>: 2</td></tr>\n\
<tr class=\"separator:a452a557c503bfd9c127ea913ba2da480\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab23cad540c3552d5d294b29fefc1b204\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#ab23cad540c3552d5d294b29fefc1b204\">in_destructor</a>: 1</td></tr>\n\
<tr class=\"separator:ab23cad540c3552d5d294b29fefc1b204\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0b7e419d3bc97833b6302198d1c3e2e2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a0b7e419d3bc97833b6302198d1c3e2e2\">unused</a>: 13</td></tr>\n\
<tr class=\"separator:a0b7e419d3bc97833b6302198d1c3e2e2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6bf85297c2981178f3d2a2e871691e3d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a6bf85297c2981178f3d2a2e871691e3d\">crect</a></td></tr>\n\
<tr class=\"separator:a6bf85297c2981178f3d2a2e871691e3d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af4b8c6bf36455bca2eef40c1739fa166\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#af4b8c6bf36455bca2eef40c1739fa166\">pal</a></td></tr>\n\
<tr class=\"separator:af4b8c6bf36455bca2eef40c1739fa166\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af9b96c5126e3b74329e29e51fcc451ff\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_font.html\">QFont</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#af9b96c5126e3b74329e29e51fcc451ff\">fnt</a></td></tr>\n\
<tr class=\"separator:af9b96c5126e3b74329e29e51fcc451ff\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a414f55624e22122f1ee4d926865312aa\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a414f55624e22122f1ee4d926865312aa\">wrect</a></td></tr>\n\
<tr class=\"separator:a414f55624e22122f1ee4d926865312aa\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a9a18bff4c165aa91bf578b467ea1b62b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwindowdefs_8h.html#a08fcbd33489219e78cbe3dd55b1c0f5e\">WId</a> winid</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00117\">117</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a38154d293ea4bc365258f13c8f7fd5b8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint widget_attributes</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00118\">118</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a05416c2e2ebbf943a385001c32277601\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Qt::WindowFlags window_flags</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00119\">119</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1c9b86f03a83e5dcd3e5989a28fc418d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint window_state</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00120\">120</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a718d98cb739041ae1795ad9b9581c191\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint focus_policy</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00121\">121</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae4a3fc664d57c0eb6c4d8ca3a1ab901c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint sizehint_forced</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00122\">122</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad6b866d97e763ad509bee22a26f41a19\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint is_closing</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00123\">123</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0b3320c5d6bd0ad44c245c0c7ef448b3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint in_show</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00124\">124</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af0e3144685df5ad51f9bb55e3b5ac46b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint in_set_window_state</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00125\">125</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a135064cea5d7587628f3056f2f66c035\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint fstrut_dirty</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">mutable</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00126\">126</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a13a4deae5a2bd3a7f8bae91823151dd6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint context_menu_policy</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00127\">127</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a452a557c503bfd9c127ea913ba2da480\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint window_modality</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00128\">128</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab23cad540c3552d5d294b29fefc1b204\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint in_destructor</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00129\">129</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0b7e419d3bc97833b6302198d1c3e2e2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint unused</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00130\">130</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6bf85297c2981178f3d2a2e871691e3d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> crect</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00131\">131</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af4b8c6bf36455bca2eef40c1739fa166\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a> pal</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">mutable</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00132\">132</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af9b96c5126e3b74329e29e51fcc451ff\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_font.html\">QFont</a> fnt</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00133\">133</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a414f55624e22122f1ee4d926865312aa\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> wrect</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00145\">145</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtGui/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwidget_8h_source.html\">qwidget.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";