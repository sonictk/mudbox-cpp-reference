var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtCore/qatomic_s390.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qatomic__s390_8h.html\', tocPrefix);\n\
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
            <h1>QtCore/qatomic_s390.h File Reference</h1>\n\
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
<div class=\"title\">qatomic_s390.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"qatomic__s390_8h.html#define-members\">Macros</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"define-members\"></a>\n\
Macros</h2></td></tr>\n\
<tr class=\"memitem:aa600513ee279d339086391b0439f54b9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#aa600513ee279d339086391b0439f54b9\">Q_ATOMIC_INT_REFERENCE_COUNTING_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:aa600513ee279d339086391b0439f54b9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a94366a43514980c7a6a2faf3338ccc13\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#a94366a43514980c7a6a2faf3338ccc13\">Q_ATOMIC_INT_TEST_AND_SET_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:a94366a43514980c7a6a2faf3338ccc13\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8e7bb8545b4fc9896ba6ac1b1a2d7c98\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#a8e7bb8545b4fc9896ba6ac1b1a2d7c98\">Q_ATOMIC_INT_FETCH_AND_STORE_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:a8e7bb8545b4fc9896ba6ac1b1a2d7c98\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a092a391019278039260b306a848deb67\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#a092a391019278039260b306a848deb67\">Q_ATOMIC_INT_FETCH_AND_ADD_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:a092a391019278039260b306a848deb67\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7dea951947c3d51de4d361188023fc4f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#a7dea951947c3d51de4d361188023fc4f\">Q_ATOMIC_POINTER_TEST_AND_SET_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:a7dea951947c3d51de4d361188023fc4f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2d07b09fb00f0cf07b9c862d1d74bfb1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#a2d07b09fb00f0cf07b9c862d1d74bfb1\">Q_ATOMIC_POINTER_FETCH_AND_STORE_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:a2d07b09fb00f0cf07b9c862d1d74bfb1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a083f36453c51007b6f7429a2eae310b1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#a083f36453c51007b6f7429a2eae310b1\">Q_ATOMIC_POINTER_FETCH_AND_ADD_IS_ALWAYS_NATIVE</a></td></tr>\n\
<tr class=\"separator:a083f36453c51007b6f7429a2eae310b1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af10074ad7eaf05e57fd2df76f6a24739\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#af10074ad7eaf05e57fd2df76f6a24739\">__GNU_EXTENSION</a></td></tr>\n\
<tr class=\"separator:af10074ad7eaf05e57fd2df76f6a24739\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a50bd00a416a4c1def245728821483a02\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#a50bd00a416a4c1def245728821483a02\">__CS_LOOP</a>(ptr,  op_val,  op_string,  pre,  post)</td></tr>\n\
<tr class=\"separator:a50bd00a416a4c1def245728821483a02\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac4043435a33a9be9e81804428b45be4a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#ac4043435a33a9be9e81804428b45be4a\">__CS_OLD_LOOP</a>(ptr,  op_val,  op_string,  pre,  post)</td></tr>\n\
<tr class=\"separator:ac4043435a33a9be9e81804428b45be4a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html#l00049\">49</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html\">qatomic_s390.h</a>.</p>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html#l00056\">56</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html\">qatomic_s390.h</a>.</p>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html#l00063\">63</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html\">qatomic_s390.h</a>.</p>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html#l00070\">70</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html\">qatomic_s390.h</a>.</p>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html#l00077\">77</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html\">qatomic_s390.h</a>.</p>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html#l00086\">86</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html\">qatomic_s390.h</a>.</p>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html#l00095\">95</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html\">qatomic_s390.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af10074ad7eaf05e57fd2df76f6a24739\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define __GNU_EXTENSION</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html#l00107\">107</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html\">qatomic_s390.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a50bd00a416a4c1def245728821483a02\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define __CS_LOOP</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">ptr, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">op_val, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">op_string, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">pre, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">post&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<b>Value:</b><div class=\"fragment\"><div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#af10074ad7eaf05e57fd2df76f6a24739\">__GNU_EXTENSION</a> ({   \\</div>\n\
<div class=\"line\">    volatile <span class=\"keywordtype\">int</span> old_val, new_val;                  \\</div>\n\
<div class=\"line\">        __asm__ __volatile__(pre                                        \\</div>\n\
<div class=\"line\">                             <span class=\"stringliteral\">&quot;   l     %0,0(%3)\\n&quot;</span>                      \\</div>\n\
<div class=\"line\">                             <span class=\"stringliteral\">&quot;0: lr    %1,%0\\n&quot;</span>             \\</div>\n\
<div class=\"line\">                             op_string <span class=\"stringliteral\">&quot;  %1,%4\\n&quot;</span>          \\</div>\n\
<div class=\"line\">                             <span class=\"stringliteral\">&quot;   cs    %0,%1,0(%3)\\n&quot;</span>           \\</div>\n\
<div class=\"line\">                             <span class=\"stringliteral\">&quot;   jl    0b\\n&quot;</span>                \\</div>\n\
<div class=\"line\">                             post                                       \\</div>\n\
<div class=\"line\">                             : <span class=\"stringliteral\">&quot;=&amp;d&quot;</span> (old_val), <span class=\"stringliteral\">&quot;=&amp;d&quot;</span> (new_val),    \\</div>\n\
<div class=\"line\">                   <span class=\"stringliteral\">&quot;=m&quot;</span> (*ptr)  \\</div>\n\
<div class=\"line\">                 : <span class=\"stringliteral\">&quot;a&quot;</span> (ptr), <span class=\"stringliteral\">&quot;d&quot;</span> (op_val),         \\</div>\n\
<div class=\"line\">                   <span class=\"stringliteral\">&quot;m&quot;</span> (*ptr)   \\</div>\n\
<div class=\"line\">                 : <span class=\"stringliteral\">&quot;cc&quot;</span>, <span class=\"stringliteral\">&quot;memory&quot;</span> );            \\</div>\n\
<div class=\"line\">    new_val;                            \\</div>\n\
<div class=\"line\">})</div>\n\
<div class=\"ttc\" id=\"qatomic__s390_8h_html_af10074ad7eaf05e57fd2df76f6a24739\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#af10074ad7eaf05e57fd2df76f6a24739\">__GNU_EXTENSION</a></div><div class=\"ttdeci\">#define __GNU_EXTENSION</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html#l00107\">qatomic_s390.h:107</a></div></div>\n\
</div><!-- fragment -->\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html#l00110\">110</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html\">qatomic_s390.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac4043435a33a9be9e81804428b45be4a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define __CS_OLD_LOOP</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">ptr, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">op_val, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">op_string, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">pre, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">post&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<b>Value:</b><div class=\"fragment\"><div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#af10074ad7eaf05e57fd2df76f6a24739\">__GNU_EXTENSION</a> ({ \\</div>\n\
<div class=\"line\">    volatile <span class=\"keywordtype\">int</span> old_val, new_val;                  \\</div>\n\
<div class=\"line\">        __asm__ __volatile__(pre                                        \\</div>\n\
<div class=\"line\">                             <span class=\"stringliteral\">&quot;   l     %0,0(%3)\\n&quot;</span>          \\</div>\n\
<div class=\"line\">                             <span class=\"stringliteral\">&quot;0: lr    %1,%0\\n&quot;</span>             \\</div>\n\
<div class=\"line\">                             op_string <span class=\"stringliteral\">&quot;  %1,%4\\n&quot;</span>          \\</div>\n\
<div class=\"line\">                             <span class=\"stringliteral\">&quot;   cs    %0,%1,0(%3)\\n&quot;</span>           \\</div>\n\
<div class=\"line\">                             <span class=\"stringliteral\">&quot;   jl    0b\\n&quot;</span>                \\</div>\n\
<div class=\"line\">                             post                                       \\</div>\n\
<div class=\"line\">                             : <span class=\"stringliteral\">&quot;=&amp;d&quot;</span> (old_val), <span class=\"stringliteral\">&quot;=&amp;d&quot;</span> (new_val),    \\</div>\n\
<div class=\"line\">                   <span class=\"stringliteral\">&quot;=m&quot;</span> (*ptr)  \\</div>\n\
<div class=\"line\">                 : <span class=\"stringliteral\">&quot;a&quot;</span> (ptr), <span class=\"stringliteral\">&quot;d&quot;</span> (op_val),         \\</div>\n\
<div class=\"line\">                   <span class=\"stringliteral\">&quot;m&quot;</span> (*ptr)   \\</div>\n\
<div class=\"line\">                 : <span class=\"stringliteral\">&quot;cc&quot;</span>, <span class=\"stringliteral\">&quot;memory&quot;</span> );            \\</div>\n\
<div class=\"line\">    old_val;                            \\</div>\n\
<div class=\"line\">})</div>\n\
<div class=\"ttc\" id=\"qatomic__s390_8h_html_af10074ad7eaf05e57fd2df76f6a24739\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qatomic__s390_8h.html#af10074ad7eaf05e57fd2df76f6a24739\">__GNU_EXTENSION</a></div><div class=\"ttdeci\">#define __GNU_EXTENSION</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html#l00107\">qatomic_s390.h:107</a></div></div>\n\
</div><!-- fragment -->\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html#l00127\">127</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html\">qatomic_s390.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
\n\
<p><a href=\"#!/url=./cpp_ref/qatomic__s390_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";