var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QContiguousCacheData Struct Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_q_contiguous_cache_data.html\', tocPrefix);\n\
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
            <h1>QContiguousCacheData Struct Reference</h1>\n\
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
<div class=\"title\">QContiguousCacheData Struct Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"struct_q_contiguous_cache_data.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"struct_q_contiguous_cache_data.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html\">qcontiguouscache.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html#l00057\">57</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html\">qcontiguouscache.h</a>.</p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for QContiguousCacheData:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/struct_q_contiguous_cache_data.png\" usemap=\"#QContiguousCacheData_map\" alt=\"\">\n\
  <map id=\"QContiguousCacheData_map\" name=\"QContiguousCacheData_map\">\n\
<area href=\"struct_q_contiguous_cache_typed_data.html\" alt=\"QContiguousCacheTypedData&lt; T &gt;\" shape=\"rect\" coords=\"0,56,214,80\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a16204d23de09551837e088e1c7804160\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html\">QContiguousCacheData</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html#a16204d23de09551837e088e1c7804160\">allocate</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">size</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> alignment)</td></tr>\n\
<tr class=\"separator:a16204d23de09551837e088e1c7804160\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a25333390d5ab627d852686a421854cdf\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html#a25333390d5ab627d852686a421854cdf\">free</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html\">QContiguousCacheData</a> *<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>)</td></tr>\n\
<tr class=\"separator:a25333390d5ab627d852686a421854cdf\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a16503a2ada2573d54e8e76ce416642eb\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_basic_atomic_int.html\">QBasicAtomicInt</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html#a16503a2ada2573d54e8e76ce416642eb\">ref</a></td></tr>\n\
<tr class=\"separator:a16503a2ada2573d54e8e76ce416642eb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa34178f3efddd8fb2a45aebdf60ee6a0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html#aa34178f3efddd8fb2a45aebdf60ee6a0\">alloc</a></td></tr>\n\
<tr class=\"separator:aa34178f3efddd8fb2a45aebdf60ee6a0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad43c3812e6d13e0518d9f8b8f463ffcf\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html#ad43c3812e6d13e0518d9f8b8f463ffcf\">count</a></td></tr>\n\
<tr class=\"separator:ad43c3812e6d13e0518d9f8b8f463ffcf\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a37722a150250e2a5a98e5e0d11e53449\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html#a37722a150250e2a5a98e5e0d11e53449\">start</a></td></tr>\n\
<tr class=\"separator:a37722a150250e2a5a98e5e0d11e53449\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aed7ea92f45bd273dde380a45ddced592\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html#aed7ea92f45bd273dde380a45ddced592\">offset</a></td></tr>\n\
<tr class=\"separator:aed7ea92f45bd273dde380a45ddced592\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad3ca6a998291dad0d2ecac0a13a206b2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html#ad3ca6a998291dad0d2ecac0a13a206b2\">sharable</a>: 1</td></tr>\n\
<tr class=\"separator:ad3ca6a998291dad0d2ecac0a13a206b2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac62f1cc10baec8c4105c89026d8e09c2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html#ac62f1cc10baec8c4105c89026d8e09c2\">reserved</a>: 31</td></tr>\n\
<tr class=\"separator:ac62f1cc10baec8c4105c89026d8e09c2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a16204d23de09551837e088e1c7804160\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html\">QContiguousCacheData</a>* allocate </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>size</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>alignment</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a25333390d5ab627d852686a421854cdf\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> free </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html\">QContiguousCacheData</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>data</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a16503a2ada2573d54e8e76ce416642eb\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_basic_atomic_int.html\">QBasicAtomicInt</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a083de4c8e32ad3d9059245f26be721de\">ref</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html#l00059\">59</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html\">qcontiguouscache.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa34178f3efddd8fb2a45aebdf60ee6a0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> alloc</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html#l00060\">60</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html\">qcontiguouscache.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad43c3812e6d13e0518d9f8b8f463ffcf\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9274fa62feb8371797c4c0312446e333\">count</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html#l00061\">61</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html\">qcontiguouscache.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a37722a150250e2a5a98e5e0d11e53449\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html#l00062\">62</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html\">qcontiguouscache.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aed7ea92f45bd273dde380a45ddced592\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a6ed43c61a3fbf165f2eaf5f39282e908\">offset</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html#l00063\">63</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html\">qcontiguouscache.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad3ca6a998291dad0d2ecac0a13a206b2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint sharable</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html#l00064\">64</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html\">qcontiguouscache.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac62f1cc10baec8c4105c89026d8e09c2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">uint reserved</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html#l00065\">65</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html\">qcontiguouscache.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this struct was generated from the following file:<ul>\n\
<li>QtCore/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qcontiguouscache_8h_source.html\">qcontiguouscache.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";