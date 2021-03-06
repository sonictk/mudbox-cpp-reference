var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>PtexExtractor/ptex/PtexWriter.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_ptex_extractor_2ptex_2_ptex_writer_8h-example.html\', tocPrefix);\n\
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
            <h1>PtexExtractor/ptex/PtexWriter.h</h1>\n\
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
<div class=\"title\">PtexExtractor/ptex/PtexWriter.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef PtexWriter_h</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define PtexWriter_h</span></div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#include &quot;PtexPlatform.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;zlib/zlib.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;map&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;vector&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdio.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;Ptexture.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;PtexIO.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;PtexReader.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PtexWriterBase : <span class=\"keyword\">public</span> PtexWriter, <span class=\"keyword\">public</span> PtexIO {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> setBorderModes(Ptex::BorderMode uBorderMode, Ptex::BorderMode vBorderMode)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    _extheader.ubordermode = uBorderMode;</div>\n\
<div class=\"line\">    _extheader.vbordermode = vBorderMode;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> writeMeta(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* key, <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a>);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> writeMeta(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* key, <span class=\"keyword\">const</span> int8_t* value, <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9274fa62feb8371797c4c0312446e333\">count</a>);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> writeMeta(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* key, <span class=\"keyword\">const</span> int16_t* value, <span class=\"keywordtype\">int</span> count);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> writeMeta(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* key, <span class=\"keyword\">const</span> int32_t* value, <span class=\"keywordtype\">int</span> count);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> writeMeta(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* key, <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span>* value, <span class=\"keywordtype\">int</span> count);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> writeMeta(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* key, <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span>* value, <span class=\"keywordtype\">int</span> count);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> writeMeta(PtexMetaData* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> close(Ptex::String&amp; error);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> release();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> ok(Ptex::String&amp; error) {</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!_ok) getError(error);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> _ok;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> getError(Ptex::String&amp; error) {</div>\n\
<div class=\"line\">    error = (_error + <span class=\"stringliteral\">&quot;\\nPtex file: &quot;</span> + _path).c_str();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>MetaEntry {</div>\n\
<div class=\"line\">    <a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae9ea2d206f76ea82db7a2ea002fdef2f\">std::string</a> key;</div>\n\
<div class=\"line\">    MetaDataType datatype;</div>\n\
<div class=\"line\">    std::vector&lt;uint8_t&gt; <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>;</div>\n\
<div class=\"line\">    MetaEntry() : datatype(MetaDataType(0)), <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>() {}</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> finish() = 0;</div>\n\
<div class=\"line\">    PtexWriterBase(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* path,</div>\n\
<div class=\"line\">           Ptex::MeshType mt, Ptex::DataType dt,</div>\n\
<div class=\"line\">           <span class=\"keywordtype\">int</span> nchannels, <span class=\"keywordtype\">int</span> alphachan, <span class=\"keywordtype\">int</span> nfaces,</div>\n\
<div class=\"line\">           <span class=\"keywordtype\">bool</span> compress);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~PtexWriterBase();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> writeBlank(FILE* fp, <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">size</a>);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> writeBlock(FILE* fp, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* data, <span class=\"keywordtype\">int</span> size);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> writeZipBlock(FILE* fp, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* data, <span class=\"keywordtype\">int</span> size, <span class=\"keywordtype\">bool</span> finish=<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> readBlock(FILE* fp, <span class=\"keywordtype\">void</span>* data, <span class=\"keywordtype\">int</span> size);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> copyBlock(FILE* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a92034251bfd455d524a9b5610cddba00\">dst</a>, FILE* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a72e0fdf0f845ded60b1fada9e9195cd7\">src</a>, FilePos pos, <span class=\"keywordtype\">int</span> size);</div>\n\
<div class=\"line\">    Res calcTileRes(Res faceres);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> addMetaData(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* key, MetaDataType <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a>, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* value, <span class=\"keywordtype\">int</span> size);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> writeConstFaceBlock(FILE* fp, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* data, FaceDataHeader&amp; fdh);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> writeFaceBlock(FILE* fp, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* data, <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>, Res <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a>,</div>\n\
<div class=\"line\">               FaceDataHeader&amp; fdh);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> writeFaceData(FILE* fp, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* data, <span class=\"keywordtype\">int</span> stride, Res res,</div>\n\
<div class=\"line\">               FaceDataHeader&amp; fdh);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> writeReduction(FILE* fp, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* data, <span class=\"keywordtype\">int</span> stride, Res res);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> writeMetaDataBlock(FILE* fp, MetaEntry&amp; val);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setError(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae9ea2d206f76ea82db7a2ea002fdef2f\">std::string</a>&amp; error) { _error = error; _ok = <span class=\"keyword\">false</span>; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> storeFaceInfo(<span class=\"keywordtype\">int</span> faceid, FaceInfo&amp; dest, <span class=\"keyword\">const</span> FaceInfo&amp; src, <span class=\"keywordtype\">int</span> flags=0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> _ok;                    <span class=\"comment\">// true if no error has occurred</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae9ea2d206f76ea82db7a2ea002fdef2f\">std::string</a> _error;              <span class=\"comment\">// the error text (if any)</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae9ea2d206f76ea82db7a2ea002fdef2f\">std::string</a> _path;               <span class=\"comment\">// file path</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae9ea2d206f76ea82db7a2ea002fdef2f\">std::string</a> _tilepath;           <span class=\"comment\">// temp tile file path (&quot;&lt;path&gt;.tiles.tmp&quot;)</span></div>\n\
<div class=\"line\">    FILE* _tilefp;               <span class=\"comment\">// temp tile file handle</span></div>\n\
<div class=\"line\">    Header _header;              <span class=\"comment\">// the file header</span></div>\n\
<div class=\"line\">    ExtHeader _extheader;            <span class=\"comment\">// extended header</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> _pixelSize;              <span class=\"comment\">// size of a pixel in bytes</span></div>\n\
<div class=\"line\">    std::vector&lt;MetaEntry&gt; _metadata;        <span class=\"comment\">// meta data waiting to be written</span></div>\n\
<div class=\"line\">    std::map&lt;std::string,int&gt; _metamap;      <span class=\"comment\">// for preventing duplicate keys</span></div>\n\
<div class=\"line\">    z_stream_s _zstream;             <span class=\"comment\">// libzip compression stream</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    PtexUtils::ReduceFn* _reduceFn;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PtexMainWriter : <span class=\"keyword\">public</span> PtexWriterBase {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    PtexMainWriter(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* path, PtexTexture* tex,</div>\n\
<div class=\"line\">           Ptex::MeshType mt, Ptex::DataType dt,</div>\n\
<div class=\"line\">           <span class=\"keywordtype\">int</span> nchannels, <span class=\"keywordtype\">int</span> alphachan, <span class=\"keywordtype\">int</span> nfaces, <span class=\"keywordtype\">bool</span> genmipmaps);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> close(Ptex::String&amp; error);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> writeFace(<span class=\"keywordtype\">int</span> faceid, <span class=\"keyword\">const</span> FaceInfo&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>, <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> writeConstantFace(<span class=\"keywordtype\">int</span> faceid, <span class=\"keyword\">const</span> FaceInfo&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~PtexMainWriter();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> addMetaData(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* key, MetaDataType <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a>, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a>, <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a8f853268a6a93ade1ff556b79420cda3\">size</a>)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    PtexWriterBase::addMetaData(key, t, value, size);</div>\n\
<div class=\"line\">    _hasNewData = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> finish();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> generateReductions();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> flagConstantNeighorhoods();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> storeConstValue(<span class=\"keywordtype\">int</span> faceid, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>, <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>, Res <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a1dbb21208b9047cc8031ca9c840d3c2f\">res</a>);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> writeMetaData(FILE* fp);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae9ea2d206f76ea82db7a2ea002fdef2f\">std::string</a> _newpath;         <span class=\"comment\">// path to &quot;.new&quot; file</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae9ea2d206f76ea82db7a2ea002fdef2f\">std::string</a> _tmppath;         <span class=\"comment\">// temp file path (&quot;&lt;path&gt;.tmp&quot;)</span></div>\n\
<div class=\"line\">    FILE* _tmpfp;             <span class=\"comment\">// temp file handle</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> _hasNewData;             <span class=\"comment\">// true if data has been written</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> _genmipmaps;             <span class=\"comment\">// true if mipmaps should be generated</span></div>\n\
<div class=\"line\">    std::vector&lt;FaceInfo&gt; _faceinfo;      <span class=\"comment\">// info about each face</span></div>\n\
<div class=\"line\">    std::vector&lt;uint8_t&gt; _constdata;      <span class=\"comment\">// constant data for each face</span></div>\n\
<div class=\"line\">    std::vector&lt;uint32_t&gt; _rfaceids;      <span class=\"comment\">// faceid reordering for reduction levels</span></div>\n\
<div class=\"line\">    std::vector&lt;uint32_t&gt; _faceids_r;     <span class=\"comment\">// faceid indexed by rfaceid</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span> MinReductionLog2 =2; <span class=\"comment\">// log2(minimum reduction size) - can tune</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>LevelRec {</div>\n\
<div class=\"line\">    <span class=\"comment\">// note: level 0 is ordered by faceid</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//       levels 1+ are reduction levels (half res in both u and v) and</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//       are ordered by rfaceid[faceid].   Also, faces with a minimum</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//       dimension (the smaller of u or v) smaller than MinReductionLog2</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//       are omitted from subsequent levels.</span></div>\n\
<div class=\"line\">    std::vector&lt;FilePos&gt; pos;     <span class=\"comment\">// position of data blocks within _tmp file</span></div>\n\
<div class=\"line\">    std::vector&lt;FaceDataHeader&gt; fdh;  <span class=\"comment\">// face data headers</span></div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    std::vector&lt;LevelRec&gt; _levels;    <span class=\"comment\">// info about each level</span></div>\n\
<div class=\"line\">    std::vector&lt;FilePos&gt; _rpos;       <span class=\"comment\">// reduction file positions</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    PtexReader* _reader;              <span class=\"comment\">// reader for accessing existing data in file</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PtexIncrWriter : <span class=\"keyword\">public</span> PtexWriterBase {</div>\n\
<div class=\"line\"> <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    PtexIncrWriter(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* path, FILE* fp,</div>\n\
<div class=\"line\">           Ptex::MeshType mt, Ptex::DataType dt,</div>\n\
<div class=\"line\">           <span class=\"keywordtype\">int</span> nchannels, <span class=\"keywordtype\">int</span> alphachan, <span class=\"keywordtype\">int</span> nfaces);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> close(Ptex::String&amp; error);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> writeFace(<span class=\"keywordtype\">int</span> faceid, <span class=\"keyword\">const</span> FaceInfo&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>, <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a9d21c1b0530d07b637b5b71b969d7921\">stride</a>);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> writeConstantFace(<span class=\"keywordtype\">int</span> faceid, <span class=\"keyword\">const</span> FaceInfo&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2cc7c8468af76cf855e1755c27945693\">data</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"> <span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> writeMetaDataEdit();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> finish();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~PtexIncrWriter();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"> <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    FILE* _fp;      <span class=\"comment\">// the file being edited</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";