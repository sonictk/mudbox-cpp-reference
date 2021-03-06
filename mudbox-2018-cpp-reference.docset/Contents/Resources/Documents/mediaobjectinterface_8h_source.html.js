var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>phonon/mediaobjectinterface.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'mediaobjectinterface_8h_source.html\', tocPrefix);\n\
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
            <h1>phonon/mediaobjectinterface.h Source File</h1>\n\
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
<div class=\"title\">mediaobjectinterface.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/mediaobjectinterface_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">/*  This file is part of the KDE project</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">    Copyright (C) 2006-2007 Matthias Kretz &lt;kretz@kde.org&gt;</span></div>\n\
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
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"preprocessor\">#ifndef PHONON_MEDIAOBJECTINTERFACE_H</span></div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"preprocessor\">#define PHONON_MEDIAOBJECTINTERFACE_H</span></div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/mediaobject_8h.html\">mediaobject.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"preprocessor\">#include &lt;QtCore/QObject&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;<span class=\"keyword\">namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;<span class=\"keyword\">class </span>StreamInterface;</div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html\">   67</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html\">MediaObjectInterface</a></div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a57833c75d7eeabff06fba40a6b094e7d\">   70</a></span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a57833c75d7eeabff06fba40a6b094e7d\">~MediaObjectInterface</a>() {}</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a266a63914c37f47af9c48ad9afe5bd14\">play</a>() = 0;</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a146b9e6f9c2d9d5b18e7221a38dbf103\">pause</a>() = 0;</div>\n\
<div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00104\"></a><span class=\"lineno\">  104</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a0efff8623a2fb79dad94a96dcf16d966\">stop</a>() = 0;</div>\n\
<div class=\"line\"><a name=\"l00105\"></a><span class=\"lineno\">  105</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\">  121</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#adf77032df0d7baec0226a33b3a723d32\">seek</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a> milliseconds) = 0;</div>\n\
<div class=\"line\"><a name=\"l00122\"></a><span class=\"lineno\">  122</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00129\"></a><span class=\"lineno\">  129</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a70e4a22a9339a34c03bffdda7b2b04ba\">qint32</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a591d332a9a687989bfdf5146d722f065\">tickInterval</a>() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00139\"></a><span class=\"lineno\">  139</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a9872a861c35acdaa1c4169ee7272a09a\">setTickInterval</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a70e4a22a9339a34c03bffdda7b2b04ba\">qint32</a> interval) = 0;</div>\n\
<div class=\"line\"><a name=\"l00140\"></a><span class=\"lineno\">  140</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00146\"></a><span class=\"lineno\">  146</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#aa90895e1a6b45c8180b7ade67879ffda\">hasVideo</a>() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00152\"></a><span class=\"lineno\">  152</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#ab810aae609772374b85cb92ae76cce86\">isSeekable</a>() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00156\"></a><span class=\"lineno\">  156</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#aad853a91a00305bc9e7b81490bb0a294\">currentTime</a>() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00160\"></a><span class=\"lineno\">  160</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a5d74787dedbc4e11c1ab15bf487e61f8\">Phonon::State</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#accf6c2c7262e3b9367b32c8d9f198d9e\">state</a>() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00161\"></a><span class=\"lineno\">  161</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00165\"></a><span class=\"lineno\">  165</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a0c0d6f78472f2654d2c6e7b748aad0d4\">errorString</a>() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00166\"></a><span class=\"lineno\">  166</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00172\"></a><span class=\"lineno\">  172</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ab0df38968e4f03a3f1f6d6df0f31f45a\">Phonon::ErrorType</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a99685f78b7971768c3a9abe0da32d6ca\">errorType</a>() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00173\"></a><span class=\"lineno\">  173</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00181\"></a><span class=\"lineno\">  181</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a41332a798e5e75d8d8719b3e3e5b704d\">totalTime</a>() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00182\"></a><span class=\"lineno\">  182</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00186\"></a><span class=\"lineno\">  186</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_source.html\">MediaSource</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#ab127c1c16667c8ab8abf5f48d88b8f3b\">source</a>() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00187\"></a><span class=\"lineno\">  187</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00208\"></a><span class=\"lineno\">  208</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#ad878720bf0f1e6ae4909cbde6e2e7966\">setSource</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_source.html\">MediaSource</a> &amp;) = 0;</div>\n\
<div class=\"line\"><a name=\"l00209\"></a><span class=\"lineno\">  209</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00225\"></a><span class=\"lineno\">  225</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#ace522b56e4e0b0ccc17bf19f65933dbc\">setNextSource</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_source.html\">MediaSource</a> &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdd0f0e67e302eefcb4f6b23732e7ea3\">source</a>) = 0;</div>\n\
<div class=\"line\"><a name=\"l00226\"></a><span class=\"lineno\">  226</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00227\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a3ed3902e4f28f43b6b357ba589d9cfbb\">  227</a></span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a3ed3902e4f28f43b6b357ba589d9cfbb\">remainingTime</a>()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a41332a798e5e75d8d8719b3e3e5b704d\">totalTime</a>() - <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#aad853a91a00305bc9e7b81490bb0a294\">currentTime</a>(); }</div>\n\
<div class=\"line\"><a name=\"l00228\"></a><span class=\"lineno\">  228</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a70e4a22a9339a34c03bffdda7b2b04ba\">qint32</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#aa59f9d1a3c65e9f73313224509c20804\">prefinishMark</a>() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00229\"></a><span class=\"lineno\">  229</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a8a62ecd3241e903b986e3736ec009434\">setPrefinishMark</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a70e4a22a9339a34c03bffdda7b2b04ba\">qint32</a>) = 0;</div>\n\
<div class=\"line\"><a name=\"l00230\"></a><span class=\"lineno\">  230</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00231\"></a><span class=\"lineno\">  231</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a70e4a22a9339a34c03bffdda7b2b04ba\">qint32</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#acb7d6e1ca3b7c8ccced333f99fd08331\">transitionTime</a>() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00232\"></a><span class=\"lineno\">  232</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a32feee956cd0c508317c7c03f3f1fa5b\">setTransitionTime</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a70e4a22a9339a34c03bffdda7b2b04ba\">qint32</a>) = 0;</div>\n\
<div class=\"line\"><a name=\"l00233\"></a><span class=\"lineno\">  233</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00234\"></a><span class=\"lineno\">  234</span>&#160;}</div>\n\
<div class=\"line\"><a name=\"l00235\"></a><span class=\"lineno\">  235</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00236\"></a><span class=\"lineno\">  236</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qwebkitplatformplugin_8h.html#a035669e7c0951949e1eb6b6505a5800f\">Q_DECLARE_INTERFACE</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html\">Phonon::MediaObjectInterface</a>, <span class=\"stringliteral\">&quot;MediaObjectInterface3.phonon.kde.org&quot;</span>)</div>\n\
<div class=\"line\"><a name=\"l00237\"></a><span class=\"lineno\">  237</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00238\"></a><span class=\"lineno\">  238</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00239\"></a><span class=\"lineno\">  239</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00240\"></a><span class=\"lineno\">  240</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00241\"></a><span class=\"lineno\">  241</span>&#160;<span class=\"preprocessor\">#endif // PHONON_MEDIAOBJECTINTERFACE_H</span></div>\n\
<div class=\"line\"><a name=\"l00242\"></a><span class=\"lineno\">  242</span>&#160;<span class=\"comment\">// vim: sw=4 ts=4 tw=80</span></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_accf6c2c7262e3b9367b32c8d9f198d9e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#accf6c2c7262e3b9367b32c8d9f198d9e\">Phonon::MediaObjectInterface::state</a></div><div class=\"ttdeci\">virtual Phonon::State state() const  =0</div><div class=\"ttdoc\">Get the current state. </div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_afdd0f0e67e302eefcb4f6b23732e7ea3\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#afdd0f0e67e302eefcb4f6b23732e7ea3\">source</a></div><div class=\"ttdeci\">GLsizei GLsizei GLchar * source</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01721\">GLee.h:1721</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_af0211888b9fea89f8a616cd6566c521e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_END_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00128\">qglobal.h:128</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_a70e4a22a9339a34c03bffdda7b2b04ba\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#a70e4a22a9339a34c03bffdda7b2b04ba\">qint32</a></div><div class=\"ttdeci\">int qint32</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00937\">qglobal.h:937</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_ab810aae609772374b85cb92ae76cce86\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#ab810aae609772374b85cb92ae76cce86\">Phonon::MediaObjectInterface::isSeekable</a></div><div class=\"ttdeci\">virtual bool isSeekable() const  =0</div><div class=\"ttdoc\">If the current media may be seeked returns true. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html\">Phonon::MediaObjectInterface</a></div><div class=\"ttdoc\">Backend interface for media sources. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/mediaobjectinterface_8h_source.html#l00067\">mediaobjectinterface.h:67</a></div></div>\n\
<div class=\"ttc\" id=\"mediaobject_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/mediaobject_8h.html\">mediaobject.h</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_a22466069bc24124bf4d749ca253f5e2b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div><div class=\"ttdeci\">#define QT_BEGIN_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00141\">qglobal.h:141</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_html_a5d74787dedbc4e11c1ab15bf487e61f8\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon.html#a5d74787dedbc4e11c1ab15bf487e61f8\">Phonon::State</a></div><div class=\"ttdeci\">State</div><div class=\"ttdoc\">The state the media producing object is in at the moment. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/phononnamespace_8h_source.html#l00142\">phononnamespace.h:142</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_aad853a91a00305bc9e7b81490bb0a294\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#aad853a91a00305bc9e7b81490bb0a294\">Phonon::MediaObjectInterface::currentTime</a></div><div class=\"ttdeci\">virtual qint64 currentTime() const  =0</div><div class=\"ttdoc\">Get the current time (in milliseconds) of the file currently being played. </div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_aacec69bbe5cd009ccdcaf50f9a0289aa\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a></div><div class=\"ttdeci\">long long qint64</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00947\">qglobal.h:947</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_a0c0d6f78472f2654d2c6e7b748aad0d4\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a0c0d6f78472f2654d2c6e7b748aad0d4\">Phonon::MediaObjectInterface::errorString</a></div><div class=\"ttdeci\">virtual QString errorString() const  =0</div><div class=\"ttdoc\">A translated string describing the error. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_aa59f9d1a3c65e9f73313224509c20804\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#aa59f9d1a3c65e9f73313224509c20804\">Phonon::MediaObjectInterface::prefinishMark</a></div><div class=\"ttdeci\">virtual qint32 prefinishMark() const  =0</div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_ace522b56e4e0b0ccc17bf19f65933dbc\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#ace522b56e4e0b0ccc17bf19f65933dbc\">Phonon::MediaObjectInterface::setNextSource</a></div><div class=\"ttdeci\">virtual void setNextSource(const MediaSource &amp;source)=0</div><div class=\"ttdoc\">Sets the next source to be used for transitions. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_source_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_source.html\">Phonon::MediaSource</a></div><div class=\"ttdoc\">Note that all constructors of this class are implicit, so that you can simply write. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/mediasource_8h_source.html#l00061\">mediasource.h:61</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_a0efff8623a2fb79dad94a96dcf16d966\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a0efff8623a2fb79dad94a96dcf16d966\">Phonon::MediaObjectInterface::stop</a></div><div class=\"ttdeci\">virtual void stop()=0</div><div class=\"ttdoc\">Requests the playback to be stopped. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_ad878720bf0f1e6ae4909cbde6e2e7966\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#ad878720bf0f1e6ae4909cbde6e2e7966\">Phonon::MediaObjectInterface::setSource</a></div><div class=\"ttdeci\">virtual void setSource(const MediaSource &amp;)=0</div><div class=\"ttdoc\">Sets the current source. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_aa90895e1a6b45c8180b7ade67879ffda\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#aa90895e1a6b45c8180b7ade67879ffda\">Phonon::MediaObjectInterface::hasVideo</a></div><div class=\"ttdeci\">virtual bool hasVideo() const  =0</div><div class=\"ttdoc\">Check whether the media data includes a video stream. </div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ae7344b820974b9f9f7cfedd5808bd3a0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_BEGIN_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00127\">qglobal.h:127</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_a266a63914c37f47af9c48ad9afe5bd14\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a266a63914c37f47af9c48ad9afe5bd14\">Phonon::MediaObjectInterface::play</a></div><div class=\"ttdeci\">virtual void play()=0</div><div class=\"ttdoc\">Requests the playback to start. </div></div>\n\
<div class=\"ttc\" id=\"qwebkitplatformplugin_8h_html_a035669e7c0951949e1eb6b6505a5800f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qwebkitplatformplugin_8h.html#a035669e7c0951949e1eb6b6505a5800f\">Q_DECLARE_INTERFACE</a></div><div class=\"ttdeci\">QT_BEGIN_NAMESPACE Q_DECLARE_INTERFACE(QWebKitPlatformPlugin,&quot;com.nokia.Qt.WebKit.PlatformPlugin/1.7&quot;)</div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_a591d332a9a687989bfdf5146d722f065\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a591d332a9a687989bfdf5146d722f065\">Phonon::MediaObjectInterface::tickInterval</a></div><div class=\"ttdeci\">virtual qint32 tickInterval() const  =0</div><div class=\"ttdoc\">Return the time interval in milliseconds between two ticks. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_a8a62ecd3241e903b986e3736ec009434\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a8a62ecd3241e903b986e3736ec009434\">Phonon::MediaObjectInterface::setPrefinishMark</a></div><div class=\"ttdeci\">virtual void setPrefinishMark(qint32)=0</div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_html_ab0df38968e4f03a3f1f6d6df0f31f45a\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon.html#ab0df38968e4f03a3f1f6d6df0f31f45a\">Phonon::ErrorType</a></div><div class=\"ttdeci\">ErrorType</div><div class=\"ttdoc\">Tells your program how to recover from an error. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/phononnamespace_8h_source.html#l00233\">phononnamespace.h:233</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_a99685f78b7971768c3a9abe0da32d6ca\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a99685f78b7971768c3a9abe0da32d6ca\">Phonon::MediaObjectInterface::errorType</a></div><div class=\"ttdeci\">virtual Phonon::ErrorType errorType() const  =0</div><div class=\"ttdoc\">Tells your program what to do about the error. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_a57833c75d7eeabff06fba40a6b094e7d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a57833c75d7eeabff06fba40a6b094e7d\">Phonon::MediaObjectInterface::~MediaObjectInterface</a></div><div class=\"ttdeci\">virtual ~MediaObjectInterface()</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/mediaobjectinterface_8h_source.html#l00070\">mediaobjectinterface.h:70</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></div><div class=\"ttdoc\">The KDE Multimedia classes. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/abstractaudiooutput_8h_source.html#l00033\">abstractaudiooutput.h:33</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_a146b9e6f9c2d9d5b18e7221a38dbf103\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a146b9e6f9c2d9d5b18e7221a38dbf103\">Phonon::MediaObjectInterface::pause</a></div><div class=\"ttdeci\">virtual void pause()=0</div><div class=\"ttdoc\">Requests the playback to pause. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_a41332a798e5e75d8d8719b3e3e5b704d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a41332a798e5e75d8d8719b3e3e5b704d\">Phonon::MediaObjectInterface::totalTime</a></div><div class=\"ttdeci\">virtual qint64 totalTime() const  =0</div><div class=\"ttdoc\">Returns the total time of the media in milliseconds. </div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00083\">qstring.h:83</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_acb7d6e1ca3b7c8ccced333f99fd08331\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#acb7d6e1ca3b7c8ccced333f99fd08331\">Phonon::MediaObjectInterface::transitionTime</a></div><div class=\"ttdeci\">virtual qint32 transitionTime() const  =0</div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_adf77032df0d7baec0226a33b3a723d32\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#adf77032df0d7baec0226a33b3a723d32\">Phonon::MediaObjectInterface::seek</a></div><div class=\"ttdeci\">virtual void seek(qint64 milliseconds)=0</div><div class=\"ttdoc\">Requests the playback to be seeked to the given time. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_a9872a861c35acdaa1c4169ee7272a09a\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a9872a861c35acdaa1c4169ee7272a09a\">Phonon::MediaObjectInterface::setTickInterval</a></div><div class=\"ttdeci\">virtual void setTickInterval(qint32 interval)=0</div><div class=\"ttdoc\">Change the interval the tick signal is emitted. </div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ac10725c642e865540e4faaf733ff95ff\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div><div class=\"ttdeci\">#define QT_END_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00142\">qglobal.h:142</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_a32feee956cd0c508317c7c03f3f1fa5b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a32feee956cd0c508317c7c03f3f1fa5b\">Phonon::MediaObjectInterface::setTransitionTime</a></div><div class=\"ttdeci\">virtual void setTransitionTime(qint32)=0</div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_a3ed3902e4f28f43b6b357ba589d9cfbb\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#a3ed3902e4f28f43b6b357ba589d9cfbb\">Phonon::MediaObjectInterface::remainingTime</a></div><div class=\"ttdeci\">virtual qint64 remainingTime() const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/mediaobjectinterface_8h_source.html#l00227\">mediaobjectinterface.h:227</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_media_object_interface_html_ab127c1c16667c8ab8abf5f48d88b8f3b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_media_object_interface.html#ab127c1c16667c8ab8abf5f48d88b8f3b\">Phonon::MediaObjectInterface::source</a></div><div class=\"ttdeci\">virtual MediaSource source() const  =0</div><div class=\"ttdoc\">Returns the current source. </div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";