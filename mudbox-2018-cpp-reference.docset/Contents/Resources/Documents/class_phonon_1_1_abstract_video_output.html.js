var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>AbstractVideoOutput Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_phonon_1_1_abstract_video_output.html\', tocPrefix);\n\
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
            <h1>AbstractVideoOutput Class Reference</h1>\n\
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
<div class=\"title\">AbstractVideoOutput Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_phonon_1_1_abstract_video_output.html#pro-methods\">Protected Member Functions</a> &#124;\n\
<a href=\"class_phonon_1_1_abstract_video_output.html#friends\">Friends</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/abstractvideooutput_8h_source.html\">Phonon/AbstractVideoOutput</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Common base class for all video outputs. </p>\n\
<dl class=\"section see\"><dt>See also</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html\" title=\"Widget to display video. \">VideoWidget</a> </dd></dl>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/abstractvideooutput_8h_source.html#l00053\">53</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/abstractvideooutput_8h_source.html\">abstractvideooutput.h</a>.</p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for AbstractVideoOutput:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/class_phonon_1_1_abstract_video_output.png\" usemap=\"#AbstractVideoOutput_map\" alt=\"\">\n\
  <map id=\"AbstractVideoOutput_map\" name=\"AbstractVideoOutput_map\">\n\
<area href=\"class_phonon_1_1_media_node.html\" alt=\"MediaNode\" shape=\"rect\" coords=\"0,0,129,24\">\n\
<area href=\"class_phonon_1_1_video_widget.html\" title=\"Widget to display video. \" alt=\"VideoWidget\" shape=\"rect\" coords=\"0,112,129,136\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pro-methods\"></a>\n\
Protected Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ad9d513dd4338f7f865332df2f3e078e6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_abstract_video_output.html#ad9d513dd4338f7f865332df2f3e078e6\">AbstractVideoOutput</a> (AbstractVideoOutputPrivate &amp;d)</td></tr>\n\
<tr class=\"separator:ad9d513dd4338f7f865332df2f3e078e6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pro_methods_class_phonon_1_1_media_node\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pro_methods_class_phonon_1_1_media_node\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Protected Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_node.html\">MediaNode</a></td></tr>\n\
<tr class=\"memitem:a5c901928f9c95265fb06ba809e507338 inherit pro_methods_class_phonon_1_1_media_node\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_node.html#a5c901928f9c95265fb06ba809e507338\">MediaNode</a> (MediaNodePrivate &amp;dd)</td></tr>\n\
<tr class=\"separator:a5c901928f9c95265fb06ba809e507338 inherit pro_methods_class_phonon_1_1_media_node\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:a2123bf6d906827da27f3faab15c68183\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_abstract_video_output.html#a2123bf6d906827da27f3faab15c68183\">Experimental::Visualization</a></td></tr>\n\
<tr class=\"separator:a2123bf6d906827da27f3faab15c68183\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a195c7cdde945e333eb5318f5f4c3d65d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_abstract_video_output.html#a195c7cdde945e333eb5318f5f4c3d65d\">Experimental::VisualizationPrivate</a></td></tr>\n\
<tr class=\"separator:a195c7cdde945e333eb5318f5f4c3d65d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pub_methods_class_phonon_1_1_media_node\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_phonon_1_1_media_node\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_node.html\">MediaNode</a></td></tr>\n\
<tr class=\"memitem:a64423eeeb1438e2022108c5b130a22de inherit pub_methods_class_phonon_1_1_media_node\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_node.html#a64423eeeb1438e2022108c5b130a22de\">~MediaNode</a> ()</td></tr>\n\
<tr class=\"separator:a64423eeeb1438e2022108c5b130a22de inherit pub_methods_class_phonon_1_1_media_node\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aac1b70a2ed67ead038c4d3f5ac4d8a81 inherit pub_methods_class_phonon_1_1_media_node\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_node.html#aac1b70a2ed67ead038c4d3f5ac4d8a81\">isValid</a> () const </td></tr>\n\
<tr class=\"memdesc:aac1b70a2ed67ead038c4d3f5ac4d8a81 inherit pub_methods_class_phonon_1_1_media_node\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Tells whether the backend provides an implementation of this class.  <a href=\"class_phonon_1_1_abstract_video_output.html#aac1b70a2ed67ead038c4d3f5ac4d8a81\">More...</a><br></td></tr>\n\
<tr class=\"separator:aac1b70a2ed67ead038c4d3f5ac4d8a81 inherit pub_methods_class_phonon_1_1_media_node\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae339324b50c608590d6aee99382336b5 inherit pub_methods_class_phonon_1_1_media_node\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_path.html\">Path</a> &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_node.html#ae339324b50c608590d6aee99382336b5\">inputPaths</a> () const </td></tr>\n\
<tr class=\"separator:ae339324b50c608590d6aee99382336b5 inherit pub_methods_class_phonon_1_1_media_node\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad3c03a9c796ca0bc6041b1d284b6cb88 inherit pub_methods_class_phonon_1_1_media_node\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>&lt; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_path.html\">Path</a> &gt;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_node.html#ad3c03a9c796ca0bc6041b1d284b6cb88\">outputPaths</a> () const </td></tr>\n\
<tr class=\"separator:ad3c03a9c796ca0bc6041b1d284b6cb88 inherit pub_methods_class_phonon_1_1_media_node\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pro_attribs_class_phonon_1_1_media_node\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pro_attribs_class_phonon_1_1_media_node\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Protected Attributes inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_node.html\">MediaNode</a></td></tr>\n\
<tr class=\"memitem:a6d1b243661a154ca1888feedd2b7103f inherit pro_attribs_class_phonon_1_1_media_node\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">MediaNodePrivate *const&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_node.html#a6d1b243661a154ca1888feedd2b7103f\">k_ptr</a></td></tr>\n\
<tr class=\"separator:a6d1b243661a154ca1888feedd2b7103f inherit pro_attribs_class_phonon_1_1_media_node\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ad9d513dd4338f7f865332df2f3e078e6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_phonon_1_1_abstract_video_output.html\">AbstractVideoOutput</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">AbstractVideoOutputPrivate &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>d</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">protected</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<p>Constructor that is called from derived classes.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">d</td><td>the private object </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Friends And Related Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a2123bf6d906827da27f3faab15c68183\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">friend class Experimental::Visualization</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">friend</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/abstractvideooutput_8h_source.html#l00055\">55</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/abstractvideooutput_8h_source.html\">abstractvideooutput.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a195c7cdde945e333eb5318f5f4c3d65d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">friend class Experimental::VisualizationPrivate</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">friend</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/abstractvideooutput_8h_source.html#l00056\">56</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/abstractvideooutput_8h_source.html\">abstractvideooutput.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>phonon/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/abstractvideooutput_8h_source.html\">abstractvideooutput.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";