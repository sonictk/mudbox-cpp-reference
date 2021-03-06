var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Class Members - Properties</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_prop.html\', tocPrefix);\n\
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
            <h1>Class Members - Properties</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_eval.html\"><span>Enumerator</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_prop.html\"><span>Properties</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_rela.html\"><span>Related&#160;Functions</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_prop.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_q.html#index_q\"><span>q</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_z.html#index_z\"><span>z</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_a\"></a>- a -</h3><ul>\n\
<li>accelerated\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_spin_box.html#a7e17650ddbe6b41ad2a107d0fddd5eda\">QAbstractSpinBox</a>\n\
</li>\n\
<li>acceleration\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_pan_gesture.html#a04662b35d5ed3b1e44bdc5da965747d1\">QPanGesture</a>\n\
</li>\n\
<li>acceptableInput\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_spin_box.html#a95512c5639a85fece4fb919cd54b613a\">QAbstractSpinBox</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_line_edit.html#a95512c5639a85fece4fb919cd54b613a\">QLineEdit</a>\n\
</li>\n\
<li>acceptDrops\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget.html#a9ad9bca54841d30158ef3bf0218cefc3\">QWidget</a>\n\
</li>\n\
<li>acceptMode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_file_dialog.html#a828351c07edc19cf351d8fd525b17255\">QFileDialog</a>\n\
</li>\n\
<li>acceptRichText\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_edit.html#a21b776fc61155b52a55ca458d9d1dc62\">QTextEdit</a>\n\
</li>\n\
<li>accessibleDescription\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget.html#a5486c1b81f19783b61867605d5ba6993\">QWidget</a>\n\
</li>\n\
<li>accessibleName\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget.html#aa019d78798abb512d5077616bb4d5076\">QWidget</a>\n\
</li>\n\
<li>activationOrder\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_mdi_area.html#aadad2ad84f8fd77fa324c1506644f2bd\">QMdiArea</a>\n\
</li>\n\
<li>active\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_timer.html#a03c996f9fcf0e10baeb3e700be0c409a\">QTimer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_undo_stack.html#a03c996f9fcf0e10baeb3e700be0c409a\">QUndoStack</a>\n\
</li>\n\
<li>activeThreadCount\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_thread_pool.html#ae37446b17745d30b33e303241a44daf3\">QThreadPool</a>\n\
</li>\n\
<li>alignment\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_spin_box.html#a8999f4fffe13d8f199de34f8f4e3aee8\">QAbstractSpinBox</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_view.html#a8999f4fffe13d8f199de34f8f4e3aee8\">QGraphicsView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_group_box.html#a8999f4fffe13d8f199de34f8f4e3aee8\">QGroupBox</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_label.html#a8999f4fffe13d8f199de34f8f4e3aee8\">QLabel</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_line_edit.html#a8999f4fffe13d8f199de34f8f4e3aee8\">QLineEdit</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_progress_bar.html#a8999f4fffe13d8f199de34f8f4e3aee8\">QProgressBar</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_scroll_area.html#a8999f4fffe13d8f199de34f8f4e3aee8\">QScrollArea</a>\n\
</li>\n\
<li>allColumnsShowFocus\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_tree_view.html#a753bd0982f5fafaa89d87560fac3a0a4\">QTreeView</a>\n\
</li>\n\
<li>allowedAreas\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_dock_widget.html#afb289ddad22813f7ab469ddfd16345e1\">QDockWidget</a>\n\
</li>\n\
<li>alternatingRowColors\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_item_view.html#a031adfc0d22da8c460a0a0416a19ddbb\">QAbstractItemView</a>\n\
</li>\n\
<li>angle\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_rotation.html#afeb394ee506f5642a6db2b27a26af405\">QGraphicsRotation</a>\n\
</li>\n\
<li>animated\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_main_window.html#a613e75ed4c6d0916b99a68890f2c6a32\">QMainWindow</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_state_machine.html#a613e75ed4c6d0916b99a68890f2c6a32\">QStateMachine</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_tree_view.html#a613e75ed4c6d0916b99a68890f2c6a32\">QTreeView</a>\n\
</li>\n\
<li>applicationName\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_core_application.html#a236960a1a2644db0ffe2b03179ccc473\">QCoreApplication</a>\n\
</li>\n\
<li>applicationVersion\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_core_application.html#a5a6a922f4e44d248164e383c02f55cd0\">QCoreApplication</a>\n\
</li>\n\
<li>arrowType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_tool_button.html#a7500c4eaf24c461c3dd2cd18b1a88b0f\">QToolButton</a>\n\
</li>\n\
<li>aspectRatio\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#a3e6c665df13e7f6f7d3306e44dd9e733\">VideoWidget</a>\n\
</li>\n\
<li>autoClose\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_progress_dialog.html#a362b3e7366d0013d749dc5043a27de07\">QProgressDialog</a>\n\
</li>\n\
<li>autoCompletion\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_combo_box.html#acdb479b1243546599256bcb37d1e4bca\">QComboBox</a>\n\
</li>\n\
<li>autoCompletionCaseSensitivity\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_combo_box.html#a223db2a4b0786b308c63d6eb1e4985fa\">QComboBox</a>\n\
</li>\n\
<li>autoDefault\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_push_button.html#a2430a1b003c686dc41bfe42ca6e720cf\">QPushButton</a>\n\
</li>\n\
<li>autoExclusive\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_button.html#ae5efbe142e822552bd4e1aae6c48afbd\">QAbstractButton</a>\n\
</li>\n\
<li>autoExpandDelay\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_tree_view.html#a801c940455f6abc17de52a7c18b3f093\">QTreeView</a>\n\
</li>\n\
<li>autoFillBackground\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_widget.html#a2bab306c28e1c0e1f512d02f8e88b277\">QGraphicsWidget</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget.html#a2bab306c28e1c0e1f512d02f8e88b277\">QWidget</a>\n\
</li>\n\
<li>autoFormatting\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_edit.html#ac89ed73d51119be5ccd71dedfab48dd3\">QTextEdit</a>\n\
</li>\n\
<li>autoRaise\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_tool_button.html#a434bbd11378af5bc263eac9602b1972b\">QToolButton</a>\n\
</li>\n\
<li>autoRepeat\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_button.html#abc75497d3f5a1b9a2560b33789ae6e89\">QAbstractButton</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_action.html#abc75497d3f5a1b9a2560b33789ae6e89\">QAction</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shortcut.html#abc75497d3f5a1b9a2560b33789ae6e89\">QShortcut</a>\n\
</li>\n\
<li>autoRepeatDelay\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_button.html#a78e9a2567eb26827c4815d4947282a03\">QAbstractButton</a>\n\
</li>\n\
<li>autoRepeatInterval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_button.html#ae1b3a0837642d6019f39e8ba875cad3b\">QAbstractButton</a>\n\
</li>\n\
<li>autoReset\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_progress_dialog.html#aacc8ab5a8068dea6333231f3ba0d984d\">QProgressDialog</a>\n\
</li>\n\
<li>autoScroll\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_item_view.html#ad6a03afadc2b7f0b96418178078687d1\">QAbstractItemView</a>\n\
</li>\n\
<li>autoScrollMargin\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_item_view.html#aa3b123e61b0b7f552e86dae26b509c38\">QAbstractItemView</a>\n\
</li>\n\
<li>autoSipEnabled\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_application.html#aaf6de6c6b1bb9367509e5632e114b7a2\">QApplication</a>\n\
</li>\n\
<li>axis\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_rotation.html#af25bca94c809c83cbb86042133932628\">QGraphicsRotation</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";