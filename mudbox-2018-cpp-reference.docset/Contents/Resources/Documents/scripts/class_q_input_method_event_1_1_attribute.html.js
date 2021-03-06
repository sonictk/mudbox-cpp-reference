var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QInputMethodEvent::Attribute Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_input_method_event_1_1_attribute.html\', tocPrefix);\n\
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
            <h1>QInputMethodEvent::Attribute Class Reference</h1>\n\
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
<div class=\"title\">QInputMethodEvent::Attribute Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_q_input_method_event_1_1_attribute.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_q_input_method_event_1_1_attribute.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html\">qevent.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html#l00441\">441</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html\">qevent.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a271fe04d0416de17606b07767bfa9ab7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#a271fe04d0416de17606b07767bfa9ab7\">Attribute</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event.html#a349a9cde14be8097df865ba0469c0ab2\">AttributeType</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> l, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_variant.html\">QVariant</a> val)</td></tr>\n\
<tr class=\"separator:a271fe04d0416de17606b07767bfa9ab7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:aeed092b2afb6aef7bc80ccd236f2c031\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event.html#a349a9cde14be8097df865ba0469c0ab2\">AttributeType</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#aeed092b2afb6aef7bc80ccd236f2c031\">type</a></td></tr>\n\
<tr class=\"separator:aeed092b2afb6aef7bc80ccd236f2c031\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a37722a150250e2a5a98e5e0d11e53449\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#a37722a150250e2a5a98e5e0d11e53449\">start</a></td></tr>\n\
<tr class=\"separator:a37722a150250e2a5a98e5e0d11e53449\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9f59b34b1f25fe00023291b678246bcc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#a9f59b34b1f25fe00023291b678246bcc\">length</a></td></tr>\n\
<tr class=\"separator:a9f59b34b1f25fe00023291b678246bcc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac7337cb78311810d92013857a57cd677\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_variant.html\">QVariant</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#ac7337cb78311810d92013857a57cd677\">value</a></td></tr>\n\
<tr class=\"separator:ac7337cb78311810d92013857a57cd677\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a271fe04d0416de17606b07767bfa9ab7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html\">Attribute</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event.html#a349a9cde14be8097df865ba0469c0ab2\">AttributeType</a>&#160;</td>\n\
          <td class=\"paramname\"><em>t</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>s</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>l</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_variant.html\">QVariant</a>&#160;</td>\n\
          <td class=\"paramname\"><em>val</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html#l00443\">443</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html\">qevent.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00443\"></a><span class=\"lineno\">  443</span>&#160;: <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#aeed092b2afb6aef7bc80ccd236f2c031\">type</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a>), <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#a37722a150250e2a5a98e5e0d11e53449\">start</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a>), <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#a9f59b34b1f25fe00023291b678246bcc\">length</a>(l), <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#ac7337cb78311810d92013857a57cd677\">value</a>(val) {}</div>\n\
<div class=\"ttc\" id=\"class_q_input_method_event_1_1_attribute_html_a37722a150250e2a5a98e5e0d11e53449\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#a37722a150250e2a5a98e5e0d11e53449\">QInputMethodEvent::Attribute::start</a></div><div class=\"ttdeci\">int start</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qevent_8h_source.html#l00446\">qevent.h:446</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_input_method_event_1_1_attribute_html_aeed092b2afb6aef7bc80ccd236f2c031\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#aeed092b2afb6aef7bc80ccd236f2c031\">QInputMethodEvent::Attribute::type</a></div><div class=\"ttdeci\">AttributeType type</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qevent_8h_source.html#l00444\">qevent.h:444</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_input_method_event_1_1_attribute_html_ac7337cb78311810d92013857a57cd677\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#ac7337cb78311810d92013857a57cd677\">QInputMethodEvent::Attribute::value</a></div><div class=\"ttdeci\">QVariant value</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qevent_8h_source.html#l00448\">qevent.h:448</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_input_method_event_1_1_attribute_html_a9f59b34b1f25fe00023291b678246bcc\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_input_method_event_1_1_attribute.html#a9f59b34b1f25fe00023291b678246bcc\">QInputMethodEvent::Attribute::length</a></div><div class=\"ttdeci\">int length</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qevent_8h_source.html#l00447\">qevent.h:447</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a653819996e713edf9c01a5b564199189\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a></div><div class=\"ttdeci\">GLdouble GLdouble t</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01181\">GLee.h:1181</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_ad585a1393cfa368fa9dc3d8ebff640d5\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a></div><div class=\"ttdeci\">GLdouble s</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01173\">GLee.h:1173</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"aeed092b2afb6aef7bc80ccd236f2c031\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_input_method_event.html#a349a9cde14be8097df865ba0469c0ab2\">AttributeType</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html#l00444\">444</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html\">qevent.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a37722a150250e2a5a98e5e0d11e53449\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html#l00446\">446</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html\">qevent.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9f59b34b1f25fe00023291b678246bcc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3c8469415bbc83dd1341af15c67f1cef\">length</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html#l00447\">447</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html\">qevent.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac7337cb78311810d92013857a57cd677\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_variant.html\">QVariant</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html#l00448\">448</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html\">qevent.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtGui/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qevent_8h_source.html\">qevent.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";