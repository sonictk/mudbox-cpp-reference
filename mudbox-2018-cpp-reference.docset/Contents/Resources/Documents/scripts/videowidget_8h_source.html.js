var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>phonon/videowidget.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'videowidget_8h_source.html\', tocPrefix);\n\
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
            <h1>phonon/videowidget.h Source File</h1>\n\
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
<div class=\"title\">videowidget.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/videowidget_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">/*  This file is part of the KDE project</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">    Copyright (C) 2005-2007 Matthias Kretz &lt;kretz@kde.org&gt;</span></div>\n\
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
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"preprocessor\">#ifndef Phonon_VIDEOWIDGET_H</span></div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"preprocessor\">#define Phonon_VIDEOWIDGET_H</span></div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html\">phonon_export.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/phonondefs_8h.html\">phonondefs.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/abstractvideooutput_8h.html\">abstractvideooutput.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"preprocessor\">#include &lt;QtGui/QWidget&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>;</div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_PHONON_VIDEO</span></div>\n\
<div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;<span class=\"keyword\">namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;<span class=\"keyword\">class </span>AbstractVideoOutput;</div>\n\
<div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;    <span class=\"keyword\">class </span>VideoWidgetPrivate;</div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html\">   56</a></span>&#160;    <span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html\">VideoWidget</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_widget.html\">QWidget</a>, <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_abstract_video_output.html\">Phonon::AbstractVideoOutput</a></div>\n\
<div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\">   57</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/phonondefs_8h.html#a3d261f04ae9240e1d38c477d3397f328\">K_DECLARE_PRIVATE</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html\">VideoWidget</a>)</div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a28faeb36eee7fb0a64b8081fbab41bcd\">Q_OBJECT</a></div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#aa4549a75d930e1cb89ab4bdb3f3b2764\">Q_ENUMS</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#acc76f5ec986a0024046c5c0e494f29ac\">AspectRatio</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#a4dc00cd500da7ec5cb8eccf10da32958\">ScaleMode</a>)</div>\n\
<div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#ad42a73c9228e7688f25d1f2364a576db\">   78</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#ab957fa68243bef7be233542a266be4be\">Q_PROPERTY</a>(<span class=\"keywordtype\">bool</span> fullScreen READ isFullScreen WRITE setFullScreen)</div>\n\
<div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#a3e6c665df13e7f6f7d3306e44dd9e733\">   85</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#ab957fa68243bef7be233542a266be4be\">Q_PROPERTY</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#acc76f5ec986a0024046c5c0e494f29ac\">AspectRatio</a> aspectRatio READ aspectRatio WRITE setAspectRatio)</div>\n\
<div class=\"line\"><a name=\"l00086\"></a><span class=\"lineno\">   86</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#a62bd942c3163e5372be73cb342066c74\">   96</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#ab957fa68243bef7be233542a266be4be\">Q_PROPERTY</a>(ScaleMode scaleMode READ scaleMode WRITE setScaleMode)</div>\n\
<div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\">   97</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00103\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#a9e401f2d861b86e158f5e69816f22d98\">  103</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#ab957fa68243bef7be233542a266be4be\">Q_PROPERTY</a>(qreal brightness READ brightness WRITE setBrightness)</div>\n\
<div class=\"line\"><a name=\"l00109\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#a767114e15a1b32665caae39c33107e9c\">  109</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#ab957fa68243bef7be233542a266be4be\">Q_PROPERTY</a>(qreal contrast READ contrast WRITE setContrast)</div>\n\
<div class=\"line\"><a name=\"l00115\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#ac36e68a4a1370d3ff1635403aed33fb5\">  115</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#ab957fa68243bef7be233542a266be4be\">Q_PROPERTY</a>(qreal hue READ hue WRITE setHue)</div>\n\
<div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#a1536d76f2ad40541624ee71369204e6a\">  121</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#ab957fa68243bef7be233542a266be4be\">Q_PROPERTY</a>(qreal saturation READ saturation WRITE setSaturation)</div>\n\
<div class=\"line\"><a name=\"l00122\"></a><span class=\"lineno\">  122</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00123\"></a><span class=\"lineno\">  123</span>&#160;        public:</div>\n\
<div class=\"line\"><a name=\"l00127\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#acc76f5ec986a0024046c5c0e494f29ac\">  127</a></span>&#160;            enum <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#acc76f5ec986a0024046c5c0e494f29ac\">AspectRatio</a></div>\n\
<div class=\"line\"><a name=\"l00128\"></a><span class=\"lineno\">  128</span>&#160;            {</div>\n\
<div class=\"line\"><a name=\"l00133\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#acc76f5ec986a0024046c5c0e494f29aca37614802f1d396722dd16b1125d546c8\">  133</a></span>&#160;                AspectRatioAuto = 0,</div>\n\
<div class=\"line\"><a name=\"l00139\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#acc76f5ec986a0024046c5c0e494f29aca2561c2c34daa422347cafa360480a184\">  139</a></span>&#160;                AspectRatioWidget = 1,</div>\n\
<div class=\"line\"><a name=\"l00144\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#acc76f5ec986a0024046c5c0e494f29acae509956c0de68fe092ac51cb1b2c7cbb\">  144</a></span>&#160;                AspectRatio4_3 = 2,</div>\n\
<div class=\"line\"><a name=\"l00149\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#acc76f5ec986a0024046c5c0e494f29acad92e70e174979c263418254213b2b3aa\">  149</a></span>&#160;                AspectRatio16_9 = 3</div>\n\
<div class=\"line\"><a name=\"l00150\"></a><span class=\"lineno\">  150</span>&#160;<span class=\"comment\">//X                 /**</span></div>\n\
<div class=\"line\"><a name=\"l00151\"></a><span class=\"lineno\">  151</span>&#160;<span class=\"comment\">//X                  * Assume that every pixel of the video image needs to be displayed with the same</span></div>\n\
<div class=\"line\"><a name=\"l00152\"></a><span class=\"lineno\">  152</span>&#160;<span class=\"comment\">//X                  * physical width and height. (1:1 image pixels, not imagewidth</span></div>\n\
<div class=\"line\"><a name=\"l00153\"></a><span class=\"lineno\">  153</span>&#160;<span class=\"comment\">//X                  * = imageheight)</span></div>\n\
<div class=\"line\"><a name=\"l00154\"></a><span class=\"lineno\">  154</span>&#160;<span class=\"comment\">//X                  */</span></div>\n\
<div class=\"line\"><a name=\"l00155\"></a><span class=\"lineno\">  155</span>&#160;<span class=\"comment\">//X                 AspectRatioSquare = 4,</span></div>\n\
<div class=\"line\"><a name=\"l00156\"></a><span class=\"lineno\">  156</span>&#160;            };</div>\n\
<div class=\"line\"><a name=\"l00157\"></a><span class=\"lineno\">  157</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00158\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#a4dc00cd500da7ec5cb8eccf10da32958\">  158</a></span>&#160;            <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#a4dc00cd500da7ec5cb8eccf10da32958\">ScaleMode</a> {</div>\n\
<div class=\"line\"><a name=\"l00159\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#a4dc00cd500da7ec5cb8eccf10da32958aecd2fa8c783e6ad7fece4e75a46f7781\">  159</a></span>&#160;                FitInView = 0,</div>\n\
<div class=\"line\"><a name=\"l00160\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#a4dc00cd500da7ec5cb8eccf10da32958ac157265d528c6ff23553c269a3b93578\">  160</a></span>&#160;                ScaleAndCrop = 1</div>\n\
<div class=\"line\"><a name=\"l00161\"></a><span class=\"lineno\">  161</span>&#160;            };</div>\n\
<div class=\"line\"><a name=\"l00162\"></a><span class=\"lineno\">  162</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00166\"></a><span class=\"lineno\">  166</span>&#160;            <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html\">VideoWidget</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_widget.html\">QWidget</a> *parent = 0);</div>\n\
<div class=\"line\"><a name=\"l00167\"></a><span class=\"lineno\">  167</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00168\"></a><span class=\"lineno\">  168</span>&#160;            AspectRatio aspectRatio() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00169\"></a><span class=\"lineno\">  169</span>&#160;            ScaleMode scaleMode() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00170\"></a><span class=\"lineno\">  170</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00171\"></a><span class=\"lineno\">  171</span>&#160;            qreal brightness() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00172\"></a><span class=\"lineno\">  172</span>&#160;            qreal contrast() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00173\"></a><span class=\"lineno\">  173</span>&#160;            qreal hue() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00174\"></a><span class=\"lineno\">  174</span>&#160;            qreal saturation() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00175\"></a><span class=\"lineno\">  175</span>&#160;            <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_image.html\">QImage</a> snapshot() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00176\"></a><span class=\"lineno\">  176</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00177\"></a><span class=\"lineno\">  177</span>&#160;            <span class=\"comment\">//TODO: bar colors property</span></div>\n\
<div class=\"line\"><a name=\"l00178\"></a><span class=\"lineno\">  178</span>&#160;        <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a8e64beb783e45c1320091e26f11a72c6\">Q_SLOTS</a>:</div>\n\
<div class=\"line\"><a name=\"l00179\"></a><span class=\"lineno\">  179</span>&#160;            <span class=\"keywordtype\">void</span> setFullScreen(<span class=\"keywordtype\">bool</span> fullscreen);</div>\n\
<div class=\"line\"><a name=\"l00180\"></a><span class=\"lineno\">  180</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00184\"></a><span class=\"lineno\">  184</span>&#160;            <span class=\"keywordtype\">void</span> exitFullScreen();</div>\n\
<div class=\"line\"><a name=\"l00185\"></a><span class=\"lineno\">  185</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00189\"></a><span class=\"lineno\">  189</span>&#160;            <span class=\"keywordtype\">void</span> enterFullScreen();</div>\n\
<div class=\"line\"><a name=\"l00190\"></a><span class=\"lineno\">  190</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00191\"></a><span class=\"lineno\">  191</span>&#160;            <span class=\"keywordtype\">void</span> setAspectRatio(AspectRatio);</div>\n\
<div class=\"line\"><a name=\"l00192\"></a><span class=\"lineno\">  192</span>&#160;            <span class=\"keywordtype\">void</span> setScaleMode(ScaleMode);</div>\n\
<div class=\"line\"><a name=\"l00193\"></a><span class=\"lineno\">  193</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00194\"></a><span class=\"lineno\">  194</span>&#160;            <span class=\"keywordtype\">void</span> setBrightness(qreal <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a>);</div>\n\
<div class=\"line\"><a name=\"l00195\"></a><span class=\"lineno\">  195</span>&#160;            <span class=\"keywordtype\">void</span> setContrast(qreal <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a>);</div>\n\
<div class=\"line\"><a name=\"l00196\"></a><span class=\"lineno\">  196</span>&#160;            <span class=\"keywordtype\">void</span> setHue(qreal <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a>);</div>\n\
<div class=\"line\"><a name=\"l00197\"></a><span class=\"lineno\">  197</span>&#160;            <span class=\"keywordtype\">void</span> setSaturation(qreal <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a>);</div>\n\
<div class=\"line\"><a name=\"l00198\"></a><span class=\"lineno\">  198</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00199\"></a><span class=\"lineno\">  199</span>&#160;        <span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"><a name=\"l00206\"></a><span class=\"lineno\">  206</span>&#160;            <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html\">VideoWidget</a>(VideoWidgetPrivate &amp;d, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_widget.html\">QWidget</a> *parent);</div>\n\
<div class=\"line\"><a name=\"l00207\"></a><span class=\"lineno\">  207</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00208\"></a><span class=\"lineno\">  208</span>&#160;            <span class=\"keywordtype\">void</span> mouseMoveEvent(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_mouse_event.html\">QMouseEvent</a> *);</div>\n\
<div class=\"line\"><a name=\"l00209\"></a><span class=\"lineno\">  209</span>&#160;            <span class=\"keywordtype\">bool</span> event(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_event.html\">QEvent</a> *);</div>\n\
<div class=\"line\"><a name=\"l00210\"></a><span class=\"lineno\">  210</span>&#160;    };</div>\n\
<div class=\"line\"><a name=\"l00211\"></a><span class=\"lineno\">  211</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00212\"></a><span class=\"lineno\">  212</span>&#160;} <span class=\"comment\">//namespace Phonon</span></div>\n\
<div class=\"line\"><a name=\"l00213\"></a><span class=\"lineno\">  213</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00214\"></a><span class=\"lineno\">  214</span>&#160;<span class=\"preprocessor\">#endif //QT_NO_PHONON_VIDEO</span></div>\n\
<div class=\"line\"><a name=\"l00215\"></a><span class=\"lineno\">  215</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00216\"></a><span class=\"lineno\">  216</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00217\"></a><span class=\"lineno\">  217</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00218\"></a><span class=\"lineno\">  218</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00219\"></a><span class=\"lineno\">  219</span>&#160;<span class=\"comment\">// vim: sw=4 ts=4 tw=80</span></div>\n\
<div class=\"line\"><a name=\"l00220\"></a><span class=\"lineno\">  220</span>&#160;<span class=\"preprocessor\">#endif // Phonon_VIDEOWIDGET_H</span></div>\n\
<div class=\"ttc\" id=\"phonondefs_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonondefs_8h.html\">phonondefs.h</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_af0211888b9fea89f8a616cd6566c521e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_END_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00128\">qglobal.h:128</a></div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_ab957fa68243bef7be233542a266be4be\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#ab957fa68243bef7be233542a266be4be\">Q_PROPERTY</a></div><div class=\"ttdeci\">#define Q_PROPERTY(text)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00080\">qobjectdefs.h:80</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_a22466069bc24124bf4d749ca253f5e2b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div><div class=\"ttdeci\">#define QT_BEGIN_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00141\">qglobal.h:141</a></div></div>\n\
<div class=\"ttc\" id=\"phonon__export_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonon__export_8h.html\">phonon_export.h</a></div></div>\n\
<div class=\"ttc\" id=\"abstractvideooutput_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/abstractvideooutput_8h.html\">abstractvideooutput.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_video_widget_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html\">Phonon::VideoWidget</a></div><div class=\"ttdoc\">Widget to display video. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/videowidget_8h_source.html#l00056\">videowidget.h:56</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_video_widget_html_a4dc00cd500da7ec5cb8eccf10da32958\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#a4dc00cd500da7ec5cb8eccf10da32958\">Phonon::VideoWidget::ScaleMode</a></div><div class=\"ttdeci\">ScaleMode</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/videowidget_8h_source.html#l00158\">videowidget.h:158</a></div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_a8e64beb783e45c1320091e26f11a72c6\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a8e64beb783e45c1320091e26f11a72c6\">Q_SLOTS</a></div><div class=\"ttdeci\">#define Q_SLOTS</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00071\">qobjectdefs.h:71</a></div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_aa4549a75d930e1cb89ab4bdb3f3b2764\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#aa4549a75d930e1cb89ab4bdb3f3b2764\">Q_ENUMS</a></div><div class=\"ttdeci\">#define Q_ENUMS(x)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00084\">qobjectdefs.h:84</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ae7344b820974b9f9f7cfedd5808bd3a0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_BEGIN_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00127\">qglobal.h:127</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_video_widget_html_acc76f5ec986a0024046c5c0e494f29ac\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_video_widget.html#acc76f5ec986a0024046c5c0e494f29ac\">Phonon::VideoWidget::AspectRatio</a></div><div class=\"ttdeci\">AspectRatio</div><div class=\"ttdoc\">Defines the width:height to be used for the video. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/videowidget_8h_source.html#l00127\">videowidget.h:127</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_image_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_image.html\">QImage</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qimage_8h_source.html#l00087\">qimage.h:87</a></div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_a28faeb36eee7fb0a64b8081fbab41bcd\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a28faeb36eee7fb0a64b8081fbab41bcd\">Q_OBJECT</a></div><div class=\"ttdeci\">#define Q_OBJECT</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00157\">qobjectdefs.h:157</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_event_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_event.html\">QEvent</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qcoreevent_8h_source.html#l00056\">qcoreevent.h:56</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_aed27f17ebdc1fd207871bc2ed5da0d0f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#aed27f17ebdc1fd207871bc2ed5da0d0f\">value</a></div><div class=\"ttdeci\">GLsizei const GLfloat * value</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01742\">GLee.h:1742</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></div><div class=\"ttdoc\">The KDE Multimedia classes. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/abstractaudiooutput_8h_source.html#l00033\">abstractaudiooutput.h:33</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00083\">qstring.h:83</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_abstract_video_output_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_abstract_video_output.html\">Phonon::AbstractVideoOutput</a></div><div class=\"ttdoc\">Common base class for all video outputs. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/abstractvideooutput_8h_source.html#l00053\">abstractvideooutput.h:53</a></div></div>\n\
<div class=\"ttc\" id=\"phonondefs_8h_html_a3d261f04ae9240e1d38c477d3397f328\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonondefs_8h.html#a3d261f04ae9240e1d38c477d3397f328\">K_DECLARE_PRIVATE</a></div><div class=\"ttdeci\">#define K_DECLARE_PRIVATE(Class)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/phonondefs_8h_source.html#l00046\">phonondefs.h:46</a></div></div>\n\
<div class=\"ttc\" id=\"phonon__export_8h_html_a7d358a82612f42a3a3389f13b3a1472d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a></div><div class=\"ttdeci\">#define PHONON_EXPORT</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/phonon__export_8h_source.html#l00038\">phonon_export.h:38</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_widget_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_widget.html\">QWidget</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwidget_8h_source.html#l00150\">qwidget.h:150</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ac10725c642e865540e4faaf733ff95ff\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div><div class=\"ttdeci\">#define QT_END_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00142\">qglobal.h:142</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_mouse_event_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_mouse_event.html\">QMouseEvent</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qevent_8h_source.html#l00085\">qevent.h:85</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";