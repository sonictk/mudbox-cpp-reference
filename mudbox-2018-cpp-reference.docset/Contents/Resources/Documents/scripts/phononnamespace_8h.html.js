var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>phonon/phononnamespace.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'phononnamespace_8h.html\', tocPrefix);\n\
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
            <h1>phonon/phononnamespace.h File Reference</h1>\n\
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
<div class=\"title\">phononnamespace.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"phononnamespace_8h.html#namespaces\">Namespaces</a> &#124;\n\
<a href=\"phononnamespace_8h.html#define-members\">Macros</a> &#124;\n\
<a href=\"phononnamespace_8h.html#enum-members\">Enumerations</a> &#124;\n\
<a href=\"phononnamespace_8h.html#func-members\">Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &quot;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonon__export_8h_source.html\">phonon_export.h</a>&quot;</code><br>\n\
<code>#include &lt;QtCore/QMetaType&gt;</code><br>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"namespaces\"></a>\n\
Namespaces</h2></td></tr>\n\
<tr class=\"memitem:namespace_phonon\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"> &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></td></tr>\n\
<tr class=\"memdesc:namespace_phonon\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The KDE Multimedia classes. <br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"define-members\"></a>\n\
Macros</h2></td></tr>\n\
<tr class=\"memitem:af514e685dc2b5a7b2dbbbbfde6495312\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phononnamespace_8h.html#af514e685dc2b5a7b2dbbbbfde6495312\">PHONON_VERSION_CHECK</a>(major,  minor,  patch)&#160;&#160;&#160;((major&lt;&lt;16)|(minor&lt;&lt;8)|(patch))</td></tr>\n\
<tr class=\"memdesc:af514e685dc2b5a7b2dbbbbfde6495312\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Helper macro that can be used like.  <a href=\"phononnamespace_8h.html#af514e685dc2b5a7b2dbbbbfde6495312\">More...</a><br></td></tr>\n\
<tr class=\"separator:af514e685dc2b5a7b2dbbbbfde6495312\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adf896ee8cfcbda7b4d8cb4abf0172a43\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phononnamespace_8h.html#adf896ee8cfcbda7b4d8cb4abf0172a43\">PHONON_VERSION</a>&#160;&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phononnamespace_8h.html#af514e685dc2b5a7b2dbbbbfde6495312\">PHONON_VERSION_CHECK</a>(4, 4, 0)</td></tr>\n\
<tr class=\"memdesc:adf896ee8cfcbda7b4d8cb4abf0172a43\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">PHONON_VERSION is (major &lt;&lt; 16) + (minor &lt;&lt; 8) + patch.  <a href=\"phononnamespace_8h.html#adf896ee8cfcbda7b4d8cb4abf0172a43\">More...</a><br></td></tr>\n\
<tr class=\"separator:adf896ee8cfcbda7b4d8cb4abf0172a43\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac545f72c435977ad86c725471a5f56ef\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phononnamespace_8h.html#ac545f72c435977ad86c725471a5f56ef\">PHONON_VERSION_STR</a>&#160;&#160;&#160;&quot;4.4.0&quot;</td></tr>\n\
<tr class=\"memdesc:ac545f72c435977ad86c725471a5f56ef\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">PHONON_VERSION_STR is \"major.minor.patch\".  <a href=\"phononnamespace_8h.html#ac545f72c435977ad86c725471a5f56ef\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac545f72c435977ad86c725471a5f56ef\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"enum-members\"></a>\n\
Enumerations</h2></td></tr>\n\
<tr class=\"memitem:ae650df08ed905fbf1ccc93738f13ecb3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae650df08ed905fbf1ccc93738f13ecb3\">DiscType</a> { <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae650df08ed905fbf1ccc93738f13ecb3a5fe759d550adb39825c87041c50f8ff5\">NoDisc</a> = -1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae650df08ed905fbf1ccc93738f13ecb3aa043a6d7de237184c84ed57afd00d124\">Cd</a> = 0, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae650df08ed905fbf1ccc93738f13ecb3a45ad47c373b834f78d4542adaed0efff\">Dvd</a> = 1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae650df08ed905fbf1ccc93738f13ecb3a956e617207191109d06cca960e6746c9\">Vcd</a> = 2\n\
 }<tr class=\"memdesc:ae650df08ed905fbf1ccc93738f13ecb3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Enum to identify the media discs supported by MediaObject.  <a href=\"#!/url=./cpp_ref/namespace_phonon.html#ae650df08ed905fbf1ccc93738f13ecb3\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae650df08ed905fbf1ccc93738f13ecb3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"memitem:a85d1594e87e4c4e5da912ca49a87f8d3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a85d1594e87e4c4e5da912ca49a87f8d3\">MetaData</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a85d1594e87e4c4e5da912ca49a87f8d3a2f36c623030e2f799994fb9231fae48f\">ArtistMetaData</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a85d1594e87e4c4e5da912ca49a87f8d3ac81e8422df3e4c07604610af44aa4a17\">AlbumMetaData</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a85d1594e87e4c4e5da912ca49a87f8d3a8e25960b456b776b9520544f1a1bf94e\">TitleMetaData</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a85d1594e87e4c4e5da912ca49a87f8d3aa16b3206bafbc42697456cf3b3a8570f\">DateMetaData</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a85d1594e87e4c4e5da912ca49a87f8d3a240af2b9ce648c25db2b261d326ab86a\">GenreMetaData</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a85d1594e87e4c4e5da912ca49a87f8d3a8bb03c30ad1948178f9cd12674baa91f\">TracknumberMetaData</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a85d1594e87e4c4e5da912ca49a87f8d3a0ff0288e9bf4e18dd6dbbbaab2e498ba\">DescriptionMetaData</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a85d1594e87e4c4e5da912ca49a87f8d3adbedf7d543c28ad3d23fec38a27d8262\">MusicBrainzDiscIdMetaData</a>\n\
<br>\n\
 }<tr class=\"memdesc:a85d1594e87e4c4e5da912ca49a87f8d3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Provided as keys for MediaObject::metaData for convenience, in addition to the strings defined in the Ogg Vorbis specification.  <a href=\"#!/url=./cpp_ref/namespace_phonon.html#a85d1594e87e4c4e5da912ca49a87f8d3\">More...</a><br></td></tr>\n\
<tr class=\"separator:a85d1594e87e4c4e5da912ca49a87f8d3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"memitem:a5d74787dedbc4e11c1ab15bf487e61f8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a5d74787dedbc4e11c1ab15bf487e61f8\">State</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a5d74787dedbc4e11c1ab15bf487e61f8ad87fc9859e6c3daa75a52b826be4f661\">LoadingState</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a5d74787dedbc4e11c1ab15bf487e61f8a979a39371a7c85faad972f4c97c1efe9\">StoppedState</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a5d74787dedbc4e11c1ab15bf487e61f8a6888ce12907c053942e50728ffc06ae0\">PlayingState</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a5d74787dedbc4e11c1ab15bf487e61f8ae473cc4a6ebf654fca7952c9e1ba3a22\">BufferingState</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a5d74787dedbc4e11c1ab15bf487e61f8aad64d0ea15122ca27f6f468ccd5e93c6\">PausedState</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a5d74787dedbc4e11c1ab15bf487e61f8ade97a2665a1361faea090134062c17b4\">ErrorState</a>\n\
<br>\n\
 }<tr class=\"memdesc:a5d74787dedbc4e11c1ab15bf487e61f8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The state the media producing object is in at the moment.  <a href=\"#!/url=./cpp_ref/namespace_phonon.html#a5d74787dedbc4e11c1ab15bf487e61f8\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5d74787dedbc4e11c1ab15bf487e61f8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"memitem:a9ca8f05608edcbf85ab6c2c85a439ccb\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccb\">Category</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccba36e67b562531ad724f3d090370bfba67\">NoCategory</a> = -1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccba9227b024a58abd0527e8bca9094e3581\">NotificationCategory</a> = 0, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccbababa5fdfd4143f0a67fb4e5e884a1ea7\">MusicCategory</a> = 1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccba799ae9b9011ca4bb12db2dff3070d309\">VideoCategory</a> = 2, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccba97611a3b9ca39214e9bcfb4692847982\">CommunicationCategory</a> = 3, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccbaf923be63802d4ba46af0f1e06afb8c93\">GameCategory</a> = 4, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccba42fa635228a612566d009c6d7c73e553\">AccessibilityCategory</a> = 5, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccbadc1121112eeed26f17f8bac276a26a27\">LastCategory</a> = AccessibilityCategory\n\
<br>\n\
 }<tr class=\"memdesc:a9ca8f05608edcbf85ab6c2c85a439ccb\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set\'s the category your program should be listed in in the mixer.  <a href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccb\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9ca8f05608edcbf85ab6c2c85a439ccb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"memitem:ab0df38968e4f03a3f1f6d6df0f31f45a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ab0df38968e4f03a3f1f6d6df0f31f45a\">ErrorType</a> { <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ab0df38968e4f03a3f1f6d6df0f31f45aaef9104c292609ba6db320509be8fe27f\">NoError</a> = 0, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ab0df38968e4f03a3f1f6d6df0f31f45aa8775a888b4382dfdb0ed35054f69c6ab\">NormalError</a> = 1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ab0df38968e4f03a3f1f6d6df0f31f45aa336747997fe4e20bb8ae39c3bdad28fb\">FatalError</a> = 2\n\
 }<tr class=\"memdesc:ab0df38968e4f03a3f1f6d6df0f31f45a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Tells your program how to recover from an error.  <a href=\"#!/url=./cpp_ref/namespace_phonon.html#ab0df38968e4f03a3f1f6d6df0f31f45a\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab0df38968e4f03a3f1f6d6df0f31f45a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:ad2a1b95d23ec0f6f20247dc2e8dde307\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a> const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ad2a1b95d23ec0f6f20247dc2e8dde307\">phononVersion</a> ()</td></tr>\n\
<tr class=\"separator:ad2a1b95d23ec0f6f20247dc2e8dde307\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3067289e922a84788c10c8459e9a167d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a3067289e922a84788c10c8459e9a167d\">categoryToString</a> (Category <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a>)</td></tr>\n\
<tr class=\"memdesc:a3067289e922a84788c10c8459e9a167d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns a (translated) string to show to the user identifying the given Category.  <a href=\"#!/url=./cpp_ref/namespace_phonon.html#a3067289e922a84788c10c8459e9a167d\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3067289e922a84788c10c8459e9a167d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Macro Definition Documentation</h2>\n\
<a class=\"anchor\" id=\"af514e685dc2b5a7b2dbbbbfde6495312\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define PHONON_VERSION_CHECK</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">major, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">minor, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">patch&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td>&#160;&#160;&#160;((major&lt;&lt;16)|(minor&lt;&lt;8)|(patch))</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Helper macro that can be used like. </p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;#if (PHONON_VERSION &gt;= PHONON_VERSION_CHECK(4, 4, 0))</div>\n\
</div><!-- fragment --> \n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phononnamespace_8h_source.html#l00039\">39</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phononnamespace_8h_source.html\">phononnamespace.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"adf896ee8cfcbda7b4d8cb4abf0172a43\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define PHONON_VERSION&#160;&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phononnamespace_8h.html#af514e685dc2b5a7b2dbbbbfde6495312\">PHONON_VERSION_CHECK</a>(4, 4, 0)</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>PHONON_VERSION is (major &lt;&lt; 16) + (minor &lt;&lt; 8) + patch. </p>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phononnamespace_8h_source.html#l00044\">44</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phononnamespace_8h_source.html\">phononnamespace.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac545f72c435977ad86c725471a5f56ef\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define PHONON_VERSION_STR&#160;&#160;&#160;&quot;4.4.0&quot;</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>PHONON_VERSION_STR is \"major.minor.patch\". </p>\n\
<p>E.g. \"4.2.1\" </p>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phononnamespace_8h_source.html#l00049\">49</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phononnamespace_8h_source.html\">phononnamespace.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
\n\
<p><a href=\"#!/url=./cpp_ref/phononnamespace_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";