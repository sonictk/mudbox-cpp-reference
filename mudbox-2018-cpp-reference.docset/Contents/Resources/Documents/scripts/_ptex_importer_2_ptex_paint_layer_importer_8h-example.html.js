var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>PtexImporter/PtexPaintLayerImporter.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_ptex_importer_2_ptex_paint_layer_importer_8h-example.html\', tocPrefix);\n\
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
            <h1>PtexImporter/PtexPaintLayerImporter.h</h1>\n\
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
<div class=\"title\">PtexImporter/PtexPaintLayerImporter.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#if !defined PTEX_PAINT_LAYER_IMPORTER</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define PTEX_PAINT_LAYER_IMPORTER</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2011, 2012 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: PTEX texture importer</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CREATED: January 2011</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(JAMBUILD) || defined(__APPLE__)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html\">Mudbox/mudbox.h</a>&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/_u_v_generator_interface_8h.html\">UVlessPainting/UVGeneratorInterface.h</a>&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/_edge_bleeding_8h.html\">EdgeBleeding/EdgeBleeding.h</a>&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;../../include/Mudbox/mudbox.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;../../include/UVlessPainting/UVGeneratorInterface.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;../../include/EdgeBleeding/EdgeBleeding.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;ptex/Ptexture.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;PtexImporter.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">using namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html\">mudbox</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PtexPaintLayerImporter : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_paint_layer_importer.html\">PaintLayerImporter</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/qcoreapplication_8h.html#af36246d0c49dc6f1d54e495dd2c0a4ef\">Q_DECLARE_TR_FUNCTIONS</a>(PtexPaintLayerImporter);</div>\n\
<div class=\"line\">    <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/node_8h.html#a431009564592a24e5f46f5df421131a1\">DECLARE_CLASS</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    PtexPaintLayerImporter() : m_Importer(0) {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Returns the file extension and description of the supported file by the plugin.</span></div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_vector.html\">QVector&lt;FileExtension&gt;</a> SupportedExtensions( <span class=\"keywordtype\">void</span> )<span class=\"keyword\"> const </span></div>\n\
<div class=\"line\"><span class=\"keyword\">        </span>{ <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_vector.html\">QVector&lt;FileExtension&gt;</a> ret; </div>\n\
<div class=\"line\">          ret.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_vector.html#ab32da790af34509a87008eacf308e3f6\">push_back</a>(<a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html\">FileExtension</a>(<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/i18n_8h.html#aa4e0fec95bdcbdcbe9b3140339e17771\">NTR</a>(<span class=\"stringliteral\">&quot;ptx&quot;</span>), tr(<span class=\"stringliteral\">&quot;Ptex File&quot;</span>), </div>\n\
<div class=\"line\">                                      <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295faa8ff69e8d2d1f72500fc510fc90312ad\">FileExtension::flagNoTextureCoordinates</a>)); </div>\n\
<div class=\"line\">          <span class=\"keywordflow\">return</span> ret; </div>\n\
<div class=\"line\">        };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> Prepare( <span class=\"keyword\">const</span> <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sFileName, <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *pMesh, <span class=\"keywordtype\">bool</span> bAsMask, <span class=\"keywordtype\">bool</span> bSilentMode );</div>\n\
<div class=\"line\">    <span class=\"comment\">// Import a file, main function of the class.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> Import( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sFileName, <span class=\"keywordtype\">int</span> iFileTypeIndex, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *pMesh, <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture_pool.html\">TexturePool</a> *pTargetPool );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Setup mesh for Ptex painting when necessary</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> SetPtexImporter(PtexImporter *ptImporter)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        m_Importer  = ptImporter;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// This function reads the texture data from a ptex file to an existing </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// mesh with existing compatible UV layout.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> LoadPtexTexture( PtexTexture *, <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_texture_pool.html\">TexturePool</a> *, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *, <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_u_v_generator_node.html\">UVGeneratorNode</a> * );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Load the color data from a ptex texture for a given face.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span> &lt;<span class=\"keyword\">typename</span> eFormat, const <span class=\"keywordtype\">int</span> iMax&gt;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> *PrepareFaceBuffer( PtexTexture  *pTexture, </div>\n\
<div class=\"line\">                             <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>  pTexSubFaceIndex, </div>\n\
<div class=\"line\">                             <span class=\"keywordtype\">char</span> iDirection, <span class=\"keywordtype\">bool</span> bSwapUV );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    PtexImporter *m_Importer;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";