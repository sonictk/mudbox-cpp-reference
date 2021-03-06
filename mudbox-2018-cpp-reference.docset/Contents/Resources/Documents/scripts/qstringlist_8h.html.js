var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtCore/qstringlist.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qstringlist_8h.html\', tocPrefix);\n\
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
            <h1>QtCore/qstringlist.h File Reference</h1>\n\
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
<div class=\"title\">qstringlist.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"qstringlist_8h.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"qstringlist_8h.html#namespaces\">Namespaces</a> &#124;\n\
<a href=\"qstringlist_8h.html#typedef-members\">Typedefs</a> &#124;\n\
<a href=\"qstringlist_8h.html#func-members\">Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qalgorithms_8h_source.html\">QtCore/qalgorithms.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qdatastream_8h_source.html\">QtCore/qdatastream.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qlist_8h_source.html\">QtCore/qlist.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qregexp_8h_source.html\">QtCore/qregexp.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstring_8h_source.html\">QtCore/qstring.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringmatcher_8h_source.html\">QtCore/qstringmatcher.h</a>&gt;</code><br>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"namespaces\"></a>\n\
Namespaces</h2></td></tr>\n\
<tr class=\"memitem:namespace_qt_private\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"> &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html\">QtPrivate</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"typedef-members\"></a>\n\
Typedefs</h2></td></tr>\n\
<tr class=\"memitem:ac20d26691cf5d06603602bf2195630f0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">typedef QListIterator&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h.html#ac20d26691cf5d06603602bf2195630f0\">QStringListIterator</a></td></tr>\n\
<tr class=\"separator:ac20d26691cf5d06603602bf2195630f0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a519700d8bfc8f25474d05a28415689b8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">typedef QMutableListIterator&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h.html#a519700d8bfc8f25474d05a28415689b8\">QMutableStringListIterator</a></td></tr>\n\
<tr class=\"separator:a519700d8bfc8f25474d05a28415689b8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:aa30e621a8f8f02c7b3ffc02c80b555ef\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> Q_CORE_EXPORT&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html#aa30e621a8f8f02c7b3ffc02c80b555ef\">QStringList_sort</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> *that)</td></tr>\n\
<tr class=\"separator:aa30e621a8f8f02c7b3ffc02c80b555ef\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5b55f4ae5ab0c5c44d66ea8778982f88\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> Q_CORE_EXPORT&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html#a5b55f4ae5ab0c5c44d66ea8778982f88\">QStringList_removeDuplicates</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> *that)</td></tr>\n\
<tr class=\"separator:a5b55f4ae5ab0c5c44d66ea8778982f88\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a23943f65ccfc3180de74622507b3c2d7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> Q_CORE_EXPORT&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html#a23943f65ccfc3180de74622507b3c2d7\">QStringList_join</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> *that, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sep)</td></tr>\n\
<tr class=\"separator:a23943f65ccfc3180de74622507b3c2d7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a23a27325c89ea17444eeb6b69d8edc6f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> Q_CORE_EXPORT&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html#a23a27325c89ea17444eeb6b69d8edc6f\">QStringList_filter</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> *that, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;str, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#aaa929f83398f109dfbff9789108b159b\">Qt::CaseSensitivity</a> cs)</td></tr>\n\
<tr class=\"separator:a23a27325c89ea17444eeb6b69d8edc6f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2faa827fd9e9710ded4efaf6a19d1711\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">QBool Q_CORE_EXPORT&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html#a2faa827fd9e9710ded4efaf6a19d1711\">QStringList_contains</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> *that, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;str, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#aaa929f83398f109dfbff9789108b159b\">Qt::CaseSensitivity</a> cs)</td></tr>\n\
<tr class=\"separator:a2faa827fd9e9710ded4efaf6a19d1711\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a60a29b8a7dd1eb9c36206483c98a6ccc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> Q_CORE_EXPORT&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html#a60a29b8a7dd1eb9c36206483c98a6ccc\">QStringList_replaceInStrings</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> *that, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;before, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;after, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#aaa929f83398f109dfbff9789108b159b\">Qt::CaseSensitivity</a> cs)</td></tr>\n\
<tr class=\"separator:a60a29b8a7dd1eb9c36206483c98a6ccc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaf5b5961fa5252cb3efe718d09f92180\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> Q_CORE_EXPORT&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html#aaf5b5961fa5252cb3efe718d09f92180\">QStringList_replaceInStrings</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> *that, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_reg_exp.html\">QRegExp</a> &amp;rx, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;after)</td></tr>\n\
<tr class=\"separator:aaf5b5961fa5252cb3efe718d09f92180\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a30f8bcaa297ef4d030fbe99eab86bea4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> Q_CORE_EXPORT&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html#a30f8bcaa297ef4d030fbe99eab86bea4\">QStringList_filter</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> *that, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_reg_exp.html\">QRegExp</a> &amp;re)</td></tr>\n\
<tr class=\"separator:a30f8bcaa297ef4d030fbe99eab86bea4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6b89501caa759c02a739834e0d1e7f8f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> Q_CORE_EXPORT&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html#a6b89501caa759c02a739834e0d1e7f8f\">QStringList_indexOf</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> *that, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_reg_exp.html\">QRegExp</a> &amp;rx, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> from)</td></tr>\n\
<tr class=\"separator:a6b89501caa759c02a739834e0d1e7f8f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a78f7f4c75d1e8186f13a5b8626393b0b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> Q_CORE_EXPORT&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html#a78f7f4c75d1e8186f13a5b8626393b0b\">QStringList_lastIndexOf</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> *that, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_reg_exp.html\">QRegExp</a> &amp;rx, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> from)</td></tr>\n\
<tr class=\"separator:a78f7f4c75d1e8186f13a5b8626393b0b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a357996ea25f4ca3a2abd7308fbb6d77d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> Q_CORE_EXPORT&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html#a357996ea25f4ca3a2abd7308fbb6d77d\">QStringList_indexOf</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> *that, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_reg_exp.html\">QRegExp</a> &amp;rx, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> from)</td></tr>\n\
<tr class=\"separator:a357996ea25f4ca3a2abd7308fbb6d77d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a168e5d1ba6f875f6cb0a1acd9aac6552\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> Q_CORE_EXPORT&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_private.html#a168e5d1ba6f875f6cb0a1acd9aac6552\">QStringList_lastIndexOf</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> *that, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_reg_exp.html\">QRegExp</a> &amp;rx, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> from)</td></tr>\n\
<tr class=\"separator:a168e5d1ba6f875f6cb0a1acd9aac6552\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad7f0722a8ecdd14045d2f0e806350a63\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h.html#ad7f0722a8ecdd14045d2f0e806350a63\">operator&gt;&gt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a83ad0ee7f1e06b59c90271716e689080\">in</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> &amp;list)</td></tr>\n\
<tr class=\"separator:ad7f0722a8ecdd14045d2f0e806350a63\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a11544abf520f860e4b290100655f386b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h.html#a11544abf520f860e4b290100655f386b\">operator&lt;&lt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;out, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> &amp;list)</td></tr>\n\
<tr class=\"separator:a11544abf520f860e4b290100655f386b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Typedef Documentation</h2>\n\
<a class=\"anchor\" id=\"ac20d26691cf5d06603602bf2195630f0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">typedef QListIterator&lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&gt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h.html#ac20d26691cf5d06603602bf2195630f0\">QStringListIterator</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h_source.html#l00061\">61</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h_source.html\">qstringlist.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a519700d8bfc8f25474d05a28415689b8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">typedef QMutableListIterator&lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&gt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h.html#a519700d8bfc8f25474d05a28415689b8\">QMutableStringListIterator</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h_source.html#l00064\">64</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h_source.html\">qstringlist.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ad7f0722a8ecdd14045d2f0e806350a63\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a>&amp; operator&gt;&gt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>list</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h_source.html#l00248\">248</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h_source.html\">qstringlist.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00249\"></a><span class=\"lineno\">  249</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00250\"></a><span class=\"lineno\">  250</span>&#160;    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qstringlist_8h.html#ad7f0722a8ecdd14045d2f0e806350a63\">operator&gt;&gt;</a>(in, <span class=\"keyword\">static_cast&lt;</span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;QString&gt;</a> &amp;<span class=\"keyword\">&gt;</span>(list));</div>\n\
<div class=\"line\"><a name=\"l00251\"></a><span class=\"lineno\">  251</span>&#160;}</div>\n\
<div class=\"ttc\" id=\"class_q_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt; QString &gt;</a></div></div>\n\
<div class=\"ttc\" id=\"qstringlist_8h_html_ad7f0722a8ecdd14045d2f0e806350a63\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qstringlist_8h.html#ad7f0722a8ecdd14045d2f0e806350a63\">operator&gt;&gt;</a></div><div class=\"ttdeci\">QDataStream &amp; operator&gt;&gt;(QDataStream &amp;in, QStringList &amp;list)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstringlist_8h_source.html#l00248\">qstringlist.h:248</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a11544abf520f860e4b290100655f386b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a>&amp; operator&lt;&lt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>out</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>list</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h_source.html#l00252\">252</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qstringlist_8h_source.html\">qstringlist.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00253\"></a><span class=\"lineno\">  253</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00254\"></a><span class=\"lineno\">  254</span>&#160;    <span class=\"keywordflow\">return</span> operator&lt;&lt;(out, static_cast&lt;const QList&lt;QString&gt; &amp;&gt;(list));</div>\n\
<div class=\"line\"><a name=\"l00255\"></a><span class=\"lineno\">  255</span>&#160;}</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
\n\
<p><a href=\"#!/url=./cpp_ref/qstringlist_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";