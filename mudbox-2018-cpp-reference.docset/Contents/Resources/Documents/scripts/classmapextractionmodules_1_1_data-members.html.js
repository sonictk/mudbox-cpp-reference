var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Member List</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classmapextractionmodules_1_1_data-members.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Member List</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">Data Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a74dfcb30f65e672f620237ec89d180a0\">As_Color</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a00697c14e7a5cd28f9260676ffd8eaff\">As_DblVector</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a0d99bd0958018f60593f900a65d3a18b\">As_double</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a98b74ecdc571813327d06c4a1aaca6ca\">As_float</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a0bfe93e536ca7411ae0cef7f8753f4b4\">As_int</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a528b6b9d15e8e3e3c263e443fd4c09c3\">As_Matrix</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#ab489fb1fcc145b3d615351904c52d351\">As_Quaternion</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a228fe3f3a09f479274ef085f55f081ef\">As_Vector</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a88f2e08a80066368481940297284f7be\">As_Vector4</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a966e658590ec098e0d60b8460c653317\">Data</a>(void)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#af334e5c556729cdfc6624063d6f2a325\">Data</a>(int r)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a00f5ea6ee40d16d60b6c8a52c552063d\">Data</a>(float r)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a7002e5c31b4c2fe28d90df77af9644d3\">Data</a>(double r)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a87e113e0dfbf033b2d13294178ca7582\">Data</a>(const mudbox::Color &amp;r)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#ad833fe8084752e7de671a27107cff3c4\">Data</a>(const mudbox::Vector &amp;r)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#ad6362b38f7dba98531321fe03da7001c\">Data</a>(const mudbox::DblVector &amp;r)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a3e2ea30925ee21937af9744b5acdeb84\">Data</a>(const mudbox::Vector4 &amp;r)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a99802a7c5a06872d30ffe03f901c2479\">Data</a>(const mudbox::Quaternion &amp;r)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a235be24ae1fd69981efab602e1efd67c\">Data</a>(const mudbox::Matrix &amp;r)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#aee72152388b911db0e92f72b28548e59\">IsValid</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#accca965c81dca4ab56f9cbc4fbf85814\">m_double</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a598a44514f3304dadb662a78231dd1d1\">m_float</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#aee883b8e2f4cba18602fc7b85cce5b22\">m_int</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html#a8a503ea8b57d562480e866d19f1ee484\">m_valid</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmapextractionmodules_1_1_data.html\">Data</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";