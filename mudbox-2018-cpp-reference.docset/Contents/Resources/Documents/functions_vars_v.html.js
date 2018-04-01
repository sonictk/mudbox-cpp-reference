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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_vars_v.html\', tocPrefix);\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars_v.html#index_v\"><span>v</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_v\"></a>- v -</h3><ul>\n\
<li>v\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_t_c.html#a48d9522e58fa05906c6dba23e5745a72\">TC</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#a2c334f26ff7ea66132b96a9b852ddb5f\">QGLFunctionsPrivate</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_locale.html#a67806b49e20fb1170422969965db6ecb\">QLocale</a>\n\
</li>\n\
<li>value\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_color.html#a45b6ca1727572cdda97e00e51305593b\">QColor</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#a303f3de7a8816217b5a6987c647164b1\">QGLFunctionsPrivate</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_hash_node.html#a4fc7f59e3113e19697159919a5aad095\">QHashNode&lt; Key, T &gt;</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#ac7337cb78311810d92013857a57cd677\">QInputMethodEvent::Attribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_map_node.html#a4fc7f59e3113e19697159919a5aad095\">QMapNode&lt; Key, T &gt;</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_map_payload_node.html#a4fc7f59e3113e19697159919a5aad095\">QMapPayloadNode&lt; Key, T &gt;</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_system_locale_1_1_currency_to_string_argument.html#ac7337cb78311810d92013857a57cd677\">QSystemLocale::CurrencyToStringArgument</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#a8f9376121609317caccd24af8495577c\">Basic&lt; T &gt;</a>\n\
</li>\n\
<li>values\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_g_l_functions_private.html#ab1e54cc44bfe2a27e1caf648639622cc\">QGLFunctionsPrivate</a>\n\
</li>\n\
<li>variableData\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_additional_layer_info.html#a669025ed891058a53385609d983de9a0\">AdditionalLayerInfo</a>\n\
</li>\n\
<li>variableResData\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_i_m_a_g_e_r_e_s_o_u_r_c_e_s.html#a25e68d7f7ad48a518763dfd5f81632cd\">IMAGERESOURCES</a>\n\
</li>\n\
<li>variant\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_hint_return_variant.html#a18e9b47c90f82ea8327f85dbb8ff13d1\">QStyleHintReturnVariant</a>\n\
</li>\n\
<li>vector\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_intermediate_results.html#a977327195d55c4f4832755056f0ed51d\">IntermediateResults&lt; T &gt;</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_result_reporter.html#a977327195d55c4f4832755056f0ed51d\">ResultReporter&lt; T &gt;</a>\n\
</li>\n\
<li>version\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_p_s_d___f_i_l_e___h_e_a_d_e_r.html#a48fa24b5d7723dfccbedd98b04a06d82\">PSD_FILE_HEADER</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_hint_return.html#aad880fc4455c253781e8968f2239d56f\">QStyleHintReturn</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option.html#aad880fc4455c253781e8968f2239d56f\">QStyleOption</a>\n\
</li>\n\
<li>vertical\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_tile_rules.html#aa5a34a686105baaf308bda09aae5ec0f\">QTileRules</a>\n\
</li>\n\
<li>verticalTitleBar\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_dock_widget_v2.html#a583f9f0d8712ef104600cbcbbb2cdd9a\">QStyleOptionDockWidgetV2</a>\n\
</li>\n\
<li>viewerVersion\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_v_fb_header.html#ab45b1b74e8cecc29864ba001c9cc9b88\">QVFbHeader</a>\n\
</li>\n\
<li>viewItemPosition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_view_item_v4.html#a939511806aa1bf0dfce50439b8408ef4\">QStyleOptionViewItemV4</a>\n\
</li>\n\
<li>viewportBGRole\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_q3_list_view.html#aaf5f5d58661803ff55181857595ff431\">QStyleOptionQ3ListView</a>\n\
</li>\n\
<li>viewportPalette\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_q3_list_view.html#ab9f124b799bd6bd2b109d06a86ac0772\">QStyleOptionQ3ListView</a>\n\
</li>\n\
<li>ViewportResizeEvent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_view_port.html#a589eb56b2fb1d00fdcc308f35397cc2f\">ViewPort</a>\n\
</li>\n\
<li>vProjection\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_abstract_curve_picker_1_1_curve_hit.html#a3dd84c7650d29792d3ef171bd1f4ce36\">AbstractCurvePicker::CurveHit</a>\n\
</li>\n\
<li>vRes\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_r_e_s_o_l_u_t_i_o_n_i_n_f_o.html#ada162dfa2ad9e4d8f128f8b5ac292fe4\">RESOLUTIONINFO</a>\n\
</li>\n\
<li>vResUnit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structadsk_1_1lib_p_s_d_1_1_r_e_s_o_l_u_t_i_o_n_i_n_f_o.html#a60954acaec5d9f8a48e90cdc26dff091\">RESOLUTIONINFO</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";