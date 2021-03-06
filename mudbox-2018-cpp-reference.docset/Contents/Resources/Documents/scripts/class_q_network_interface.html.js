var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QNetworkInterface Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_network_interface.html\', tocPrefix);\n\
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
            <h1>QNetworkInterface Class Reference</h1>\n\
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
<div class=\"title\">QNetworkInterface Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_q_network_interface.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_q_network_interface.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_q_network_interface.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_q_network_interface.html#friends\">Friends</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html\">qnetworkinterface.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html#l00087\">87</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html\">qnetworkinterface.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:a4ae84858ae44dcb2a0b2cfad3c827840\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840\">InterfaceFlag</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840a1a1483508e1ac6f737047717f1de796c\">IsUp</a> = 0x1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840a6aa50245911463a63af00f325ee6cb06\">IsRunning</a> = 0x2, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840a6717dae92114b2081cf803cc79a2e670\">CanBroadcast</a> = 0x4, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840a2228e80f9e9524d87b64217f988e422c\">IsLoopBack</a> = 0x8, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840af036005cdc9d8f13d1b43b423120b679\">IsPointToPoint</a> = 0x10, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840adb657993a8ea112cbb04091abb1089bc\">CanMulticast</a> = 0x20\n\
<br>\n\
 }<tr class=\"separator:a4ae84858ae44dcb2a0b2cfad3c827840\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aebeb5a89f1b00bac5028edf61e569462\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#aebeb5a89f1b00bac5028edf61e569462\">QNetworkInterface</a> ()</td></tr>\n\
<tr class=\"separator:aebeb5a89f1b00bac5028edf61e569462\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1e837814cb523a3c6e4ff6a895d4c2c3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a1e837814cb523a3c6e4ff6a895d4c2c3\">QNetworkInterface</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a> &amp;other)</td></tr>\n\
<tr class=\"separator:a1e837814cb523a3c6e4ff6a895d4c2c3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1046d46ca195c2369877ddc4ee2b0b27\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a1046d46ca195c2369877ddc4ee2b0b27\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a> &amp;other)</td></tr>\n\
<tr class=\"separator:a1046d46ca195c2369877ddc4ee2b0b27\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aff7535a1ef49994cb16df99f2aa5c9b7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#aff7535a1ef49994cb16df99f2aa5c9b7\">~QNetworkInterface</a> ()</td></tr>\n\
<tr class=\"separator:aff7535a1ef49994cb16df99f2aa5c9b7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aac1b70a2ed67ead038c4d3f5ac4d8a81\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#aac1b70a2ed67ead038c4d3f5ac4d8a81\">isValid</a> () const </td></tr>\n\
<tr class=\"separator:aac1b70a2ed67ead038c4d3f5ac4d8a81\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad9c88ed5e8125d66291acd55da72d73e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#ad9c88ed5e8125d66291acd55da72d73e\">index</a> () const </td></tr>\n\
<tr class=\"separator:ad9c88ed5e8125d66291acd55da72d73e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2b0a198f837184bf6fff555cee3ce770\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a2b0a198f837184bf6fff555cee3ce770\">name</a> () const </td></tr>\n\
<tr class=\"separator:a2b0a198f837184bf6fff555cee3ce770\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abfd0132449b6fb50d24250df991822bd\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#abfd0132449b6fb50d24250df991822bd\">humanReadableName</a> () const </td></tr>\n\
<tr class=\"separator:abfd0132449b6fb50d24250df991822bd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8ee38ae5a85900dc88fabb2c08d25a0a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">InterfaceFlags&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a8ee38ae5a85900dc88fabb2c08d25a0a\">flags</a> () const </td></tr>\n\
<tr class=\"separator:a8ee38ae5a85900dc88fabb2c08d25a0a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6d07e3daf220f9b3e4313d20e72c7698\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a6d07e3daf220f9b3e4313d20e72c7698\">hardwareAddress</a> () const </td></tr>\n\
<tr class=\"separator:a6d07e3daf220f9b3e4313d20e72c7698\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a91fb4870fbf9de26fadeebb1cfd8182d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_address_entry.html\">QNetworkAddressEntry</a> &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a91fb4870fbf9de26fadeebb1cfd8182d\">addressEntries</a> () const </td></tr>\n\
<tr class=\"separator:a91fb4870fbf9de26fadeebb1cfd8182d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:acc99e39e71fa83552fec8aaaff6dddbb\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#acc99e39e71fa83552fec8aaaff6dddbb\">interfaceFromName</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad977737dfc9a274a62741b9500c49a32\">name</a>)</td></tr>\n\
<tr class=\"separator:acc99e39e71fa83552fec8aaaff6dddbb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad6a24faba7ff5926bdc44d876d3ba90d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#ad6a24faba7ff5926bdc44d876d3ba90d\">interfaceFromIndex</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a6468fe3bfff24d7d939eb21863b88268\">index</a>)</td></tr>\n\
<tr class=\"separator:ad6a24faba7ff5926bdc44d876d3ba90d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4e609dd7f265524b2e35b39e934f4f27\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a> &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4e609dd7f265524b2e35b39e934f4f27\">allInterfaces</a> ()</td></tr>\n\
<tr class=\"separator:a4e609dd7f265524b2e35b39e934f4f27\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2cd6c1c92eb2e5ca20d58b7cc121333d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a> &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a2cd6c1c92eb2e5ca20d58b7cc121333d\">allAddresses</a> ()</td></tr>\n\
<tr class=\"separator:a2cd6c1c92eb2e5ca20d58b7cc121333d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:a28a5e23163d5cabd89cbe19c12ab6e0a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a28a5e23163d5cabd89cbe19c12ab6e0a\">QNetworkInterfacePrivate</a></td></tr>\n\
<tr class=\"separator:a28a5e23163d5cabd89cbe19c12ab6e0a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"a4ae84858ae44dcb2a0b2cfad3c827840\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840\">InterfaceFlag</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a4ae84858ae44dcb2a0b2cfad3c827840a1a1483508e1ac6f737047717f1de796c\"></a>IsUp&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a4ae84858ae44dcb2a0b2cfad3c827840a6aa50245911463a63af00f325ee6cb06\"></a>IsRunning&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a4ae84858ae44dcb2a0b2cfad3c827840a6717dae92114b2081cf803cc79a2e670\"></a>CanBroadcast&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a4ae84858ae44dcb2a0b2cfad3c827840a2228e80f9e9524d87b64217f988e422c\"></a>IsLoopBack&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a4ae84858ae44dcb2a0b2cfad3c827840af036005cdc9d8f13d1b43b423120b679\"></a>IsPointToPoint&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a4ae84858ae44dcb2a0b2cfad3c827840adb657993a8ea112cbb04091abb1089bc\"></a>CanMulticast&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
</table>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html#l00090\">90</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html\">qnetworkinterface.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;                       {</div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840a1a1483508e1ac6f737047717f1de796c\">IsUp</a> = 0x1,</div>\n\
<div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840a6aa50245911463a63af00f325ee6cb06\">IsRunning</a> = 0x2,</div>\n\
<div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\">   93</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840a6717dae92114b2081cf803cc79a2e670\">CanBroadcast</a> = 0x4,</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840a2228e80f9e9524d87b64217f988e422c\">IsLoopBack</a> = 0x8,</div>\n\
<div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840af036005cdc9d8f13d1b43b423120b679\">IsPointToPoint</a> = 0x10,</div>\n\
<div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840adb657993a8ea112cbb04091abb1089bc\">CanMulticast</a> = 0x20</div>\n\
<div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\">   97</span>&#160;    };</div>\n\
<div class=\"ttc\" id=\"class_q_network_interface_html_a4ae84858ae44dcb2a0b2cfad3c827840af036005cdc9d8f13d1b43b423120b679\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840af036005cdc9d8f13d1b43b423120b679\">QNetworkInterface::IsPointToPoint</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html#l00095\">qnetworkinterface.h:95</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_network_interface_html_a4ae84858ae44dcb2a0b2cfad3c827840a1a1483508e1ac6f737047717f1de796c\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840a1a1483508e1ac6f737047717f1de796c\">QNetworkInterface::IsUp</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html#l00091\">qnetworkinterface.h:91</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_network_interface_html_a4ae84858ae44dcb2a0b2cfad3c827840a2228e80f9e9524d87b64217f988e422c\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840a2228e80f9e9524d87b64217f988e422c\">QNetworkInterface::IsLoopBack</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html#l00094\">qnetworkinterface.h:94</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_network_interface_html_a4ae84858ae44dcb2a0b2cfad3c827840a6717dae92114b2081cf803cc79a2e670\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840a6717dae92114b2081cf803cc79a2e670\">QNetworkInterface::CanBroadcast</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html#l00093\">qnetworkinterface.h:93</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_network_interface_html_a4ae84858ae44dcb2a0b2cfad3c827840a6aa50245911463a63af00f325ee6cb06\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840a6aa50245911463a63af00f325ee6cb06\">QNetworkInterface::IsRunning</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html#l00092\">qnetworkinterface.h:92</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_network_interface_html_a4ae84858ae44dcb2a0b2cfad3c827840adb657993a8ea112cbb04091abb1089bc\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_network_interface.html#a4ae84858ae44dcb2a0b2cfad3c827840adb657993a8ea112cbb04091abb1089bc\">QNetworkInterface::CanMulticast</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html#l00096\">qnetworkinterface.h:96</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"aebeb5a89f1b00bac5028edf61e569462\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1e837814cb523a3c6e4ff6a895d4c2c3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aff7535a1ef49994cb16df99f2aa5c9b7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">~<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a1046d46ca195c2369877ddc4ee2b0b27\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a>&amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aac1b70a2ed67ead038c4d3f5ac4d8a81\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool isValid </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad9c88ed5e8125d66291acd55da72d73e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a6468fe3bfff24d7d939eb21863b88268\">index</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2b0a198f837184bf6fff555cee3ce770\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad977737dfc9a274a62741b9500c49a32\">name</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"abfd0132449b6fb50d24250df991822bd\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> humanReadableName </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8ee38ae5a85900dc88fabb2c08d25a0a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">InterfaceFlags flags </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6d07e3daf220f9b3e4313d20e72c7698\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> hardwareAddress </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a91fb4870fbf9de26fadeebb1cfd8182d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>&lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_address_entry.html\">QNetworkAddressEntry</a>&gt; addressEntries </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acc99e39e71fa83552fec8aaaff6dddbb\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a> interfaceFromName </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad6a24faba7ff5926bdc44d876d3ba90d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a> interfaceFromIndex </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>index</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4e609dd7f265524b2e35b39e934f4f27\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>&lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_network_interface.html\">QNetworkInterface</a>&gt; allInterfaces </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2cd6c1c92eb2e5ca20d58b7cc121333d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>&lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a>&gt; allAddresses </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Friends And Related Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a28a5e23163d5cabd89cbe19c12ab6e0a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">friend class QNetworkInterfacePrivate</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">friend</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html#l00120\">120</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html\">qnetworkinterface.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtNetwork/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html\">qnetworkinterface.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";