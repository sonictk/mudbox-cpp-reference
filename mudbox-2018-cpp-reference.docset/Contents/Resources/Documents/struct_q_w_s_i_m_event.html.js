var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QWSIMEvent Struct Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_q_w_s_i_m_event.html\', tocPrefix);\n\
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
            <h1>QWSIMEvent Struct Reference</h1>\n\
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
<div class=\"title\">QWSIMEvent Struct Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"struct_q_w_s_i_m_event.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"struct_q_w_s_i_m_event.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"struct_q_w_s_i_m_event.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html\">qwsevent_qws.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html#l00373\">373</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html\">qwsevent_qws.h</a>.</p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for QWSIMEvent:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/struct_q_w_s_i_m_event.png\" usemap=\"#QWSIMEvent_map\" alt=\"\">\n\
  <map id=\"QWSIMEvent_map\" name=\"QWSIMEvent_map\">\n\
<area href=\"struct_q_w_s_event.html\" alt=\"QWSEvent\" shape=\"rect\" coords=\"0,56,110,80\">\n\
<area href=\"struct_q_w_s_protocol_item.html\" alt=\"QWSProtocolItem\" shape=\"rect\" coords=\"0,0,110,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event_1_1_simple_data.html\">SimpleData</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:af05071e1429c8a8be71131c0eb1b00c3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#af05071e1429c8a8be71131c0eb1b00c3\">QWSIMEvent</a> ()</td></tr>\n\
<tr class=\"separator:af05071e1429c8a8be71131c0eb1b00c3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9559e09ba688262d0428d060ab0fd286\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#a9559e09ba688262d0428d060ab0fd286\">setData</a> (const char *d, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a508cd9b0e54f044f23b7fc474233693b\">len</a>, bool allocateMem=true)</td></tr>\n\
<tr class=\"separator:a9559e09ba688262d0428d060ab0fd286\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_struct_q_w_s_event\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_struct_q_w_s_event\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html\">QWSEvent</a></td></tr>\n\
<tr class=\"memitem:a7365b82e468e3125e2863b185db64257 inherit pub_methods_struct_q_w_s_event\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a7365b82e468e3125e2863b185db64257\">QWSEvent</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a508cd9b0e54f044f23b7fc474233693b\">len</a>, char *ptr)</td></tr>\n\
<tr class=\"separator:a7365b82e468e3125e2863b185db64257 inherit pub_methods_struct_q_w_s_event\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a25e3b9997eaad3396c006ed44880b9f1 inherit pub_methods_struct_q_w_s_event\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_mouse_event.html\">QWSMouseEvent</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a25e3b9997eaad3396c006ed44880b9f1\">asMouse</a> ()</td></tr>\n\
<tr class=\"separator:a25e3b9997eaad3396c006ed44880b9f1 inherit pub_methods_struct_q_w_s_event\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5a2fbb55b2eb89b3612f6bfc00383de4 inherit pub_methods_struct_q_w_s_event\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a5a2fbb55b2eb89b3612f6bfc00383de4\">window</a> ()</td></tr>\n\
<tr class=\"separator:a5a2fbb55b2eb89b3612f6bfc00383de4 inherit pub_methods_struct_q_w_s_event\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1115b39c5e8c5f8ebec6adec544b3130 inherit pub_methods_struct_q_w_s_event\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1115b39c5e8c5f8ebec6adec544b3130\">window</a> () const </td></tr>\n\
<tr class=\"separator:a1115b39c5e8c5f8ebec6adec544b3130 inherit pub_methods_struct_q_w_s_event\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_struct_q_w_s_protocol_item\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_struct_q_w_s_protocol_item\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html\">QWSProtocolItem</a></td></tr>\n\
<tr class=\"memitem:ae8264ccaf2a781911ef09902057163a0 inherit pub_methods_struct_q_w_s_protocol_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#ae8264ccaf2a781911ef09902057163a0\">QWSProtocolItem</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a508cd9b0e54f044f23b7fc474233693b\">len</a>, char *ptr)</td></tr>\n\
<tr class=\"separator:ae8264ccaf2a781911ef09902057163a0 inherit pub_methods_struct_q_w_s_protocol_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7bb0e21556546d30de135b804e471b95 inherit pub_methods_struct_q_w_s_protocol_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#a7bb0e21556546d30de135b804e471b95\">~QWSProtocolItem</a> ()</td></tr>\n\
<tr class=\"separator:a7bb0e21556546d30de135b804e471b95 inherit pub_methods_struct_q_w_s_protocol_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5ce2f44a79ea11e35c9926e1a1c150b8 inherit pub_methods_struct_q_w_s_protocol_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#a5ce2f44a79ea11e35c9926e1a1c150b8\">write</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_i_o_device.html\">QIODevice</a> *<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a>)</td></tr>\n\
<tr class=\"separator:a5ce2f44a79ea11e35c9926e1a1c150b8 inherit pub_methods_struct_q_w_s_protocol_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a64a5fc74c254aef7746b083abf207317 inherit pub_methods_struct_q_w_s_protocol_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#a64a5fc74c254aef7746b083abf207317\">read</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_i_o_device.html\">QIODevice</a> *<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a>)</td></tr>\n\
<tr class=\"separator:a64a5fc74c254aef7746b083abf207317 inherit pub_methods_struct_q_w_s_protocol_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab406a50b680dd3651da8c59055e1d79c inherit pub_methods_struct_q_w_s_protocol_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#ab406a50b680dd3651da8c59055e1d79c\">copyFrom</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html\">QWSProtocolItem</a> *item)</td></tr>\n\
<tr class=\"separator:ab406a50b680dd3651da8c59055e1d79c inherit pub_methods_struct_q_w_s_protocol_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a6583add5e51d649611ec124a518995bd\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event_1_1_simple_data.html\">QWSIMEvent::SimpleData</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#a6583add5e51d649611ec124a518995bd\">simpleData</a></td></tr>\n\
<tr class=\"separator:a6583add5e51d649611ec124a518995bd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6bbd23195dd517b76ee7d63a6a485892\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#a6bbd23195dd517b76ee7d63a6a485892\">streamingData</a></td></tr>\n\
<tr class=\"separator:a6bbd23195dd517b76ee7d63a6a485892\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_attribs_struct_q_w_s_protocol_item\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_attribs_struct_q_w_s_protocol_item\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Attributes inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html\">QWSProtocolItem</a></td></tr>\n\
<tr class=\"memitem:ac765329451135abec74c45e1897abf26 inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#ac765329451135abec74c45e1897abf26\">type</a></td></tr>\n\
<tr class=\"separator:ac765329451135abec74c45e1897abf26 inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac9c0479cb31c83f5ca2316ebe7bf20d5 inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#ac9c0479cb31c83f5ca2316ebe7bf20d5\">simpleLen</a></td></tr>\n\
<tr class=\"separator:ac9c0479cb31c83f5ca2316ebe7bf20d5 inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4b1edf54400d11cb46c5281d0fafe14b inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#a4b1edf54400d11cb46c5281d0fafe14b\">rawLen</a></td></tr>\n\
<tr class=\"separator:a4b1edf54400d11cb46c5281d0fafe14b inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa218d14a789d335272e598a71327b67a inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#aa218d14a789d335272e598a71327b67a\">deleteRaw</a></td></tr>\n\
<tr class=\"separator:aa218d14a789d335272e598a71327b67a inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a37fe16b68e6db6793c74b2ff7644df7d inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#a37fe16b68e6db6793c74b2ff7644df7d\">simpleDataPtr</a></td></tr>\n\
<tr class=\"separator:a37fe16b68e6db6793c74b2ff7644df7d inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2e7ee3ad35d0b04f50fa166e7be05014 inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#a2e7ee3ad35d0b04f50fa166e7be05014\">rawDataPtr</a></td></tr>\n\
<tr class=\"separator:a2e7ee3ad35d0b04f50fa166e7be05014 inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae6e5b483d0e550717522b5eadfab5c05 inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#ae6e5b483d0e550717522b5eadfab5c05\">bytesRead</a></td></tr>\n\
<tr class=\"separator:ae6e5b483d0e550717522b5eadfab5c05 inherit pub_attribs_struct_q_w_s_protocol_item\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pub_types_struct_q_w_s_event\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_types_struct_q_w_s_event\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Types inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html\">QWSEvent</a></td></tr>\n\
<tr class=\"memitem:a1d1cfd8ffb84e947f82999c682b666a7 inherit pub_types_struct_q_w_s_event\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7\">Type</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7ad6a7688a648ce9788ab5c25a54f459ef\">NoEvent</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7ad253364cc2926eb617b0833335fe4467\">Connected</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a3f366d19b692520f76c2e34d5dc45ef5\">Mouse</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7ace9aabd8e13c884472588325a665e44e\">Focus</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a957ac594708a2c9cb09643d9b7d8132a\">Key</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a023bdd1bf971f4038cba7eb662ea8121\">Region</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a6a0add927e0267ad70b9b9bf1becd2b0\">Creation</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a92cfcf32a67c50ee24769ada68132541\">PropertyNotify</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a4725be92cc5cb1f588007191fb75cb89\">PropertyReply</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a4835d6cfd608a6df70461bfbbaa9f894\">SelectionClear</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a22074b3df4f865218b4d30ad0d8f322d\">SelectionRequest</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a6bda2f057bc0f939622eff58e9987b47\">SelectionNotify</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a0de2fb44349397373b7ade2db44515ce\">MaxWindowRect</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7aa97d1a80a2b6cf32e9985034c0f63246\">QCopMessage</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a427977c81f0a939fe13d49a061deb8a0\">WindowOperation</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a414627e6256671c7f635d79aae3be994\">IMEvent</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7ab4bc497ed976f21de9d222aa696cac3c\">IMQuery</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a775e2885eaff731450219ace741910bb\">IMInit</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a06b2ad93fbcc9a41d5632c2342ebbf14\">Embed</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a4e4df1b8010d27e4910c8eedd8b5a14f\">Font</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7ac0517939bc191592deb13f9a1cea0f1b\">ScreenTransformation</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7ada2cc01b9f66e26c0a3692cafea352ea\">NEvent</a>\n\
<br>\n\
 }<tr class=\"separator:a1d1cfd8ffb84e947f82999c682b666a7 inherit pub_types_struct_q_w_s_event\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"inherit_header pub_static_methods_struct_q_w_s_event\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_methods_struct_q_w_s_event\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Static Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html\">QWSEvent</a></td></tr>\n\
<tr class=\"memitem:a1b44f4780e3543f69bffb985f9e85552 inherit pub_static_methods_struct_q_w_s_event\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html\">QWSEvent</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1b44f4780e3543f69bffb985f9e85552\">factory</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a>)</td></tr>\n\
<tr class=\"separator:a1b44f4780e3543f69bffb985f9e85552 inherit pub_static_methods_struct_q_w_s_event\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"af05071e1429c8a8be71131c0eb1b00c3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html\">QWSIMEvent</a> </td>\n\
          <td>(</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html#l00374\">374</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html\">qwsevent_qws.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00375\"></a><span class=\"lineno\">  375</span>&#160;        : <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a7365b82e468e3125e2863b185db64257\">QWSEvent</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a414627e6256671c7f635d79aae3be994\">IMEvent</a>, <span class=\"keyword\">sizeof</span>(<a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#a6583add5e51d649611ec124a518995bd\">simpleData</a>), reinterpret_cast&lt;char*&gt;(&amp;<a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#a6583add5e51d649611ec124a518995bd\">simpleData</a>))</div>\n\
<div class=\"line\"><a name=\"l00376\"></a><span class=\"lineno\">  376</span>&#160;   { memset(reinterpret_cast&lt;char*&gt;(&amp;<a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#a6583add5e51d649611ec124a518995bd\">simpleData</a>),0,<span class=\"keyword\">sizeof</span>(<a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#a6583add5e51d649611ec124a518995bd\">simpleData</a>)); }</div>\n\
<div class=\"ttc\" id=\"struct_q_w_s_event_html_a1d1cfd8ffb84e947f82999c682b666a7a414627e6256671c7f635d79aae3be994\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a1d1cfd8ffb84e947f82999c682b666a7a414627e6256671c7f635d79aae3be994\">QWSEvent::IMEvent</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html#l00081\">qwsevent_qws.h:81</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_w_s_i_m_event_html_a6583add5e51d649611ec124a518995bd\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#a6583add5e51d649611ec124a518995bd\">QWSIMEvent::simpleData</a></div><div class=\"ttdeci\">struct QWSIMEvent::SimpleData simpleData</div></div>\n\
<div class=\"ttc\" id=\"struct_q_w_s_event_html_a7365b82e468e3125e2863b185db64257\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_w_s_event.html#a7365b82e468e3125e2863b185db64257\">QWSEvent::QWSEvent</a></div><div class=\"ttdeci\">QWSEvent(int t, int len, char *ptr)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html#l00061\">qwsevent_qws.h:61</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a9559e09ba688262d0428d060ab0fd286\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> setData </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const char *&#160;</td>\n\
          <td class=\"paramname\"><em>d</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>len</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>allocateMem</em> = <code>true</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Reimplemented from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#a31324fff9fe715b7eb566ed4d0281e20\">QWSProtocolItem</a>.</p>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html#l00384\">384</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html\">qwsevent_qws.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00384\"></a><span class=\"lineno\">  384</span>&#160;                                                                  {</div>\n\
<div class=\"line\"><a name=\"l00385\"></a><span class=\"lineno\">  385</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#a31324fff9fe715b7eb566ed4d0281e20\">QWSEvent::setData</a>(d, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a508cd9b0e54f044f23b7fc474233693b\">len</a>, allocateMem);</div>\n\
<div class=\"line\"><a name=\"l00386\"></a><span class=\"lineno\">  386</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#a6bbd23195dd517b76ee7d63a6a485892\">streamingData</a> = <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html#a72c8c753a31847fe7a043334c5216dd7\">QByteArray::fromRawData</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#a2e7ee3ad35d0b04f50fa166e7be05014\">rawDataPtr</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a508cd9b0e54f044f23b7fc474233693b\">len</a>);</div>\n\
<div class=\"line\"><a name=\"l00387\"></a><span class=\"lineno\">  387</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"class_q_byte_array_html_a72c8c753a31847fe7a043334c5216dd7\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_byte_array.html#a72c8c753a31847fe7a043334c5216dd7\">QByteArray::fromRawData</a></div><div class=\"ttdeci\">static QByteArray fromRawData(const char *, int size)</div></div>\n\
<div class=\"ttc\" id=\"struct_q_w_s_protocol_item_html_a31324fff9fe715b7eb566ed4d0281e20\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#a31324fff9fe715b7eb566ed4d0281e20\">QWSProtocolItem::setData</a></div><div class=\"ttdeci\">virtual void setData(const char *data, int len, bool allocateMem=true)</div></div>\n\
<div class=\"ttc\" id=\"struct_q_w_s_protocol_item_html_a2e7ee3ad35d0b04f50fa166e7be05014\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_w_s_protocol_item.html#a2e7ee3ad35d0b04f50fa166e7be05014\">QWSProtocolItem::rawDataPtr</a></div><div class=\"ttdeci\">char * rawDataPtr</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwsprotocolitem__qws_8h_source.html#l00085\">qwsprotocolitem_qws.h:85</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a508cd9b0e54f044f23b7fc474233693b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a508cd9b0e54f044f23b7fc474233693b\">len</a></div><div class=\"ttdeci\">GLenum GLsizei len</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l02695\">GLee.h:2695</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_w_s_i_m_event_html_a6bbd23195dd517b76ee7d63a6a485892\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event.html#a6bbd23195dd517b76ee7d63a6a485892\">QWSIMEvent::streamingData</a></div><div class=\"ttdeci\">QByteArray streamingData</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html#l00388\">qwsevent_qws.h:388</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a6583add5e51d649611ec124a518995bd\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">struct <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_w_s_i_m_event_1_1_simple_data.html\">QWSIMEvent::SimpleData</a>  simpleData</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6bbd23195dd517b76ee7d63a6a485892\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> streamingData</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html#l00388\">388</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html\">qwsevent_qws.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this struct was generated from the following file:<ul>\n\
<li>QtGui/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qwsevent__qws_8h_source.html\">qwsevent_qws.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";