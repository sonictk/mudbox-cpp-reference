var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Namespace Members</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'namespacemembers_l.html\', tocPrefix);\n\
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
            <h1>Namespace Members</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespace&#160;List</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespacemembers.html\"><span>Namespace&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow3\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespacemembers.html\"><span>All</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval.html\"><span>Enumerator</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_k.html#index_k\"><span>k</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespacemembers_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_q.html#index_q\"><span>q</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_z.html#index_z\"><span>z</span></a></li>\n\
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
<div class=\"textblock\">Here is a list of all namespace members with links to the namespace documentation for each member:</div>\n\
\n\
<h3><a class=\"anchor\" id=\"index_l\"></a>- l -</h3><ul>\n\
<li>LastCategory\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccbadc1121112eeed26f17f8bac276a26a27\">Phonon</a>\n\
</li>\n\
<li>LastCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac8eabf66c9bfd464553917271e90ea63a01d9abd40ed731a9898908df02acc808\">Qt</a>\n\
</li>\n\
<li>LastGestureType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a2a0c37051efa1205aa5aade68616c947a0e927b23e5fefc5e58f1a64110be01ea\">Qt</a>\n\
</li>\n\
<li>LAYER_DIVIDER\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1lib_p_s_d.html#a71c8c35b6034cd95eac83fb1ed11fb2aacab84ea40b64b0fcbd878607b0506642\">adsk::libPSD</a>\n\
</li>\n\
<li>LAYER_NORMAL\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1lib_p_s_d.html#a71c8c35b6034cd95eac83fb1ed11fb2aa097f709006eb9e397c9868e13242e125\">adsk::libPSD</a>\n\
</li>\n\
<li>LAYER_SET_CLOSED\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1lib_p_s_d.html#a71c8c35b6034cd95eac83fb1ed11fb2aabbe323bfef1cc74bd75c8dec5ebc9a05\">adsk::libPSD</a>\n\
</li>\n\
<li>LAYER_SET_OPEN\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1lib_p_s_d.html#a71c8c35b6034cd95eac83fb1ed11fb2aab40cbd1a5d8d6290de1e360d0ae3907b\">adsk::libPSD</a>\n\
</li>\n\
<li>layerType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1lib_p_s_d.html#a71c8c35b6034cd95eac83fb1ed11fb2a\">adsk::libPSD</a>\n\
</li>\n\
<li>LayoutDirection\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a02237ea95483490c47355adc9c82bea2\">Qt</a>\n\
</li>\n\
<li>LayoutDirectionAuto\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a02237ea95483490c47355adc9c82bea2af748b27a5ba80141384fac3cae7107d6\">Qt</a>\n\
</li>\n\
<li>LeftArrow\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae040d7d64b46dd1dc796225aa77c2112ad1cdcbb9f0878ccfc73ef07bf17f7f04\">Qt</a>\n\
</li>\n\
<li>LeftButton\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac1ec3647c005eacad401b06e7e18f711a3955a0a6074e8c316cbe40ce1a53e37f\">Qt</a>\n\
</li>\n\
<li>LeftDockWidgetArea\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ab88fd339058ad3dd3f124e253d332b52aef438b9298cef4edb5544316aa6c5444\">Qt</a>\n\
</li>\n\
<li>LeftSection\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#afb8b18945ec9107c30c34230da64661ea7c894f96bc767b7f8adca57bf5d489ec\">Qt</a>\n\
</li>\n\
<li>LeftToolBarArea\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a2a7fad286de32608d520b88e499a53acacce99f4b3d39335fd079f251f86f6ea4\">Qt</a>\n\
</li>\n\
<li>LeftToRight\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a02237ea95483490c47355adc9c82bea2aa7fe5ef0467d6615ac7482dd73a9c6c9\">Qt</a>\n\
</li>\n\
<li>lightGray\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae03fc486532da08d7b21f636fe547548a0bf1bb53d1cc23a4ccfc792d60f36bb2\">Qt</a>\n\
</li>\n\
<li>LinearGradientPattern\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af67a889bc5e9f8ab3a59fe58b0fa2128a4ead4abda996df6c8e61110c7d4f304c\">Qt</a>\n\
</li>\n\
<li>LinearUnits\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a721dcea653000afda0b55a897b0730ab\">mudbox</a>\n\
</li>\n\
<li>LineBoundary\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8a7b6aacc795b2e76347658ecaf82436ae\">QAccessible2</a>\n\
</li>\n\
<li>LinkAction\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a7657ec1631bb69c83a7dc76316b8f6cbaf4d322d49007151987af913adf776a05\">Qt</a>\n\
</li>\n\
<li>LinksAccessibleByKeyboard\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a5266eb3d2a3b93307e31080550accd62a98306e3543bc5a457e2044e7450c8638\">Qt</a>\n\
</li>\n\
<li>LinksAccessibleByMouse\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a5266eb3d2a3b93307e31080550accd62a6437a60756ff21a72a85743502b53e32\">Qt</a>\n\
</li>\n\
<li>LoadingState\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a5d74787dedbc4e11c1ab15bf487e61f8ad87fc9859e6c3daa75a52b826be4f661\">Phonon</a>\n\
</li>\n\
<li>LocalDate\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ad3fab6f8a7fdf9fa0d9dea7d34750d84a1d864e73384de5a780243d8e09c63e79\">Qt</a>\n\
</li>\n\
<li>LocaleDate\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ad3fab6f8a7fdf9fa0d9dea7d34750d84a2dcb16c3ecda052e7b325a3d2aa9df89\">Qt</a>\n\
</li>\n\
<li>LocalTime\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a086e8949e94db04a42ac2e0ee3ba778fa11e670f575823d06aba8095453ad4895\">Qt</a>\n\
</li>\n\
<li>LocateMethod\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a434f56cff1b621d17b787d6b80719baf\">mapextraction</a>\n\
</li>\n\
<li>Location\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_sql.html#aecaf6a9545fa815deb4b8e64e144ce43\">QSql</a>\n\
</li>\n\
<li>locCustom\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a434f56cff1b621d17b787d6b80719bafa875c6da87b0bdaaf049277d75bc65987\">mapextraction</a>\n\
</li>\n\
<li>locRaycast\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a434f56cff1b621d17b787d6b80719bafaa4218cbedf494bb1bb50efd3e0716989\">mapextraction</a>\n\
</li>\n\
<li>locSubdivision\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a434f56cff1b621d17b787d6b80719bafa5c861e785551a504502d4faef4e7703b\">mapextraction</a>\n\
</li>\n\
<li>locUnknown\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a434f56cff1b621d17b787d6b80719bafa7b0757732eb3dbd31cb0e3d36266032c\">mapextraction</a>\n\
</li>\n\
<li>LogicalCoordinates\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a8bc166d5dce2d4d9a440c02e1d2df8aeabb1ec746b8183a2d4fef52ba1c61a8fe\">Qt</a>\n\
</li>\n\
<li>LogicalMoveStyle\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af038f9201e509ff024bd592b9a1ea72aafa8f8764a1a44ed11fa2b50389d5c59a\">Qt</a>\n\
</li>\n\
<li>LogText\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ab6ea0063f7246ac0beecb0cf3cb2b126abfe840047ae9cb4be615862c51d6916a\">Qt</a>\n\
</li>\n\
<li>LowEventPriority\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a08465fe6904adf8c8d29f737f43f1fdaa33c613ca8ef4091234739fd0b9837ce2\">Qt</a>\n\
</li>\n\
<li>LowPrecisionDouble\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_sql.html#ae50ebdabfd529f119b3b239c670d52f8a58edecfb0afd17b178fc56832799481b\">QSql</a>\n\
</li>\n\
<li>LowPrecisionInt32\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_sql.html#ae50ebdabfd529f119b3b239c670d52f8a7e810aebd70926e5fc1d24aa77587ffb\">QSql</a>\n\
</li>\n\
<li>LowPrecisionInt64\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_sql.html#ae50ebdabfd529f119b3b239c670d52f8a207b554648d3fa69e27c98a2cfa6fddf\">QSql</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";