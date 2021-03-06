var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>PtexExtractor/ptex/PtexUtils.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_ptex_extractor_2ptex_2_ptex_utils_8h-example.html\', tocPrefix);\n\
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
            <h1>PtexExtractor/ptex/PtexUtils.h</h1>\n\
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
<div class=\"title\">PtexExtractor/ptex/PtexUtils.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef PtexUtils_h</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define PtexUtils_h</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/* </span></div>\n\
<div class=\"line\"><span class=\"comment\">PTEX SOFTWARE</span></div>\n\
<div class=\"line\"><span class=\"comment\">Copyright 2009 Disney Enterprises, Inc.  All rights reserved</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">Redistribution and use in source and binary forms, with or without</span></div>\n\
<div class=\"line\"><span class=\"comment\">modification, are permitted provided that the following conditions are</span></div>\n\
<div class=\"line\"><span class=\"comment\">met:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">  * Redistributions of source code must retain the above copyright</span></div>\n\
<div class=\"line\"><span class=\"comment\">    notice, this list of conditions and the following disclaimer.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">  * Redistributions in binary form must reproduce the above copyright</span></div>\n\
<div class=\"line\"><span class=\"comment\">    notice, this list of conditions and the following disclaimer in</span></div>\n\
<div class=\"line\"><span class=\"comment\">    the documentation and/or other materials provided with the</span></div>\n\
<div class=\"line\"><span class=\"comment\">    distribution.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">  * The names &quot;Disney&quot;, &quot;Walt Disney Pictures&quot;, &quot;Walt Disney Animation</span></div>\n\
<div class=\"line\"><span class=\"comment\">    Studios&quot; or the names of its contributors may NOT be used to</span></div>\n\
<div class=\"line\"><span class=\"comment\">    endorse or promote products derived from this software without</span></div>\n\
<div class=\"line\"><span class=\"comment\">    specific prior written permission from Walt Disney Pictures.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">Disclaimer: THIS SOFTWARE IS PROVIDED BY WALT DISNEY PICTURES AND</span></div>\n\
<div class=\"line\"><span class=\"comment\">CONTRIBUTORS &quot;AS IS&quot; AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING,</span></div>\n\
<div class=\"line\"><span class=\"comment\">BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS</span></div>\n\
<div class=\"line\"><span class=\"comment\">FOR A PARTICULAR PURPOSE, NONINFRINGEMENT AND TITLE ARE DISCLAIMED.</span></div>\n\
<div class=\"line\"><span class=\"comment\">IN NO EVENT SHALL WALT DISNEY PICTURES, THE COPYRIGHT HOLDER OR</span></div>\n\
<div class=\"line\"><span class=\"comment\">CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,</span></div>\n\
<div class=\"line\"><span class=\"comment\">EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,</span></div>\n\
<div class=\"line\"><span class=\"comment\">PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR</span></div>\n\
<div class=\"line\"><span class=\"comment\">PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND BASED ON ANY</span></div>\n\
<div class=\"line\"><span class=\"comment\">THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT</span></div>\n\
<div class=\"line\"><span class=\"comment\">(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE</span></div>\n\
<div class=\"line\"><span class=\"comment\">OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</span></div>\n\
<div class=\"line\"><span class=\"comment\">*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;Ptexture.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">struct </span>PtexUtils : <span class=\"keyword\">public</span> Ptex {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">bool</span> isPowerOfTwo(<span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a09b61c9254503800358fe9680a997626\">x</a>)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> !(x&amp;(x-1));</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> uint32_t ones(uint32_t x)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"comment\">// count number of ones</span></div>\n\
<div class=\"line\">    x = (x &amp; 0x55555555) + ((x &gt;&gt; 1) &amp; 0x55555555); <span class=\"comment\">// add pairs of bits</span></div>\n\
<div class=\"line\">    x = (x &amp; 0x33333333) + ((x &gt;&gt; 2) &amp; 0x33333333); <span class=\"comment\">// add bit pairs</span></div>\n\
<div class=\"line\">    x = (x &amp; 0x0f0f0f0f) + ((x &gt;&gt; 4) &amp; 0x0f0f0f0f); <span class=\"comment\">// add nybbles</span></div>\n\
<div class=\"line\">    x += (x &gt;&gt; 8);                              <span class=\"comment\">// add bytes</span></div>\n\
<div class=\"line\">    x += (x &gt;&gt; 16);                                 <span class=\"comment\">// add words</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span>(x &amp; 0xff);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> uint32_t floor_log2(uint32_t x)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"comment\">// floor(log2(n))</span></div>\n\
<div class=\"line\">    x |= (x &gt;&gt; 1);</div>\n\
<div class=\"line\">    x |= (x &gt;&gt; 2);</div>\n\
<div class=\"line\">    x |= (x &gt;&gt; 4);</div>\n\
<div class=\"line\">    x |= (x &gt;&gt; 8);</div>\n\
<div class=\"line\">    x |= (x &gt;&gt; 16);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> ones(x&gt;&gt;1);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> uint32_t ceil_log2(uint32_t x)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"comment\">// ceil(log2(n))</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> isPow2 = isPowerOfTwo(x);</div>\n\
<div class=\"line\">    x |= (x &gt;&gt; 1);</div>\n\
<div class=\"line\">    x |= (x &gt;&gt; 2);</div>\n\
<div class=\"line\">    x |= (x &gt;&gt; 4);</div>\n\
<div class=\"line\">    x |= (x &gt;&gt; 8);</div>\n\
<div class=\"line\">    x |= (x &gt;&gt; 16);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> ones(x&gt;&gt;1) + !isPow2;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">double</span> smoothstep(<span class=\"keywordtype\">double</span> x, <span class=\"keywordtype\">double</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a>, <span class=\"keywordtype\">double</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a>)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( x &lt; a ) <span class=\"keywordflow\">return</span> 0;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( x &gt;= b ) <span class=\"keywordflow\">return</span> 1;</div>\n\
<div class=\"line\">    x = (x - <a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a>)/(b - a);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> x*x * (3 - 2*<a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a09b61c9254503800358fe9680a997626\">x</a>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">double</span> qsmoothstep(<span class=\"keywordtype\">double</span> x, <span class=\"keywordtype\">double</span> a, <span class=\"keywordtype\">double</span> b)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"comment\">// quintic smoothstep (cubic is only C1)</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( x &lt; a ) <span class=\"keywordflow\">return</span> 0;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( x &gt;= b ) <span class=\"keywordflow\">return</span> 1;</div>\n\
<div class=\"line\">    x = (x - <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a>)/(b - a);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> x*x*x * (10 + x * (-15 + x*6));</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">typename</span> T&gt;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> T cond(<span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a>, T a, T b) { <span class=\"keywordflow\">return</span> c * a + (!<a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a>)*b; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">typename</span> T&gt;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> T min(T a, T b) { <span class=\"keywordflow\">return</span> cond(a &lt; b, a, b); }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">typename</span> T&gt;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> T <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8fa4ae5e2b2ef3e57a2bde9530581904\">max</a>(T a, T b) { <span class=\"keywordflow\">return</span> cond(a &gt;= b, a, b); }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">typename</span> T&gt;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> T <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3878d3005eeb2d2ef414abc752ba3c9b\">clamp</a>(T x, T lo, T hi) { <span class=\"keywordflow\">return</span> cond(x &lt; lo, lo, cond(x &gt; hi, hi, x)); }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">bool</span> isConstant(<span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>, <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>, <span class=\"keywordtype\">int</span> ures, <span class=\"keywordtype\">int</span> vres, </div>\n\
<div class=\"line\">               <span class=\"keywordtype\">int</span> pixelSize);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> interleave(<span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a72e0fdf0f845ded60b1fada9e9195cd7\">src</a>, <span class=\"keywordtype\">int</span> sstride, <span class=\"keywordtype\">int</span> ures, <span class=\"keywordtype\">int</span> vres, </div>\n\
<div class=\"line\">               <span class=\"keywordtype\">void</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a92034251bfd455d524a9b5610cddba00\">dst</a>, <span class=\"keywordtype\">int</span> dstride, DataType dt, <span class=\"keywordtype\">int</span> nchannels);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> deinterleave(<span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* src, <span class=\"keywordtype\">int</span> sstride, <span class=\"keywordtype\">int</span> ures, <span class=\"keywordtype\">int</span> vres, </div>\n\
<div class=\"line\">                 <span class=\"keywordtype\">void</span>* dst, <span class=\"keywordtype\">int</span> dstride, DataType dt, <span class=\"keywordtype\">int</span> nchannels);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> encodeDifference(<span class=\"keywordtype\">void</span>* data, <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">size</a>, DataType dt);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> decodeDifference(<span class=\"keywordtype\">void</span>* data, <span class=\"keywordtype\">int</span> size, DataType dt);</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> <span class=\"keywordtype\">void</span> ReduceFn(<span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* src, <span class=\"keywordtype\">int</span> sstride, <span class=\"keywordtype\">int</span> ures, <span class=\"keywordtype\">int</span> vres,</div>\n\
<div class=\"line\">              <span class=\"keywordtype\">void</span>* dst, <span class=\"keywordtype\">int</span> dstride, DataType dt, <span class=\"keywordtype\">int</span> nchannels);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> reduce(<span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* src, <span class=\"keywordtype\">int</span> sstride, <span class=\"keywordtype\">int</span> ures, <span class=\"keywordtype\">int</span> vres,</div>\n\
<div class=\"line\">               <span class=\"keywordtype\">void</span>* dst, <span class=\"keywordtype\">int</span> dstride, DataType dt, <span class=\"keywordtype\">int</span> nchannels);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> reduceu(<span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* src, <span class=\"keywordtype\">int</span> sstride, <span class=\"keywordtype\">int</span> ures, <span class=\"keywordtype\">int</span> vres,</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">void</span>* dst, <span class=\"keywordtype\">int</span> dstride, DataType dt, <span class=\"keywordtype\">int</span> nchannels);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> reducev(<span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* src, <span class=\"keywordtype\">int</span> sstride, <span class=\"keywordtype\">int</span> ures, <span class=\"keywordtype\">int</span> vres,</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">void</span>* dst, <span class=\"keywordtype\">int</span> dstride, DataType dt, <span class=\"keywordtype\">int</span> nchannels);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> reduceTri(<span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* src, <span class=\"keywordtype\">int</span> sstride, <span class=\"keywordtype\">int</span> ures, <span class=\"keywordtype\">int</span> vres,</div>\n\
<div class=\"line\">              <span class=\"keywordtype\">void</span>* dst, <span class=\"keywordtype\">int</span> dstride, DataType dt, <span class=\"keywordtype\">int</span> nchannels);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> average(<span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* src, <span class=\"keywordtype\">int</span> sstride, <span class=\"keywordtype\">int</span> ures, <span class=\"keywordtype\">int</span> vres,</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">void</span>* dst, DataType dt, <span class=\"keywordtype\">int</span> nchannels);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> fill(<span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* src, <span class=\"keywordtype\">void</span>* dst, <span class=\"keywordtype\">int</span> dstride,</div>\n\
<div class=\"line\">             <span class=\"keywordtype\">int</span> ures, <span class=\"keywordtype\">int</span> vres, <span class=\"keywordtype\">int</span> pixelsize);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> copy(<span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* src, <span class=\"keywordtype\">int</span> sstride, <span class=\"keywordtype\">void</span>* dst, <span class=\"keywordtype\">int</span> dstride,</div>\n\
<div class=\"line\">             <span class=\"keywordtype\">int</span> nrows, <span class=\"keywordtype\">int</span> rowlen);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> blend(<span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* src, <span class=\"keywordtype\">float</span> weight, <span class=\"keywordtype\">void</span>* dst, <span class=\"keywordtype\">bool</span> flip,</div>\n\
<div class=\"line\">              <span class=\"keywordtype\">int</span> rowlen, DataType dt, <span class=\"keywordtype\">int</span> nchannels);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> multalpha(<span class=\"keywordtype\">void</span>* data, <span class=\"keywordtype\">int</span> npixels, DataType dt, <span class=\"keywordtype\">int</span> nchannels, <span class=\"keywordtype\">int</span> alphachan);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> divalpha(<span class=\"keywordtype\">void</span>* data, <span class=\"keywordtype\">int</span> npixels, DataType dt, <span class=\"keywordtype\">int</span> nchannels, <span class=\"keywordtype\">int</span> alphachan);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> genRfaceids(<span class=\"keyword\">const</span> FaceInfo* faces, <span class=\"keywordtype\">int</span> nfaces, </div>\n\
<div class=\"line\">                uint32_t* rfaceids, uint32_t* faceids);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// fixed length vector accumulator: dst[i] += val[i] * weight</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">typename</span> T, <span class=\"keywordtype\">int</span> n&gt;</div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>VecAccum {</div>\n\
<div class=\"line\">    VecAccum() {}</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> operator()(<span class=\"keywordtype\">double</span>* dst, <span class=\"keyword\">const</span> T* val, <span class=\"keywordtype\">double</span> weight) </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        *dst += *val * weight;</div>\n\
<div class=\"line\">        <span class=\"comment\">// use template to unroll loop</span></div>\n\
<div class=\"line\">        VecAccum&lt;T,<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a830e6eb5d1b77f7226a78592ba9d2613\">n</a>-1&gt;()(dst+1, val+1, weight);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">typename</span> T&gt;</div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>VecAccum&lt;T,0&gt; { <span class=\"keywordtype\">void</span> operator()(<span class=\"keywordtype\">double</span>*, <span class=\"keyword\">const</span> T*, <span class=\"keywordtype\">double</span>) {} };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// variable length vector accumulator: dst[i] += val[i] * weight</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">typename</span> T&gt;</div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>VecAccumN {</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> operator()(<span class=\"keywordtype\">double</span>* dst, <span class=\"keyword\">const</span> T* val, <span class=\"keywordtype\">int</span> nchan, <span class=\"keywordtype\">double</span> weight) </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = 0; i &lt; nchan; i++) dst[i] += val[i] * weight;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// fixed length vector multiplier: dst[i] += val[i] * weight</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">typename</span> T, <span class=\"keywordtype\">int</span> n&gt;</div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>VecMult {</div>\n\
<div class=\"line\">    VecMult() {}</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> operator()(<span class=\"keywordtype\">double</span>* dst, <span class=\"keyword\">const</span> T* val, <span class=\"keywordtype\">double</span> weight) </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        *dst = *val * weight;</div>\n\
<div class=\"line\">        <span class=\"comment\">// use template to unroll loop</span></div>\n\
<div class=\"line\">        VecMult&lt;T,<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a830e6eb5d1b77f7226a78592ba9d2613\">n</a>-1&gt;()(dst+1, val+1, weight);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">typename</span> T&gt;</div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>VecMult&lt;T,0&gt; { <span class=\"keywordtype\">void</span> operator()(<span class=\"keywordtype\">double</span>*, <span class=\"keyword\">const</span> T*, <span class=\"keywordtype\">double</span>) {} };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// variable length vector multiplier: dst[i] = val[i] * weight</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">typename</span> T&gt;</div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>VecMultN {</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> operator()(<span class=\"keywordtype\">double</span>* dst, <span class=\"keyword\">const</span> T* val, <span class=\"keywordtype\">int</span> nchan, <span class=\"keywordtype\">double</span> weight) </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = 0; i &lt; nchan; i++) dst[i] = val[i] * weight;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> (*ApplyConstFn)(<span class=\"keywordtype\">double</span> weight, <span class=\"keywordtype\">double</span>* <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a92034251bfd455d524a9b5610cddba00\">dst</a>, <span class=\"keywordtype\">void</span>* <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>, <span class=\"keywordtype\">int</span> nChan);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> ApplyConstFn applyConstFunctions[20];</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> applyConst(<span class=\"keywordtype\">double</span> weight, <span class=\"keywordtype\">double</span>* dst, <span class=\"keywordtype\">void</span>* data, Ptex::DataType dt, <span class=\"keywordtype\">int</span> nChan)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"comment\">// dispatch specialized apply function</span></div>\n\
<div class=\"line\">    ApplyConstFn fn = applyConstFunctions[((unsigned)nChan&lt;=4)*nChan*4 + dt];</div>\n\
<div class=\"line\">    fn(weight, dst, data, nChan);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";