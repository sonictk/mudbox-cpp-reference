var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>phonon/videoplayer.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'videoplayer_8h_source.html\', tocPrefix);\n\
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
            <h1>phonon/videoplayer.h Source File</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>File&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/globals.html\"><span>File&#160;Members</span></a></li>\n\
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
<div class=\"title\">videoplayer.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/videoplayer_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">/*  This file is part of the KDE project</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">    Copyright (C) 2004-2007 Matthias Kretz &lt;kretz@kde.org&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"comment\"></span></div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">    This library is free software; you can redistribute it and/or</span></div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">    modify it under the terms of the GNU Lesser General Public</span></div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">    License as published by the Free Software Foundation; either</span></div>\n\
<div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">    version 2.1 of the License, or (at your option) version 3, or any</span></div>\n\
<div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">    later version accepted by the membership of KDE e.V. (or its</span></div>\n\
<div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">    successor approved by the membership of KDE e.V.), Nokia Corporation </span></div>\n\
<div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">    (or its successors, if any) and the KDE Free Qt Foundation, which shall</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\">    act as a proxy defined in Section 6 of version 3 of the license.</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"comment\"></span></div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"comment\">    This library is distributed in the hope that it will be useful,</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"comment\">    but WITHOUT ANY WARRANTY; without even the implied warranty of</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"comment\">    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"comment\">    Lesser General Public License for more details.</span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"comment\"></span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"comment\">    You should have received a copy of the GNU Lesser General Public </span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"comment\">    License along with this library.  If not, see &lt;http://www.gnu.org/licenses/&gt;.</span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"comment\"></span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"comment\">*/</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"preprocessor\">#ifndef Phonon_VIDEOPLAYER_H</span></div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"preprocessor\">#define Phonon_VIDEOPLAYER_H</span></div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html\">phonon_export.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/phononnamespace_8h.html\">phononnamespace.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/mediasource_8h.html\">mediasource.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"preprocessor\">#include &lt;QtGui/QWidget&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_PHONON_VIDEOPLAYER</span></div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;<span class=\"keyword\">namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;<span class=\"keyword\">class </span>VideoPlayerPrivate;</div>\n\
<div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;<span class=\"keyword\">class </span>MediaObject;</div>\n\
<div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;<span class=\"keyword\">class </span>AudioOutput;</div>\n\
<div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;<span class=\"keyword\">class </span>VideoWidget;</div>\n\
<div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_player.html\">   64</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_player.html\">VideoPlayer</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_widget.html\">QWidget</a></div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a28faeb36eee7fb0a64b8081fbab41bcd\">Q_OBJECT</a></div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;        <span class=\"keyword\">explicit</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_player.html\">VideoPlayer</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccb\">Phonon::Category</a> category, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_widget.html\">QWidget</a> *parent = 0);</div>\n\
<div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_player.html\">VideoPlayer</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_widget.html\">QWidget</a> *parent = 0);</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;        ~<a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_player.html\">VideoPlayer</a>();</div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a> totalTime() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a> currentTime() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00105\"></a><span class=\"lineno\">  105</span>&#160;        <span class=\"keywordtype\">float</span> volume() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00106\"></a><span class=\"lineno\">  106</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00111\"></a><span class=\"lineno\">  111</span>&#160;        <span class=\"keywordtype\">bool</span> isPlaying() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00116\"></a><span class=\"lineno\">  116</span>&#160;        <span class=\"keywordtype\">bool</span> isPaused() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00117\"></a><span class=\"lineno\">  117</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\">  121</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object.html\">MediaObject</a> *mediaObject() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00122\"></a><span class=\"lineno\">  122</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00126\"></a><span class=\"lineno\">  126</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_audio_output.html\">AudioOutput</a> *audioOutput() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00127\"></a><span class=\"lineno\">  127</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00131\"></a><span class=\"lineno\">  131</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html\">VideoWidget</a> *videoWidget() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00132\"></a><span class=\"lineno\">  132</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00133\"></a><span class=\"lineno\">  133</span>&#160;    <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a8e64beb783e45c1320091e26f11a72c6\">Q_SLOTS</a>:</div>\n\
<div class=\"line\"><a name=\"l00141\"></a><span class=\"lineno\">  141</span>&#160;        <span class=\"keywordtype\">void</span> load(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_source.html\">Phonon::MediaSource</a> &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdd0f0e67e302eefcb4f6b23732e7ea3\">source</a>);</div>\n\
<div class=\"line\"><a name=\"l00142\"></a><span class=\"lineno\">  142</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00159\"></a><span class=\"lineno\">  159</span>&#160;        <span class=\"keywordtype\">void</span> play(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_source.html\">Phonon::MediaSource</a> &amp;source);</div>\n\
<div class=\"line\"><a name=\"l00160\"></a><span class=\"lineno\">  160</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00165\"></a><span class=\"lineno\">  165</span>&#160;        <span class=\"keywordtype\">void</span> play();</div>\n\
<div class=\"line\"><a name=\"l00169\"></a><span class=\"lineno\">  169</span>&#160;        <span class=\"keywordtype\">void</span> pause();</div>\n\
<div class=\"line\"><a name=\"l00173\"></a><span class=\"lineno\">  173</span>&#160;        <span class=\"keywordtype\">void</span> stop();</div>\n\
<div class=\"line\"><a name=\"l00174\"></a><span class=\"lineno\">  174</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00181\"></a><span class=\"lineno\">  181</span>&#160;        <span class=\"keywordtype\">void</span> seek(<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a> ms);</div>\n\
<div class=\"line\"><a name=\"l00187\"></a><span class=\"lineno\">  187</span>&#160;        <span class=\"keywordtype\">void</span> setVolume(<span class=\"keywordtype\">float</span> volume);</div>\n\
<div class=\"line\"><a name=\"l00188\"></a><span class=\"lineno\">  188</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00189\"></a><span class=\"lineno\">  189</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#ab1380971c106b108fd191602b937dc62\">Q_SIGNALS</a>:</div>\n\
<div class=\"line\"><a name=\"l00193\"></a><span class=\"lineno\">  193</span>&#160;        <span class=\"keywordtype\">void</span> finished();</div>\n\
<div class=\"line\"><a name=\"l00194\"></a><span class=\"lineno\">  194</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00195\"></a><span class=\"lineno\">  195</span>&#160;    <span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"><a name=\"l00196\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_player.html#aa24d1fe493cd50f3c20a4b3336770f45\">  196</a></span>&#160;        VideoPlayerPrivate *<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_player.html#aa24d1fe493cd50f3c20a4b3336770f45\">d</a>;</div>\n\
<div class=\"line\"><a name=\"l00197\"></a><span class=\"lineno\">  197</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00198\"></a><span class=\"lineno\">  198</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00199\"></a><span class=\"lineno\">  199</span>&#160;} <span class=\"comment\">//namespace Phonon</span></div>\n\
<div class=\"line\"><a name=\"l00200\"></a><span class=\"lineno\">  200</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00201\"></a><span class=\"lineno\">  201</span>&#160;<span class=\"preprocessor\">#endif //QT_NO_PHONON_VIDEOPLAYER</span></div>\n\
<div class=\"line\"><a name=\"l00202\"></a><span class=\"lineno\">  202</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00203\"></a><span class=\"lineno\">  203</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00204\"></a><span class=\"lineno\">  204</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00205\"></a><span class=\"lineno\">  205</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00206\"></a><span class=\"lineno\">  206</span>&#160;<span class=\"preprocessor\">#endif // Phonon_VIDEOPLAYER_H</span></div>\n\
<div class=\"line\"><a name=\"l00207\"></a><span class=\"lineno\">  207</span>&#160;<span class=\"comment\">// vim: sw=4 ts=4 tw=80</span></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_afdd0f0e67e302eefcb4f6b23732e7ea3\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdd0f0e67e302eefcb4f6b23732e7ea3\">source</a></div><div class=\"ttdeci\">GLsizei GLsizei GLchar * source</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01721\">GLee.h:1721</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_af0211888b9fea89f8a616cd6566c521e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_END_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00128\">qglobal.h:128</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_a22466069bc24124bf4d749ca253f5e2b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div><div class=\"ttdeci\">#define QT_BEGIN_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00141\">qglobal.h:141</a></div></div>\n\
<div class=\"ttc\" id=\"phonon__export_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonon__export_8h.html\">phonon_export.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_video_widget_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html\">Phonon::VideoWidget</a></div><div class=\"ttdoc\">Widget to display video. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/videowidget_8h_source.html#l00056\">videowidget.h:56</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_aacec69bbe5cd009ccdcaf50f9a0289aa\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a></div><div class=\"ttdeci\">long long qint64</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00947\">qglobal.h:947</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_video_player_html_aa24d1fe493cd50f3c20a4b3336770f45\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_video_player.html#aa24d1fe493cd50f3c20a4b3336770f45\">Phonon::VideoPlayer::d</a></div><div class=\"ttdeci\">VideoPlayerPrivate *const d</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/videoplayer_8h_source.html#l00196\">videoplayer.h:196</a></div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_a8e64beb783e45c1320091e26f11a72c6\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a8e64beb783e45c1320091e26f11a72c6\">Q_SLOTS</a></div><div class=\"ttdeci\">#define Q_SLOTS</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00071\">qobjectdefs.h:71</a></div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_ab1380971c106b108fd191602b937dc62\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#ab1380971c106b108fd191602b937dc62\">Q_SIGNALS</a></div><div class=\"ttdeci\">#define Q_SIGNALS</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00072\">qobjectdefs.h:72</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_source_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_source.html\">Phonon::MediaSource</a></div><div class=\"ttdoc\">Note that all constructors of this class are implicit, so that you can simply write. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/mediasource_8h_source.html#l00061\">mediasource.h:61</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object.html\">Phonon::MediaObject</a></div><div class=\"ttdoc\">Interface for media playback of a given URL. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/mediaobject_8h_source.html#l00084\">mediaobject.h:84</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ae7344b820974b9f9f7cfedd5808bd3a0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_BEGIN_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00127\">qglobal.h:127</a></div></div>\n\
<div class=\"ttc\" id=\"mediasource_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/mediasource_8h.html\">mediasource.h</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_html_a9ca8f05608edcbf85ab6c2c85a439ccb\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccb\">Phonon::Category</a></div><div class=\"ttdeci\">Category</div><div class=\"ttdoc\">Set&#39;s the category your program should be listed in in the mixer. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/phononnamespace_8h_source.html#l00188\">phononnamespace.h:188</a></div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_a28faeb36eee7fb0a64b8081fbab41bcd\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a28faeb36eee7fb0a64b8081fbab41bcd\">Q_OBJECT</a></div><div class=\"ttdeci\">#define Q_OBJECT</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00157\">qobjectdefs.h:157</a></div></div>\n\
<div class=\"ttc\" id=\"phononnamespace_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phononnamespace_8h.html\">phononnamespace.h</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></div><div class=\"ttdoc\">The KDE Multimedia classes. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/abstractaudiooutput_8h_source.html#l00033\">abstractaudiooutput.h:33</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_video_player_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_video_player.html\">Phonon::VideoPlayer</a></div><div class=\"ttdoc\">Playback class for simple tasks. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/videoplayer_8h_source.html#l00064\">videoplayer.h:64</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_audio_output_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_audio_output.html\">Phonon::AudioOutput</a></div><div class=\"ttdoc\">Class for audio output to the soundcard. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/audiooutput_8h_source.html#l00050\">audiooutput.h:50</a></div></div>\n\
<div class=\"ttc\" id=\"phonon__export_8h_html_a7d358a82612f42a3a3389f13b3a1472d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a></div><div class=\"ttdeci\">#define PHONON_EXPORT</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/phonon__export_8h_source.html#l00038\">phonon_export.h:38</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_widget_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_widget.html\">QWidget</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00150\">qwidget.h:150</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ac10725c642e865540e4faaf733ff95ff\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div><div class=\"ttdeci\">#define QT_END_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00142\">qglobal.h:142</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";