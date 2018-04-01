var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Instance&lt; c &gt; Class Template Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classmudbox_1_1_instance.html\', tocPrefix);\n\
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
            <h1>Instance&lt; c &gt; Class Template Reference</h1>\n\
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
<div class=\"title\">Instance&lt; c &gt; Class Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classmudbox_1_1_instance.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;typename c&gt;<br>\n\
class mudbox::Instance&lt; c &gt;</h3>\n\
\n\
<p>This is a helper class to manage class instances implemented in plugins, provided for convenience. </p>\n\
<p>The following two are equal: </p><div class=\"fragment\"><div class=\"line\">{</div>\n\
<div class=\"line\">   Image *pMyImage = CreateInstance&lt;Image&gt;();</div>\n\
<div class=\"line\">   pMyImage-&gt;DoSomething();</div>\n\
<div class=\"line\">   <span class=\"keyword\">delete</span> pMyImage;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --><p> and </p><div class=\"fragment\"><div class=\"line\">{</div>\n\
<div class=\"line\">    Instance&lt;Image&gt; pMyImage;</div>\n\
<div class=\"line\">    pMyImage-&gt;DoSomething();</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --><p> In the second case, the target object will be automatically deleted when the block ends. You can also use this class to define member variables in your classes. This way when the owner class is constructed, the instances of the needed classes will be created, and when the object destructed, those instances will be removed from the memory too. For example: </p><div class=\"fragment\"><div class=\"line\"><span class=\"keyword\">class </span>MyClass</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    Instance&lt;Image&gt; m_pSourceImage, m_pDestinationImage;</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">     <span class=\"comment\">// member functions which work with the two images</span></div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --><p>You can also create an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_instance.html\" title=\"This is a helper class to manage class instances implemented in plugins, provided for convenience...\">Instance</a> with an existing object. For example: </p><div class=\"fragment\"><div class=\"line\">Node* pNode = CreateInstance&lt;Node&gt;();</div>\n\
<div class=\"line\">Instance&lt;Node&gt; cInstance(pNode);  </div>\n\
</div><!-- fragment --><p> Here, cInstance takes ownership of pNode, and will delete it when cInstance goes out of scope. </p>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00616\">616</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a39eaed6661e1ddd8a84cfa539863e86a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_instance.html#a39eaed6661e1ddd8a84cfa539863e86a\">Instance</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a> *pObject)</td></tr>\n\
<tr class=\"separator:a39eaed6661e1ddd8a84cfa539863e86a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abd244309a2132a0605da2b90f79fdb01\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_instance.html#abd244309a2132a0605da2b90f79fdb01\">Instance</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>)</td></tr>\n\
<tr class=\"separator:abd244309a2132a0605da2b90f79fdb01\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0e0f6345b78bf76f3066d2b9a6bbdf40\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_instance.html#a0e0f6345b78bf76f3066d2b9a6bbdf40\">~Instance</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>)</td></tr>\n\
<tr class=\"separator:a0e0f6345b78bf76f3066d2b9a6bbdf40\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af9ff61532bab6e9ea009f33cdd5f614e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_instance.html#af9ff61532bab6e9ea009f33cdd5f614e\">operator-&gt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>)</td></tr>\n\
<tr class=\"separator:af9ff61532bab6e9ea009f33cdd5f614e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0b863938f61afdadcecf38204c5273d7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_instance.html#a0b863938f61afdadcecf38204c5273d7\">operator-&gt;</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>) const </td></tr>\n\
<tr class=\"separator:a0b863938f61afdadcecf38204c5273d7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a34c0a63878ebd42f10a1fea1d53ab4ec\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_instance.html#a34c0a63878ebd42f10a1fea1d53ab4ec\">operator c *</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>) const </td></tr>\n\
<tr class=\"separator:a34c0a63878ebd42f10a1fea1d53ab4ec\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa208b1b5658aa460a406a6f593c125dc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_instance.html#aa208b1b5658aa460a406a6f593c125dc\">Release</a> ()</td></tr>\n\
<tr class=\"memdesc:aa208b1b5658aa460a406a6f593c125dc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Take ownership of m_pObject.  <a href=\"classmudbox_1_1_instance.html#aa208b1b5658aa460a406a6f593c125dc\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa208b1b5658aa460a406a6f593c125dc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a39eaed6661e1ddd8a84cfa539863e86a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_instance.html\">Instance</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>pObject</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00621\">621</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00621\"></a><span class=\"lineno\">  621</span>&#160;: m_pObject( pObject ) {};</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"abd244309a2132a0605da2b90f79fdb01\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_instance.html\">Instance</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00622\">622</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00622\"></a><span class=\"lineno\">  622</span>&#160;{ m_pObject = CreateInstance&lt;c&gt;(); };</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0e0f6345b78bf76f3066d2b9a6bbdf40\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">~<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_instance.html\">Instance</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00623\">623</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00623\"></a><span class=\"lineno\">  623</span>&#160;{ <span class=\"keywordflow\">if</span>( m_pObject ) <span class=\"keyword\">delete</span> m_pObject; };</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"af9ff61532bab6e9ea009f33cdd5f614e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a>* operator-&gt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00624\">624</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00624\"></a><span class=\"lineno\">  624</span>&#160;{ <span class=\"keywordflow\">return</span> m_pObject; };</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0b863938f61afdadcecf38204c5273d7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a>* operator-&gt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00625\">625</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00625\"></a><span class=\"lineno\">  625</span>&#160;{ <span class=\"keywordflow\">return</span> m_pObject; };</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a34c0a63878ebd42f10a1fea1d53ab4ec\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">operator <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a> * </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00626\">626</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00626\"></a><span class=\"lineno\">  626</span>&#160;{ <span class=\"keywordflow\">return</span> m_pObject; };</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa208b1b5658aa460a406a6f593c125dc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a>* Release </td>\n\
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
<p>Take ownership of m_pObject. </p>\n\
<p>After this call the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_instance.html\" title=\"This is a helper class to manage class instances implemented in plugins, provided for convenience...\">Instance</a> should not be used and the caller is responsible for deleting the returned object. </p>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html#l00630\">630</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00630\"></a><span class=\"lineno\">  630</span>&#160;{ <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a>* pTemp = m_pObject; m_pObject = 0; <span class=\"keywordflow\">return</span> pTemp; }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a1f2d7f8147412c43ba2303a56f97ee73\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a></div><div class=\"ttdeci\">const GLubyte * c</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l05419\">GLee.h:5419</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>Mudbox/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/kernel_8h_source.html\">kernel.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";