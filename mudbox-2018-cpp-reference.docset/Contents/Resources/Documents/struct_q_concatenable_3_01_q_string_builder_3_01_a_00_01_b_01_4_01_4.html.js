var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QConcatenable&lt; QStringBuilder&lt; A, B &gt; &gt; Struct Template Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html\', tocPrefix);\n\
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
            <h1>QConcatenable&lt; QStringBuilder&lt; A, B &gt; &gt; Struct Template Reference</h1>\n\
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
<div class=\"title\">QConcatenable&lt; QStringBuilder&lt; A, B &gt; &gt; Struct Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;typename A, typename B&gt;<br>\n\
struct QConcatenable&lt; QStringBuilder&lt; A, B &gt; &gt;</h3>\n\
\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00392\">392</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:a7859c0a3efa8b1c360f5c2376baf051e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\">{ <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#a7859c0a3efa8b1c360f5c2376baf051ea2ce354dc7fc8a895b778f45416e12a27\">ExactSize</a> = QConcatenable&lt;A&gt;::ExactSize &amp;&amp; QConcatenable&lt;B&gt;::ExactSize\n\
 }<tr class=\"separator:a7859c0a3efa8b1c360f5c2376baf051e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"memitem:afc66c45d81021fe818b8facac38fa67b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_builder.html\">QStringBuilder</a>&lt; A, B &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#afc66c45d81021fe818b8facac38fa67b\">type</a></td></tr>\n\
<tr class=\"separator:afc66c45d81021fe818b8facac38fa67b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1571b4474444322623dfb320ac8698f3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_string_builder_1_1_convert_to_type_helper.html\">QtStringBuilder::ConvertToTypeHelper</a>&lt; typename <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable.html\">QConcatenable</a>&lt; A &gt;::<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#a1571b4474444322623dfb320ac8698f3\">ConvertTo</a>, typename <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable.html\">QConcatenable</a>&lt; B &gt;::<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#a1571b4474444322623dfb320ac8698f3\">ConvertTo</a> &gt;::<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#a1571b4474444322623dfb320ac8698f3\">ConvertTo</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#a1571b4474444322623dfb320ac8698f3\">ConvertTo</a></td></tr>\n\
<tr class=\"separator:a1571b4474444322623dfb320ac8698f3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ac69c1a4b5cc55f8807f2ebada9c3d6f9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#ac69c1a4b5cc55f8807f2ebada9c3d6f9\">size</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#afc66c45d81021fe818b8facac38fa67b\">type</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a>)</td></tr>\n\
<tr class=\"separator:ac69c1a4b5cc55f8807f2ebada9c3d6f9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a706c092484b0c2952b11d4fcef7c56ca\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename T &gt; </td></tr>\n\
<tr class=\"memitem:a706c092484b0c2952b11d4fcef7c56ca\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#a706c092484b0c2952b11d4fcef7c56ca\">appendTo</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#afc66c45d81021fe818b8facac38fa67b\">type</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a>, T *&amp;out)</td></tr>\n\
<tr class=\"separator:a706c092484b0c2952b11d4fcef7c56ca\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Typedef Documentation</h2>\n\
<a class=\"anchor\" id=\"afc66c45d81021fe818b8facac38fa67b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_builder.html\">QStringBuilder</a>&lt;A, B&gt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#afc66c45d81021fe818b8facac38fa67b\">type</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00394\">394</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1571b4474444322623dfb320ac8698f3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_string_builder_1_1_convert_to_type_helper.html\">QtStringBuilder::ConvertToTypeHelper</a>&lt;typename <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable.html\">QConcatenable</a>&lt;A&gt;::<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#a1571b4474444322623dfb320ac8698f3\">ConvertTo</a>, typename <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable.html\">QConcatenable</a>&lt;B&gt;::<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#a1571b4474444322623dfb320ac8698f3\">ConvertTo</a>&gt;::<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#a1571b4474444322623dfb320ac8698f3\">ConvertTo</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#a1571b4474444322623dfb320ac8698f3\">ConvertTo</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00395\">395</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"a7859c0a3efa8b1c360f5c2376baf051e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">anonymous enum</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a7859c0a3efa8b1c360f5c2376baf051ea2ce354dc7fc8a895b778f45416e12a27\"></a>ExactSize&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
</table>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00396\">396</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00396\"></a><span class=\"lineno\">  396</span>&#160;{ <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#a7859c0a3efa8b1c360f5c2376baf051ea2ce354dc7fc8a895b778f45416e12a27\">ExactSize</a> = <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_concatenable.html\">QConcatenable&lt;A&gt;::ExactSize</a> &amp;&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_concatenable.html\">QConcatenable&lt;B&gt;::ExactSize</a> };</div>\n\
<div class=\"ttc\" id=\"struct_q_concatenable_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_concatenable.html\">QConcatenable</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00109\">qstringbuilder.h:109</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4_html_a7859c0a3efa8b1c360f5c2376baf051ea2ce354dc7fc8a895b778f45416e12a27\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#a7859c0a3efa8b1c360f5c2376baf051ea2ce354dc7fc8a895b778f45416e12a27\">QConcatenable&lt; QStringBuilder&lt; A, B &gt; &gt;::ExactSize</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00396\">qstringbuilder.h:396</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ac69c1a4b5cc55f8807f2ebada9c3d6f9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">size</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#afc66c45d81021fe818b8facac38fa67b\">type</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>p</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00397\">397</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00398\"></a><span class=\"lineno\">  398</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00399\"></a><span class=\"lineno\">  399</span>&#160;        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">QConcatenable&lt;A&gt;::size</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a>.a) + <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">QConcatenable&lt;B&gt;::size</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a>.b);</div>\n\
<div class=\"line\"><a name=\"l00400\"></a><span class=\"lineno\">  400</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_aa5367c14d90f462230c2611b81b41d23\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a></div><div class=\"ttdeci\">GLfloat GLfloat p</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05416\">GLee.h:5416</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a8f853268a6a93ade1ff556b79420cda3\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">size</a></div><div class=\"ttdeci\">GLsizeiptr size</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01561\">GLee.h:1561</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a706c092484b0c2952b11d4fcef7c56ca\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> appendTo </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_string_builder_3_01_a_00_01_b_01_4_01_4.html#afc66c45d81021fe818b8facac38fa67b\">type</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>p</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">T *&amp;&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00401\">401</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00402\"></a><span class=\"lineno\">  402</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00403\"></a><span class=\"lineno\">  403</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_concatenable.html\">QConcatenable&lt;A&gt;::appendTo</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a>.a, out);</div>\n\
<div class=\"line\"><a name=\"l00404\"></a><span class=\"lineno\">  404</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_concatenable.html\">QConcatenable&lt;B&gt;::appendTo</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a>.b, out);</div>\n\
<div class=\"line\"><a name=\"l00405\"></a><span class=\"lineno\">  405</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"struct_q_concatenable_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_concatenable.html\">QConcatenable</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00109\">qstringbuilder.h:109</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_aa5367c14d90f462230c2611b81b41d23\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a></div><div class=\"ttdeci\">GLfloat GLfloat p</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05416\">GLee.h:5416</a></div></div>\n\
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