var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>half_ Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classmudbox_1_1half__.html\', tocPrefix);\n\
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
            <h1>half_ Class Reference</h1>\n\
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
<div class=\"title\">half_ Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-052A274E-C238-4308-8AC4-44A5AC9BB387.htm\">Miscellaneous Utilities &gt; Math and Geometry Utilities</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"classmudbox_1_1half__.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html\">image.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Half precision (16 bit) float class. </p>\n\
<p>Supports fast conversion between float and half precision.</p>\n\
<p>Format is compatible with openEXRs half precision type. 1 sign bit, 5 exponent bits (bias = 15), 10 fraction bits. </p>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html#l00029\">29</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html\">image.h</a>.</p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ad8826da32e87616644fa02af42303bf2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1half__.html#ad8826da32e87616644fa02af42303bf2\">half_</a> ()</td></tr>\n\
<tr class=\"separator:ad8826da32e87616644fa02af42303bf2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6caada2a928f37282cc18b8d77ec8ca3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1half__.html#a6caada2a928f37282cc18b8d77ec8ca3\">half_</a> (float <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>)</td></tr>\n\
<tr class=\"separator:a6caada2a928f37282cc18b8d77ec8ca3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae80f6077a5ac6ce1710cda5b30039890\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1half__.html#ae80f6077a5ac6ce1710cda5b30039890\">operator float</a> () const </td></tr>\n\
<tr class=\"separator:ae80f6077a5ac6ce1710cda5b30039890\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afaf274a1850f362723c48b5d3fcfa584\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1half__.html\">half_</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1half__.html#afaf274a1850f362723c48b5d3fcfa584\">operator=</a> (float <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>)</td></tr>\n\
<tr class=\"separator:afaf274a1850f362723c48b5d3fcfa584\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ad8826da32e87616644fa02af42303bf2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1half__.html\">half_</a> </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html#l00040\">40</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html\">image.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;{};</div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6caada2a928f37282cc18b8d77ec8ca3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1half__.html\">half_</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">float&#160;</td>\n\
          <td class=\"paramname\"><em>f</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html#l00041\">41</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html\">image.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>   <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a09b61c9254503800358fe9680a997626\">x</a>    = *(<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> *)&amp;<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>;</div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>   frac = (x &gt;&gt; 13) &amp; 0x03ff;</div>\n\
<div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\">   45</span>&#160;        <span class=\"keywordtype\">int</span>            exp  = (<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>)((x &gt;&gt; 23) &amp; 0xff) - 127;</div>\n\
<div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\">   46</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;        m_bits = (x &gt;&gt; 16) &amp; 0x8000;  <span class=\"comment\">// extract the sign bit</span></div>\n\
<div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;        <span class=\"keywordflow\">if</span> (exp &gt; 16) {      <span class=\"comment\">// handle overflows/underflows</span></div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;            exp  = 16;</div>\n\
<div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;            frac = 0x03ff;</div>\n\
<div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;        } <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (exp &lt;= -15) {</div>\n\
<div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;            frac = 0;</div>\n\
<div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;            exp  = -15;</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;        }</div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\">   57</span>&#160;        m_bits |= ((exp + 15) &lt;&lt; 10) | frac;</div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_aa813ad7a4a00cda401ffd0c336154620\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a></div><div class=\"ttdeci\">unsigned int(APIENTRYP PFNGLXGETAGPOFFSETMESAPROC)(const void *pointer)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l10762\">GLee.h:10762</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a09b61c9254503800358fe9680a997626\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a09b61c9254503800358fe9680a997626\">x</a></div><div class=\"ttdeci\">GLenum GLint x</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00876\">GLee.h:876</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a691492ec0bd6383f91200e49f6ae40ed\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a></div><div class=\"ttdeci\">GLclampf f</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l09303\">GLee.h:9303</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ae80f6077a5ac6ce1710cda5b30039890\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">operator float </td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html#l00063\">63</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html\">image.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;        <span class=\"keywordtype\">int</span>           exp  = (m_bits &gt;&gt; 10) &amp; 0x1f;</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>    = (m_bits &amp; 0x8000) &lt;&lt; 16; <span class=\"comment\">// extract the sign bit</span></div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>  frac = (m_bits &amp; 0x03ff) &lt;&lt; 13;</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;        <span class=\"keywordflow\">if</span> (exp == 0x1f) {      <span class=\"comment\">// convert 16-bit FP inf/NaN to 32-bit inf/NaN value</span></div>\n\
<div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;            exp =  0xff - <a class=\"code\" href=\"#!/url=./cpp_ref/image_8h.html#a9f6b3f03bc00a767e53cc6681c23ace6\">ExponentBiasDelta</a>;</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;        } <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (exp == 0) {</div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;            exp = -<a class=\"code\" href=\"#!/url=./cpp_ref/image_8h.html#a9f6b3f03bc00a767e53cc6681c23ace6\">ExponentBiasDelta</a>;  <span class=\"comment\">// convert 16-bit FP zero/denorm to 32-bit zero/denorm value</span></div>\n\
<div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;        }</div>\n\
<div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;        f |= ((exp + <a class=\"code\" href=\"#!/url=./cpp_ref/image_8h.html#a9f6b3f03bc00a767e53cc6681c23ace6\">ExponentBiasDelta</a>) &lt;&lt; 23) | frac;</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;        <span class=\"keywordflow\">return</span> *(<span class=\"keywordtype\">float</span> *)&amp;f;</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"image_8h_html_a9f6b3f03bc00a767e53cc6681c23ace6\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/image_8h.html#a9f6b3f03bc00a767e53cc6681c23ace6\">ExponentBiasDelta</a></div><div class=\"ttdeci\">#define ExponentBiasDelta</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/image_8h_source.html#l00062\">image.h:62</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a691492ec0bd6383f91200e49f6ae40ed\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a></div><div class=\"ttdeci\">GLclampf f</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l09303\">GLee.h:9303</a></div></div>\n\
</div><!-- fragment -->\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afaf274a1850f362723c48b5d3fcfa584\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1half__.html\">half_</a>&amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">float&#160;</td>\n\
          <td class=\"paramname\"><em>f</em></td><td>)</td>\n\
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
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html#l00079\">79</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/image_8h_source.html\">image.h</a>.</p>\n\
<div class=\"fragment\"><div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;        *<span class=\"keyword\">this</span> = <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1half__.html#ad8826da32e87616644fa02af42303bf2\">half_</a> (<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>);</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;        <span class=\"keywordflow\">return</span> *<span class=\"keyword\">this</span>;</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;    }</div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1half___html_ad8826da32e87616644fa02af42303bf2\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1half__.html#ad8826da32e87616644fa02af42303bf2\">mudbox::half_::half_</a></div><div class=\"ttdeci\">half_()</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/image_8h_source.html#l00040\">image.h:40</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a691492ec0bd6383f91200e49f6ae40ed\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a></div><div class=\"ttdeci\">GLclampf f</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l09303\">GLee.h:9303</a></div></div>\n\
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