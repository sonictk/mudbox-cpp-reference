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
    cpp_ref_adsk_ref_toc.initNavTree(\'namespacemembers_r.html\', tocPrefix);\n\
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
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_q.html#index_q\"><span>q</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespacemembers_r.html#index_r\"><span>r</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_r\"></a>- r -</h3><ul>\n\
<li>RadialGradientPattern\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af67a889bc5e9f8ab3a59fe58b0fa2128aba9061604da43c8da58be6232256775a\">Qt</a>\n\
</li>\n\
<li>ReceivePartialGestures\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a737aacbd58279ad135b5138d1210ea56a375a469ac24d5e8a7a2c885c74fea67f\">Qt</a>\n\
</li>\n\
<li>red\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae03fc486532da08d7b21f636fe547548aace9033470c7bfe9523c814271251908\">Qt</a>\n\
</li>\n\
<li>ReduceOption\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a6e8a99c1c817425ae89109ee5aae1eb1\">QtConcurrent</a>\n\
</li>\n\
<li>ReduceQueueStartLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a70ad55be767ca0a42c9150d24618e4caa96b1c1e81cf941968e94c6e1bad66d5b\">QtConcurrent</a>\n\
</li>\n\
<li>ReduceQueueThrottleLimit\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a70ad55be767ca0a42c9150d24618e4caa65115e6fcaca7db10925814ed26e1494\">QtConcurrent</a>\n\
</li>\n\
<li>RelativeSize\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ab4b01f3da0a2276708526324bf66dbdbad453a08343dfa9db2d92a84b99c3140b\">Qt</a>\n\
</li>\n\
<li>RelativeToParent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af532ebccf30da4696c48ec61f6b4d663a329ecf601ca33591327b16d1c179aa25\">QAccessible2</a>\n\
</li>\n\
<li>RelativeToScreen\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af532ebccf30da4696c48ec61f6b4d663ab0ef059f0e9878156b9523a405bcb34d\">QAccessible2</a>\n\
</li>\n\
<li>RepeatTile\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a7c1f78e6c72a3d71566efe8a8aa21d78a87fbcab35eab27b9d5b0c3e590045e0c\">Qt</a>\n\
</li>\n\
<li>ReplaceClip\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a37c160b530b7e16e30de2b4fa3f32314ad7ba416053b700c0607f8c84bb0c53ad\">Qt</a>\n\
</li>\n\
<li>res1024\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a3c1fc1369ee351f25804c8cde5e85ac3a8a5fe4b9c216877318a4dc4eac96464a\">mapextraction</a>\n\
</li>\n\
<li>res2048\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a3c1fc1369ee351f25804c8cde5e85ac3a18f8da545baad3c301f8877d2f1260c1\">mapextraction</a>\n\
</li>\n\
<li>res256\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a3c1fc1369ee351f25804c8cde5e85ac3a3fd591ad15e207e93eec802e2d739ce0\">mapextraction</a>\n\
</li>\n\
<li>res4096\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a3c1fc1369ee351f25804c8cde5e85ac3ae9b6e7a664d3adc0292cb836cf1c6dd2\">mapextraction</a>\n\
</li>\n\
<li>res512\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a3c1fc1369ee351f25804c8cde5e85ac3a4e5f4b387505f644487efa90489befa2\">mapextraction</a>\n\
</li>\n\
<li>Resolution\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a3c1fc1369ee351f25804c8cde5e85ac3\">mapextraction</a>\n\
</li>\n\
<li>resUnknown\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a3c1fc1369ee351f25804c8cde5e85ac3af74b5ce4fde88e539c2ba6f5261a8756\">mapextraction</a>\n\
</li>\n\
<li>Rgba\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_g_l.html#aa1077b59e620f7846dab86128a8820f5ab44125f9516f9b37e26480e5dd84d668\">QGL</a>\n\
</li>\n\
<li>RichText\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ab6ea0063f7246ac0beecb0cf3cb2b126a56785cdeac8b652613a816c5ce8489aa\">Qt</a>\n\
</li>\n\
<li>RightArrow\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae040d7d64b46dd1dc796225aa77c2112ab947d01f1561b3d5c053c7a564edc29b\">Qt</a>\n\
</li>\n\
<li>RightButton\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac1ec3647c005eacad401b06e7e18f711aeb47e978a7943f7a47e2f2c902c7921e\">Qt</a>\n\
</li>\n\
<li>RightDockWidgetArea\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ab88fd339058ad3dd3f124e253d332b52a9ef02e96ef578619ea240b66b5b11053\">Qt</a>\n\
</li>\n\
<li>RightSection\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#afb8b18945ec9107c30c34230da64661ea173655f80faeb18ae8d3085d0be2edf7\">Qt</a>\n\
</li>\n\
<li>RightToLeft\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a02237ea95483490c47355adc9c82bea2a02e96b3fbbff687e711b92f76b3861a3\">Qt</a>\n\
</li>\n\
<li>RightToolBarArea\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a2a7fad286de32608d520b88e499a53aca1b968ce3c5c958453429f92b0dc4ed22\">Qt</a>\n\
</li>\n\
<li>RoundCap\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a819ef9a03fb79c9834508b79eac604f2ac9640c30fe8b058388470c3490354022\">Qt</a>\n\
</li>\n\
<li>RoundJoin\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#aaf495faaba3ae03366a1646a4b5526beab7dc21d1ae1e58437ca8be0add0c28b3\">Qt</a>\n\
</li>\n\
<li>RoundTile\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a7c1f78e6c72a3d71566efe8a8aa21d78ae7855e012a97cd7d011056345c5bfa1b\">Qt</a>\n\
</li>\n\
<li>Rsa\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a4de33cd7d95971e57351315e6a4be3f6a1128f8a95ee17666076d7f773a7f570f\">QSsl</a>\n\
</li>\n\
<li>run()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#afc161a2a861a1ac345ac119791a3299b\">QtConcurrent</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";