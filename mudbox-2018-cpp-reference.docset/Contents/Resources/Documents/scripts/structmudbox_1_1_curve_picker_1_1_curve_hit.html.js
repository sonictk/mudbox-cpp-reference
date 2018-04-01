var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>CurvePicker::CurveHit Struct Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'structmudbox_1_1_curve_picker_1_1_curve_hit.html\', tocPrefix);\n\
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
            <h1>CurvePicker::CurveHit Struct Reference</h1>\n\
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
<div class=\"title\">CurvePicker::CurveHit Struct Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"structmudbox_1_1_curve_picker_1_1_curve_hit.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"structmudbox_1_1_curve_picker_1_1_curve_hit.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html\">curve.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html#l00219\">219</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html\">curve.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a6313cd80d79abb8f92dbdc0f5e566be4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#a6313cd80d79abb8f92dbdc0f5e566be4\">CurveHit</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mudbox_curve.html\">MudboxCurve</a> *pCurve, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> iPointIndex, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> point3D, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> point2D, float distanceToMouse)</td></tr>\n\
<tr class=\"separator:a6313cd80d79abb8f92dbdc0f5e566be4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae2fc176ae83ea72a0a770e38dcf06680\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#ae2fc176ae83ea72a0a770e38dcf06680\">CurveHit</a> ()</td></tr>\n\
<tr class=\"separator:ae2fc176ae83ea72a0a770e38dcf06680\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:acac2546b90f20990f3ee3d4afd00615b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mudbox_curve.html\">MudboxCurve</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#acac2546b90f20990f3ee3d4afd00615b\">Curve</a></td></tr>\n\
<tr class=\"separator:acac2546b90f20990f3ee3d4afd00615b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac8375f661a85598f2213ea279ece92f5\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#ac8375f661a85598f2213ea279ece92f5\">PointIndex</a></td></tr>\n\
<tr class=\"separator:ac8375f661a85598f2213ea279ece92f5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a84a57be8a85b201c7bc8a69eb5201297\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#a84a57be8a85b201c7bc8a69eb5201297\">Point3D</a></td></tr>\n\
<tr class=\"separator:a84a57be8a85b201c7bc8a69eb5201297\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aef8270124f572be78b9f732f53cdb717\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#aef8270124f572be78b9f732f53cdb717\">Point2D</a></td></tr>\n\
<tr class=\"separator:aef8270124f572be78b9f732f53cdb717\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2beb7fce8f701085c7cf2e88744bb0d1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">float&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#a2beb7fce8f701085c7cf2e88744bb0d1\">DistanceToMouse</a></td></tr>\n\
<tr class=\"separator:a2beb7fce8f701085c7cf2e88744bb0d1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a6313cd80d79abb8f92dbdc0f5e566be4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html\">CurveHit</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mudbox_curve.html\">MudboxCurve</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>pCurve</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>iPointIndex</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>&#160;</td>\n\
          <td class=\"paramname\"><em>point3D</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>&#160;</td>\n\
          <td class=\"paramname\"><em>point2D</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">float&#160;</td>\n\
          <td class=\"paramname\"><em>distanceToMouse</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html#l00221\">221</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html\">curve.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00222\"></a><span class=\"lineno\">  222</span>&#160;        { <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#acac2546b90f20990f3ee3d4afd00615b\">Curve</a> = pCurve; <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#ac8375f661a85598f2213ea279ece92f5\">PointIndex</a> = iPointIndex; <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#a84a57be8a85b201c7bc8a69eb5201297\">Point3D</a> = point3D; <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#aef8270124f572be78b9f732f53cdb717\">Point2D</a> = point2D; <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#a2beb7fce8f701085c7cf2e88744bb0d1\">DistanceToMouse</a> = distanceToMouse; }</div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_curve_picker_1_1_curve_hit_html_ac8375f661a85598f2213ea279ece92f5\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#ac8375f661a85598f2213ea279ece92f5\">mudbox::CurvePicker::CurveHit::PointIndex</a></div><div class=\"ttdeci\">int PointIndex</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/curve_8h_source.html#l00227\">curve.h:227</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_curve_picker_1_1_curve_hit_html_a2beb7fce8f701085c7cf2e88744bb0d1\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#a2beb7fce8f701085c7cf2e88744bb0d1\">mudbox::CurvePicker::CurveHit::DistanceToMouse</a></div><div class=\"ttdeci\">float DistanceToMouse</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/curve_8h_source.html#l00230\">curve.h:230</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_curve_picker_1_1_curve_hit_html_acac2546b90f20990f3ee3d4afd00615b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#acac2546b90f20990f3ee3d4afd00615b\">mudbox::CurvePicker::CurveHit::Curve</a></div><div class=\"ttdeci\">MudboxCurve * Curve</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/curve_8h_source.html#l00226\">curve.h:226</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_curve_picker_1_1_curve_hit_html_aef8270124f572be78b9f732f53cdb717\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#aef8270124f572be78b9f732f53cdb717\">mudbox::CurvePicker::CurveHit::Point2D</a></div><div class=\"ttdeci\">Vector Point2D</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/curve_8h_source.html#l00229\">curve.h:229</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_curve_picker_1_1_curve_hit_html_a84a57be8a85b201c7bc8a69eb5201297\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html#a84a57be8a85b201c7bc8a69eb5201297\">mudbox::CurvePicker::CurveHit::Point3D</a></div><div class=\"ttdeci\">Vector Point3D</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/curve_8h_source.html#l00228\">curve.h:228</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae2fc176ae83ea72a0a770e38dcf06680\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_picker_1_1_curve_hit.html\">CurveHit</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"acac2546b90f20990f3ee3d4afd00615b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mudbox_curve.html\">MudboxCurve</a>* Curve</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html#l00226\">226</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html\">curve.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac8375f661a85598f2213ea279ece92f5\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> PointIndex</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html#l00227\">227</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html\">curve.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a84a57be8a85b201c7bc8a69eb5201297\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> Point3D</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html#l00228\">228</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html\">curve.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aef8270124f572be78b9f732f53cdb717\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> Point2D</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html#l00229\">229</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html\">curve.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2beb7fce8f701085c7cf2e88744bb0d1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">float DistanceToMouse</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html#l00230\">230</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html\">curve.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this struct was generated from the following file:<ul>\n\
<li>Mudbox/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h_source.html\">curve.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";