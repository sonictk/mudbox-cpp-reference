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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_vars_w.html\', tocPrefix);\n\
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
      <li><a href=\"#!/url=./cpp_ref/functions_vars_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_v.html#index_v\"><span>v</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars_w.html#index_w\"><span>w</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_w\"></a>- w -</h3><ul>\n\
<li>w\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector4.html#a56eca241e2896b9f57a79589e76fd24b\">Vector4</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#ad658806f7dee0f3cd276c848ab6b2f27\">QGLFunctionsPrivate</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_screen.html#aac374e320caaadeca4874add33b62af2\">QScreen</a>\n\
</li>\n\
<li>wasDeleted\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_object_data.html#a4d951c141fa6b857d78ad57030460846\">QObjectData</a>\n\
</li>\n\
<li>weakref\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_data.html#a04a700d356b6d9d3a6b8fb40e127d7ac\">ExternalRefCountData</a>\n\
</li>\n\
<li>white\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_color.html#ab9856a86534c6af9695f99f3bfa1e472\">Color</a>\n\
</li>\n\
<li>wid\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_item.html#a4fc0ac2980f0de0021899f40b3fad2d2\">QWidgetItem</a>\n\
</li>\n\
<li>widget\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_view_item_v3.html#a7e1f0f617ad88863ae94c49838fb155e\">QStyleOptionViewItemV3</a>\n\
</li>\n\
<li>widget_attributes\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a38154d293ea4bc365258f13c8f7fd5b8\">QWidgetData</a>\n\
</li>\n\
<li>width\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_p_s_d___f_i_l_e___h_e_a_d_e_r.html#aca34d28e3d8bcbcadb8edb4e3af24f8c\">PSD_FILE_HEADER</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_g_l_x_buffer_clobber_event_s_g_i_x.html#a2474a5474cbff19523a51eb1de01cda4\">GLXBufferClobberEventSGIX</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_abstract_font_engine_1_1_glyph_metrics.html#a7d60fff9c44b1e34e8d43905ceb1b195\">QAbstractFontEngine::GlyphMetrics</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#a44c0d6d87ef1a21ae43a40e94a50c5a5\">QGLFunctionsPrivate</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_painter_1_1_pixmap_fragment.html#a3b0eabddce6338bfba03ba42779b8d70\">QPainter::PixmapFragment</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_v_fb_header.html#a2474a5474cbff19523a51eb1de01cda4\">QVFbHeader</a>\n\
</li>\n\
<li>WidthUnit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_r_e_s_o_l_u_t_i_o_n_i_n_f_o.html#ae63eae0a619b95df92745fad50a51c11\">RESOLUTIONINFO</a>\n\
</li>\n\
<li>window\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_connected_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSConnectedEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_embed_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSEmbedEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_focus_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSFocusEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSIMEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_init_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSIMInitEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_query_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSIMQueryEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_key_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSKeyEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_max_window_rect_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSMaxWindowRectEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_mouse_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSMouseEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_property_notify_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSPropertyNotifyEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_property_reply_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSPropertyReplyEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_region_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSRegionEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_selection_clear_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSSelectionClearEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_selection_notify_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSSelectionNotifyEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_selection_request_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSSelectionRequestEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_window_operation_event_1_1_simple_data.html#a65ba7a0b8164c01b33d92b9ab0f2af03\">QWSWindowOperationEvent::SimpleData</a>\n\
</li>\n\
<li>window_flags\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a05416c2e2ebbf943a385001c32277601\">QWidgetData</a>\n\
</li>\n\
<li>window_modality\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a452a557c503bfd9c127ea913ba2da480\">QWidgetData</a>\n\
</li>\n\
<li>window_state\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a1c9b86f03a83e5dcd3e5989a28fc418d\">QWidgetData</a>\n\
</li>\n\
<li>windowId\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_v_fb_header.html#a9c3893f87a0fc314e7b51c6f749b579a\">QVFbHeader</a>\n\
</li>\n\
<li>winid\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a9a18bff4c165aa91bf578b467ea1b62b\">QWidgetData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_internal_window_info.html#abe02d2c82bb31f35b2dc27cb3ac88983\">QWSInternalWindowInfo</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_window_info.html#abe02d2c82bb31f35b2dc27cb3ac88983\">QWSWindowInfo</a>\n\
</li>\n\
<li>WorldPosition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_point.html#a3149dce75bad07bbed2d6a0924827b8c\">CurvePoint</a>\n\
</li>\n\
<li>wrect\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#a414f55624e22122f1ee4d926865312aa\">QWidgetData</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";