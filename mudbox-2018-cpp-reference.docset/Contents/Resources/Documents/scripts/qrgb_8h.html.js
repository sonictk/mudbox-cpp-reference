var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtGui/qrgb.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qrgb_8h.html\', tocPrefix);\n\
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
            <h1>QtGui/qrgb.h File Reference</h1>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">qrgb.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"qrgb_8h.html#func-members\">Functions</a> &#124;\n\
<a href=\"qrgb_8h.html#var-members\">Variables</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qglobal_8h_source.html\">QtCore/qglobal.h</a>&gt;</code><br>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:a0262d5960d36d81d4a364948d920f444\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a0262d5960d36d81d4a364948d920f444\">qRed</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a> rgb)</td></tr>\n\
<tr class=\"separator:a0262d5960d36d81d4a364948d920f444\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a089780d47442a31aefd726ae9f9ad5a9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a089780d47442a31aefd726ae9f9ad5a9\">qGreen</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a> rgb)</td></tr>\n\
<tr class=\"separator:a089780d47442a31aefd726ae9f9ad5a9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a870f36c07aefb951cadeba3bbe24426c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a870f36c07aefb951cadeba3bbe24426c\">qBlue</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a> rgb)</td></tr>\n\
<tr class=\"separator:a870f36c07aefb951cadeba3bbe24426c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7425574d5db1d8c9423d9abe9806f3d7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a7425574d5db1d8c9423d9abe9806f3d7\">qAlpha</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a> rgb)</td></tr>\n\
<tr class=\"separator:a7425574d5db1d8c9423d9abe9806f3d7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad893ba1106079f0892fc33504a2879bd\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#ad893ba1106079f0892fc33504a2879bd\">qRgb</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a>)</td></tr>\n\
<tr class=\"separator:ad893ba1106079f0892fc33504a2879bd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0872d728476d63455b4f90941aa77a63\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a0872d728476d63455b4f90941aa77a63\">qRgba</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a>)</td></tr>\n\
<tr class=\"separator:a0872d728476d63455b4f90941aa77a63\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7257bfbec424faf349ec30fefd7f1d65\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a7257bfbec424faf349ec30fefd7f1d65\">qGray</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a>)</td></tr>\n\
<tr class=\"separator:a7257bfbec424faf349ec30fefd7f1d65\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0c7aa7c9453c1b43583d88414dd556db\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a0c7aa7c9453c1b43583d88414dd556db\">qGray</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a> rgb)</td></tr>\n\
<tr class=\"separator:a0c7aa7c9453c1b43583d88414dd556db\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7566fea8013f3974a55534d7c6366c68\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_GUI_EXPORT_INLINE bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a7566fea8013f3974a55534d7c6366c68\">qIsGray</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a> rgb)</td></tr>\n\
<tr class=\"separator:a7566fea8013f3974a55534d7c6366c68\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"var-members\"></a>\n\
Variables</h2></td></tr>\n\
<tr class=\"memitem:a1bf94a62acd28fa5fd1a1ae1979d381d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a> typedef unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a></td></tr>\n\
<tr class=\"separator:a1bf94a62acd28fa5fd1a1ae1979d381d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab3e6678d67406496869d3dd1371ac31e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#ab3e6678d67406496869d3dd1371ac31e\">RGB_MASK</a> = 0x00ffffff</td></tr>\n\
<tr class=\"separator:ab3e6678d67406496869d3dd1371ac31e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a0262d5960d36d81d4a364948d920f444\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> qRed </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a>&#160;</td>\n\
          <td class=\"paramname\"><em>rgb</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00057\">57</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html\">qrgb.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;{ <span class=\"keywordflow\">return</span> ((rgb &gt;&gt; 16) &amp; 0xff); }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a089780d47442a31aefd726ae9f9ad5a9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> qGreen </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a>&#160;</td>\n\
          <td class=\"paramname\"><em>rgb</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00060\">60</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html\">qrgb.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;{ <span class=\"keywordflow\">return</span> ((rgb &gt;&gt; 8) &amp; 0xff); }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a870f36c07aefb951cadeba3bbe24426c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> qBlue </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a>&#160;</td>\n\
          <td class=\"paramname\"><em>rgb</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00063\">63</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html\">qrgb.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;{ <span class=\"keywordflow\">return</span> (rgb &amp; 0xff); }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7425574d5db1d8c9423d9abe9806f3d7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> qAlpha </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a>&#160;</td>\n\
          <td class=\"paramname\"><em>rgb</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00066\">66</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html\">qrgb.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;{ <span class=\"keywordflow\">return</span> rgb &gt;&gt; 24; }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad893ba1106079f0892fc33504a2879bd\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a> qRgb </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>r</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>g</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>b</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00069\">69</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html\">qrgb.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;{ <span class=\"keywordflow\">return</span> (0xffu &lt;&lt; 24) | ((<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a> &amp; 0xff) &lt;&lt; 16) | ((<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a> &amp; 0xff) &lt;&lt; 8) | (<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a> &amp; 0xff); }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a28666c5860e73f899079b4ee29200aec\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a></div><div class=\"ttdeci\">GLdouble GLdouble GLdouble r</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01189\">GLee.h:1189</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a9cd653b1648845554169fbc3a3f6d37a\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a></div><div class=\"ttdeci\">GLubyte g</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05404\">GLee.h:5404</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a08f98740667f706cd68d5e873088ffa6\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a></div><div class=\"ttdeci\">GLubyte GLubyte b</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05404\">GLee.h:5404</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0872d728476d63455b4f90941aa77a63\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a> qRgba </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>r</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>g</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>b</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>a</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00072\">72</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html\">qrgb.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;{ <span class=\"keywordflow\">return</span> ((<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a> &amp; 0xff) &lt;&lt; 24) | ((<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a> &amp; 0xff) &lt;&lt; 16) | ((<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a> &amp; 0xff) &lt;&lt; 8) | (<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a> &amp; 0xff); }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a28666c5860e73f899079b4ee29200aec\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a></div><div class=\"ttdeci\">GLdouble GLdouble GLdouble r</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01189\">GLee.h:1189</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a9cd653b1648845554169fbc3a3f6d37a\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a></div><div class=\"ttdeci\">GLubyte g</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05404\">GLee.h:5404</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a08f98740667f706cd68d5e873088ffa6\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a></div><div class=\"ttdeci\">GLubyte GLubyte b</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05404\">GLee.h:5404</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_ac8729153468b5dcf13f971b21d84d4e5\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a></div><div class=\"ttdeci\">GLubyte GLubyte GLubyte a</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05404\">GLee.h:5404</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7257bfbec424faf349ec30fefd7f1d65\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> qGray </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>r</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>g</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>b</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00075\">75</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html\">qrgb.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;{ <span class=\"keywordflow\">return</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a>*11+<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a>*16+<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a>*5)/32; }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a28666c5860e73f899079b4ee29200aec\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a28666c5860e73f899079b4ee29200aec\">r</a></div><div class=\"ttdeci\">GLdouble GLdouble GLdouble r</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01189\">GLee.h:1189</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a9cd653b1648845554169fbc3a3f6d37a\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9cd653b1648845554169fbc3a3f6d37a\">g</a></div><div class=\"ttdeci\">GLubyte g</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05404\">GLee.h:5404</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a08f98740667f706cd68d5e873088ffa6\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a></div><div class=\"ttdeci\">GLubyte GLubyte b</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05404\">GLee.h:5404</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0c7aa7c9453c1b43583d88414dd556db\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_GUI_EXPORT_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> qGray </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a>&#160;</td>\n\
          <td class=\"paramname\"><em>rgb</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00078\">78</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html\">qrgb.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00079\"></a><span class=\"lineno\">   79</span>&#160;{ <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a7257bfbec424faf349ec30fefd7f1d65\">qGray</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a0262d5960d36d81d4a364948d920f444\">qRed</a>(rgb), <a class=\"code\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a089780d47442a31aefd726ae9f9ad5a9\">qGreen</a>(rgb), <a class=\"code\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a870f36c07aefb951cadeba3bbe24426c\">qBlue</a>(rgb)); }</div>\n\
<div class=\"ttc\" id=\"qrgb_8h_html_a0262d5960d36d81d4a364948d920f444\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qrgb_8h.html#a0262d5960d36d81d4a364948d920f444\">qRed</a></div><div class=\"ttdeci\">Q_GUI_EXPORT_INLINE int qRed(QRgb rgb)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00057\">qrgb.h:57</a></div></div>\n\
<div class=\"ttc\" id=\"qrgb_8h_html_a870f36c07aefb951cadeba3bbe24426c\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qrgb_8h.html#a870f36c07aefb951cadeba3bbe24426c\">qBlue</a></div><div class=\"ttdeci\">Q_GUI_EXPORT_INLINE int qBlue(QRgb rgb)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00063\">qrgb.h:63</a></div></div>\n\
<div class=\"ttc\" id=\"qrgb_8h_html_a7257bfbec424faf349ec30fefd7f1d65\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qrgb_8h.html#a7257bfbec424faf349ec30fefd7f1d65\">qGray</a></div><div class=\"ttdeci\">Q_GUI_EXPORT_INLINE int qGray(int r, int g, int b)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00075\">qrgb.h:75</a></div></div>\n\
<div class=\"ttc\" id=\"qrgb_8h_html_a089780d47442a31aefd726ae9f9ad5a9\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qrgb_8h.html#a089780d47442a31aefd726ae9f9ad5a9\">qGreen</a></div><div class=\"ttdeci\">Q_GUI_EXPORT_INLINE int qGreen(QRgb rgb)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00060\">qrgb.h:60</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7566fea8013f3974a55534d7c6366c68\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_GUI_EXPORT_INLINE bool qIsGray </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a>&#160;</td>\n\
          <td class=\"paramname\"><em>rgb</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00081\">81</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html\">qrgb.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;{ <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a0262d5960d36d81d4a364948d920f444\">qRed</a>(rgb) == <a class=\"code\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a089780d47442a31aefd726ae9f9ad5a9\">qGreen</a>(rgb) &amp;&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a0262d5960d36d81d4a364948d920f444\">qRed</a>(rgb) == <a class=\"code\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a870f36c07aefb951cadeba3bbe24426c\">qBlue</a>(rgb); }</div>\n\
<div class=\"ttc\" id=\"qrgb_8h_html_a0262d5960d36d81d4a364948d920f444\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qrgb_8h.html#a0262d5960d36d81d4a364948d920f444\">qRed</a></div><div class=\"ttdeci\">Q_GUI_EXPORT_INLINE int qRed(QRgb rgb)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00057\">qrgb.h:57</a></div></div>\n\
<div class=\"ttc\" id=\"qrgb_8h_html_a870f36c07aefb951cadeba3bbe24426c\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qrgb_8h.html#a870f36c07aefb951cadeba3bbe24426c\">qBlue</a></div><div class=\"ttdeci\">Q_GUI_EXPORT_INLINE int qBlue(QRgb rgb)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00063\">qrgb.h:63</a></div></div>\n\
<div class=\"ttc\" id=\"qrgb_8h_html_a089780d47442a31aefd726ae9f9ad5a9\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qrgb_8h.html#a089780d47442a31aefd726ae9f9ad5a9\">qGreen</a></div><div class=\"ttdeci\">Q_GUI_EXPORT_INLINE int qGreen(QRgb rgb)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00060\">qrgb.h:60</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Variable Documentation</h2>\n\
<a class=\"anchor\" id=\"a1bf94a62acd28fa5fd1a1ae1979d381d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a> typedef unsigned <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> QRgb</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00053\">53</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html\">qrgb.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab3e6678d67406496869d3dd1371ac31e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h.html#a1bf94a62acd28fa5fd1a1ae1979d381d\">QRgb</a> RGB_MASK = 0x00ffffff</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html#l00055\">55</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrgb_8h_source.html\">qrgb.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
\n\
<p><a href=\"#!/url=./cpp_ref/qrgb_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";