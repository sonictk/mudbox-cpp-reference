var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtCore/qatomic_i386.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qatomic__i386_8h.html\', tocPrefix);\n\
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
            <h1>QtCore/qatomic_i386.h File Reference</h1>\n\
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
<div class=\"title\">qatomic_i386.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"qatomic__i386_8h.html#define-members\">Macros</a> &#124;\n\
<a href=\"qatomic__i386_8h.html#func-members\">Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"define-members\"></a>\n\
Macros</h2></td></tr>\n\
<tr class=\"memitem:aa600513ee279d339086391b0439f54b9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#aa600513ee279d339086391b0439f54b9\">Q_ATOMIC_INT_REFERENCE_COUNTING_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:aa600513ee279d339086391b0439f54b9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5af7883000da1d2a58a2f2c42608e72e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a5af7883000da1d2a58a2f2c42608e72e\">Q_ATOMIC_INT_REFERENCE_COUNTING_IS_WAIT_FREE</a></td></tr>\n\
<tr class=\"separator:a5af7883000da1d2a58a2f2c42608e72e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a94366a43514980c7a6a2faf3338ccc13\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a94366a43514980c7a6a2faf3338ccc13\">Q_ATOMIC_INT_TEST_AND_SET_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:a94366a43514980c7a6a2faf3338ccc13\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acebb85b5e7cd7c284ec5eeffcaf84a58\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#acebb85b5e7cd7c284ec5eeffcaf84a58\">Q_ATOMIC_INT_TEST_AND_SET_IS_WAIT_FREE</a></td></tr>\n\
<tr class=\"separator:acebb85b5e7cd7c284ec5eeffcaf84a58\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8e7bb8545b4fc9896ba6ac1b1a2d7c98\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a8e7bb8545b4fc9896ba6ac1b1a2d7c98\">Q_ATOMIC_INT_FETCH_AND_STORE_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:a8e7bb8545b4fc9896ba6ac1b1a2d7c98\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae0d40cd36adb1059971e4148d4c18a10\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#ae0d40cd36adb1059971e4148d4c18a10\">Q_ATOMIC_INT_FETCH_AND_STORE_IS_WAIT_FREE</a></td></tr>\n\
<tr class=\"separator:ae0d40cd36adb1059971e4148d4c18a10\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a092a391019278039260b306a848deb67\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a092a391019278039260b306a848deb67\">Q_ATOMIC_INT_FETCH_AND_ADD_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:a092a391019278039260b306a848deb67\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7fb707cb5014a6711708ca5dc7c1b85a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a7fb707cb5014a6711708ca5dc7c1b85a\">Q_ATOMIC_INT_FETCH_AND_ADD_IS_WAIT_FREE</a></td></tr>\n\
<tr class=\"separator:a7fb707cb5014a6711708ca5dc7c1b85a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7dea951947c3d51de4d361188023fc4f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a7dea951947c3d51de4d361188023fc4f\">Q_ATOMIC_POINTER_TEST_AND_SET_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:a7dea951947c3d51de4d361188023fc4f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a02f7e91644d80fb05748d21320a8943c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a02f7e91644d80fb05748d21320a8943c\">Q_ATOMIC_POINTER_TEST_AND_SET_IS_WAIT_FREE</a></td></tr>\n\
<tr class=\"separator:a02f7e91644d80fb05748d21320a8943c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2d07b09fb00f0cf07b9c862d1d74bfb1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a2d07b09fb00f0cf07b9c862d1d74bfb1\">Q_ATOMIC_POINTER_FETCH_AND_STORE_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:a2d07b09fb00f0cf07b9c862d1d74bfb1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ace0bdcb4972e326e74481941512a5136\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#ace0bdcb4972e326e74481941512a5136\">Q_ATOMIC_POINTER_FETCH_AND_STORE_IS_WAIT_FREE</a></td></tr>\n\
<tr class=\"separator:ace0bdcb4972e326e74481941512a5136\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a083f36453c51007b6f7429a2eae310b1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a083f36453c51007b6f7429a2eae310b1\">Q_ATOMIC_POINTER_FETCH_AND_ADD_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:a083f36453c51007b6f7429a2eae310b1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aec1df8d54d92e4e72f75428e53d1d35d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#aec1df8d54d92e4e72f75428e53d1d35d\">Q_ATOMIC_POINTER_FETCH_AND_ADD_IS_WAIT_FREE</a></td></tr>\n\
<tr class=\"separator:aec1df8d54d92e4e72f75428e53d1d35d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:a14c996706fa70bb3f4cc161083c5e29d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a14c996706fa70bb3f4cc161083c5e29d\">q_atomic_test_and_set_int</a> (volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> *ptr, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> expected, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> newval)</td></tr>\n\
<tr class=\"separator:a14c996706fa70bb3f4cc161083c5e29d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac902cc0ac36fc6fa37e7ba56ba928b31\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#ac902cc0ac36fc6fa37e7ba56ba928b31\">q_atomic_test_and_set_ptr</a> (volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *ptr, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *expected, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *newval)</td></tr>\n\
<tr class=\"separator:ac902cc0ac36fc6fa37e7ba56ba928b31\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac94fe77dae2926213a81c025ebf2a484\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#ac94fe77dae2926213a81c025ebf2a484\">q_atomic_increment</a> (volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> *ptr)</td></tr>\n\
<tr class=\"separator:ac94fe77dae2926213a81c025ebf2a484\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5de46ddc5f506ceddd31fe8a96347ca1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a5de46ddc5f506ceddd31fe8a96347ca1\">q_atomic_decrement</a> (volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> *ptr)</td></tr>\n\
<tr class=\"separator:a5de46ddc5f506ceddd31fe8a96347ca1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a75197fab0c8698231b3129503ee3cc4f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a75197fab0c8698231b3129503ee3cc4f\">q_atomic_set_int</a> (volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> *ptr, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> newval)</td></tr>\n\
<tr class=\"separator:a75197fab0c8698231b3129503ee3cc4f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa566e1091accf031ed42be99d52cc229\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#aa566e1091accf031ed42be99d52cc229\">q_atomic_set_ptr</a> (volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *ptr, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *newval)</td></tr>\n\
<tr class=\"separator:aa566e1091accf031ed42be99d52cc229\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a16718e06dee4bbc25577396f15621c74\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a16718e06dee4bbc25577396f15621c74\">q_atomic_fetch_and_add_int</a> (volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> *ptr, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a>)</td></tr>\n\
<tr class=\"separator:a16718e06dee4bbc25577396f15621c74\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a60d937016092384873d32a5a5fc6d171\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h.html#a60d937016092384873d32a5a5fc6d171\">q_atomic_fetch_and_add_ptr</a> (volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *ptr, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a>)</td></tr>\n\
<tr class=\"separator:a60d937016092384873d32a5a5fc6d171\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Macro Definition Documentation</h2>\n\
<a class=\"anchor\" id=\"aa600513ee279d339086391b0439f54b9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_INT_REFERENCE_COUNTING_IS_ALWAYS_NATIVE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00048\">48</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a5af7883000da1d2a58a2f2c42608e72e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_INT_REFERENCE_COUNTING_IS_WAIT_FREE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00049\">49</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a94366a43514980c7a6a2faf3338ccc13\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_INT_TEST_AND_SET_IS_ALWAYS_NATIVE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00056\">56</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acebb85b5e7cd7c284ec5eeffcaf84a58\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_INT_TEST_AND_SET_IS_WAIT_FREE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00057\">57</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8e7bb8545b4fc9896ba6ac1b1a2d7c98\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_INT_FETCH_AND_STORE_IS_ALWAYS_NATIVE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00064\">64</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae0d40cd36adb1059971e4148d4c18a10\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_INT_FETCH_AND_STORE_IS_WAIT_FREE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00065\">65</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a092a391019278039260b306a848deb67\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_INT_FETCH_AND_ADD_IS_ALWAYS_NATIVE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00072\">72</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7fb707cb5014a6711708ca5dc7c1b85a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_INT_FETCH_AND_ADD_IS_WAIT_FREE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00073\">73</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7dea951947c3d51de4d361188023fc4f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_POINTER_TEST_AND_SET_IS_ALWAYS_NATIVE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00080\">80</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a02f7e91644d80fb05748d21320a8943c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_POINTER_TEST_AND_SET_IS_WAIT_FREE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00081\">81</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2d07b09fb00f0cf07b9c862d1d74bfb1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_POINTER_FETCH_AND_STORE_IS_ALWAYS_NATIVE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00090\">90</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ace0bdcb4972e326e74481941512a5136\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_POINTER_FETCH_AND_STORE_IS_WAIT_FREE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00091\">91</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a083f36453c51007b6f7429a2eae310b1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_POINTER_FETCH_AND_ADD_IS_ALWAYS_NATIVE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00100\">100</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aec1df8d54d92e4e72f75428e53d1d35d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define Q_ATOMIC_POINTER_FETCH_AND_ADD_IS_WAIT_FREE</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html#l00101\">101</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">qatomic_i386.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a14c996706fa70bb3f4cc161083c5e29d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> q_atomic_test_and_set_int </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ptr</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>expected</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>newval</em>&#160;</td>\n\
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
<a class=\"anchor\" id=\"ac902cc0ac36fc6fa37e7ba56ba928b31\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> q_atomic_test_and_set_ptr </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ptr</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>expected</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>newval</em>&#160;</td>\n\
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
<a class=\"anchor\" id=\"ac94fe77dae2926213a81c025ebf2a484\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> q_atomic_increment </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ptr</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a5de46ddc5f506ceddd31fe8a96347ca1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> q_atomic_decrement </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ptr</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a75197fab0c8698231b3129503ee3cc4f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> q_atomic_set_int </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ptr</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>newval</em>&#160;</td>\n\
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
<a class=\"anchor\" id=\"aa566e1091accf031ed42be99d52cc229\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>* q_atomic_set_ptr </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ptr</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>newval</em>&#160;</td>\n\
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
<a class=\"anchor\" id=\"a16718e06dee4bbc25577396f15621c74\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> q_atomic_fetch_and_add_int </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ptr</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>&#160;</td>\n\
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
<a class=\"anchor\" id=\"a60d937016092384873d32a5a5fc6d171\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>* q_atomic_fetch_and_add_ptr </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">volatile <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ptr</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>&#160;</td>\n\
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
<p><a href=\"#!/url=./cpp_ref/qatomic__i386_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";