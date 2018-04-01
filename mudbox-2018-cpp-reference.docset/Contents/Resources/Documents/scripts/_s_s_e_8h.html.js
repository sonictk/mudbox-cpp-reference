var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Mudbox/SSE.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_s_s_e_8h.html\', tocPrefix);\n\
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
            <h1>Mudbox/SSE.h File Reference</h1>\n\
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
<div class=\"title\">SSE.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"_s_s_e_8h.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"_s_s_e_8h.html#func-members\">Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &quot;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_8h_source.html\">mudbox.h</a>&quot;</code><br>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_h_w_vector.html\">HWVector</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This class represents a four dimensional vector stored in the SSE registers.  <a href=\"#!/url=./cpp_ref/struct_h_w_vector.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_h_w_matrix.html\">HWMatrix</a></td></tr>\n\
<tr class=\"memdesc:\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This class represents a four by four matrix stored in the SSE registers.  <a href=\"#!/url=./cpp_ref/struct_h_w_matrix.html#details\">More...</a><br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:a48d936d9a8d7c3911d7a6978264d36ba\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">mudbox::Vector</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_s_s_e_8h.html#a48d936d9a8d7c3911d7a6978264d36ba\">operator&lt;&lt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">mudbox::Vector</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_h_w_vector.html\">HWVector</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>)</td></tr>\n\
<tr class=\"separator:a48d936d9a8d7c3911d7a6978264d36ba\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a46c986ab152f6fac449887870402437d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_s_s_e_8h.html#a46c986ab152f6fac449887870402437d\">hasSSE3</a> ()</td></tr>\n\
<tr class=\"memdesc:a46c986ab152f6fac449887870402437d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Query if SSE3 is available. Present on Prescott, Core2 and later.  <a href=\"_s_s_e_8h.html#a46c986ab152f6fac449887870402437d\">More...</a><br></td></tr>\n\
<tr class=\"separator:a46c986ab152f6fac449887870402437d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa731b6ecb36d1776210bf3bba950aa55\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_s_s_e_8h.html#aa731b6ecb36d1776210bf3bba950aa55\">hasSSE41</a> ()</td></tr>\n\
<tr class=\"memdesc:aa731b6ecb36d1776210bf3bba950aa55\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Query if SSE4.1 is available. Present on Penryn (later Core 2)  <a href=\"_s_s_e_8h.html#aa731b6ecb36d1776210bf3bba950aa55\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa731b6ecb36d1776210bf3bba950aa55\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9f065945af47594ab75866cca41b944a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_s_s_e_8h.html#a9f065945af47594ab75866cca41b944a\">hasSSE42</a> ()</td></tr>\n\
<tr class=\"memdesc:a9f065945af47594ab75866cca41b944a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Query if SSE4.2 is available. Present on Nehalem (Core i5, Corei7)  <a href=\"_s_s_e_8h.html#a9f065945af47594ab75866cca41b944a\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9f065945af47594ab75866cca41b944a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a59cf0223fc0ac80a4aa395f4fe7f23b0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_s_s_e_8h.html#a59cf0223fc0ac80a4aa395f4fe7f23b0\">hasAVX256</a> ()</td></tr>\n\
<tr class=\"memdesc:a59cf0223fc0ac80a4aa395f4fe7f23b0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Query if AVX is available. present on Sandybridge.  <a href=\"_s_s_e_8h.html#a59cf0223fc0ac80a4aa395f4fe7f23b0\">More...</a><br></td></tr>\n\
<tr class=\"separator:a59cf0223fc0ac80a4aa395f4fe7f23b0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a48d936d9a8d7c3911d7a6978264d36ba\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">mudbox::Vector</a>&amp; operator&lt;&lt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">mudbox::Vector</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>v</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_h_w_vector.html\">HWVector</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r</em>&#160;</td>\n\
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
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_ptex_extractor_2ptex_2_ptexture_8h-example.html#a9\">PtexExtractor/ptex/Ptexture.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_ptex_extractor_2ptex_2_ptex_utils_8cpp-example.html#a7\">PtexExtractor/ptex/PtexUtils.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_ptex_importer_2ptex_2_ptexture_8h-example.html#a9\">PtexImporter/ptex/Ptexture.h</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_ptex_importer_2ptex_2_ptex_utils_8cpp-example.html#a7\">PtexImporter/ptex/PtexUtils.cpp</a>.</dd></div>\n\
</dl>\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_s_s_e_8h_source.html#l00245\">245</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_s_s_e_8h_source.html\">SSE.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00246\"></a><span class=\"lineno\">  246</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00247\"></a><span class=\"lineno\">  247</span>&#160;    __m128 <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a> = _mm_shuffle_ps( r.v, r.v, _MM_SHUFFLE(2,1,0,3) );</div>\n\
<div class=\"line\"><a name=\"l00248\"></a><span class=\"lineno\">  248</span>&#160;    _mm_store_ss( &amp;v.<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html#ad0da36b2558901e21e7a30f6c227a45e\">x</a>, t );</div>\n\
<div class=\"line\"><a name=\"l00249\"></a><span class=\"lineno\">  249</span>&#160;    t = _mm_shuffle_ps( t, t, _MM_SHUFFLE(2,1,0,3) );</div>\n\
<div class=\"line\"><a name=\"l00250\"></a><span class=\"lineno\">  250</span>&#160;    _mm_store_ss( &amp;v.<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html#aa4f0d3eebc3c443f9be81bf48561a217\">y</a>, t );</div>\n\
<div class=\"line\"><a name=\"l00251\"></a><span class=\"lineno\">  251</span>&#160;    t = _mm_shuffle_ps( t, t, _MM_SHUFFLE(2,1,0,3) );</div>\n\
<div class=\"line\"><a name=\"l00252\"></a><span class=\"lineno\">  252</span>&#160;    _mm_store_ss( &amp;v.<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html#af73583b1e980b0aa03f9884812e9fd4d\">z</a>, t );</div>\n\
<div class=\"line\"><a name=\"l00253\"></a><span class=\"lineno\">  253</span>&#160;    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>;</div>\n\
<div class=\"line\"><a name=\"l00254\"></a><span class=\"lineno\">  254</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00256\"></a><span class=\"lineno\">  256</span>&#160;    <span class=\"comment\">//__m128 t = _mm_shuffle_ps( r.v, r.v, _MM_SHUFFLE(0,1,2,3) );</span></div>\n\
<div class=\"line\"><a name=\"l00257\"></a><span class=\"lineno\">  257</span>&#160;    <span class=\"comment\">//int a = ((int *)&amp;v)[3];</span></div>\n\
<div class=\"line\"><a name=\"l00258\"></a><span class=\"lineno\">  258</span>&#160;    <span class=\"comment\">//_mm_storeu_ps( &amp;v.x, t );</span></div>\n\
<div class=\"line\"><a name=\"l00259\"></a><span class=\"lineno\">  259</span>&#160;    <span class=\"comment\">//((int *)&amp;v)[3] = a;</span></div>\n\
<div class=\"line\"><a name=\"l00260\"></a><span class=\"lineno\">  260</span>&#160;    <span class=\"comment\">//return v;</span></div>\n\
<div class=\"line\"><a name=\"l00261\"></a><span class=\"lineno\">  261</span>&#160;};</div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_vector_html_af73583b1e980b0aa03f9884812e9fd4d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html#af73583b1e980b0aa03f9884812e9fd4d\">mudbox::Vector::z</a></div><div class=\"ttdeci\">float z</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/math_8h_source.html#l00340\">math.h:340</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_vector_html_aa4f0d3eebc3c443f9be81bf48561a217\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html#aa4f0d3eebc3c443f9be81bf48561a217\">mudbox::Vector::y</a></div><div class=\"ttdeci\">float y</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/math_8h_source.html#l00340\">math.h:340</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a14cfbe2fc2234f5504618905b69d1e06\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a></div><div class=\"ttdeci\">const GLdouble * v</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01174\">GLee.h:1174</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a653819996e713edf9c01a5b564199189\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a></div><div class=\"ttdeci\">GLdouble GLdouble t</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01181\">GLee.h:1181</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_vector_html_ad0da36b2558901e21e7a30f6c227a45e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html#ad0da36b2558901e21e7a30f6c227a45e\">mudbox::Vector::x</a></div><div class=\"ttdeci\">float x</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/math_8h_source.html#l00340\">math.h:340</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a46c986ab152f6fac449887870402437d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a> hasSSE3 </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Query if SSE3 is available. Present on Prescott, Core2 and later. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa731b6ecb36d1776210bf3bba950aa55\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a> hasSSE41 </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Query if SSE4.1 is available. Present on Penryn (later Core 2) </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9f065945af47594ab75866cca41b944a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a> hasSSE42 </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Query if SSE4.2 is available. Present on Nehalem (Core i5, Corei7) </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a59cf0223fc0ac80a4aa395f4fe7f23b0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a> hasAVX256 </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Query if AVX is available. present on Sandybridge. </p>\n\
\n\
</div>\n\
</div>\n\
\n\
<p><a href=\"#!/url=./cpp_ref/_s_s_e_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";