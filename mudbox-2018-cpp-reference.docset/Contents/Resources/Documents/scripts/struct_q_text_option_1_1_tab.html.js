var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QTextOption::Tab Struct Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_q_text_option_1_1_tab.html\', tocPrefix);\n\
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
            <h1>QTextOption::Tab Struct Reference</h1>\n\
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
<div class=\"title\">QTextOption::Tab Struct Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"struct_q_text_option_1_1_tab.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"struct_q_text_option_1_1_tab.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html\">qtextoption.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00069\">69</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html\">qtextoption.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a033e7f3c362c09a38ef26b2afb8ad9fb\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a033e7f3c362c09a38ef26b2afb8ad9fb\">Tab</a> ()</td></tr>\n\
<tr class=\"separator:a033e7f3c362c09a38ef26b2afb8ad9fb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9e40f508ca8defcc68ebec08e6103bc4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a9e40f508ca8defcc68ebec08e6103bc4\">Tab</a> (qreal pos, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_option.html#a6d0b33e703e1291d0b60d4fe5a5e12cc\">TabType</a> tabType, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_char.html\">QChar</a> delim=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_char.html\">QChar</a>())</td></tr>\n\
<tr class=\"separator:a9e40f508ca8defcc68ebec08e6103bc4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a82da03a3d56db293310a6db55aba5e12\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a82da03a3d56db293310a6db55aba5e12\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html\">Tab</a> &amp;other) const </td></tr>\n\
<tr class=\"separator:a82da03a3d56db293310a6db55aba5e12\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4cbfc4292eba3a77b4ad23fb93b2fe0e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a4cbfc4292eba3a77b4ad23fb93b2fe0e\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html\">Tab</a> &amp;other) const </td></tr>\n\
<tr class=\"separator:a4cbfc4292eba3a77b4ad23fb93b2fe0e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a8c54cc407e835234ed340157f82a272c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">qreal&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a8c54cc407e835234ed340157f82a272c\">position</a></td></tr>\n\
<tr class=\"separator:a8c54cc407e835234ed340157f82a272c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adc744b0ebe33d540c612c8529b2e1975\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_option.html#a6d0b33e703e1291d0b60d4fe5a5e12cc\">TabType</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#adc744b0ebe33d540c612c8529b2e1975\">type</a></td></tr>\n\
<tr class=\"separator:adc744b0ebe33d540c612c8529b2e1975\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a60aad97e8df5705931fcf4006a08d3b2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_char.html\">QChar</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a60aad97e8df5705931fcf4006a08d3b2\">delimiter</a></td></tr>\n\
<tr class=\"separator:a60aad97e8df5705931fcf4006a08d3b2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a033e7f3c362c09a38ef26b2afb8ad9fb\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html\">Tab</a> </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00070\">70</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html\">qtextoption.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;: <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a8c54cc407e835234ed340157f82a272c\">position</a>(80), <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#adc744b0ebe33d540c612c8529b2e1975\">type</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_text_option.html#a6d0b33e703e1291d0b60d4fe5a5e12cca1eed422fe072cf789e402ed34b47d32e\">QTextOption::LeftTab</a>) { }</div>\n\
<div class=\"ttc\" id=\"class_q_text_option_html_a6d0b33e703e1291d0b60d4fe5a5e12cca1eed422fe072cf789e402ed34b47d32e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_text_option.html#a6d0b33e703e1291d0b60d4fe5a5e12cca1eed422fe072cf789e402ed34b47d32e\">QTextOption::LeftTab</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00063\">qtextoption.h:63</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_text_option_1_1_tab_html_adc744b0ebe33d540c612c8529b2e1975\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#adc744b0ebe33d540c612c8529b2e1975\">QTextOption::Tab::type</a></div><div class=\"ttdeci\">TabType type</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00085\">qtextoption.h:85</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_text_option_1_1_tab_html_a8c54cc407e835234ed340157f82a272c\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a8c54cc407e835234ed340157f82a272c\">QTextOption::Tab::position</a></div><div class=\"ttdeci\">qreal position</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00084\">qtextoption.h:84</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9e40f508ca8defcc68ebec08e6103bc4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html\">Tab</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">qreal&#160;</td>\n\
          <td class=\"paramname\"><em>pos</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_option.html#a6d0b33e703e1291d0b60d4fe5a5e12cc\">TabType</a>&#160;</td>\n\
          <td class=\"paramname\"><em>tabType</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_char.html\">QChar</a>&#160;</td>\n\
          <td class=\"paramname\"><em>delim</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_char.html\">QChar</a>()</code>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00071\">71</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html\">qtextoption.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;            : <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a8c54cc407e835234ed340157f82a272c\">position</a>(pos), <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#adc744b0ebe33d540c612c8529b2e1975\">type</a>(tabType), <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a60aad97e8df5705931fcf4006a08d3b2\">delimiter</a>(delim) {}</div>\n\
<div class=\"ttc\" id=\"struct_q_text_option_1_1_tab_html_a60aad97e8df5705931fcf4006a08d3b2\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a60aad97e8df5705931fcf4006a08d3b2\">QTextOption::Tab::delimiter</a></div><div class=\"ttdeci\">QChar delimiter</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00086\">qtextoption.h:86</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_text_option_1_1_tab_html_adc744b0ebe33d540c612c8529b2e1975\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#adc744b0ebe33d540c612c8529b2e1975\">QTextOption::Tab::type</a></div><div class=\"ttdeci\">TabType type</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00085\">qtextoption.h:85</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_text_option_1_1_tab_html_a8c54cc407e835234ed340157f82a272c\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a8c54cc407e835234ed340157f82a272c\">QTextOption::Tab::position</a></div><div class=\"ttdeci\">qreal position</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00084\">qtextoption.h:84</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a82da03a3d56db293310a6db55aba5e12\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html\">Tab</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00074\">74</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html\">qtextoption.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;                                                       {</div>\n\
<div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;            <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a> == other.type</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;                   &amp;&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/qmatrix_8h.html#ae512119a2dd03dcc657fcf56c184c1e2\">qFuzzyCompare</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a8c54cc407e835234ed340157f82a272c\">position</a>, other.position)</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;                   &amp;&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a60aad97e8df5705931fcf4006a08d3b2\">delimiter</a> == other.delimiter;</div>\n\
<div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;        }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a63267399cd2a2ee217572c11d2e54f07\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a></div><div class=\"ttdeci\">GLuint GLuint GLsizei GLenum type</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00872\">GLee.h:872</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_text_option_1_1_tab_html_a60aad97e8df5705931fcf4006a08d3b2\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a60aad97e8df5705931fcf4006a08d3b2\">QTextOption::Tab::delimiter</a></div><div class=\"ttdeci\">QChar delimiter</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00086\">qtextoption.h:86</a></div></div>\n\
<div class=\"ttc\" id=\"qmatrix_8h_html_ae512119a2dd03dcc657fcf56c184c1e2\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qmatrix_8h.html#ae512119a2dd03dcc657fcf56c184c1e2\">qFuzzyCompare</a></div><div class=\"ttdeci\">bool qFuzzyCompare(const QMatrix &amp;m1, const QMatrix &amp;m2)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qmatrix_8h_source.html#l00172\">qmatrix.h:172</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_text_option_1_1_tab_html_a8c54cc407e835234ed340157f82a272c\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a8c54cc407e835234ed340157f82a272c\">QTextOption::Tab::position</a></div><div class=\"ttdeci\">qreal position</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00084\">qtextoption.h:84</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4cbfc4292eba3a77b4ad23fb93b2fe0e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html\">Tab</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00080\">80</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html\">qtextoption.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;                                                       {</div>\n\
<div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;            <span class=\"keywordflow\">return</span> !<a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a82da03a3d56db293310a6db55aba5e12\">operator==</a>(other);</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;        }</div>\n\
<div class=\"ttc\" id=\"struct_q_text_option_1_1_tab_html_a82da03a3d56db293310a6db55aba5e12\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#a82da03a3d56db293310a6db55aba5e12\">QTextOption::Tab::operator==</a></div><div class=\"ttdeci\">bool operator==(const Tab &amp;other) const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00074\">qtextoption.h:74</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a8c54cc407e835234ed340157f82a272c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">qreal position</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00084\">84</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html\">qtextoption.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"adc744b0ebe33d540c612c8529b2e1975\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_option.html#a6d0b33e703e1291d0b60d4fe5a5e12cc\">TabType</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00085\">85</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html\">qtextoption.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a60aad97e8df5705931fcf4006a08d3b2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_char.html\">QChar</a> delimiter</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html#l00086\">86</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html\">qtextoption.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this struct was generated from the following file:<ul>\n\
<li>QtGui/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtextoption_8h_source.html\">qtextoption.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";