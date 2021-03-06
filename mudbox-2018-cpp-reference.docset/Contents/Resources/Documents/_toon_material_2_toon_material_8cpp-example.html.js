var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>ToonMaterial/ToonMaterial.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_toon_material_2_toon_material_8cpp-example.html\', tocPrefix);\n\
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
            <h1>ToonMaterial/ToonMaterial.cpp</h1>\n\
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
<div class=\"title\">ToonMaterial/ToonMaterial.cpp</div>  </div>\n\
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
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;ToonMaterial.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtCore/QDir&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// NOTE : This plugin does not have any exception handling.  This was done</span></div>\n\
<div class=\"line\"><span class=\"comment\">// for brevity reasons.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Plugin registration macros</span></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#afa2df46a730e8fc8bceb9410c0ff6838\">MB_PLUGIN</a>( <span class=\"stringliteral\">&quot;ToonMaterial&quot;</span>, <span class=\"stringliteral\">&quot;Toon material&quot;</span>, <span class=\"stringliteral\">&quot;Autodesk&quot;</span>, <span class=\"stringliteral\">&quot;http://www.mudbox3d.com&quot;</span>, 0 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/node_8h.html#a1d51ad935ab5d26fe95dff62601b602c\">IMPLEMENT_CLASS</a>( ToonMaterial, Material, <span class=\"stringliteral\">&quot;Toon Material&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// forward declarations</span></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keywordtype\">float</span> diffuseRamp(<span class=\"keywordtype\">float</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a09b61c9254503800358fe9680a997626\">x</a>);</div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keywordtype\">float</span> specularRamp(<span class=\"keywordtype\">float</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a09b61c9254503800358fe9680a997626\">x</a>);</div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keywordtype\">float</span> edgeRamp(<span class=\"keywordtype\">float</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a09b61c9254503800358fe9680a997626\">x</a>);</div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> loadRamp(<a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a852415b1bb59365d80357c5f33e816c5\">GLuint</a> texobj, <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">size</a>, <span class=\"keywordtype\">float</span> (*func)(<span class=\"keywordtype\">float</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a09b61c9254503800358fe9680a997626\">x</a>));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ToonMaterial::ToonMaterial( <span class=\"keywordtype\">void</span> ) :</div>\n\
<div class=\"line\">            m_aKd(this, <span class=\"stringliteral\">&quot;Kd&quot;</span>),</div>\n\
<div class=\"line\">            m_aKs(this, <span class=\"stringliteral\">&quot;Ks&quot;</span>),</div>\n\
<div class=\"line\">            m_aShininess(this, <span class=\"stringliteral\">&quot;Shiny&quot;</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    SetName( <span class=\"stringliteral\">&quot;Toon Material&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_CGContext = <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a0b6efcf2e6ec400396807af564143fac\">cgCreateContext</a>();</div>\n\
<div class=\"line\">    <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#afb1ddee9514b14767147f207f6419f59\">cgGLSetDebugMode</a>( <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a2009460e44fe74cd92f9c13c2dd57592\">CG_FALSE</a> );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a9f4181ed02fc82e05d49efb8dd097e49\">cgGLSetManageTextureParameters</a>(m_CGContext, <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a251a5b14a42fb7b64e82d0773ec94833\">CG_TRUE</a>);</div>\n\
<div class=\"line\">    <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#adab6bc9b4d1a3225608f15e14e11a668\">cgSetParameterSettingMode</a>(m_CGContext, <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a58a98d9f87c901fb6636d2756c5a18e6a108eac62fd8ebf2ebdd92ac3af2f84e2\">CG_DEFERRED_PARAMETER_SETTING</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/* Compile and load the vertex program. */</span></div>\n\
<div class=\"line\">    m_VertexProfile = <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#ab20fd18cf7d726beaa9d7c36193c2a61\">cgGLGetLatestProfile</a>(<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#ad83071d7f7686bc85d28e22f1cb814afa33615e596fd493317631f9414afc42a7\">CG_GL_VERTEX</a>);</div>\n\
<div class=\"line\">    <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a21d2a26b50cce15f370d937c0172911c\">cgGLSetOptimalOptions</a>(m_VertexProfile);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the path to where the plug-in was loaded from</span></div>\n\
<div class=\"line\">    <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_dir.html\">QDir</a> pluginDir( <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;PluginDirectory(<span class=\"stringliteral\">&quot;ToonMaterial&quot;</span>) );</div>\n\
<div class=\"line\">    <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file_info.html\">QFileInfo</a> vertexPath( pluginDir, <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>(<span class=\"stringliteral\">&quot;toon_vertex.cg&quot;</span>) );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file_info.html\">QFileInfo</a> fragmentPath( pluginDir, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>(<span class=\"stringliteral\">&quot;toon_fragment.cg&quot;</span>) );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> qbaVertexPath = <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file.html#a548ef3f34e5265ca50980914ccabbfde\">QFile::encodeName</a>(vertexPath.filePath());</div>\n\
<div class=\"line\">    m_VertexProgram =</div>\n\
<div class=\"line\">        <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#ad11c69fae9409d44ff1494e57b620928\">cgCreateProgramFromFile</a>(</div>\n\
<div class=\"line\">          m_CGContext,              <span class=\"comment\">/* Cg runtime context */</span></div>\n\
<div class=\"line\">          <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a58a98d9f87c901fb6636d2756c5a18e6a8a81af23c02a7a32e5dfd0ca6dd83dec\">CG_SOURCE</a>,                <span class=\"comment\">/* Program in human-readable form */</span></div>\n\
<div class=\"line\">          qbaVertexPath.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html#acd2173722996016205933aa3053f895f\">constData</a>(),  <span class=\"comment\">/* Name of file containing program */</span></div>\n\
<div class=\"line\">          m_VertexProfile,        <span class=\"comment\">/* Profile: OpenGL ARB vertex program */</span></div>\n\
<div class=\"line\">          <span class=\"stringliteral\">&quot;main&quot;</span>,      <span class=\"comment\">/* Entry function name */</span></div>\n\
<div class=\"line\">          NULL);                    <span class=\"comment\">/* No extra commyPiler options */</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a3fdd0cf6161407c251ff13b7b31b470e\">cgGLLoadProgram</a>(m_VertexProgram);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_ModelViewProjParam = <a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aba225f7d8a697845c0054482492f6312\">cgGetNamedParameter</a>(m_VertexProgram, <span class=\"stringliteral\">&quot;modelViewProj&quot;</span>);</div>\n\
<div class=\"line\">    m_LightPositionParam = <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aba225f7d8a697845c0054482492f6312\">cgGetNamedParameter</a>(m_VertexProgram, <span class=\"stringliteral\">&quot;lightPosition&quot;</span>);</div>\n\
<div class=\"line\">    m_EyePositionParam = <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aba225f7d8a697845c0054482492f6312\">cgGetNamedParameter</a>(m_VertexProgram, <span class=\"stringliteral\">&quot;eyePosition&quot;</span>);</div>\n\
<div class=\"line\">    m_ShininessParam = <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aba225f7d8a697845c0054482492f6312\">cgGetNamedParameter</a>(m_VertexProgram, <span class=\"stringliteral\">&quot;shininess&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_FragmentProfile = <a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#ab20fd18cf7d726beaa9d7c36193c2a61\">cgGLGetLatestProfile</a>(<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#ad83071d7f7686bc85d28e22f1cb814afad69b6ec26c2fe834fae9a07f10be8104\">CG_GL_FRAGMENT</a>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a21d2a26b50cce15f370d937c0172911c\">cgGLSetOptimalOptions</a>(m_FragmentProfile);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">/* Compile and load the fragment program. */</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> qbaFragmentPath = <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file.html#a548ef3f34e5265ca50980914ccabbfde\">QFile::encodeName</a>(fragmentPath.filePath());</div>\n\
<div class=\"line\">    m_FragmentProgram =</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#ad11c69fae9409d44ff1494e57b620928\">cgCreateProgramFromFile</a>(</div>\n\
<div class=\"line\">          m_CGContext,                <span class=\"comment\">/* Cg runtime context */</span></div>\n\
<div class=\"line\">          <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a58a98d9f87c901fb6636d2756c5a18e6a8a81af23c02a7a32e5dfd0ca6dd83dec\">CG_SOURCE</a>,                  <span class=\"comment\">/* Program in human-readable form */</span></div>\n\
<div class=\"line\">          qbaFragmentPath.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html#acd2173722996016205933aa3053f895f\">constData</a>(),  <span class=\"comment\">/* Name of file containing program */</span></div>\n\
<div class=\"line\">          m_FragmentProfile,        <span class=\"comment\">/* Profile: OpenGL ARB vertex program */</span></div>\n\
<div class=\"line\">          <span class=\"stringliteral\">&quot;main&quot;</span>,      <span class=\"comment\">/* Entry function name */</span></div>\n\
<div class=\"line\">          NULL);                      <span class=\"comment\">/* No extra compiler options */</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a3fdd0cf6161407c251ff13b7b31b470e\">cgGLLoadProgram</a>(m_FragmentProgram);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_KdParam = <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aba225f7d8a697845c0054482492f6312\">cgGetNamedParameter</a>(m_FragmentProgram, <span class=\"stringliteral\">&quot;Kd&quot;</span>);</div>\n\
<div class=\"line\">    m_KsParam = <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aba225f7d8a697845c0054482492f6312\">cgGetNamedParameter</a>(m_FragmentProgram, <span class=\"stringliteral\">&quot;Ks&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_DiffuseRampParam = <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aba225f7d8a697845c0054482492f6312\">cgGetNamedParameter</a>(m_FragmentProgram, <span class=\"stringliteral\">&quot;diffuseRamp&quot;</span>);</div>\n\
<div class=\"line\">    m_SpecularRampParam = <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aba225f7d8a697845c0054482492f6312\">cgGetNamedParameter</a>(m_FragmentProgram, <span class=\"stringliteral\">&quot;specularRamp&quot;</span>);</div>\n\
<div class=\"line\">    m_EdgeRampParam = <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aba225f7d8a697845c0054482492f6312\">cgGetNamedParameter</a>(m_FragmentProgram, <span class=\"stringliteral\">&quot;edgeRamp&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    glGenTextures(1, &amp;m_iDiffuseRamp); <span class=\"comment\">// m_iDiffuseRamp = 1;</span></div>\n\
<div class=\"line\">    loadRamp(m_iDiffuseRamp, 255, diffuseRamp);</div>\n\
<div class=\"line\">    <a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#ac206ad0a97a994acdcd2558bbfce6216\">cgGLSetTextureParameter</a>(m_DiffuseRampParam, m_iDiffuseRamp);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    glGenTextures(1, &amp;m_iSpecularRamp); <span class=\"comment\">// m_iSpecularRamp = 2;</span></div>\n\
<div class=\"line\">    loadRamp(m_iSpecularRamp, 255, specularRamp);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#ac206ad0a97a994acdcd2558bbfce6216\">cgGLSetTextureParameter</a>(m_SpecularRampParam, m_iSpecularRamp);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    glGenTextures(1, &amp;m_iEdgeRamp); <span class=\"comment\">// m_iEdgeRamp = 3;</span></div>\n\
<div class=\"line\">    loadRamp(m_iEdgeRamp, 255, edgeRamp);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#ac206ad0a97a994acdcd2558bbfce6216\">cgGLSetTextureParameter</a>(m_EdgeRampParam, m_iEdgeRamp);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_aKd = Color(0.8<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, 0.6<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, 0.2<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, 1.0<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>);</div>\n\
<div class=\"line\">    m_aKs = Color(0.3<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, 0.3<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, 4.0<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, 0.0<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set min &amp; max of shininess slider.</span></div>\n\
<div class=\"line\">    m_aShininess.SetMax(25);</div>\n\
<div class=\"line\">    m_aShininess.SetMin(1);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_aShininess = 5.2f;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ToonMaterial::~ToonMaterial( <span class=\"keywordtype\">void</span> )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// This destroys all programs as well</span></div>\n\
<div class=\"line\">    <a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#aac74f65897d67c949df16b85475dca16\">cgDestroyContext</a>(m_CGContext);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Clean up</span></div>\n\
<div class=\"line\">    glDeleteTextures(1, &amp;m_iDiffuseRamp);</div>\n\
<div class=\"line\">    glDeleteTextures(1, &amp;m_iSpecularRamp);</div>\n\
<div class=\"line\">    glDeleteTextures(1, &amp;m_iEdgeRamp);</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> ToonMaterial::Activate( <span class=\"keyword\">const</span> Mesh *pMesh, <span class=\"keyword\">const</span> AxisAlignedBoundingBox &amp;cUVArea, <span class=\"keyword\">const</span> Color &amp;cColor )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!pMesh)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Enable the profiles</span></div>\n\
<div class=\"line\">    <a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a26c714fcbbf139071a5eb37ecffd4cbe\">cgGLEnableProfile</a>(m_VertexProfile);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a26c714fcbbf139071a5eb37ecffd4cbe\">cgGLEnableProfile</a>(m_FragmentProfile);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Bind the programs</span></div>\n\
<div class=\"line\">    <a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a5a566921e13982a1add1b7874d0b9d5d\">cgGLBindProgram</a>(m_VertexProgram);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#a5a566921e13982a1add1b7874d0b9d5d\">cgGLBindProgram</a>(m_FragmentProgram);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Ordinarily you&#39;d want to only set these values if they change.  For</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// this sample we&#39;ll just set them here.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#ae55ef4922e2b8566b51ff38709edad9b\">cgSetParameter4fv</a>(m_KdParam, m_aKd.Value());</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#ae55ef4922e2b8566b51ff38709edad9b\">cgSetParameter4fv</a>(m_KsParam, m_aKs.Value());</div>\n\
<div class=\"line\">    <a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a39b31fb362aa2f4d0dbee3a2267c547f\">cgSetParameter1f</a>(m_ShininessParam, m_aShininess.Value());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the light on the shader.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Mudbox supports both point &amp; directional lights.  If</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the first light is directional we&#39;ll push it out from</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the origin.  The shader assumes point light</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;LightCount())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        Light *pLight = <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;Light(0);</div>\n\
<div class=\"line\">        Vector <a name=\"a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>(0,0,1);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (pLight-&gt;Type() == Light::LIGHT_POINT)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a> = pLight-&gt;Transformation()-&gt;Position();</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (pLight-&gt;Type() == Light::LIGHT_DIRECTIONAL)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (pLight-&gt;IsLockedToCamera())</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a> = pLight-&gt;LockedToCameraMatrix().Transform(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a> = pLight-&gt;Transformation()-&gt;WorldToLocalMatrix().Invert().Transform(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>.Normalize();</div>\n\
<div class=\"line\">            <span class=\"comment\">// Scoot this away from the origin to give it the appearance of a</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// point light.</span></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>*=100;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a7ccb04b29610ce2f76878a1eddbd6907\">cgSetParameter3fv</a>(m_LightPositionParam, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a7ccb04b29610ce2f76878a1eddbd6907\">cgSetParameter3fv</a>(m_EyePositionParam, <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;ActiveCamera()-&gt;Position());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Matrix mModelViewProj = pMesh-&gt;Geometry()-&gt;Transformation()-&gt;LocalToWorldMatrix()*<a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;ActiveCamera()-&gt;Matrix(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    <a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#a4e99c0807b9c40c07706adc144723a31\">cgSetParameterValuefc</a>(m_ModelViewProjParam, 16, mModelViewProj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_8h.html#ab852a46031bb7d6d62e2348cd88ebd22\">cgUpdateProgramParameters</a>(m_VertexProgram);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ToonMaterial::Deactivate( <span class=\"keywordtype\">void</span> )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#afbf63baab60050650f15576b8161c689\">cgGLDisableProfile</a>(m_VertexProfile);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/cg_g_l_8h.html#afbf63baab60050650f15576b8161c689\">cgGLDisableProfile</a>(m_FragmentProfile);</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ToonMaterial::OnNodeEvent( <span class=\"keyword\">const</span> Attribute &amp;cAttribute, <a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a8d88d2a841f889dace76ffcd8d6b06da\">NodeEventType</a> cType )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> bRedraw = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(cType == <a name=\"a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a8d88d2a841f889dace76ffcd8d6b06daa274758890f9a27906be7336f4b8e4780\">etValueChanged</a>)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (cAttribute == m_aKs ||</div>\n\
<div class=\"line\">            cAttribute == m_aKd ||</div>\n\
<div class=\"line\">            cAttribute == m_aShininess)</div>\n\
<div class=\"line\">            bRedraw = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Material::OnNodeEvent( cAttribute, cType );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (bRedraw)</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Redraw();</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/* Callback function for loadRamp */</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">float</span> diffuseRamp(<span class=\"keywordtype\">float</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a09b61c9254503800358fe9680a997626\">x</a>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (x &gt; 0.5) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> x*x*(3-2*<a name=\"a38\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a09b61c9254503800358fe9680a997626\">x</a>);</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> 0.5f;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/* Callback function for loadRamp */</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">float</span> specularRamp(<span class=\"keywordtype\">float</span> x)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (x &gt; 0.2<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a09b61c9254503800358fe9680a997626\">x</a>;</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> 0.0f;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/* Callback function for loadRamp */</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">float</span> edgeRamp(<span class=\"keywordtype\">float</span> x)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (x &lt; 0.2<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> 1.0f;</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> 0.85f;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/* Create a 1D texture ramp by evaluating func over the range [0,1]. */</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> loadRamp(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a852415b1bb59365d80357c5f33e816c5\">GLuint</a> texobj, <span class=\"keywordtype\">int</span> size, <span class=\"keywordtype\">float</span> (*func)(<span class=\"keywordtype\">float</span> x))</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> bytesForRamp = size*<span class=\"keyword\">sizeof</span>(float);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> *ramp = (<span class=\"keywordtype\">float</span> *) malloc(bytesForRamp);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> *slot = ramp;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a33d2ecc01140a71bf38a16c8bf64dc18\">dx</a> = 1.0f / (float) size;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a09b61c9254503800358fe9680a997626\">x</a>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> i;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (i=0, x=0.0, slot=ramp; i&lt;<a name=\"a39\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">size</a>; i++, x += <a name=\"a40\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a33d2ecc01140a71bf38a16c8bf64dc18\">dx</a>, slot++) {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a> = func(x);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        *slot = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef GL_CLAMP_TO_EDGE</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define GL_CLAMP_TO_EDGE                  0x812F  </span><span class=\"comment\">/* Added by OpenGL 1.2 */</span><span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    glBindTexture(GL_TEXTURE_1D, texobj);</div>\n\
<div class=\"line\">    glTexImage1D(GL_TEXTURE_1D, 0, GL_INTENSITY16, size, 0, <a name=\"a41\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/qglfunctions_8h.html#a5ebfb7e4321ee2838cb17b10b8d44959\">GL_LUMINANCE</a>, <a name=\"a42\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/qglfunctions_8h.html#a6d19915d4237cb559505bd3e5dcfcf3c\">GL_FLOAT</a>, ramp);</div>\n\
<div class=\"line\">    glTexParameteri(GL_TEXTURE_1D, <a name=\"a43\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/qglfunctions_8h.html#a23a0bc2909cc2f79fe7287aaa044e880\">GL_TEXTURE_WRAP_S</a>, <a name=\"a44\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae90f81f48642444b4ba7fa5cacf40569\">GL_CLAMP_TO_EDGE</a>);</div>\n\
<div class=\"line\">    glTexParameteri(GL_TEXTURE_1D, <a name=\"a45\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/qglfunctions_8h.html#acb47a41b5963d44826f44b7370bccc26\">GL_TEXTURE_MAG_FILTER</a>, <a name=\"a46\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/qglfunctions_8h.html#a4e682f218130b98b27a1e33fa7325080\">GL_LINEAR</a>);</div>\n\
<div class=\"line\">    glTexParameteri(GL_TEXTURE_1D, <a name=\"a47\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/qglfunctions_8h.html#a173a2b2453322dd8d613df6cf2e72480\">GL_TEXTURE_MIN_FILTER</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/qglfunctions_8h.html#a4e682f218130b98b27a1e33fa7325080\">GL_LINEAR</a>);</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";