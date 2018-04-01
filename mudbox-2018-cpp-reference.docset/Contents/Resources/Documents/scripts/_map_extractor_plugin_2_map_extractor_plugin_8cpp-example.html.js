var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MapExtractorPlugin/MapExtractorPlugin.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_map_extractor_plugin_2_map_extractor_plugin_8cpp-example.html\', tocPrefix);\n\
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
            <h1>MapExtractorPlugin/MapExtractorPlugin.cpp</h1>\n\
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
<div class=\"title\">MapExtractorPlugin/MapExtractorPlugin.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2012 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: An example plugin that will set up custom attributes once</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              a new Map Extraction node is created.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CREATED: May 2012</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MapExtractorPlugin.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This line provides some information about the plugin to Mudbox. This can be used to</span></div>\n\
<div class=\"line\"><span class=\"comment\">// specify a function which will be called once all the plugins are loaded.</span></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#afa2df46a730e8fc8bceb9410c0ff6838\">MB_PLUGIN</a>( <span class=\"stringliteral\">&quot;Map Extractor&quot;</span>, <span class=\"stringliteral\">&quot;Custom settings on Map Extaction&quot;</span>, <span class=\"stringliteral\">&quot;Autodesk&quot;</span>, <span class=\"stringliteral\">&quot;http://www.mudbox3d.com&quot;</span>, MapExtractorPlugin::Initializer );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/node_8h.html#a1d51ad935ab5d26fe95dff62601b602c\">IMPLEMENT_CLASS</a>( MapExtractorPlugin, Node, <span class=\"stringliteral\">&quot;MapExtractorPlugin&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#abacfec97c78c141ff43c55356db38ca3\">abool</a> *s_bEnableMapExtractor;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">MapExtractorPlugin *g_cMapExtractorPlugin;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> MapExtractorPlugin::Initializer()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> bEnable = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a new boolean preference in the File section o fthe preferences window. This</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// preference can be used to turn this plug-in on and off. </span></div>\n\
<div class=\"line\">    s_bEnableMapExtractor = <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Preferences()-&gt;RegisterBoolVariable(<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/i18n_8h.html#aa4e0fec95bdcbdcbe9b3140339e17771\">NTR</a>(<span class=\"stringliteral\">&quot;Custom Map Extract Options&quot;</span>), <a class=\"code\" href=\"#!/url=./cpp_ref/i18n_8h.html#aa4e0fec95bdcbdcbe9b3140339e17771\">NTR</a>(<span class=\"stringliteral\">&quot;Files&quot;</span>), </div>\n\
<div class=\"line\">        QObject::tr(<span class=\"stringliteral\">&quot;Customize Map Extraction Options on startup&quot;</span>), QObject::tr(<span class=\"stringliteral\">&quot;Files&quot;</span>), bEnable);</div>\n\
<div class=\"line\">    s_bEnableMapExtractor-&gt;SetVisible(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    g_cMapExtractorPlugin = CreateInstance&lt;MapExtractorPlugin&gt;();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Connect our own constructed scene member event (m_pSceneMembershipEvent) to the source scene member event.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Once these events are conneced, any time certain nodes are added to the main scene, the OnNodeEvent of this node </span></div>\n\
<div class=\"line\"><span class=\"comment\">// will be called. </span></div>\n\
<div class=\"line\">MapExtractorPlugin::MapExtractorPlugin() : m_pSceneMembershipEvent(this, <span class=\"stringliteral\">&quot;SceneMembershipEvent&quot;</span> )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    m_pSceneMembershipEvent.Connect( <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;SceneMembershipEvent );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This is where the map extraction creation event is caught and its values changed</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> MapExtractorPlugin::OnNodeEvent( <span class=\"keyword\">const</span> Attribute &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a>, <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a8d88d2a841f889dace76ffcd8d6b06da\">NodeEventType</a> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a> )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( a == m_pSceneMembershipEvent &amp;&amp; t == <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a8d88d2a841f889dace76ffcd8d6b06daa368d47c248c8014e637874410c721c86\">etEventTriggered</a> &amp;&amp; </div>\n\
<div class=\"line\">        m_pSceneMembershipEvent.Value() &amp;&amp;</div>\n\
<div class=\"line\">        m_pSceneMembershipEvent-&gt;m_pNode.Value() &amp;&amp;</div>\n\
<div class=\"line\">        <span class=\"comment\">// Check if the node we have is the right type - In this case, it is checking if the node is derived </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// from a map extractor class, which is the main class involved in map extraction</span></div>\n\
<div class=\"line\">        m_pSceneMembershipEvent-&gt;m_pNode-&gt;RuntimeClass()-&gt;IsDerivedFrom( mapextractionmodules::MapExtractor::StaticClass() ) &amp;&amp;</div>\n\
<div class=\"line\">        m_pSceneMembershipEvent-&gt;m_eType == SceneMembershipEventNotifier::eAboutToAdd</div>\n\
<div class=\"line\">        )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Catch the event node, set it to a pointer, then downcast it from </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// a base &#39;node&#39; class to the more useful &#39;MapExtractor&#39; class</span></div>\n\
<div class=\"line\">        <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_map_extractor.html\">mapextractionmodules::MapExtractor</a> *pG = <span class=\"keyword\">dynamic_cast&lt;</span><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_map_extractor.html\">mapextractionmodules::MapExtractor</a> *<span class=\"keyword\">&gt;</span>(m_pSceneMembershipEvent-&gt;m_pNode.Value());</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">        <span class=\"comment\">// This call uses our MapExtractor class to obtain a pointer to its Extractor class, </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// enabling us to use the functions in the MapExtracorAPI</span></div>\n\
<div class=\"line\">        <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html\">mapextraction::Extractor</a> eC( pG );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Each map extractor node has its base values as well as a few Samplers.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// These Samplers are what control the values of each &#39;tab&#39; in the map</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// extractor option box. </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// Here, we can select and choose which Sampler we want to have a pointer to</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// so that we can enable/alter its values. Comment out or delete any Samplers </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// that you do not need or will not use. </span></div>\n\
<div class=\"line\">        <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_normal_sampler.html\">mapextraction::NormalSampler</a> nC = eC.NormalSampler();</div>\n\
<div class=\"line\">        <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_ambient_occlusion_sampler.html\">mapextraction::AmbientOcclusionSampler</a> aoC = eC.AmbientOcclusionSampler();</div>\n\
<div class=\"line\">        <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_vector_displacement_sampler.html\">mapextraction::VectorDisplacementSampler</a> vdC = eC.VectorDisplacementSampler();</div>\n\
<div class=\"line\">        <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_displacement_sampler.html\">mapextraction::DisplacementSampler</a> dC = eC.DisplacementSampler();</div>\n\
<div class=\"line\">        <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_paint_layer_sampler.html\">mapextraction::PaintLayerSampler</a> plsC = eC.PaintLayerSampler();</div>\n\
<div class=\"line\">        <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_sculpt_layer_sampler.html\">mapextraction::SculptLayerSampler</a> slsC = eC.SculptLayerSampler();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Call any functions to change the initial setup of a map extraction node.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// In this example each Sampler is split into seperate functions so as to distinguish the </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// changes easier. To add/remove any function, look in the MapExtractionPlugin </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// class in the MapExtractorPlugin.h file. </span></div>\n\
<div class=\"line\">        changeBasicSettings(eC);</div>\n\
<div class=\"line\">        changeNormalSettings(nC);</div>\n\
<div class=\"line\">        changeAmbientSettings(aoC);</div>\n\
<div class=\"line\">        changeDisplacementSettings(dC); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}   </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Each of the following functions takes a Sampler and changes the initial values for it. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Each Sampler has various settings that can be changed. Take a look at the MapExtractorAPI.h file</span></div>\n\
<div class=\"line\"><span class=\"comment\">// in the plugins folder for a full list of settings that can be changed for each Sampler. </span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Change basic values for the extraction operation</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> MapExtractorPlugin::changeBasicSettings( <a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html\">mapextraction::Extractor</a> eC)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Take all geometry in the scene and put them</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// into the source/target geometry box of the texture extraction operation</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the number of mesh objects in the scene </span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> meshcount = <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;GeometryCount();</div>\n\
<div class=\"line\">    <span class=\"comment\">// Set how large we want our source/target array to be (sets the </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// maximum amount of geometry the box can hold)</span></div>\n\
<div class=\"line\">    eC.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#a1bd028d0d26c5878eab66234c90232e6\">SetSourceCount</a>(meshcount);</div>\n\
<div class=\"line\">    eC.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#a7dfefbd8d23c8d74152296975025a561\">SetTargetCount</a>(meshcount);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Create an empty pointer to a Geometry node</span></div>\n\
<div class=\"line\">    Geometry *sG;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Iterate through every geometry in the scene, adding each one to the source/target box, </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// with their respective highest/lowest subdivision level </span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a> = 0; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a> &lt; meshcount; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a>++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        sG = <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;Geometry( <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a> );</div>\n\
<div class=\"line\">        eC.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#a41c642288aedcee5bc010c1c9a3b7c06\">SetSource</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a>, sG-&gt;HighestLevel() );</div>\n\
<div class=\"line\">        eC.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#a0932b52a706e6abb08f20a9cb909f468\">SetTarget</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a>, sG-&gt;LowestLevel() );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the &#39;Smooth Source Models&#39; option to true</span></div>\n\
<div class=\"line\">    eC.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#a79cf53ff2150f8fbf5726078b0cf324b\">SetSourceSmoothing</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the &#39;Smooth Target Models&#39; option to false</span></div>\n\
<div class=\"line\">    eC.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#a4559fd7b43abf6e8f6aff61e31cd065e\">SetTargetSmoothing</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the &#39;Use Creases &amp; Hard Edges&#39; option to false</span></div>\n\
<div class=\"line\">    eC.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#adbc92b623724863e5c0263b1fd729e0b\">SetTargetCreases</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the antialiasing to 8X</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a82d91d561d6f7a80a9d878821168e7f0\">mapextraction::Antialiasing</a> eAntialiasing(<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a82d91d561d6f7a80a9d878821168e7f0a9d39bea9be5b18324b8e162991d68b43\">mapextraction::aa8X</a>);</div>\n\
<div class=\"line\">    eC.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#a99fba19d01c37bc34096b4b94d9f843f\">SetAntialiasing</a>(eAntialiasing);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// It is possible to set custom width/hight values for the extraction operation.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Note, however, that the UI will not update to represent these custom values.</span></div>\n\
<div class=\"line\">    eC.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#afda5eb693882563e04619049c5bcebd8\">SetMapWidth</a>(512);</div>\n\
<div class=\"line\">    eC.<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#ace62f7f2a3180345d6f265392b1e493e\">SetMapHeight</a>(1024);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set &#39;Method&#39; to Raycasting</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a434f56cff1b621d17b787d6b80719baf\">mapextraction::LocateMethod</a> eLocateMethod(<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a434f56cff1b621d17b787d6b80719bafaa4218cbedf494bb1bb50efd3e0716989\">mapextraction::locRaycast</a>);</div>\n\
<div class=\"line\">    eC.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#a6809b54488c3d87df3bb3e94b1dc89df\">SetLocateMethod</a>(eLocateMethod);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Set &#39;Choose Samples&#39; to &#39;Closest to lowres mesh&#39;</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a68753490b7d14ebe7a4aa8ca4b8a22c4\">mapextraction::Sampling</a> eSampling(<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a68753490b7d14ebe7a4aa8ca4b8a22c4af96b36ea02bf3aaed7d50d63f10a6bc8\">mapextraction::sampleClosesToTarget</a>);</div>\n\
<div class=\"line\">    eC.<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#a78797ca1ab5ae7c3b19cf9f184b0a580\">SetSampling</a>(eSampling);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Set &#39;Search Distance&#39;</span></div>\n\
<div class=\"line\">    eC.<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#a6b0b66780700a4bdd3e40fa732626aca\">SetSearchDistance</a>(20.5<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Set &#39;Test Both Sides&#39; option to true</span></div>\n\
<div class=\"line\">    eC.<a name=\"a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_extractor.html#add0617eb372d93e9ee7362dce4efd4c4\">SetTestBothSides</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Change settings in the &#39;Normal Map&#39; Sampler for the extraction operation</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> MapExtractorPlugin::changeNormalSettings( <a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_normal_sampler.html\">mapextraction::NormalSampler</a> nC)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//Enable the normal map Sampler of the map extraction operation</span></div>\n\
<div class=\"line\">    nC.<a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_sampler.html#aa53921f9a0d7cdeca641adab213e7dff\">SetEnabled</a>( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set file name of the normal map that will be extracted</span></div>\n\
<div class=\"line\">    <a name=\"_a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> fileName = <span class=\"stringliteral\">&quot;MyNormalMap&quot;</span>;</div>\n\
<div class=\"line\">    nC.<a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_sampler.html#a8c15a31fd36c2e19af48eed76d7ced04\">SetFileName</a>(fileName);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Change settings in the &#39;Ambient Occlusion Map&#39; Sampler for the extraction operation</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> MapExtractorPlugin::changeAmbientSettings( <a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_ambient_occlusion_sampler.html\">mapextraction::AmbientOcclusionSampler</a> aoC)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//Enable the ambient occlusion Sampler of the map extraction operation</span></div>\n\
<div class=\"line\">    aoC.<a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_sampler.html#aa53921f9a0d7cdeca641adab213e7dff\">SetEnabled</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//Set the quality of the output map </span></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a9d3c952348bd69bfa0edecb1cf446894\">mapextraction::Quality</a> eQuality(<a name=\"a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a9d3c952348bd69bfa0edecb1cf446894a819343c9f3150de4effd5cbe509071b8\">mapextraction::qualFastest</a>);</div>\n\
<div class=\"line\">    aoC.<a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_ambient_occlusion_sampler.html#a4eb2747c261f0daad5a5bdaf47944d06\">SetQuality</a>(eQuality);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//Set the resolution of the Shadow Map</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a3c1fc1369ee351f25804c8cde5e85ac3\">mapextraction::Resolution</a> eResolution(<a name=\"a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemapextraction.html#a3c1fc1369ee351f25804c8cde5e85ac3a4e5f4b387505f644487efa90489befa2\">mapextraction::res512</a>);</div>\n\
<div class=\"line\">    aoC.<a name=\"a38\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_ambient_occlusion_sampler.html#a38b89b54bf4a98892f4065dda49307fb\">SetShadowMapresolution</a>(eResolution);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set file name of the ambient map that will be extracted</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> fileName = <span class=\"stringliteral\">&quot;MyAmbientMap&quot;</span>;</div>\n\
<div class=\"line\">    aoC.<a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_sampler.html#a8c15a31fd36c2e19af48eed76d7ced04\">SetFileName</a>(fileName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the &#39;Shadow Darkness&#39;</span></div>\n\
<div class=\"line\">    aoC.<a name=\"a39\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_ambient_occlusion_sampler.html#a2c6643d8f52c67d446f5b54bf11726cf\">SetShadowDarkness</a>(1.70<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the &#39;Shadow Contrast&#39;</span></div>\n\
<div class=\"line\">    aoC.<a name=\"a40\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_ambient_occlusion_sampler.html#a9f0dcd42d8a3494d1122e7d1a2853d7c\">SetShadowContrast</a>(0.50<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>);</div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the &#39;Filter&#39;</span></div>\n\
<div class=\"line\">    aoC.<a name=\"a41\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_ambient_occlusion_sampler.html#aad12fb9e329dc790c40851778f68430c\">SetFilter</a>(0.01<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Change settings in the Displacement Sampler of the extraction operation</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> MapExtractorPlugin::changeDisplacementSettings( <a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_displacement_sampler.html\">mapextraction::DisplacementSampler</a> dC)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//Enable the displacement Sampler of the map extraction operation</span></div>\n\
<div class=\"line\">    dC.<a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_sampler.html#aa53921f9a0d7cdeca641adab213e7dff\">SetEnabled</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set file name of the displacement map that will be extracted</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> fileName = <span class=\"stringliteral\">&quot;MyDisplacementMap&quot;</span>;</div>\n\
<div class=\"line\">    dC.<a class=\"code\" href=\"#!/url=./cpp_ref/classmapextraction_1_1_sampler.html#a8c15a31fd36c2e19af48eed76d7ced04\">SetFileName</a>(fileName);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">  </div>\n\
<div class=\"line\">    </div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";