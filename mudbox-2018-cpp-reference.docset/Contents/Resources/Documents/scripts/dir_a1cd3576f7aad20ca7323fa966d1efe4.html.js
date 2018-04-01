var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>phonon Directory Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'dir_a1cd3576f7aad20ca7323fa966d1efe4.html\', tocPrefix);\n\
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
            <h1>phonon Directory Reference</h1>\n\
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
<div class=\"title\">phonon Directory Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"files\"></a>\n\
Files</h2></td></tr>\n\
<tr class=\"memitem:abstractaudiooutput_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/abstractaudiooutput_8h.html\">abstractaudiooutput.h</a> <a href=\"#!/url=./cpp_ref/abstractaudiooutput_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abstractmediastream_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/abstractmediastream_8h.html\">abstractmediastream.h</a> <a href=\"#!/url=./cpp_ref/abstractmediastream_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abstractvideooutput_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/abstractvideooutput_8h.html\">abstractvideooutput.h</a> <a href=\"#!/url=./cpp_ref/abstractvideooutput_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:addoninterface_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/addoninterface_8h.html\">addoninterface.h</a> <a href=\"#!/url=./cpp_ref/addoninterface_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:audiodataoutput_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/audiodataoutput_8h.html\">audiodataoutput.h</a> <a href=\"#!/url=./cpp_ref/audiodataoutput_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:audiodataoutputinterface_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/audiodataoutputinterface_8h.html\">audiodataoutputinterface.h</a> <a href=\"#!/url=./cpp_ref/audiodataoutputinterface_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:audiooutput_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/audiooutput_8h.html\">audiooutput.h</a> <a href=\"#!/url=./cpp_ref/audiooutput_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:audiooutputinterface_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/audiooutputinterface_8h.html\">audiooutputinterface.h</a> <a href=\"#!/url=./cpp_ref/audiooutputinterface_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:backendcapabilities_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/backendcapabilities_8h.html\">backendcapabilities.h</a> <a href=\"#!/url=./cpp_ref/backendcapabilities_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:backendinterface_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/backendinterface_8h.html\">backendinterface.h</a> <a href=\"#!/url=./cpp_ref/backendinterface_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:effect_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/effect_8h.html\">effect.h</a> <a href=\"#!/url=./cpp_ref/effect_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:effectinterface_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/effectinterface_8h.html\">effectinterface.h</a> <a href=\"#!/url=./cpp_ref/effectinterface_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:effectparameter_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/effectparameter_8h.html\">effectparameter.h</a> <a href=\"#!/url=./cpp_ref/effectparameter_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:effectwidget_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/effectwidget_8h.html\">effectwidget.h</a> <a href=\"#!/url=./cpp_ref/effectwidget_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:globalconfig_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/globalconfig_8h.html\">globalconfig.h</a> <a href=\"#!/url=./cpp_ref/globalconfig_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:mediacontroller_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mediacontroller_8h.html\">mediacontroller.h</a> <a href=\"#!/url=./cpp_ref/mediacontroller_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:medianode_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/medianode_8h.html\">medianode.h</a> <a href=\"#!/url=./cpp_ref/medianode_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:mediaobject_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mediaobject_8h.html\">mediaobject.h</a> <a href=\"#!/url=./cpp_ref/mediaobject_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:mediaobjectinterface_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mediaobjectinterface_8h.html\">mediaobjectinterface.h</a> <a href=\"#!/url=./cpp_ref/mediaobjectinterface_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:mediasource_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mediasource_8h.html\">mediasource.h</a> <a href=\"#!/url=./cpp_ref/mediasource_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:objectdescription_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/objectdescription_8h.html\">objectdescription.h</a> <a href=\"#!/url=./cpp_ref/objectdescription_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:objectdescriptionmodel_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/objectdescriptionmodel_8h.html\">objectdescriptionmodel.h</a> <a href=\"#!/url=./cpp_ref/objectdescriptionmodel_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:path_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/path_8h.html\">path.h</a> <a href=\"#!/url=./cpp_ref/path_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:phonon__export_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonon__export_8h.html\">phonon_export.h</a> <a href=\"#!/url=./cpp_ref/phonon__export_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:phonondefs_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h.html\">phonondefs.h</a> <a href=\"#!/url=./cpp_ref/phonondefs_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:phononnamespace_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phononnamespace_8h.html\">phononnamespace.h</a> <a href=\"#!/url=./cpp_ref/phononnamespace_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:platformplugin_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/platformplugin_8h.html\">platformplugin.h</a> <a href=\"#!/url=./cpp_ref/platformplugin_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:pulsesupport_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/pulsesupport_8h.html\">pulsesupport.h</a> <a href=\"#!/url=./cpp_ref/pulsesupport_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:seekslider_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/seekslider_8h.html\">seekslider.h</a> <a href=\"#!/url=./cpp_ref/seekslider_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:streaminterface_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/streaminterface_8h.html\">streaminterface.h</a> <a href=\"#!/url=./cpp_ref/streaminterface_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:videoplayer_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/videoplayer_8h.html\">videoplayer.h</a> <a href=\"#!/url=./cpp_ref/videoplayer_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:videowidget_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/videowidget_8h.html\">videowidget.h</a> <a href=\"#!/url=./cpp_ref/videowidget_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:videowidgetinterface_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/videowidgetinterface_8h.html\">videowidgetinterface.h</a> <a href=\"#!/url=./cpp_ref/videowidgetinterface_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:volumefadereffect_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/volumefadereffect_8h.html\">volumefadereffect.h</a> <a href=\"#!/url=./cpp_ref/volumefadereffect_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:volumefaderinterface_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/volumefaderinterface_8h.html\">volumefaderinterface.h</a> <a href=\"#!/url=./cpp_ref/volumefaderinterface_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:volumeslider_8h\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">file &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/volumeslider_8h.html\">volumeslider.h</a> <a href=\"#!/url=./cpp_ref/volumeslider_8h_source.html\">[code]</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";