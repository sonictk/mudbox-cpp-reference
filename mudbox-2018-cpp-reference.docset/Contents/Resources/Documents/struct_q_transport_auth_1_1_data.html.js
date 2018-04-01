var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QTransportAuth::Data Struct Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_q_transport_auth_1_1_data.html\', tocPrefix);\n\
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
            <h1>QTransportAuth::Data Struct Reference</h1>\n\
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
<div class=\"title\">QTransportAuth::Data Struct Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"struct_q_transport_auth_1_1_data.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"struct_q_transport_auth_1_1_data.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html\">qtransportauth_qws.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00108\">108</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html\">qtransportauth_qws.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a51d806137473e32bc8e082f8beb3133a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a51d806137473e32bc8e082f8beb3133a\">Data</a> ()</td></tr>\n\
<tr class=\"separator:a51d806137473e32bc8e082f8beb3133a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a969b30937b0df4fea2109f584164d220\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a969b30937b0df4fea2109f584164d220\">Data</a> (unsigned char <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> d)</td></tr>\n\
<tr class=\"separator:a969b30937b0df4fea2109f584164d220\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1fd395da89e6dd9dd3861aae962ba0ce\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a1fd395da89e6dd9dd3861aae962ba0ce\">trusted</a> () const </td></tr>\n\
<tr class=\"separator:a1fd395da89e6dd9dd3861aae962ba0ce\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af4855c7a196284af38247a477054529e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#af4855c7a196284af38247a477054529e\">setTrusted</a> (bool)</td></tr>\n\
<tr class=\"separator:af4855c7a196284af38247a477054529e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac4117a3c8436dadff19f291cb49105f1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#ac4117a3c8436dadff19f291cb49105f1\">connection</a> () const </td></tr>\n\
<tr class=\"separator:ac4117a3c8436dadff19f291cb49105f1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abdf28eeefdce9773bc40679198655c75\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#abdf28eeefdce9773bc40679198655c75\">setConnection</a> (bool)</td></tr>\n\
<tr class=\"separator:abdf28eeefdce9773bc40679198655c75\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a78b61a2d452301b80cd56942bfc362e0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned char&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a78b61a2d452301b80cd56942bfc362e0\">properties</a></td></tr>\n\
<tr class=\"separator:a78b61a2d452301b80cd56942bfc362e0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a715a9c08e3eb3c1fe0820222ae5b6667\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned char&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a715a9c08e3eb3c1fe0820222ae5b6667\">progId</a></td></tr>\n\
<tr class=\"separator:a715a9c08e3eb3c1fe0820222ae5b6667\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a54849a1c58ce64ba16a055ad9555a027\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned char&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a54849a1c58ce64ba16a055ad9555a027\">status</a></td></tr>\n\
<tr class=\"separator:a54849a1c58ce64ba16a055ad9555a027\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6e183ac6b6a9b70c88224417de5f5f00\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a6e183ac6b6a9b70c88224417de5f5f00\">descriptor</a></td></tr>\n\
<tr class=\"separator:a6e183ac6b6a9b70c88224417de5f5f00\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a87a7a0da036177c5a7851aed1ba98eab\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">pid_t&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a87a7a0da036177c5a7851aed1ba98eab\">processId</a></td></tr>\n\
<tr class=\"separator:a87a7a0da036177c5a7851aed1ba98eab\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a51d806137473e32bc8e082f8beb3133a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html\">Data</a> </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00110\">110</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html\">qtransportauth_qws.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00110\"></a><span class=\"lineno\">  110</span>&#160;{ <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a87a7a0da036177c5a7851aed1ba98eab\">processId</a> = -1; }</div>\n\
<div class=\"ttc\" id=\"struct_q_transport_auth_1_1_data_html_a87a7a0da036177c5a7851aed1ba98eab\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a87a7a0da036177c5a7851aed1ba98eab\">QTransportAuth::Data::processId</a></div><div class=\"ttdeci\">pid_t processId</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00125\">qtransportauth_qws.h:125</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a969b30937b0df4fea2109f584164d220\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html\">Data</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned char&#160;</td>\n\
          <td class=\"paramname\"><em>p</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>d</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00111\">111</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html\">qtransportauth_qws.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00112\"></a><span class=\"lineno\">  112</span>&#160;            : <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a78b61a2d452301b80cd56942bfc362e0\">properties</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a> )</div>\n\
<div class=\"line\"><a name=\"l00113\"></a><span class=\"lineno\">  113</span>&#160;            , <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a6e183ac6b6a9b70c88224417de5f5f00\">descriptor</a>( d )</div>\n\
<div class=\"line\"><a name=\"l00114\"></a><span class=\"lineno\">  114</span>&#160;            , <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a87a7a0da036177c5a7851aed1ba98eab\">processId</a>( -1 )</div>\n\
<div class=\"line\"><a name=\"l00115\"></a><span class=\"lineno\">  115</span>&#160;        {</div>\n\
<div class=\"line\"><a name=\"l00116\"></a><span class=\"lineno\">  116</span>&#160;            <span class=\"keywordflow\">if</span> (( <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a78b61a2d452301b80cd56942bfc362e0\">properties</a> &amp; <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_transport_auth.html#a85b0a3c65ef994ac751bab62876cfedfac033a627ccb1d05e7b0b4ea7b5a55b16\">TransportType</a> ) == <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_transport_auth.html#a85b0a3c65ef994ac751bab62876cfedfaa040cd7feeb588104634cdadf35abf1c\">TCP</a> ||</div>\n\
<div class=\"line\"><a name=\"l00117\"></a><span class=\"lineno\">  117</span>&#160;                ( <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a78b61a2d452301b80cd56942bfc362e0\">properties</a> &amp; TransportType ) == <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_transport_auth.html#a85b0a3c65ef994ac751bab62876cfedfab46e3a2f1ba0d5f6fec60b06b8c6fcb9\">UnixStreamSock</a> )</div>\n\
<div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;                <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a78b61a2d452301b80cd56942bfc362e0\">properties</a> |= <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_transport_auth.html#a85b0a3c65ef994ac751bab62876cfedfaa87099bc023406b980b79ea163ff02f5\">Connection</a>;</div>\n\
<div class=\"line\"><a name=\"l00119\"></a><span class=\"lineno\">  119</span>&#160;        }</div>\n\
<div class=\"ttc\" id=\"class_q_transport_auth_html_a85b0a3c65ef994ac751bab62876cfedfaa040cd7feeb588104634cdadf35abf1c\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_transport_auth.html#a85b0a3c65ef994ac751bab62876cfedfaa040cd7feeb588104634cdadf35abf1c\">QTransportAuth::TCP</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00103\">qtransportauth_qws.h:103</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_transport_auth_1_1_data_html_a78b61a2d452301b80cd56942bfc362e0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a78b61a2d452301b80cd56942bfc362e0\">QTransportAuth::Data::properties</a></div><div class=\"ttdeci\">unsigned char properties</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00121\">qtransportauth_qws.h:121</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_transport_auth_1_1_data_html_a6e183ac6b6a9b70c88224417de5f5f00\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a6e183ac6b6a9b70c88224417de5f5f00\">QTransportAuth::Data::descriptor</a></div><div class=\"ttdeci\">unsigned int descriptor</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00124\">qtransportauth_qws.h:124</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_transport_auth_html_a85b0a3c65ef994ac751bab62876cfedfab46e3a2f1ba0d5f6fec60b06b8c6fcb9\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_transport_auth.html#a85b0a3c65ef994ac751bab62876cfedfab46e3a2f1ba0d5f6fec60b06b8c6fcb9\">QTransportAuth::UnixStreamSock</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00099\">qtransportauth_qws.h:99</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_transport_auth_html_a85b0a3c65ef994ac751bab62876cfedfac033a627ccb1d05e7b0b4ea7b5a55b16\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_transport_auth.html#a85b0a3c65ef994ac751bab62876cfedfac033a627ccb1d05e7b0b4ea7b5a55b16\">QTransportAuth::TransportType</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00105\">qtransportauth_qws.h:105</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_transport_auth_html_a85b0a3c65ef994ac751bab62876cfedfaa87099bc023406b980b79ea163ff02f5\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_transport_auth.html#a85b0a3c65ef994ac751bab62876cfedfaa87099bc023406b980b79ea163ff02f5\">QTransportAuth::Connection</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00098\">qtransportauth_qws.h:98</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_aa5367c14d90f462230c2611b81b41d23\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa5367c14d90f462230c2611b81b41d23\">p</a></div><div class=\"ttdeci\">GLfloat GLfloat p</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05416\">GLee.h:5416</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_transport_auth_1_1_data_html_a87a7a0da036177c5a7851aed1ba98eab\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_transport_auth_1_1_data.html#a87a7a0da036177c5a7851aed1ba98eab\">QTransportAuth::Data::processId</a></div><div class=\"ttdeci\">pid_t processId</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00125\">qtransportauth_qws.h:125</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a1fd395da89e6dd9dd3861aae962ba0ce\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool trusted </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af4855c7a196284af38247a477054529e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> setTrusted </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac4117a3c8436dadff19f291cb49105f1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool connection </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"abdf28eeefdce9773bc40679198655c75\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> setConnection </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a78b61a2d452301b80cd56942bfc362e0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned char properties</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00121\">121</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html\">qtransportauth_qws.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a715a9c08e3eb3c1fe0820222ae5b6667\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned char progId</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00122\">122</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html\">qtransportauth_qws.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a54849a1c58ce64ba16a055ad9555a027\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned char status</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00123\">123</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html\">qtransportauth_qws.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6e183ac6b6a9b70c88224417de5f5f00\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> descriptor</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00124\">124</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html\">qtransportauth_qws.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a87a7a0da036177c5a7851aed1ba98eab\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">pid_t processId</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html#l00125\">125</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html\">qtransportauth_qws.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this struct was generated from the following file:<ul>\n\
<li>QtGui/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtransportauth__qws_8h_source.html\">qtransportauth_qws.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";