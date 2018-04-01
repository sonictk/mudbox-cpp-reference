var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>PtexExtractor/ptex/PtexFilterKernel.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_ptex_extractor_2ptex_2_ptex_filter_kernel_8h-example.html\', tocPrefix);\n\
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
            <h1>PtexExtractor/ptex/PtexFilterKernel.h</h1>\n\
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
<div class=\"title\">PtexExtractor/ptex/PtexFilterKernel.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef PtexFilterKernel_h</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define PtexFilterKernel_h</span></div>\n\
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
<div class=\"line\"><span class=\"keyword\">class </span>PtexFilterContext;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Filter convolution kernel</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PtexFilterKernel : <span class=\"keyword\">public</span> Ptex {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    PtexFilterKernel() : valid(false) {}</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> set(Res resval, <span class=\"keywordtype\">int</span> uval, <span class=\"keywordtype\">int</span> vval, <span class=\"keywordtype\">int</span> uwval, <span class=\"keywordtype\">int</span> vwval,</div>\n\
<div class=\"line\">         <span class=\"keywordtype\">double</span>* startval, <span class=\"keywordtype\">int</span> strideval)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    valid = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    eid = e_bottom;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a> = resval;</div>\n\
<div class=\"line\">    u = uval; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a> = vval;</div>\n\
<div class=\"line\">    uw = uwval; vw = vwval;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a> = startval;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a> = strideval;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">operator</span> bool()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> valid; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> clear() { valid = <span class=\"keyword\">false</span>; }</div>\n\
<div class=\"line\">    EdgeId eidval()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> eid; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> split(PtexFilterKernel&amp; ku, PtexFilterKernel&amp; kv, PtexFilterKernel&amp; kc);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> apply(<span class=\"keywordtype\">int</span> faceid, <span class=\"keywordtype\">int</span> rotateval, <span class=\"keyword\">const</span> PtexFilterContext&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a>) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> applyConst(<span class=\"keywordtype\">void</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>, <span class=\"keyword\">const</span> PtexFilterContext&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1f2d7f8147412c43ba2303a56f97ee73\">c</a>, <span class=\"keywordtype\">double</span> weight);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> merge(PtexFilterKernel&amp; k, EdgeId eid, <span class=\"keywordtype\">float</span> weight=1.0)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    k.valid = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// merge weights of given kernel into this kernel along edge k.eid</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>* <a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a92034251bfd455d524a9b5610cddba00\">dst</a>; <span class=\"comment\">// start of destination edge</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> du, dv;  <span class=\"comment\">// offset to next pixel in u/v along edge</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">switch</span> (eid) {</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">default</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> e_bottom: dst = <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a>; du = 1; dv = -uw; <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> e_right:  dst = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a> + uw-1; du = 0; dv = <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>; <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> e_top:    dst = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a> + (vw-1)*<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>; du = 1; dv = -uw; <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">case</span> e_left:   dst = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a>; du = 0; dv = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>; <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>* kp = k.start;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> rowskip = k.stride - k.uw;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = 0; i &lt; k.vw; i++, dst += dv, kp += rowskip)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> j = 0; j &lt; k.uw; j++, dst += du) *dst += weight * *kp++;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> totalWeight()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>* pos = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a> = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> rowskip = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>-uw;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = 0; i &lt; vw; i++, pos += rowskip)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> j = 0; j &lt; uw; j++) w += *pos++;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>Iter; <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span>Iter;</div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>TileIter; <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span>TileIter;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> splitL(PtexFilterKernel&amp; ku)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"comment\">// u &lt; 0</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> w = -u;</div>\n\
<div class=\"line\">    ku.set(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a>.u()-<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>, <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>,vw, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>);</div>\n\
<div class=\"line\">    ku.eid = e_left;</div>\n\
<div class=\"line\">    start += <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>; u = 0; uw -= <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> splitR(PtexFilterKernel&amp; ku)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"comment\">// u + uw &gt; res.u()</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> w = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a>.u()-u;</div>\n\
<div class=\"line\">    ku.set(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a>, 0, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>, uw-w, vw, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a>+w, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>);</div>\n\
<div class=\"line\">    ku.eid = e_right;</div>\n\
<div class=\"line\">    uw = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> splitB(PtexFilterKernel&amp; kv)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"comment\">// v &lt; 0</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> w = -<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>;</div>\n\
<div class=\"line\">    kv.set(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a>, u, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a>.v()-<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>, uw, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>);</div>\n\
<div class=\"line\">    kv.eid = e_bottom;</div>\n\
<div class=\"line\">    start += w*<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a> = 0; vw -= <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> splitT(PtexFilterKernel&amp; kv)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"comment\">// v + vw &gt; res.v()</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> w = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a>.v()-<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>;</div>\n\
<div class=\"line\">    kv.set(<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a>, u, 0, uw, vw-w, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a>+w*<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>, stride);</div>\n\
<div class=\"line\">    kv.eid = e_top;</div>\n\
<div class=\"line\">    vw = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a775b535bae9cb9131338b1cda0807472\">w</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> valid;         <span class=\"comment\">// true if kernel is valid (non-empty)</span></div>\n\
<div class=\"line\">    EdgeId eid;         <span class=\"comment\">// edge leading towards kernel face from parent</span></div>\n\
<div class=\"line\">    Res <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a>;            <span class=\"comment\">// resolution that kernel was built for</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> u, <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>;           <span class=\"comment\">// uv location of first pixel in kernel</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> uw, vw;         <span class=\"comment\">// kernel width in pixels</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13be19455586e95d5a42ed8f054afad2\">start</a>;      <span class=\"comment\">// kernel start (may point into parent kernel)</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>;         <span class=\"comment\">// distance between rows in kernel</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";