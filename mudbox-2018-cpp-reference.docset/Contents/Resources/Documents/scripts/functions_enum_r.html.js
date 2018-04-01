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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_enum_r.html\', tocPrefix);\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_enum_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum_t.html#index_t\"><span>t</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_r\"></a>- r -</h3><ul>\n\
<li>RawForm\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_cookie.html#a69bfdfb177b43b9f15766cb8b1bc2ee7\">QNetworkCookie</a>\n\
</li>\n\
<li>ReadElementTextBehaviour\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_xml_stream_reader.html#a1828af4ee0993ca49a698073b250f98f\">QXmlStreamReader</a>\n\
</li>\n\
<li>RealNumberNotation\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_stream.html#a55f73338298e419fee9629c1dcd7f5c9\">QTextStream</a>\n\
</li>\n\
<li>Reason\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_context_menu_event.html#af38960e2d1da2c992b2232eb3f285c4e\">QContextMenuEvent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_scene_context_menu_event.html#af38960e2d1da2c992b2232eb3f285c4e\">QGraphicsSceneContextMenuEvent</a>\n\
</li>\n\
<li>RecursionMode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_mutex.html#ac909ace4c6862c06859dc3ebcd495aa5\">QMutex</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_read_write_lock.html#ac909ace4c6862c06859dc3ebcd495aa5\">QReadWriteLock</a>\n\
</li>\n\
<li>RedrawType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_view_port.html#af25214a8be8fcf9189cf53a7894fc082\">ViewPort</a>\n\
</li>\n\
<li>RegionType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_region.html#aa6498d628b446c18e1c5087341741ec2\">QRegion</a>\n\
</li>\n\
<li>RelationFlag\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_accessible.html#abe67fc85f09bde94432452fcf2cb26e8\">QAccessible</a>\n\
</li>\n\
<li>RelayoutType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_internal.html#a21a2e58341fb96202e6c4c7cba3c54fc\">QInternal</a>\n\
</li>\n\
<li>RenderFlag\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_item.html#aa70b69611e62fc079842163da8ca69ab\">QTextItem</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget.html#aa70b69611e62fc079842163da8ca69ab\">QWidget</a>\n\
</li>\n\
<li>RenderHint\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_painter.html#a0d52d4270c3013e582659bbad54d4635\">QPainter</a>\n\
</li>\n\
<li>RenderLayer\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_frame.html#ad16d91520dd8dbd7a2178564fce5a168\">QWebFrame</a>\n\
</li>\n\
<li>RenderMode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture_pool.html#ac9e546db27bb4f76f47d7e25f24abb88\">TexturePool</a>\n\
</li>\n\
<li>RequestSoftwareInputPanel\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style.html#a76b3e743359e4f16b7413a9a3549af48\">QStyle</a>\n\
</li>\n\
<li>RequiredStatus\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_sql_field.html#a30f1adbd21159749d5ed4f55bfaa6de4\">QSqlField</a>\n\
</li>\n\
<li>ResizeMode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_header_view.html#a9fe8cb65a95a811d67a7c1ada787f3ab\">QHeaderView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list_view.html#a9fe8cb65a95a811d67a7c1ada787f3ab\">QListView</a>\n\
</li>\n\
<li>ResolveFlag\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_script_value.html#a8ded607459b821f5fbb0e555b5fb8621\">QScriptValue</a>\n\
</li>\n\
<li>ResolveProperties\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_font.html#aec6cc62f742b47891074f0123f070e5a\">QFont</a>\n\
</li>\n\
<li>ResourceType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_document.html#a8571efa4409be32e28abf3ea74a0dbb1\">QTextDocument</a>\n\
</li>\n\
<li>RestartHint\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_session_manager.html#af7d6ea09b50fe87ffdd4196392a536f5\">QSessionManager</a>\n\
</li>\n\
<li>RestorePolicy\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_state_machine.html#aa77cc41e05cf48a9acaa13c70d78e1ae\">QStateMachine</a>\n\
</li>\n\
<li>Result\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_transport_auth.html#a28287671eaf7406afd604bd055ba4066\">QTransportAuth</a>\n\
</li>\n\
<li>ResultFlag\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_gesture_recognizer.html#a31bd85f0e06f2fac5dc6f8ad56bc69ba\">QGestureRecognizer</a>\n\
</li>\n\
<li>ResUnit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_descriptor.html#aff206602d40d7834d1a1a69f682c7413\">ImageDescriptor</a>\n\
</li>\n\
<li>Role\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_accessible.html#acdd79a1a4f81dd6ee5cddcb21149b951\">QAccessible</a>\n\
</li>\n\
<li>Roles\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_dir_model.html#aca373d517b80753da645a3f727b257f0\">QDirModel</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_system_model.html#aca373d517b80753da645a3f727b257f0\">QFileSystemModel</a>\n\
</li>\n\
<li>RowWrapPolicy\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_form_layout.html#ac7b6c0f379c60044f740772a175d03ae\">QFormLayout</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";