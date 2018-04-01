var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>phonon/globalconfig.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'globalconfig_8h_source.html\', tocPrefix);\n\
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
            <h1>phonon/globalconfig.h Source File</h1>\n\
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
<div class=\"title\">globalconfig.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/globalconfig_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">/*  This file is part of the KDE project</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">Copyright (C) 2006-2008 Matthias Kretz &lt;kretz@kde.org&gt;</span></div>\n\
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
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"preprocessor\">#ifndef PHONON_GLOBALCONFIG_H</span></div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"preprocessor\">#define PHONON_GLOBALCONFIG_H</span></div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html\">phonon_export.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/phononnamespace_8h.html\">phononnamespace.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/phonondefs_8h.html\">phonondefs.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;<span class=\"keyword\">namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;    <span class=\"keyword\">class </span>GlobalConfigPrivate;</div>\n\
<div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html\">   37</a></span>&#160;    <span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html\">GlobalConfig</a></div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/phonondefs_8h.html#a3d261f04ae9240e1d38c477d3397f328\">K_DECLARE_PRIVATE</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html\">GlobalConfig</a>)</div>\n\
<div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html\">GlobalConfig</a>();</div>\n\
<div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;        <span class=\"keyword\">virtual</span> ~<a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html\">GlobalConfig</a>();</div>\n\
<div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html#a76636a14b332773456ae70d898c088b2\">   44</a></span>&#160;        <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html#a76636a14b332773456ae70d898c088b2\">DevicesToHideFlag</a> {</div>\n\
<div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html#a76636a14b332773456ae70d898c088b2ac07cfd5140c0b5484cd5e09c786647f8\">   45</a></span>&#160;            ShowUnavailableDevices = 0,</div>\n\
<div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html#a76636a14b332773456ae70d898c088b2aa6b425ce1f3c7a7763be4b51c1de628f\">   46</a></span>&#160;            ShowAdvancedDevices = 0,</div>\n\
<div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html#a76636a14b332773456ae70d898c088b2ad65d44be83767ceffac5df2e158fd079\">   47</a></span>&#160;            HideAdvancedDevices = 1,</div>\n\
<div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html#a76636a14b332773456ae70d898c088b2a11042e0646d2f10f4bf2c2cc68e15fca\">   48</a></span>&#160;            AdvancedDevicesFromSettings = 2,</div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html#a76636a14b332773456ae70d898c088b2a73112c7867324b964f8fd05110965999\">   49</a></span>&#160;            HideUnavailableDevices = 4</div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;        };</div>\n\
<div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;        <span class=\"keywordtype\">bool</span> hideAdvancedDevices() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;        <span class=\"keywordtype\">void</span> setHideAdvancedDevices(<span class=\"keywordtype\">bool</span> hide = <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;        <span class=\"keywordtype\">void</span> setAudioOutputDeviceListFor(<a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccb\">Phonon::Category</a> category, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;int&gt;</a> order);</div>\n\
<div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;int&gt;</a> audioOutputDeviceListFor(<a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccb\">Phonon::Category</a> category, <span class=\"keywordtype\">int</span> <span class=\"keyword\">override</span> = AdvancedDevicesFromSettings) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;        <span class=\"keywordtype\">int</span> audioOutputDeviceFor(<a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccb\">Phonon::Category</a> category, <span class=\"keywordtype\">int</span> <span class=\"keyword\">override</span> = AdvancedDevicesFromSettings) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\">   57</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_PHONON_AUDIOCAPTURE</span></div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;        <span class=\"keywordtype\">void</span> setAudioCaptureDeviceListFor(<a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccb\">Phonon::Category</a> category, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;int&gt;</a> order);</div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;int&gt;</a> audioCaptureDeviceListFor(<a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccb\">Phonon::Category</a> category, <span class=\"keywordtype\">int</span> <span class=\"keyword\">override</span> = AdvancedDevicesFromSettings) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;        <span class=\"keywordtype\">int</span> audioCaptureDeviceFor(<a class=\"code\" href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccb\">Phonon::Category</a> category, <span class=\"keywordtype\">int</span> <span class=\"keyword\">override</span> = AdvancedDevicesFromSettings) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;<span class=\"preprocessor\">#endif //QT_NO_PHONON_AUDIOCAPTURE</span></div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;    <span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html#a33d614d690fe813a7b1ca9b2b1537065\">   64</a></span>&#160;        GlobalConfigPrivate *<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html#a33d614d690fe813a7b1ca9b2b1537065\">k_ptr</a>;</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;    };</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;} <span class=\"comment\">// namespace Phonon</span></div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;<span class=\"preprocessor\">#endif // PHONON_GLOBALCONFIG_H</span></div>\n\
<div class=\"ttc\" id=\"phonondefs_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonondefs_8h.html\">phonondefs.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_global_config_html_a33d614d690fe813a7b1ca9b2b1537065\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html#a33d614d690fe813a7b1ca9b2b1537065\">Phonon::GlobalConfig::k_ptr</a></div><div class=\"ttdeci\">GlobalConfigPrivate *const k_ptr</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/globalconfig_8h_source.html#l00064\">globalconfig.h:64</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_af0211888b9fea89f8a616cd6566c521e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_END_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00128\">qglobal.h:128</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_a22466069bc24124bf4d749ca253f5e2b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div><div class=\"ttdeci\">#define QT_BEGIN_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00141\">qglobal.h:141</a></div></div>\n\
<div class=\"ttc\" id=\"phonon__export_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonon__export_8h.html\">phonon_export.h</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ae7344b820974b9f9f7cfedd5808bd3a0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_BEGIN_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00127\">qglobal.h:127</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_html_a9ca8f05608edcbf85ab6c2c85a439ccb\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon.html#a9ca8f05608edcbf85ab6c2c85a439ccb\">Phonon::Category</a></div><div class=\"ttdeci\">Category</div><div class=\"ttdoc\">Set&#39;s the category your program should be listed in in the mixer. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/phononnamespace_8h_source.html#l00188\">phononnamespace.h:188</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_global_config_html_a76636a14b332773456ae70d898c088b2\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html#a76636a14b332773456ae70d898c088b2\">Phonon::GlobalConfig::DevicesToHideFlag</a></div><div class=\"ttdeci\">DevicesToHideFlag</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/globalconfig_8h_source.html#l00044\">globalconfig.h:44</a></div></div>\n\
<div class=\"ttc\" id=\"phononnamespace_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phononnamespace_8h.html\">phononnamespace.h</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_phonon_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_phonon.html\">Phonon</a></div><div class=\"ttdoc\">The KDE Multimedia classes. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/abstractaudiooutput_8h_source.html#l00033\">abstractaudiooutput.h:33</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt; int &gt;</a></div></div>\n\
<div class=\"ttc\" id=\"phonondefs_8h_html_a3d261f04ae9240e1d38c477d3397f328\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonondefs_8h.html#a3d261f04ae9240e1d38c477d3397f328\">K_DECLARE_PRIVATE</a></div><div class=\"ttdeci\">#define K_DECLARE_PRIVATE(Class)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/phonondefs_8h_source.html#l00046\">phonondefs.h:46</a></div></div>\n\
<div class=\"ttc\" id=\"phonon__export_8h_html_a7d358a82612f42a3a3389f13b3a1472d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/phonon__export_8h.html#a7d358a82612f42a3a3389f13b3a1472d\">PHONON_EXPORT</a></div><div class=\"ttdeci\">#define PHONON_EXPORT</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/phonon__export_8h_source.html#l00038\">phonon_export.h:38</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ac10725c642e865540e4faaf733ff95ff\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div><div class=\"ttdeci\">#define QT_END_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00142\">qglobal.h:142</a></div></div>\n\
<div class=\"ttc\" id=\"class_phonon_1_1_global_config_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_phonon_1_1_global_config.html\">Phonon::GlobalConfig</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/globalconfig_8h_source.html#l00037\">globalconfig.h:37</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";