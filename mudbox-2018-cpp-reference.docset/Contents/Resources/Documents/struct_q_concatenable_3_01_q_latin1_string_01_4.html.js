var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QConcatenable&lt; QLatin1String &gt; Struct Template Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_q_concatenable_3_01_q_latin1_string_01_4.html\', tocPrefix);\n\
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
            <h1>QConcatenable&lt; QLatin1String &gt; Struct Template Reference</h1>\n\
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
<div class=\"title\">QConcatenable&lt; QLatin1String &gt; Struct Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"struct_q_concatenable_3_01_q_latin1_string_01_4.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"struct_q_concatenable_3_01_q_latin1_string_01_4.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;&gt;<br>\n\
struct QConcatenable&lt; QLatin1String &gt;</h3>\n\
\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00232\">232</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:a9e93d8eae633734dfeb29e24a1f3a7c0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\">{ <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_latin1_string_01_4.html#a9e93d8eae633734dfeb29e24a1f3a7c0a2ce354dc7fc8a895b778f45416e12a27\">ExactSize</a> = true\n\
 }<tr class=\"separator:a9e93d8eae633734dfeb29e24a1f3a7c0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"memitem:a55245071bf93517a3f633a44109e5c89\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html\">QLatin1String</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_latin1_string_01_4.html#a55245071bf93517a3f633a44109e5c89\">type</a></td></tr>\n\
<tr class=\"separator:a55245071bf93517a3f633a44109e5c89\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7385744d815a3d846100200a1dc2fa81\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_latin1_string_01_4.html#a7385744d815a3d846100200a1dc2fa81\">ConvertTo</a></td></tr>\n\
<tr class=\"separator:a7385744d815a3d846100200a1dc2fa81\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a08ab03fb7dea8dda759193f2adcd1d4b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_latin1_string_01_4.html#a08ab03fb7dea8dda759193f2adcd1d4b\">size</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html\">QLatin1String</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a>)</td></tr>\n\
<tr class=\"separator:a08ab03fb7dea8dda759193f2adcd1d4b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abc1da15668a5e3962991153523c809c4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_latin1_string_01_4.html#abc1da15668a5e3962991153523c809c4\">appendTo</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html\">QLatin1String</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_char.html\">QChar</a> *&amp;out)</td></tr>\n\
<tr class=\"separator:abc1da15668a5e3962991153523c809c4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a244a7582ef790855ce4094f1f7073e4f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_latin1_string_01_4.html#a244a7582ef790855ce4094f1f7073e4f\">appendTo</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html\">QLatin1String</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a>, char *&amp;out)</td></tr>\n\
<tr class=\"separator:a244a7582ef790855ce4094f1f7073e4f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Typedef Documentation</h2>\n\
<a class=\"anchor\" id=\"a55245071bf93517a3f633a44109e5c89\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html\">QLatin1String</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_latin1_string_01_4.html#a55245071bf93517a3f633a44109e5c89\">type</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00234\">234</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7385744d815a3d846100200a1dc2fa81\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_latin1_string_01_4.html#a7385744d815a3d846100200a1dc2fa81\">ConvertTo</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00235\">235</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"a9e93d8eae633734dfeb29e24a1f3a7c0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">anonymous enum</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a9e93d8eae633734dfeb29e24a1f3a7c0a2ce354dc7fc8a895b778f45416e12a27\"></a>ExactSize&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
</table>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00236\">236</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00236\"></a><span class=\"lineno\">  236</span>&#160;{ <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_latin1_string_01_4.html#a9e93d8eae633734dfeb29e24a1f3a7c0a2ce354dc7fc8a895b778f45416e12a27\">ExactSize</a> = <span class=\"keyword\">true</span> };</div>\n\
<div class=\"ttc\" id=\"struct_q_concatenable_3_01_q_latin1_string_01_4_html_a9e93d8eae633734dfeb29e24a1f3a7c0a2ce354dc7fc8a895b778f45416e12a27\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_latin1_string_01_4.html#a9e93d8eae633734dfeb29e24a1f3a7c0a2ce354dc7fc8a895b778f45416e12a27\">QConcatenable&lt; QLatin1String &gt;::ExactSize</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00236\">qstringbuilder.h:236</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a08ab03fb7dea8dda759193f2adcd1d4b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">size</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html\">QLatin1String</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>a</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00237\">237</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00237\"></a><span class=\"lineno\">  237</span>&#160;{ <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qbytearray_8h.html#a11e5896f8590cc97ce6be8f23f13c5f0\">qstrlen</a>(a.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html#a09fbe42f18f9a02a40c43f16441d91fe\">latin1</a>()); }</div>\n\
<div class=\"ttc\" id=\"class_q_latin1_string_html_a09fbe42f18f9a02a40c43f16441d91fe\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_latin1_string.html#a09fbe42f18f9a02a40c43f16441d91fe\">QLatin1String::latin1</a></div><div class=\"ttdeci\">const char * latin1() const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00661\">qstring.h:661</a></div></div>\n\
<div class=\"ttc\" id=\"qbytearray_8h_html_a11e5896f8590cc97ce6be8f23f13c5f0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qbytearray_8h.html#a11e5896f8590cc97ce6be8f23f13c5f0\">qstrlen</a></div><div class=\"ttdeci\">uint qstrlen(const char *str)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qbytearray_8h_source.html#l00079\">qbytearray.h:79</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"abc1da15668a5e3962991153523c809c4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> appendTo </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html\">QLatin1String</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>a</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_char.html\">QChar</a> *&amp;&#160;</td>\n\
          <td class=\"paramname\"><em>out</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00238\">238</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00239\"></a><span class=\"lineno\">  239</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00240\"></a><span class=\"lineno\">  240</span>&#160;        <span class=\"keywordflow\">for</span> (<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a> = a.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html#a09fbe42f18f9a02a40c43f16441d91fe\">latin1</a>(); *<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a>; )</div>\n\
<div class=\"line\"><a name=\"l00241\"></a><span class=\"lineno\">  241</span>&#160;            *out++ = <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_latin1_char.html\">QLatin1Char</a>(*<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a>++);</div>\n\
<div class=\"line\"><a name=\"l00242\"></a><span class=\"lineno\">  242</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"class_q_latin1_string_html_a09fbe42f18f9a02a40c43f16441d91fe\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_latin1_string.html#a09fbe42f18f9a02a40c43f16441d91fe\">QLatin1String::latin1</a></div><div class=\"ttdeci\">const char * latin1() const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00661\">qstring.h:661</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_latin1_char_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_latin1_char.html\">QLatin1Char</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qchar_8h_source.html#l00055\">qchar.h:55</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_ad585a1393cfa368fa9dc3d8ebff640d5\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a></div><div class=\"ttdeci\">GLdouble s</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01173\">GLee.h:1173</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a244a7582ef790855ce4094f1f7073e4f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> appendTo </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html\">QLatin1String</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>a</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">char *&amp;&#160;</td>\n\
          <td class=\"paramname\"><em>out</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00243\">243</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00244\"></a><span class=\"lineno\">  244</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00245\"></a><span class=\"lineno\">  245</span>&#160;        <span class=\"keywordflow\">for</span> (<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a> = a.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_latin1_string.html#a09fbe42f18f9a02a40c43f16441d91fe\">latin1</a>(); *<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a>; )</div>\n\
<div class=\"line\"><a name=\"l00246\"></a><span class=\"lineno\">  246</span>&#160;            *out++ = *<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a>++;</div>\n\
<div class=\"line\"><a name=\"l00247\"></a><span class=\"lineno\">  247</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"class_q_latin1_string_html_a09fbe42f18f9a02a40c43f16441d91fe\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_latin1_string.html#a09fbe42f18f9a02a40c43f16441d91fe\">QLatin1String::latin1</a></div><div class=\"ttdeci\">const char * latin1() const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00661\">qstring.h:661</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_ad585a1393cfa368fa9dc3d8ebff640d5\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a></div><div class=\"ttdeci\">GLdouble s</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01173\">GLee.h:1173</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<hr>The documentation for this struct was generated from the following file:<ul>\n\
<li>QtCore/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";