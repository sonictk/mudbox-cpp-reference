var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QConcatenable&lt; QByteArray &gt; Struct Template Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_q_concatenable_3_01_q_byte_array_01_4.html\', tocPrefix);\n\
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
            <h1>QConcatenable&lt; QByteArray &gt; Struct Template Reference</h1>\n\
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
<div class=\"title\">QConcatenable&lt; QByteArray &gt; Struct Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"struct_q_concatenable_3_01_q_byte_array_01_4.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"struct_q_concatenable_3_01_q_byte_array_01_4.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;&gt;<br>\n\
struct QConcatenable&lt; QByteArray &gt;</h3>\n\
\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00362\">362</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for QConcatenable&lt; QByteArray &gt;:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/struct_q_concatenable_3_01_q_byte_array_01_4.png\" usemap=\"#QConcatenable&lt; QByteArray &gt;_map\" alt=\"\">\n\
  <map id=\"QConcatenable&lt; QByteArray &gt;_map\" name=\"QConcatenable&lt; QByteArray &gt;_map\">\n\
<area href=\"struct_q_abstract_concatenable.html\" alt=\"QAbstractConcatenable\" shape=\"rect\" coords=\"0,0,192,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:ad63240694c6dc2a28c24bfc2db90ad7a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\">{ <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_byte_array_01_4.html#ad63240694c6dc2a28c24bfc2db90ad7aa2ce354dc7fc8a895b778f45416e12a27\">ExactSize</a> = false\n\
 }<tr class=\"separator:ad63240694c6dc2a28c24bfc2db90ad7a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"memitem:aaf838fc6fe9ed85e36ed26c190025271\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_byte_array_01_4.html#aaf838fc6fe9ed85e36ed26c190025271\">type</a></td></tr>\n\
<tr class=\"separator:aaf838fc6fe9ed85e36ed26c190025271\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aafc16e4531e94ace2651196288155e02\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_byte_array_01_4.html#aafc16e4531e94ace2651196288155e02\">ConvertTo</a></td></tr>\n\
<tr class=\"separator:aafc16e4531e94ace2651196288155e02\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a79049a761cdfbb97d8b153ad6eecbbea\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_byte_array_01_4.html#a79049a761cdfbb97d8b153ad6eecbbea\">size</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> &amp;ba)</td></tr>\n\
<tr class=\"separator:a79049a761cdfbb97d8b153ad6eecbbea\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af3855686f3bd8295046bddd1f17c0e00\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_byte_array_01_4.html#af3855686f3bd8295046bddd1f17c0e00\">appendTo</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> &amp;ba, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_char.html\">QChar</a> *&amp;out)</td></tr>\n\
<tr class=\"separator:af3855686f3bd8295046bddd1f17c0e00\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af87ee6afd4a5d01d6c5d08bcff97f817\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_byte_array_01_4.html#af87ee6afd4a5d01d6c5d08bcff97f817\">appendTo</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> &amp;ba, char *&amp;out)</td></tr>\n\
<tr class=\"separator:af87ee6afd4a5d01d6c5d08bcff97f817\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Typedef Documentation</h2>\n\
<a class=\"anchor\" id=\"aaf838fc6fe9ed85e36ed26c190025271\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_byte_array_01_4.html#aaf838fc6fe9ed85e36ed26c190025271\">type</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00364\">364</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aafc16e4531e94ace2651196288155e02\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_byte_array_01_4.html#aafc16e4531e94ace2651196288155e02\">ConvertTo</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00365\">365</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"ad63240694c6dc2a28c24bfc2db90ad7a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">anonymous enum</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ad63240694c6dc2a28c24bfc2db90ad7aa2ce354dc7fc8a895b778f45416e12a27\"></a>ExactSize&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
</table>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00366\">366</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00366\"></a><span class=\"lineno\">  366</span>&#160;{ <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_byte_array_01_4.html#ad63240694c6dc2a28c24bfc2db90ad7aa2ce354dc7fc8a895b778f45416e12a27\">ExactSize</a> = <span class=\"keyword\">false</span> };</div>\n\
<div class=\"ttc\" id=\"struct_q_concatenable_3_01_q_byte_array_01_4_html_ad63240694c6dc2a28c24bfc2db90ad7aa2ce354dc7fc8a895b778f45416e12a27\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_concatenable_3_01_q_byte_array_01_4.html#ad63240694c6dc2a28c24bfc2db90ad7aa2ce354dc7fc8a895b778f45416e12a27\">QConcatenable&lt; QByteArray &gt;::ExactSize</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00366\">qstringbuilder.h:366</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a79049a761cdfbb97d8b153ad6eecbbea\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">size</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>ba</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00367\">367</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00367\"></a><span class=\"lineno\">  367</span>&#160;{ <span class=\"keywordflow\">return</span> ba.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html#ab8e4e3e2a7bf18888b71bdf9dda0770b\">size</a>(); }</div>\n\
<div class=\"ttc\" id=\"class_q_byte_array_html_ab8e4e3e2a7bf18888b71bdf9dda0770b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_byte_array.html#ab8e4e3e2a7bf18888b71bdf9dda0770b\">QByteArray::size</a></div><div class=\"ttdeci\">int size() const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qbytearray_8h_source.html#l00402\">qbytearray.h:402</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af3855686f3bd8295046bddd1f17c0e00\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> appendTo </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>ba</em>, </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00369\">369</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00370\"></a><span class=\"lineno\">  370</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00371\"></a><span class=\"lineno\">  371</span>&#160;        <span class=\"comment\">// adding 1 because convertFromAscii expects the size including the null-termination</span></div>\n\
<div class=\"line\"><a name=\"l00372\"></a><span class=\"lineno\">  372</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_abstract_concatenable.html#af70832224cf1282c340eef611c2d1c32\">QAbstractConcatenable::convertFromAscii</a>(ba.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html#acd2173722996016205933aa3053f895f\">constData</a>(), ba.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html#ab8e4e3e2a7bf18888b71bdf9dda0770b\">size</a>() + 1, out);</div>\n\
<div class=\"line\"><a name=\"l00373\"></a><span class=\"lineno\">  373</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"class_q_byte_array_html_acd2173722996016205933aa3053f895f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_byte_array.html#acd2173722996016205933aa3053f895f\">QByteArray::constData</a></div><div class=\"ttdeci\">const char * constData() const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qbytearray_8h_source.html#l00433\">qbytearray.h:433</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_abstract_concatenable_html_af70832224cf1282c340eef611c2d1c32\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_abstract_concatenable.html#af70832224cf1282c340eef611c2d1c32\">QAbstractConcatenable::convertFromAscii</a></div><div class=\"ttdeci\">static void convertFromAscii(const char *a, int len, QChar *&amp;out)</div></div>\n\
<div class=\"ttc\" id=\"class_q_byte_array_html_ab8e4e3e2a7bf18888b71bdf9dda0770b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_byte_array.html#ab8e4e3e2a7bf18888b71bdf9dda0770b\">QByteArray::size</a></div><div class=\"ttdeci\">int size() const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qbytearray_8h_source.html#l00402\">qbytearray.h:402</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af87ee6afd4a5d01d6c5d08bcff97f817\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> appendTo </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>ba</em>, </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html#l00375\">375</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringbuilder_8h_source.html\">qstringbuilder.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00376\"></a><span class=\"lineno\">  376</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00377\"></a><span class=\"lineno\">  377</span>&#160;        <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a> = ba.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html#acd2173722996016205933aa3053f895f\">constData</a>();</div>\n\
<div class=\"line\"><a name=\"l00378\"></a><span class=\"lineno\">  378</span>&#160;        <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> * <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a432111147038972f06e049e18a837002\">end</a> = ba.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html#a062b392cec3ccf3ed7466cdff0b92d8e\">end</a>();</div>\n\
<div class=\"line\"><a name=\"l00379\"></a><span class=\"lineno\">  379</span>&#160;        <span class=\"keywordflow\">while</span> (a != end)</div>\n\
<div class=\"line\"><a name=\"l00380\"></a><span class=\"lineno\">  380</span>&#160;            *out++ = *a++;</div>\n\
<div class=\"line\"><a name=\"l00381\"></a><span class=\"lineno\">  381</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"class_q_byte_array_html_a062b392cec3ccf3ed7466cdff0b92d8e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_byte_array.html#a062b392cec3ccf3ed7466cdff0b92d8e\">QByteArray::end</a></div><div class=\"ttdeci\">iterator end()</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qbytearray_8h_source.html#l00499\">qbytearray.h:499</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_byte_array_html_acd2173722996016205933aa3053f895f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_byte_array.html#acd2173722996016205933aa3053f895f\">QByteArray::constData</a></div><div class=\"ttdeci\">const char * constData() const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qbytearray_8h_source.html#l00433\">qbytearray.h:433</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a432111147038972f06e049e18a837002\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a432111147038972f06e049e18a837002\">end</a></div><div class=\"ttdeci\">GLuint GLuint end</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00872\">GLee.h:872</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_ac8729153468b5dcf13f971b21d84d4e5\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a></div><div class=\"ttdeci\">GLubyte GLubyte GLubyte a</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05404\">GLee.h:5404</a></div></div>\n\
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