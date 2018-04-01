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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_enum_f.html\', tocPrefix);\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_enum_f.html#index_f\"><span>f</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_f\"></a>- f -</h3><ul>\n\
<li>FaceComponent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aae4f4f806daa7b2f5d20f0d57493174c\">Topology</a>\n\
</li>\n\
<li>FaceState\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#a52b421b3c93be001c4133bfcefee929f\">Topology</a>\n\
</li>\n\
<li>FaceType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#a461eba4998b5d5dac48d6102c8c63bec\">Topology</a>\n\
</li>\n\
<li>FadeCurve\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_volume_fader_effect.html#a3a7b06e691ff9a774a60df004cff1336\">VolumeFaderEffect</a>\n\
</li>\n\
<li>FalloffType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_brush_operation.html#ac786781cb6bedb0bd0855182df9f2e7d\">BrushOperation</a>\n\
</li>\n\
<li>Feature\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_controller.html#a94ea57aab7fe0356cbfbd048b1ad971e\">MediaController</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_page.html#a94ea57aab7fe0356cbfbd048b1ad971e\">QWebPage</a>\n\
</li>\n\
<li>FieldAlignment\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_stream.html#a9a5a0944560ec9e12866731033f24031\">QTextStream</a>\n\
</li>\n\
<li>FieldGrowthPolicy\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_form_layout.html#a2dc5e1507376ec802dd032e49a62296c\">QFormLayout</a>\n\
</li>\n\
<li>FileError\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file.html#a0fc5ca7b299e9bb9272800a18217d21d\">QFile</a>\n\
</li>\n\
<li>FileFlag\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_file_engine.html#aaf147d60febb34a38045e25be0a87530\">QAbstractFileEngine</a>\n\
</li>\n\
<li>FileHandleFlag\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file.html#a0971544b0581752bd819d848652aaf4b\">QFile</a>\n\
</li>\n\
<li>FileMode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_dialog.html#a031770da453a180e21dcbef5cf5aeab6\">QFileDialog</a>\n\
</li>\n\
<li>FileName\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_file_engine.html#ab0a96d3b4a8f4745ac734553eb2ec0ca\">QAbstractFileEngine</a>\n\
</li>\n\
<li>FileOwner\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_file_engine.html#af3d60acf9a91ba9c1ba630c759144ee7\">QAbstractFileEngine</a>\n\
</li>\n\
<li>FileTime\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_file_engine.html#a07034e5f0a6268b974069efeb2ab3ae1\">QAbstractFileEngine</a>\n\
</li>\n\
<li>FileType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_web_browser_plugin.html#a2c794c5c13ab4dd7e65bad031dbe41c3\">WebBrowserPlugin</a>\n\
</li>\n\
<li>Filter\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_dir.html#adccf6e8a392b0d35f185df12521c474b\">QDir</a>\n\
</li>\n\
<li>FilterType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_filter.html#a7ef0ab496f57e183b484e62e2053c94f\">ImageFilter</a>\n\
</li>\n\
<li>FindFlag\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_document.html#aac223127447069f40193d15ee0b2b4ea\">QTextDocument</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_page.html#aac223127447069f40193d15ee0b2b4ea\">QWebPage</a>\n\
</li>\n\
<li>Flag\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_option.html#a3f3de3e0d751949b8d0b60ffb302944a\">QTextOption</a>\n\
</li>\n\
<li>Flags\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_target_location.html#aa705cf7e79a21c2352b00ffe20cd295f\">TargetLocation</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295f\">FileExtension</a>\n\
</li>\n\
<li>FloatingPointPrecision\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html#a26847b975fca717de21c48c0ca9bee0a\">QDataStream</a>\n\
</li>\n\
<li>Flow\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list_view.html#ab9b7cb38488f1159d8eed3ffdb2ae314\">QListView</a>\n\
</li>\n\
<li>FontDialogOption\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_font_dialog.html#a17c11fcf47d06806bdb9d1330074bead\">QFontDialog</a>\n\
</li>\n\
<li>FontFamily\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_settings.html#ae7247fa9921cce1e792edd0602a500b5\">QWebSettings</a>\n\
</li>\n\
<li>FontFilter\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_font_combo_box.html#aa453d5951418b1254c90588fd68a5e1b\">QFontComboBox</a>\n\
</li>\n\
<li>FontProperty\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_font_engine.html#a017d0183a29b9d669024129c3c2182e9\">QAbstractFontEngine</a>\n\
</li>\n\
<li>FontSize\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_settings.html#a88cff078229df1c0803a690e4826b5f1\">QWebSettings</a>\n\
</li>\n\
<li>Format\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html#ab4e88c89b3b7ea1735996cc4def22d58\">Image</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image.html#ab4e88c89b3b7ea1735996cc4def22d58\">QImage</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_settings.html#ab4e88c89b3b7ea1735996cc4def22d58\">QSettings</a>\n\
</li>\n\
<li>FormatOption\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_platform_window_format.html#aa1077b59e620f7846dab86128a8820f5\">QPlatformWindowFormat</a>\n\
</li>\n\
<li>FormattingOption\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_url.html#ad6b9fdc48e4716623f8cd2a80d403332\">QUrl</a>\n\
</li>\n\
<li>FormatType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_locale.html#a8dcd21376da83902acea50d9deeb5990\">QLocale</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_format.html#a8dcd21376da83902acea50d9deeb5990\">QTextFormat</a>\n\
</li>\n\
<li>FrameFeature\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_style_option_frame_v2.html#a8d93c5b953d212f861717ed1fde7a6eb\">QStyleOptionFrameV2</a>\n\
</li>\n\
<li>FunctionType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371\">QScriptContextInfo</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";