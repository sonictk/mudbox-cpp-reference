var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MeshBuilder/MeshBuilder.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_mesh_builder_2_mesh_builder_8cpp-example.html\', tocPrefix);\n\
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
            <h1>MeshBuilder/MeshBuilder.cpp</h1>\n\
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
<div class=\"title\">MeshBuilder/MeshBuilder.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2011 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: Mesh Builder</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CREATED: May 2011</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\">                            </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtCore/QObject&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MeshBuilder.h&quot;</span>  </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">using namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html\">mudbox</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Register this plugin. The &quot;Initializer&quot; method will be called when the plugin is loaded.</span></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#afa2df46a730e8fc8bceb9410c0ff6838\">MB_PLUGIN</a>( <span class=\"stringliteral\">&quot;MeshBuilder&quot;</span>, <span class=\"stringliteral\">&quot;Build Simple Meshes&quot;</span>, <span class=\"stringliteral\">&quot;Autodesk&quot;</span>, <span class=\"stringliteral\">&quot;http://www.mudbox3d.com&quot;</span>, Initializer );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This function will be called then the plugin is loaded.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> Initializer(<span class=\"keywordtype\">void</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Add a menu entry for this operation.</span></div>\n\
<div class=\"line\">    <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Interface()-&gt;AddCallbackMenuItem( <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_interface.html#a75dffb986226e7d78cd9d9d5f13c1f20\">mudbox::Interface::menuMesh</a>, <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a1c01d8792db2181fbe1987637b31790f\">QString::null</a>, QObject::tr(<span class=\"stringliteral\">&quot;Build Simple Meshes&quot;</span>), Execute);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> Execute(<span class=\"keywordtype\">void</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Build the triangle plane mesh object, and name it.</span></div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *pTriPlane = BuildTrianglePlane();</div>\n\
<div class=\"line\">    pTriPlane-&gt;<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#abbcb71bef5b8aa8a2a9fe8997eb04711\">SetName</a>(<span class=\"stringliteral\">&quot;TriPlane&quot;</span>); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a geometry object, which will be used as a container class for the mesh.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// The geometry class can hold multiple levels of mesh.</span></div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_geometry.html\">Geometry</a> *pGeoPlane = CreateInstance&lt;Geometry&gt;();</div>\n\
<div class=\"line\">    pGeoPlane-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#abbcb71bef5b8aa8a2a9fe8997eb04711\">SetName</a>(<span class=\"stringliteral\">&quot;TriPlane Geometry&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Add the mesh that you created to the geometry object.  This mesh</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// is now the &quot;level 0&quot; mesh of the geometry.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_subdivision_level.html\">SubdivisionLevel</a> *pTriPlaneSL = dynamic_cast&lt;SubdivisionLevel *&gt;(pTriPlane))</div>\n\
<div class=\"line\">    {   </div>\n\
<div class=\"line\">        <span class=\"comment\">// This mesh can be subdivided to add additional levels; </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// use the &quot;Mesh&quot;-&gt;&quot;Add New Subdivision Level&quot; menu item.</span></div>\n\
<div class=\"line\">        pGeoPlane-&gt;<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_geometry.html#accde2061c10dd40d0a95ab81a4eaca46\">AddLevel</a>(pTriPlaneSL); </div>\n\
<div class=\"line\">        pGeoPlane-&gt;<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_geometry.html#af9aeb9bf2355be1630be59f22b2b91e7\">SetActiveLevel</a>(pTriPlaneSL);  </div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"comment\">// Add the newly-created triangle plane to the scene.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;AddGeometry(pGeoPlane);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Next, we build the quad cube mesh, and create a new geometry object</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// to hold it.  This is the same as above.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *pQuadCube = BuildQuadCube();</div>\n\
<div class=\"line\">    pQuadCube-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#abbcb71bef5b8aa8a2a9fe8997eb04711\">SetName</a>(<span class=\"stringliteral\">&quot;QuadCube&quot;</span>); </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_geometry.html\">Geometry</a> *pGeoCube = <span class=\"keyword\">dynamic_cast&lt;</span><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_geometry.html\">Geometry</a> *<span class=\"keyword\">&gt;</span>(Geometry::CreateInstances());</div>\n\
<div class=\"line\">    pGeoCube-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#abbcb71bef5b8aa8a2a9fe8997eb04711\">SetName</a>(<span class=\"stringliteral\">&quot;QuadCube Geometry&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_subdivision_level.html\">SubdivisionLevel</a> *pQuadCubeSL0 = <span class=\"keyword\">dynamic_cast&lt;</span><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_subdivision_level.html\">SubdivisionLevel</a> *<span class=\"keyword\">&gt;</span>(pQuadCube);</div>\n\
<div class=\"line\">    <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#a24f4fe4a32c8501c3cae26db72954a30\">MB_ASSERT</a>(pQuadCubeSL0);</div>\n\
<div class=\"line\">    pGeoCube-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_geometry.html#accde2061c10dd40d0a95ab81a4eaca46\">AddLevel</a>(pQuadCubeSL0); <span class=\"comment\">// to be level 0</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Now we are going to create some additional subdivision levels for this cube</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// manually, to demonstrate how this can be done.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_subdivision_level.html\">SubdivisionLevel</a> *pQuadCubeSL1 = pQuadCubeSL0-&gt;<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_subdivision_level.html#acc3fb9f13638d080bcfaf1e6b2226406\">Subdivide</a>(<span class=\"keyword\">false</span>, <span class=\"keyword\">false</span>, <span class=\"keyword\">false</span>); <span class=\"comment\">// Linear subdivision. </span></div>\n\
<div class=\"line\">    pGeoCube-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_geometry.html#accde2061c10dd40d0a95ab81a4eaca46\">AddLevel</a>(pQuadCubeSL1); <span class=\"comment\">// to be level 1</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_subdivision_level.html\">SubdivisionLevel</a> *pQuadCubeSL2 = pQuadCubeSL1-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_subdivision_level.html#acc3fb9f13638d080bcfaf1e6b2226406\">Subdivide</a>(<span class=\"keyword\">false</span>, <span class=\"keyword\">true</span>, <span class=\"keyword\">false</span>); <span class=\"comment\">// Catmull-Clark subdivision. </span></div>\n\
<div class=\"line\">    pGeoCube-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_geometry.html#accde2061c10dd40d0a95ab81a4eaca46\">AddLevel</a>(pQuadCubeSL2); <span class=\"comment\">// to be level 2</span></div>\n\
<div class=\"line\">    pGeoCube-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_geometry.html#af9aeb9bf2355be1630be59f22b2b91e7\">SetActiveLevel</a>(pQuadCubeSL2);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;AddGeometry(pGeoCube);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;SetActiveGeometry(pGeoCube);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;ViewPort()-&gt;Redraw(); <span class=\"comment\">// redraw the 3d view to display the new objects</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Interface()-&gt;RefreshUI();        <span class=\"comment\">// ensure that the new geometries will appear in the Object List.</span></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *BuildTrianglePlane()</div>\n\
<div class=\"line\"><span class=\"comment\">// This method creates a mesh object comprising a triangle plane.</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Create an empty mesh object.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *pMesh = <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;CreateMesh(<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#a461eba4998b5d5dac48d6102c8c63beca8458eba8ae564ca5f914a2f93eedeaed\">Topology::typeTriangular</a>);  </div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#a24f4fe4a32c8501c3cae26db72954a30\">MB_ASSERT</a>(pMesh-&gt;<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#a1c6866eae75d162686577daec0dcd69a\">VertexCount</a>()       == 0);  <span class=\"comment\">// demonstrating that there are no vertices (yet)</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#a24f4fe4a32c8501c3cae26db72954a30\">MB_ASSERT</a>(pMesh-&gt;<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#afbfdc020e4cfba7f54965cd581132507\">VertexNormalCount</a>() == 0);  <span class=\"comment\">// and no normals</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#a24f4fe4a32c8501c3cae26db72954a30\">MB_ASSERT</a>(pMesh-&gt;<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#ab5b1ed93307ed69199ed8b84df406763\">TCCount</a>()           == 0);  <span class=\"comment\">// and no texture coordinates (UVs)</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#a24f4fe4a32c8501c3cae26db72954a30\">MB_ASSERT</a>(pMesh-&gt;<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#a0e35b2c17d86dbf3d35d45e055f1954d\">FaceCount</a>()         == 0);  <span class=\"comment\">// and no faces</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a list of vertices for the mesh (required). Each face has</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// a 3d coordinate.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//v3______ v2</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  |    /|</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  |  /  |</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//v0|/____|v1</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#acce0c98815a83a951ca634dbe39e2e24\">SetVertexCount</a>(4);</div>\n\
<div class=\"line\">    pMesh-&gt;<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#aa0fb4993513e43516770e8a0e7386712\">SetVertexPosition</a>(0, <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>(-400, 0, 0));   </div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#aa0fb4993513e43516770e8a0e7386712\">SetVertexPosition</a>(1, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>(-200, 0, 0));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#aa0fb4993513e43516770e8a0e7386712\">SetVertexPosition</a>(2, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>(-200, 200, 0));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#aa0fb4993513e43516770e8a0e7386712\">SetVertexPosition</a>(3, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>(-400, 200, 0));</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#a24f4fe4a32c8501c3cae26db72954a30\">MB_ASSERT</a>(pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#a1c6866eae75d162686577daec0dcd69a\">VertexCount</a>() == 4);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a list of faces (required).  Each face is a list of indices</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// into the vertex list, defining the corners of the face, counter-clockwise.</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#ac8eb33fd4176fbcf3a49dd96f94be339\">SetFaceCount</a>(2);            <span class=\"comment\">// create 2 faces</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The arguments to this next method are:</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//     The index of the face;</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//     Which corner of the face (a number from 0 to 2)</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//     The index of the vertex in the vertex list</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aef15606384943e298d2f67a04fbf770c\">SetTriangleIndex</a>(0, 0, 0);  <span class=\"comment\">// triangle one.</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aef15606384943e298d2f67a04fbf770c\">SetTriangleIndex</a>(0, 1, 1);</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aef15606384943e298d2f67a04fbf770c\">SetTriangleIndex</a>(0, 2, 2);</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aef15606384943e298d2f67a04fbf770c\">SetTriangleIndex</a>(1, 0, 0);  <span class=\"comment\">// triangle two.</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aef15606384943e298d2f67a04fbf770c\">SetTriangleIndex</a>(1, 1, 2);</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aef15606384943e298d2f67a04fbf770c\">SetTriangleIndex</a>(1, 2, 3);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#a24f4fe4a32c8501c3cae26db72954a30\">MB_ASSERT</a>(pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#a0e35b2c17d86dbf3d35d45e055f1954d\">FaceCount</a>() == 2);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Optionally, you can add texture coordinates (UVs) to your</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// mesh programmatically.  (If you don&#39;t, you can always add them</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// later using the menu command &quot;Mesh&quot; &gt; &quot;Create UVs&quot;.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//   t3______ t4        t5</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  |    /       /|</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  |  /       /  |</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//   t0|/     t1/____| t2</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// A texture coordinate is set for each corner of each face in the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// mesh.  Note that the same texture coordinate can be shared by</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// all the faces sharing a vertex.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// First, make your list of texture coordinates.</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#a6ece1be3b6e31d62281f6ce4bf361b38\">SetTCCount</a>(6);</div>\n\
<div class=\"line\">    pMesh-&gt;<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#afc3d735536e5f451a16df83aa185b433\">SetVertexTC</a>(0, <a name=\"_a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_t_c.html\">TC</a>(0.1<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, 0.1<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>)); <span class=\"comment\">// TC not allow to cross 1,2,3,...</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#afc3d735536e5f451a16df83aa185b433\">SetVertexTC</a>(1, <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_t_c.html\">TC</a>(1.1<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, 0.1<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#afc3d735536e5f451a16df83aa185b433\">SetVertexTC</a>(2, <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_t_c.html\">TC</a>(1.9<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, 0.1<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#afc3d735536e5f451a16df83aa185b433\">SetVertexTC</a>(3, <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_t_c.html\">TC</a>(0.1<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, 0.9<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#afc3d735536e5f451a16df83aa185b433\">SetVertexTC</a>(4, <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_t_c.html\">TC</a>(0.9<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, 0.9<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#afc3d735536e5f451a16df83aa185b433\">SetVertexTC</a>(5, <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_t_c.html\">TC</a>(1.9<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, 0.9<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>));</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#a24f4fe4a32c8501c3cae26db72954a30\">MB_ASSERT</a>(pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#ab5b1ed93307ed69199ed8b84df406763\">TCCount</a>() == 6); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Now, point the corners of each triangular face into the texture</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// coordinate list.  The arguments to this method are:</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//     - the index of the face</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//     - the number of the face corner (from 0 to 2)</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//     - the index into the list of texture coordinates</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aa800cdae831c69e57109470f5eda0e76\">SetTriangleTCI</a>(0, 0, 0);</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aa800cdae831c69e57109470f5eda0e76\">SetTriangleTCI</a>(0, 1, 4);</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aa800cdae831c69e57109470f5eda0e76\">SetTriangleTCI</a>(0, 2, 3);</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aa800cdae831c69e57109470f5eda0e76\">SetTriangleTCI</a>(1, 0, 1);</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aa800cdae831c69e57109470f5eda0e76\">SetTriangleTCI</a>(1, 1, 2);</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#aa800cdae831c69e57109470f5eda0e76\">SetTriangleTCI</a>(1, 2, 5);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#a24f4fe4a32c8501c3cae26db72954a30\">MB_ASSERT</a>(pMesh-&gt;<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#a5dee0e5e872cb5e162b5dd59f6f85c62\">HasTC</a>() == <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    <span class=\"comment\">// Build the internal tables that tell us which faces are beside which others.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// (This is required)</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#a57ffbe5c13bcfe051e767d418c856225\">RecalculateAdjacency</a>(); </div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Calculate the normals (you don&#39;t need to set them manually, although that is also an option.)</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#a0a7fe0e41a785cf3305a8b4105029a14\">RecalculateNormals</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> pMesh;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *BuildQuadCube()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Create an empty mesh object</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *pMesh = <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Scene()-&gt;CreateMesh(<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#a461eba4998b5d5dac48d6102c8c63beca390d96966d786eb4e11035e9439f755e\">Topology::typeQuadric</a>);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Add a list of 8 vertices to it</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#acce0c98815a83a951ca634dbe39e2e24\">SetVertexCount</a>(8); </div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#aa0fb4993513e43516770e8a0e7386712\">SetVertexPosition</a>(0, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>(100, 0, 300));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#aa0fb4993513e43516770e8a0e7386712\">SetVertexPosition</a>(1, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>(300, 0, 300));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#aa0fb4993513e43516770e8a0e7386712\">SetVertexPosition</a>(2, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>(300, 0, 100));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#aa0fb4993513e43516770e8a0e7386712\">SetVertexPosition</a>(3, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>(100, 0, 100));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#aa0fb4993513e43516770e8a0e7386712\">SetVertexPosition</a>(4, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>(100, 200, 300));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#aa0fb4993513e43516770e8a0e7386712\">SetVertexPosition</a>(5, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>(300, 200, 300));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#aa0fb4993513e43516770e8a0e7386712\">SetVertexPosition</a>(6, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>(300, 200, 100));</div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#aa0fb4993513e43516770e8a0e7386712\">SetVertexPosition</a>(7, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>(100, 200, 100));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create the 6 faces of the cube.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Each face is a list of indices into the vertex list, defining</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the corners of the face, counter-clockwise.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#ac8eb33fd4176fbcf3a49dd96f94be339\">SetFaceCount</a>(6);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> aFaceIndices[] = {</div>\n\
<div class=\"line\">        0, 1, 5, 4, 2, 3, 7, 6, 1, 2, 6, 5, 3, 0, 4, 7, 4, 5, 6, 7, 1, 0, 3, 2</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> iFIdx = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> iF = 0; iF &lt; 6; ++iF)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        pMesh-&gt;<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#a6134366cd9bdad39c85e80a1853189c9\">SetQuadIndex</a>(iF, 0, aFaceIndices[iFIdx++]);</div>\n\
<div class=\"line\">        pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#a6134366cd9bdad39c85e80a1853189c9\">SetQuadIndex</a>(iF, 1, aFaceIndices[iFIdx++]);</div>\n\
<div class=\"line\">        pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#a6134366cd9bdad39c85e80a1853189c9\">SetQuadIndex</a>(iF, 2, aFaceIndices[iFIdx++]);</div>\n\
<div class=\"line\">        pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_topology.html#a6134366cd9bdad39c85e80a1853189c9\">SetQuadIndex</a>(iF, 3, aFaceIndices[iFIdx++]);</div>\n\
<div class=\"line\">    }    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Build the internal tables that tell us which faces are beside which others.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// (This is required)</span></div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#a57ffbe5c13bcfe051e767d418c856225\">RecalculateAdjacency</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Calculate the normals </span></div>\n\
<div class=\"line\">    pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#a0a7fe0e41a785cf3305a8b4105029a14\">RecalculateNormals</a>(); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#a24f4fe4a32c8501c3cae26db72954a30\">MB_ASSERT</a>(pMesh-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html#a5dee0e5e872cb5e162b5dd59f6f85c62\">HasTC</a>() == <span class=\"keyword\">false</span>); <span class=\"comment\">// we don&#39;t set the tc values of this mesh manually.</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> pMesh; </div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";