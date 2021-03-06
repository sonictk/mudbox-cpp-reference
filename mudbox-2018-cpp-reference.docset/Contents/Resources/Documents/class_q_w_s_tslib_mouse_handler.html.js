var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QWSTslibMouseHandler Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_w_s_tslib_mouse_handler.html\', tocPrefix);\n\
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
            <h1>QWSTslibMouseHandler Class Reference</h1>\n\
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
<div class=\"title\">QWSTslibMouseHandler Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_q_w_s_tslib_mouse_handler.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_q_w_s_tslib_mouse_handler.html#pro-attribs\">Protected Attributes</a> &#124;\n\
<a href=\"class_q_w_s_tslib_mouse_handler.html#friends\">Friends</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qmousetslib__qws_8h_source.html\">qmousetslib_qws.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qmousetslib__qws_8h_source.html#l00057\">57</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qmousetslib__qws_8h_source.html\">qmousetslib_qws.h</a>.</p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for QWSTslibMouseHandler:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/class_q_w_s_tslib_mouse_handler.png\" usemap=\"#QWSTslibMouseHandler_map\" alt=\"\">\n\
  <map id=\"QWSTslibMouseHandler_map\" name=\"QWSTslibMouseHandler_map\">\n\
<area href=\"class_q_w_s_calibrated_mouse_handler.html\" alt=\"QWSCalibratedMouseHandler\" shape=\"rect\" coords=\"0,56,182,80\">\n\
<area href=\"class_q_w_s_mouse_handler.html\" alt=\"QWSMouseHandler\" shape=\"rect\" coords=\"0,0,182,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a2cf9c143ac47b28ae78b965ccbaa682f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_tslib_mouse_handler.html#a2cf9c143ac47b28ae78b965ccbaa682f\">QWSTslibMouseHandler</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;driver=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>(), const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;device=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>())</td></tr>\n\
<tr class=\"separator:a2cf9c143ac47b28ae78b965ccbaa682f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9008445f57ffe0b506fe20a9a5e50198\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_tslib_mouse_handler.html#a9008445f57ffe0b506fe20a9a5e50198\">~QWSTslibMouseHandler</a> ()</td></tr>\n\
<tr class=\"separator:a9008445f57ffe0b506fe20a9a5e50198\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3605b58fb45d69d498721bc2f2a14b1c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_tslib_mouse_handler.html#a3605b58fb45d69d498721bc2f2a14b1c\">suspend</a> ()</td></tr>\n\
<tr class=\"separator:a3605b58fb45d69d498721bc2f2a14b1c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a41de8150eff044a237990c271d57ea27\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_tslib_mouse_handler.html#a41de8150eff044a237990c271d57ea27\">resume</a> ()</td></tr>\n\
<tr class=\"separator:a41de8150eff044a237990c271d57ea27\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afd9d3d0071b798b44dbc9caf70b1c4f5\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_tslib_mouse_handler.html#afd9d3d0071b798b44dbc9caf70b1c4f5\">calibrate</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_pointer_calibration_data.html\">QWSPointerCalibrationData</a> *<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>)</td></tr>\n\
<tr class=\"separator:afd9d3d0071b798b44dbc9caf70b1c4f5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aab4000a37e0626ad6a8ab5d0c6a35424\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_tslib_mouse_handler.html#aab4000a37e0626ad6a8ab5d0c6a35424\">clearCalibration</a> ()</td></tr>\n\
<tr class=\"separator:aab4000a37e0626ad6a8ab5d0c6a35424\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_q_w_s_calibrated_mouse_handler\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_q_w_s_calibrated_mouse_handler\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_calibrated_mouse_handler.html\">QWSCalibratedMouseHandler</a></td></tr>\n\
<tr class=\"memitem:a13cfeae6573e88ed99357cd511c79fbf inherit pub_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_calibrated_mouse_handler.html#a13cfeae6573e88ed99357cd511c79fbf\">QWSCalibratedMouseHandler</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;driver=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>(), const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;device=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>())</td></tr>\n\
<tr class=\"separator:a13cfeae6573e88ed99357cd511c79fbf inherit pub_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4e7b6660ccb689db24691d71d36c4cd5 inherit pub_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_calibrated_mouse_handler.html#a4e7b6660ccb689db24691d71d36c4cd5\">getCalibration</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_pointer_calibration_data.html\">QWSPointerCalibrationData</a> *) const </td></tr>\n\
<tr class=\"separator:a4e7b6660ccb689db24691d71d36c4cd5 inherit pub_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_q_w_s_mouse_handler\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_q_w_s_mouse_handler\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html\">QWSMouseHandler</a></td></tr>\n\
<tr class=\"memitem:ac04b431691ceafa487e3c686060a97c4 inherit pub_methods_class_q_w_s_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html#ac04b431691ceafa487e3c686060a97c4\">QWSMouseHandler</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;driver=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>(), const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;device=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>())</td></tr>\n\
<tr class=\"separator:ac04b431691ceafa487e3c686060a97c4 inherit pub_methods_class_q_w_s_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a249126fc681c707bbb2a73ac5a64acb3 inherit pub_methods_class_q_w_s_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html#a249126fc681c707bbb2a73ac5a64acb3\">~QWSMouseHandler</a> ()</td></tr>\n\
<tr class=\"separator:a249126fc681c707bbb2a73ac5a64acb3 inherit pub_methods_class_q_w_s_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6149e95765c68be6a1d17b26490e2c55 inherit pub_methods_class_q_w_s_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html#a6149e95765c68be6a1d17b26490e2c55\">limitToScreen</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_point.html\">QPoint</a> &amp;pt)</td></tr>\n\
<tr class=\"separator:a6149e95765c68be6a1d17b26490e2c55 inherit pub_methods_class_q_w_s_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abc2050bda2877400a1feab170a549349 inherit pub_methods_class_q_w_s_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html#abc2050bda2877400a1feab170a549349\">mouseChanged</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_point.html\">QPoint</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html#aa71ab50fa6fd03e0986ee773f9496b8b\">pos</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> bstate, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> wheel=0)</td></tr>\n\
<tr class=\"separator:abc2050bda2877400a1feab170a549349 inherit pub_methods_class_q_w_s_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa71ab50fa6fd03e0986ee773f9496b8b inherit pub_methods_class_q_w_s_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_point.html\">QPoint</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html#aa71ab50fa6fd03e0986ee773f9496b8b\">pos</a> () const </td></tr>\n\
<tr class=\"separator:aa71ab50fa6fd03e0986ee773f9496b8b inherit pub_methods_class_q_w_s_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af955680b673a776b40d42d138b918446 inherit pub_methods_class_q_w_s_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html#af955680b673a776b40d42d138b918446\">setScreen</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_screen.html\">QScreen</a> *<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac4b481f27b5a2c2b47c4e8be14eda227\">screen</a>)</td></tr>\n\
<tr class=\"separator:af955680b673a776b40d42d138b918446 inherit pub_methods_class_q_w_s_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pro-attribs\"></a>\n\
Protected Attributes</h2></td></tr>\n\
<tr class=\"memitem:a4e504fc7d8ba620ed60755bd5696fce5\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_tslib_mouse_handler.html#a9bab3ca22ba152bb00c2db02132e4f93\">QWSTslibMouseHandlerPrivate</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_tslib_mouse_handler.html#a4e504fc7d8ba620ed60755bd5696fce5\">d</a></td></tr>\n\
<tr class=\"separator:a4e504fc7d8ba620ed60755bd5696fce5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pro_attribs_class_q_w_s_mouse_handler\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pro_attribs_class_q_w_s_mouse_handler\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Protected Attributes inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html\">QWSMouseHandler</a></td></tr>\n\
<tr class=\"memitem:a816887d81ee2b6c0b12914197f2a093b inherit pro_attribs_class_q_w_s_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_point.html\">QPoint</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html#a816887d81ee2b6c0b12914197f2a093b\">mousePos</a></td></tr>\n\
<tr class=\"separator:a816887d81ee2b6c0b12914197f2a093b inherit pro_attribs_class_q_w_s_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3fd3236ed1a07f9f2e3211c631985873 inherit pro_attribs_class_q_w_s_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">QWSMouseHandlerPrivate *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html#a3fd3236ed1a07f9f2e3211c631985873\">d_ptr</a></td></tr>\n\
<tr class=\"separator:a3fd3236ed1a07f9f2e3211c631985873 inherit pro_attribs_class_q_w_s_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:a9bab3ca22ba152bb00c2db02132e4f93\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_tslib_mouse_handler.html#a9bab3ca22ba152bb00c2db02132e4f93\">QWSTslibMouseHandlerPrivate</a></td></tr>\n\
<tr class=\"separator:a9bab3ca22ba152bb00c2db02132e4f93\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pro_methods_class_q_w_s_calibrated_mouse_handler\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pro_methods_class_q_w_s_calibrated_mouse_handler\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Protected Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_calibrated_mouse_handler.html\">QWSCalibratedMouseHandler</a></td></tr>\n\
<tr class=\"memitem:af387a05ae96b801f1f957ba1d5aa482d inherit pro_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_calibrated_mouse_handler.html#af387a05ae96b801f1f957ba1d5aa482d\">sendFiltered</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_point.html\">QPoint</a> &amp;, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> button)</td></tr>\n\
<tr class=\"separator:af387a05ae96b801f1f957ba1d5aa482d inherit pro_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5ff1146b65cd1cb37cd4524b82c29c31 inherit pro_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_point.html\">QPoint</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_calibrated_mouse_handler.html#a5ff1146b65cd1cb37cd4524b82c29c31\">transform</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_point.html\">QPoint</a> &amp;)</td></tr>\n\
<tr class=\"separator:a5ff1146b65cd1cb37cd4524b82c29c31 inherit pro_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8bd26dfd2ad33620262709ba301d8747 inherit pro_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_calibrated_mouse_handler.html#a8bd26dfd2ad33620262709ba301d8747\">readCalibration</a> ()</td></tr>\n\
<tr class=\"separator:a8bd26dfd2ad33620262709ba301d8747 inherit pro_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac3efa003544375926eb7d8d88cf19523 inherit pro_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_calibrated_mouse_handler.html#ac3efa003544375926eb7d8d88cf19523\">writeCalibration</a> ()</td></tr>\n\
<tr class=\"separator:ac3efa003544375926eb7d8d88cf19523 inherit pro_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2336ebe80b4e0dae2190b1060e7e2468 inherit pro_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_calibrated_mouse_handler.html#a2336ebe80b4e0dae2190b1060e7e2468\">setFilterSize</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>)</td></tr>\n\
<tr class=\"separator:a2336ebe80b4e0dae2190b1060e7e2468 inherit pro_methods_class_q_w_s_calibrated_mouse_handler\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a2cf9c143ac47b28ae78b965ccbaa682f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_tslib_mouse_handler.html\">QWSTslibMouseHandler</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>driver</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>()</code>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>device</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>()</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">explicit</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9008445f57ffe0b506fe20a9a5e50198\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">~<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_tslib_mouse_handler.html\">QWSTslibMouseHandler</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a3605b58fb45d69d498721bc2f2a14b1c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> suspend </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html#a1df85af222c85656525b61d690f4ed3a\">QWSMouseHandler</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a41de8150eff044a237990c271d57ea27\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> resume </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_mouse_handler.html#a6596cf9cc8befb8bce505a0cc4228180\">QWSMouseHandler</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afd9d3d0071b798b44dbc9caf70b1c4f5\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> calibrate </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_pointer_calibration_data.html\">QWSPointerCalibrationData</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>data</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Reimplemented from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_calibrated_mouse_handler.html#a9679eb1b2c7445cab39c92983f2ee73f\">QWSCalibratedMouseHandler</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aab4000a37e0626ad6a8ab5d0c6a35424\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> clearCalibration </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Reimplemented from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_calibrated_mouse_handler.html#ab94ba1a9914c0620f96809091676b391\">QWSCalibratedMouseHandler</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Friends And Related Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a9bab3ca22ba152bb00c2db02132e4f93\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">friend class QWSTslibMouseHandlerPrivate</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">friend</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qmousetslib__qws_8h_source.html#l00071\">71</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qmousetslib__qws_8h_source.html\">qmousetslib_qws.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a4e504fc7d8ba620ed60755bd5696fce5\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_tslib_mouse_handler.html#a9bab3ca22ba152bb00c2db02132e4f93\">QWSTslibMouseHandlerPrivate</a>* d</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">protected</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qmousetslib__qws_8h_source.html#l00072\">72</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qmousetslib__qws_8h_source.html\">qmousetslib_qws.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtGui/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qmousetslib__qws_8h_source.html\">qmousetslib_qws.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";