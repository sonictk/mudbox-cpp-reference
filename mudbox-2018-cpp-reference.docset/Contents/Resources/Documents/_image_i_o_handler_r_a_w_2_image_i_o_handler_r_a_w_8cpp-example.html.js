var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>ImageIOHandlerRAW/ImageIOHandlerRAW.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_image_i_o_handler_r_a_w_2_image_i_o_handler_r_a_w_8cpp-example.html\', tocPrefix);\n\
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
            <h1>ImageIOHandlerRAW/ImageIOHandlerRAW.cpp</h1>\n\
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
<div class=\"title\">ImageIOHandlerRAW/ImageIOHandlerRAW.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2011 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: ImageIOHandlerRAW - Implementation of the ImageIOHandler interface</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CREATED: April 2011</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#pragma warning( disable : 4311 4312 )</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;ImageIOHandlerRAW.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtGui/QFileDialog&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtGui/QMessageBox&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtCore/QDir&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Register this plugin, use the ImageIOHandlerRAW::Initializer function as the initialized, this will be called when the plugin got loaded.</span></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#afa2df46a730e8fc8bceb9410c0ff6838\">MB_PLUGIN</a>( <span class=\"stringliteral\">&quot;ImageIOHandlerRAW&quot;</span>, <span class=\"stringliteral\">&quot;ImageIOHandler example&quot;</span>, <span class=\"stringliteral\">&quot;Autodesk&quot;</span>, <span class=\"stringliteral\">&quot;http://www.mudbox3d.com&quot;</span>, ImageIOHandlerRAW::Initializer );</div>\n\
<div class=\"line\"><a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/node_8h.html#ad54524b181b971ce9b577312ba2c5e65\">IMPLEMENT_SCLASS</a>( ImageIOHandlerRAW, ImageIOHandler, QT_TRANSLATE_NOOP(<span class=\"stringliteral\">&quot;ImageIOHandlerRAW&quot;</span>, <span class=\"stringliteral\">&quot;ImageIOHandler example class&quot;</span>), 1 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ImageIOHandlerRAW::ImageIOHandlerRAW( <span class=\"keywordtype\">void</span> )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    m_sImageName = tr(<span class=\"stringliteral\">&quot;RAW Output&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_sImageDescription = tr(<span class=\"stringliteral\">&quot;Outputs image in a RAW format.&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_aExtensions.append(FileExtension(<a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/i18n_8h.html#a1b7f65502ea5b58cca15f85d9e78ca06\">NTRQ</a>(<span class=\"stringliteral\">&quot;raw&quot;</span>), <a class=\"code\" href=\"#!/url=./cpp_ref/i18n_8h.html#a1b7f65502ea5b58cca15f85d9e78ca06\">NTRQ</a>(<span class=\"stringliteral\">&quot;RAW file [8 bit, RGBA]&quot;</span>), Image::e8integer) );</div>\n\
<div class=\"line\">    m_aExtensions.append(FileExtension(<a class=\"code\" href=\"#!/url=./cpp_ref/i18n_8h.html#a1b7f65502ea5b58cca15f85d9e78ca06\">NTRQ</a>(<span class=\"stringliteral\">&quot;raw&quot;</span>), <a class=\"code\" href=\"#!/url=./cpp_ref/i18n_8h.html#a1b7f65502ea5b58cca15f85d9e78ca06\">NTRQ</a>(<span class=\"stringliteral\">&quot;RAW file [16 bit Integer, RGBA]&quot;</span>), Image::e16integer) );</div>\n\
<div class=\"line\">    m_aExtensions.append(FileExtension(<a class=\"code\" href=\"#!/url=./cpp_ref/i18n_8h.html#a1b7f65502ea5b58cca15f85d9e78ca06\">NTRQ</a>(<span class=\"stringliteral\">&quot;raw&quot;</span>), <a class=\"code\" href=\"#!/url=./cpp_ref/i18n_8h.html#a1b7f65502ea5b58cca15f85d9e78ca06\">NTRQ</a>(<span class=\"stringliteral\">&quot;RAW file [32 bit Floating Point, RGBA]&quot;</span>), Image::e32float) );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_aFormats.append(PixelDescriptor(4, PixelDescriptor::sChar, PixelDescriptor::orderRGBA, <span class=\"keyword\">false</span>));</div>\n\
<div class=\"line\">    m_aFormats.append(PixelDescriptor(4, PixelDescriptor::sHalf, PixelDescriptor::orderRGBA, <span class=\"keyword\">false</span>));</div>\n\
<div class=\"line\">    m_aFormats.append(PixelDescriptor(4, PixelDescriptor::sFloat, PixelDescriptor::orderRGBA, <span class=\"keyword\">false</span>));</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ImageIOHandlerRAW::Initializer( <span class=\"keywordtype\">void</span> )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> ImageIOHandlerRAW::Import(<span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sFileName, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html\">mudbox::Image</a> *pImage)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!pImage || !sFileName.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#ab8e4e3e2a7bf18888b71bdf9dda0770b\">size</a>())</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file.html\">QFile</a> <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>(sFileName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.open(<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_i_o_device.html#a45153e842709466a940079b370bd6f40af1a03d8a79e3c6ef4a82a0ba3fec6e7a\">QIODevice::ReadOnly</a>))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">char</span> magicString[256];</div>\n\
<div class=\"line\">        memset(magicString, <span class=\"charliteral\">&#39;\\0&#39;</span>, 256);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.read(magicString, 12);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/qtransportauthdefs__qws_8h.html#a0932b349ee120b14273041f2ec489165\">magic</a>(magicString);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/qtransportauthdefs__qws_8h.html#a0932b349ee120b14273041f2ec489165\">magic</a> != <span class=\"stringliteral\">&quot;MBRAWEXAMPLE&quot;</span>)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.close();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac112eef468530a44b7a653ddac190a22\">width</a> = 0;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.read((<span class=\"keywordtype\">char</span> *) &amp;width, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">int</span>));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ab375df5e95c5fc63fc9165319162bddc\">height</a> = 0;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.read((<span class=\"keywordtype\">char</span> *) &amp;height, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">int</span>));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> nChannels = 0;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.read((<span class=\"keywordtype\">char</span> *) &amp;nChannels, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">int</span>));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> pixelSize = 0;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.read((<span class=\"keywordtype\">char</span> *) &amp;pixelSize, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">int</span>));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">enum</span> Image::Format fmt = Image::e8integer;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.read((<span class=\"keywordtype\">char</span> *) &amp;fmt, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">int</span>));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        ImageDescriptor::MemoryChannelOrder channelOrder = ImageDescriptor::orderRGBA;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.read((<span class=\"keywordtype\">char</span> *) &amp;channelOrder, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">int</span>));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2f5934b61dbd601db8002b6a7bd2d13f\">imageSize</a> = pixelSize * width * <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ab375df5e95c5fc63fc9165319162bddc\">height</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">char</span> *pData = <span class=\"keyword\">new</span> <span class=\"keywordtype\">char</span>[<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2f5934b61dbd601db8002b6a7bd2d13f\">imageSize</a>];</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.read(pData, imageSize);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        pImage-&gt;<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html#a1324be415872b069fb8f988b86ff19f5\">Create</a>(width, height, nChannels, fmt, <span class=\"keyword\">false</span>, channelOrder);</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        pImage-&gt;<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_image.html#a7a3d78f9224b0f27b547be184f375151\">setTile</a>(0, 0, width, height, pData);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.close();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> [] pData;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> ImageIOHandlerRAW::Export(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sFileName, Image *pImage)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!pImage || !sFileName.<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#ab8e4e3e2a7bf18888b71bdf9dda0770b\">size</a>())</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_file.html\">QFile</a> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>(sFileName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.open(<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_i_o_device.html#a45153e842709466a940079b370bd6f40a068f8c22e7e359d9000e7d3a4a809b4c\">QIODevice::WriteOnly</a>))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.write(<span class=\"stringliteral\">&quot;MBRAWEXAMPLE&quot;</span>, 12);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> ImageDescriptor  &amp;desc = pImage-&gt;getDescriptor();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> width = pImage-&gt;Width();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.write((<span class=\"keywordtype\">char</span> *) &amp;width, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">int</span>));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> height = pImage-&gt;Height();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.write((<span class=\"keywordtype\">char</span> *) &amp;height, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">int</span>));</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> nChannels = pImage-&gt;ChannelCount();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.write((<span class=\"keywordtype\">char</span> *) &amp;nChannels, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">int</span>));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> pixelSize = pImage-&gt;BytesPerPixel();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.write((<span class=\"keywordtype\">char</span> *) &amp;pixelSize, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">int</span>));</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the format of the data, write it to disk</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> fmt = pImage-&gt;Format();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.write((<span class=\"keywordtype\">char</span> *) &amp;fmt, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">int</span>));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the channel order (rgba, abgr, etc...)</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> channelOrder = pImage-&gt;channelOrder();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.write((<span class=\"keywordtype\">char</span> *) &amp;channelOrder, <span class=\"keyword\">sizeof</span>(<span class=\"keywordtype\">int</span>));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> imageSize = pixelSize * width * <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ab375df5e95c5fc63fc9165319162bddc\">height</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">char</span> *pData = <span class=\"keyword\">new</span> <span class=\"keywordtype\">char</span>[<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a2f5934b61dbd601db8002b6a7bd2d13f\">imageSize</a>];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        pImage-&gt;getTile(0, 0, width, height, (<span class=\"keywordtype\">void</span> *) pData);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.write(pData, imageSize);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a691492ec0bd6383f91200e49f6ae40ed\">f</a>.close();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> [] pData;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";