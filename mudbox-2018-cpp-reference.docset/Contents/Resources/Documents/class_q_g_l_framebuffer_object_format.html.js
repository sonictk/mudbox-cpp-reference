var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QGLFramebufferObjectFormat Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_g_l_framebuffer_object_format.html\', tocPrefix);\n\
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
            <h1>QGLFramebufferObjectFormat Class Reference</h1>\n\
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
<div class=\"title\">QGLFramebufferObjectFormat Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_q_g_l_framebuffer_object_format.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qglframebufferobject_8h_source.html\">qglframebufferobject.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qglframebufferobject_8h_source.html#l00140\">140</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qglframebufferobject_8h_source.html\">qglframebufferobject.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aeed5a8abd08f50571b97b0e7169e8ffb\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#aeed5a8abd08f50571b97b0e7169e8ffb\">QGLFramebufferObjectFormat</a> ()</td></tr>\n\
<tr class=\"separator:aeed5a8abd08f50571b97b0e7169e8ffb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaa24d2009d4e09b235cd76b830ca1aa8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#aaa24d2009d4e09b235cd76b830ca1aa8\">QGLFramebufferObjectFormat</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a> &amp;other)</td></tr>\n\
<tr class=\"separator:aaa24d2009d4e09b235cd76b830ca1aa8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3605cf031c04e91ef703c12bbe98ba10\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#a3605cf031c04e91ef703c12bbe98ba10\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a> &amp;other)</td></tr>\n\
<tr class=\"separator:a3605cf031c04e91ef703c12bbe98ba10\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad0441e0353b3e5e796f936d70cb5105f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#ad0441e0353b3e5e796f936d70cb5105f\">~QGLFramebufferObjectFormat</a> ()</td></tr>\n\
<tr class=\"separator:ad0441e0353b3e5e796f936d70cb5105f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a886524c48681513b8caaa6ea36b540af\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#a886524c48681513b8caaa6ea36b540af\">setSamples</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aba70cd077c2c52c15358c231c6d293aa\">samples</a>)</td></tr>\n\
<tr class=\"separator:a886524c48681513b8caaa6ea36b540af\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa1f3b4e45ce1edfa7f1fecca256e08c9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#aa1f3b4e45ce1edfa7f1fecca256e08c9\">samples</a> () const </td></tr>\n\
<tr class=\"separator:aa1f3b4e45ce1edfa7f1fecca256e08c9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6f92e138fa228dd2c998839ac259ed41\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#a6f92e138fa228dd2c998839ac259ed41\">setMipmap</a> (bool enabled)</td></tr>\n\
<tr class=\"separator:a6f92e138fa228dd2c998839ac259ed41\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a18c2ba6e5d7e4be9d8a1bd446d2a102f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#a18c2ba6e5d7e4be9d8a1bd446d2a102f\">mipmap</a> () const </td></tr>\n\
<tr class=\"separator:a18c2ba6e5d7e4be9d8a1bd446d2a102f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac9c1f6eda3944daabe6a07e2a595fc1e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#ac9c1f6eda3944daabe6a07e2a595fc1e\">setAttachment</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a0ad971e5e7193d5b2d0af98e06060d2b\">QGLFramebufferObject::Attachment</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad8f97111cc6514af5f352219d1cceb40\">attachment</a>)</td></tr>\n\
<tr class=\"separator:ac9c1f6eda3944daabe6a07e2a595fc1e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4fe52b8c1ef154683852b59ea836ddef\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a0ad971e5e7193d5b2d0af98e06060d2b\">QGLFramebufferObject::Attachment</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#a4fe52b8c1ef154683852b59ea836ddef\">attachment</a> () const </td></tr>\n\
<tr class=\"separator:a4fe52b8c1ef154683852b59ea836ddef\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1a895d4ce0df7cb1903c06934bb4f18b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#a1a895d4ce0df7cb1903c06934bb4f18b\">setTextureTarget</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa4474e19e1c4fc8bbadf5f4fa95736ce\">GLenum</a> target)</td></tr>\n\
<tr class=\"separator:a1a895d4ce0df7cb1903c06934bb4f18b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a575c2bf7d89b1885b12896ab9e8a76af\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa4474e19e1c4fc8bbadf5f4fa95736ce\">GLenum</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#a575c2bf7d89b1885b12896ab9e8a76af\">textureTarget</a> () const </td></tr>\n\
<tr class=\"separator:a575c2bf7d89b1885b12896ab9e8a76af\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a29f5213aa28c78a0219e3e86a6f47928\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#a29f5213aa28c78a0219e3e86a6f47928\">setInternalTextureFormat</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa4474e19e1c4fc8bbadf5f4fa95736ce\">GLenum</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#a34705a64894eb2a3f59837e06663a390\">internalTextureFormat</a>)</td></tr>\n\
<tr class=\"separator:a29f5213aa28c78a0219e3e86a6f47928\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a34705a64894eb2a3f59837e06663a390\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa4474e19e1c4fc8bbadf5f4fa95736ce\">GLenum</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#a34705a64894eb2a3f59837e06663a390\">internalTextureFormat</a> () const </td></tr>\n\
<tr class=\"separator:a34705a64894eb2a3f59837e06663a390\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a91515faec78f8ea249362cccf9d54c1b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#a91515faec78f8ea249362cccf9d54c1b\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a> &amp;other) const </td></tr>\n\
<tr class=\"separator:a91515faec78f8ea249362cccf9d54c1b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3b69ea330d123d36f8ccf6ea45c4844c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html#a3b69ea330d123d36f8ccf6ea45c4844c\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a> &amp;other) const </td></tr>\n\
<tr class=\"separator:a3b69ea330d123d36f8ccf6ea45c4844c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"aeed5a8abd08f50571b97b0e7169e8ffb\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aaa24d2009d4e09b235cd76b830ca1aa8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad0441e0353b3e5e796f936d70cb5105f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">~<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a3605cf031c04e91ef703c12bbe98ba10\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a>&amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a886524c48681513b8caaa6ea36b540af\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> setSamples </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>samples</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa1f3b4e45ce1edfa7f1fecca256e08c9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aba70cd077c2c52c15358c231c6d293aa\">samples</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6f92e138fa228dd2c998839ac259ed41\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> setMipmap </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>enabled</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a18c2ba6e5d7e4be9d8a1bd446d2a102f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool mipmap </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac9c1f6eda3944daabe6a07e2a595fc1e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> setAttachment </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a0ad971e5e7193d5b2d0af98e06060d2b\">QGLFramebufferObject::Attachment</a>&#160;</td>\n\
          <td class=\"paramname\"><em>attachment</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4fe52b8c1ef154683852b59ea836ddef\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a0ad971e5e7193d5b2d0af98e06060d2b\">QGLFramebufferObject::Attachment</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad8f97111cc6514af5f352219d1cceb40\">attachment</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1a895d4ce0df7cb1903c06934bb4f18b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> setTextureTarget </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa4474e19e1c4fc8bbadf5f4fa95736ce\">GLenum</a>&#160;</td>\n\
          <td class=\"paramname\"><em>target</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a575c2bf7d89b1885b12896ab9e8a76af\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa4474e19e1c4fc8bbadf5f4fa95736ce\">GLenum</a> textureTarget </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a29f5213aa28c78a0219e3e86a6f47928\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> setInternalTextureFormat </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa4474e19e1c4fc8bbadf5f4fa95736ce\">GLenum</a>&#160;</td>\n\
          <td class=\"paramname\"><em>internalTextureFormat</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a34705a64894eb2a3f59837e06663a390\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa4474e19e1c4fc8bbadf5f4fa95736ce\">GLenum</a> internalTextureFormat </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a91515faec78f8ea249362cccf9d54c1b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3b69ea330d123d36f8ccf6ea45c4844c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object_format.html\">QGLFramebufferObjectFormat</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtOpenGL/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qglframebufferobject_8h_source.html\">qglframebufferobject.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";