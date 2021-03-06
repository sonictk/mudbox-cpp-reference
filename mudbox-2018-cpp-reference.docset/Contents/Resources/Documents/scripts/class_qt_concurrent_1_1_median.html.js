var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Median&lt; T &gt; Class Template Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_qt_concurrent_1_1_median.html\', tocPrefix);\n\
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
            <h1>Median&lt; T &gt; Class Template Reference</h1>\n\
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
<div class=\"title\">Median&lt; T &gt; Class Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_qt_concurrent_1_1_median.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html\">qtconcurrentmedian.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;typename T&gt;<br>\n\
class QtConcurrent::Median&lt; T &gt;</h3>\n\
\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html#l00062\">62</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html\">qtconcurrentmedian.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a965a66f90f4cd68540094f0ad575dc2e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_median.html#a965a66f90f4cd68540094f0ad575dc2e\">Median</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a> _bufferSize)</td></tr>\n\
<tr class=\"separator:a965a66f90f4cd68540094f0ad575dc2e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad20897c5c8bd47f5d4005989bead0e55\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_median.html#ad20897c5c8bd47f5d4005989bead0e55\">reset</a> ()</td></tr>\n\
<tr class=\"separator:ad20897c5c8bd47f5d4005989bead0e55\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8b3a14a82a589634926167c20715c56f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_median.html#a8b3a14a82a589634926167c20715c56f\">addValue</a> (T <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a>)</td></tr>\n\
<tr class=\"separator:a8b3a14a82a589634926167c20715c56f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad55d4caa055047ecc4bb903fc59f8f50\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_median.html#ad55d4caa055047ecc4bb903fc59f8f50\">isMedianValid</a> () const </td></tr>\n\
<tr class=\"separator:ad55d4caa055047ecc4bb903fc59f8f50\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abf67e58e3d2fedcbb350b199803c826f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">T&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_median.html#abf67e58e3d2fedcbb350b199803c826f\">median</a> ()</td></tr>\n\
<tr class=\"separator:abf67e58e3d2fedcbb350b199803c826f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a965a66f90f4cd68540094f0ad575dc2e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_median.html\">Median</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0067a505d12f13572b26d9535c23b671\">int</a>&#160;</td>\n\
          <td class=\"paramname\"><em>_bufferSize</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html#l00065\">65</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html\">qtconcurrentmedian.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;        : currentMedian(), bufferSize(_bufferSize), currentIndex(0), valid(<span class=\"keyword\">false</span>), dirty(<span class=\"keyword\">true</span>)</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a300a8ed5fb9490aa35713406ec0412df\">values</a>.resize(bufferSize);</div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a300a8ed5fb9490aa35713406ec0412df\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a300a8ed5fb9490aa35713406ec0412df\">values</a></div><div class=\"ttdeci\">GLboolean GLenum GLenum GLvoid * values</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00895\">GLee.h:895</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ad20897c5c8bd47f5d4005989bead0e55\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a11158672fb6a3f09183a338ecff59e41\">reset</a> </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html#l00071\">71</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html\">qtconcurrentmedian.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a300a8ed5fb9490aa35713406ec0412df\">values</a>.fill(0);</div>\n\
<div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;        currentIndex = 0;</div>\n\
<div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;        valid = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;        dirty = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a300a8ed5fb9490aa35713406ec0412df\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a300a8ed5fb9490aa35713406ec0412df\">values</a></div><div class=\"ttdeci\">GLboolean GLenum GLenum GLvoid * values</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00895\">GLee.h:895</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8b3a14a82a589634926167c20715c56f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> addValue </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">T&#160;</td>\n\
          <td class=\"paramname\"><em>value</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html#l00079\">79</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html\">qtconcurrentmedian.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;        currentIndex = ((currentIndex + 1) % bufferSize);</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;        <span class=\"keywordflow\">if</span> (valid == <span class=\"keyword\">false</span> &amp;&amp; currentIndex % bufferSize == 0)</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;            valid = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\">   84</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\">   85</span>&#160;        <span class=\"comment\">// Only update the cached median value when we have to, that</span></div>\n\
<div class=\"line\"><a name=\"l00086\"></a><span class=\"lineno\">   86</span>&#160;        <span class=\"comment\">// is when the new value is on then other side of the median</span></div>\n\
<div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;        <span class=\"comment\">// compared to the current value at the index.</span></div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;        <span class=\"keyword\">const</span> T currentIndexValue = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a300a8ed5fb9490aa35713406ec0412df\">values</a>[currentIndex];</div>\n\
<div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;        <span class=\"keywordflow\">if</span> ((currentIndexValue &gt; currentMedian &amp;&amp; currentMedian &gt; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a>)</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;            || (currentMedian &gt; currentIndexValue &amp;&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a> &gt; currentMedian)) {</div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;            dirty = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;        }</div>\n\
<div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\">   93</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a300a8ed5fb9490aa35713406ec0412df\">values</a>[currentIndex] = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a>;</div>\n\
<div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_aed27f17ebdc1fd207871bc2ed5da0d0f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a></div><div class=\"ttdeci\">GLsizei const GLfloat * value</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01742\">GLee.h:1742</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a300a8ed5fb9490aa35713406ec0412df\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a300a8ed5fb9490aa35713406ec0412df\">values</a></div><div class=\"ttdeci\">GLboolean GLenum GLenum GLvoid * values</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00895\">GLee.h:895</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad55d4caa055047ecc4bb903fc59f8f50\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool isMedianValid </td>\n\
          <td>(</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html#l00097\">97</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html\">qtconcurrentmedian.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00098\"></a><span class=\"lineno\">   98</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;        <span class=\"keywordflow\">return</span> valid;</div>\n\
<div class=\"line\"><a name=\"l00100\"></a><span class=\"lineno\">  100</span>&#160;    }</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"abf67e58e3d2fedcbb350b199803c826f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">T median </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html#l00102\">102</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html\">qtconcurrentmedian.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00103\"></a><span class=\"lineno\">  103</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00104\"></a><span class=\"lineno\">  104</span>&#160;        <span class=\"keywordflow\">if</span> (dirty) {</div>\n\
<div class=\"line\"><a name=\"l00105\"></a><span class=\"lineno\">  105</span>&#160;            dirty = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"><a name=\"l00106\"></a><span class=\"lineno\">  106</span>&#160;            <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_vector.html\">QVector&lt;T&gt;</a> sorted = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a300a8ed5fb9490aa35713406ec0412df\">values</a>;</div>\n\
<div class=\"line\"><a name=\"l00107\"></a><span class=\"lineno\">  107</span>&#160;            <a class=\"code\" href=\"#!/url=./cpp_ref/qalgorithms_8h.html#a7b729c0f083ef856c223a47e76573ecf\">qSort</a>(sorted);</div>\n\
<div class=\"line\"><a name=\"l00108\"></a><span class=\"lineno\">  108</span>&#160;            currentMedian = sorted.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_vector.html#a6c815464f1c3ec7193bb98999dd7f8c9\">at</a>(bufferSize / 2 + 1);</div>\n\
<div class=\"line\"><a name=\"l00109\"></a><span class=\"lineno\">  109</span>&#160;        }</div>\n\
<div class=\"line\"><a name=\"l00110\"></a><span class=\"lineno\">  110</span>&#160;        <span class=\"keywordflow\">return</span> currentMedian;</div>\n\
<div class=\"line\"><a name=\"l00111\"></a><span class=\"lineno\">  111</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"class_q_vector_html_a6c815464f1c3ec7193bb98999dd7f8c9\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_vector.html#a6c815464f1c3ec7193bb98999dd7f8c9\">QVector::at</a></div><div class=\"ttdeci\">const T &amp; at(int i) const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qvector_8h_source.html#l00350\">qvector.h:350</a></div></div>\n\
<div class=\"ttc\" id=\"qalgorithms_8h_html_a7b729c0f083ef856c223a47e76573ecf\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qalgorithms_8h.html#a7b729c0f083ef856c223a47e76573ecf\">qSort</a></div><div class=\"ttdeci\">void qSort(RandomAccessIterator start, RandomAccessIterator end)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qalgorithms_8h_source.html#l00177\">qalgorithms.h:177</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_vector_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_vector.html\">QVector</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/audiodataoutput_8h_source.html#l00033\">audiodataoutput.h:33</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a300a8ed5fb9490aa35713406ec0412df\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a300a8ed5fb9490aa35713406ec0412df\">values</a></div><div class=\"ttdeci\">GLboolean GLenum GLenum GLvoid * values</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00895\">GLee.h:895</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>QtCore/<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/qtconcurrentmedian_8h_source.html\">qtconcurrentmedian.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";