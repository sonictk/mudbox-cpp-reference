var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtCore/qrect.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qrect_8h.html\', tocPrefix);\n\
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
            <h1>QtCore/qrect.h File Reference</h1>\n\
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
<div class=\"title\">qrect.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"qrect_8h.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"qrect_8h.html#func-members\">Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qsize_8h_source.html\">QtCore/qsize.h</a>&gt;</code><br>\n\
<code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qpoint_8h_source.html\">QtCore/qpoint.h</a>&gt;</code><br>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">class &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:ada3472f00a3fefced9958240eb55afe7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h.html#ada3472f00a3fefced9958240eb55afe7\">Q_DECLARE_TYPEINFO</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a>, Q_MOVABLE_TYPE)</td></tr>\n\
<tr class=\"separator:ada3472f00a3fefced9958240eb55afe7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a19cdef4951671cd36f09fa79a67ee87d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT_INLINE bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h.html#a19cdef4951671cd36f09fa79a67ee87d\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;)</td></tr>\n\
<tr class=\"separator:a19cdef4951671cd36f09fa79a67ee87d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1a92a16ea4dc84fb2b48ebedf3e2cd5c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT_INLINE bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h.html#a1a92a16ea4dc84fb2b48ebedf3e2cd5c\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;)</td></tr>\n\
<tr class=\"separator:a1a92a16ea4dc84fb2b48ebedf3e2cd5c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a10bc894d7933cd68169d2a5842682395\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h.html#a10bc894d7933cd68169d2a5842682395\">operator&lt;&lt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;)</td></tr>\n\
<tr class=\"separator:a10bc894d7933cd68169d2a5842682395\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4f72b74b31029615f5a816329cf6cc0e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h.html#a4f72b74b31029615f5a816329cf6cc0e\">operator&gt;&gt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;)</td></tr>\n\
<tr class=\"separator:a4f72b74b31029615f5a816329cf6cc0e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4276aa5493de8bcd2aa70fbcf0675b05\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h.html#a4276aa5493de8bcd2aa70fbcf0675b05\">operator&lt;&lt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a>, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;)</td></tr>\n\
<tr class=\"separator:a4276aa5493de8bcd2aa70fbcf0675b05\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7c76a57bfb906a0e23131d6ac5dfd332\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h.html#a7c76a57bfb906a0e23131d6ac5dfd332\">Q_DECLARE_TYPEINFO</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a>, Q_MOVABLE_TYPE)</td></tr>\n\
<tr class=\"separator:a7c76a57bfb906a0e23131d6ac5dfd332\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aeebee9f32f6ef54ed0c316ee92eb344d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT_INLINE bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h.html#aeebee9f32f6ef54ed0c316ee92eb344d\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;)</td></tr>\n\
<tr class=\"separator:aeebee9f32f6ef54ed0c316ee92eb344d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad228a5b5ac0b579707368e96fc6c1cb1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT_INLINE bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h.html#ad228a5b5ac0b579707368e96fc6c1cb1\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;)</td></tr>\n\
<tr class=\"separator:ad228a5b5ac0b579707368e96fc6c1cb1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:accd1a977e2cabe4b4e76991f619c982c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h.html#accd1a977e2cabe4b4e76991f619c982c\">operator&lt;&lt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;)</td></tr>\n\
<tr class=\"separator:accd1a977e2cabe4b4e76991f619c982c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a16153edc0b5b0704b5070c1c84c52c1f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h.html#a16153edc0b5b0704b5070c1c84c52c1f\">operator&gt;&gt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;)</td></tr>\n\
<tr class=\"separator:a16153edc0b5b0704b5070c1c84c52c1f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abea186a2b56fd03649e9c72acb78889f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h.html#abea186a2b56fd03649e9c72acb78889f\">operator&lt;&lt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a>, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;)</td></tr>\n\
<tr class=\"separator:abea186a2b56fd03649e9c72acb78889f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ada3472f00a3fefced9958240eb55afe7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_DECLARE_TYPEINFO </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a>&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">Q_MOVABLE_TYPE&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
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
<a class=\"anchor\" id=\"a19cdef4951671cd36f09fa79a67ee87d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r1</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r2</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h_source.html#l00496\">496</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h_source.html\">qrect.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00497\"></a><span class=\"lineno\">  497</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00498\"></a><span class=\"lineno\">  498</span>&#160;    <span class=\"keywordflow\">return</span> r1.x1==r2.x1 &amp;&amp; r1.x2==r2.x2 &amp;&amp; r1.y1==r2.y1 &amp;&amp; r1.y2==r2.y2;</div>\n\
<div class=\"line\"><a name=\"l00499\"></a><span class=\"lineno\">  499</span>&#160;}</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1a92a16ea4dc84fb2b48ebedf3e2cd5c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r1</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r2</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h_source.html#l00501\">501</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h_source.html\">qrect.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00502\"></a><span class=\"lineno\">  502</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00503\"></a><span class=\"lineno\">  503</span>&#160;    <span class=\"keywordflow\">return</span> r1.x1!=r2.x1 || r1.x2!=r2.x2 || r1.y1!=r2.y1 || r1.y2!=r2.y2;</div>\n\
<div class=\"line\"><a name=\"l00504\"></a><span class=\"lineno\">  504</span>&#160;}</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a10bc894d7933cd68169d2a5842682395\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a>&amp; operator&lt;&lt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
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
<a class=\"anchor\" id=\"a4f72b74b31029615f5a816329cf6cc0e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a>&amp; operator&gt;&gt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
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
<a class=\"anchor\" id=\"a4276aa5493de8bcd2aa70fbcf0675b05\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a> operator&lt;&lt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a>&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect.html\">QRect</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
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
<a class=\"anchor\" id=\"a7c76a57bfb906a0e23131d6ac5dfd332\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_DECLARE_TYPEINFO </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a>&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">Q_MOVABLE_TYPE&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
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
<a class=\"anchor\" id=\"aeebee9f32f6ef54ed0c316ee92eb344d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r1</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r2</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h_source.html#l00833\">833</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h_source.html\">qrect.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00834\"></a><span class=\"lineno\">  834</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00835\"></a><span class=\"lineno\">  835</span>&#160;    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qmatrix_8h.html#ae512119a2dd03dcc657fcf56c184c1e2\">qFuzzyCompare</a>(r1.xp, r2.xp) &amp;&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/qmatrix_8h.html#ae512119a2dd03dcc657fcf56c184c1e2\">qFuzzyCompare</a>(r1.yp, r2.yp)</div>\n\
<div class=\"line\"><a name=\"l00836\"></a><span class=\"lineno\">  836</span>&#160;           &amp;&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/qmatrix_8h.html#ae512119a2dd03dcc657fcf56c184c1e2\">qFuzzyCompare</a>(r1.w, r2.w) &amp;&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/qmatrix_8h.html#ae512119a2dd03dcc657fcf56c184c1e2\">qFuzzyCompare</a>(r1.h, r2.h);</div>\n\
<div class=\"line\"><a name=\"l00837\"></a><span class=\"lineno\">  837</span>&#160;}</div>\n\
<div class=\"ttc\" id=\"qmatrix_8h_html_ae512119a2dd03dcc657fcf56c184c1e2\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qmatrix_8h.html#ae512119a2dd03dcc657fcf56c184c1e2\">qFuzzyCompare</a></div><div class=\"ttdeci\">bool qFuzzyCompare(const QMatrix &amp;m1, const QMatrix &amp;m2)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qmatrix_8h_source.html#l00172\">qmatrix.h:172</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad228a5b5ac0b579707368e96fc6c1cb1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r1</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>r2</em>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h_source.html#l00839\">839</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qrect_8h_source.html\">qrect.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00840\"></a><span class=\"lineno\">  840</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00841\"></a><span class=\"lineno\">  841</span>&#160;    <span class=\"keywordflow\">return</span> !<a class=\"code\" href=\"#!/url=./cpp_ref/qmatrix_8h.html#ae512119a2dd03dcc657fcf56c184c1e2\">qFuzzyCompare</a>(r1.xp, r2.xp) || !<a class=\"code\" href=\"#!/url=./cpp_ref/qmatrix_8h.html#ae512119a2dd03dcc657fcf56c184c1e2\">qFuzzyCompare</a>(r1.yp, r2.yp)</div>\n\
<div class=\"line\"><a name=\"l00842\"></a><span class=\"lineno\">  842</span>&#160;           || !<a class=\"code\" href=\"#!/url=./cpp_ref/qmatrix_8h.html#ae512119a2dd03dcc657fcf56c184c1e2\">qFuzzyCompare</a>(r1.w, r2.w) || !<a class=\"code\" href=\"#!/url=./cpp_ref/qmatrix_8h.html#ae512119a2dd03dcc657fcf56c184c1e2\">qFuzzyCompare</a>(r1.h, r2.h);</div>\n\
<div class=\"line\"><a name=\"l00843\"></a><span class=\"lineno\">  843</span>&#160;}</div>\n\
<div class=\"ttc\" id=\"qmatrix_8h_html_ae512119a2dd03dcc657fcf56c184c1e2\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qmatrix_8h.html#ae512119a2dd03dcc657fcf56c184c1e2\">qFuzzyCompare</a></div><div class=\"ttdeci\">bool qFuzzyCompare(const QMatrix &amp;m1, const QMatrix &amp;m2)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qmatrix_8h_source.html#l00172\">qmatrix.h:172</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"accd1a977e2cabe4b4e76991f619c982c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a>&amp; operator&lt;&lt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
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
<a class=\"anchor\" id=\"a16153edc0b5b0704b5070c1c84c52c1f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a>&amp; operator&gt;&gt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
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
<a class=\"anchor\" id=\"abea186a2b56fd03649e9c72acb78889f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Q_CORE_EXPORT <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a> operator&lt;&lt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a>&#160;</td>\n\
          <td class=\"paramname\">, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_rect_f.html\">QRectF</a> &amp;&#160;</td>\n\
          <td class=\"paramname\">&#160;</td>\n\
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
\n\
<p><a href=\"#!/url=./cpp_ref/qrect_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";