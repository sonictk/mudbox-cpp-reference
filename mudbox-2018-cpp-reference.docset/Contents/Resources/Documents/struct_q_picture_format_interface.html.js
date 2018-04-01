var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QPictureFormatInterface Struct Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_q_picture_format_interface.html\', tocPrefix);\n\
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
            <h1>QPictureFormatInterface Struct Reference</h1>\n\
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
<div class=\"title\">QPictureFormatInterface Struct Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"struct_q_picture_format_interface.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpictureformatplugin_8h_source.html\">qpictureformatplugin.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpictureformatplugin_8h_source.html#l00061\">61</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpictureformatplugin_8h_source.html\">qpictureformatplugin.h</a>.</p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for QPictureFormatInterface:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/struct_q_picture_format_interface.png\" usemap=\"#QPictureFormatInterface_map\" alt=\"\">\n\
  <map id=\"QPictureFormatInterface_map\" name=\"QPictureFormatInterface_map\">\n\
<area href=\"struct_q_factory_interface.html\" alt=\"QFactoryInterface\" shape=\"rect\" coords=\"0,0,151,24\">\n\
<area href=\"class_q_picture_format_plugin.html\" alt=\"QPictureFormatPlugin\" shape=\"rect\" coords=\"0,112,151,136\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:afcb1b476baf9ccf96f40584273707083\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_picture_format_interface.html#afcb1b476baf9ccf96f40584273707083\">loadPicture</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae2d3db041c6004a67047659b42f73a44\">format</a>, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;filename, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_picture.html\">QPicture</a> *)=0</td></tr>\n\
<tr class=\"separator:afcb1b476baf9ccf96f40584273707083\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aed3512a440ddaebf9d026a8267b50a0a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_picture_format_interface.html#aed3512a440ddaebf9d026a8267b50a0a\">savePicture</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae2d3db041c6004a67047659b42f73a44\">format</a>, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;filename, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_picture.html\">QPicture</a> &amp;)=0</td></tr>\n\
<tr class=\"separator:aed3512a440ddaebf9d026a8267b50a0a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a82f7d82e68eaa7d588b9e8f70654e44e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_picture_format_interface.html#a82f7d82e68eaa7d588b9e8f70654e44e\">installIOHandler</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;)=0</td></tr>\n\
<tr class=\"separator:a82f7d82e68eaa7d588b9e8f70654e44e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_struct_q_factory_interface\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_struct_q_factory_interface\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_factory_interface.html\">QFactoryInterface</a></td></tr>\n\
<tr class=\"memitem:a3dbc6dd38f8849fb06f2220c84343523 inherit pub_methods_struct_q_factory_interface\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_factory_interface.html#a3dbc6dd38f8849fb06f2220c84343523\">~QFactoryInterface</a> ()</td></tr>\n\
<tr class=\"separator:a3dbc6dd38f8849fb06f2220c84343523 inherit pub_methods_struct_q_factory_interface\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7ce45e61134677b59c19dc84a6ee4669 inherit pub_methods_struct_q_factory_interface\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_factory_interface.html#a7ce45e61134677b59c19dc84a6ee4669\">keys</a> () const  =0</td></tr>\n\
<tr class=\"separator:a7ce45e61134677b59c19dc84a6ee4669 inherit pub_methods_struct_q_factory_interface\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"afcb1b476baf9ccf96f40584273707083\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual bool loadPicture </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>format</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>filename</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_picture.html\">QPicture</a> *&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implemented in <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_picture_format_plugin.html#ac99e329f7b7b3d3613f46eb3dba08b82\">QPictureFormatPlugin</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aed3512a440ddaebf9d026a8267b50a0a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual bool savePicture </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>format</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>filename</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_picture.html\">QPicture</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implemented in <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_picture_format_plugin.html#adfab8549c8545df8c1e9e79963df1127\">QPictureFormatPlugin</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a82f7d82e68eaa7d588b9e8f70654e44e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">virtual bool installIOHandler </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implemented in <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_picture_format_plugin.html#a657439d788fe3fa6d0d70443eb21c783\">QPictureFormatPlugin</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this struct was generated from the following file:<ul>\n\
<li>QtGui/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpictureformatplugin_8h_source.html\">qpictureformatplugin.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";