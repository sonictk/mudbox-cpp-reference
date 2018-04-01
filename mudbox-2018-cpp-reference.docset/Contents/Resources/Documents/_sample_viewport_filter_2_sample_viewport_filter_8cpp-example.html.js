var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>SampleViewportFilter/SampleViewportFilter.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_sample_viewport_filter_2_sample_viewport_filter_8cpp-example.html\', tocPrefix);\n\
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
            <h1>SampleViewportFilter/SampleViewportFilter.cpp</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
<div class=\"title\">SampleViewportFilter/SampleViewportFilter.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2008 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CREATED: October 2008</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _USE_MATH_DEFINES</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;cmath&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;SampleViewportFilter.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtCore/QDir&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">using namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html\">mudbox</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Filter plugin macros</span></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/node_8h.html#aecde0e72e97a2b7e7589fadde661f9f8\">IMPLEMENT_VCLASS</a>( SampleViewPortFilter, <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_view_port_filter.html\">ViewPortFilter</a>, <span class=\"stringliteral\">&quot;Sample Viewport Filter&quot;</span>, 1 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#afa2df46a730e8fc8bceb9410c0ff6838\">MB_PLUGIN</a>( <span class=\"stringliteral\">&quot;Sample Filter&quot;</span>, <span class=\"stringliteral\">&quot;Sample Viewport Filter&quot;</span>, <span class=\"stringliteral\">&quot;Autodesk&quot;</span>, <span class=\"stringliteral\">&quot;http://www.mudbox3d.com&quot;</span>, 0 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Render texture to screen to activate shaders.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> drawFullScreenQuad() {</div>\n\
<div class=\"line\">    glMatrixMode( GL_PROJECTION );</div>\n\
<div class=\"line\">    glLoadIdentity();</div>\n\
<div class=\"line\">    glMatrixMode( GL_MODELVIEW );</div>\n\
<div class=\"line\">    glLoadIdentity();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    glBegin( GL_QUADS );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    glTexCoord2f( 0, 0 );</div>\n\
<div class=\"line\">    glVertex2f( -1, -1 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    glTexCoord2f( 1, 0 );</div>\n\
<div class=\"line\">    glVertex2f( 1, -1 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    glTexCoord2f( 1, 1 );</div>\n\
<div class=\"line\">    glVertex2f( 1, 1 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    glTexCoord2f( 0, 1 );</div>\n\
<div class=\"line\">    glVertex2f( -1, 1 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    glEnd();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Renders full screens quad to texture specified</span></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> gpuTransform(<a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture.html\">Texture</a>* <span class=\"keyword\">const</span> outputTexture) {</div>\n\
<div class=\"line\">    outputTexture-&gt;<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture.html#a41873174bff2734308a77c41e7e8155f\">SetAsRenderTarget</a>();</div>\n\
<div class=\"line\">    drawFullScreenQuad();</div>\n\
<div class=\"line\">    outputTexture-&gt;<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture.html#ac6369fcbfe41f3f512fde009417afca3\">RestoreRenderTarget</a>();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> SampleViewPortFilter::OnNodeEvent( <span class=\"keyword\">const</span> <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_attribute.html\">Attribute</a> &amp;cAttribute, <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a8d88d2a841f889dace76ffcd8d6b06da\">NodeEventType</a> eType ) {</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(eType == <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a8d88d2a841f889dace76ffcd8d6b06daa274758890f9a27906be7336f4b8e4780\">etValueChanged</a>) {</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Redraw();</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">SampleViewPortFilter::SampleViewPortFilter() :</div>\n\
<div class=\"line\">    m_aGaussianBlur(this, <span class=\"stringliteral\">&quot;Gaussian&quot;</span>),</div>\n\
<div class=\"line\">    m_aBlurWidth(this, <span class=\"stringliteral\">&quot;Blur Width&quot;</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Cg context</span></div>\n\
<div class=\"line\">    m_CGContext = <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a0b6efcf2e6ec400396807af564143fac\">cgCreateContext</a>();</div>\n\
<div class=\"line\">    <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#afb1ddee9514b14767147f207f6419f59\">cgGLSetDebugMode</a>( <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a2009460e44fe74cd92f9c13c2dd57592\">CG_FALSE</a> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a9f4181ed02fc82e05d49efb8dd097e49\">cgGLSetManageTextureParameters</a>(m_CGContext, <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a251a5b14a42fb7b64e82d0773ec94833\">CG_TRUE</a>);</div>\n\
<div class=\"line\">    <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#adab6bc9b4d1a3225608f15e14e11a668\">cgSetParameterSettingMode</a>(m_CGContext, <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a58a98d9f87c901fb6636d2756c5a18e6a108eac62fd8ebf2ebdd92ac3af2f84e2\">CG_DEFERRED_PARAMETER_SETTING</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/* Compile and load the vertex program. */</span></div>\n\
<div class=\"line\">    m_FragmentProfile = <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#ab20fd18cf7d726beaa9d7c36193c2a61\">cgGLGetLatestProfile</a>(<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#ad83071d7f7686bc85d28e22f1cb814afad69b6ec26c2fe834fae9a07f10be8104\">CG_GL_FRAGMENT</a>);</div>\n\
<div class=\"line\">    <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a21d2a26b50cce15f370d937c0172911c\">cgGLSetOptimalOptions</a>(m_FragmentProfile);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the path to where the plug-in was loaded from</span></div>\n\
<div class=\"line\">    <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_dir.html\">QDir</a> pluginDir( <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;PluginDirectory(<span class=\"stringliteral\">&quot;Sample Filter&quot;</span>) );</div>\n\
<div class=\"line\">    <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file_info.html\">QFileInfo</a> cgPath( pluginDir, <a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>(<span class=\"stringliteral\">&quot;Blur.cg&quot;</span>) );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/* Compile and load the fragment program. */</span></div>\n\
<div class=\"line\">    <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> qbaPath = <a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file.html#a548ef3f34e5265ca50980914ccabbfde\">QFile::encodeName</a>(cgPath.filePath());</div>\n\
<div class=\"line\">    m_BlurProgram =</div>\n\
<div class=\"line\">        <a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#ad11c69fae9409d44ff1494e57b620928\">cgCreateProgramFromFile</a>(</div>\n\
<div class=\"line\">        m_CGContext,                <span class=\"comment\">/* Cg runtime context */</span></div>\n\
<div class=\"line\">        <a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a58a98d9f87c901fb6636d2756c5a18e6a8a81af23c02a7a32e5dfd0ca6dd83dec\">CG_SOURCE</a>,                  <span class=\"comment\">/* Program in human-readable form */</span></div>\n\
<div class=\"line\">        qbaPath.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html#acd2173722996016205933aa3053f895f\">constData</a>(), <span class=\"comment\">/* Name of file containing program */</span></div>\n\
<div class=\"line\">        m_FragmentProfile,<span class=\"comment\">/* Profile: OpenGL ARB vertex program */</span></div>\n\
<div class=\"line\">        <span class=\"stringliteral\">&quot;main&quot;</span>,      <span class=\"comment\">/* Entry function name */</span></div>\n\
<div class=\"line\">        NULL);                      <span class=\"comment\">/* No extra compiler options */</span></div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( m_BlurProgram == NULL ) <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Interface()-&gt;HUDMessageShow(<span class=\"stringliteral\">&quot;Failed to load Blur.cg&quot;</span>, <a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_interface.html#a26e31204f799b1a1db85565fc5a98b99a6d1628d017e93eb59b9a74b0cdc9d904\">mudbox::Interface::HUDmsgFade</a> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a3fdd0cf6161407c251ff13b7b31b470e\">cgGLLoadProgram</a>(m_BlurProgram);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_BlurColorTextureParam = <a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aba225f7d8a697845c0054482492f6312\">cgGetNamedParameter</a>(m_BlurProgram, <span class=\"stringliteral\">&quot;colorTexture&quot;</span>);</div>\n\
<div class=\"line\">    m_BlurWidthParam = <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aba225f7d8a697845c0054482492f6312\">cgGetNamedParameter</a>(m_BlurProgram, <span class=\"stringliteral\">&quot;BlurWidth&quot;</span>);</div>\n\
<div class=\"line\">    m_GaussianBlurParam = <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aba225f7d8a697845c0054482492f6312\">cgGetNamedParameter</a>(m_BlurProgram, <span class=\"stringliteral\">&quot;GaussianBlur&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_aGaussianBlur = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_aBlurWidth.SetMax(.0050<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>);</div>\n\
<div class=\"line\">    m_aBlurWidth.SetMin(.0001<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>);</div>\n\
<div class=\"line\">    m_aBlurWidth = 0.0012f;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create the output texture</span></div>\n\
<div class=\"line\">    m_pResultTexture = CreateInstance&lt;Texture&gt;();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">SampleViewPortFilter::~SampleViewPortFilter()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( m_pResultTexture )</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> m_pResultTexture;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (m_CGContext)</div>\n\
<div class=\"line\">        <a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aac74f65897d67c949df16b85475dca16\">cgDestroyContext</a>(m_CGContext);</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> SampleViewPortFilter::Process( <a name=\"_a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_view_port_state.html\">ViewPortState</a> &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad585a1393cfa368fa9dc3d8ebff640d5\">s</a> ) </div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html#ab4e88c89b3b7ea1735996cc4def22d58\">Image::Format</a> eFormat = s.<a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_view_port_state.html#a8a0afc3ff3c1117eea3ccb3f70884218\">m_bHDRNeeded</a> ? Image::e16float : Image::e8integer;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set of variables not actually used for anything other than to show</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// how to access the values.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> cameraNear = <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;ActiveCamera()-&gt;Near();</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> cameraFar = <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;ActiveCamera()-&gt;Far();</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> cameraFOV = <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;ActiveCamera()-&gt;FOV();</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> cameraAspectRatio = <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;ActiveCamera()-&gt;AspectRatio();</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> cameraHeight = tanf(cameraFOV / 2.0<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>) * cameraNear;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> cameraWidth = cameraHeight * cameraAspectRatio;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> cameraTop = -cameraHeight;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> cameraBottom = cameraHeight;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> cameraLeft = -cameraWidth;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> cameraRight = cameraWidth;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Ensure our output texture is same size &amp; type as the incoming color buffer.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get width and height of the viewport</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac112eef468530a44b7a653ddac190a22\">width</a> = s.<a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_view_port_state.html#a462d3523d369eeef2f857b9027777452\">m_pColor</a>-&gt;<a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture.html#a9fb8594edb54f6768c9c255e82b64e55\">Width</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ab375df5e95c5fc63fc9165319162bddc\">height</a> = s.<a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_view_port_state.html#a462d3523d369eeef2f857b9027777452\">m_pColor</a>-&gt;<a name=\"a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture.html#a2bf08b44fad2ec32cf410195eacb60b2\">Height</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Smallest of width and height</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> extendMin = width &lt; height ? width : <a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ab375df5e95c5fc63fc9165319162bddc\">height</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Logarithm of the SMALLER extend, in order to be at least 1 pixel in size in any dimension</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> levelCountMax = (<a name=\"a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>)floorf(logf(<span class=\"keywordtype\">float</span>(extendMin)) / float(M_LN2));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// See if the input size or format changed. If so, re-create the texture.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( m_pResultTexture-&gt;Width() != s.<a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_view_port_state.html#a462d3523d369eeef2f857b9027777452\">m_pColor</a>-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture.html#a9fb8594edb54f6768c9c255e82b64e55\">Width</a>() || </div>\n\
<div class=\"line\">        m_pResultTexture-&gt;Height() != s.<a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_view_port_state.html#a462d3523d369eeef2f857b9027777452\">m_pColor</a>-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture.html#a2bf08b44fad2ec32cf410195eacb60b2\">Height</a>())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        m_pResultTexture-&gt;Create(s.<a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_view_port_state.html#a462d3523d369eeef2f857b9027777452\">m_pColor</a>-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture.html#a9fb8594edb54f6768c9c255e82b64e55\">Width</a>(), s.<a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_view_port_state.html#a462d3523d369eeef2f857b9027777452\">m_pColor</a>-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture.html#a2bf08b44fad2ec32cf410195eacb60b2\">Height</a>(), 4, eFormat);</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    m_pResultTexture-&gt;SetLocation( TexturePool::locationGPU );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Enable Cg fragment profile</span></div>\n\
<div class=\"line\">    <a name=\"a38\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a26c714fcbbf139071a5eb37ecffd4cbe\">cgGLEnableProfile</a>(m_FragmentProfile);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set up some gl states</span></div>\n\
<div class=\"line\">    glDisable(<a name=\"a39\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/qglfunctions_8h.html#a4ccf1dc093190cc3798b9abea3655f98\">GL_DEPTH_TEST</a>);</div>\n\
<div class=\"line\">    glDisable(<a name=\"a40\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/qglfunctions_8h.html#aa290e8f9ee6f6862778355aa22bb0b13\">GL_BLEND</a>);</div>\n\
<div class=\"line\">    glDisable(<a name=\"a41\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/qglfunctions_8h.html#a8c4f153ed20a741aaae952650fec46f0\">GL_CULL_FACE</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"a42\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a5a566921e13982a1add1b7874d0b9d5d\">cgGLBindProgram</a>(m_BlurProgram);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the incoming color buffer on the shader</span></div>\n\
<div class=\"line\">    <a name=\"a43\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#ac206ad0a97a994acdcd2558bbfce6216\">cgGLSetTextureParameter</a>(m_BlurColorTextureParam, s.<a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_view_port_state.html#a462d3523d369eeef2f857b9027777452\">m_pColor</a>-&gt;<a name=\"a44\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture.html#aac5b5c6c3637542f2f4d78336386b6a5\">OpenGLName</a>());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set blur width value</span></div>\n\
<div class=\"line\">    <a name=\"a45\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a39b31fb362aa2f4d0dbee3a2267c547f\">cgSetParameter1f</a>(m_BlurWidthParam, m_aBlurWidth);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set Gaussian usage value</span></div>\n\
<div class=\"line\">    <a name=\"a46\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a7e92d50ef2447388aeb30069fe47fad0\">cgSetParameter1i</a>(m_GaussianBlurParam, m_aGaussianBlur);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"a47\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#ab852a46031bb7d6d62e2348cd88ebd22\">cgUpdateProgramParameters</a>(m_BlurProgram);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Render to the resulting texture.  This activates the shader pass.</span></div>\n\
<div class=\"line\">    gpuTransform(m_pResultTexture);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a name=\"a48\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#afbf63baab60050650f15576b8161c689\">cgGLDisableProfile</a>(m_FragmentProfile);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Assign the resulting texture to the color buffer</span></div>\n\
<div class=\"line\">    s.<a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_view_port_state.html#a462d3523d369eeef2f857b9027777452\">m_pColor</a> = m_pResultTexture;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> SampleViewPortFilter::SetVisible( <span class=\"keywordtype\">bool</span> bVisible )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    ViewPortFilter::SetVisible( bVisible );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( bVisible )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( !m_pResultTexture )</div>\n\
<div class=\"line\">            m_pResultTexture = CreateInstance&lt;Texture&gt;();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> m_pResultTexture;</div>\n\
<div class=\"line\">        m_pResultTexture = 0;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">};</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";