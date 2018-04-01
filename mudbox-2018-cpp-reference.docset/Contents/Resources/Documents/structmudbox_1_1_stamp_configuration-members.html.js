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
    cpp_ref_adsk_ref_toc.initNavTree(\'structmudbox_1_1_stamp_configuration-members.html\', tocPrefix);\n\
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
<div class=\"title\">StampConfiguration Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#adb9bf0dea2ae4cd68df1f02cba98cb7b\">m_bActive</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#ab939b945c8b2e6983eee084ff0fb376b\">m_bFlipX</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#a8d803f647929c8ee8b59d93c87bd27e2\">m_bFlipY</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#acc1b1b76bf3c486373db3d2429d073d1\">m_bOrientToStroke</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#a4679ed4c10fde5c4cde2d35ec64e7759\">m_bRandomize</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#ae9521f774e17f31e5b1b685b34433768\">m_bRandomizeFlipX</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#a89aff0acc5c7522097f0ef2146591182\">m_bRandomizeFlipY</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#a3ef05f982f8c6817735c39e1000cd4f2\">m_bStretch</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#a3984ebb90c7b7578dd114f3fa01dfbdc\">m_fRandomizePositionX</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#a52cb8abb8417ecb5ae8c979b32720a5f\">m_fRandomizePositionY</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#ac64107bfb39d5915ae062f7aa8d57e49\">m_fRandomizeRotation</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#ad1a8d77c57652dfb1bb9087aa038cda8\">m_fRandomizeScale</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#a580bd895f0c5f99bb91d4b8b51617e1c\">m_fRandomizeStrength</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#a346e05d962d3c6a209dec3195e7b07c7\">m_fRotation</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#aa5603817903bc54bcfc6f1667a9368d2\">m_sFileName</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#af514a6a216dddc8ad1e6298a911487a3\">operator!=</a>(const StampConfiguration &amp;v) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#a4855e0547412827d34cfbdf0d3dcf3a4\">operator==</a>(const StampConfiguration &amp;) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#a2498295173eb5e339945b7be1297ed9b\">Serialize</a>(Stream &amp;s)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html#a3c474cd19e85868fa170b51ef0f32bc3\">StampConfiguration</a>(void)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/structmudbox_1_1_stamp_configuration.html\">StampConfiguration</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";