var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QAccessible2 Namespace Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'namespace_q_accessible2.html\', tocPrefix);\n\
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
            <h1>QAccessible2 Namespace Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespace&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers.html\"><span>Namespace&#160;Members</span></a></li>\n\
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
<div class=\"title\">QAccessible2 Namespace Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"namespace_q_accessible2.html#nested-classes\">Classes</a> &#124;\n\
<a href=\"namespace_q_accessible2.html#enum-members\">Enumerations</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"nested-classes\"></a>\n\
Classes</h2></td></tr>\n\
<tr class=\"memitem:\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">struct &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_q_accessible2_1_1_table_model_change.html\">TableModelChange</a></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"enum-members\"></a>\n\
Enumerations</h2></td></tr>\n\
<tr class=\"memitem:af1ef2c97e255bd7f21d3b7614b283d9d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9d\">InterfaceType</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9dae923e5fb2e2d2becbe07f0f72c1ed167\">TextInterface</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da8362ac23a9387cb2c11b86df3fe8cce8\">EditableTextInterface</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da9c01acf4a28f9edb47caf7243cf6d294\">ValueInterface</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9dae6d366318b204db004b4c21af9bbc549\">TableInterface</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da2db27434c41069f4dd9c0be04bb430cf\">ActionInterface</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da2ec7b7a698860725ceff0efbcca98482\">ImageInterface</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da87b77d33a8cdbc4fc82e626655e47d43\">Table2Interface</a>\n\
<br>\n\
 }<tr class=\"separator:af1ef2c97e255bd7f21d3b7614b283d9d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"memitem:af532ebccf30da4696c48ec61f6b4d663\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af532ebccf30da4696c48ec61f6b4d663\">CoordinateType</a> { <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af532ebccf30da4696c48ec61f6b4d663ab0ef059f0e9878156b9523a405bcb34d\">RelativeToScreen</a> = 0, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af532ebccf30da4696c48ec61f6b4d663a329ecf601ca33591327b16d1c179aa25\">RelativeToParent</a> = 1\n\
 }<tr class=\"separator:af532ebccf30da4696c48ec61f6b4d663\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"memitem:af75d5dd7322fa39ed0af4e7839e600f8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8\">BoundaryType</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8ab6e335adc5993e9cd399b6ca487cd641\">CharBoundary</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8ad63d320ccc1696973bd31496ea929ffa\">WordBoundary</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8af98ae49da2e98efd311de63755181562\">SentenceBoundary</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8a11371ad122b325bd7bccf9a251c7156d\">ParagraphBoundary</a>, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8a7b6aacc795b2e76347658ecaf82436ae\">LineBoundary</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8abbf4d3fa905c85d1e6cfcba7715d83ef\">NoBoundary</a>\n\
<br>\n\
 }<tr class=\"separator:af75d5dd7322fa39ed0af4e7839e600f8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
<tr class=\"memitem:a33b1b76638e58f788904bbc63860b66e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#a33b1b76638e58f788904bbc63860b66e\">TableModelChangeType</a> { <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#a33b1b76638e58f788904bbc63860b66eae7633a8d8ff65e1dc011ec538033cf1d\">TableModelChangeInsert</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#a33b1b76638e58f788904bbc63860b66ea147ce35a9047ea57f83be6aad2fa3911\">TableModelChangeDelete</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#a33b1b76638e58f788904bbc63860b66ea9711fbff5d4a4460440a67c37a2afc59\">TableModelChangeUpdate</a>\n\
 }<tr class=\"separator:a33b1b76638e58f788904bbc63860b66e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Enumeration Type Documentation</h2>\n\
<a class=\"anchor\" id=\"af1ef2c97e255bd7f21d3b7614b283d9d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9d\">InterfaceType</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af1ef2c97e255bd7f21d3b7614b283d9dae923e5fb2e2d2becbe07f0f72c1ed167\"></a>TextInterface&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af1ef2c97e255bd7f21d3b7614b283d9da8362ac23a9387cb2c11b86df3fe8cce8\"></a>EditableTextInterface&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af1ef2c97e255bd7f21d3b7614b283d9da9c01acf4a28f9edb47caf7243cf6d294\"></a>ValueInterface&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af1ef2c97e255bd7f21d3b7614b283d9dae6d366318b204db004b4c21af9bbc549\"></a>TableInterface&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af1ef2c97e255bd7f21d3b7614b283d9da2db27434c41069f4dd9c0be04bb430cf\"></a>ActionInterface&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af1ef2c97e255bd7f21d3b7614b283d9da2ec7b7a698860725ceff0efbcca98482\"></a>ImageInterface&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af1ef2c97e255bd7f21d3b7614b283d9da87b77d33a8cdbc4fc82e626655e47d43\"></a>Table2Interface&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
</table>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qaccessible_8h_source.html#l00349\">349</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qaccessible_8h_source.html\">qaccessible.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00350\"></a><span class=\"lineno\">  350</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00351\"></a><span class=\"lineno\">  351</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9dae923e5fb2e2d2becbe07f0f72c1ed167\">TextInterface</a>,</div>\n\
<div class=\"line\"><a name=\"l00352\"></a><span class=\"lineno\">  352</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da8362ac23a9387cb2c11b86df3fe8cce8\">EditableTextInterface</a>,</div>\n\
<div class=\"line\"><a name=\"l00353\"></a><span class=\"lineno\">  353</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da9c01acf4a28f9edb47caf7243cf6d294\">ValueInterface</a>,</div>\n\
<div class=\"line\"><a name=\"l00354\"></a><span class=\"lineno\">  354</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9dae6d366318b204db004b4c21af9bbc549\">TableInterface</a>,</div>\n\
<div class=\"line\"><a name=\"l00355\"></a><span class=\"lineno\">  355</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da2db27434c41069f4dd9c0be04bb430cf\">ActionInterface</a>,</div>\n\
<div class=\"line\"><a name=\"l00356\"></a><span class=\"lineno\">  356</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da2ec7b7a698860725ceff0efbcca98482\">ImageInterface</a>,</div>\n\
<div class=\"line\"><a name=\"l00357\"></a><span class=\"lineno\">  357</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da87b77d33a8cdbc4fc82e626655e47d43\">Table2Interface</a></div>\n\
<div class=\"line\"><a name=\"l00358\"></a><span class=\"lineno\">  358</span>&#160;    };</div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af1ef2c97e255bd7f21d3b7614b283d9da8362ac23a9387cb2c11b86df3fe8cce8\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da8362ac23a9387cb2c11b86df3fe8cce8\">QAccessible2::EditableTextInterface</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible_8h_source.html#l00352\">qaccessible.h:352</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af1ef2c97e255bd7f21d3b7614b283d9da9c01acf4a28f9edb47caf7243cf6d294\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da9c01acf4a28f9edb47caf7243cf6d294\">QAccessible2::ValueInterface</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible_8h_source.html#l00353\">qaccessible.h:353</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af1ef2c97e255bd7f21d3b7614b283d9dae923e5fb2e2d2becbe07f0f72c1ed167\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9dae923e5fb2e2d2becbe07f0f72c1ed167\">QAccessible2::TextInterface</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible_8h_source.html#l00351\">qaccessible.h:351</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af1ef2c97e255bd7f21d3b7614b283d9da2ec7b7a698860725ceff0efbcca98482\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da2ec7b7a698860725ceff0efbcca98482\">QAccessible2::ImageInterface</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible_8h_source.html#l00356\">qaccessible.h:356</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af1ef2c97e255bd7f21d3b7614b283d9dae6d366318b204db004b4c21af9bbc549\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9dae6d366318b204db004b4c21af9bbc549\">QAccessible2::TableInterface</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible_8h_source.html#l00354\">qaccessible.h:354</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af1ef2c97e255bd7f21d3b7614b283d9da87b77d33a8cdbc4fc82e626655e47d43\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da87b77d33a8cdbc4fc82e626655e47d43\">QAccessible2::Table2Interface</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible_8h_source.html#l00357\">qaccessible.h:357</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af1ef2c97e255bd7f21d3b7614b283d9da2db27434c41069f4dd9c0be04bb430cf\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da2db27434c41069f4dd9c0be04bb430cf\">QAccessible2::ActionInterface</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible_8h_source.html#l00355\">qaccessible.h:355</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af532ebccf30da4696c48ec61f6b4d663\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af532ebccf30da4696c48ec61f6b4d663\">CoordinateType</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af532ebccf30da4696c48ec61f6b4d663ab0ef059f0e9878156b9523a405bcb34d\"></a>RelativeToScreen&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af532ebccf30da4696c48ec61f6b4d663a329ecf601ca33591327b16d1c179aa25\"></a>RelativeToParent&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
</table>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00059\">59</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html\">qaccessible2.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af532ebccf30da4696c48ec61f6b4d663ab0ef059f0e9878156b9523a405bcb34d\">RelativeToScreen</a> = 0,</div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af532ebccf30da4696c48ec61f6b4d663a329ecf601ca33591327b16d1c179aa25\">RelativeToParent</a> = 1</div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;    };</div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af532ebccf30da4696c48ec61f6b4d663a329ecf601ca33591327b16d1c179aa25\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af532ebccf30da4696c48ec61f6b4d663a329ecf601ca33591327b16d1c179aa25\">QAccessible2::RelativeToParent</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00062\">qaccessible2.h:62</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af532ebccf30da4696c48ec61f6b4d663ab0ef059f0e9878156b9523a405bcb34d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af532ebccf30da4696c48ec61f6b4d663ab0ef059f0e9878156b9523a405bcb34d\">QAccessible2::RelativeToScreen</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00061\">qaccessible2.h:61</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af75d5dd7322fa39ed0af4e7839e600f8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8\">BoundaryType</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af75d5dd7322fa39ed0af4e7839e600f8ab6e335adc5993e9cd399b6ca487cd641\"></a>CharBoundary&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af75d5dd7322fa39ed0af4e7839e600f8ad63d320ccc1696973bd31496ea929ffa\"></a>WordBoundary&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af75d5dd7322fa39ed0af4e7839e600f8af98ae49da2e98efd311de63755181562\"></a>SentenceBoundary&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af75d5dd7322fa39ed0af4e7839e600f8a11371ad122b325bd7bccf9a251c7156d\"></a>ParagraphBoundary&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af75d5dd7322fa39ed0af4e7839e600f8a7b6aacc795b2e76347658ecaf82436ae\"></a>LineBoundary&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"af75d5dd7322fa39ed0af4e7839e600f8abbf4d3fa905c85d1e6cfcba7715d83ef\"></a>NoBoundary&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
</table>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00065\">65</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html\">qaccessible2.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;                      {</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8ab6e335adc5993e9cd399b6ca487cd641\">CharBoundary</a>,</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8ad63d320ccc1696973bd31496ea929ffa\">WordBoundary</a>,</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8af98ae49da2e98efd311de63755181562\">SentenceBoundary</a>,</div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8a11371ad122b325bd7bccf9a251c7156d\">ParagraphBoundary</a>,</div>\n\
<div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8a7b6aacc795b2e76347658ecaf82436ae\">LineBoundary</a>,</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8abbf4d3fa905c85d1e6cfcba7715d83ef\">NoBoundary</a></div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;    };</div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af75d5dd7322fa39ed0af4e7839e600f8a11371ad122b325bd7bccf9a251c7156d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8a11371ad122b325bd7bccf9a251c7156d\">QAccessible2::ParagraphBoundary</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00069\">qaccessible2.h:69</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af75d5dd7322fa39ed0af4e7839e600f8ab6e335adc5993e9cd399b6ca487cd641\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8ab6e335adc5993e9cd399b6ca487cd641\">QAccessible2::CharBoundary</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00066\">qaccessible2.h:66</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af75d5dd7322fa39ed0af4e7839e600f8ad63d320ccc1696973bd31496ea929ffa\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8ad63d320ccc1696973bd31496ea929ffa\">QAccessible2::WordBoundary</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00067\">qaccessible2.h:67</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af75d5dd7322fa39ed0af4e7839e600f8abbf4d3fa905c85d1e6cfcba7715d83ef\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8abbf4d3fa905c85d1e6cfcba7715d83ef\">QAccessible2::NoBoundary</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00071\">qaccessible2.h:71</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af75d5dd7322fa39ed0af4e7839e600f8a7b6aacc795b2e76347658ecaf82436ae\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8a7b6aacc795b2e76347658ecaf82436ae\">QAccessible2::LineBoundary</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00070\">qaccessible2.h:70</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_af75d5dd7322fa39ed0af4e7839e600f8af98ae49da2e98efd311de63755181562\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af75d5dd7322fa39ed0af4e7839e600f8af98ae49da2e98efd311de63755181562\">QAccessible2::SentenceBoundary</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00068\">qaccessible2.h:68</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a33b1b76638e58f788904bbc63860b66e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#a33b1b76638e58f788904bbc63860b66e\">TableModelChangeType</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a33b1b76638e58f788904bbc63860b66eae7633a8d8ff65e1dc011ec538033cf1d\"></a>TableModelChangeInsert&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a33b1b76638e58f788904bbc63860b66ea147ce35a9047ea57f83be6aad2fa3911\"></a>TableModelChangeDelete&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"a33b1b76638e58f788904bbc63860b66ea9711fbff5d4a4460440a67c37a2afc59\"></a>TableModelChangeUpdate&#160;</td><td class=\"fielddoc\">\n\
</td></tr>\n\
</table>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00074\">74</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html\">qaccessible2.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;                              {</div>\n\
<div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#a33b1b76638e58f788904bbc63860b66eae7633a8d8ff65e1dc011ec538033cf1d\">TableModelChangeInsert</a>,</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#a33b1b76638e58f788904bbc63860b66ea147ce35a9047ea57f83be6aad2fa3911\">TableModelChangeDelete</a>,</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#a33b1b76638e58f788904bbc63860b66ea9711fbff5d4a4460440a67c37a2afc59\">TableModelChangeUpdate</a></div>\n\
<div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;    };</div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_a33b1b76638e58f788904bbc63860b66ea147ce35a9047ea57f83be6aad2fa3911\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#a33b1b76638e58f788904bbc63860b66ea147ce35a9047ea57f83be6aad2fa3911\">QAccessible2::TableModelChangeDelete</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00076\">qaccessible2.h:76</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_a33b1b76638e58f788904bbc63860b66ea9711fbff5d4a4460440a67c37a2afc59\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#a33b1b76638e58f788904bbc63860b66ea9711fbff5d4a4460440a67c37a2afc59\">QAccessible2::TableModelChangeUpdate</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00077\">qaccessible2.h:77</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_accessible2_html_a33b1b76638e58f788904bbc63860b66eae7633a8d8ff65e1dc011ec538033cf1d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#a33b1b76638e58f788904bbc63860b66eae7633a8d8ff65e1dc011ec538033cf1d\">QAccessible2::TableModelChangeInsert</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible2_8h_source.html#l00075\">qaccessible2.h:75</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";