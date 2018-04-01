var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QImageTextKeyLang Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_image_text_key_lang.html\', tocPrefix);\n\
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
            <h1>QImageTextKeyLang Class Reference</h1>\n\
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
<div class=\"title\">QImageTextKeyLang Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_q_image_text_key_lang.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_q_image_text_key_lang.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html\">qimage.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\">\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00069\">69</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html\">qimage.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a1877bedd4d11ddfabfcf62c231337247\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a1877bedd4d11ddfabfcf62c231337247\">QImageTextKeyLang</a> (const char *k, const char *l)</td></tr>\n\
<tr class=\"separator:a1877bedd4d11ddfabfcf62c231337247\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae806cd9b84299544098c318f893f692a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#ae806cd9b84299544098c318f893f692a\">QImageTextKeyLang</a> ()</td></tr>\n\
<tr class=\"separator:ae806cd9b84299544098c318f893f692a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac85494fdc7b259e28606e58d8464d309\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#ac85494fdc7b259e28606e58d8464d309\">operator&lt;</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html\">QImageTextKeyLang</a> &amp;other) const </td></tr>\n\
<tr class=\"separator:ac85494fdc7b259e28606e58d8464d309\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a066e4e2f74b09cceb284ccbfefc16e3b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a066e4e2f74b09cceb284ccbfefc16e3b\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html\">QImageTextKeyLang</a> &amp;other) const </td></tr>\n\
<tr class=\"separator:a066e4e2f74b09cceb284ccbfefc16e3b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4501e63844a80b2099c19af9972e1712\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a4501e63844a80b2099c19af9972e1712\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html\">QImageTextKeyLang</a> &amp;other) const </td></tr>\n\
<tr class=\"separator:a4501e63844a80b2099c19af9972e1712\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:af7576f853321ad54230b62fd1fe82842\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#af7576f853321ad54230b62fd1fe82842\">key</a></td></tr>\n\
<tr class=\"separator:af7576f853321ad54230b62fd1fe82842\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a234166c73aedaa376a45ae06b6db5b70\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a234166c73aedaa376a45ae06b6db5b70\">lang</a></td></tr>\n\
<tr class=\"separator:a234166c73aedaa376a45ae06b6db5b70\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a1877bedd4d11ddfabfcf62c231337247\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html\">QImageTextKeyLang</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const char *&#160;</td>\n\
          <td class=\"paramname\"><em>k</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const char *&#160;</td>\n\
          <td class=\"paramname\"><em>l</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00071\">71</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html\">qimage.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;: <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#af7576f853321ad54230b62fd1fe82842\">key</a>(k), <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a234166c73aedaa376a45ae06b6db5b70\">lang</a>(l) { }</div>\n\
<div class=\"ttc\" id=\"class_q_image_text_key_lang_html_af7576f853321ad54230b62fd1fe82842\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#af7576f853321ad54230b62fd1fe82842\">QImageTextKeyLang::key</a></div><div class=\"ttdeci\">QByteArray key</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00074\">qimage.h:74</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_image_text_key_lang_html_a234166c73aedaa376a45ae06b6db5b70\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a234166c73aedaa376a45ae06b6db5b70\">QImageTextKeyLang::lang</a></div><div class=\"ttdeci\">QByteArray lang</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00075\">qimage.h:75</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae806cd9b84299544098c318f893f692a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html\">QImageTextKeyLang</a> </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00072\">72</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html\">qimage.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;{ }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ac85494fdc7b259e28606e58d8464d309\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator&lt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html\">QImageTextKeyLang</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00077\">77</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html\">qimage.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;        { <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#af7576f853321ad54230b62fd1fe82842\">key</a> &lt; other.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#af7576f853321ad54230b62fd1fe82842\">key</a> || (<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#af7576f853321ad54230b62fd1fe82842\">key</a>==other.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#af7576f853321ad54230b62fd1fe82842\">key</a> &amp;&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a234166c73aedaa376a45ae06b6db5b70\">lang</a> &lt; other.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a234166c73aedaa376a45ae06b6db5b70\">lang</a>); }</div>\n\
<div class=\"ttc\" id=\"class_q_image_text_key_lang_html_af7576f853321ad54230b62fd1fe82842\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#af7576f853321ad54230b62fd1fe82842\">QImageTextKeyLang::key</a></div><div class=\"ttdeci\">QByteArray key</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00074\">qimage.h:74</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_image_text_key_lang_html_a234166c73aedaa376a45ae06b6db5b70\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a234166c73aedaa376a45ae06b6db5b70\">QImageTextKeyLang::lang</a></div><div class=\"ttdeci\">QByteArray lang</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00075\">qimage.h:75</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a066e4e2f74b09cceb284ccbfefc16e3b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html\">QImageTextKeyLang</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00079\">79</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html\">qimage.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;        { <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#af7576f853321ad54230b62fd1fe82842\">key</a>==other.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#af7576f853321ad54230b62fd1fe82842\">key</a> &amp;&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a234166c73aedaa376a45ae06b6db5b70\">lang</a>==other.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a234166c73aedaa376a45ae06b6db5b70\">lang</a>; }</div>\n\
<div class=\"ttc\" id=\"class_q_image_text_key_lang_html_af7576f853321ad54230b62fd1fe82842\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#af7576f853321ad54230b62fd1fe82842\">QImageTextKeyLang::key</a></div><div class=\"ttdeci\">QByteArray key</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00074\">qimage.h:74</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_image_text_key_lang_html_a234166c73aedaa376a45ae06b6db5b70\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a234166c73aedaa376a45ae06b6db5b70\">QImageTextKeyLang::lang</a></div><div class=\"ttdeci\">QByteArray lang</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00075\">qimage.h:75</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4501e63844a80b2099c19af9972e1712\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html\">QImageTextKeyLang</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00081\">81</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html\">qimage.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;        { <span class=\"keywordflow\">return</span> !<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a066e4e2f74b09cceb284ccbfefc16e3b\">operator==</a>(other); }</div>\n\
<div class=\"ttc\" id=\"class_q_image_text_key_lang_html_a066e4e2f74b09cceb284ccbfefc16e3b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_image_text_key_lang.html#a066e4e2f74b09cceb284ccbfefc16e3b\">QImageTextKeyLang::operator==</a></div><div class=\"ttdeci\">bool operator==(const QImageTextKeyLang &amp;other) const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00079\">qimage.h:79</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"af7576f853321ad54230b62fd1fe82842\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> key</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00074\">74</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html\">qimage.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a234166c73aedaa376a45ae06b6db5b70\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> lang</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00075\">75</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html\">qimage.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtGui/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qimage_8h_source.html\">qimage.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";