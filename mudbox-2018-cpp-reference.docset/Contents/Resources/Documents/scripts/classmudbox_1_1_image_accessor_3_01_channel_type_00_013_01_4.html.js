var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>ImageAccessor&lt; ChannelType, 3 &gt; Class Template Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classmudbox_1_1_image_accessor_3_01_channel_type_00_013_01_4.html\', tocPrefix);\n\
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
            <h1>ImageAccessor&lt; ChannelType, 3 &gt; Class Template Reference</h1>\n\
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
<div class=\"title\">ImageAccessor&lt; ChannelType, 3 &gt; Class Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classmudbox_1_1_image_accessor_3_01_channel_type_00_013_01_4.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html\">image.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;class ChannelType&gt;<br>\n\
class mudbox::ImageAccessor&lt; ChannelType, 3 &gt;</h3>\n\
\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html#l02551\">2551</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html\">image.h</a>.</p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for ImageAccessor&lt; ChannelType, 3 &gt;:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/classmudbox_1_1_image_accessor_3_01_channel_type_00_013_01_4.png\" usemap=\"#ImageAccessor&lt; ChannelType, 3 &gt;_map\" alt=\"\">\n\
  <map id=\"ImageAccessor&lt; ChannelType, 3 &gt;_map\" name=\"ImageAccessor&lt; ChannelType, 3 &gt;_map\">\n\
<area href=\"classmudbox_1_1_image_accessor_base.html\" alt=\"ImageAccessorBase&lt; ChannelType, 3 &gt;\" shape=\"rect\" coords=\"0,0,242,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a83d59e77775f3fa87c943b65fddaa273\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_3_01_channel_type_00_013_01_4.html#a83d59e77775f3fa87c943b65fddaa273\">ImageAccessor</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html\">Image</a> *parent)</td></tr>\n\
<tr class=\"separator:a83d59e77775f3fa87c943b65fddaa273\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a971439e5fe0a437d662d0f18eac5fd23\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_color.html\">Color</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_3_01_channel_type_00_013_01_4.html#a971439e5fe0a437d662d0f18eac5fd23\">ColorAt</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> X, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> Y) const </td></tr>\n\
<tr class=\"memdesc:a971439e5fe0a437d662d0f18eac5fd23\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the value at a given coordinate.  <a href=\"classmudbox_1_1_image_accessor_3_01_channel_type_00_013_01_4.html#a971439e5fe0a437d662d0f18eac5fd23\">More...</a><br></td></tr>\n\
<tr class=\"separator:a971439e5fe0a437d662d0f18eac5fd23\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_classmudbox_1_1_image_accessor_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_classmudbox_1_1_image_accessor_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html\">ImageAccessorBase&lt; ChannelType, 3 &gt;</a></td></tr>\n\
<tr class=\"memitem:a4b4e5414cfa5c8bf57451c19cd2fdce7 inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html#a4b4e5414cfa5c8bf57451c19cd2fdce7\">ImageAccessorBase</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html\">Image</a> *parent)</td></tr>\n\
<tr class=\"separator:a4b4e5414cfa5c8bf57451c19cd2fdce7 inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa10897c507e72bbe0438065437dd816e inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html#aa10897c507e72bbe0438065437dd816e\">Width</a> () const</td></tr>\n\
<tr class=\"separator:aa10897c507e72bbe0438065437dd816e inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a241b0b98436b465422550a25af9377b9 inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html#a241b0b98436b465422550a25af9377b9\">Height</a> () const</td></tr>\n\
<tr class=\"separator:a241b0b98436b465422550a25af9377b9 inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0702193a430d87448562b17f40cfcc26 inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html#a0702193a430d87448562b17f40cfcc26\">ChannelCount</a> () const</td></tr>\n\
<tr class=\"separator:a0702193a430d87448562b17f40cfcc26 inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aded8be824e3477b5cafef62b9ebb1dc9 inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html#aded8be824e3477b5cafef62b9ebb1dc9\">SetValueAt</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> X, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> Y, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> Ch, float fVal)</td></tr>\n\
<tr class=\"memdesc:aded8be824e3477b5cafef62b9ebb1dc9 inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set value for a specified texel.  <a href=\"classmudbox_1_1_image_accessor_3_01_channel_type_00_013_01_4.html#aded8be824e3477b5cafef62b9ebb1dc9\">More...</a><br></td></tr>\n\
<tr class=\"separator:aded8be824e3477b5cafef62b9ebb1dc9 inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af4d8930a0c264e7d5739ab7a5bfebd8b inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">float&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html#af4d8930a0c264e7d5739ab7a5bfebd8b\">ValueAt</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> X, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> Y, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> Ch) const</td></tr>\n\
<tr class=\"memdesc:af4d8930a0c264e7d5739ab7a5bfebd8b inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the value at a given coordinate.  <a href=\"classmudbox_1_1_image_accessor_3_01_channel_type_00_013_01_4.html#af4d8930a0c264e7d5739ab7a5bfebd8b\">More...</a><br></td></tr>\n\
<tr class=\"separator:af4d8930a0c264e7d5739ab7a5bfebd8b inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2bfd54d99dd1aa757b326784f4a2e39a inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html#a2bfd54d99dd1aa757b326784f4a2e39a\">SetColorAt</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> X, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> Y, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_color.html\">Color</a> &amp;cColor)</td></tr>\n\
<tr class=\"memdesc:a2bfd54d99dd1aa757b326784f4a2e39a inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set value for a specified texel.  <a href=\"classmudbox_1_1_image_accessor_3_01_channel_type_00_013_01_4.html#a2bfd54d99dd1aa757b326784f4a2e39a\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2bfd54d99dd1aa757b326784f4a2e39a inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a16ee27a5d16425e7a146e862a0af483d inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html#a16ee27a5d16425e7a146e862a0af483d\">AddrAt</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> X, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> Y, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a> Ch)</td></tr>\n\
<tr class=\"separator:a16ee27a5d16425e7a146e862a0af483d inherit pub_methods_classmudbox_1_1_image_accessor_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a83d59e77775f3fa87c943b65fddaa273\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor.html\">ImageAccessor</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html\">Image</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>parent</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html#l02554\">2554</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html\">image.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l02554\"></a><span class=\"lineno\"> 2554</span>&#160;                                 : ImageAccessorBase&lt;ChannelType, 3&gt;(parent)</div>\n\
<div class=\"line\"><a name=\"l02555\"></a><span class=\"lineno\"> 2555</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l02556\"></a><span class=\"lineno\"> 2556</span>&#160;    }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a971439e5fe0a437d662d0f18eac5fd23\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_color.html\">Color</a> ColorAt </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>X</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h.html#ab09bb81ef0886db7361777fcfa8b2dff\">u_int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>Y</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the value at a given coordinate. </p>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html#l02559\">2559</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html\">image.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l02560\"></a><span class=\"lineno\"> 2560</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l02561\"></a><span class=\"lineno\"> 2561</span>&#160;        <span class=\"keywordflow\">return</span> Color(</div>\n\
<div class=\"line\"><a name=\"l02562\"></a><span class=\"lineno\"> 2562</span>&#160;                <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html#af4d8930a0c264e7d5739ab7a5bfebd8b\">ImageAccessorBase&lt;ChannelType, 3&gt;::ValueAt</a>(X,Y,0),</div>\n\
<div class=\"line\"><a name=\"l02563\"></a><span class=\"lineno\"> 2563</span>&#160;                <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html#af4d8930a0c264e7d5739ab7a5bfebd8b\">ImageAccessorBase&lt;ChannelType, 3&gt;::ValueAt</a>(X,Y,1),</div>\n\
<div class=\"line\"><a name=\"l02564\"></a><span class=\"lineno\"> 2564</span>&#160;                <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html#af4d8930a0c264e7d5739ab7a5bfebd8b\">ImageAccessorBase&lt;ChannelType, 3&gt;::ValueAt</a>(X,Y,2),</div>\n\
<div class=\"line\"><a name=\"l02565\"></a><span class=\"lineno\"> 2565</span>&#160;                1);</div>\n\
<div class=\"line\"><a name=\"l02566\"></a><span class=\"lineno\"> 2566</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_image_accessor_base_html_af4d8930a0c264e7d5739ab7a5bfebd8b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_image_accessor_base.html#af4d8930a0c264e7d5739ab7a5bfebd8b\">mudbox::ImageAccessorBase&lt; ChannelType, 3 &gt;::ValueAt</a></div><div class=\"ttdeci\">float ValueAt(u_int X, u_int Y, u_int Ch) const</div><div class=\"ttdoc\">Get the value at a given coordinate. </div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>Mudbox/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html\">image.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";