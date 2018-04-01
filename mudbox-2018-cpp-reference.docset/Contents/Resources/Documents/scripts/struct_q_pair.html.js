var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QPair&lt; T1, T2 &gt; Struct Template Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_q_pair.html\', tocPrefix);\n\
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
            <h1>QPair&lt; T1, T2 &gt; Struct Template Reference</h1>\n\
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
<div class=\"title\">QPair&lt; T1, T2 &gt; Struct Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"struct_q_pair.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"struct_q_pair.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"struct_q_pair.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qabstracteventdispatcher_8h_source.html\">qabstracteventdispatcher.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;class T1, class T2&gt;<br>\n\
struct QPair&lt; T1, T2 &gt;</h3>\n\
\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qabstracteventdispatcher_8h_source.html#l00056\">56</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qabstracteventdispatcher_8h_source.html\">qabstracteventdispatcher.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:a2ff1057d713f47338b9b6c4a60e5ab87\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">typedef T1&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a2ff1057d713f47338b9b6c4a60e5ab87\">first_type</a></td></tr>\n\
<tr class=\"separator:a2ff1057d713f47338b9b6c4a60e5ab87\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a75b41637f35c1f6bbf8ec5c0ebb79728\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">typedef T2&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a75b41637f35c1f6bbf8ec5c0ebb79728\">second_type</a></td></tr>\n\
<tr class=\"separator:a75b41637f35c1f6bbf8ec5c0ebb79728\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a12f61214ad520fc7f871a004dbce4358\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a12f61214ad520fc7f871a004dbce4358\">QPair</a> ()</td></tr>\n\
<tr class=\"separator:a12f61214ad520fc7f871a004dbce4358\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1a06fccd216756af33087542e1d82053\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a1a06fccd216756af33087542e1d82053\">QPair</a> (const T1 &amp;t1, const T2 &amp;t2)</td></tr>\n\
<tr class=\"separator:a1a06fccd216756af33087542e1d82053\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a90e1864c604e125917992189dea83383\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html\">QPair</a>&lt; T1, T2 &gt; &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a90e1864c604e125917992189dea83383\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html\">QPair</a>&lt; T1, T2 &gt; &amp;other)</td></tr>\n\
<tr class=\"separator:a90e1864c604e125917992189dea83383\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:ae885a6822c40e26649c9dd8b476942f8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">T1&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html#ae885a6822c40e26649c9dd8b476942f8\">first</a></td></tr>\n\
<tr class=\"separator:ae885a6822c40e26649c9dd8b476942f8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9a8a97f32d498c09c0f1f82c8a67bd6f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">T2&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a9a8a97f32d498c09c0f1f82c8a67bd6f\">second</a></td></tr>\n\
<tr class=\"separator:a9a8a97f32d498c09c0f1f82c8a67bd6f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Typedef Documentation</h2>\n\
<a class=\"anchor\" id=\"a2ff1057d713f47338b9b6c4a60e5ab87\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">typedef T1 <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a2ff1057d713f47338b9b6c4a60e5ab87\">first_type</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00056\">56</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html\">qpair.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a75b41637f35c1f6bbf8ec5c0ebb79728\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">typedef T2 <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a75b41637f35c1f6bbf8ec5c0ebb79728\">second_type</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00057\">57</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html\">qpair.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a12f61214ad520fc7f871a004dbce4358\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html\">QPair</a> </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00059\">59</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html\">qpair.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;: <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_pair.html#ae885a6822c40e26649c9dd8b476942f8\">first</a>(T1()), <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a9a8a97f32d498c09c0f1f82c8a67bd6f\">second</a>(T2()) {}</div>\n\
<div class=\"ttc\" id=\"struct_q_pair_html_ae885a6822c40e26649c9dd8b476942f8\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_pair.html#ae885a6822c40e26649c9dd8b476942f8\">QPair::first</a></div><div class=\"ttdeci\">T1 first</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00065\">qpair.h:65</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_pair_html_a9a8a97f32d498c09c0f1f82c8a67bd6f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_pair.html#a9a8a97f32d498c09c0f1f82c8a67bd6f\">QPair::second</a></div><div class=\"ttdeci\">T2 second</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00066\">qpair.h:66</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1a06fccd216756af33087542e1d82053\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html\">QPair</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const T1 &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>t1</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const T2 &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>t2</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00060\">60</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html\">qpair.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;: <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_pair.html#ae885a6822c40e26649c9dd8b476942f8\">first</a>(t1), <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a9a8a97f32d498c09c0f1f82c8a67bd6f\">second</a>(t2) {}</div>\n\
<div class=\"ttc\" id=\"struct_q_pair_html_ae885a6822c40e26649c9dd8b476942f8\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_pair.html#ae885a6822c40e26649c9dd8b476942f8\">QPair::first</a></div><div class=\"ttdeci\">T1 first</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00065\">qpair.h:65</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_pair_html_a9a8a97f32d498c09c0f1f82c8a67bd6f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_pair.html#a9a8a97f32d498c09c0f1f82c8a67bd6f\">QPair::second</a></div><div class=\"ttdeci\">T2 second</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00066\">qpair.h:66</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a90e1864c604e125917992189dea83383\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html\">QPair</a>&lt;T1, T2&gt;&amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html\">QPair</a>&lt; T1, T2 &gt; &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00062\">62</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html\">qpair.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;    { <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a970a385f6f880f2b620451db4ca4299a\">first</a> = other.<a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_pair.html#ae885a6822c40e26649c9dd8b476942f8\">first</a>; <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a9a8a97f32d498c09c0f1f82c8a67bd6f\">second</a> = other.<a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a9a8a97f32d498c09c0f1f82c8a67bd6f\">second</a>; <span class=\"keywordflow\">return</span> *<span class=\"keyword\">this</span>; }</div>\n\
<div class=\"ttc\" id=\"struct_q_pair_html_ae885a6822c40e26649c9dd8b476942f8\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_pair.html#ae885a6822c40e26649c9dd8b476942f8\">QPair::first</a></div><div class=\"ttdeci\">T1 first</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00065\">qpair.h:65</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a970a385f6f880f2b620451db4ca4299a\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a970a385f6f880f2b620451db4ca4299a\">first</a></div><div class=\"ttdeci\">GLint * first</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01362\">GLee.h:1362</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_pair_html_a9a8a97f32d498c09c0f1f82c8a67bd6f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_pair.html#a9a8a97f32d498c09c0f1f82c8a67bd6f\">QPair::second</a></div><div class=\"ttdeci\">T2 second</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00066\">qpair.h:66</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"ae885a6822c40e26649c9dd8b476942f8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">T1 <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a970a385f6f880f2b620451db4ca4299a\">first</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00065\">65</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html\">qpair.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9a8a97f32d498c09c0f1f82c8a67bd6f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">T2 second</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html#l00066\">66</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html\">qpair.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this struct was generated from the following files:<ul>\n\
<li>QtCore/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qabstracteventdispatcher_8h_source.html\">qabstracteventdispatcher.h</a></li>\n\
<li>QtCore/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html\">qpair.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";