var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>phonon/platformplugin.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'platformplugin_8h_source.html\', tocPrefix);\n\
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
            <h1>phonon/platformplugin.h Source File</h1>\n\
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
<div class=\"title\">platformplugin.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/platformplugin_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">/*  This file is part of the KDE project</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">    Copyright (C) 2007-2008 Matthias Kretz &lt;kretz@kde.org&gt;</span></div>\n\
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
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"preprocessor\">#ifndef PHONON_PLATFORMPLUGIN_H</span></div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"preprocessor\">#define PHONON_PLATFORMPLUGIN_H</span></div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"preprocessor\">#include &lt;QtCore/QObject&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"preprocessor\">#include &lt;QtCore/QStringList&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"preprocessor\">#include &lt;QtCore/QPair&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html\">phonon_export.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/objectdescription_8h.html\">objectdescription.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_PHONON_PLATFORMPLUGIN</span></div>\n\
<div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_url.html\">QUrl</a>;</div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a>;</div>\n\
<div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_icon.html\">QIcon</a>;</div>\n\
<div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;<span class=\"keyword\">namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></div>\n\
<div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;<span class=\"keyword\">class </span>AbstractMediaStream;</div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html\">   45</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html\">PlatformPlugin</a></div>\n\
<div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\">   46</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#aad4ed53bcb9b86bcf30e1770231917ab\">   48</a></span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#aad4ed53bcb9b86bcf30e1770231917ab\">~PlatformPlugin</a>() {}</div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_abstract_media_stream.html\">AbstractMediaStream</a> *<a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#aa81f6987c5649b6a04c6ccbd5a5b1909\">createMediaStream</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_url.html\">QUrl</a> &amp;url, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *parent) = 0;</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_icon.html\">QIcon</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a4caf8834fb54c43d15270b95834254e0\">icon</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad977737dfc9a274a62741b9500c49a32\">name</a>) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a82c6b54d84cfd05d67b777adbb7366f2\">notification</a>(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *notificationName, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;text,</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;                <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> &amp;actions = <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a>(), <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *receiver = 0,</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;                <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *actionSlot = 0) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a02ab563f5240fe12e9fa9432ee4b9156\">applicationName</a>() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *<a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ac8d7d5bf9416669c2a97b0f9c1b68468\">createBackend</a>() = 0;</div>\n\
<div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *<a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ac8d7d5bf9416669c2a97b0f9c1b68468\">createBackend</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;library, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;version) = 0;</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ac17bdd40f9721c933e7fd82bc22aee3d\">isMimeTypeAvailable</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;mimeType) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;        <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ac084b98b6f8b98ee93ab32e9eb69b76e\">saveVolume</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;outputName, qreal volume) = 0;</div>\n\
<div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;        <span class=\"keyword\">virtual</span> qreal <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a7a9bd53c652e87eb0f7becd234b273bf\">loadVolume</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;outputName) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00100\"></a><span class=\"lineno\">  100</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00101\"></a><span class=\"lineno\">  101</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;int&gt;</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ab39b0c35ab402fcfb599acc6c59ae765\">objectDescriptionIndexes</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae99374a739994c33f43e6537de38e18e\">ObjectDescriptionType</a> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a>) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00102\"></a><span class=\"lineno\">  102</span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_hash.html\">QHash&lt;QByteArray, QVariant&gt;</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ab072e8827b93db2fc70fa2b0414bf6ca\">objectDescriptionProperties</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html#ae99374a739994c33f43e6537de38e18e\">ObjectDescriptionType</a> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a>, <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a6468fe3bfff24d7d939eb21863b88268\">index</a>) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00103\"></a><span class=\"lineno\">  103</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00107\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a4dc0decee4e82dfa5ce3c16e9707a1b0\">  107</a></span>&#160;        <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;QPair&lt;QByteArray, QString&gt;</a> &gt; <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a4dc0decee4e82dfa5ce3c16e9707a1b0\">deviceAccessListFor</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_object_description.html\">Phonon::AudioOutputDevice</a> &amp;)<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;QPair&lt;QByteArray, QString&gt;</a> &gt;(); }</div>\n\
<div class=\"line\"><a name=\"l00108\"></a><span class=\"lineno\">  108</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00109\"></a><span class=\"lineno\">  109</span>&#160;} <span class=\"comment\">// namespace Phonon</span></div>\n\
<div class=\"line\"><a name=\"l00110\"></a><span class=\"lineno\">  110</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00111\"></a><span class=\"lineno\">  111</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qwebkitplatformplugin_8h.html#a035669e7c0951949e1eb6b6505a5800f\">Q_DECLARE_INTERFACE</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html\">Phonon::PlatformPlugin</a>, <span class=\"stringliteral\">&quot;3PlatformPlugin.phonon.kde.org&quot;</span>)</div>\n\
<div class=\"line\"><a name=\"l00112\"></a><span class=\"lineno\">  112</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00113\"></a><span class=\"lineno\">  113</span>&#160;<span class=\"preprocessor\">#endif //QT_NO_PHONON_PLATFORMPLUGIN</span></div>\n\
<div class=\"line\"><a name=\"l00114\"></a><span class=\"lineno\">  114</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00115\"></a><span class=\"lineno\">  115</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00116\"></a><span class=\"lineno\">  116</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00117\"></a><span class=\"lineno\">  117</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;<span class=\"preprocessor\">#endif // PHONON_PLATFORMPLUGIN_H</span></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a63267399cd2a2ee217572c11d2e54f07\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a></div><div class=\"ttdeci\">GLuint GLuint GLsizei GLenum type</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00872\">GLee.h:872</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_abstract_media_stream_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_abstract_media_stream.html\">Phonon::AbstractMediaStream</a></div><div class=\"ttdoc\">Base class for custom media data streams. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/abstractmediastream_8h_source.html#l00103\">abstractmediastream.h:103</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html_ab39b0c35ab402fcfb599acc6c59ae765\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ab39b0c35ab402fcfb599acc6c59ae765\">Phonon::PlatformPlugin::objectDescriptionIndexes</a></div><div class=\"ttdeci\">virtual QList&lt; int &gt; objectDescriptionIndexes(ObjectDescriptionType type) const  =0</div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_af0211888b9fea89f8a616cd6566c521e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_END_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00128\">qglobal.h:128</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstringlist_8h_source.html#l00066\">qstringlist.h:66</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_a22466069bc24124bf4d749ca253f5e2b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div><div class=\"ttdeci\">#define QT_BEGIN_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00141\">qglobal.h:141</a></div></div>\n\
<div class=\"ttc\" id=\"phonon__export_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonon__export_8h.html\">phonon_export.h</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_html_ae99374a739994c33f43e6537de38e18e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon.html#ae99374a739994c33f43e6537de38e18e\">Phonon::ObjectDescriptionType</a></div><div class=\"ttdeci\">ObjectDescriptionType</div><div class=\"ttdoc\">Defines the type of information that is contained in a ObjectDescription object. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/objectdescription_8h_source.html#l00048\">objectdescription.h:48</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html\">Phonon::PlatformPlugin</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/platformplugin_8h_source.html#l00045\">platformplugin.h:45</a></div></div>\n\
<div class=\"ttc\" id=\"objectdescription_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/objectdescription_8h.html\">objectdescription.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html_a4caf8834fb54c43d15270b95834254e0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a4caf8834fb54c43d15270b95834254e0\">Phonon::PlatformPlugin::icon</a></div><div class=\"ttdeci\">virtual QIcon icon(const QString &amp;name) const  =0</div><div class=\"ttdoc\">Returns the icon for the given icon name. </div></div>\n\
<div class=\"ttc\" id=\"class_q_icon_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_icon.html\">QIcon</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qicon_8h_source.html#l00060\">qicon.h:60</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html_ac084b98b6f8b98ee93ab32e9eb69b76e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ac084b98b6f8b98ee93ab32e9eb69b76e\">Phonon::PlatformPlugin::saveVolume</a></div><div class=\"ttdeci\">virtual void saveVolume(const QString &amp;outputName, qreal volume)=0</div><div class=\"ttdoc\">Saves the volume for the given output. </div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ae7344b820974b9f9f7cfedd5808bd3a0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_BEGIN_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00127\">qglobal.h:127</a></div></div>\n\
<div class=\"ttc\" id=\"qwebkitplatformplugin_8h_html_a035669e7c0951949e1eb6b6505a5800f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qwebkitplatformplugin_8h.html#a035669e7c0951949e1eb6b6505a5800f\">Q_DECLARE_INTERFACE</a></div><div class=\"ttdeci\">QT_BEGIN_NAMESPACE Q_DECLARE_INTERFACE(QWebKitPlatformPlugin,&quot;com.nokia.Qt.WebKit.PlatformPlugin/1.7&quot;)</div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_object_description_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_object_description.html\">Phonon::ObjectDescription</a></div><div class=\"ttdoc\">Provides a tuple of enduser visible name and description. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/objectdescription_8h_source.html#l00180\">objectdescription.h:180</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html_a4dc0decee4e82dfa5ce3c16e9707a1b0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a4dc0decee4e82dfa5ce3c16e9707a1b0\">Phonon::PlatformPlugin::deviceAccessListFor</a></div><div class=\"ttdeci\">virtual QList&lt; QPair&lt; QByteArray, QString &gt; &gt; deviceAccessListFor(const Phonon::AudioOutputDevice &amp;) const </div><div class=\"ttdoc\">Returns a list of (driver, handle) pairs for the given AudioOutputDevice description. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/platformplugin_8h_source.html#l00107\">platformplugin.h:107</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html_aa81f6987c5649b6a04c6ccbd5a5b1909\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#aa81f6987c5649b6a04c6ccbd5a5b1909\">Phonon::PlatformPlugin::createMediaStream</a></div><div class=\"ttdeci\">virtual AbstractMediaStream * createMediaStream(const QUrl &amp;url, QObject *parent)=0</div><div class=\"ttdoc\">Creates a AbstractMediaStream object that provides the data for the given url. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html_ac8d7d5bf9416669c2a97b0f9c1b68468\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ac8d7d5bf9416669c2a97b0f9c1b68468\">Phonon::PlatformPlugin::createBackend</a></div><div class=\"ttdeci\">virtual QObject * createBackend()=0</div><div class=\"ttdoc\">Creates a backend object. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html_ab072e8827b93db2fc70fa2b0414bf6ca\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ab072e8827b93db2fc70fa2b0414bf6ca\">Phonon::PlatformPlugin::objectDescriptionProperties</a></div><div class=\"ttdeci\">virtual QHash&lt; QByteArray, QVariant &gt; objectDescriptionProperties(ObjectDescriptionType type, int index) const  =0</div></div>\n\
<div class=\"ttc\" id=\"class_q_url_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_url.html\">QUrl</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qurl_8h_source.html#l00061\">qurl.h:61</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_ad977737dfc9a274a62741b9500c49a32\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad977737dfc9a274a62741b9500c49a32\">name</a></div><div class=\"ttdeci\">GLuint const GLchar * name</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01704\">GLee.h:1704</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html_aad4ed53bcb9b86bcf30e1770231917ab\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#aad4ed53bcb9b86bcf30e1770231917ab\">Phonon::PlatformPlugin::~PlatformPlugin</a></div><div class=\"ttdeci\">virtual ~PlatformPlugin()</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/platformplugin_8h_source.html#l00048\">platformplugin.h:48</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></div><div class=\"ttdoc\">The KDE Multimedia classes. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/abstractaudiooutput_8h_source.html#l00033\">abstractaudiooutput.h:33</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html_a7a9bd53c652e87eb0f7becd234b273bf\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a7a9bd53c652e87eb0f7becd234b273bf\">Phonon::PlatformPlugin::loadVolume</a></div><div class=\"ttdeci\">virtual qreal loadVolume(const QString &amp;outputName) const  =0</div><div class=\"ttdoc\">Loads the volume for the given output. </div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00083\">qstring.h:83</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html_a02ab563f5240fe12e9fa9432ee4b9156\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a02ab563f5240fe12e9fa9432ee4b9156\">Phonon::PlatformPlugin::applicationName</a></div><div class=\"ttdeci\">virtual QString applicationName() const  =0</div><div class=\"ttdoc\">Returns the name of the application. </div></div>\n\
<div class=\"ttc\" id=\"class_q_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt; int &gt;</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_object_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobject_8h_source.html#l00111\">qobject.h:111</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ac10725c642e865540e4faaf733ff95ff\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div><div class=\"ttdeci\">#define QT_END_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00142\">qglobal.h:142</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html_a82c6b54d84cfd05d67b777adbb7366f2\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#a82c6b54d84cfd05d67b777adbb7366f2\">Phonon::PlatformPlugin::notification</a></div><div class=\"ttdeci\">virtual void notification(const char *notificationName, const QString &amp;text, const QStringList &amp;actions=QStringList(), QObject *receiver=0, const char *actionSlot=0) const  =0</div><div class=\"ttdoc\">Shows a notification popup. </div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_platform_plugin_html_ac17bdd40f9721c933e7fd82bc22aee3d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_platform_plugin.html#ac17bdd40f9721c933e7fd82bc22aee3d\">Phonon::PlatformPlugin::isMimeTypeAvailable</a></div><div class=\"ttdeci\">virtual bool isMimeTypeAvailable(const QString &amp;mimeType) const  =0</div><div class=\"ttdoc\">Tries to check whether the default backend supports a given MIME type without loading the actual back...</div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a6468fe3bfff24d7d939eb21863b88268\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a6468fe3bfff24d7d939eb21863b88268\">index</a></div><div class=\"ttdeci\">GLuint index</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01704\">GLee.h:1704</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_hash_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_hash.html\">QHash</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qcontainerfwd_8h_source.html#l00054\">qcontainerfwd.h:54</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";