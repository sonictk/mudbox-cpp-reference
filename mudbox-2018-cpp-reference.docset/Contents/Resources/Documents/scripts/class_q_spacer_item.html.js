var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QSpacerItem Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_spacer_item.html\', tocPrefix);\n\
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
      <div>\n\
         <div class=\"head\">\n\
            <h1>QSpacerItem Class Reference</h1>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">QSpacerItem Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_q_spacer_item.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qlayoutitem_8h_source.html\">qlayoutitem.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qlayoutitem_8h_source.html#l00096\">96</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qlayoutitem_8h_source.html\">qlayoutitem.h</a>.</p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for QSpacerItem:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/class_q_spacer_item.png\" usemap=\"#QSpacerItem_map\" alt=\"\">\n\
  <map id=\"QSpacerItem_map\" name=\"QSpacerItem_map\">\n\
<area href=\"class_q_layout_item.html\" alt=\"QLayoutItem\" shape=\"rect\" coords=\"0,0,85,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a65f3600f357a0b4a9a7f96acf40a3022\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html#a65f3600f357a0b4a9a7f96acf40a3022\">QSpacerItem</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdb89eb8f3f04e3f311b84bafe6f7d0d\">h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72\">QSizePolicy::Policy</a> hData=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72ad6be1cd1d0de8fcc989220e1a947be8f\">QSizePolicy::Minimum</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72\">QSizePolicy::Policy</a> vData=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72ad6be1cd1d0de8fcc989220e1a947be8f\">QSizePolicy::Minimum</a>)</td></tr>\n\
<tr class=\"separator:a65f3600f357a0b4a9a7f96acf40a3022\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acd407f13822415a2bfb6741b2013ad9f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html#acd407f13822415a2bfb6741b2013ad9f\">changeSize</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdb89eb8f3f04e3f311b84bafe6f7d0d\">h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72\">QSizePolicy::Policy</a> hData=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72ad6be1cd1d0de8fcc989220e1a947be8f\">QSizePolicy::Minimum</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72\">QSizePolicy::Policy</a> vData=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72ad6be1cd1d0de8fcc989220e1a947be8f\">QSizePolicy::Minimum</a>)</td></tr>\n\
<tr class=\"separator:acd407f13822415a2bfb6741b2013ad9f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aefbfb651cd9de25bd4e8ca0db19b2044\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size.html\">QSize</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html#aefbfb651cd9de25bd4e8ca0db19b2044\">sizeHint</a> () const </td></tr>\n\
<tr class=\"separator:aefbfb651cd9de25bd4e8ca0db19b2044\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2450dc9063eb1770a876b1515e330337\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size.html\">QSize</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html#a2450dc9063eb1770a876b1515e330337\">minimumSize</a> () const </td></tr>\n\
<tr class=\"separator:a2450dc9063eb1770a876b1515e330337\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6b01dda451fef56ea6143af389255623\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size.html\">QSize</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html#a6b01dda451fef56ea6143af389255623\">maximumSize</a> () const </td></tr>\n\
<tr class=\"separator:a6b01dda451fef56ea6143af389255623\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a762b5c2c2bd851337a81b67881716417\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Qt::Orientations&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html#a762b5c2c2bd851337a81b67881716417\">expandingDirections</a> () const </td></tr>\n\
<tr class=\"separator:a762b5c2c2bd851337a81b67881716417\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a479432127ee77145cc19d6a2d1590821\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html#a479432127ee77145cc19d6a2d1590821\">isEmpty</a> () const </td></tr>\n\
<tr class=\"separator:a479432127ee77145cc19d6a2d1590821\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab437cf91a85332c40f0adcfb5b04bea9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html#ab437cf91a85332c40f0adcfb5b04bea9\">setGeometry</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;)</td></tr>\n\
<tr class=\"separator:ab437cf91a85332c40f0adcfb5b04bea9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8fd3c89c0a9f9b804d13534cd3392ab4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html#a8fd3c89c0a9f9b804d13534cd3392ab4\">geometry</a> () const </td></tr>\n\
<tr class=\"separator:a8fd3c89c0a9f9b804d13534cd3392ab4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a13f84469df3f0528586d208052f700b5\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html\">QSpacerItem</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html#a13f84469df3f0528586d208052f700b5\">spacerItem</a> ()</td></tr>\n\
<tr class=\"separator:a13f84469df3f0528586d208052f700b5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_q_layout_item\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_q_layout_item\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html\">QLayoutItem</a></td></tr>\n\
<tr class=\"memitem:a71243df8e3c8b413dbac9bef04a7f537 inherit pub_methods_class_q_layout_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#a71243df8e3c8b413dbac9bef04a7f537\">QLayoutItem</a> (Qt::Alignment <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#add5b7da18790b34effdeef0af893c90f\">alignment</a>=0)</td></tr>\n\
<tr class=\"separator:a71243df8e3c8b413dbac9bef04a7f537 inherit pub_methods_class_q_layout_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3a84a30060bfd9f777c370914d80d744 inherit pub_methods_class_q_layout_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#a3a84a30060bfd9f777c370914d80d744\">~QLayoutItem</a> ()</td></tr>\n\
<tr class=\"separator:a3a84a30060bfd9f777c370914d80d744 inherit pub_methods_class_q_layout_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a432a98beff31d441e69da0aee821fbef inherit pub_methods_class_q_layout_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#a432a98beff31d441e69da0aee821fbef\">hasHeightForWidth</a> () const </td></tr>\n\
<tr class=\"separator:a432a98beff31d441e69da0aee821fbef inherit pub_methods_class_q_layout_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a95316251ff03643fda8229ebcc6d1db2 inherit pub_methods_class_q_layout_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#a95316251ff03643fda8229ebcc6d1db2\">heightForWidth</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>) const </td></tr>\n\
<tr class=\"separator:a95316251ff03643fda8229ebcc6d1db2 inherit pub_methods_class_q_layout_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a805a302407c0cddd42112659d416e9df inherit pub_methods_class_q_layout_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#a805a302407c0cddd42112659d416e9df\">minimumHeightForWidth</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>) const </td></tr>\n\
<tr class=\"separator:a805a302407c0cddd42112659d416e9df inherit pub_methods_class_q_layout_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4297c58b65410b0eeb1700498f294c57 inherit pub_methods_class_q_layout_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#a4297c58b65410b0eeb1700498f294c57\">invalidate</a> ()</td></tr>\n\
<tr class=\"separator:a4297c58b65410b0eeb1700498f294c57 inherit pub_methods_class_q_layout_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a860eb36bd1b749c16d12dbb89aba9d70 inherit pub_methods_class_q_layout_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_widget.html\">QWidget</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#a860eb36bd1b749c16d12dbb89aba9d70\">widget</a> ()</td></tr>\n\
<tr class=\"separator:a860eb36bd1b749c16d12dbb89aba9d70 inherit pub_methods_class_q_layout_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8a5048bf3eca7b51547c9606e4d03f09 inherit pub_methods_class_q_layout_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout.html\">QLayout</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#a8a5048bf3eca7b51547c9606e4d03f09\">layout</a> ()</td></tr>\n\
<tr class=\"separator:a8a5048bf3eca7b51547c9606e4d03f09 inherit pub_methods_class_q_layout_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:add5b7da18790b34effdeef0af893c90f inherit pub_methods_class_q_layout_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Qt::Alignment&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#add5b7da18790b34effdeef0af893c90f\">alignment</a> () const </td></tr>\n\
<tr class=\"separator:add5b7da18790b34effdeef0af893c90f inherit pub_methods_class_q_layout_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a26f93abe2bf3fc31f6426c66d3a12a1d inherit pub_methods_class_q_layout_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#a26f93abe2bf3fc31f6426c66d3a12a1d\">setAlignment</a> (Qt::Alignment <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a>)</td></tr>\n\
<tr class=\"separator:a26f93abe2bf3fc31f6426c66d3a12a1d inherit pub_methods_class_q_layout_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aeb9b9cf2e8d598c4a793f88be886f0dc inherit pub_methods_class_q_layout_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">QSizePolicy::ControlTypes&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#aeb9b9cf2e8d598c4a793f88be886f0dc\">controlTypes</a> () const </td></tr>\n\
<tr class=\"separator:aeb9b9cf2e8d598c4a793f88be886f0dc inherit pub_methods_class_q_layout_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pro_attribs_class_q_layout_item\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pro_attribs_class_q_layout_item\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Protected Attributes inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html\">QLayoutItem</a></td></tr>\n\
<tr class=\"memitem:aaa6ae9bd8bb951e7ba138e100bee3f6a inherit pro_attribs_class_q_layout_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Qt::Alignment&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#aaa6ae9bd8bb951e7ba138e100bee3f6a\">align</a></td></tr>\n\
<tr class=\"separator:aaa6ae9bd8bb951e7ba138e100bee3f6a inherit pro_attribs_class_q_layout_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a65f3600f357a0b4a9a7f96acf40a3022\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html\">QSpacerItem</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>w</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>h</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72\">QSizePolicy::Policy</a>&#160;</td>\n\
          <td class=\"paramname\"><em>hData</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72ad6be1cd1d0de8fcc989220e1a947be8f\">QSizePolicy::Minimum</a></code>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72\">QSizePolicy::Policy</a>&#160;</td>\n\
          <td class=\"paramname\"><em>vData</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72ad6be1cd1d0de8fcc989220e1a947be8f\">QSizePolicy::Minimum</a></code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qlayoutitem_8h_source.html#l00099\">99</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qlayoutitem_8h_source.html\">qlayoutitem.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00102\"></a><span class=\"lineno\">  102</span>&#160;        : <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac112eef468530a44b7a653ddac190a22\">width</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>), <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ab375df5e95c5fc63fc9165319162bddc\">height</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdb89eb8f3f04e3f311b84bafe6f7d0d\">h</a>), sizeP(hData, vData) { }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_ac112eef468530a44b7a653ddac190a22\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac112eef468530a44b7a653ddac190a22\">width</a></div><div class=\"ttdeci\">GLenum GLsizei width</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00873\">GLee.h:873</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_ab375df5e95c5fc63fc9165319162bddc\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#ab375df5e95c5fc63fc9165319162bddc\">height</a></div><div class=\"ttdeci\">GLenum GLsizei GLsizei height</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00883\">GLee.h:883</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_afdb89eb8f3f04e3f311b84bafe6f7d0d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdb89eb8f3f04e3f311b84bafe6f7d0d\">h</a></div><div class=\"ttdeci\">int int int int int int h</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l10534\">GLee.h:10534</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a775b535bae9cb9131338b1cda0807472\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a></div><div class=\"ttdeci\">GLubyte GLubyte GLubyte GLubyte w</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01775\">GLee.h:1775</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"acd407f13822415a2bfb6741b2013ad9f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> changeSize </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>w</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>h</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72\">QSizePolicy::Policy</a>&#160;</td>\n\
          <td class=\"paramname\"><em>hData</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72ad6be1cd1d0de8fcc989220e1a947be8f\">QSizePolicy::Minimum</a></code>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72\">QSizePolicy::Policy</a>&#160;</td>\n\
          <td class=\"paramname\"><em>vData</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size_policy.html#abb491487def337216dea442161545e72ad6be1cd1d0de8fcc989220e1a947be8f\">QSizePolicy::Minimum</a></code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aefbfb651cd9de25bd4e8ca0db19b2044\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size.html\">QSize</a> sizeHint </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#ac48a3bc9659f723233bfddaf16b34bdc\">QLayoutItem</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2450dc9063eb1770a876b1515e330337\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size.html\">QSize</a> minimumSize </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#a235d86ac90508dc4f268ae34877b72ce\">QLayoutItem</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6b01dda451fef56ea6143af389255623\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_size.html\">QSize</a> maximumSize </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#a213c81f4bb819fa96517913352d9ccab\">QLayoutItem</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a762b5c2c2bd851337a81b67881716417\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Qt::Orientations expandingDirections </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#ae45163776cead94d88ee29fb613bb8cc\">QLayoutItem</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a479432127ee77145cc19d6a2d1590821\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool isEmpty </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#a7f1be1aae17103e3e53a3b7cdb57a5b1\">QLayoutItem</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab437cf91a85332c40f0adcfb5b04bea9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> setGeometry </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#af445d89f99a30586bb459bbafc107c42\">QLayoutItem</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8fd3c89c0a9f9b804d13534cd3392ab4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> geometry </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#ac3d219bb74c87e954b8517fc62f95b9b\">QLayoutItem</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a13f84469df3f0528586d208052f700b5\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_spacer_item.html\">QSpacerItem</a>* spacerItem </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Reimplemented from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_layout_item.html#ad1dc7eaa39ef67ce5a036c874819550a\">QLayoutItem</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtGui/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qlayoutitem_8h_source.html\">qlayoutitem.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";