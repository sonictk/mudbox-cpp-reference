var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Class Members - Enumerations</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_enum_t.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Class Members - Enumerations</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow3\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>All</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_type.html\"><span>Typedefs</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_eval.html\"><span>Enumerator</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop.html\"><span>Properties</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_rela.html\"><span>Related&#160;Functions</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_j.html#index_j\"><span>j</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_q.html#index_q\"><span>q</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_s.html#index_s\"><span>s</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_enum_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_z.html#index_z\"><span>z</span></a></li>\n\
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
<div class=\"contents\">\n\
&#160;\n\
\n\
<h3><a class=\"anchor\" id=\"index_t\"></a>- t -</h3><ul>\n\
<li>TabletDevice\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_tablet_event.html#adfca4086b716b8e14ab684ec95a6d0c4\">QTabletEvent</a>\n\
</li>\n\
<li>TabPosition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tab.html#a308d4cc556b5f464069036637dde61c4\">QStyleOptionTab</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tool_box_v2.html#a308d4cc556b5f464069036637dde61c4\">QStyleOptionToolBoxV2</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_tab_widget.html#a308d4cc556b5f464069036637dde61c4\">QTabWidget</a>\n\
</li>\n\
<li>TabShape\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_tab_widget.html#a9c78f24eceb67f5e7c6889ffcf56421a\">QTabWidget</a>\n\
</li>\n\
<li>TabType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_option.html#a6d0b33e703e1291d0b60d4fe5a5e12cc\">QTextOption</a>\n\
</li>\n\
<li>Text\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_accessible.html#ab54cabecd48a4eb41ddb3c17c26eb6fb\">QAccessible</a>\n\
</li>\n\
<li>TextShapingFlag\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_font_engine.html#a47e5fd030c1287852f7d653a7a89374a\">QAbstractFontEngine</a>\n\
</li>\n\
<li>TickPosition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_slider.html#a7b9e48ad286e0f6161c0da9dd22be915\">QSlider</a>\n\
</li>\n\
<li>TitleCommand\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_addon_interface.html#ad97d70e16c4dc5d932dfb886e889b3b6\">AddonInterface</a>\n\
</li>\n\
<li>TokenType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_xml_stream_reader.html#aa520fbf142ba1e7e659590c07da31921\">QXmlStreamReader</a>\n\
</li>\n\
<li>ToolBarFeature\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tool_bar.html#a1cf0ea6cf3e4b09acf7939b7acb3aa44\">QStyleOptionToolBar</a>\n\
</li>\n\
<li>ToolBarPosition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tool_bar.html#af3c99626ebbaf8c60d37662076e1a0f8\">QStyleOptionToolBar</a>\n\
</li>\n\
<li>ToolButtonFeature\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tool_button.html#ac945fcf6bb433c82e9d5d126ad06cf50\">QStyleOptionToolButton</a>\n\
</li>\n\
<li>ToolButtonPopupMode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_tool_button.html#a6cdf68a3c730f06129d0ab944917dd2b\">QToolButton</a>\n\
</li>\n\
<li>TopologyHint\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aa8617e9d8eda84d2eea463f84076b53c\">Topology</a>\n\
</li>\n\
<li>TransferMode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_ftp.html#ac6a3bd5749f031b948edd5a5dc74df55\">QFtp</a>\n\
</li>\n\
<li>TransferType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_ftp.html#ad47f1eda321bcca6916acde6b220d704\">QFtp</a>\n\
</li>\n\
<li>Transformation\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_transformed_screen.html#a0176e2f61ce5ea7a3495a511cf46b2c1\">QTransformedScreen</a>\n\
</li>\n\
<li>TransformationType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_transformation_palette.html#a761d9cb2770a41ba680eedea3cc0e226\">TransformationPalette</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_transform.html#a761d9cb2770a41ba680eedea3cc0e226\">QTransform</a>\n\
</li>\n\
<li>TriggerType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_brush_operation.html#a59b7f49353f2a99b6c22d2eaae0fe9e9\">BrushOperation</a>\n\
</li>\n\
<li>Type\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_vertex_data_provider_1_1_component_description.html#a1d1cfd8ffb84e947f82999c682b666a7\">VertexDataProvider::ComponentDescription</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_source.html#a1d1cfd8ffb84e947f82999c682b666a7\">MediaSource</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_application.html#a1d1cfd8ffb84e947f82999c682b666a7\">QApplication</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_easing_curve.html#a1d1cfd8ffb84e947f82999c682b666a7\">QEasingCurve</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_event.html#a1d1cfd8ffb84e947f82999c682b666a7\">QEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_buffer.html#a1d1cfd8ffb84e947f82999c682b666a7\">QGLBuffer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_gradient.html#a1d1cfd8ffb84e947f82999c682b666a7\">QGradient</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_meta_type.html#a1d1cfd8ffb84e947f82999c682b666a7\">QMetaType</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_configuration.html#a1d1cfd8ffb84e947f82999c682b666a7\">QNetworkConfiguration</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_engine.html#a1d1cfd8ffb84e947f82999c682b666a7\">QPaintEngine</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_socket_notifier.html#a1d1cfd8ffb84e947f82999c682b666a7\">QSocketNotifier</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_length.html#a1d1cfd8ffb84e947f82999c682b666a7\">QTextLength</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_variant.html#a1d1cfd8ffb84e947f82999c682b666a7\">QVariant</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_embed_event.html#a1d1cfd8ffb84e947f82999c682b666a7\">QWSEmbedEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7\">QWSEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_region_event.html#a1d1cfd8ffb84e947f82999c682b666a7\">QWSRegionEvent</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";