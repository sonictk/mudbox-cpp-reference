var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtNetwork/qhostaddress.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qhostaddress_8h.html\', tocPrefix);\n\
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
            <h1>QtNetwork/qhostaddress.h File Reference</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>File&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/globals.html\"><span>File&#160;Members</span></a></li>\n\
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
<div class=\"title\">qhostaddress.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"qhostaddress_8h.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"qhostaddress_8h.html#typedef-members\">Typedefs</a> &#124;\n\
<a href=\"qhostaddress_8h.html#func-members\">Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpair_8h_source.html\">QtCore/qpair.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstring_8h_source.html\">QtCore/qstring.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qscopedpointer_8h_source.html\">QtCore/qscopedpointer.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qabstractsocket_8h_source.html\">QtNetwork/qabstractsocket.h</a>&gt;</code><br>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_i_pv6_address.html\">QIPv6Address</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"typedef-members\"></a>\n\
Typedefs</h2></td></tr>\n\
<tr class=\"memitem:a7f122a54d05d38c19ea77811a28428a9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_i_pv6_address.html\">QIPv6Address</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostaddress_8h.html#a7f122a54d05d38c19ea77811a28428a9\">Q_IPV6ADDR</a></td></tr>\n\
<tr class=\"separator:a7f122a54d05d38c19ea77811a28428a9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:a3d64d681e94d7e86492704dcf5672f48\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostaddress_8h.html#a3d64d681e94d7e86492704dcf5672f48\">operator==</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html#a8ac0d0ea154be0f8fc314669dc7cb822\">QHostAddress::SpecialAddress</a> address1, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a> &amp;address2)</td></tr>\n\
<tr class=\"separator:a3d64d681e94d7e86492704dcf5672f48\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa5cdf12d6d654efcb3722101c2c60d45\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_NETWORK_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostaddress_8h.html#aa5cdf12d6d654efcb3722101c2c60d45\">operator&lt;&lt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a>, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a> &amp;)</td></tr>\n\
<tr class=\"separator:aa5cdf12d6d654efcb3722101c2c60d45\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad114a709a65c9f4f6413a5916c175d0b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_NETWORK_EXPORT uint&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostaddress_8h.html#ad114a709a65c9f4f6413a5916c175d0b\">qHash</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a> &amp;key)</td></tr>\n\
<tr class=\"separator:ad114a709a65c9f4f6413a5916c175d0b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0d6e91d8dba85b4d97833e04c15dd0a4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_NETWORK_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostaddress_8h.html#a0d6e91d8dba85b4d97833e04c15dd0a4\">operator&lt;&lt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a> &amp;)</td></tr>\n\
<tr class=\"separator:a0d6e91d8dba85b4d97833e04c15dd0a4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a16af545fcd13093baf14f93d098f1965\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_NETWORK_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostaddress_8h.html#a16af545fcd13093baf14f93d098f1965\">operator&gt;&gt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a> &amp;)</td></tr>\n\
<tr class=\"separator:a16af545fcd13093baf14f93d098f1965\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Typedef Documentation</h2>\n\
<a class=\"anchor\" id=\"a7f122a54d05d38c19ea77811a28428a9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">typedef <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_i_pv6_address.html\">QIPv6Address</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostaddress_8h.html#a7f122a54d05d38c19ea77811a28428a9\">Q_IPV6ADDR</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostaddress_8h_source.html#l00068\">68</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostaddress_8h_source.html\">qhostaddress.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a3d64d681e94d7e86492704dcf5672f48\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html#a8ac0d0ea154be0f8fc314669dc7cb822\">QHostAddress::SpecialAddress</a>&#160;</td>\n\
          <td class=\"paramname\"><em>address1</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>address2</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostaddress_8h_source.html#l00137\">137</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qhostaddress_8h_source.html\">qhostaddress.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00138\"></a><span class=\"lineno\">  138</span>&#160;{ <span class=\"keywordflow\">return</span> address2 == address1; }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa5cdf12d6d654efcb3722101c2c60d45\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_NETWORK_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a> operator&lt;&lt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a>&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
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
<a class=\"anchor\" id=\"ad114a709a65c9f4f6413a5916c175d0b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_NETWORK_EXPORT uint qHash </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>key</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0d6e91d8dba85b4d97833e04c15dd0a4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_NETWORK_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a>&amp; operator&lt;&lt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
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
<a class=\"anchor\" id=\"a16af545fcd13093baf14f93d098f1965\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_NETWORK_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a>&amp; operator&gt;&gt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_host_address.html\">QHostAddress</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
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
\n\
<p><a href=\"#!/url=./cpp_ref/qhostaddress_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";