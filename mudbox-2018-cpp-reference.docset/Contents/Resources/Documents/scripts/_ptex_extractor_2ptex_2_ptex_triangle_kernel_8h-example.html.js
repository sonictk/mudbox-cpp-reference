var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>PtexExtractor/ptex/PtexTriangleKernel.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_ptex_extractor_2ptex_2_ptex_triangle_kernel_8h-example.html\', tocPrefix);\n\
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
            <h1>PtexExtractor/ptex/PtexTriangleKernel.h</h1>\n\
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
<div class=\"title\">PtexExtractor/ptex/PtexTriangleKernel.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef PtexTriangleKernel_h</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define PtexTriangleKernel_h</span></div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#include &lt;assert.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;algorithm&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;numeric&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;Ptexture.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;PtexUtils.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// kernel width as a multiple of filter width (should be between 3 and 4)</span></div>\n\
<div class=\"line\"><span class=\"comment\">// for values below 3, the gaussian is not close to zero and a contour will be formed</span></div>\n\
<div class=\"line\"><span class=\"comment\">// larger values are more expensive (proportional to width-squared)</span></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> PtexTriangleKernelWidth = 3.5;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PtexTriangleKernelIter : <span class=\"keyword\">public</span> Ptex {</div>\n\
<div class=\"line\"> <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> rowlen;         <span class=\"comment\">// row length (in u)</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> u, <a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>;        <span class=\"comment\">// uv center in texels</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ab296853c9d55bfdc62cda6c50d1b4781\">u1</a>, <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0779c3b73f9aa3a0ac5b0139b5d291d9\">v1</a>, <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ab5b747bf5adb1f9134337c30b9a4ce84\">w1</a>;     <span class=\"comment\">// uvw lower bounds</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1c6bf6fa786a04b729b30e56d68474ef\">u2</a>, <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9a09a1837922b2b806f4589096a52049\">v2</a>, <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1ca5aca787be24213d9591fdf074b094\">w2</a>;     <span class=\"comment\">// uvw upper bounds</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> A,B,C;       <span class=\"comment\">// ellipse coefficients (F = 1)</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> valid;         <span class=\"comment\">// footprint is valid (non-empty)</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> wscale;      <span class=\"comment\">// amount to scale weights by (proportional to texel area)</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> weight;      <span class=\"comment\">// accumulated weight</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> apply(<span class=\"keywordtype\">double</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a92034251bfd455d524a9b5610cddba00\">dst</a>, <span class=\"keywordtype\">void</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>, DataType dt, <span class=\"keywordtype\">int</span> nChan, <span class=\"keywordtype\">int</span> nTxChan)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"comment\">// dispatch specialized apply function</span></div>\n\
<div class=\"line\">    ApplyFn fn = applyFunctions[(nChan!=nTxChan)*20 + ((<span class=\"keywordtype\">unsigned</span>)nChan&lt;=4)*nChan*4 + dt];</div>\n\
<div class=\"line\">    fn(*<span class=\"keyword\">this</span>, dst, data, nChan, nTxChan);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> applyConst(<span class=\"keywordtype\">double</span>* dst, <span class=\"keywordtype\">void</span>* data, DataType dt, <span class=\"keywordtype\">int</span> nChan);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"> <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3db05964a3cc4410f35b7ea2b7eb850d\">void</a> (*ApplyFn)(PtexTriangleKernelIter&amp; k, <span class=\"keywordtype\">double</span>* <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a92034251bfd455d524a9b5610cddba00\">dst</a>, <span class=\"keywordtype\">void</span>* <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>, <span class=\"keywordtype\">int</span> nChan, <span class=\"keywordtype\">int</span> nTxChan);</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> ApplyFn applyFunctions[40];</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PtexTriangleKernel : <span class=\"keyword\">public</span> Ptex {</div>\n\
<div class=\"line\"> <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    Res <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a>;            <span class=\"comment\">// desired resolution</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> u, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>;        <span class=\"comment\">// uv filter center</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ab296853c9d55bfdc62cda6c50d1b4781\">u1</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a0779c3b73f9aa3a0ac5b0139b5d291d9\">v1</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ab5b747bf5adb1f9134337c30b9a4ce84\">w1</a>;      <span class=\"comment\">// uvw lower bounds</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1c6bf6fa786a04b729b30e56d68474ef\">u2</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9a09a1837922b2b806f4589096a52049\">v2</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1ca5aca787be24213d9591fdf074b094\">w2</a>;      <span class=\"comment\">// uvw upper bounds</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> A,B,C;       <span class=\"comment\">// ellipse coefficients (F = A*C-B*B/4)</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> set(Res resVal, <span class=\"keywordtype\">double</span> uVal, <span class=\"keywordtype\">double</span> vVal,</div>\n\
<div class=\"line\">         <span class=\"keywordtype\">double</span> u1Val, <span class=\"keywordtype\">double</span> v1Val, <span class=\"keywordtype\">double</span> w1Val,</div>\n\
<div class=\"line\">         <span class=\"keywordtype\">double</span> u2Val, <span class=\"keywordtype\">double</span> v2Val, <span class=\"keywordtype\">double</span> w2Val,</div>\n\
<div class=\"line\">         <span class=\"keywordtype\">double</span> AVal, <span class=\"keywordtype\">double</span> BVal, <span class=\"keywordtype\">double</span> CVal)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    res = resVal;</div>\n\
<div class=\"line\">    u = uVal; v = vVal;</div>\n\
<div class=\"line\">    u1 = u1Val; v1 = v1Val; w1 = w1Val;</div>\n\
<div class=\"line\">    u2 = u2Val; v2 = v2Val; w2 = w2Val;</div>\n\
<div class=\"line\">    A = AVal; B = BVal; C = CVal;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> set(<span class=\"keywordtype\">double</span> uVal, <span class=\"keywordtype\">double</span> vVal,</div>\n\
<div class=\"line\">         <span class=\"keywordtype\">double</span> u1Val, <span class=\"keywordtype\">double</span> v1Val, <span class=\"keywordtype\">double</span> w1Val,</div>\n\
<div class=\"line\">         <span class=\"keywordtype\">double</span> u2Val, <span class=\"keywordtype\">double</span> v2Val, <span class=\"keywordtype\">double</span> w2Val)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    u = uVal; v = vVal;</div>\n\
<div class=\"line\">    u1 = u1Val; v1 = v1Val; w1 = w1Val;</div>\n\
<div class=\"line\">    u2 = u2Val; v2 = v2Val; w2 = w2Val;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setABC(<span class=\"keywordtype\">double</span> AVal, <span class=\"keywordtype\">double</span> BVal, <span class=\"keywordtype\">double</span> CVal)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    A = AVal; B = BVal; C = CVal;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> splitU(PtexTriangleKernel&amp; ka)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    ka = *<span class=\"keyword\">this</span>;</div>\n\
<div class=\"line\">    u1 = 0;</div>\n\
<div class=\"line\">    ka.u2 = 0;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> splitV(PtexTriangleKernel&amp; ka)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    ka = *<span class=\"keyword\">this</span>;</div>\n\
<div class=\"line\">    v1 = 0;</div>\n\
<div class=\"line\">    ka.v2 = 0;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> splitW(PtexTriangleKernel&amp; ka)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    ka = *<span class=\"keyword\">this</span>;</div>\n\
<div class=\"line\">    w1 = 0;</div>\n\
<div class=\"line\">    ka.w2 = 0;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> rotate1()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"comment\">// rotate ellipse where u&#39;=w, v&#39;=u, w&#39;=v</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// (derived by converting to Barycentric form, rotating, and converting back)</span></div>\n\
<div class=\"line\">    setABC(C, 2*C-B, A+C-B);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> rotate2()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"comment\">// rotate ellipse where u&#39;=v, v&#39;=w, w&#39;=u</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// (derived by converting to Barycentric form, rotating, and converting back)</span></div>\n\
<div class=\"line\">    setABC(A+C-B, 2*A-B, A);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> reorient(<span class=\"keywordtype\">int</span> eid, <span class=\"keywordtype\">int</span> aeid)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a> = 1-u-<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define C(eid, aeid) (eid*3 + aeid)</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">switch</span> (C(eid, aeid)) {</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> C(0, 0): set(1-u,  -v, 1-u2,  -v2, 1-w2, 1-u1,  -v1, 1-w1); <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> C(0, 1): set(1-w, 1-u, 1-w2, 1-u2,  -v2, 1-w1, 1-u1,  -v1); rotate1(); <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> C(0, 2): set( -v, 1-w,  -v2, 1-w2, 1-u2,  -v1, 1-w1, 1-u1); rotate2(); <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> C(1, 0): set(1-v,  -w, 1-v2,  -w2, 1-u2, 1-v1,  -w1, 1-u1); rotate2(); <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> C(1, 1): set(1-u, 1-v, 1-u2, 1-v2,  -w2, 1-u1, 1-v1,  -w1); <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> C(1, 2): set( -w, 1-u,  -w2, 1-u2, 1-v2,  -w1, 1-u1, 1-v1); rotate1(); <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> C(2, 0): set(1-w,  -u, 1-w2,  -u2, 1-v2, 1-w1,  -u1, 1-v1); rotate1(); <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> C(2, 1): set(1-v, 1-w, 1-v2, 1-w2,  -u2, 1-v1, 1-w1,  -u1); rotate2(); <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> C(2, 2): set( -u, 1-v,  -u2, 1-v2, 1-w2,  -u1, 1-v1, 1-w1); <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#undef C</span></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> clampRes(Res fres)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    res.ulog2 = PtexUtils::min(res.ulog2, fres.ulog2);</div>\n\
<div class=\"line\">    res.vlog2 = res.ulog2;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> clampExtent()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    u1 = <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8fa4ae5e2b2ef3e57a2bde9530581904\">PtexUtils::max</a>(u1, 0.0);</div>\n\
<div class=\"line\">    v1 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8fa4ae5e2b2ef3e57a2bde9530581904\">PtexUtils::max</a>(v1, 0.0);</div>\n\
<div class=\"line\">    w1 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8fa4ae5e2b2ef3e57a2bde9530581904\">PtexUtils::max</a>(w1, 0.0);</div>\n\
<div class=\"line\">    u2 = PtexUtils::min(u2, 1-(v1+w1));</div>\n\
<div class=\"line\">    v2 = PtexUtils::min(v2, 1-(w1+u1));</div>\n\
<div class=\"line\">    w2 = PtexUtils::min(w2, 1-(u1+v1));</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> getIterators(PtexTriangleKernelIter&amp; ke, PtexTriangleKernelIter&amp; ko)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> resu = res.u();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// normalize coefficients for texel units</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> Finv = 1.0/(resu*resu*(A*C - 0.25 * B * B));</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> Ak = A*Finv, Bk = B*Finv, Ck = C*Finv;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// build even iterator</span></div>\n\
<div class=\"line\">    ke.rowlen = resu;</div>\n\
<div class=\"line\">    ke.wscale = 1.0/(resu*resu);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a281421b881aa7a1266842b73a3bc7655\">scale</a> = ke.rowlen;</div>\n\
<div class=\"line\">    ke.u = u * scale - 1/3.0;</div>\n\
<div class=\"line\">    ke.v = v * scale - 1/3.0;</div>\n\
<div class=\"line\">    ke.u1 = <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>(ceil(u1 * scale - 1/3.0));</div>\n\
<div class=\"line\">    ke.v1 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>(ceil(v1 * scale - 1/3.0));</div>\n\
<div class=\"line\">    ke.w1 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>(ceil(w1 * scale - 1/3.0));</div>\n\
<div class=\"line\">    ke.u2 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>(ceil(u2 * scale - 1/3.0));</div>\n\
<div class=\"line\">    ke.v2 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>(ceil(v2 * scale - 1/3.0));</div>\n\
<div class=\"line\">    ke.w2 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>(ceil(w2 * scale - 1/3.0));</div>\n\
<div class=\"line\">    ke.A = Ak; ke.B = Bk; ke.C = Ck;</div>\n\
<div class=\"line\">    ke.valid = (ke.u2 &gt; ke.u1 &amp;&amp; ke.v2 &gt; ke.v1 &amp;&amp; ke.w2 &gt; ke.w1);</div>\n\
<div class=\"line\">    ke.weight = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// build odd iterator: flip kernel across diagonal (u = 1-v, v = 1-u, w = -w)</span></div>\n\
<div class=\"line\">    ko.rowlen = ke.rowlen;</div>\n\
<div class=\"line\">    ko.wscale = ke.wscale;</div>\n\
<div class=\"line\">    ko.u = (1-<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>) * scale - 1/3.0;</div>\n\
<div class=\"line\">    ko.v = (1-u) * scale - 1/3.0;</div>\n\
<div class=\"line\">    ko.u1 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>(ceil((1-v2) * scale - 1/3.0));</div>\n\
<div class=\"line\">    ko.v1 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>(ceil((1-u2) * scale - 1/3.0));</div>\n\
<div class=\"line\">    ko.w1 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>(ceil(( -w2) * scale - 1/3.0));</div>\n\
<div class=\"line\">    ko.u2 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>(ceil((1-v1) * scale - 1/3.0));</div>\n\
<div class=\"line\">    ko.v2 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>(ceil((1-u1) * scale - 1/3.0));</div>\n\
<div class=\"line\">    ko.w2 = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aa813ad7a4a00cda401ffd0c336154620\">int</a>(ceil(( -w1) * scale - 1/3.0));</div>\n\
<div class=\"line\">    ko.A = Ck; ko.B = Bk; ko.C = Ak;</div>\n\
<div class=\"line\">    ko.valid = (ko.u2 &gt; ko.u1 &amp;&amp; ko.v2 &gt; ko.v1 &amp;&amp; ko.w2 &gt; ko.w1);</div>\n\
<div class=\"line\">    ko.weight = 0;</div>\n\
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