var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Mudbox Directory Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'dir_1debe75f8576ffc2b511aab524e41650.html\', tocPrefix);\n\
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
            <h1>Mudbox Directory Reference</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">Mudbox Directory Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"files\"></a>\n\
Files</h2></td></tr>\n\
<tr class=\"memitem:array_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/array_8h.html\">array.h</a> <a href=\"#!/url=./cpp_ref/array_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:brush_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h.html\">brush.h</a> <a href=\"#!/url=./cpp_ref/brush_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:brushmask_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brushmask_8h.html\">brushmask.h</a> <a href=\"#!/url=./cpp_ref/brushmask_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:camera_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/camera_8h.html\">camera.h</a> <a href=\"#!/url=./cpp_ref/camera_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:_convolution_kernel_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_convolution_kernel_8h.html\">ConvolutionKernel.h</a> <a href=\"#!/url=./cpp_ref/_convolution_kernel_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:curve_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/curve_8h.html\">curve.h</a> <a href=\"#!/url=./cpp_ref/curve_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:dllinterface_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dllinterface_8h.html\">dllinterface.h</a> <a href=\"#!/url=./cpp_ref/dllinterface_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:error_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/error_8h.html\">error.h</a> <a href=\"#!/url=./cpp_ref/error_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:generaloperations_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/generaloperations_8h.html\">generaloperations.h</a> <a href=\"#!/url=./cpp_ref/generaloperations_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:geometry_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/geometry_8h.html\">geometry.h</a> <a href=\"#!/url=./cpp_ref/geometry_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:i18n_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/i18n_8h.html\">i18n.h</a> <a href=\"#!/url=./cpp_ref/i18n_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:image_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html\">image.h</a> <a href=\"#!/url=./cpp_ref/image_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:_image_filter_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_image_filter_8h.html\">ImageFilter.h</a> <a href=\"#!/url=./cpp_ref/_image_filter_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:image_plane_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_plane_8h.html\">imagePlane.h</a> <a href=\"#!/url=./cpp_ref/image_plane_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:importexport_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h.html\">importexport.h</a> <a href=\"#!/url=./cpp_ref/importexport_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:interface_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/interface_8h.html\">interface.h</a> <a href=\"#!/url=./cpp_ref/interface_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:kernel_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h.html\">kernel.h</a> <a href=\"#!/url=./cpp_ref/kernel_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:layer_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/layer_8h.html\">layer.h</a> <a href=\"#!/url=./cpp_ref/layer_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:_lib_p_s_d_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_lib_p_s_d_8h.html\">LibPSD.h</a> <a href=\"#!/url=./cpp_ref/_lib_p_s_d_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:light_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/light_8h.html\">light.h</a> <a href=\"#!/url=./cpp_ref/light_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:material_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/material_8h.html\">material.h</a> <a href=\"#!/url=./cpp_ref/material_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:math_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/math_8h.html\">math.h</a> <a href=\"#!/url=./cpp_ref/math_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:mesh_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h.html\">mesh.h</a> <a href=\"#!/url=./cpp_ref/mesh_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:mudbox_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_8h.html\">mudbox.h</a> <a href=\"#!/url=./cpp_ref/mudbox_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:_mud_box_g_l_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_mud_box_g_l_8h.html\">MudBoxGL.h</a> <a href=\"#!/url=./cpp_ref/_mud_box_g_l_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:mudbox_versions_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h.html\">mudboxVersions.h</a> <a href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:_mud_box_x11_clean_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_mud_box_x11_clean_8h.html\">MudBoxX11Clean.h</a> <a href=\"#!/url=./cpp_ref/_mud_box_x11_clean_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:node_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/node_8h.html\">node.h</a> <a href=\"#!/url=./cpp_ref/node_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:nurbs_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/nurbs_8h.html\">nurbs.h</a> <a href=\"#!/url=./cpp_ref/nurbs_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:operation_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/operation_8h.html\">operation.h</a> <a href=\"#!/url=./cpp_ref/operation_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:plugin_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/plugin_8h.html\">plugin.h</a> <a href=\"#!/url=./cpp_ref/plugin_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:preferences_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/preferences_8h.html\">preferences.h</a> <a href=\"#!/url=./cpp_ref/preferences_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:quadturtle_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/quadturtle_8h.html\">quadturtle.h</a> <a href=\"#!/url=./cpp_ref/quadturtle_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:renderer_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/renderer_8h.html\">renderer.h</a> <a href=\"#!/url=./cpp_ref/renderer_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:scene_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/scene_8h.html\">scene.h</a> <a href=\"#!/url=./cpp_ref/scene_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:selectionset_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/selectionset_8h.html\">selectionset.h</a> <a href=\"#!/url=./cpp_ref/selectionset_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:_s_s_e_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_s_s_e_8h.html\">SSE.h</a> <a href=\"#!/url=./cpp_ref/_s_s_e_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:stream_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/stream_8h.html\">stream.h</a> <a href=\"#!/url=./cpp_ref/stream_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:subdivision_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/subdivision_8h.html\">subdivision.h</a> <a href=\"#!/url=./cpp_ref/subdivision_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:topology_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/topology_8h.html\">topology.h</a> <a href=\"#!/url=./cpp_ref/topology_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:transformation_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/transformation_8h.html\">transformation.h</a> <a href=\"#!/url=./cpp_ref/transformation_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:tray_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/tray_8h.html\">tray.h</a> <a href=\"#!/url=./cpp_ref/tray_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:treenode_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/treenode_8h.html\">treenode.h</a> <a href=\"#!/url=./cpp_ref/treenode_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:_unit_test_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_unit_test_8h.html\">UnitTest.h</a> <a href=\"#!/url=./cpp_ref/_unit_test_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:viewport_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/viewport_8h.html\">viewport.h</a> <a href=\"#!/url=./cpp_ref/viewport_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:widgets_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/widgets_8h.html\">widgets.h</a> <a href=\"#!/url=./cpp_ref/widgets_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:xref_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/xref_8h.html\">xref.h</a> <a href=\"#!/url=./cpp_ref/xref_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";