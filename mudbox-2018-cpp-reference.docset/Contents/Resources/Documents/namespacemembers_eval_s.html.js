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
    cpp_ref_adsk_ref_toc.initNavTree(\'namespacemembers_eval_s.html\', tocPrefix);\n\
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
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_c.html#index_c\"><span>c</span></a></li>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespacemembers_eval_s.html#index_s\"><span>s</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_s\"></a>- s -</h3><ul>\n\
<li>SampleBuffers\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_g_l.html#aa1077b59e620f7846dab86128a8820f5a18075558bb9f3c9e2aabeac2f9faf70b\">QGL</a>\n\
</li>\n\
<li>sampleClosesToTarget\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a68753490b7d14ebe7a4aa8ca4b8a22c4af96b36ea02bf3aaed7d50d63f10a6bc8\">mapextraction</a>\n\
</li>\n\
<li>sampleFurthestInside\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a68753490b7d14ebe7a4aa8ca4b8a22c4a80f389c88a7a1dea092d0d689bf5b1f1\">mapextraction</a>\n\
</li>\n\
<li>sampleFurthestOutside\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a68753490b7d14ebe7a4aa8ca4b8a22c4a96ce9ae836bc46f445ff879fea56fabe\">mapextraction</a>\n\
</li>\n\
<li>sampleUnknown\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a68753490b7d14ebe7a4aa8ca4b8a22c4a94582f4e1599f0e5e2486024124f0e5a\">mapextraction</a>\n\
</li>\n\
<li>Saturday\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ab81b58332d5fc8a29dc60c268bd3742ba5a996d296d81b9b8bd3b9201afa4c547\">Qt</a>\n\
</li>\n\
<li>ScrollBarAlwaysOff\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af276320d3d533d494547cb40e5025cc9ae9cc7d6e59c6d9f068ada99632425b4b\">Qt</a>\n\
</li>\n\
<li>ScrollBarAlwaysOn\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af276320d3d533d494547cb40e5025cc9a1060fb7f94e4f96439f4aa2ebd946523\">Qt</a>\n\
</li>\n\
<li>ScrollBarAsNeeded\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af276320d3d533d494547cb40e5025cc9ac4215852654c94a26f21a8a1e50d0451\">Qt</a>\n\
</li>\n\
<li>SecureProtocols\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a2a1da5aa0432f3d9636e999ab121155da77e00177b08fcff9305437fce46318fe\">QSsl</a>\n\
</li>\n\
<li>SentenceBoundary\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8af98ae49da2e98efd311de63755181562\">QAccessible2</a>\n\
</li>\n\
<li>SequentialReduce\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a6e8a99c1c817425ae89109ee5aae1eb1a3dc3b6a88a30279675f515f62772556e\">QtConcurrent</a>\n\
</li>\n\
<li>Sheet\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a476342970f954b62d70552bcbb5ee509a4ee8d37e01cd3f6efe538d0dd7009316\">Qt</a>\n\
</li>\n\
<li>SHIFT\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a80f90997871cd543ddb0bf8d282becdda1ce4ab037343ee04fbf20ceb2ebc5081\">Qt</a>\n\
</li>\n\
<li>ShiftModifier\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a04766b1a451b70af34f398ab9280dff9a38c96276682f293897531216b7226c70\">Qt</a>\n\
</li>\n\
<li>ShortcutFocusReason\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a70bbef683a57218c47987808be56a269a260e9672bed86699869825ff53558014\">Qt</a>\n\
</li>\n\
<li>SingleBuffer\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_g_l.html#aa1077b59e620f7846dab86128a8820f5a2944e4a34a86ffe2abab50b63dd4460c\">QGL</a>\n\
</li>\n\
<li>SizeAllCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac8eabf66c9bfd464553917271e90ea63ad8564c75c5aab3868bbb79f29d686c28\">Qt</a>\n\
</li>\n\
<li>SizeBDiagCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac8eabf66c9bfd464553917271e90ea63a8822a713bf1153be1d0c4b1b1772d468\">Qt</a>\n\
</li>\n\
<li>SizeFDiagCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac8eabf66c9bfd464553917271e90ea63a3a8370a6ae416fb49715ba1ef2ce68f1\">Qt</a>\n\
</li>\n\
<li>SizeHintRole\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a28105a4472738d85f6d50cb45a433904aafc8562b796f189ca516490a15e7822e\">Qt</a>\n\
</li>\n\
<li>SizeHorCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac8eabf66c9bfd464553917271e90ea63a368688633f569c7aa5e46b5b98af06df\">Qt</a>\n\
</li>\n\
<li>SizeVerCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac8eabf66c9bfd464553917271e90ea63ad970230a68ab79145b00b6a49e8144ed\">Qt</a>\n\
</li>\n\
<li>SmoothTransformation\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a1a197e4c74d88e3023d064dcd4841822a5bdc1b027c61433b9546b3fbfecc017b\">Qt</a>\n\
</li>\n\
<li>SolidLine\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ab70170afb6347d18ff9dac17e05e133eaa093aac47201f487076a14536d7d232e\">Qt</a>\n\
</li>\n\
<li>SolidPattern\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af67a889bc5e9f8ab3a59fe58b0fa2128add709101b4b35e74bb23c14db2b389cd\">Qt</a>\n\
</li>\n\
<li>spaceNormal\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#ab11a1dda34491acff014ddfc9e6bafb8ad0ffb215991a6f69f68c85369926574b\">mapextraction</a>\n\
</li>\n\
<li>spaceObject\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#ab11a1dda34491acff014ddfc9e6bafb8a55cd21c6940ec10b2c5b366532016d6b\">mapextraction</a>\n\
</li>\n\
<li>spaceRawTangent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#ab11a1dda34491acff014ddfc9e6bafb8a301c53dbfef31914bdea4ffc6840b377\">mapextraction</a>\n\
</li>\n\
<li>spaceTangent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#ab11a1dda34491acff014ddfc9e6bafb8af535c9551ac166cd21c73af209338612\">mapextraction</a>\n\
</li>\n\
<li>spaceUnknown\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#ab11a1dda34491acff014ddfc9e6bafb8a9d554f37ff6862046210d9aad76c0d6e\">mapextraction</a>\n\
</li>\n\
<li>spaceWorld\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#ab11a1dda34491acff014ddfc9e6bafb8a7d5df272701485f6bb8e16b1ddd81a24\">mapextraction</a>\n\
</li>\n\
<li>SplashScreen\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a476342970f954b62d70552bcbb5ee509a80bc7578464ccd322afa3ccb6aea122a\">Qt</a>\n\
</li>\n\
<li>SplitHCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac8eabf66c9bfd464553917271e90ea63ab0f6e696a437bacd7c841be70518a953\">Qt</a>\n\
</li>\n\
<li>SplitVCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac8eabf66c9bfd464553917271e90ea63a3533cc58ea27efd561a6445e9aefea0e\">Qt</a>\n\
</li>\n\
<li>SquareCap\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a819ef9a03fb79c9834508b79eac604f2a4f91e1743f32f668a512110e8789d49f\">Qt</a>\n\
</li>\n\
<li>SslOptionDisableCompression\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a7f6a9e4334d7c685ab7e53f94e2f2829af60663f12b65ae632c04ae68a6555af3\">QSsl</a>\n\
</li>\n\
<li>SslOptionDisableEmptyFragments\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a7f6a9e4334d7c685ab7e53f94e2f2829ac0ad40f247351b25c1e463e722fef4a1\">QSsl</a>\n\
</li>\n\
<li>SslOptionDisableLegacyRenegotiation\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a7f6a9e4334d7c685ab7e53f94e2f2829a1449bae4e5ce009178e835edc5593549\">QSsl</a>\n\
</li>\n\
<li>SslOptionDisableServerNameIndication\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a7f6a9e4334d7c685ab7e53f94e2f2829a89494d83cbeaeab340555548e03a3195\">QSsl</a>\n\
</li>\n\
<li>SslOptionDisableSessionTickets\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a7f6a9e4334d7c685ab7e53f94e2f2829aa2b76e49013c66ae3a483a5067a66ae7\">QSsl</a>\n\
</li>\n\
<li>SslV2\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a2a1da5aa0432f3d9636e999ab121155da6df710a3a9c7a5f50f88d5627a2badcb\">QSsl</a>\n\
</li>\n\
<li>SslV3\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a2a1da5aa0432f3d9636e999ab121155da08e24271ac4bfe655fbb589ed43e8e5a\">QSsl</a>\n\
</li>\n\
<li>StatusTipPropertyRole\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a28105a4472738d85f6d50cb45a433904a98fd46e7e8edcd8782b82107300edc7c\">Qt</a>\n\
</li>\n\
<li>StatusTipRole\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a28105a4472738d85f6d50cb45a433904a0c94e3700fc6dc8fc7196f47a2e23a7b\">Qt</a>\n\
</li>\n\
<li>StencilBuffer\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_g_l.html#aa1077b59e620f7846dab86128a8820f5a79a780a75fa0e7d70756f9a3c7e30dbc\">QGL</a>\n\
</li>\n\
<li>StereoBuffers\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_g_l.html#aa1077b59e620f7846dab86128a8820f5a6ec268f1facdb83961af2beb080c1493\">QGL</a>\n\
</li>\n\
<li>StoppedState\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a5d74787dedbc4e11c1ab15bf487e61f8a979a39371a7c85faad972f4c97c1efe9\">Phonon</a>\n\
</li>\n\
<li>StretchTile\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a7c1f78e6c72a3d71566efe8a8aa21d78ab963f7427e69e911bc0f0b0014bb8793\">Qt</a>\n\
</li>\n\
<li>StrongFocus\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ab55053d0a57be0d70df423df9c2b12cdacd803f669da6ea95150385d1d17b166c\">Qt</a>\n\
</li>\n\
<li>SubtitleType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae99374a739994c33f43e6537de38e18ea6a186152fc49a0512c5351ae08d58b5c\">Phonon</a>\n\
</li>\n\
<li>SubWindow\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a476342970f954b62d70552bcbb5ee509af898c5371fd9162f9a979c47a25982bb\">Qt</a>\n\
</li>\n\
<li>Sunday\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ab81b58332d5fc8a29dc60c268bd3742ba50f766951431e13654ab869ef85e162c\">Qt</a>\n\
</li>\n\
<li>SvgMiterJoin\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#aaf495faaba3ae03366a1646a4b5526beacec220d4f7f559b6a8b11785debf7376\">Qt</a>\n\
</li>\n\
<li>SwipeGesture\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a2a0c37051efa1205aa5aade68616c947a3799f0087d06930ea519aafcce71985f\">Qt</a>\n\
</li>\n\
<li>SystemLocaleDate\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ad3fab6f8a7fdf9fa0d9dea7d34750d84ac6213bdadf0a50b432b489b973ab687b\">Qt</a>\n\
</li>\n\
<li>SystemLocaleLongDate\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ad3fab6f8a7fdf9fa0d9dea7d34750d84aa4f44f13cfea568c32b1a4c9632661d5\">Qt</a>\n\
</li>\n\
<li>SystemLocaleShortDate\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ad3fab6f8a7fdf9fa0d9dea7d34750d84ab6be217abc7f5b03245a1e0ac71a74ef\">Qt</a>\n\
</li>\n\
<li>SystemTables\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_sql.html#aeb35fcdf8088909b3d8e18eaaad38142a32d87a0b1ed6c9e9edf17d405e447cb5\">QSql</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";