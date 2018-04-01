var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Mudbox/selectionset.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'selectionset_8h_source.html\', tocPrefix);\n\
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
            <h1>Mudbox/selectionset.h Source File</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">selectionset.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/selectionset_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"comment\">// Copyright (c) 2008 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"comment\">// CREATED: June 2009</span></div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"keyword\">namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html\">mudbox</a> {</div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html\">   19</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html\">SelectionSet</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#acb766c5246456bdf00e141ddf4d23759\">   22</a></span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#acb766c5246456bdf00e141ddf4d23759\">DECLARE_CLASS</a>;</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html\">SelectionSet</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sName = <span class=\"stringliteral\">&quot;&quot;</span> );  </div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/structmudbox_1_1_selection_set_1_1_mesh_info.html\">   36</a></span>&#160;    <span class=\"keyword\">struct </span><a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_selection_set_1_1_mesh_info.html\">MeshInfo</a> </div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_selection_set_1_1_mesh_info.html\">MeshInfo</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *pM );</div>\n\
<div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/structmudbox_1_1_selection_set_1_1_mesh_info.html#ac4e066c3fc28a8693e18e251bf681607\">   39</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *<a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_selection_set_1_1_mesh_info.html#ac4e066c3fc28a8693e18e251bf681607\">m_pMesh</a>;</div>\n\
<div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/structmudbox_1_1_selection_set_1_1_mesh_info.html#af75e2c071eef3f6fbf34683d49381c6d\">   40</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_store.html\">Store&lt;unsigned int&gt;</a> <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_selection_set_1_1_mesh_info.html#af75e2c071eef3f6fbf34683d49381c6d\">m_aFaces</a>;</div>\n\
<div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;    };</div>\n\
<div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\">   46</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_selection_set_1_1_mesh_info.html\">MeshInfo</a> *AddMesh( <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">Mesh</a> *pMesh );</div>\n\
<div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;    <span class=\"keywordtype\">void</span> SetVisible( <span class=\"keywordtype\">bool</span> bVisible );</div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;    <span class=\"keywordtype\">void</span> Serialize( <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_stream.html\">Stream</a> &amp; );</div>\n\
<div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#ad3073d6e1492fb34a662bdc21c50fa65\">   55</a></span>&#160;    <span class=\"keyword\">inline</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;MeshInfo*&gt;</a>&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#ad3073d6e1492fb34a662bdc21c50fa65\">MeshInfos</a>() { <span class=\"keywordflow\">return</span> m_lMeshInfos; }</div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\">   57</span>&#160;    <span class=\"comment\">// internal use only. do not use.</span></div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#aefcb1c6f4c3e82f2951d876e14760d6b\">   58</a></span>&#160;    <span class=\"keyword\">inline</span> <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#aefcb1c6f4c3e82f2951d876e14760d6b\">Active</a>() { <span class=\"keywordflow\">return</span> m_bActive; }</div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;    <span class=\"comment\">// internal use only. do not use.</span></div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#a809dddea4ac3d288c9e35ad9f8197e42\">   61</a></span>&#160;    <span class=\"keyword\">inline</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#a809dddea4ac3d288c9e35ad9f8197e42\">SetActive</a>( <span class=\"keywordtype\">bool</span> bActive ) { m_bActive = bActive; }</div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;<span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#adb9bf0dea2ae4cd68df1f02cba98cb7b\">   64</a></span>&#160;    <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#adb9bf0dea2ae4cd68df1f02cba98cb7b\">m_bActive</a>;</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#aaf187e331be723278429d13d2f1e3daf\">   65</a></span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;MeshInfo *&gt;</a> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#aaf187e331be723278429d13d2f1e3daf\">m_lMeshInfos</a>;</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;}; <span class=\"comment\">// end of namespace mudbox</span></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_store_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_store.html\">mudbox::Store&lt; unsigned int &gt;</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_mesh_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_mesh.html\">mudbox::Mesh</a></div><div class=\"ttdoc\">A Mesh is a collection of vertices organized into faces, and optional Texture Coordinate information...</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/mesh_8h_source.html#l00452\">mesh.h:452</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_selection_set_html_ad3073d6e1492fb34a662bdc21c50fa65\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#ad3073d6e1492fb34a662bdc21c50fa65\">mudbox::SelectionSet::MeshInfos</a></div><div class=\"ttdeci\">QList&lt; MeshInfo * &gt; &amp; MeshInfos()</div><div class=\"ttdoc\">Accessor for the array of members of this collection. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/selectionset_8h_source.html#l00055\">selectionset.h:55</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_selection_set_html_adb9bf0dea2ae4cd68df1f02cba98cb7b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#adb9bf0dea2ae4cd68df1f02cba98cb7b\">mudbox::SelectionSet::m_bActive</a></div><div class=\"ttdeci\">bool m_bActive</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/selectionset_8h_source.html#l00064\">selectionset.h:64</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_selection_set_html_aaf187e331be723278429d13d2f1e3daf\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#aaf187e331be723278429d13d2f1e3daf\">mudbox::SelectionSet::m_lMeshInfos</a></div><div class=\"ttdeci\">QList&lt; MeshInfo * &gt; m_lMeshInfos</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/selectionset_8h_source.html#l00065\">selectionset.h:65</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_selection_set_html_aefcb1c6f4c3e82f2951d876e14760d6b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#aefcb1c6f4c3e82f2951d876e14760d6b\">mudbox::SelectionSet::Active</a></div><div class=\"ttdeci\">bool Active()</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/selectionset_8h_source.html#l00058\">selectionset.h:58</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_selection_set_1_1_mesh_info_html_ac4e066c3fc28a8693e18e251bf681607\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_selection_set_1_1_mesh_info.html#ac4e066c3fc28a8693e18e251bf681607\">mudbox::SelectionSet::MeshInfo::m_pMesh</a></div><div class=\"ttdeci\">Mesh * m_pMesh</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/selectionset_8h_source.html#l00039\">selectionset.h:39</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_selection_set_html_acb766c5246456bdf00e141ddf4d23759\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#acb766c5246456bdf00e141ddf4d23759\">mudbox::SelectionSet::DECLARE_CLASS</a></div><div class=\"ttdeci\">DECLARE_CLASS</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/selectionset_8h_source.html#l00022\">selectionset.h:22</a></div></div>\n\
<div class=\"ttc\" id=\"namespacemudbox_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespacemudbox.html\">mudbox</a></div><div class=\"ttdoc\">Class: ConvolutionKernel. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/array_8h_source.html#l00015\">array.h:15</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_tree_node_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">mudbox::TreeNode</a></div><div class=\"ttdoc\">This class is the base of all node types that can be structured in a hierarchy. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/treenode_8h_source.html#l00018\">treenode.h:18</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_selection_set_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html\">mudbox::SelectionSet</a></div><div class=\"ttdoc\">This class represents a collection of faces among one or more mesh objects. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/selectionset_8h_source.html#l00019\">selectionset.h:19</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00083\">qstring.h:83</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/backendcapabilities_8h_source.html#l00040\">backendcapabilities.h:40</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_selection_set_1_1_mesh_info_html_af75e2c071eef3f6fbf34683d49381c6d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_selection_set_1_1_mesh_info.html#af75e2c071eef3f6fbf34683d49381c6d\">mudbox::SelectionSet::MeshInfo::m_aFaces</a></div><div class=\"ttdeci\">Store&lt; unsigned int &gt; m_aFaces</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/selectionset_8h_source.html#l00040\">selectionset.h:40</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_stream_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_stream.html\">mudbox::Stream</a></div><div class=\"ttdoc\">Streams are used to read information from a file, or to write it to a file. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/stream_8h_source.html#l00039\">stream.h:39</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_selection_set_1_1_mesh_info_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_selection_set_1_1_mesh_info.html\">mudbox::SelectionSet::MeshInfo</a></div><div class=\"ttdoc\">This structure holds the collection of faces for a given mesh. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/selectionset_8h_source.html#l00036\">selectionset.h:36</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_selection_set_html_a809dddea4ac3d288c9e35ad9f8197e42\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_selection_set.html#a809dddea4ac3d288c9e35ad9f8197e42\">mudbox::SelectionSet::SetActive</a></div><div class=\"ttdeci\">void SetActive(bool bActive)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/selectionset_8h_source.html#l00061\">selectionset.h:61</a></div></div>\n\
<div class=\"ttc\" id=\"dllinterface_8h_html_aecc26481a5bdb4445048f4fb0f3bb417\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a></div><div class=\"ttdeci\">#define MBDLL_DECL</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/dllinterface_8h_source.html#l00035\">dllinterface.h:35</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";