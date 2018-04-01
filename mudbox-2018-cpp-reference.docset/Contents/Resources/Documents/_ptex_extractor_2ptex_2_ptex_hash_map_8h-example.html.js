var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>PtexExtractor/ptex/PtexHashMap.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_ptex_extractor_2ptex_2_ptex_hash_map_8h-example.html\', tocPrefix);\n\
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
            <h1>PtexExtractor/ptex/PtexHashMap.h</h1>\n\
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
<div class=\"title\">PtexExtractor/ptex/PtexHashMap.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">/* </span></div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#ifndef PtexHashMap_h</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define PtexHashMap_h</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span>&lt;<span class=\"keyword\">typename</span> KeyType, <span class=\"keyword\">typename</span> DataType, <span class=\"keyword\">typename</span> HashFn&gt;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PtexHashMap</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>Entry; <span class=\"comment\">// forward decl</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> <a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">KeyType</a> key_type;</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> DataType data_type;</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> HashFn hash_fn;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>value_type {</div>\n\
<div class=\"line\">    key_type <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a970a385f6f880f2b620451db4ca4299a\">first</a>;</div>\n\
<div class=\"line\">    data_type second;</div>\n\
<div class=\"line\">    value_type() : <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a970a385f6f880f2b620451db4ca4299a\">first</a>(), second() {}</div>\n\
<div class=\"line\">    value_type(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">KeyType</a>&amp; first, <span class=\"keyword\">const</span> DataType&amp; second)</div>\n\
<div class=\"line\">        : <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a970a385f6f880f2b620451db4ca4299a\">first</a>(first), second(second) {}</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>iterator {</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    iterator() : e(0), <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdb89eb8f3f04e3f311b84bafe6f7d0d\">h</a>(0), <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a>(0) {}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    iterator(<span class=\"keyword\">const</span> iterator&amp; iter) : e(iter.e), <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdb89eb8f3f04e3f311b84bafe6f7d0d\">h</a>(iter.h), <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a>(iter.b) {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    value_type <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a7ca6a588e71f54d4a6e7f09519ea7fda\">operator*</a>()<span class=\"keyword\"> const </span>{ </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (e) <span class=\"keywordflow\">return</span> value_type((*e)-&gt;key, (*e)-&gt;val);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> value_type();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    value_type* operator-&gt;()<span class=\"keyword\"> const </span>{</div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span> value_type <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>;</div>\n\
<div class=\"line\">        v = <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a7ca6a588e71f54d4a6e7f09519ea7fda\">operator*</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    iterator&amp; operator=(<span class=\"keyword\">const</span> iterator&amp; iter) {</div>\n\
<div class=\"line\">        e = iter.e; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdb89eb8f3f04e3f311b84bafe6f7d0d\">h</a> = iter.h; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a> = iter.b; <span class=\"keywordflow\">return</span> *<span class=\"keyword\">this</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a637f7084f9654006932237127d7be263\">operator==</a>(<span class=\"keyword\">const</span> iterator&amp; iter)<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> iter.e == e; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/qbytearray_8h.html#ae6561cb91aa056d85ac61b6cf59ef070\">operator!=</a>(<span class=\"keyword\">const</span> iterator&amp; iter)<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> iter.e != e; }</div>\n\
<div class=\"line\">    iterator&amp; operator++(<span class=\"keywordtype\">int</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span>PtexHashMap;</div>\n\
<div class=\"line\">    Entry** e; <span class=\"comment\">// pointer to prev entry or hash entry</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> PtexHashMap* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdb89eb8f3f04e3f311b84bafe6f7d0d\">h</a>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a>; <span class=\"comment\">// bucket number</span></div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    iterator begin()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">    iterator iter;</div>\n\
<div class=\"line\">    iter.h = <span class=\"keyword\">this</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (iter.b = 0; iter.b &lt; _numBuckets; iter.b++) {</div>\n\
<div class=\"line\">        iter.e = &amp;_buckets[iter.b];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (*iter.e) <span class=\"keywordflow\">return</span> iter;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    iter.e = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> iter;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    iterator <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a432111147038972f06e049e18a837002\">end</a>()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">    iterator iter;</div>\n\
<div class=\"line\">    iter.h = <span class=\"keyword\">this</span>; iter.b = 0; iter.e = 0; </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> iter;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">     PtexHashMap() : _numEntries(0), _numBuckets(0), _bucketMask(0), _buckets(0) {}</div>\n\
<div class=\"line\">    ~PtexHashMap() { clear(); }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    DataType&amp; operator[](<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">KeyType</a>&amp; key);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    iterator find(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">KeyType</a>&amp; key) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> erase(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">KeyType</a>&amp; key);</div>\n\
<div class=\"line\">    iterator erase(iterator iter);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> clear();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">size</a>()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> _numEntries; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    PtexHashMap(<span class=\"keyword\">const</span> PtexHashMap&amp;); <span class=\"comment\">// disallow</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span>    <span class=\"keywordtype\">bool</span> operator=(<span class=\"keyword\">const</span> PtexHashMap&amp;); <span class=\"comment\">// disallow</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span>iterator;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>Entry {</div>\n\
<div class=\"line\">    Entry() : val() {}</div>\n\
<div class=\"line\">    Entry* next;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">KeyType</a> key;</div>\n\
<div class=\"line\">    DataType val;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Entry** locate(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">KeyType</a>&amp; key)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!_buckets) <span class=\"keywordflow\">return</span> 0;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (Entry** e = &amp;_buckets[hash(key) &amp; _bucketMask]; *e; e = &amp;(*e)-&gt;next)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ((*e)-&gt;key == key)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> e;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> 0;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> grow();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> _numEntries;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> _numBuckets;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> _bucketMask;</div>\n\
<div class=\"line\">    Entry** _buckets;</div>\n\
<div class=\"line\">    HashFn hash;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> KeyType, <span class=\"keyword\">class</span> DataType, <span class=\"keyword\">class</span> HashFn&gt;</div>\n\
<div class=\"line\"><span class=\"keyword\">typename</span> PtexHashMap&lt;KeyType, DataType, HashFn&gt;::iterator&amp;</div>\n\
<div class=\"line\">PtexHashMap&lt;KeyType, DataType, HashFn&gt;::iterator::operator++(<span class=\"keywordtype\">int</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (e) {</div>\n\
<div class=\"line\">    <span class=\"comment\">// move to next entry</span></div>\n\
<div class=\"line\">    e = &amp;(*e)-&gt;next;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!*e) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// move to next non-empty bucket</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a>++; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a> &lt; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdb89eb8f3f04e3f311b84bafe6f7d0d\">h</a>-&gt;_numBuckets; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a>++) {</div>\n\
<div class=\"line\">        e = &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdb89eb8f3f04e3f311b84bafe6f7d0d\">h</a>-&gt;_buckets[<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a08f98740667f706cd68d5e873088ffa6\">b</a>];</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (*e) <span class=\"keywordflow\">return</span> *<span class=\"keyword\">this</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        e = 0;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> *<span class=\"keyword\">this</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> KeyType, <span class=\"keyword\">class</span> DataType, <span class=\"keyword\">class</span> HashFn&gt;</div>\n\
<div class=\"line\"><span class=\"keyword\">typename</span> PtexHashMap&lt;KeyType, DataType, HashFn&gt;::iterator</div>\n\
<div class=\"line\">PtexHashMap&lt;KeyType, DataType, HashFn&gt;::find(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">KeyType</a>&amp; key)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    iterator iter;</div>\n\
<div class=\"line\">    Entry** e = locate(key);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (e) {</div>\n\
<div class=\"line\">    iter.h = <span class=\"keyword\">this</span>;</div>\n\
<div class=\"line\">    iter.e = e;</div>\n\
<div class=\"line\">    iter.b = hash(key) &amp; _bucketMask;</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> iter = <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a432111147038972f06e049e18a837002\">end</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> iter;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> KeyType, <span class=\"keyword\">class</span> DataType, <span class=\"keyword\">class</span> HashFn&gt;</div>\n\
<div class=\"line\">DataType&amp; PtexHashMap&lt;KeyType, DataType, HashFn&gt;::operator[](<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">KeyType</a>&amp; key)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    Entry** e = locate(key);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (e) <span class=\"keywordflow\">return</span> (*e)-&gt;val;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// create a new entry</span></div>\n\
<div class=\"line\">    _numEntries++;</div>\n\
<div class=\"line\">    if (_numEntries*2 &gt;= _numBuckets) grow();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>* ebuf = malloc(<span class=\"keyword\">sizeof</span>(Entry));</div>\n\
<div class=\"line\">    Entry* ne = <span class=\"keyword\">new</span>(ebuf) Entry; <span class=\"comment\">// note: placement new</span></div>\n\
<div class=\"line\">    Entry** slot = &amp;_buckets[hash(key) &amp; _bucketMask];</div>\n\
<div class=\"line\">    ne-&gt;next = *slot; *slot = ne;</div>\n\
<div class=\"line\">    ne-&gt;key = key;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> ne-&gt;val;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> KeyType, <span class=\"keyword\">class</span> DataType, <span class=\"keyword\">class</span> HashFn&gt;</div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> PtexHashMap&lt;KeyType, DataType, HashFn&gt;::grow()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!_buckets) {</div>\n\
<div class=\"line\">    _numBuckets = 16;</div>\n\
<div class=\"line\">    _bucketMask = _numBuckets - 1;</div>\n\
<div class=\"line\">    _buckets = (Entry**) calloc(_numBuckets, <span class=\"keyword\">sizeof</span>(Entry*));</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> newsize = _numBuckets * 2;</div>\n\
<div class=\"line\">    _bucketMask = newsize - 1;</div>\n\
<div class=\"line\">    Entry** newbuckets = (Entry**) calloc(newsize, <span class=\"keyword\">sizeof</span>(Entry*));</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i = 0; i &lt; _numBuckets; i++) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (Entry* e = _buckets[i]; e;) {</div>\n\
<div class=\"line\">        Entry* next = e-&gt;next;</div>\n\
<div class=\"line\">        Entry** slot = &amp;newbuckets[hash(e-&gt;key) &amp; _bucketMask];</div>\n\
<div class=\"line\">        e-&gt;next = *slot; *slot = e;</div>\n\
<div class=\"line\">        e = next;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    free(_buckets);</div>\n\
<div class=\"line\">    _buckets = newbuckets;</div>\n\
<div class=\"line\">    _numBuckets = newsize;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> KeyType, <span class=\"keyword\">class</span> DataType, <span class=\"keyword\">class</span> HashFn&gt;</div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> PtexHashMap&lt;KeyType, DataType, HashFn&gt;::erase(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">KeyType</a>&amp; key)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    iterator iter = find(key);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (iter == <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a432111147038972f06e049e18a837002\">end</a>()) <span class=\"keywordflow\">return</span> 0;</div>\n\
<div class=\"line\">    erase(iter);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> 1;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> KeyType, <span class=\"keyword\">class</span> DataType, <span class=\"keyword\">class</span> HashFn&gt;</div>\n\
<div class=\"line\"><span class=\"keyword\">typename</span> PtexHashMap&lt;KeyType, DataType, HashFn&gt;::iterator</div>\n\
<div class=\"line\">PtexHashMap&lt;KeyType, DataType, HashFn&gt;::erase(iterator iter)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    Entry** eptr = iter.e;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!eptr) <span class=\"keywordflow\">return</span> iter;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// patch around deleted entry</span></div>\n\
<div class=\"line\">    Entry* e = *eptr;</div>\n\
<div class=\"line\">    Entry* next = e-&gt;next;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!next) iter++;  <span class=\"comment\">// advance iterator if at end of chain</span></div>\n\
<div class=\"line\">    *eptr = next;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// destroy entry</span></div>\n\
<div class=\"line\">    e-&gt;~Entry(); <span class=\"comment\">// note: explicit dtor call</span></div>\n\
<div class=\"line\">    free(e);</div>\n\
<div class=\"line\">    _numEntries--;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> iter;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> KeyType, <span class=\"keyword\">class</span> DataType, <span class=\"keyword\">class</span> HashFn&gt;</div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> PtexHashMap&lt;KeyType, DataType, HashFn&gt;::clear()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (iterator i = begin(); i != <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a432111147038972f06e049e18a837002\">end</a>(); i = erase(i));</div>\n\
<div class=\"line\">    free(_buckets);</div>\n\
<div class=\"line\">    _buckets = 0;</div>\n\
<div class=\"line\">    _numEntries = 0;</div>\n\
<div class=\"line\">    _numBuckets = 0;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";