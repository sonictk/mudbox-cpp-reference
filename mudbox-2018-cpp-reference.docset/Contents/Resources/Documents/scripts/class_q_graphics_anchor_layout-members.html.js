var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Member List</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_graphics_anchor_layout-members.html\', tocPrefix);\n\
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
            <h1>Member List</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
<div class=\"header\">\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">QGraphicsAnchorLayout Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html#a8011fcbeb5efeda20bd2dbffbbb70165\">activate</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html\">QGraphicsLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#a92b3304eff002fe29f860ad082de5c70\">addAnchor</a>(QGraphicsLayoutItem *firstItem, Qt::AnchorPoint firstEdge, QGraphicsLayoutItem *secondItem, Qt::AnchorPoint secondEdge)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#a06d9b4a2ffd5c796092d7ed15f5a6f5e\">addAnchors</a>(QGraphicsLayoutItem *firstItem, QGraphicsLayoutItem *secondItem, Qt::Orientations orientations=Qt::Horizontal|Qt::Vertical)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html#a5d6cb148cb446a09dcdf1f257a3b99b7\">addChildLayoutItem</a>(QGraphicsLayoutItem *layoutItem)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html\">QGraphicsLayout</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#a99442bae04ac9870452e37cf909859a0\">addCornerAnchors</a>(QGraphicsLayoutItem *firstItem, Qt::Corner firstCorner, QGraphicsLayoutItem *secondItem, Qt::Corner secondCorner)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#ada5f7cfd09ef8114001dfc6b6d7c454d\">anchor</a>(QGraphicsLayoutItem *firstItem, Qt::AnchorPoint firstEdge, QGraphicsLayoutItem *secondItem, Qt::AnchorPoint secondEdge)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a69afafff8f2fa817686cbdfef2f1e204\">contentsRect</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#a0745638c9967e2ed90bc96c012288c55\">count</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#aab4c6a965927ed4d4cf5872238c0162d\">d_ptr</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a2151f04f3eb11a67f04697784644090e\">effectiveSizeHint</a>(Qt::SizeHint which, const QSizeF &amp;constraint=QSizeF()) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a79163645cf1e089680149d02054105e6\">geometry</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html#a4a7c4b9cdb070868707e064b72c9ec10\">getContentsMargins</a>(qreal *left, qreal *top, qreal *right, qreal *bottom) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html\">QGraphicsLayout</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#ab556f0cad354e28760c79f666c66ab28\">graphicsItem</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#a1213260a249e311a4a4f3169d0e0218d\">horizontalSpacing</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html#a792677f2c2f142ae7346c8390188da59\">instantInvalidatePropagation</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html\">QGraphicsLayout</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#a893f1101c650c08c98612515c2b1a89c\">invalidate</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html#aa7b1d4f3ee43ff12996e6a68ad5d3e42\">isActivated</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html\">QGraphicsLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a1d33a4158580471705295645c46b1867\">isLayout</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#ae643e7e58607d57f88df6f14f0bb0828\">itemAt</a>(int index) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#ace48d4be3be21dee1b2ea97272fd8459\">maximumHeight</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a0677c43b01858bbfcb1d2ee89695ce2c\">maximumSize</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#abf8db63b1be19a5adb0382ada74c9e10\">maximumWidth</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a1c4520d15c8b1581f9ea87095081dacd\">minimumHeight</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#ac61e7b315e4ea20ca036dc1231fd9cfa\">minimumSize</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a757d87850df8116837d8bb84d9fc3a45\">minimumWidth</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#afcd97525f54bfca953b8934238e938c4\">ownedByLayout</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a798866a47430f48e79f982c4b4d79e5c\">parentLayoutItem</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#af55a6ac07da1862bcc66a07debac77b0\">preferredHeight</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#ad72b882b9ab376472f74b15e9b83b559\">preferredSize</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a5046c636908f43405a4dcabd32823afd\">preferredWidth</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#a2e82fe470fd90e31903672782d147d61\">QGraphicsAnchor</a> class</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"><span class=\"mlabel\">friend</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#ae253a782bd5c51d68ba00aaff45b8195\">QGraphicsAnchorLayout</a>(QGraphicsLayoutItem *parent=0)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html#afc22cadd3254dedb160612e0096368eb\">QGraphicsLayout</a>(QGraphicsLayoutItem *parent=0)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html\">QGraphicsLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html#aca0c2d93de03bbfe7396b838b8e46950\">QGraphicsLayout</a>(QGraphicsLayoutPrivate &amp;, QGraphicsLayoutItem *)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html\">QGraphicsLayout</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a1efa00bc046e57bb59286f98be87508c\">QGraphicsLayoutItem</a>(QGraphicsLayoutItem *parent=0, bool isLayout=false)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#af941b0d5dd5d91035d2bd0007f23ef9c\">QGraphicsLayoutItem</a>(QGraphicsLayoutItemPrivate &amp;dd)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#ac7ac95ec25df1320ac951667b38716f5\">removeAt</a>(int index)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html#ad1a23d089ef1763e4d6694713f488fa4\">setContentsMargins</a>(qreal left, qreal top, qreal right, qreal bottom)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html\">QGraphicsLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#ad8094278f604291748497d2a458ae3a8\">setGeometry</a>(const QRectF &amp;rect)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a738113af650bc8bcb9b4e05081fb0ccf\">setGraphicsItem</a>(QGraphicsItem *item)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#af56c0ec549902e993fd03996ce933787\">setHorizontalSpacing</a>(qreal spacing)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html#a8a89fc71e29d226fc65eba9de175efb0\">setInstantInvalidatePropagation</a>(bool enable)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html\">QGraphicsLayout</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#aa1aea70bc4643d78a2d9b278e8dbc133\">setMaximumHeight</a>(qreal height)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a55a0cc65a912b41a3bf212db6274c7c0\">setMaximumSize</a>(const QSizeF &amp;size)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a98b2c3bc0720f91150604ceebfe6c073\">setMaximumSize</a>(qreal w, qreal h)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a3430f4e6082342482940199a38dc7720\">setMaximumWidth</a>(qreal width)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a533e5901fdd5dcf1d9e4a46f9173301b\">setMinimumHeight</a>(qreal height)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a165ca56328eca1208a672c2158155abc\">setMinimumSize</a>(const QSizeF &amp;size)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#aab551870821b91ec5b131e85fde1ac58\">setMinimumSize</a>(qreal w, qreal h)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#ae6e3a478b85b8663b3d95c60547f0922\">setMinimumWidth</a>(qreal width)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a7db55e48708f8a6887ac1905ab35db37\">setOwnedByLayout</a>(bool ownedByLayout)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a259cb53f920be4e1abe2dc6b70569b05\">setParentLayoutItem</a>(QGraphicsLayoutItem *parent)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a74120a7d7954aa05ba0d89fa50e75b81\">setPreferredHeight</a>(qreal height)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a3386ceaa80c5d46a2654592f1816f5e2\">setPreferredSize</a>(const QSizeF &amp;size)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#ac2c0fd5effb498c11454ef17aca3deb3\">setPreferredSize</a>(qreal w, qreal h)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#aabad9acdb6989f68ac743ba484c2782e\">setPreferredWidth</a>(qreal width)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#af50865b7734d610f4a3184c29bd4cb14\">setSizePolicy</a>(const QSizePolicy &amp;policy)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#a0c58dc7e8b072b337a60efdab631d408\">setSizePolicy</a>(QSizePolicy::Policy hPolicy, QSizePolicy::Policy vPolicy, QSizePolicy::ControlType controlType=QSizePolicy::DefaultType)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#a7896bea96fc2cb8cc738aad38f72d1f5\">setSpacing</a>(qreal spacing)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#ac7f3aa184dfe9feed3709466640e8660\">setVerticalSpacing</a>(qreal spacing)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#aee85a13c045fbe76f6b71f9e71f6394e\">sizeHint</a>(Qt::SizeHint which, const QSizeF &amp;constraint=QSizeF()) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#ae648a81882ccc7c370f66719dd1b4082\">sizePolicy</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html#a39d7a1b3eda130f3f27e7d94909a5cfa\">updateGeometry</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html\">QGraphicsLayout</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#a2920426f96747afe0d49772fdfa93171\">verticalSpacing</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html#a127fa8769521d7e2129c9dc2489caa1b\">widgetEvent</a>(QEvent *e)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html\">QGraphicsLayout</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html#aa85bbd6513712a8eb2b5dc7f090f08af\">~QGraphicsAnchorLayout</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_anchor_layout.html\">QGraphicsAnchorLayout</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html#a508c78e3bed4e4a080573505d63d2c20\">~QGraphicsLayout</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout.html\">QGraphicsLayout</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html#af87c10e4960975cea0bc4a6eb43a827b\">~QGraphicsLayoutItem</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_graphics_layout_item.html\">QGraphicsLayoutItem</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";