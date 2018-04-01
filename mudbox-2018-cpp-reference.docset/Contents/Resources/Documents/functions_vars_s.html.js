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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_vars_s.html\', tocPrefix);\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_t.html#index_t\"><span>t</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_s\"></a>- s -</h3><ul>\n\
<li>s\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_resize_event.html#ace914af5a58250bfc5d6f2cf6c4b1d26\">QResizeEvent</a>\n\
</li>\n\
<li>s_bActive\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_checkable_float_array.html#a51f50f6fbfd17751950310e7d15e74f1\">CheckableFloatArray</a>\n\
</li>\n\
<li>s_cBadAlloc\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a26adf303a01076f7504f6668aa81009c\">Error</a>\n\
</li>\n\
<li>s_iCompositingFBO\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture_mixer.html#a2486825f943ee12c43354c454a36129c\">TextureMixer</a>\n\
</li>\n\
<li>s_pHead\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_block.html#af18e077222d54b609f54a65221b65fa3\">Block</a>\n\
</li>\n\
<li>s_pSignalMapper\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_help_button.html#a9860ee41ac8e69efc25a311cb15750de\">HelpButton</a>\n\
</li>\n\
<li>saturation\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_color.html#aa716225b88916e652cabc86589c370b5\">QColor</a>\n\
</li>\n\
<li>save\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_variant_1_1_handler.html#a8d4ccbbdc78efdf37d59e9690edb445c\">QVariant::Handler</a>\n\
</li>\n\
<li>scaleX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_painter_1_1_pixmap_fragment.html#a96888c876a33ec8789ee0376d15bda03\">QPainter::PixmapFragment</a>\n\
</li>\n\
<li>scaleY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_painter_1_1_pixmap_fragment.html#a6ba06bd7c3ea612af27d76aeaca9ac61\">QPainter::PixmapFragment</a>\n\
</li>\n\
<li>SceneMembershipEvent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_scene.html#afa2da86b446dbab73b1d882fa79048de\">Scene</a>\n\
</li>\n\
<li>ScenePreDeletedEvent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_kernel.html#ab36608e29d7c2fd0b149938daa40f802\">Kernel</a>\n\
</li>\n\
<li>SceneRenderEvent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_view_port.html#ac30b2291f710e0747df80c0e374f0c9e\">ViewPort</a>\n\
</li>\n\
<li>screen\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_platform_cursor.html#a67361fcd70c249adc43a73f6f3bfd322\">QPlatformCursor</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_screen_transformation_event_1_1_simple_data.html#a3109b0889cec9f0de874a2bdc1f84372\">QWSScreenTransformationEvent::SimpleData</a>\n\
</li>\n\
<li>screenclut\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_screen.html#ae2b55bf5a71c3d9942b848297a4aba9f\">QScreen</a>\n\
</li>\n\
<li>screencols\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_screen.html#a73e667350ef11d44f5a2e85731bc4e52\">QScreen</a>\n\
</li>\n\
<li>screenPoints\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_w_s_pointer_calibration_data.html#ab2f9042b901b4236808bc79a1810993f\">QWSPointerCalibrationData</a>\n\
</li>\n\
<li>second\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html#a9a8a97f32d498c09c0f1f82c8a67bd6f\">QPair&lt; T1, T2 &gt;</a>\n\
</li>\n\
<li>section\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_header.html#ab217561ce555727ff977aa053656a686\">QStyleOptionHeader</a>\n\
</li>\n\
<li>SelectedBrush\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_interface.html#a34d227ceed618eef912a3bf894ee3aae\">Interface</a>\n\
</li>\n\
<li>SelectedNode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_scene.html#a3f5302aca3cdbbc3e142390155571e8c\">Scene</a>\n\
</li>\n\
<li>selectedPosition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_header.html#abb274499b3a87699e15aedcd9c3ba1d0\">QStyleOptionHeader</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tab.html#abb274499b3a87699e15aedcd9c3ba1d0\">QStyleOptionTab</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tool_box_v2.html#abb274499b3a87699e15aedcd9c3ba1d0\">QStyleOptionToolBoxV2</a>\n\
</li>\n\
<li>selectedTabRect\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tab_bar_base.html#a032d014914a81f659d29510a36add96f\">QStyleOptionTabBarBase</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tab_widget_frame_v2.html#a032d014914a81f659d29510a36add96f\">QStyleOptionTabWidgetFrameV2</a>\n\
</li>\n\
<li>selections\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_abstract_text_document_layout_1_1_paint_context.html#a93eaf7c94e0000c84f1e095f2b0bdcbd\">QAbstractTextDocumentLayout::PaintContext</a>\n\
</li>\n\
<li>selfDestruct\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_engine.html#a78fc65ea36be73d066fffa6c879d89bd\">QPaintEngine</a>\n\
</li>\n\
<li>send_event\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_g_l_x_buffer_clobber_event_s_g_i_x.html#ac4f71daa70e286c44f1dea3e50b10a44\">GLXBufferClobberEventSGIX</a>\n\
</li>\n\
<li>sendChildEvents\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_object_data.html#a70fbfdde1044c2a062dde18c0b77aea7\">QObjectData</a>\n\
</li>\n\
<li>seq\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_auth_header.html#a93d8dedf52a07894419db182ed82a0e6\">AuthHeader</a>\n\
</li>\n\
<li>sequence\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shortcut_event.html#a93729585d8535c4d3c36df788fece4ad\">QShortcutEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_sequence_holder1.html#aae9bd69432c806ce0c10016839a874a2\">SequenceHolder1&lt; Sequence, Base, Functor &gt;</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_sequence_holder2.html#aae9bd69432c806ce0c10016839a874a2\">SequenceHolder2&lt; Sequence, Base, Functor1, Functor2 &gt;</a>\n\
</li>\n\
<li>serial\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_g_l_x_buffer_clobber_event_s_g_i_x.html#a1e3162f089d71a92c383b398715e0c92\">GLXBufferClobberEventSGIX</a>\n\
</li>\n\
<li>servershmid\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_connected_event_1_1_simple_data.html#a406e449b91a3633d34519d27928c1342\">QWSConnectedEvent::SimpleData</a>\n\
</li>\n\
<li>serverVersion\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_v_fb_header.html#a89af9728586e10491e22cdfd2654e314\">QVFbHeader</a>\n\
</li>\n\
<li>shader\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#af81c823ed562dc5eec5d2b361ce9746a\">QGLFunctionsPrivate</a>\n\
</li>\n\
<li>shaders\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#adf842bb61d5de6d8c05f39f28599ba7c\">QGLFunctionsPrivate</a>\n\
</li>\n\
<li>shape\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_rubber_band.html#a4673f4f21627fe58743376d21e460659\">QStyleOptionRubberBand</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tab.html#a73fa12d3edf2d8812dd3504a2a5e26d2\">QStyleOptionTab</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tab_bar_base.html#a73fa12d3edf2d8812dd3504a2a5e26d2\">QStyleOptionTabBarBase</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_tab_widget_frame.html#a73fa12d3edf2d8812dd3504a2a5e26d2\">QStyleOptionTabWidgetFrame</a>\n\
</li>\n\
<li>sharable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html#ad3ca6a998291dad0d2ecac0a13a206b2\">QContiguousCacheData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_hash_data.html#ad3ca6a998291dad0d2ecac0a13a206b2\">QHashData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_linked_list_data.html#ad3ca6a998291dad0d2ecac0a13a206b2\">QLinkedListData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_list_data_1_1_data.html#ad3ca6a998291dad0d2ecac0a13a206b2\">QListData::Data</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_map_data.html#ad3ca6a998291dad0d2ecac0a13a206b2\">QMapData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_vector_data.html#ad3ca6a998291dad0d2ecac0a13a206b2\">QVectorData</a>\n\
</li>\n\
<li>shared\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_linux_fb_screen.html#aba86dd0ef312f5301c03c05acb17d33a\">QLinuxFbScreen</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/union_q_variant_1_1_private_1_1_data.html#af39e0edc66563ba6d93a884e8092c0c1\">QVariant::Private::Data</a>\n\
</li>\n\
<li>shared_null\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_hash_data.html#afdaa87c0fe12ddf9a0677e2cbcaead43\">QHashData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_linked_list_data.html#a7462436d4fddd71eddc5a6c96d143401\">QLinkedListData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_list_data.html#afcda8376bc9ce146ac97481aaa5ac97a\">QListData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_map_data.html#a8f40ae120e7f914528247e4d3e260ee4\">QMapData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_vector_data.html#a2a81715bdff501dea9f416b7af8c17f5\">QVectorData</a>\n\
</li>\n\
<li>showDecorationSelected\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_view_item.html#a1377abd570f0fade96c083ef80211be1\">QStyleOptionViewItem</a>\n\
</li>\n\
<li>sid\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shortcut_event.html#a53fe45b9d43c0da75fb377b484e44426\">QShortcutEvent</a>\n\
</li>\n\
<li>signature\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_additional_layer_info.html#a32bcd003887ba3429d144be1c0ba1fad\">AdditionalLayerInfo</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_i_m_a_g_e_r_e_s_o_u_r_c_e_s.html#a32bcd003887ba3429d144be1c0ba1fad\">IMAGERESOURCES</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_p_s_d___f_i_l_e___h_e_a_d_e_r.html#ab2914a69436eb03ddb2a13fbf7ddcfad\">PSD_FILE_HEADER</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_section_divider_setting.html#a32bcd003887ba3429d144be1c0ba1fad\">SectionDividerSetting</a>\n\
</li>\n\
<li>simpleData\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_connected_event.html#a433dc598b13cc0167955db9bd877d662\">QWSConnectedEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_creation_event.html#a74e02bf551160b1a82359852cf1107ca\">QWSCreationEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_embed_event.html#a405801b1c1a171ca296f34958dd764f1\">QWSEmbedEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_focus_event.html#a511412153740f57efd4c04555b1b860d\">QWSFocusEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_font_event.html#a7596bce84b5dedfd5887e2a416aedcf3\">QWSFontEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#a6583add5e51d649611ec124a518995bd\">QWSIMEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_init_event.html#a436f1af04b9d20766b5a00fbc04a9d37\">QWSIMInitEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_query_event.html#a878e6d2f53a18f431e6178b4d038ddb4\">QWSIMQueryEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_key_event.html#ab26ea13cd8e2b68e6ba838fc842951c8\">QWSKeyEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_max_window_rect_event.html#ae263c783fbd549d77b44f0fd2634e30f\">QWSMaxWindowRectEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_mouse_event.html#aa5c6b9d0d59406380bf512cc7779bee5\">QWSMouseEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_property_notify_event.html#adb7fbaa6ea80d5f6c57fa2b6dd87b0a9\">QWSPropertyNotifyEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_property_reply_event.html#ae9e228f462d43ca2ee914b38e6274110\">QWSPropertyReplyEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_q_cop_message_event.html#a1230533761b6ca923dc20aae02d6adb8\">QWSQCopMessageEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_region_event.html#a1f9551899d598baf5db5d2070ce89a29\">QWSRegionEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_screen_transformation_event.html#a6f60d69f5c06d6978493af1586ddeb88\">QWSScreenTransformationEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_selection_clear_event.html#a868da762c9f517c8cb9afb93eed2efd5\">QWSSelectionClearEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_selection_notify_event.html#a418c3db2d9bcbe73af8a93fe1e07857f\">QWSSelectionNotifyEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_selection_request_event.html#a6e9aad80abe548b5f6c90b87723bf886\">QWSSelectionRequestEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_window_operation_event.html#a8fd1c077fb26f6e4698025ef42dbea27\">QWSWindowOperationEvent</a>\n\
</li>\n\
<li>simpleDataPtr\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#a37fe16b68e6db6793c74b2ff7644df7d\">QWSProtocolItem</a>\n\
</li>\n\
<li>simpleLen\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#ac9c0479cb31c83f5ca2316ebe7bf20d5\">QWSProtocolItem</a>\n\
</li>\n\
<li>singleStep\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_slider.html#ae224ef5951ef8fae33c06ce008cd9a5c\">QStyleOptionSlider</a>\n\
</li>\n\
<li>size\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_file_engine_1_1_map_extension_option.html#a88cfa0e2471d927eaa05f13d029f0179\">QAbstractFileEngine::MapExtensionOption</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#a7648c0f9f61f2403cb2e334e3f4e3fb0\">QGLFunctionsPrivate</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_hash_data.html#a439227feff9d7f55384e8780cfc2eb82\">QHashData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_linked_list_data.html#a439227feff9d7f55384e8780cfc2eb82\">QLinkedListData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_map_data.html#a439227feff9d7f55384e8780cfc2eb82\">QMapData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_screen.html#a439227feff9d7f55384e8780cfc2eb82\">QScreen</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_screen_cursor.html#a3d35d44d9c21b79d565669248204c412\">QScreenCursor</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_vector_data.html#a439227feff9d7f55384e8780cfc2eb82\">QVectorData</a>\n\
</li>\n\
<li>sizehint_forced\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget_data.html#ae4a3fc664d57c0eb6c4d8ca3a1ab901c\">QWidgetData</a>\n\
</li>\n\
<li>sizes\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_icon_engine_v2_1_1_available_sizes_argument.html#a7c863a29540d2cdc66fb8e7645aa8712\">QIconEngineV2::AvailableSizesArgument</a>\n\
</li>\n\
<li>sliderPosition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_slider.html#ae200a7de5497b8f160b62b17a49bf30d\">QStyleOptionSlider</a>\n\
</li>\n\
<li>sliderValue\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_slider.html#a59799aa9042b543c5d008779c5e35a77\">QStyleOptionSlider</a>\n\
</li>\n\
<li>sortColumn\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_q3_list_view.html#a0312252a44cae5d67871436d878f027a\">QStyleOptionQ3ListView</a>\n\
</li>\n\
<li>sortIndicator\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_header.html#abf8751890a3ae75cfcacb4e8810863a8\">QStyleOptionHeader</a>\n\
</li>\n\
<li>source\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_blend_channel_info.html#a32ee136f9a3309d9f5aec70ddaebc420\">BlendChannelInfo</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#a2a40d3196f70e92c3aff6e25b5c2436d\">QGLFunctionsPrivate</a>\n\
</li>\n\
<li>sourceLeft\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_painter_1_1_pixmap_fragment.html#a2eba1d1cee1e1708a58497cb4c35e0af\">QPainter::PixmapFragment</a>\n\
</li>\n\
<li>sourceTop\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_painter_1_1_pixmap_fragment.html#ab176e37933f477bcde861094bcf7ba98\">QPainter::PixmapFragment</a>\n\
</li>\n\
<li>srcAlpha\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#aab4494e54899fbb877c93168d0436b57\">QGLFunctionsPrivate</a>\n\
</li>\n\
<li>srcHeight\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_g_l_x_pipe_rect.html#a7e7fdf395cb1b3138cc609c3f1a79cab\">GLXPipeRect</a>\n\
</li>\n\
<li>srcWidth\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_g_l_x_pipe_rect.html#a4870d9a36c1807f11cb979aa80fddfe7\">GLXPipeRect</a>\n\
</li>\n\
<li>srcXOrigin\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_g_l_x_pipe_rect.html#a14a32d513a6133a3906071684545a9da\">GLXPipeRect</a>\n\
</li>\n\
<li>srcYOrigin\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_g_l_x_pipe_rect.html#a7ed2930a1923ef08748e3b17fd5c8386\">GLXPipeRect</a>\n\
</li>\n\
<li>start\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_contiguous_cache_data.html#a37722a150250e2a5a98e5e0d11e53449\">QContiguousCacheData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#a37722a150250e2a5a98e5e0d11e53449\">QInputMethodEvent::Attribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_pool_entry.html#a885b350339beb75f5940572b641aaa58\">QPoolEntry</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_layout_1_1_format_range.html#a37722a150250e2a5a98e5e0d11e53449\">QTextLayout::FormatRange</a>\n\
</li>\n\
<li>state\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_l_a_y_e_r_s_t_a_t_e.html#aaf25dcf33b1f9ee9ffba505dcda80219\">LAYERSTATE</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_icon_engine_v2_1_1_available_sizes_argument.html#a670c9c035048d9de59b41f0a6affa70d\">QIconEngineV2::AvailableSizesArgument</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_engine.html#a0310b9f189c95d59362a5eb91c5045a1\">QPaintEngine</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option.html#af78d86e70621b136e706895386c4bb6d\">QStyleOption</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_window_system_interface_1_1_touch_point.html#a925b7bdc07b6998d09413e15bf25bd53\">QWindowSystemInterface::TouchPoint</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_mouse_event_1_1_simple_data.html#a89f234133d3efe315836311cbf21c64b\">QWSMouseEvent::SimpleData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_property_notify_event_1_1_simple_data.html#a89f234133d3efe315836311cbf21c64b\">QWSPropertyNotifyEvent::SimpleData</a>\n\
</li>\n\
<li>state_data\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_text_codec_1_1_converter_state.html#a912da4c5117fe27ed8ea8d2185fb1f97\">QTextCodec::ConverterState</a>\n\
</li>\n\
<li>static_metacall\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_meta_object_extra_data.html#acd4f82675244cca57fe7205376d4e3fd\">QMetaObjectExtraData</a>\n\
</li>\n\
<li>staticMetaObject\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_object_description_model.html#a6e5c84440b8fafb21c9fe2bf86fd2386\">ObjectDescriptionModel&lt; type &gt;</a>\n\
</li>\n\
<li>staticQtMetaObject\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_object.html#a02703652a1697cfbb6b53a4d039b6b73\">QObject</a>\n\
</li>\n\
<li>status\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a54849a1c58ce64ba16a055ad9555a027\">QTransportAuth::Data</a>\n\
</li>\n\
<li>stepEnabled\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_spin_box.html#a1d109803a1abbd821f4852698a8a2779\">QStyleOptionSpinBox</a>\n\
</li>\n\
<li>streamingData\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#a6bbd23195dd517b76ee7d63a6a485892\">QWSIMEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_init_event.html#a6bbd23195dd517b76ee7d63a6a485892\">QWSIMInitEvent</a>\n\
</li>\n\
<li>strictAlignment\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_hash_data.html#a55788e75ea209ec486d27d5c3ebba8d9\">QHashData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_map_data.html#a55788e75ea209ec486d27d5c3ebba8d9\">QMapData</a>\n\
</li>\n\
<li>stride\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#a687527cc1043dd11cba9aad373cefd30\">QGLFunctionsPrivate</a>\n\
</li>\n\
<li>string\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#a32d995b0a620a5785c48c449d5320454\">QGLFunctionsPrivate</a>\n\
</li>\n\
<li>stringdata\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_meta_object.html#a9cf4fc99cc826455445ddf3dc5ba42b2\">QMetaObject</a>\n\
</li>\n\
<li>StrokeBeginEvent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_kernel.html#a48c8c853450cd989f6a1c701ec29bb5a\">Kernel</a>\n\
</li>\n\
<li>StrokeEndEvent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_kernel.html#a65ec2c9fa842c136c0f92f2e1e5d70e4\">Kernel</a>\n\
</li>\n\
<li>strongref\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_data.html#a606886f1995850597d088ef4bfdc076f\">ExternalRefCountData</a>\n\
</li>\n\
<li>style\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_brush_data.html#a973cb13919e92aae07630bba5fee57c8\">QBrushData</a>\n\
</li>\n\
<li>subControls\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_complex.html#a88f1aad970f2f55930ab7fda81677e3a\">QStyleOptionComplex</a>\n\
</li>\n\
<li>suggestedFileNames\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_page_1_1_choose_multiple_files_extension_option.html#a809cef42dd8228f5e1d7b9038f60ba56\">QWebPage::ChooseMultipleFilesExtensionOption</a>\n\
</li>\n\
<li>superdata\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_meta_object.html#a1bb704f025bf717d6886634146cb7317\">QMetaObject</a>\n\
</li>\n\
<li>supportsAlpha\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_screen_cursor.html#a521897dcbbaccbdc677189e839e890c6\">QScreenCursor</a>\n\
</li>\n\
<li>SurfacePt\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_curve_point.html#a11acca52d43cc27035b2fb95d6c27eed\">CurvePoint</a>\n\
</li>\n\
<li>symbol\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_system_locale_1_1_currency_to_string_argument.html#a9a6ac3a7ea7594b357995ac3d36b4f9a\">QSystemLocale::CurrencyToStringArgument</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";