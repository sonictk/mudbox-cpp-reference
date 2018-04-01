var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>PlatformPlugin Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_phonon_1_1_platform_plugin.html\', tocPrefix);\n\
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
            <h1>PlatformPlugin Class Reference</h1>\n\
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
<div class=\"title\">PlatformPlugin Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_phonon_1_1_platform_plugin.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/platformplugin_8h_source.html\">platformplugin.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/platformplugin_8h_source.html#l00045\">45</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/platformplugin_8h_source.html\">platformplugin.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aad4ed53bcb9b86bcf30e1770231917ab\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#aad4ed53bcb9b86bcf30e1770231917ab\">~PlatformPlugin</a> ()</td></tr>\n\
<tr class=\"separator:aad4ed53bcb9b86bcf30e1770231917ab\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa81f6987c5649b6a04c6ccbd5a5b1909\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_abstract_media_stream.html\">AbstractMediaStream</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#aa81f6987c5649b6a04c6ccbd5a5b1909\">createMediaStream</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_url.html\">QUrl</a> &amp;url, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *parent)=0</td></tr>\n\
<tr class=\"memdesc:aa81f6987c5649b6a04c6ccbd5a5b1909\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Creates a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_abstract_media_stream.html\" title=\"Base class for custom media data streams. \">AbstractMediaStream</a> object that provides the data for the given <code>url</code>.  <a href=\"class_phonon_1_1_platform_plugin.html#aa81f6987c5649b6a04c6ccbd5a5b1909\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa81f6987c5649b6a04c6ccbd5a5b1909\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4caf8834fb54c43d15270b95834254e0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_icon.html\">QIcon</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a4caf8834fb54c43d15270b95834254e0\">icon</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad977737dfc9a274a62741b9500c49a32\">name</a>) const  =0</td></tr>\n\
<tr class=\"memdesc:a4caf8834fb54c43d15270b95834254e0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the icon for the given icon name.  <a href=\"class_phonon_1_1_platform_plugin.html#a4caf8834fb54c43d15270b95834254e0\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4caf8834fb54c43d15270b95834254e0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a82c6b54d84cfd05d67b777adbb7366f2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a82c6b54d84cfd05d67b777adbb7366f2\">notification</a> (const char *notificationName, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;text, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> &amp;actions=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a>(), <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *receiver=0, const char *actionSlot=0) const  =0</td></tr>\n\
<tr class=\"memdesc:a82c6b54d84cfd05d67b777adbb7366f2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Shows a notification popup.  <a href=\"class_phonon_1_1_platform_plugin.html#a82c6b54d84cfd05d67b777adbb7366f2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a82c6b54d84cfd05d67b777adbb7366f2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a02ab563f5240fe12e9fa9432ee4b9156\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a02ab563f5240fe12e9fa9432ee4b9156\">applicationName</a> () const  =0</td></tr>\n\
<tr class=\"memdesc:a02ab563f5240fe12e9fa9432ee4b9156\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of the application.  <a href=\"class_phonon_1_1_platform_plugin.html#a02ab563f5240fe12e9fa9432ee4b9156\">More...</a><br></td></tr>\n\
<tr class=\"separator:a02ab563f5240fe12e9fa9432ee4b9156\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac8d7d5bf9416669c2a97b0f9c1b68468\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ac8d7d5bf9416669c2a97b0f9c1b68468\">createBackend</a> ()=0</td></tr>\n\
<tr class=\"memdesc:ac8d7d5bf9416669c2a97b0f9c1b68468\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Creates a backend object.  <a href=\"class_phonon_1_1_platform_plugin.html#ac8d7d5bf9416669c2a97b0f9c1b68468\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac8d7d5bf9416669c2a97b0f9c1b68468\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0a1abfdf99d863e5929fa90fab45873e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a0a1abfdf99d863e5929fa90fab45873e\">createBackend</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;library, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;version)=0</td></tr>\n\
<tr class=\"memdesc:a0a1abfdf99d863e5929fa90fab45873e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Using the library loader of the platform, loads a given backend.  <a href=\"class_phonon_1_1_platform_plugin.html#a0a1abfdf99d863e5929fa90fab45873e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0a1abfdf99d863e5929fa90fab45873e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac17bdd40f9721c933e7fd82bc22aee3d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ac17bdd40f9721c933e7fd82bc22aee3d\">isMimeTypeAvailable</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;mimeType) const  =0</td></tr>\n\
<tr class=\"memdesc:ac17bdd40f9721c933e7fd82bc22aee3d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Tries to check whether the default backend supports a given MIME type without loading the actual backend library.  <a href=\"class_phonon_1_1_platform_plugin.html#ac17bdd40f9721c933e7fd82bc22aee3d\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac17bdd40f9721c933e7fd82bc22aee3d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac084b98b6f8b98ee93ab32e9eb69b76e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ac084b98b6f8b98ee93ab32e9eb69b76e\">saveVolume</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;outputName, qreal volume)=0</td></tr>\n\
<tr class=\"memdesc:ac084b98b6f8b98ee93ab32e9eb69b76e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Saves the volume for the given output.  <a href=\"class_phonon_1_1_platform_plugin.html#ac084b98b6f8b98ee93ab32e9eb69b76e\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac084b98b6f8b98ee93ab32e9eb69b76e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7a9bd53c652e87eb0f7becd234b273bf\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual qreal&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a7a9bd53c652e87eb0f7becd234b273bf\">loadVolume</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;outputName) const  =0</td></tr>\n\
<tr class=\"memdesc:a7a9bd53c652e87eb0f7becd234b273bf\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Loads the volume for the given output.  <a href=\"class_phonon_1_1_platform_plugin.html#a7a9bd53c652e87eb0f7becd234b273bf\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7a9bd53c652e87eb0f7becd234b273bf\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab39b0c35ab402fcfb599acc6c59ae765\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ab39b0c35ab402fcfb599acc6c59ae765\">objectDescriptionIndexes</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae99374a739994c33f43e6537de38e18e\">ObjectDescriptionType</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a>) const  =0</td></tr>\n\
<tr class=\"separator:ab39b0c35ab402fcfb599acc6c59ae765\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab072e8827b93db2fc70fa2b0414bf6ca\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_hash.html\">QHash</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_variant.html\">QVariant</a> &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ab072e8827b93db2fc70fa2b0414bf6ca\">objectDescriptionProperties</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae99374a739994c33f43e6537de38e18e\">ObjectDescriptionType</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a6468fe3bfff24d7d939eb21863b88268\">index</a>) const  =0</td></tr>\n\
<tr class=\"separator:ab072e8827b93db2fc70fa2b0414bf6ca\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4dc0decee4e82dfa5ce3c16e9707a1b0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html\">QPair</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &gt; &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a4dc0decee4e82dfa5ce3c16e9707a1b0\">deviceAccessListFor</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a8f6ea808c0ccaa9c8f495d01574d8b28\">Phonon::AudioOutputDevice</a> &amp;) const </td></tr>\n\
<tr class=\"memdesc:a4dc0decee4e82dfa5ce3c16e9707a1b0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns a list of (driver, handle) pairs for the given AudioOutputDevice description.  <a href=\"class_phonon_1_1_platform_plugin.html#a4dc0decee4e82dfa5ce3c16e9707a1b0\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4dc0decee4e82dfa5ce3c16e9707a1b0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"aad4ed53bcb9b86bcf30e1770231917ab\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual ~<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html\">PlatformPlugin</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/platformplugin_8h_source.html#l00048\">48</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/platformplugin_8h_source.html\">platformplugin.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;{}</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"aa81f6987c5649b6a04c6ccbd5a5b1909\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_abstract_media_stream.html\">AbstractMediaStream</a>* createMediaStream </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_url.html\">QUrl</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>url</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>parent</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Creates a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_abstract_media_stream.html\" title=\"Base class for custom media data streams. \">AbstractMediaStream</a> object that provides the data for the given <code>url</code>. </p>\n\
<p>On KDE this uses KIO. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4caf8834fb54c43d15270b95834254e0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_icon.html\">QIcon</a> icon </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the icon for the given icon name. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a82c6b54d84cfd05d67b777adbb7366f2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> notification </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const char *&#160;</td>\n\
          <td class=\"paramname\"><em>notificationName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>text</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>actions</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a>()</code>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>receiver</em> = <code>0</code>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const char *&#160;</td>\n\
          <td class=\"paramname\"><em>actionSlot</em> = <code>0</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Shows a notification popup. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a02ab563f5240fe12e9fa9432ee4b9156\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> applicationName </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of the application. </p>\n\
<p>For most <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html\">Qt</a> application this is <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_core_application.html#a3c5711e55248ad09a193a5159001f31e\">QCoreApplication::applicationName()</a>, but for KDE this is overridden by KAboutData. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac8d7d5bf9416669c2a97b0f9c1b68468\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a>* createBackend </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Creates a backend object. </p>\n\
<p>This way the platform can decide the backend preference. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0a1abfdf99d863e5929fa90fab45873e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a>* createBackend </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>library</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>version</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Using the library loader of the platform, loads a given backend. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac17bdd40f9721c933e7fd82bc22aee3d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual bool isMimeTypeAvailable </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>mimeType</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Tries to check whether the default backend supports a given MIME type without loading the actual backend library. </p>\n\
<p>On KDE this reads the MIME type list from the .desktop file of the backend. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac084b98b6f8b98ee93ab32e9eb69b76e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> saveVolume </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>outputName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">qreal&#160;</td>\n\
          <td class=\"paramname\"><em>volume</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Saves the volume for the given output. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7a9bd53c652e87eb0f7becd234b273bf\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual qreal loadVolume </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>outputName</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Loads the volume for the given output. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab39b0c35ab402fcfb599acc6c59ae765\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>&lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&gt; objectDescriptionIndexes </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae99374a739994c33f43e6537de38e18e\">ObjectDescriptionType</a>&#160;</td>\n\
          <td class=\"paramname\"><em>type</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab072e8827b93db2fc70fa2b0414bf6ca\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_hash.html\">QHash</a>&lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_variant.html\">QVariant</a>&gt; objectDescriptionProperties </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae99374a739994c33f43e6537de38e18e\">ObjectDescriptionType</a>&#160;</td>\n\
          <td class=\"paramname\"><em>type</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>index</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4dc0decee4e82dfa5ce3c16e9707a1b0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>&lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_pair.html\">QPair</a>&lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&gt; &gt; deviceAccessListFor </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a8f6ea808c0ccaa9c8f495d01574d8b28\">Phonon::AudioOutputDevice</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns a list of (driver, handle) pairs for the given AudioOutputDevice description. </p>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/platformplugin_8h_source.html#l00107\">107</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/platformplugin_8h_source.html\">platformplugin.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00107\"></a><span class=\"lineno\">  107</span>&#160;{ <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;QPair&lt;QByteArray, QString&gt;</a> &gt;(); }</div>\n\
<div class=\"ttc\" id=\"class_q_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/backendcapabilities_8h_source.html#l00040\">backendcapabilities.h:40</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>phonon/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/platformplugin_8h_source.html\">platformplugin.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";