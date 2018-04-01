var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>FileExtension Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classmudbox_1_1_file_extension.html\', tocPrefix);\n\
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
            <h1>FileExtension Class Reference</h1>\n\
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
<div class=\"title\">FileExtension Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classmudbox_1_1_file_extension.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"classmudbox_1_1_file_extension.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html\">importexport.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>This class encapsulates the file extension information for importers &amp; exporeters. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_p_l_y_import_2_importer_8cpp-example.html#_a8\">PLYImport/Importer.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_ptex_importer_2_ptex_importer_8h-example.html#_a5\">PtexImporter/PtexImporter.h</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_ptex_importer_2_ptex_paint_layer_importer_8h-example.html#_a5\">PtexImporter/PtexPaintLayerImporter.h</a>.</dd></div>\n\
</dl>\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html#l00018\">18</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html\">importexport.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:aa705cf7e79a21c2352b00ffe20cd295f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295f\">Flags</a> { <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295faa8ff69e8d2d1f72500fc510fc90312ad\">flagNoTextureCoordinates</a> = 1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295fac971a0a4501ecdbe9405f02716a3528d\">flagNoVertexColors</a> = 2, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295fa86eb9c844e8b35087158b054bf0fc256\">flagNoVertexNormals</a> = 4\n\
 }<tr class=\"separator:aa705cf7e79a21c2352b00ffe20cd295f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ab58557194b9c878f6e6916d705d613c9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#ab58557194b9c878f6e6916d705d613c9\">FileExtension</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>)</td></tr>\n\
<tr class=\"separator:ab58557194b9c878f6e6916d705d613c9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1f213fc90b4379323d7f43fb193d423c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#a1f213fc90b4379323d7f43fb193d423c\">FileExtension</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sExtension, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sDescription, enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html#ab4e88c89b3b7ea1735996cc4def22d58\">Image::Format</a> eImageFormat=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html#ab4e88c89b3b7ea1735996cc4def22d58a9b5dc9f36b7d7222c3ef1ca139c0b71a\">Image::eUnknown</a>)</td></tr>\n\
<tr class=\"separator:a1f213fc90b4379323d7f43fb193d423c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7883b1ae49a065440580ab2c53262887\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#a7883b1ae49a065440580ab2c53262887\">FileExtension</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sExtension, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sDescription, enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295f\">Flags</a> eFlags)</td></tr>\n\
<tr class=\"separator:a7883b1ae49a065440580ab2c53262887\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a75aa8b33b7a35d5b413b7034295e837e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#a75aa8b33b7a35d5b413b7034295e837e\">FileExtension</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html\">FileExtension</a> &amp;)</td></tr>\n\
<tr class=\"separator:a75aa8b33b7a35d5b413b7034295e837e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab281fee64b526df12c483a0e5021ab00\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#ab281fee64b526df12c483a0e5021ab00\">Extension</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>) const </td></tr>\n\
<tr class=\"separator:ab281fee64b526df12c483a0e5021ab00\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4442f492de31c2a52da584efb874e9ee\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#a4442f492de31c2a52da584efb874e9ee\">Description</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>) const </td></tr>\n\
<tr class=\"separator:a4442f492de31c2a52da584efb874e9ee\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3c16d06612ed6413a156d58094ef5a46\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html#ab4e88c89b3b7ea1735996cc4def22d58\">Image::Format</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#a3c16d06612ed6413a156d58094ef5a46\">ImageFormat</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>) const </td></tr>\n\
<tr class=\"separator:a3c16d06612ed6413a156d58094ef5a46\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a982ee316ac000dd7d2139dcb4ab2b7fe\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295f\">Flags</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#a982ee316ac000dd7d2139dcb4ab2b7fe\">Flags</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>)</td></tr>\n\
<tr class=\"separator:a982ee316ac000dd7d2139dcb4ab2b7fe\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"aa705cf7e79a21c2352b00ffe20cd295f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295f\">Flags</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"aa705cf7e79a21c2352b00ffe20cd295faa8ff69e8d2d1f72500fc510fc90312ad\"></a>flagNoTextureCoordinates&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"aa705cf7e79a21c2352b00ffe20cd295fac971a0a4501ecdbe9405f02716a3528d\"></a>flagNoVertexColors&#160;</td><td class=\"fielddoc\">\n\
<p>The file format does not contain texture coordinates. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"aa705cf7e79a21c2352b00ffe20cd295fa86eb9c844e8b35087158b054bf0fc256\"></a>flagNoVertexNormals&#160;</td><td class=\"fielddoc\">\n\
<p>The file format does not contain vertex colors. </p>\n\
</td></tr>\n\
</table>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html#l00021\">21</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html\">importexport.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295faa8ff69e8d2d1f72500fc510fc90312ad\">flagNoTextureCoordinates</a> = 1,   </div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295fac971a0a4501ecdbe9405f02716a3528d\">flagNoVertexColors</a> = 2,         </div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295fa86eb9c844e8b35087158b054bf0fc256\">flagNoVertexNormals</a> = 4         </div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;    };</div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_file_extension_html_aa705cf7e79a21c2352b00ffe20cd295fa86eb9c844e8b35087158b054bf0fc256\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295fa86eb9c844e8b35087158b054bf0fc256\">mudbox::FileExtension::flagNoVertexNormals</a></div><div class=\"ttdoc\">The file format does not contain vertex colors. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/importexport_8h_source.html#l00025\">importexport.h:25</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_file_extension_html_aa705cf7e79a21c2352b00ffe20cd295fac971a0a4501ecdbe9405f02716a3528d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295fac971a0a4501ecdbe9405f02716a3528d\">mudbox::FileExtension::flagNoVertexColors</a></div><div class=\"ttdoc\">The file format does not contain texture coordinates. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/importexport_8h_source.html#l00024\">importexport.h:24</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_file_extension_html_aa705cf7e79a21c2352b00ffe20cd295faa8ff69e8d2d1f72500fc510fc90312ad\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295faa8ff69e8d2d1f72500fc510fc90312ad\">mudbox::FileExtension::flagNoTextureCoordinates</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/importexport_8h_source.html#l00023\">importexport.h:23</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ab58557194b9c878f6e6916d705d613c9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html\">FileExtension</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html#l00035\">35</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html\">importexport.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;{};</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1f213fc90b4379323d7f43fb193d423c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html\">FileExtension</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>sExtension</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>sDescription</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html#ab4e88c89b3b7ea1735996cc4def22d58\">Image::Format</a>&#160;</td>\n\
          <td class=\"paramname\"><em>eImageFormat</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html#ab4e88c89b3b7ea1735996cc4def22d58a9b5dc9f36b7d7222c3ef1ca139c0b71a\">Image::eUnknown</a></code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7883b1ae49a065440580ab2c53262887\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html\">FileExtension</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>sExtension</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>sDescription</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295f\">Flags</a>&#160;</td>\n\
          <td class=\"paramname\"><em>eFlags</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a75aa8b33b7a35d5b413b7034295e837e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html\">FileExtension</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html\">FileExtension</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ab281fee64b526df12c483a0e5021ab00\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> Extension </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html#l00039\">39</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html\">importexport.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;{ <span class=\"keywordflow\">return</span> m_sExtension; }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4442f492de31c2a52da584efb874e9ee\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> Description </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html#l00040\">40</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html\">importexport.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;{ <span class=\"keywordflow\">return</span> m_sDescription; }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3c16d06612ed6413a156d58094ef5a46\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html#ab4e88c89b3b7ea1735996cc4def22d58\">Image::Format</a> ImageFormat </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html#l00041\">41</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html\">importexport.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;{ <span class=\"keywordflow\">return</span> m_eImageFormat; }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a982ee316ac000dd7d2139dcb4ab2b7fe\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295f\">Flags</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_file_extension.html#aa705cf7e79a21c2352b00ffe20cd295f\">Flags</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html#l00042\">42</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html\">importexport.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;{ <span class=\"keywordflow\">return</span> m_eFlags; };</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>Mudbox/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/importexport_8h_source.html\">importexport.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";