var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Member List</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_g_l_framebuffer_object-members.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Member List</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">QGLFramebufferObject Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a0ad971e5e7193d5b2d0af98e06060d2b\">Attachment</a> enum name</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#aadb59f6d548df1af4bfbec77a36520a7\">attachment</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a16873539a1053d46eebcbf393002ff6b\">bind</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a0b5e2fdec61ddfd0f025ba4cb76dc801\">bindDefault</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#ad545531250d8956942f004f3e6591464\">blitFramebuffer</a>(QGLFramebufferObject *target, const QRect &amp;targetRect, QGLFramebufferObject *source, const QRect &amp;sourceRect, GLbitfield buffers=GL_COLOR_BUFFER_BIT, GLenum filter=GL_NEAREST)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a19f148fb3c8bc12062b79ed49fed116c\">colorCount</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a0ad971e5e7193d5b2d0af98e06060d2ba28205add6a873fd3c42f8c32735bad52\">CombinedDepthStencil</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a3275d1392d01b26af1c8cd52b0d10745\">depth</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a0ad971e5e7193d5b2d0af98e06060d2baf5c0a1b2ee6f0c691d602752b185463c\">Depth</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a3210f4237db58047961a69a93fbda6a8\">devType</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#abd6f69700957bf52a82d34de6fd29410\">drawTexture</a>(const QRectF &amp;target, GLuint textureId, GLenum textureTarget=GL_TEXTURE_2D)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#ab324a422a256429368b65fc79b223620\">drawTexture</a>(const QPointF &amp;point, GLuint textureId, GLenum textureTarget=GL_TEXTURE_2D)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#aa3c372d298296db99507655c1a3d074e\">format</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a243f091dd6e5db2c23cf6011eea3d43a\">handle</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#abe9f11b49879d4e95b575e11b28214dc\">hasOpenGLFramebufferBlit</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#ad8e087a192a210116844eba9f5054916\">hasOpenGLFramebufferObjects</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#ae26bcfe2f33f5873dbdfb6948cf1f59f\">height</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a6f40e3656960facc694cb3dc07dca11a\">heightMM</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a3b29f170eb389b769be3eeb459c7c9ea\">isBound</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#aac1b70a2ed67ead038c4d3f5ac4d8a81\">isValid</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a0eef25e2799171c00eecd354a132b2b2\">logicalDpiX</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a21ae020af23368136bdf34ca09245375\">logicalDpiY</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a22aa02300f4766b37ea690ecf4cc745b\">metric</a>(PaintDeviceMetric metric) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a0ad971e5e7193d5b2d0af98e06060d2ba4befaf5c693cf9471dbc27b11c53c8cc\">NoAttachment</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a40c70e639ab0db5c7f6a617025b69af3\">PaintDeviceMetric</a> enum name</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#abf9629b94a59f85c47fc61009558390b\">paintEngine</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a545de7c63d836ee51cc4dde3d36d5d4b\">painters</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#aa0bdf354d2f25c800ca5ebaaa9e0a570\">paintingActive</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a40c70e639ab0db5c7f6a617025b69af3a234713055f42660c147cfaf26ebb6a15\">PdmDepth</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a40c70e639ab0db5c7f6a617025b69af3aaf6694899f3e68abec8c981955863872\">PdmDpiX</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a40c70e639ab0db5c7f6a617025b69af3a7ac53ff981244b947b6592165c626ae2\">PdmDpiY</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a40c70e639ab0db5c7f6a617025b69af3adc35cc1f65dc9a07b73063c48382c134\">PdmHeight</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a40c70e639ab0db5c7f6a617025b69af3a5576d307fe002ef8511909c3e5794f31\">PdmHeightMM</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a40c70e639ab0db5c7f6a617025b69af3a471789fe0b9bf4a2235fb30f53c92b1d\">PdmNumColors</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a40c70e639ab0db5c7f6a617025b69af3aae7031b77d1c6a5ae6df14e854048d3f\">PdmPhysicalDpiX</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a40c70e639ab0db5c7f6a617025b69af3aa01ce4356376692fff158000be6c1219\">PdmPhysicalDpiY</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a40c70e639ab0db5c7f6a617025b69af3a430d614ec28756f40fa99f4b24d77758\">PdmWidth</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a40c70e639ab0db5c7f6a617025b69af3a66bdaee1618d08d2e0dc7669f5376303\">PdmWidthMM</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#ae6700def00a39887cc5c3931c2d3103d\">physicalDpiX</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a4c654277cf64124146a6288c1535a900\">physicalDpiY</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a90e2b9a37636b49cac9bfa4d10411564\">QGLFBOGLPaintDevice</a> class</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"><span class=\"mlabel\">friend</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a08c69bcbe1cbe8d2712b20bb9cb5f4f1\">QGLFramebufferObject</a>(const QSize &amp;size, GLenum target=GL_TEXTURE_2D)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a9fa18d825c8ffe857a82ff88663ded89\">QGLFramebufferObject</a>(int width, int height, GLenum target=GL_TEXTURE_2D)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#aabd88d31d5e5dafd8840f299633ba0d0\">QGLFramebufferObject</a>(const QSize &amp;size, Attachment attachment, GLenum target=GL_TEXTURE_2D, GLenum internal_format=GL_RGBA8)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a64670cb97ecfed3737e6d9a7ec630383\">QGLFramebufferObject</a>(int width, int height, Attachment attachment, GLenum target=GL_TEXTURE_2D, GLenum internal_format=GL_RGBA8)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#ad7366efb5ffb88983a1c25eb08b8b002\">QGLFramebufferObject</a>(const QSize &amp;size, const QGLFramebufferObjectFormat &amp;format)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a42b45b8799c4081694a099a6f8dc99c6\">QGLFramebufferObject</a>(int width, int height, const QGLFramebufferObjectFormat &amp;format)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a6077a7da1268a54c55cbb4fc831f4015\">QGLPaintDevice</a> class</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"><span class=\"mlabel\">friend</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#accaf5ffcf5d2095bf78d71cef7051502\">QPaintDevice</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a0c169e21a6a7de905bd60c5561ed690c\">release</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#aa67984e6c016b8ef812f8c52b0aef5cf\">size</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a3e7c3acf01a247702b9c8e851086a029\">texture</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a43363abb9c3e32ae47e2fb22ade358bb\">toImage</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a369399896761e31ae71db57fdd0ba431\">width</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#aeb0c1eae7a834728311016f2cfb55bec\">widthMM</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html#a799a7748b2d9eafa77d33249829fc054\">~QGLFramebufferObject</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_g_l_framebuffer_object.html\">QGLFramebufferObject</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html#a73281bb2cd78e6ae1702410dae42b3ca\">~QPaintDevice</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_paint_device.html\">QPaintDevice</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";