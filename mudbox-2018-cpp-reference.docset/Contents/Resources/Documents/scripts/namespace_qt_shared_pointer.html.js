var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtSharedPointer Namespace Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'namespace_qt_shared_pointer.html\', tocPrefix);\n\
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
            <h1>QtSharedPointer Namespace Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespace&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers.html\"><span>Namespace&#160;Members</span></a></li>\n\
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
<div class=\"title\">QtSharedPointer Namespace Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"namespace_qt_shared_pointer.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"namespace_qt_shared_pointer.html#func-members\">Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_data.html\">ExternalRefCountData</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_with_contiguous_data.html\">ExternalRefCountWithContiguousData</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_with_custom_deleter.html\">ExternalRefCountWithCustomDeleter</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_external_ref_count_with_destroy_fn.html\">ExternalRefCountWithDestroyFn</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_internal_ref_count.html\">InternalRefCount</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_remove_pointer.html\">RemovePointer</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_remove_pointer_3_01_q_shared_pointer_3_01_t_01_4_01_4.html\">RemovePointer&lt; QSharedPointer&lt; T &gt; &gt;</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_remove_pointer_3_01_q_weak_pointer_3_01_t_01_4_01_4.html\">RemovePointer&lt; QWeakPointer&lt; T &gt; &gt;</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_shared_pointer_1_1_remove_pointer_3_01_t_01_5_01_4.html\">RemovePointer&lt; T * &gt;</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:a5f43e9b1073947eabc7f784b307a1f8f\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;class X , class Y &gt; </td></tr>\n\
<tr class=\"memitem:a5f43e9b1073947eabc7f784b307a1f8f\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer</a>&lt; X &gt;&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_shared_pointer.html#a5f43e9b1073947eabc7f784b307a1f8f\">copyAndSetPointer</a> (X *ptr, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer</a>&lt; Y &gt; &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a72e0fdf0f845ded60b1fada9e9195cd7\">src</a>)</td></tr>\n\
<tr class=\"separator:a5f43e9b1073947eabc7f784b307a1f8f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4a0b03c53af8e709848b3612221682cc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_shared_pointer.html#a4a0b03c53af8e709848b3612221682cc\">internalSafetyCheckAdd2</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *, const volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *)</td></tr>\n\
<tr class=\"separator:a4a0b03c53af8e709848b3612221682cc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a13f5e2ad99e57feb13a8e0ada8d86a11\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_shared_pointer.html#a13f5e2ad99e57feb13a8e0ada8d86a11\">internalSafetyCheckRemove2</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *)</td></tr>\n\
<tr class=\"separator:a13f5e2ad99e57feb13a8e0ada8d86a11\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a617a9ac8cbc46b3b6de701314c484b9c\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;class T , typename Klass , typename RetVal &gt; </td></tr>\n\
<tr class=\"memitem:a617a9ac8cbc46b3b6de701314c484b9c\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_shared_pointer.html#a617a9ac8cbc46b3b6de701314c484b9c\">executeDeleter</a> (T *<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a>, RetVal(Klass::*memberDeleter)())</td></tr>\n\
<tr class=\"separator:a617a9ac8cbc46b3b6de701314c484b9c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5a859a0cd93e95a3d69096f806778a07\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;class T , typename Deleter &gt; </td></tr>\n\
<tr class=\"memitem:a5a859a0cd93e95a3d69096f806778a07\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_shared_pointer.html#a5a859a0cd93e95a3d69096f806778a07\">executeDeleter</a> (T *<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a>, Deleter d)</td></tr>\n\
<tr class=\"separator:a5a859a0cd93e95a3d69096f806778a07\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a89251ba93266bf7bb12c57d48276446b\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;class T &gt; </td></tr>\n\
<tr class=\"memitem:a89251ba93266bf7bb12c57d48276446b\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_shared_pointer.html#a89251ba93266bf7bb12c57d48276446b\">normalDeleter</a> (T *<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a>)</td></tr>\n\
<tr class=\"separator:a89251ba93266bf7bb12c57d48276446b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af3a8e71ed202c9f5f08a2c4a1259a8fa\"><td class=\"memTemplParams\" translate=\"no\" colspan=\"2\">template&lt;class X , class T &gt; </td></tr>\n\
<tr class=\"memitem:af3a8e71ed202c9f5f08a2c4a1259a8fa\"><td class=\"memTemplItemLeft\" align=\"right\" valign=\"top\">Q_INLINE_TEMPLATE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer</a>&lt; X &gt;&#160;</td><td class=\"memTemplItemRight\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt_shared_pointer.html#af3a8e71ed202c9f5f08a2c4a1259a8fa\">copyAndSetPointer</a> (X *ptr, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer</a>&lt; T &gt; &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a72e0fdf0f845ded60b1fada9e9195cd7\">src</a>)</td></tr>\n\
<tr class=\"separator:af3a8e71ed202c9f5f08a2c4a1259a8fa\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a5f43e9b1073947eabc7f784b307a1f8f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer</a>&lt;X&gt; QtSharedPointer::copyAndSetPointer </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">X *&#160;</td>\n\
          <td class=\"paramname\"><em>ptr</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer</a>&lt; Y &gt; &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>src</em>&#160;</td>\n\
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
<a class=\"anchor\" id=\"a4a0b03c53af8e709848b3612221682cc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> QtSharedPointer::internalSafetyCheckAdd2 </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td>\n\
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
<a class=\"anchor\" id=\"a13f5e2ad99e57feb13a8e0ada8d86a11\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> QtSharedPointer::internalSafetyCheckRemove2 </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a617a9ac8cbc46b3b6de701314c484b9c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> QtSharedPointer::executeDeleter </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">T *&#160;</td>\n\
          <td class=\"paramname\"><em>t</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">RetVal(Klass::*)()&#160;</td>\n\
          <td class=\"paramname\"><em>memberDeleter</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00114\">114</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html\">qsharedpointer_impl.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00115\"></a><span class=\"lineno\">  115</span>&#160;    { (<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a>-&gt;*memberDeleter)(); }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a653819996e713edf9c01a5b564199189\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a></div><div class=\"ttdeci\">GLdouble GLdouble t</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01181\">GLee.h:1181</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a5a859a0cd93e95a3d69096f806778a07\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> QtSharedPointer::executeDeleter </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">T *&#160;</td>\n\
          <td class=\"paramname\"><em>t</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">Deleter&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00117\">117</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html\">qsharedpointer_impl.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;    { d(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a>); }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a653819996e713edf9c01a5b564199189\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a></div><div class=\"ttdeci\">GLdouble GLdouble t</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01181\">GLee.h:1181</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a89251ba93266bf7bb12c57d48276446b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> QtSharedPointer::normalDeleter </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">T *&#160;</td>\n\
          <td class=\"paramname\"><em>t</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00119\">119</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html\">qsharedpointer_impl.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00119\"></a><span class=\"lineno\">  119</span>&#160;{ <span class=\"keyword\">delete</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a>; }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a653819996e713edf9c01a5b564199189\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a></div><div class=\"ttdeci\">GLdouble GLdouble t</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01181\">GLee.h:1181</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af3a8e71ed202c9f5f08a2c4a1259a8fa\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_INLINE_TEMPLATE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer</a>&lt;X&gt; QtSharedPointer::copyAndSetPointer </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">X *&#160;</td>\n\
          <td class=\"paramname\"><em>ptr</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer</a>&lt; T &gt; &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>src</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00810\">810</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html\">qsharedpointer_impl.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00811\"></a><span class=\"lineno\">  811</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00812\"></a><span class=\"lineno\">  812</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt;X&gt;</a> result;</div>\n\
<div class=\"line\"><a name=\"l00813\"></a><span class=\"lineno\">  813</span>&#160;        result.<a class=\"code\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#ae6f9486067486ae65cdc2fe525bae1e8\">internalSet</a>(src.<a class=\"code\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#af05b8dac609b28b04cf4034c18c8faf3\">d</a>, ptr);</div>\n\
<div class=\"line\"><a name=\"l00814\"></a><span class=\"lineno\">  814</span>&#160;        <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\"><a name=\"l00815\"></a><span class=\"lineno\">  815</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"class_qt_shared_pointer_1_1_external_ref_count_html_ae6f9486067486ae65cdc2fe525bae1e8\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#ae6f9486067486ae65cdc2fe525bae1e8\">QtSharedPointer::ExternalRefCount::internalSet</a></div><div class=\"ttdeci\">void internalSet(Data *o, T *actual)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00430\">qsharedpointer_impl.h:430</a></div></div>\n\
<div class=\"ttc\" id=\"class_qt_shared_pointer_1_1_external_ref_count_html_af05b8dac609b28b04cf4034c18c8faf3\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#af05b8dac609b28b04cf4034c18c8faf3\">QtSharedPointer::ExternalRefCount::d</a></div><div class=\"ttdeci\">Data * d</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00458\">qsharedpointer_impl.h:458</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_shared_pointer_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qsharedpointer__impl_8h_source.html#l00089\">qsharedpointer_impl.h:89</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";