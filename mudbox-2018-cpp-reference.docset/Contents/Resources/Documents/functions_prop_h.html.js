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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_prop_h.html\', tocPrefix);\n\
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
      <li><a href=\"#!/url=./cpp_ref/functions_prop.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_prop_g.html#index_g\"><span>g</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_prop_h.html#index_h\"><span>h</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_h\"></a>- h -</h3><ul>\n\
<li>handleWidth\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_splitter.html#a6e29fb4a1e1e8ac75f78b9c6a5030f02\">QSplitter</a>\n\
</li>\n\
<li>hasHotSpot\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_gesture.html#a22dc78a6b99e385e8a93c2a7bd0a6365\">QGesture</a>\n\
</li>\n\
<li>hasSelectedText\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_label.html#a005c0e12f7036dd410ff66e2571eda8a\">QLabel</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_line_edit.html#a005c0e12f7036dd410ff66e2571eda8a\">QLineEdit</a>\n\
</li>\n\
<li>hasSelection\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_page.html#a85336d92765368a05a4fdb330cd1f27b\">QWebPage</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_web_view.html#a85336d92765368a05a4fdb330cd1f27b\">QWebView</a>\n\
</li>\n\
<li>headerHidden\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_tree_view.html#a8ff4623951e5366c49fb8d8ba2ea6554\">QTreeView</a>\n\
</li>\n\
<li>headerVisible\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_calendar_widget.html#aaf728304c2bf1da07e49394b2145049c\">QCalendarWidget</a>\n\
</li>\n\
<li>height\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget.html#ad12fc34ce789bce6c8a05d8a17138534\">QWidget</a>\n\
</li>\n\
<li>highlightSections\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_header_view.html#a365f7efe01f732a706cc02076e80181c\">QHeaderView</a>\n\
</li>\n\
<li>historyType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_history_state.html#a4f3a72220aeb030f0c1c71e94755947e\">QHistoryState</a>\n\
</li>\n\
<li>horizontalDirection\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_swipe_gesture.html#a7d6d717366533d19ffc93f6d289e1035\">QSwipeGesture</a>\n\
</li>\n\
<li>horizontalHeaderFormat\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_calendar_widget.html#a1ada2bda37ad26eee74eb6d61e14d028\">QCalendarWidget</a>\n\
</li>\n\
<li>horizontalScrollBarPolicy\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_scroll_area.html#ad5125466658ba33c5aa530f10e40ec9a\">QAbstractScrollArea</a>\n\
</li>\n\
<li>horizontalScrollMode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_abstract_item_view.html#a2c7485b6aab496f8a37c1c9f6a5aab14\">QAbstractItemView</a>\n\
</li>\n\
<li>horizontalSpacing\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_form_layout.html#a26103bf62dc80bb1df21a096cf15fb83\">QFormLayout</a>\n\
</li>\n\
<li>hotSpot\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_gesture.html#a1293e86055171925e09a8f27326159a8\">QGesture</a>\n\
</li>\n\
<li>html\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_text_edit.html#ac284f1d0d8b32c8891da0a27693264ad\">QTextEdit</a>\n\
</li>\n\
<li>hue\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#ac36e68a4a1370d3ff1635403aed33fb5\">VideoWidget</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";