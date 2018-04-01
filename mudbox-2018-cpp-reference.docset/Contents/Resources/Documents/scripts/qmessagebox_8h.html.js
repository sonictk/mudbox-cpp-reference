var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtGui/qmessagebox.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qmessagebox_8h.html\', tocPrefix);\n\
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
            <h1>QtGui/qmessagebox.h File Reference</h1>\n\
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
<div class=\"title\">qmessagebox.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"qmessagebox_8h.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"qmessagebox_8h.html#define-members\">Macros</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qdialog_8h_source.html\">QtGui/qdialog.h</a>&gt;</code><br>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_message_box.html\">QMessageBox</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"define-members\"></a>\n\
Macros</h2></td></tr>\n\
<tr class=\"memitem:a7f7cec9f74ab83f10cc6aca7a7cee55b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qmessagebox_8h.html#a7f7cec9f74ab83f10cc6aca7a7cee55b\">QT_REQUIRE_VERSION</a>(argc,  argv,  str)</td></tr>\n\
<tr class=\"separator:a7f7cec9f74ab83f10cc6aca7a7cee55b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Macro Definition Documentation</h2>\n\
<a class=\"anchor\" id=\"a7f7cec9f74ab83f10cc6aca7a7cee55b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define QT_REQUIRE_VERSION</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">argc, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">argv, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">str&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<b>Value:</b><div class=\"fragment\"><div class=\"line\">{ <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a> = <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a4b120601ad3e766ffb8275290d29929f\">QString::fromLatin1</a>(str);\\</div>\n\
<div class=\"line\">QString sq = <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a4b120601ad3e766ffb8275290d29929f\">QString::fromLatin1</a>(qVersion()); \\</div>\n\
<div class=\"line\">if ((sq.section(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_char.html#a1d2cb40842f1e304dfab7a28997e033a\">QChar::fromLatin1</a>(<span class=\"charliteral\">&#39;.&#39;</span>),0,0).toInt()&lt;&lt;16)+\\</div>\n\
<div class=\"line\">(sq.section(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_char.html#a1d2cb40842f1e304dfab7a28997e033a\">QChar::fromLatin1</a>(<span class=\"charliteral\">&#39;.&#39;</span>),1,1).toInt()&lt;&lt;8)+\\</div>\n\
<div class=\"line\">sq.section(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_char.html#a1d2cb40842f1e304dfab7a28997e033a\">QChar::fromLatin1</a>(<span class=\"charliteral\">&#39;.&#39;</span>),2,2).toInt()&lt;(s.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a533122c15261965c9fdf6c92e1874eab\">section</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_char.html#a1d2cb40842f1e304dfab7a28997e033a\">QChar::fromLatin1</a>(<span class=\"charliteral\">&#39;.&#39;</span>),0,0).<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a3196e99dac9c3771a0293f077cef9a65\">toInt</a>()&lt;&lt;16)+\\</div>\n\
<div class=\"line\">(s.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a533122c15261965c9fdf6c92e1874eab\">section</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_char.html#a1d2cb40842f1e304dfab7a28997e033a\">QChar::fromLatin1</a>(<span class=\"charliteral\">&#39;.&#39;</span>),1,1).<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a3196e99dac9c3771a0293f077cef9a65\">toInt</a>()&lt;&lt;8)+\\</div>\n\
<div class=\"line\">s.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a533122c15261965c9fdf6c92e1874eab\">section</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_char.html#a1d2cb40842f1e304dfab7a28997e033a\">QChar::fromLatin1</a>(<span class=\"charliteral\">&#39;.&#39;</span>),2,2).<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a3196e99dac9c3771a0293f077cef9a65\">toInt</a>()) { \\</div>\n\
<div class=\"line\">if (!<a class=\"code\" href=\"#!/url=./cpp_ref/qcoreapplication_8h.html#af3bf03a2bf98820de7ae03bef13c7d07\">qApp</a>){ \\</div>\n\
<div class=\"line\">    new <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_application.html\">QApplication</a>(argc,argv); \\</div>\n\
<div class=\"line\">} \\</div>\n\
<div class=\"line\">QString s = QApplication::tr(<span class=\"stringliteral\">&quot;Executable &#39;%1&#39; requires Qt &quot;</span>\\</div>\n\
<div class=\"line\"> <span class=\"stringliteral\">&quot;%2, found Qt %3.&quot;</span>).<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a5feeac90490ef91a9faf3021dab55c80\">arg</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/qcoreapplication_8h.html#a2b0353c11ecfd90ded6381a1c3939885\">qAppName</a>()).<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a5feeac90490ef91a9faf3021dab55c80\">arg</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a4b120601ad3e766ffb8275290d29929f\">QString::fromLatin1</a>(\\</div>\n\
<div class=\"line\">str)).<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a5feeac90490ef91a9faf3021dab55c80\">arg</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a4b120601ad3e766ffb8275290d29929f\">QString::fromLatin1</a>(qVersion())); <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_message_box.html#aff12753a1a526ca42a6b8b49b0583344\">QMessageBox::critical</a>(0, QApplication::tr(\\</div>\n\
<div class=\"line\"><span class=\"stringliteral\">&quot;Incompatible Qt Library Error&quot;</span>), s, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_message_box.html#afb69631f47ecdf274da8f47337547097a596ba78c00d5ebb3b20ef2865efd74ed\">QMessageBox::Abort</a>, 0); qFatal(<span class=\"stringliteral\">&quot;%s&quot;</span>, s.toLatin1().data()); }}</div>\n\
<div class=\"ttc\" id=\"class_q_string_html_a5feeac90490ef91a9faf3021dab55c80\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html#a5feeac90490ef91a9faf3021dab55c80\">QString::arg</a></div><div class=\"ttdeci\">QString arg(qlonglong a, int fieldwidth=0, int base=10, const QChar &amp;fillChar=QLatin1Char(\' \')) const Q_REQUIRED_RESULT</div></div>\n\
<div class=\"ttc\" id=\"class_q_message_box_html_afb69631f47ecdf274da8f47337547097a596ba78c00d5ebb3b20ef2865efd74ed\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_message_box.html#afb69631f47ecdf274da8f47337547097a596ba78c00d5ebb3b20ef2865efd74ed\">QMessageBox::Abort</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qmessagebox_8h_source.html#l00111\">qmessagebox.h:111</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_message_box_html_aff12753a1a526ca42a6b8b49b0583344\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_message_box.html#aff12753a1a526ca42a6b8b49b0583344\">QMessageBox::critical</a></div><div class=\"ttdeci\">static StandardButton critical(QWidget *parent, const QString &amp;title, const QString &amp;text, StandardButtons buttons=Ok, StandardButton defaultButton=NoButton)</div></div>\n\
<div class=\"ttc\" id=\"class_q_application_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_application.html\">QApplication</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qapplication_8h_source.html#l00099\">qapplication.h:99</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_char_html_a1d2cb40842f1e304dfab7a28997e033a\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_char.html#a1d2cb40842f1e304dfab7a28997e033a\">QChar::fromLatin1</a></div><div class=\"ttdeci\">static QChar fromLatin1(char c)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qchar_8h_source.html#l00378\">qchar.h:378</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html_a4b120601ad3e766ffb8275290d29929f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html#a4b120601ad3e766ffb8275290d29929f\">QString::fromLatin1</a></div><div class=\"ttdeci\">static QString fromLatin1(const char *, int size=-1)</div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html_a3196e99dac9c3771a0293f077cef9a65\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html#a3196e99dac9c3771a0293f077cef9a65\">QString::toInt</a></div><div class=\"ttdeci\">int toInt(bool *ok=0, int base=10) const </div></div>\n\
<div class=\"ttc\" id=\"qcoreapplication_8h_html_af3bf03a2bf98820de7ae03bef13c7d07\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qcoreapplication_8h.html#af3bf03a2bf98820de7ae03bef13c7d07\">qApp</a></div><div class=\"ttdeci\">#define qApp</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qcoreapplication_8h_source.html#l00069\">qcoreapplication.h:69</a></div></div>\n\
<div class=\"ttc\" id=\"qcoreapplication_8h_html_a2b0353c11ecfd90ded6381a1c3939885\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qcoreapplication_8h.html#a2b0353c11ecfd90ded6381a1c3939885\">qAppName</a></div><div class=\"ttdeci\">Q_CORE_EXPORT QString qAppName()</div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html_a533122c15261965c9fdf6c92e1874eab\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html#a533122c15261965c9fdf6c92e1874eab\">QString::section</a></div><div class=\"ttdeci\">QString section(QChar sep, int start, int end=-1, SectionFlags flags=SectionDefault) const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00781\">qstring.h:781</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00083\">qstring.h:83</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_ad585a1393cfa368fa9dc3d8ebff640d5\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a></div><div class=\"ttdeci\">GLdouble s</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01173\">GLee.h:1173</a></div></div>\n\
</div><!-- fragment -->\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qmessagebox_8h_source.html#l00344\">344</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qmessagebox_8h_source.html\">qmessagebox.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
\n\
<p><a href=\"#!/url=./cpp_ref/qmessagebox_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";