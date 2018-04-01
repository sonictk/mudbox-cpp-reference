var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtCore/qvarlengtharray.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qvarlengtharray_8h.html\', tocPrefix);\n\
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
            <h1>QtCore/qvarlengtharray.h File Reference</h1>\n\
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
<div class=\"title\">qvarlengtharray.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"qvarlengtharray_8h.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"qvarlengtharray_8h.html#func-members\">Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontainerfwd_8h_source.html\">QtCore/qcontainerfwd.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qglobal_8h_source.html\">QtCore/qglobal.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qalgorithms_8h_source.html\">QtCore/qalgorithms.h</a>&gt;</code><br>\n\
<code>#include &lt;new&gt;</code><br>\n\
<code>#include &lt;string.h&gt;</code><br>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_pod_list.html\">QPodList&lt; T, Prealloc &gt;</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html\">QVarLengthArray&lt; T, Prealloc &gt;</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:a74bd102391362ae362a9da623ab3c4af\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename T , int Prealloc1, int Prealloc2&gt; </td></tr>\n\
<tr class=\"memitem:a74bd102391362ae362a9da623ab3c4af\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qvarlengtharray_8h.html#a74bd102391362ae362a9da623ab3c4af\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html\">QVarLengthArray</a>&lt; T, Prealloc1 &gt; &amp;l, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html\">QVarLengthArray</a>&lt; T, Prealloc2 &gt; &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>)</td></tr>\n\
<tr class=\"separator:a74bd102391362ae362a9da623ab3c4af\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2401c0ba7887478d8177c8df89e35fe1\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename T , int Prealloc1, int Prealloc2&gt; </td></tr>\n\
<tr class=\"memitem:a2401c0ba7887478d8177c8df89e35fe1\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qvarlengtharray_8h.html#a2401c0ba7887478d8177c8df89e35fe1\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html\">QVarLengthArray</a>&lt; T, Prealloc1 &gt; &amp;l, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html\">QVarLengthArray</a>&lt; T, Prealloc2 &gt; &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>)</td></tr>\n\
<tr class=\"separator:a2401c0ba7887478d8177c8df89e35fe1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a74bd102391362ae362a9da623ab3c4af\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html\">QVarLengthArray</a>&lt; T, Prealloc1 &gt; &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>l</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html\">QVarLengthArray</a>&lt; T, Prealloc2 &gt; &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qvarlengtharray_8h_source.html#l00383\">383</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qvarlengtharray_8h_source.html\">qvarlengtharray.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00384\"></a><span class=\"lineno\">  384</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00385\"></a><span class=\"lineno\">  385</span>&#160;    <span class=\"keywordflow\">if</span> (l.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html#ab8e4e3e2a7bf18888b71bdf9dda0770b\">size</a>() != r.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html#ab8e4e3e2a7bf18888b71bdf9dda0770b\">size</a>())</div>\n\
<div class=\"line\"><a name=\"l00386\"></a><span class=\"lineno\">  386</span>&#160;        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"><a name=\"l00387\"></a><span class=\"lineno\">  387</span>&#160;    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = 0; i &lt; l.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html#ab8e4e3e2a7bf18888b71bdf9dda0770b\">size</a>(); i++) {</div>\n\
<div class=\"line\"><a name=\"l00388\"></a><span class=\"lineno\">  388</span>&#160;        <span class=\"keywordflow\">if</span> (l.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html#a496f65637ef0f79ab8ca294b71cc2365\">at</a>(i) != r.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html#a496f65637ef0f79ab8ca294b71cc2365\">at</a>(i))</div>\n\
<div class=\"line\"><a name=\"l00389\"></a><span class=\"lineno\">  389</span>&#160;            <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"><a name=\"l00390\"></a><span class=\"lineno\">  390</span>&#160;    }</div>\n\
<div class=\"line\"><a name=\"l00391\"></a><span class=\"lineno\">  391</span>&#160;    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"><a name=\"l00392\"></a><span class=\"lineno\">  392</span>&#160;}</div>\n\
<div class=\"ttc\" id=\"class_q_var_length_array_html_a496f65637ef0f79ab8ca294b71cc2365\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_var_length_array.html#a496f65637ef0f79ab8ca294b71cc2365\">QVarLengthArray::at</a></div><div class=\"ttdeci\">const T &amp; at(int idx) const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qvarlengtharray_8h_source.html#l00113\">qvarlengtharray.h:113</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_var_length_array_html_ab8e4e3e2a7bf18888b71bdf9dda0770b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_var_length_array.html#ab8e4e3e2a7bf18888b71bdf9dda0770b\">QVarLengthArray::size</a></div><div class=\"ttdeci\">int size() const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qvarlengtharray_8h_source.html#l00096\">qvarlengtharray.h:96</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2401c0ba7887478d8177c8df89e35fe1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html\">QVarLengthArray</a>&lt; T, Prealloc1 &gt; &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>l</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_var_length_array.html\">QVarLengthArray</a>&lt; T, Prealloc2 &gt; &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qvarlengtharray_8h_source.html#l00395\">395</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qvarlengtharray_8h_source.html\">qvarlengtharray.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00396\"></a><span class=\"lineno\">  396</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00397\"></a><span class=\"lineno\">  397</span>&#160;    <span class=\"keywordflow\">return</span> !(l == <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>);</div>\n\
<div class=\"line\"><a name=\"l00398\"></a><span class=\"lineno\">  398</span>&#160;}</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a28666c5860e73f899079b4ee29200aec\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a></div><div class=\"ttdeci\">GLdouble GLdouble GLdouble r</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01189\">GLee.h:1189</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
\n\
<p><a href=\"#!/url=./cpp_ref/qvarlengtharray_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";