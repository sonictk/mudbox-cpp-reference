var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MBCrashInfo Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classmudbox_1_1_m_b_crash_info.html\', tocPrefix);\n\
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
            <h1>MBCrashInfo Class Reference</h1>\n\
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
<div class=\"title\">MBCrashInfo Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-326B2823-3421-4F39-9127-38030C945837.htm\">What\'s New / What\'s Changed? &gt; Mudbox 2014</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"classmudbox_1_1_m_b_crash_info.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"classmudbox_1_1_m_b_crash_info.html#friends\">Friends</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00169\">169</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:af3cd9730189fafa776427f55e3b8e574\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_m_b_crash_info.html#af3cd9730189fafa776427f55e3b8e574\">MBCrashInfo</a> ()</td></tr>\n\
<tr class=\"separator:af3cd9730189fafa776427f55e3b8e574\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af20845e31860244651a31d59693efa8b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_m_b_crash_info.html#af20845e31860244651a31d59693efa8b\">AddToFlag</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> flagNum, unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>)</td></tr>\n\
<tr class=\"separator:af20845e31860244651a31d59693efa8b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aac64b9a80d9647378f42b8c6cd94ba81\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_m_b_crash_info.html#aac64b9a80d9647378f42b8c6cd94ba81\">SubFromFlag</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> flagNum, unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>)</td></tr>\n\
<tr class=\"separator:aac64b9a80d9647378f42b8c6cd94ba81\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac5e814d3d047b59574f6ce945f6a74d9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_m_b_crash_info.html#ac5e814d3d047b59574f6ce945f6a74d9\">GetFlag</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> flagNum) const </td></tr>\n\
<tr class=\"separator:ac5e814d3d047b59574f6ce945f6a74d9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acfd1ea290b1ed4bd07cdcc971a4f0478\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_m_b_crash_info.html#acfd1ea290b1ed4bd07cdcc971a4f0478\">AddStringToRingBuffer</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;prefix, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;entry)</td></tr>\n\
<tr class=\"separator:acfd1ea290b1ed4bd07cdcc971a4f0478\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a02262fe2025366b815d1e889a0b8b9a9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_m_b_crash_info.html#a02262fe2025366b815d1e889a0b8b9a9\">SetProgressName</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad977737dfc9a274a62741b9500c49a32\">name</a>, unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> maxVal)</td></tr>\n\
<tr class=\"separator:a02262fe2025366b815d1e889a0b8b9a9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a64a20af006da41ebd1b22233cba8d497\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_m_b_crash_info.html#a64a20af006da41ebd1b22233cba8d497\">SetProgressValue</a> (unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> val)</td></tr>\n\
<tr class=\"separator:a64a20af006da41ebd1b22233cba8d497\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab8cd0fb0cc84ec85e68f59f8b956c68f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_m_b_crash_info.html#ab8cd0fb0cc84ec85e68f59f8b956c68f\">ClearProgress</a> ()</td></tr>\n\
<tr class=\"separator:ab8cd0fb0cc84ec85e68f59f8b956c68f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5a35d404c3024c088c5f60a6df407f80\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_m_b_crash_info.html#a5a35d404c3024c088c5f60a6df407f80\">SetHelpString</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;st)</td></tr>\n\
<tr class=\"separator:a5a35d404c3024c088c5f60a6df407f80\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:a95f3e728313fe0e54928b760a435a162\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_m_b_crash_info.html#a95f3e728313fe0e54928b760a435a162\">::CIPModule</a></td></tr>\n\
<tr class=\"separator:a95f3e728313fe0e54928b760a435a162\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"af3cd9730189fafa776427f55e3b8e574\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_m_b_crash_info.html\">MBCrashInfo</a> </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00183\">183</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00183\"></a><span class=\"lineno\">  183</span>&#160;                      : m_MaxProgress(0), m_CurProgress(0), m_head(0), m_count(0), m_total(0)</div>\n\
<div class=\"line\"><a name=\"l00184\"></a><span class=\"lineno\">  184</span>&#160;        { memset(m_FlagArray, 0, <span class=\"keyword\">sizeof</span>(m_FlagArray)); memset(m_RingBuffer, 0, <span class=\"keyword\">sizeof</span>(m_RingBuffer)); }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"af20845e31860244651a31d59693efa8b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> AddToFlag </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>flagNum</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>v</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00186\">186</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00186\"></a><span class=\"lineno\">  186</span>&#160;{ m_FlagArray[flagNum] += <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>;   }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a14cfbe2fc2234f5504618905b69d1e06\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a></div><div class=\"ttdeci\">const GLdouble * v</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01174\">GLee.h:1174</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aac64b9a80d9647378f42b8c6cd94ba81\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> SubFromFlag </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>flagNum</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>v</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00187\">187</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00187\"></a><span class=\"lineno\">  187</span>&#160;{ m_FlagArray[flagNum] -= <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>;   }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a14cfbe2fc2234f5504618905b69d1e06\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a></div><div class=\"ttdeci\">const GLdouble * v</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01174\">GLee.h:1174</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac5e814d3d047b59574f6ce945f6a74d9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> GetFlag </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>flagNum</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00188\">188</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00188\"></a><span class=\"lineno\">  188</span>&#160;{ <span class=\"keywordflow\">return</span> m_FlagArray[flagNum]; }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acfd1ea290b1ed4bd07cdcc971a4f0478\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> AddStringToRingBuffer </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>prefix</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>entry</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a02262fe2025366b815d1e889a0b8b9a9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> SetProgressName </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>maxVal</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00191\">191</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00191\"></a><span class=\"lineno\">  191</span>&#160;{ m_ProgressName = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad977737dfc9a274a62741b9500c49a32\">name</a>; m_MaxProgress = maxVal; }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_ad977737dfc9a274a62741b9500c49a32\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad977737dfc9a274a62741b9500c49a32\">name</a></div><div class=\"ttdeci\">GLuint const GLchar * name</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01704\">GLee.h:1704</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a64a20af006da41ebd1b22233cba8d497\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> SetProgressValue </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>val</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00192\">192</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00192\"></a><span class=\"lineno\">  192</span>&#160;{ m_CurProgress = val; }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab8cd0fb0cc84ec85e68f59f8b956c68f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> ClearProgress </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00193\">193</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00193\"></a><span class=\"lineno\">  193</span>&#160;{ m_ProgressName = <span class=\"stringliteral\">&quot;&quot;</span>; m_MaxProgress = 0; m_CurProgress = 0; }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a5a35d404c3024c088c5f60a6df407f80\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> SetHelpString </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>st</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00195\">195</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00195\"></a><span class=\"lineno\">  195</span>&#160;{ m_CurrentHelp = st; }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Friends And Related Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a95f3e728313fe0e54928b760a435a162\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">friend class ::CIPModule</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">friend</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00197\">197</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>Mudbox/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";