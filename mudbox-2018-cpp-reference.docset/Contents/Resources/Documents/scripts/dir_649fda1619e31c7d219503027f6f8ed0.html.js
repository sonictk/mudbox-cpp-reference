var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtNetwork Directory Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'dir_649fda1619e31c7d219503027f6f8ed0.html\', tocPrefix);\n\
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
            <h1>QtNetwork Directory Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
<div class=\"title\">QtNetwork Directory Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"files\"></a>\n\
Files</h2></td></tr>\n\
<tr class=\"memitem:qabstractnetworkcache_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qabstractnetworkcache_8h.html\">qabstractnetworkcache.h</a> <a href=\"#!/url=./cpp_ref/qabstractnetworkcache_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qabstractsocket_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qabstractsocket_8h.html\">qabstractsocket.h</a> <a href=\"#!/url=./cpp_ref/qabstractsocket_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qauthenticator_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qauthenticator_8h.html\">qauthenticator.h</a> <a href=\"#!/url=./cpp_ref/qauthenticator_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qftp_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qftp_8h.html\">qftp.h</a> <a href=\"#!/url=./cpp_ref/qftp_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qhostaddress_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostaddress_8h.html\">qhostaddress.h</a> <a href=\"#!/url=./cpp_ref/qhostaddress_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qhostinfo_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostinfo_8h.html\">qhostinfo.h</a> <a href=\"#!/url=./cpp_ref/qhostinfo_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qhttp_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhttp_8h.html\">qhttp.h</a> <a href=\"#!/url=./cpp_ref/qhttp_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qhttpmultipart_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhttpmultipart_8h.html\">qhttpmultipart.h</a> <a href=\"#!/url=./cpp_ref/qhttpmultipart_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qlocalserver_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qlocalserver_8h.html\">qlocalserver.h</a> <a href=\"#!/url=./cpp_ref/qlocalserver_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qlocalsocket_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qlocalsocket_8h.html\">qlocalsocket.h</a> <a href=\"#!/url=./cpp_ref/qlocalsocket_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qnetworkaccessmanager_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkaccessmanager_8h.html\">qnetworkaccessmanager.h</a> <a href=\"#!/url=./cpp_ref/qnetworkaccessmanager_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qnetworkconfigmanager_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkconfigmanager_8h.html\">qnetworkconfigmanager.h</a> <a href=\"#!/url=./cpp_ref/qnetworkconfigmanager_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qnetworkconfiguration_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkconfiguration_8h.html\">qnetworkconfiguration.h</a> <a href=\"#!/url=./cpp_ref/qnetworkconfiguration_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qnetworkcookie_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkcookie_8h.html\">qnetworkcookie.h</a> <a href=\"#!/url=./cpp_ref/qnetworkcookie_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qnetworkcookiejar_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkcookiejar_8h.html\">qnetworkcookiejar.h</a> <a href=\"#!/url=./cpp_ref/qnetworkcookiejar_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qnetworkdiskcache_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkdiskcache_8h.html\">qnetworkdiskcache.h</a> <a href=\"#!/url=./cpp_ref/qnetworkdiskcache_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qnetworkfunctions__wince_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkfunctions__wince_8h.html\">qnetworkfunctions_wince.h</a> <a href=\"#!/url=./cpp_ref/qnetworkfunctions__wince_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qnetworkinterface_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkinterface_8h.html\">qnetworkinterface.h</a> <a href=\"#!/url=./cpp_ref/qnetworkinterface_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qnetworkproxy_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkproxy_8h.html\">qnetworkproxy.h</a> <a href=\"#!/url=./cpp_ref/qnetworkproxy_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qnetworkreply_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkreply_8h.html\">qnetworkreply.h</a> <a href=\"#!/url=./cpp_ref/qnetworkreply_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qnetworkrequest_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworkrequest_8h.html\">qnetworkrequest.h</a> <a href=\"#!/url=./cpp_ref/qnetworkrequest_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qnetworksession_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qnetworksession_8h.html\">qnetworksession.h</a> <a href=\"#!/url=./cpp_ref/qnetworksession_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qssl_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qssl_8h.html\">qssl.h</a> <a href=\"#!/url=./cpp_ref/qssl_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qsslcertificate_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsslcertificate_8h.html\">qsslcertificate.h</a> <a href=\"#!/url=./cpp_ref/qsslcertificate_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qsslcipher_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsslcipher_8h.html\">qsslcipher.h</a> <a href=\"#!/url=./cpp_ref/qsslcipher_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qsslconfiguration_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsslconfiguration_8h.html\">qsslconfiguration.h</a> <a href=\"#!/url=./cpp_ref/qsslconfiguration_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qsslerror_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsslerror_8h.html\">qsslerror.h</a> <a href=\"#!/url=./cpp_ref/qsslerror_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qsslkey_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsslkey_8h.html\">qsslkey.h</a> <a href=\"#!/url=./cpp_ref/qsslkey_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qsslsocket_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsslsocket_8h.html\">qsslsocket.h</a> <a href=\"#!/url=./cpp_ref/qsslsocket_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qtcpserver_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtcpserver_8h.html\">qtcpserver.h</a> <a href=\"#!/url=./cpp_ref/qtcpserver_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qtcpsocket_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtcpsocket_8h.html\">qtcpsocket.h</a> <a href=\"#!/url=./cpp_ref/qtcpsocket_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qudpsocket_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qudpsocket_8h.html\">qudpsocket.h</a> <a href=\"#!/url=./cpp_ref/qudpsocket_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:qurlinfo_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qurlinfo_8h.html\">qurlinfo.h</a> <a href=\"#!/url=./cpp_ref/qurlinfo_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";