var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>phonon/backendcapabilities.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'backendcapabilities_8h_source.html\', tocPrefix);\n\
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
            <h1>phonon/backendcapabilities.h Source File</h1>\n\
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
<div class=\"title\">backendcapabilities.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/backendcapabilities_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">/*  This file is part of the KDE project</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">    Copyright (C) 2005-2006 Matthias Kretz &lt;kretz@kde.org&gt;</span></div>\n\
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
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"comment\">    You should have received a copy of the GNU Lesser General Public</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"comment\">    License along with this library.  If not, see &lt;http://www.gnu.org/licenses/&gt;.</span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"comment\"></span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"comment\">*/</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"preprocessor\">#ifndef Phonon_BACKENDCAPABILITIES_H</span></div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"preprocessor\">#define Phonon_BACKENDCAPABILITIES_H</span></div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html\">phonon_export.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/objectdescription_8h.html\">objectdescription.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"preprocessor\">#include &lt;QtCore/QObject&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;<span class=\"preprocessor\">#ifdef __QT_SYNCQT__</span></div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;<span class=\"comment\">// Tell syncqt that the BackendCapabilities namespace should be treated like a class</span></div>\n\
<div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;<span class=\"preprocessor\">#pragma qt_class(Phonon::BackendCapabilities)</span></div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;<span class=\"preprocessor\">#pragma qt_sync_stop_processing</span></div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;<span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_list.html\">   40</a></span>&#160;<span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> T&gt; <span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a>;</div>\n\
<div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a>;</div>\n\
<div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;<span class=\"keyword\">namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\">   45</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html\">   52</a></span>&#160;<span class=\"keyword\">namespace </span>BackendCapabilities</div>\n\
<div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_backend_capabilities_1_1_notifier.html\">   59</a></span>&#160;    <span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_backend_capabilities_1_1_notifier.html\">Notifier</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a></div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a28faeb36eee7fb0a64b8081fbab41bcd\">Q_OBJECT</a></div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#ab1380971c106b108fd191602b937dc62\">Q_SIGNALS</a>:</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;            <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_backend_capabilities_1_1_notifier.html#aa4ec221238cb8b4c80929a8115ac5a98\">capabilitiesChanged</a>();</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;            <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_backend_capabilities_1_1_notifier.html#aae03a67c4e646bc674c311998aec8a31\">availableAudioOutputDevicesChanged</a>();</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\">   85</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_PHONON_AUDIOCAPTURE</span></div>\n\
<div class=\"line\"><a name=\"l00086\"></a><span class=\"lineno\">   86</span>&#160;            <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_backend_capabilities_1_1_notifier.html#a510820151208911ef40f6495357de153\">availableAudioCaptureDevicesChanged</a>();</div>\n\
<div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;<span class=\"preprocessor\">#endif //QT_NO_PHONON_AUDIOCAPTURE</span></div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;    };</div>\n\
<div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00104\"></a><span class=\"lineno\">  104</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_backend_capabilities_1_1_notifier.html\">Notifier</a> *<a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html#a84723110f9fd5e1956bb585bbdd267fa\">notifier</a>();</div>\n\
<div class=\"line\"><a name=\"l00105\"></a><span class=\"lineno\">  105</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00111\"></a><span class=\"lineno\">  111</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html#a1408af5994b822f06ddd8229ee6f552b\">availableMimeTypes</a>();</div>\n\
<div class=\"line\"><a name=\"l00112\"></a><span class=\"lineno\">  112</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00120\"></a><span class=\"lineno\">  120</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a> <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html#a00322470a30f4349a80cc89de93db21f\">isMimeTypeAvailable</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;mimeType);</div>\n\
<div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\">  121</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00128\"></a><span class=\"lineno\">  128</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;AudioOutputDevice&gt;</a> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html#a4783f1dfc908e62f7640b8ad0722d74c\">availableAudioOutputDevices</a>();</div>\n\
<div class=\"line\"><a name=\"l00129\"></a><span class=\"lineno\">  129</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00136\"></a><span class=\"lineno\">  136</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_PHONON_AUDIOCAPTURE</span></div>\n\
<div class=\"line\"><a name=\"l00137\"></a><span class=\"lineno\">  137</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;AudioCaptureDevice&gt;</a> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html#a8b464c68c70aeabccaa83a48315a8eaa\">availableAudioCaptureDevices</a>();</div>\n\
<div class=\"line\"><a name=\"l00138\"></a><span class=\"lineno\">  138</span>&#160;<span class=\"preprocessor\">#endif //QT_NO_PHONON_AUDIOCAPTURE</span></div>\n\
<div class=\"line\"><a name=\"l00139\"></a><span class=\"lineno\">  139</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00146\"></a><span class=\"lineno\">  146</span>&#160;<span class=\"comment\">//    PHONON_EXPORT QList&lt;VideoOutputDevice&gt; availableVideoOutputDevices();</span></div>\n\
<div class=\"line\"><a name=\"l00147\"></a><span class=\"lineno\">  147</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00154\"></a><span class=\"lineno\">  154</span>&#160;<span class=\"comment\">//    PHONON_EXPORT QList&lt;VideoCaptureDevice&gt; availableVideoCaptureDevices();</span></div>\n\
<div class=\"line\"><a name=\"l00155\"></a><span class=\"lineno\">  155</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00162\"></a><span class=\"lineno\">  162</span>&#160;<span class=\"comment\">//    PHONON_EXPORT QList&lt;VisualizationDescription&gt; availableVisualizations();</span></div>\n\
<div class=\"line\"><a name=\"l00163\"></a><span class=\"lineno\">  163</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00170\"></a><span class=\"lineno\">  170</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_PHONON_EFFECT</span></div>\n\
<div class=\"line\"><a name=\"l00171\"></a><span class=\"lineno\">  171</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;EffectDescription&gt;</a> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html#a0092522cf9ded156a63531a44f0aa72f\">availableAudioEffects</a>();</div>\n\
<div class=\"line\"><a name=\"l00172\"></a><span class=\"lineno\">  172</span>&#160;<span class=\"preprocessor\">#endif //QT_NO_PHONON_EFFECT</span></div>\n\
<div class=\"line\"><a name=\"l00173\"></a><span class=\"lineno\">  173</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00174\"></a><span class=\"lineno\">  174</span>&#160;<span class=\"comment\">//X     /**</span></div>\n\
<div class=\"line\"><a name=\"l00175\"></a><span class=\"lineno\">  175</span>&#160;<span class=\"comment\">//X      * Returns descriptions for the video effects the backend supports.</span></div>\n\
<div class=\"line\"><a name=\"l00176\"></a><span class=\"lineno\">  176</span>&#160;<span class=\"comment\">//X      *</span></div>\n\
<div class=\"line\"><a name=\"l00177\"></a><span class=\"lineno\">  177</span>&#160;<span class=\"comment\">//X      * \\return A list of VideoEffectDescription objects that give a name and</span></div>\n\
<div class=\"line\"><a name=\"l00178\"></a><span class=\"lineno\">  178</span>&#160;<span class=\"comment\">//X      * description for every supported video effect.</span></div>\n\
<div class=\"line\"><a name=\"l00179\"></a><span class=\"lineno\">  179</span>&#160;<span class=\"comment\">//X      */</span></div>\n\
<div class=\"line\"><a name=\"l00180\"></a><span class=\"lineno\">  180</span>&#160;<span class=\"comment\">//X     PHONON_EXPORT QList&lt;EffectDescription&gt; availableVideoEffects();</span></div>\n\
<div class=\"line\"><a name=\"l00181\"></a><span class=\"lineno\">  181</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00188\"></a><span class=\"lineno\">  188</span>&#160;<span class=\"comment\">//    PHONON_EXPORT QList&lt;AudioCodecDescription&gt; availableAudioCodecs();</span></div>\n\
<div class=\"line\"><a name=\"l00189\"></a><span class=\"lineno\">  189</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00196\"></a><span class=\"lineno\">  196</span>&#160;<span class=\"comment\">//    PHONON_EXPORT QList&lt;VideoCodecDescription&gt; availableVideoCodecs();</span></div>\n\
<div class=\"line\"><a name=\"l00197\"></a><span class=\"lineno\">  197</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00204\"></a><span class=\"lineno\">  204</span>&#160;<span class=\"comment\">//    PHONON_EXPORT QList&lt;ContainerFormatDescription&gt; availableContainerFormats();</span></div>\n\
<div class=\"line\"><a name=\"l00205\"></a><span class=\"lineno\">  205</span>&#160;} <span class=\"comment\">// namespace BackendCapabilities</span></div>\n\
<div class=\"line\"><a name=\"l00206\"></a><span class=\"lineno\">  206</span>&#160;} <span class=\"comment\">// namespace Phonon</span></div>\n\
<div class=\"line\"><a name=\"l00207\"></a><span class=\"lineno\">  207</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00208\"></a><span class=\"lineno\">  208</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00209\"></a><span class=\"lineno\">  209</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00210\"></a><span class=\"lineno\">  210</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00211\"></a><span class=\"lineno\">  211</span>&#160;<span class=\"preprocessor\">#endif // Phonon_BACKENDCAPABILITIES_H</span></div>\n\
<div class=\"line\"><a name=\"l00212\"></a><span class=\"lineno\">  212</span>&#160;<span class=\"comment\">// vim: sw=4 ts=4 tw=80</span></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_af0211888b9fea89f8a616cd6566c521e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_END_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00128\">qglobal.h:128</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstringlist_8h_source.html#l00066\">qstringlist.h:66</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_a22466069bc24124bf4d749ca253f5e2b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div><div class=\"ttdeci\">#define QT_BEGIN_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00141\">qglobal.h:141</a></div></div>\n\
<div class=\"ttc\" id=\"phonon__export_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonon__export_8h.html\">phonon_export.h</a></div></div>\n\
<div class=\"ttc\" id=\"objectdescription_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/objectdescription_8h.html\">objectdescription.h</a></div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_ab1380971c106b108fd191602b937dc62\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#ab1380971c106b108fd191602b937dc62\">Q_SIGNALS</a></div><div class=\"ttdeci\">#define Q_SIGNALS</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00072\">qobjectdefs.h:72</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_backend_capabilities_1_1_notifier_html_aae03a67c4e646bc674c311998aec8a31\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_backend_capabilities_1_1_notifier.html#aae03a67c4e646bc674c311998aec8a31\">Phonon::BackendCapabilities::Notifier::availableAudioOutputDevicesChanged</a></div><div class=\"ttdeci\">void availableAudioOutputDevicesChanged()</div><div class=\"ttdoc\">This signal is emitted when audio output devices were plugged or unplugged. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_backend_capabilities_1_1_notifier_html_a510820151208911ef40f6495357de153\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_backend_capabilities_1_1_notifier.html#a510820151208911ef40f6495357de153\">Phonon::BackendCapabilities::Notifier::availableAudioCaptureDevicesChanged</a></div><div class=\"ttdeci\">void availableAudioCaptureDevicesChanged()</div><div class=\"ttdoc\">This signal is emitted when audio capture devices were plugged or unplugged. </div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_1_1_backend_capabilities_html_a1408af5994b822f06ddd8229ee6f552b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html#a1408af5994b822f06ddd8229ee6f552b\">Phonon::BackendCapabilities::availableMimeTypes</a></div><div class=\"ttdeci\">PHONON_EXPORT QStringList availableMimeTypes()</div><div class=\"ttdoc\">Returns a list of mime types that the Backend can decode. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_backend_capabilities_1_1_notifier_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_backend_capabilities_1_1_notifier.html\">Phonon::BackendCapabilities::Notifier</a></div><div class=\"ttdoc\">Notifications about backend capabilities. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/backendcapabilities_8h_source.html#l00059\">backendcapabilities.h:59</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ae7344b820974b9f9f7cfedd5808bd3a0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_BEGIN_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00127\">qglobal.h:127</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_backend_capabilities_1_1_notifier_html_aa4ec221238cb8b4c80929a8115ac5a98\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_backend_capabilities_1_1_notifier.html#aa4ec221238cb8b4c80929a8115ac5a98\">Phonon::BackendCapabilities::Notifier::capabilitiesChanged</a></div><div class=\"ttdeci\">void capabilitiesChanged()</div><div class=\"ttdoc\">This signal is emitted if the capabilities have changed. </div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_1_1_backend_capabilities_html_a84723110f9fd5e1956bb585bbdd267fa\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html#a84723110f9fd5e1956bb585bbdd267fa\">Phonon::BackendCapabilities::notifier</a></div><div class=\"ttdeci\">PHONON_EXPORT Notifier * notifier()</div><div class=\"ttdoc\">Use this function to get a QObject pointer to connect to one of the Notifier signals. </div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_1_1_backend_capabilities_html_a4783f1dfc908e62f7640b8ad0722d74c\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html#a4783f1dfc908e62f7640b8ad0722d74c\">Phonon::BackendCapabilities::availableAudioOutputDevices</a></div><div class=\"ttdeci\">PHONON_EXPORT QList&lt; AudioOutputDevice &gt; availableAudioOutputDevices()</div><div class=\"ttdoc\">Returns the audio output devices the backend supports. </div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_a28faeb36eee7fb0a64b8081fbab41bcd\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a28faeb36eee7fb0a64b8081fbab41bcd\">Q_OBJECT</a></div><div class=\"ttdeci\">#define Q_OBJECT</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00157\">qobjectdefs.h:157</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_1_1_backend_capabilities_html_a00322470a30f4349a80cc89de93db21f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html#a00322470a30f4349a80cc89de93db21f\">Phonon::BackendCapabilities::isMimeTypeAvailable</a></div><div class=\"ttdeci\">PHONON_EXPORT bool isMimeTypeAvailable(const QString &amp;mimeType)</div><div class=\"ttdoc\">Often all you want to know is whether one given MIME type can be decoded by the backend. </div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></div><div class=\"ttdoc\">The KDE Multimedia classes. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/abstractaudiooutput_8h_source.html#l00033\">abstractaudiooutput.h:33</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_1_1_backend_capabilities_html_a8b464c68c70aeabccaa83a48315a8eaa\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html#a8b464c68c70aeabccaa83a48315a8eaa\">Phonon::BackendCapabilities::availableAudioCaptureDevices</a></div><div class=\"ttdeci\">PHONON_EXPORT QList&lt; AudioCaptureDevice &gt; availableAudioCaptureDevices()</div><div class=\"ttdoc\">Returns the audio capture devices the backend supports. </div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00083\">qstring.h:83</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/backendcapabilities_8h_source.html#l00040\">backendcapabilities.h:40</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_object_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobject_8h_source.html#l00111\">qobject.h:111</a></div></div>\n\
<div class=\"ttc\" id=\"phonon__export_8h_html_a7d358a82612f42a3a3389f13b3a1472d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a></div><div class=\"ttdeci\">#define PHONON_EXPORT</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/phonon__export_8h_source.html#l00038\">phonon_export.h:38</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_1_1_backend_capabilities_html_a0092522cf9ded156a63531a44f0aa72f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon_1_1_backend_capabilities.html#a0092522cf9ded156a63531a44f0aa72f\">Phonon::BackendCapabilities::availableAudioEffects</a></div><div class=\"ttdeci\">PHONON_EXPORT QList&lt; EffectDescription &gt; availableAudioEffects()</div><div class=\"ttdoc\">Returns the video output devices the backend supports. </div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ac10725c642e865540e4faaf733ff95ff\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div><div class=\"ttdeci\">#define QT_END_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00142\">qglobal.h:142</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";