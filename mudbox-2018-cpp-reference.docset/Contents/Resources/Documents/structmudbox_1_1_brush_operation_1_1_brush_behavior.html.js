var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>BrushOperation::BrushBehavior Struct Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'structmudbox_1_1_brush_operation_1_1_brush_behavior.html\', tocPrefix);\n\
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
            <h1>BrushOperation::BrushBehavior Struct Reference</h1>\n\
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
<div class=\"title\">BrushOperation::BrushBehavior Struct Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-765FC268-8D06-43AD-9224-33F873E96B91.htm\">What\'s New / What\'s Changed? &gt; Mudbox 2013</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"structmudbox_1_1_brush_operation_1_1_brush_behavior.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"structmudbox_1_1_brush_operation_1_1_brush_behavior.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"structmudbox_1_1_brush_operation_1_1_brush_behavior.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html\">brush.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Tool behaviour structure for storing alternate brushing modes. </p>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html#l00338\">338</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html\">brush.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:a4e1f87903ff65bc5e1d2670a44bb4cfa\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfa\">BehaviorType</a> { <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfaa7151679bc6e34900adbde8dd5e263b5e\">eBehaviorNone</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfaa30feeeb3f9979b44850c3b08e9042a8f\">eBehaviorBrush</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfaaa5495749e82d23412a16849a2a7c1aaa\">eBehaviorAttribute</a>\n\
 }<tr class=\"separator:a4e1f87903ff65bc5e1d2670a44bb4cfa\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ad1d6883fa6cbb6d9c02b6b9777ce6d64\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#ad1d6883fa6cbb6d9c02b6b9777ce6d64\">BrushBehavior</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>)</td></tr>\n\
<tr class=\"separator:ad1d6883fa6cbb6d9c02b6b9777ce6d64\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7e7f5bd3a88817915e8ca93de5947922\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a7e7f5bd3a88817915e8ca93de5947922\">BrushBehavior</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfa\">BehaviorType</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> target, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> iHotkey)</td></tr>\n\
<tr class=\"separator:a7e7f5bd3a88817915e8ca93de5947922\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:aa22fc31c5efbb868b98a5d86b95660da\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfa\">BehaviorType</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#aa22fc31c5efbb868b98a5d86b95660da\">m_eType</a></td></tr>\n\
<tr class=\"separator:aa22fc31c5efbb868b98a5d86b95660da\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6c898ec15ffb8a7a42fee6be96eb9fb6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a6c898ec15ffb8a7a42fee6be96eb9fb6\">m_sTarget</a></td></tr>\n\
<tr class=\"separator:a6c898ec15ffb8a7a42fee6be96eb9fb6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a91d341dfd411a1830e468673dea1d93b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a91d341dfd411a1830e468673dea1d93b\">m_iHotkey</a></td></tr>\n\
<tr class=\"separator:a91d341dfd411a1830e468673dea1d93b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"a4e1f87903ff65bc5e1d2670a44bb4cfa\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfa\">BehaviorType</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a4e1f87903ff65bc5e1d2670a44bb4cfaa7151679bc6e34900adbde8dd5e263b5e\"></a>eBehaviorNone&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a4e1f87903ff65bc5e1d2670a44bb4cfaa30feeeb3f9979b44850c3b08e9042a8f\"></a>eBehaviorBrush&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a4e1f87903ff65bc5e1d2670a44bb4cfaaa5495749e82d23412a16849a2a7c1aaa\"></a>eBehaviorAttribute&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
</table>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html#l00340\">340</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html\">brush.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00341\"></a><span class=\"lineno\">  341</span>&#160;        {</div>\n\
<div class=\"line\"><a name=\"l00342\"></a><span class=\"lineno\">  342</span>&#160;            <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfaa7151679bc6e34900adbde8dd5e263b5e\">eBehaviorNone</a>,</div>\n\
<div class=\"line\"><a name=\"l00343\"></a><span class=\"lineno\">  343</span>&#160;            <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfaa30feeeb3f9979b44850c3b08e9042a8f\">eBehaviorBrush</a>,</div>\n\
<div class=\"line\"><a name=\"l00344\"></a><span class=\"lineno\">  344</span>&#160;            <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfaaa5495749e82d23412a16849a2a7c1aaa\">eBehaviorAttribute</a></div>\n\
<div class=\"line\"><a name=\"l00345\"></a><span class=\"lineno\">  345</span>&#160;        };</div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_brush_operation_1_1_brush_behavior_html_a4e1f87903ff65bc5e1d2670a44bb4cfaa7151679bc6e34900adbde8dd5e263b5e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfaa7151679bc6e34900adbde8dd5e263b5e\">mudbox::BrushOperation::BrushBehavior::eBehaviorNone</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/brush_8h_source.html#l00342\">brush.h:342</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_brush_operation_1_1_brush_behavior_html_a4e1f87903ff65bc5e1d2670a44bb4cfaaa5495749e82d23412a16849a2a7c1aaa\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfaaa5495749e82d23412a16849a2a7c1aaa\">mudbox::BrushOperation::BrushBehavior::eBehaviorAttribute</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/brush_8h_source.html#l00344\">brush.h:344</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_brush_operation_1_1_brush_behavior_html_a4e1f87903ff65bc5e1d2670a44bb4cfaa30feeeb3f9979b44850c3b08e9042a8f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfaa30feeeb3f9979b44850c3b08e9042a8f\">mudbox::BrushOperation::BrushBehavior::eBehaviorBrush</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/brush_8h_source.html#l00343\">brush.h:343</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ad1d6883fa6cbb6d9c02b6b9777ce6d64\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html\">BrushBehavior</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html#l00347\">347</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html\">brush.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00347\"></a><span class=\"lineno\">  347</span>&#160;{ <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#aa22fc31c5efbb868b98a5d86b95660da\">m_eType</a> = <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfaa7151679bc6e34900adbde8dd5e263b5e\">eBehaviorNone</a>; <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a6c898ec15ffb8a7a42fee6be96eb9fb6\">m_sTarget</a> = <span class=\"stringliteral\">&quot;&quot;</span>; <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a91d341dfd411a1830e468673dea1d93b\">m_iHotkey</a> = 0; };</div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_brush_operation_1_1_brush_behavior_html_a4e1f87903ff65bc5e1d2670a44bb4cfaa7151679bc6e34900adbde8dd5e263b5e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfaa7151679bc6e34900adbde8dd5e263b5e\">mudbox::BrushOperation::BrushBehavior::eBehaviorNone</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/brush_8h_source.html#l00342\">brush.h:342</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_brush_operation_1_1_brush_behavior_html_a91d341dfd411a1830e468673dea1d93b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a91d341dfd411a1830e468673dea1d93b\">mudbox::BrushOperation::BrushBehavior::m_iHotkey</a></div><div class=\"ttdeci\">int m_iHotkey</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/brush_8h_source.html#l00352\">brush.h:352</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_brush_operation_1_1_brush_behavior_html_aa22fc31c5efbb868b98a5d86b95660da\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#aa22fc31c5efbb868b98a5d86b95660da\">mudbox::BrushOperation::BrushBehavior::m_eType</a></div><div class=\"ttdeci\">BehaviorType m_eType</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/brush_8h_source.html#l00348\">brush.h:348</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_brush_operation_1_1_brush_behavior_html_a6c898ec15ffb8a7a42fee6be96eb9fb6\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a6c898ec15ffb8a7a42fee6be96eb9fb6\">mudbox::BrushOperation::BrushBehavior::m_sTarget</a></div><div class=\"ttdeci\">QString m_sTarget</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/brush_8h_source.html#l00351\">brush.h:351</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7e7f5bd3a88817915e8ca93de5947922\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html\">BrushBehavior</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfa\">BehaviorType</a>&#160;</td>\n\
          <td class=\"paramname\"><em>type</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td>\n\
          <td class=\"paramname\"><em>target</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>iHotkey</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html#l00348\">348</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html\">brush.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00348\"></a><span class=\"lineno\">  348</span>&#160;: <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#aa22fc31c5efbb868b98a5d86b95660da\">m_eType</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a> ), <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a6c898ec15ffb8a7a42fee6be96eb9fb6\">m_sTarget</a>( target ), <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a91d341dfd411a1830e468673dea1d93b\">m_iHotkey</a>( iHotkey ) {};</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a63267399cd2a2ee217572c11d2e54f07\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a></div><div class=\"ttdeci\">GLuint GLuint GLsizei GLenum type</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00872\">GLee.h:872</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_brush_operation_1_1_brush_behavior_html_a91d341dfd411a1830e468673dea1d93b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a91d341dfd411a1830e468673dea1d93b\">mudbox::BrushOperation::BrushBehavior::m_iHotkey</a></div><div class=\"ttdeci\">int m_iHotkey</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/brush_8h_source.html#l00352\">brush.h:352</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_brush_operation_1_1_brush_behavior_html_aa22fc31c5efbb868b98a5d86b95660da\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#aa22fc31c5efbb868b98a5d86b95660da\">mudbox::BrushOperation::BrushBehavior::m_eType</a></div><div class=\"ttdeci\">BehaviorType m_eType</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/brush_8h_source.html#l00348\">brush.h:348</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_brush_operation_1_1_brush_behavior_html_a6c898ec15ffb8a7a42fee6be96eb9fb6\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a6c898ec15ffb8a7a42fee6be96eb9fb6\">mudbox::BrushOperation::BrushBehavior::m_sTarget</a></div><div class=\"ttdeci\">QString m_sTarget</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/brush_8h_source.html#l00351\">brush.h:351</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"aa22fc31c5efbb868b98a5d86b95660da\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_brush_operation_1_1_brush_behavior.html#a4e1f87903ff65bc5e1d2670a44bb4cfa\">BehaviorType</a> m_eType</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html#l00348\">348</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html\">brush.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6c898ec15ffb8a7a42fee6be96eb9fb6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> m_sTarget</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html#l00351\">351</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html\">brush.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a91d341dfd411a1830e468673dea1d93b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> m_iHotkey</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html#l00352\">352</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html\">brush.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this struct was generated from the following file:<ul>\n\
<li>Mudbox/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/brush_8h_source.html\">brush.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";