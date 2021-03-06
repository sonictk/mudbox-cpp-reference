var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>SpatialGrid::VoxelIterator Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classmudbox_1_1_spatial_grid_1_1_voxel_iterator.html\', tocPrefix);\n\
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
            <h1>SpatialGrid::VoxelIterator Class Reference</h1>\n\
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
<div class=\"title\">SpatialGrid::VoxelIterator Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classmudbox_1_1_spatial_grid_1_1_voxel_iterator.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h_source.html\">mesh.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h_source.html#l01346\">1346</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h_source.html\">mesh.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a3d9d22025c6b025b5c234a75a5e5270a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_spatial_grid_1_1_voxel_iterator.html#a3d9d22025c6b025b5c234a75a5e5270a\">VoxelIterator</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_extendable_store.html\">ExtendableStore</a>&lt; unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> &gt; &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>)</td></tr>\n\
<tr class=\"separator:a3d9d22025c6b025b5c234a75a5e5270a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a041249f802c5bf4c2deae666610e03c4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_spatial_grid_1_1_voxel_iterator.html#a041249f802c5bf4c2deae666610e03c4\">next</a> ()</td></tr>\n\
<tr class=\"separator:a041249f802c5bf4c2deae666610e03c4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:add4bf50abae421d88b5549de6c11fc75\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_spatial_grid_1_1_voxel_iterator.html#add4bf50abae421d88b5549de6c11fc75\">isDone</a> () const </td></tr>\n\
<tr class=\"separator:add4bf50abae421d88b5549de6c11fc75\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9c700d82243f3dab810c4fe4b390341f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_spatial_grid_1_1_voxel_iterator.html#a9c700d82243f3dab810c4fe4b390341f\">value</a> () const </td></tr>\n\
<tr class=\"separator:a9c700d82243f3dab810c4fe4b390341f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a3d9d22025c6b025b5c234a75a5e5270a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_spatial_grid_1_1_voxel_iterator.html\">VoxelIterator</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_extendable_store.html\">ExtendableStore</a>&lt; unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> &gt; &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>data</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h_source.html#l01349\">1349</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h_source.html\">mesh.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l01349\"></a><span class=\"lineno\"> 1349</span>&#160;                                                                  : fData(data), fIndex(0)</div>\n\
<div class=\"line\"><a name=\"l01350\"></a><span class=\"lineno\"> 1350</span>&#160;        {</div>\n\
<div class=\"line\"><a name=\"l01351\"></a><span class=\"lineno\"> 1351</span>&#160;            <span class=\"keywordflow\">if</span>( fData.<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_extendable_store.html#a1c179c3d1d1263b5510ef110a0bc1eed\">ItemCount</a>() &gt; 0 &amp;&amp; fData[fIndex] == <a class=\"code\" href=\"#!/url=./cpp_ref/mesh_8h.html#a483b0a38edf0c10ef4a7cb633dc8a9fc\">INVALID_ID</a> )</div>\n\
<div class=\"line\"><a name=\"l01352\"></a><span class=\"lineno\"> 1352</span>&#160;                <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_spatial_grid_1_1_voxel_iterator.html#a041249f802c5bf4c2deae666610e03c4\">next</a>();</div>\n\
<div class=\"line\"><a name=\"l01353\"></a><span class=\"lineno\"> 1353</span>&#160;        }</div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_spatial_grid_1_1_voxel_iterator_html_a041249f802c5bf4c2deae666610e03c4\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_spatial_grid_1_1_voxel_iterator.html#a041249f802c5bf4c2deae666610e03c4\">mudbox::SpatialGrid::VoxelIterator::next</a></div><div class=\"ttdeci\">void next()</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/mesh_8h_source.html#l01355\">mesh.h:1355</a></div></div>\n\
<div class=\"ttc\" id=\"mesh_8h_html_a483b0a38edf0c10ef4a7cb633dc8a9fc\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/mesh_8h.html#a483b0a38edf0c10ef4a7cb633dc8a9fc\">INVALID_ID</a></div><div class=\"ttdeci\">#define INVALID_ID</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/mesh_8h_source.html#l00047\">mesh.h:47</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_extendable_store_html_a1c179c3d1d1263b5510ef110a0bc1eed\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_extendable_store.html#a1c179c3d1d1263b5510ef110a0bc1eed\">mudbox::ExtendableStore::ItemCount</a></div><div class=\"ttdeci\">unsigned int ItemCount() const </div><div class=\"ttdoc\">Returns the number of items in the array. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/array_8h_source.html#l00718\">array.h:718</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a041249f802c5bf4c2deae666610e03c4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> next </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h_source.html#l01355\">1355</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h_source.html\">mesh.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l01355\"></a><span class=\"lineno\"> 1355</span>&#160;{ <span class=\"keywordflow\">while</span>( ++fIndex &lt; fData.<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_extendable_store.html#a1c179c3d1d1263b5510ef110a0bc1eed\">ItemCount</a>() &amp;&amp; fData[fIndex] == <a class=\"code\" href=\"#!/url=./cpp_ref/mesh_8h.html#a483b0a38edf0c10ef4a7cb633dc8a9fc\">INVALID_ID</a> ); }</div>\n\
<div class=\"ttc\" id=\"mesh_8h_html_a483b0a38edf0c10ef4a7cb633dc8a9fc\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/mesh_8h.html#a483b0a38edf0c10ef4a7cb633dc8a9fc\">INVALID_ID</a></div><div class=\"ttdeci\">#define INVALID_ID</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/mesh_8h_source.html#l00047\">mesh.h:47</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_extendable_store_html_a1c179c3d1d1263b5510ef110a0bc1eed\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_extendable_store.html#a1c179c3d1d1263b5510ef110a0bc1eed\">mudbox::ExtendableStore::ItemCount</a></div><div class=\"ttdeci\">unsigned int ItemCount() const </div><div class=\"ttdoc\">Returns the number of items in the array. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/array_8h_source.html#l00718\">array.h:718</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"add4bf50abae421d88b5549de6c11fc75\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool isDone </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h_source.html#l01356\">1356</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h_source.html\">mesh.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l01356\"></a><span class=\"lineno\"> 1356</span>&#160;{ <span class=\"keywordflow\">return</span> fIndex &gt;= fData.<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_extendable_store.html#a1c179c3d1d1263b5510ef110a0bc1eed\">ItemCount</a>(); }</div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_extendable_store_html_a1c179c3d1d1263b5510ef110a0bc1eed\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_extendable_store.html#a1c179c3d1d1263b5510ef110a0bc1eed\">mudbox::ExtendableStore::ItemCount</a></div><div class=\"ttdeci\">unsigned int ItemCount() const </div><div class=\"ttdoc\">Returns the number of items in the array. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/array_8h_source.html#l00718\">array.h:718</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9c700d82243f3dab810c4fe4b390341f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h_source.html#l01357\">1357</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h_source.html\">mesh.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l01357\"></a><span class=\"lineno\"> 1357</span>&#160;{ <span class=\"keywordflow\">return</span> fData[fIndex]; }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>Mudbox/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mesh_8h_source.html\">mesh.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";