var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>PtexExtractor/PtexUtilizer.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_ptex_extractor_2_ptex_utilizer_8h-example.html\', tocPrefix);\n\
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
            <h1>PtexExtractor/PtexUtilizer.h</h1>\n\
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
<div class=\"title\">PtexExtractor/PtexUtilizer.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2010 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CREATED: August 2010</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(JAMBUILD)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html\">Mudbox/mudbox.h</a>&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/_map_extractor_interface_8h.html\">MapExtractor/MapExtractorInterface.h</a>&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;../../include/Mudbox/mudbox.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;../../include/MapExtractor/MapExtractorInterface.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;PtexLayout.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;ptex/Ptexture.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">using namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html\">mudbox</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This class is responsible to utilize the result of the map extraction for each reference points. In case of a ptex exraction, this means writing the data into a ptex file.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// There will be a separated instance of this class during the extraction process for each enabled Sampler (one for displacement, one for ambient occlusion etc..).</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The main function in this class must be thread safe, which makes the things a bit more complicated. The extraction process uses multiple threads.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PtexUtilizer : <span class=\"keyword\">public</span> Utilizer</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// The following structure holds data for a single base level face.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>FaceData</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        FaceData( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> iWidth, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> iHeight, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> iChannelCount );</div>\n\
<div class=\"line\">        <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_vector.html\">QVector&lt;float&gt;</a> m_aData;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> m_iSamplesLeft;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> m_iWidth;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> m_iHeight;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/node_8h.html#a431009564592a24e5f46f5df421131a1\">DECLARE_CLASS</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> Format</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        eFormat8bitInteger,</div>\n\
<div class=\"line\">        eFormat16bitInteger,</div>\n\
<div class=\"line\">        eFormat16bitFloat,</div>\n\
<div class=\"line\">        eFormat32bitFloat</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    PtexUtilizer( <span class=\"keywordtype\">void</span> );</div>\n\
<div class=\"line\">    <span class=\"comment\">// Catch general events happening with attributes.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> OnNodeEvent( <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_attribute.html\">Attribute</a> &amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a8d88d2a841f889dace76ffcd8d6b06da\">NodeEventType</a> );</div>\n\
<div class=\"line\">    <span class=\"comment\">// This function must return a string which represents the extraction type. This will appear on the UI.</span></div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> MapTypeName( <span class=\"keywordtype\">void</span> )<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> QObject::tr(<span class=\"stringliteral\">&quot;Ptex&quot;</span>); };</div>\n\
<div class=\"line\">    <span class=\"comment\">// This function lets the class decide which type of layout it wants to use. In this case we use out own layout class, PtexLayout.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> Layout *CreateLayout( <span class=\"keywordtype\">void</span> ) { <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> PtexLayout; };</div>\n\
<div class=\"line\">    <span class=\"comment\">// This is the main function, this is called by the framework once for each reference point. This function must be thread safe.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> StoreData( <span class=\"keyword\">const</span> Data &amp;cData, <span class=\"keyword\">const</span> TargetLocation &amp;cTarget, <span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_surface_point.html\">SurfacePoint</a> &amp; );</div>\n\
<div class=\"line\">    <span class=\"comment\">// This function lets the class respond to some special events.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> OnPhaseEvent( <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemapextractionmodules.html#a0d06a52f518448d061f6d90f5a0eae60\">PhaseEventType</a> );</div>\n\
<div class=\"line\">    <span class=\"comment\">// When the map extraction node is stored in a mud file, this function must seriaize the state of the object. This is never called during a map extraction operation.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> Serialize( <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_stream.html\">Stream</a> &amp; );</div>\n\
<div class=\"line\">    <span class=\"comment\">// Report valid only if we have a filename.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> IsValid( <span class=\"keywordtype\">void</span> ) { <span class=\"keywordflow\">return</span> !m_sFileName.Value().isEmpty() &amp;&amp; Utilizer::IsValid(); };</div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the format of the file written.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">inline</span> <span class=\"keywordtype\">void</span> SetFormat( Format eFormat ) { m_eFormat = eFormat; };</div>\n\
<div class=\"line\">    <span class=\"comment\">// In this function we store the address of the layout object to be accessed it in the future.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> Prepare( Layout *, <span class=\"keyword\">class</span> Sampler * );</div>\n\
<div class=\"line\">    <span class=\"comment\">// This function is called to initialize the user interface for the utilizer.</span></div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_widget.html\">QWidget</a> *UserInterface( <span class=\"keywordtype\">void</span> );</div>\n\
<div class=\"line\">    <span class=\"comment\">// This function writes the metadata for the mesh to an open ptex file.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> WriteMeshData( PtexWriter *pWriter, <span class=\"keyword\">const</span> <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *pMesh );</div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// This function creates and opens a new ptx file for the given mesh.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> OpenFile( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *pMesh );</div>\n\
<div class=\"line\">    <span class=\"comment\">// This function closes the lastly opened ptx file.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> CloseFile( <span class=\"keywordtype\">void</span> ); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The mesh which is currently being processed.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *m_pMesh;</div>\n\
<div class=\"line\">    <span class=\"comment\">// The PtexWriter object which is being used for the current mesh.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>PtexWriter *m_pWriter;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Number of faces written to the ptex file.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> m_iPtexFaceCount;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Array of the faces in the current mesh.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_vector.html\">QVector&lt;FaceData *&gt;</a> m_aFaces;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Number of channels which must be written to the file for each pixel.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> m_iChannelCount;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Format of the data.</span></div>\n\
<div class=\"line\">    <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_attribute_enumeration.html\">aenum</a> m_eFormat;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Name of the file which is produced.</span></div>\n\
<div class=\"line\">    <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_attribute_filename.html\">afilename</a> m_sFileName;</div>\n\
<div class=\"line\">    <span class=\"comment\">// This attribute controls if the mesh topology data should be written to the file or not. This should always be true, added mainly for demonstration purposes.</span></div>\n\
<div class=\"line\">    <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_attribute_instance.html\">abool</a> m_bIncludeMeshData;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Number of faces processed.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> m_iFacesProcessed;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Pointer to the current layout, this is used only when the target mesh is nsided.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> PtexLayout *m_pLayout;</div>\n\
<div class=\"line\">    <span class=\"comment\">// This member variable contains the default path for the generated texture files.</span></div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_attribute_instance.html\">astring</a> m_sFilePath;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";