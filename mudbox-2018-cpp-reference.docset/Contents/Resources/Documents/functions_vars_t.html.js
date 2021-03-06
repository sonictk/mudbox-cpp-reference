var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Class Members - Variables</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_vars_t.html\', tocPrefix);\n\
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
            <h1>Class Members - Variables</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_eval.html\"><span>Enumerator</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop.html\"><span>Properties</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_rela.html\"><span>Related&#160;Functions</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars.html#index__\"><span>_</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_a.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_q.html#index_q\"><span>q</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_s.html#index_s\"><span>s</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_z.html#index_z\"><span>z</span></a></li>\n\
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
<li>t\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_event.html#a9b8e73e27617f93d7f09ec6cf4fe15ea\">QEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_linked_list_node.html#aa8888ec579d37bf1b17d7d5bee3b76c1\">QLinkedListNode&lt; T &gt;</a>\n\
</li>\n\
<li>tabBarRect\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tab_bar_base.html#a6328122b88ccaec248c2401552af77b3\">QStyleOptionTabBarBase</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tab_widget_frame_v2.html#a6328122b88ccaec248c2401552af77b3\">QStyleOptionTabWidgetFrameV2</a>\n\
</li>\n\
<li>tabBarSize\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tab_widget_frame.html#a28ae0846eaded157208702aa81266430\">QStyleOptionTabWidgetFrame</a>\n\
</li>\n\
<li>tabWidth\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_menu_item.html#a317ffa17c3e97c94008e2c888480c004\">QStyleOptionMenuItem</a>\n\
</li>\n\
<li>TangentMirrorUpdateEvent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_kernel.html#a65dd571f2e682f60ba795aa81a62e3a8\">Kernel</a>\n\
</li>\n\
<li>text\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_button.html#a3d39cc5a71db46029fdbdb1183d46e98\">QStyleOptionButton</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_group_box.html#a3d39cc5a71db46029fdbdb1183d46e98\">QStyleOptionGroupBox</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_header.html#a3d39cc5a71db46029fdbdb1183d46e98\">QStyleOptionHeader</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_menu_item.html#a3d39cc5a71db46029fdbdb1183d46e98\">QStyleOptionMenuItem</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_progress_bar.html#a3d39cc5a71db46029fdbdb1183d46e98\">QStyleOptionProgressBar</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tab.html#a3d39cc5a71db46029fdbdb1183d46e98\">QStyleOptionTab</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_title_bar.html#a3d39cc5a71db46029fdbdb1183d46e98\">QStyleOptionTitleBar</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tool_box.html#a3d39cc5a71db46029fdbdb1183d46e98\">QStyleOptionToolBox</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tool_button.html#a3d39cc5a71db46029fdbdb1183d46e98\">QStyleOptionToolButton</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_view_item_v4.html#a3d39cc5a71db46029fdbdb1183d46e98\">QStyleOptionViewItemV4</a>\n\
</li>\n\
<li>textAlignment\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_group_box.html#a890baa817056de674474c3b40f1096d4\">QStyleOptionGroupBox</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_header.html#a890baa817056de674474c3b40f1096d4\">QStyleOptionHeader</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_progress_bar.html#a890baa817056de674474c3b40f1096d4\">QStyleOptionProgressBar</a>\n\
</li>\n\
<li>textarget\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#af0748fb02473ae6d3e3e28ee6c5fbe18\">QGLFunctionsPrivate</a>\n\
</li>\n\
<li>textColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_group_box.html#ac04ac84dc8dc109b2e8e47412c5eaf77\">QStyleOptionGroupBox</a>\n\
</li>\n\
<li>textElideMode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_view_item.html#aee1e8989db3f052b69518c7b6eca0b79\">QStyleOptionViewItem</a>\n\
</li>\n\
<li>texture\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#ad178299a46ab21bae64f9a0cb7ecdd73\">QGLFunctionsPrivate</a>\n\
</li>\n\
<li>textVisible\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_progress_bar.html#ab3e14ad09a579647104c83ab537a8a50\">QStyleOptionProgressBar</a>\n\
</li>\n\
<li>threadEngine\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_result_reporter.html#afd5f8c275c4d0ec7ba554c160bf67bac\">ResultReporter&lt; T &gt;</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_starter_base.html#afd5f8c275c4d0ec7ba554c160bf67bac\">ThreadEngineStarterBase&lt; T &gt;</a>\n\
</li>\n\
<li>threadPool\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_thread_engine_base.html#ad5e9771198144d6dfc215c4024a68f88\">ThreadEngineBase</a>\n\
</li>\n\
<li>tickInterval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_slider.html#aeaa1b6cc64e4dd3e25c6ae84f621d371\">QStyleOptionSlider</a>\n\
</li>\n\
<li>tickPosition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_slider.html#a38082a87480d77e93c6cc038cc3eade0\">QStyleOptionSlider</a>\n\
</li>\n\
<li>time\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_mouse_event_1_1_simple_data.html#a42715f65f02da52edc5b22021d8ae670\">QWSMouseEvent::SimpleData</a>\n\
</li>\n\
<li>timeSlice\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_g_l_x_hyperpipe_config_s_g_i_x.html#a4e0ec16a392cd0de59a6d2b23b719a92\">GLXHyperpipeConfigSGIX</a>\n\
</li>\n\
<li>title\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_dock_widget.html#aa93d37c468bf6aea9c9823eb74bd1a48\">QStyleOptionDockWidget</a>\n\
</li>\n\
<li>titleBarFlags\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_title_bar.html#a7adf527873a6c452a45681bd0e8d7e34\">QStyleOptionTitleBar</a>\n\
</li>\n\
<li>titleBarState\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_title_bar.html#a69e6519e0d83ae68d289ef62a4f11e37\">QStyleOptionTitleBar</a>\n\
</li>\n\
<li>toolBarArea\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tool_bar.html#aba718b0349af11afde64b2044af92a38\">QStyleOptionToolBar</a>\n\
</li>\n\
<li>toolButtonStyle\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tool_button.html#ad7a0308ad94d97c24ec16facc8fc49d1\">QStyleOptionToolButton</a>\n\
</li>\n\
<li>top\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1lib_p_s_d_1_1_l_rect.html#af93f4f37fc2ad9c37af4a715423b110c\">LRect</a>\n\
</li>\n\
<li>topLevel\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_map_data.html#ae3393d616b2f2aabccd70f7bbac255e6\">QMapData</a>\n\
</li>\n\
<li>TopologyChange\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#a451723667c387e08511bd37eb3e0cec4\">Mesh</a>\n\
</li>\n\
<li>totalHeight\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_q3_list_view_item.html#ae59c1542e85cecdab33ec76ebefa1384\">QStyleOptionQ3ListViewItem</a>\n\
</li>\n\
<li>transform\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_brush_data.html#a200c631af8682e67afc1e88c9bee9b8a\">QBrushData</a>\n\
</li>\n\
<li>transformation\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_screen_transformation_event_1_1_simple_data.html#a7e11a13ec9fe50533fe58ba75026351b\">QWSScreenTransformationEvent::SimpleData</a>\n\
</li>\n\
<li>transparent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_color.html#a5bae07aa50868b507bd0db744ccf6462\">Color</a>\n\
</li>\n\
<li>transpose\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#adac0b31a83c5888f94d92db4850fc91d\">QGLFunctionsPrivate</a>\n\
</li>\n\
<li>treeStepSize\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_q3_list_view.html#a09ac07c3533b8a96ee8aeba86b98d0a0\">QStyleOptionQ3ListView</a>\n\
</li>\n\
<li>txt\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_key_event.html#a95b1e05781c6695e39d1d730ad9c040d\">QKeyEvent</a>\n\
</li>\n\
<li>type\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_g_l_x_buffer_clobber_event_s_g_i_x.html#ac765329451135abec74c45e1897abf26\">GLXBufferClobberEventSGIX</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_accessible2_1_1_table_model_change.html#a24cf0dd93116571651c276a658aba2db\">TableModelChange</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#a9d2a3b9109be233db7bbb172f9c8fe8c\">QGLFunctionsPrivate</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#aeed092b2afb6aef7bc80ccd236f2c031\">QInputMethodEvent::Attribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_painter_path_1_1_element.html#a84b8bd0a73fb93c91e9628eb4d0856d4\">QPainterPath::Element</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_hint_return.html#ac765329451135abec74c45e1897abf26\">QStyleHintReturn</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option.html#ac765329451135abec74c45e1897abf26\">QStyleOption</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_option_1_1_tab.html#adc744b0ebe33d540c612c8529b2e1975\">QTextOption::Tab</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_variant_1_1_private.html#a4e4020c6e82bee6562d5bc3c1657cafe\">QVariant::Private</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_embed_event_1_1_simple_data.html#ab6f4e6d3fde00ce906e46494f60dfe7a\">QWSEmbedEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_font_event_1_1_simple_data.html#a7720cfa5e476235d84bbe5bb8ad56959\">QWSFontEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#ac765329451135abec74c45e1897abf26\">QWSProtocolItem</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_region_event_1_1_simple_data.html#a4e4020c6e82bee6562d5bc3c1657cafe\">QWSRegionEvent::SimpleData</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";