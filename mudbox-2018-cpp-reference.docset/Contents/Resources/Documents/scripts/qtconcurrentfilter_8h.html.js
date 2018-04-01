var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtCore/qtconcurrentfilter.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qtconcurrentfilter_8h.html\', tocPrefix);\n\
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
            <h1>QtCore/qtconcurrentfilter.h File Reference</h1>\n\
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
<div class=\"title\">qtconcurrentfilter.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"qtconcurrentfilter_8h.html#namespaces\">Namespaces</a> &#124;\n\
<a href=\"qtconcurrentfilter_8h.html#func-members\">Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qglobal_8h_source.html\">QtCore/qglobal.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentfilterkernel_8h_source.html\">QtCore/qtconcurrentfilterkernel.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentfunctionwrappers_8h_source.html\">QtCore/qtconcurrentfunctionwrappers.h</a>&gt;</code><br>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"namespaces\"></a>\n\
Namespaces</h2></td></tr>\n\
<tr class=\"memitem:namespace_qt_concurrent\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"> &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html\">QtConcurrent</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:a6fbb9bbb88252219e64ebb24fe7430f9\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename Sequence , typename KeepFunctor , typename ReduceFunctor &gt; </td></tr>\n\
<tr class=\"memitem:a6fbb9bbb88252219e64ebb24fe7430f9\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\">ThreadEngineStarter&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> &gt;&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a6fbb9bbb88252219e64ebb24fe7430f9\">filterInternal</a> (Sequence &amp;sequence, KeepFunctor keep, ReduceFunctor reduce)</td></tr>\n\
<tr class=\"separator:a6fbb9bbb88252219e64ebb24fe7430f9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad36fb35ffd635e0d57388715640bcf81\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename Sequence , typename KeepFunctor &gt; </td></tr>\n\
<tr class=\"memitem:ad36fb35ffd635e0d57388715640bcf81\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future.html\">QFuture</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> &gt;&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#ad36fb35ffd635e0d57388715640bcf81\">filter</a> (Sequence &amp;sequence, KeepFunctor keep)</td></tr>\n\
<tr class=\"separator:ad36fb35ffd635e0d57388715640bcf81\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4324eff56b9ae2afac73f58b3f6b5ca0\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename ResultType , typename Sequence , typename KeepFunctor , typename ReduceFunctor &gt; </td></tr>\n\
<tr class=\"memitem:a4324eff56b9ae2afac73f58b3f6b5ca0\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future.html\">QFuture</a>&lt; ResultType &gt;&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a4324eff56b9ae2afac73f58b3f6b5ca0\">filteredReduced</a> (const Sequence &amp;sequence, KeepFunctor keep, ReduceFunctor reduce, ReduceOptions options=ReduceOptions(UnorderedReduce|SequentialReduce))</td></tr>\n\
<tr class=\"separator:a4324eff56b9ae2afac73f58b3f6b5ca0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af2e66bfdaecf20e72bf9f1c3738db45a\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename Sequence , typename KeepFunctor , typename ReduceFunctor &gt; </td></tr>\n\
<tr class=\"memitem:af2e66bfdaecf20e72bf9f1c3738db45a\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future.html\">QFuture</a>&lt; typename <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_private_1_1_reduce_result_type.html\">QtPrivate::ReduceResultType</a>&lt; ReduceFunctor &gt;::ResultType &gt;&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#af2e66bfdaecf20e72bf9f1c3738db45a\">filteredReduced</a> (const Sequence &amp;sequence, KeepFunctor keep, ReduceFunctor reduce, ReduceOptions options=ReduceOptions(UnorderedReduce|SequentialReduce))</td></tr>\n\
<tr class=\"separator:af2e66bfdaecf20e72bf9f1c3738db45a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa6ee23ff9cab8947807bbc48aefccd12\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename ResultType , typename Iterator , typename KeepFunctor , typename ReduceFunctor &gt; </td></tr>\n\
<tr class=\"memitem:aa6ee23ff9cab8947807bbc48aefccd12\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future.html\">QFuture</a>&lt; ResultType &gt;&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#aa6ee23ff9cab8947807bbc48aefccd12\">filteredReduced</a> (Iterator begin, Iterator <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a432111147038972f06e049e18a837002\">end</a>, KeepFunctor keep, ReduceFunctor reduce, ReduceOptions options=ReduceOptions(UnorderedReduce|SequentialReduce))</td></tr>\n\
<tr class=\"separator:aa6ee23ff9cab8947807bbc48aefccd12\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab67b5a38567da3512fa6a6197fa5934e\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename Iterator , typename KeepFunctor , typename ReduceFunctor &gt; </td></tr>\n\
<tr class=\"memitem:ab67b5a38567da3512fa6a6197fa5934e\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future.html\">QFuture</a>&lt; typename <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_private_1_1_reduce_result_type.html\">QtPrivate::ReduceResultType</a>&lt; ReduceFunctor &gt;::ResultType &gt;&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#ab67b5a38567da3512fa6a6197fa5934e\">filteredReduced</a> (Iterator begin, Iterator <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a432111147038972f06e049e18a837002\">end</a>, KeepFunctor keep, ReduceFunctor reduce, ReduceOptions options=ReduceOptions(UnorderedReduce|SequentialReduce))</td></tr>\n\
<tr class=\"separator:ab67b5a38567da3512fa6a6197fa5934e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adcb6f7a6bdc7cb2b93e26291490d4411\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename Sequence , typename KeepFunctor &gt; </td></tr>\n\
<tr class=\"memitem:adcb6f7a6bdc7cb2b93e26291490d4411\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future.html\">QFuture</a>&lt; typename Sequence::value_type &gt;&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#adcb6f7a6bdc7cb2b93e26291490d4411\">filtered</a> (const Sequence &amp;sequence, KeepFunctor keep)</td></tr>\n\
<tr class=\"separator:adcb6f7a6bdc7cb2b93e26291490d4411\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af3bae26c98c5aa82e7cae701f198ae9c\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename Iterator , typename KeepFunctor &gt; </td></tr>\n\
<tr class=\"memitem:af3bae26c98c5aa82e7cae701f198ae9c\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future.html\">QFuture</a>&lt; typename qValueType&lt; Iterator &gt;::value_type &gt;&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#af3bae26c98c5aa82e7cae701f198ae9c\">filtered</a> (Iterator begin, Iterator <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a432111147038972f06e049e18a837002\">end</a>, KeepFunctor keep)</td></tr>\n\
<tr class=\"separator:af3bae26c98c5aa82e7cae701f198ae9c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab82f8df9ce3aa973ce27ab9e37b180a4\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename Sequence , typename KeepFunctor &gt; </td></tr>\n\
<tr class=\"memitem:ab82f8df9ce3aa973ce27ab9e37b180a4\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#ab82f8df9ce3aa973ce27ab9e37b180a4\">blockingFilter</a> (Sequence &amp;sequence, KeepFunctor keep)</td></tr>\n\
<tr class=\"separator:ab82f8df9ce3aa973ce27ab9e37b180a4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a27eca60261f21e7c9f61f571f7af1fec\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename ResultType , typename Sequence , typename KeepFunctor , typename ReduceFunctor &gt; </td></tr>\n\
<tr class=\"memitem:a27eca60261f21e7c9f61f571f7af1fec\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\">ResultType&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a27eca60261f21e7c9f61f571f7af1fec\">blockingFilteredReduced</a> (const Sequence &amp;sequence, KeepFunctor keep, ReduceFunctor reduce, ReduceOptions options=ReduceOptions(UnorderedReduce|SequentialReduce))</td></tr>\n\
<tr class=\"separator:a27eca60261f21e7c9f61f571f7af1fec\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4707248631380c3f3be968aa6ab0f19e\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename Sequence , typename KeepFunctor , typename ReduceFunctor &gt; </td></tr>\n\
<tr class=\"memitem:a4707248631380c3f3be968aa6ab0f19e\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_private_1_1_reduce_result_type.html\">QtPrivate::ReduceResultType</a>&lt; ReduceFunctor &gt;::ResultType&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a4707248631380c3f3be968aa6ab0f19e\">blockingFilteredReduced</a> (const Sequence &amp;sequence, KeepFunctor keep, ReduceFunctor reduce, ReduceOptions options=ReduceOptions(UnorderedReduce|SequentialReduce))</td></tr>\n\
<tr class=\"separator:a4707248631380c3f3be968aa6ab0f19e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a198054d459cec459957f0a22f3133c02\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename ResultType , typename Iterator , typename KeepFunctor , typename ReduceFunctor &gt; </td></tr>\n\
<tr class=\"memitem:a198054d459cec459957f0a22f3133c02\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\">ResultType&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a198054d459cec459957f0a22f3133c02\">blockingFilteredReduced</a> (Iterator begin, Iterator <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a432111147038972f06e049e18a837002\">end</a>, KeepFunctor keep, ReduceFunctor reduce, ReduceOptions options=ReduceOptions(UnorderedReduce|SequentialReduce))</td></tr>\n\
<tr class=\"separator:a198054d459cec459957f0a22f3133c02\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4f88db398651151125fd3252277ce42a\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename Iterator , typename KeepFunctor , typename ReduceFunctor &gt; </td></tr>\n\
<tr class=\"memitem:a4f88db398651151125fd3252277ce42a\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_private_1_1_reduce_result_type.html\">QtPrivate::ReduceResultType</a>&lt; ReduceFunctor &gt;::ResultType&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a4f88db398651151125fd3252277ce42a\">blockingFilteredReduced</a> (Iterator begin, Iterator <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a432111147038972f06e049e18a837002\">end</a>, KeepFunctor keep, ReduceFunctor reduce, ReduceOptions options=ReduceOptions(UnorderedReduce|SequentialReduce))</td></tr>\n\
<tr class=\"separator:a4f88db398651151125fd3252277ce42a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad532a6a0dfe2540814e233d3ca3127a0\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename Sequence , typename KeepFunctor &gt; </td></tr>\n\
<tr class=\"memitem:ad532a6a0dfe2540814e233d3ca3127a0\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\">Sequence&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#ad532a6a0dfe2540814e233d3ca3127a0\">blockingFiltered</a> (const Sequence &amp;sequence, KeepFunctor keep)</td></tr>\n\
<tr class=\"separator:ad532a6a0dfe2540814e233d3ca3127a0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a35637e5ed773ee306995f7b8f1ffe09b\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;typename OutputSequence , typename Iterator , typename KeepFunctor &gt; </td></tr>\n\
<tr class=\"memitem:a35637e5ed773ee306995f7b8f1ffe09b\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\">OutputSequence&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_concurrent.html#a35637e5ed773ee306995f7b8f1ffe09b\">blockingFiltered</a> (Iterator begin, Iterator <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a432111147038972f06e049e18a837002\">end</a>, KeepFunctor keep)</td></tr>\n\
<tr class=\"separator:a35637e5ed773ee306995f7b8f1ffe09b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
\n\
<p><a href=\"#!/url=./cpp_ref/qtconcurrentfilter_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";