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
    cpp_ref_adsk_ref_toc.initNavTree(\'namespacemembers_eval_c.html\', tocPrefix);\n\
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
      <li><a href=\"#!/url=./cpp_ref/namespacemembers.html\"><span>All</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_enum.html\"><span>Enumerations</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespacemembers_eval.html\"><span>Enumerator</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_b.html#index_b\"><span>b</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespacemembers_eval_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_q.html#index_q\"><span>q</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_z.html#index_z\"><span>z</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_c\"></a>- c -</h3><ul>\n\
<li>CaseInsensitive\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#aaa929f83398f109dfbff9789108b159ba661bce8278aa797301d87df7dcd5cf10\">Qt</a>\n\
</li>\n\
<li>CaseSensitive\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#aaa929f83398f109dfbff9789108b159ba69a0083547e2ee614b9ab57d7e0471a9\">Qt</a>\n\
</li>\n\
<li>Cd\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae650df08ed905fbf1ccc93738f13ecb3aa043a6d7de237184c84ed57afd00d124\">Phonon</a>\n\
</li>\n\
<li>CharBoundary\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8ab6e335adc5993e9cd399b6ca487cd641\">QAccessible2</a>\n\
</li>\n\
<li>Checked\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a637ca8d507772dc5a9bc8a4e449231c7ab07e993a3b7bdb2623a1ade34c337a33\">Qt</a>\n\
</li>\n\
<li>CheckStateRole\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a28105a4472738d85f6d50cb45a433904a21cc16b1abeb471528f0331e8513cb4f\">Qt</a>\n\
</li>\n\
<li>ClickFocus\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ab55053d0a57be0d70df423df9c2b12cdaaf157268a8cf10ab876ef5fbc986ec8b\">Qt</a>\n\
</li>\n\
<li>ClosedHandCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac8eabf66c9bfd464553917271e90ea63a84736ab79646b745879e43f49edb5ae7\">Qt</a>\n\
</li>\n\
<li>color0\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae03fc486532da08d7b21f636fe547548a4e9779ad17f23eb101d89a9b48f8aa0d\">Qt</a>\n\
</li>\n\
<li>color1\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae03fc486532da08d7b21f636fe547548a73449e713a201d287a9b4524c2286b1d\">Qt</a>\n\
</li>\n\
<li>ColorIndex\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_g_l.html#aa1077b59e620f7846dab86128a8820f5a3e431f4b3080d589417164541963b826\">QGL</a>\n\
</li>\n\
<li>ColorMode_Mask\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#aa7ffc78e03d0d91e70f88f78eda1011ca971f556f3db7607da4a7d5f0013b5e22\">Qt</a>\n\
</li>\n\
<li>ColorOnly\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#aa7ffc78e03d0d91e70f88f78eda1011cad7e22f4947e5326abfeb754c6e567e26\">Qt</a>\n\
</li>\n\
<li>CommunicationCategory\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccba97611a3b9ca39214e9bcfb4692847982\">Phonon</a>\n\
</li>\n\
<li>compMax\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a1c7f61f5e9d5bb77f5cf2e4388b162a8a07a84f724092b0a8c9f8a0a8ac85624a\">mapextraction</a>\n\
</li>\n\
<li>compMaya\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a1c7f61f5e9d5bb77f5cf2e4388b162a8a7a911e94b929835ea79f4c8c57f48208\">mapextraction</a>\n\
</li>\n\
<li>compUnknown\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a1c7f61f5e9d5bb77f5cf2e4388b162a8a7d0dcf034af6cf26d7e6169453632618\">mapextraction</a>\n\
</li>\n\
<li>ConicalGradientPattern\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af67a889bc5e9f8ab3a59fe58b0fa2128a48a2b223935238482b5aeefdc07c2d16\">Qt</a>\n\
</li>\n\
<li>ContainsItemBoundingRect\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a36d2dac75d98b68b12c25876046e8e51a725eca5ad35849419f1de17ec9e65fd0\">Qt</a>\n\
</li>\n\
<li>ContainsItemShape\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a36d2dac75d98b68b12c25876046e8e51ad3aa0a3d979f9a88e99e71dfe1d847e7\">Qt</a>\n\
</li>\n\
<li>ControlModifier\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a04766b1a451b70af34f398ab9280dff9a8a57b820f90db46f260a8e6853d43a72\">Qt</a>\n\
</li>\n\
<li>CopyAction\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a7657ec1631bb69c83a7dc76316b8f6cba92375841f3402eccd0a6caf3c532e211\">Qt</a>\n\
</li>\n\
<li>CrossCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac8eabf66c9bfd464553917271e90ea63aaf5e7b5ac966a17ae6c7a073cd56eab4\">Qt</a>\n\
</li>\n\
<li>CrossPattern\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af67a889bc5e9f8ab3a59fe58b0fa2128a5bd1c792e3d09f91912259841f74d595\">Qt</a>\n\
</li>\n\
<li>CTRL\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a80f90997871cd543ddb0bf8d282becdda5ea73cf9a3f5928257b1e6bc796d8490\">Qt</a>\n\
</li>\n\
<li>CustomContextMenu\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#afe6dedfa55aeb8dc2afaaf22b7ba4b93aa76ddc7f5d3a2419ebd2a3a6c9e50661\">Qt</a>\n\
</li>\n\
<li>CustomCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac8eabf66c9bfd464553917271e90ea63af048fe4ad57f9392c10c6185d59c77f0\">Qt</a>\n\
</li>\n\
<li>CustomDashLine\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ab70170afb6347d18ff9dac17e05e133ea49bc5b9df68a1fa0f551eabf16ff1366\">Qt</a>\n\
</li>\n\
<li>CustomGesture\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a2a0c37051efa1205aa5aade68616c947a437f0c2356c8b95d1082f36ed7104993\">Qt</a>\n\
</li>\n\
<li>CustomizeWindowHint\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a476342970f954b62d70552bcbb5ee509ab8083fc031e584ad47e9b05b21aa9cde\">Qt</a>\n\
</li>\n\
<li>cyan\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae03fc486532da08d7b21f636fe547548af86e4e7e79173ee87c1976080bb250b7\">Qt</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";