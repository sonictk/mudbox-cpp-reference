var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtCore/qlocale_blackberry.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qlocale__blackberry_8h_source.html\', tocPrefix);\n\
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
            <h1>QtCore/qlocale_blackberry.h Source File</h1>\n\
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
<div class=\"title\">qlocale_blackberry.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/qlocale__blackberry_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">/****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"comment\">** Copyright (C) 2014 Digia Plc and/or its subsidiary(-ies).</span></div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">** Contact: http://www.qt-project.org/legal</span></div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">** This file is part of the QtCore module of the Qt Toolkit.</span></div>\n\
<div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">** $QT_BEGIN_LICENSE:LGPL$</span></div>\n\
<div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">** Commercial License Usage</span></div>\n\
<div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">** Licensees holding valid commercial Qt licenses may use this file in</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\">** accordance with the commercial license agreement provided with the</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"comment\">** Software or, alternatively, in accordance with the terms contained in</span></div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"comment\">** a written agreement between you and Digia.  For licensing terms and</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"comment\">** conditions see http://qt.digia.com/licensing.  For further information</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"comment\">** use the contact form at http://qt.digia.com/contact-us.</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"comment\">** GNU Lesser General Public License Usage</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"comment\">** Alternatively, this file may be used under the terms of the GNU Lesser</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"comment\">** General Public License version 2.1 as published by the Free Software</span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"comment\">** Foundation and appearing in the file LICENSE.LGPL included in the</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"comment\">** packaging of this file.  Please review the following information to</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"comment\">** ensure the GNU Lesser General Public License version 2.1 requirements</span></div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"comment\">** will be met: http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html.</span></div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"comment\">** In addition, as a special exception, Digia gives you certain additional</span></div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"comment\">** rights.  These rights are described in the Digia Qt LGPL Exception</span></div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"comment\">** version 1.1, included in the file LGPL_EXCEPTION.txt in this package.</span></div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"comment\">** GNU General Public License Usage</span></div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;<span class=\"comment\">** Alternatively, this file may be used under the terms of the GNU</span></div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;<span class=\"comment\">** General Public License version 3.0 as published by the Free Software</span></div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;<span class=\"comment\">** Foundation and appearing in the file LICENSE.GPL included in the</span></div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;<span class=\"comment\">** packaging of this file.  Please review the following information to</span></div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;<span class=\"comment\">** ensure the GNU General Public License version 3.0 requirements will be</span></div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;<span class=\"comment\">** met: http://www.gnu.org/copyleft/gpl.html.</span></div>\n\
<div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;<span class=\"comment\">** $QT_END_LICENSE$</span></div>\n\
<div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;<span class=\"comment\">****************************************************************************/</span></div>\n\
<div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;<span class=\"preprocessor\">#ifndef QLOCALE_BLACKBERRY_H</span></div>\n\
<div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;<span class=\"preprocessor\">#define QLOCALE_BLACKBERRY_H</span></div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\">   45</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/qsocketnotifier_8h.html\">qsocketnotifier.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\">   46</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/qreadwritelock_8h.html\">qreadwritelock.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/qlocale_8h.html\">qlocale.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;QT_MODULE(Core)</div>\n\
<div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_SYSTEMLOCALE</span></div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html\">   57</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html\">QBBSystemLocaleData</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a></div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a28faeb36eee7fb0a64b8081fbab41bcd\">Q_OBJECT</a></div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#a1cf39c7aa5d88107831faaa65f5672bc\">QBBSystemLocaleData</a>();</div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#ad5ed7e6758e3f3ec249a69594844fc44\">~QBBSystemLocaleData</a>();</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;    uint <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#aa28880ab0a76f097113f0056dd0e35bd\">measurementSystem</a>();</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_variant.html\">QVariant</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#afa7e06e95d03410c145362fe1f2443b9\">timeFormat</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_locale.html#a8dcd21376da83902acea50d9deeb5990\">QLocale::FormatType</a>);</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_variant.html\">QVariant</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#af57f797c35dff8dc3ac1972b750b289b\">dateTimeFormat</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_locale.html#a8dcd21376da83902acea50d9deeb5990\">QLocale::FormatType</a>);</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_locale.html\">QLocale</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#aa9b6501ad274e594a6413bf60457334a\">languageLocale</a>();</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_locale.html\">QLocale</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#af7d5e64601495720817cdde9ee14cc75\">regionLocale</a>();</div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#ac50b62eb19d05a9bff4834597e262634\">   70</a></span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_read_write_lock.html\">QReadWriteLock</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#ac50b62eb19d05a9bff4834597e262634\">lock</a>;</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;<span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a8e64beb783e45c1320091e26f11a72c6\">Q_SLOTS</a>:</div>\n\
<div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;    <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#aeaa9734d1b7269c59f8cce4e06ce4f98\">installSocketNotifiers</a>();</div>\n\
<div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;    <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#a73d4be202ae1b4c1ef1216f63903873d\">readLangageLocale</a>();</div>\n\
<div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;    <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#a872268e150858da99bd104169acb0cfa\">readRegionLocale</a>();</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;    <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#acff4f237af4de2413ebd2a087ac2a049\">readMeasurementSystem</a>();</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;    <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#a6628914b29efec6584bcfe8eb081f391\">readHourFormat</a>();</div>\n\
<div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00079\"></a><span class=\"lineno\">   79</span>&#160;<span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> readPpsValue(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *ppsObject, <span class=\"keywordtype\">int</span> ppsFd);</div>\n\
<div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> getCorrectFormat(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;baseFormat, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_locale.html#a8dcd21376da83902acea50d9deeb5990\">QLocale::FormatType</a> typeFormat);</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> lc_langage;</div>\n\
<div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\">   84</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> lc_region;</div>\n\
<div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\">   85</span>&#160;    uint m_measurementSystem;</div>\n\
<div class=\"line\"><a name=\"l00086\"></a><span class=\"lineno\">   86</span>&#160;    <span class=\"keywordtype\">bool</span> is24HourFormat;</div>\n\
<div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_socket_notifier.html\">QSocketNotifier</a> *languageNotifier;</div>\n\
<div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_socket_notifier.html\">QSocketNotifier</a> *regionNotifier;</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_socket_notifier.html\">QSocketNotifier</a> *measurementNotifier;</div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_socket_notifier.html\">QSocketNotifier</a> *hourNotifier;</div>\n\
<div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\">   93</span>&#160;    <span class=\"keywordtype\">int</span> languageFd;</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;    <span class=\"keywordtype\">int</span> regionFd;</div>\n\
<div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;    <span class=\"keywordtype\">int</span> measurementFd;</div>\n\
<div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;    <span class=\"keywordtype\">int</span> hourFd;</div>\n\
<div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\">   97</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00098\"></a><span class=\"lineno\">   98</span>&#160;<span class=\"preprocessor\">#endif // QT_NO_SYSTEMLOCALE</span></div>\n\
<div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00100\"></a><span class=\"lineno\">  100</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00101\"></a><span class=\"lineno\">  101</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00102\"></a><span class=\"lineno\">  102</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00103\"></a><span class=\"lineno\">  103</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00104\"></a><span class=\"lineno\">  104</span>&#160;<span class=\"preprocessor\">#endif // QLOCALE_BLACKBERRY_H</span></div>\n\
<div class=\"line\"><a name=\"l00105\"></a><span class=\"lineno\">  105</span>&#160;</div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_af0211888b9fea89f8a616cd6566c521e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_END_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00128\">qglobal.h:128</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_a22466069bc24124bf4d749ca253f5e2b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div><div class=\"ttdeci\">#define QT_BEGIN_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00141\">qglobal.h:141</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_socket_notifier_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_socket_notifier.html\">QSocketNotifier</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qsocketnotifier_8h_source.html#l00053\">qsocketnotifier.h:53</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_read_write_lock_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_read_write_lock.html\">QReadWriteLock</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qreadwritelock_8h_source.html#l00058\">qreadwritelock.h:58</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_aa9b6501ad274e594a6413bf60457334a\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#aa9b6501ad274e594a6413bf60457334a\">QBBSystemLocaleData::languageLocale</a></div><div class=\"ttdeci\">QLocale languageLocale()</div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_ac50b62eb19d05a9bff4834597e262634\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#ac50b62eb19d05a9bff4834597e262634\">QBBSystemLocaleData::lock</a></div><div class=\"ttdeci\">QReadWriteLock lock</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qlocale__blackberry_8h_source.html#l00070\">qlocale_blackberry.h:70</a></div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_a8e64beb783e45c1320091e26f11a72c6\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a8e64beb783e45c1320091e26f11a72c6\">Q_SLOTS</a></div><div class=\"ttdeci\">#define Q_SLOTS</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00071\">qobjectdefs.h:71</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_variant_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_variant.html\">QVariant</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qvariant_8h_source.html#l00092\">qvariant.h:92</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html\">QBBSystemLocaleData</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qlocale__blackberry_8h_source.html#l00057\">qlocale_blackberry.h:57</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_a73d4be202ae1b4c1ef1216f63903873d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#a73d4be202ae1b4c1ef1216f63903873d\">QBBSystemLocaleData::readLangageLocale</a></div><div class=\"ttdeci\">void readLangageLocale()</div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_ad5ed7e6758e3f3ec249a69594844fc44\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#ad5ed7e6758e3f3ec249a69594844fc44\">QBBSystemLocaleData::~QBBSystemLocaleData</a></div><div class=\"ttdeci\">virtual ~QBBSystemLocaleData()</div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ae7344b820974b9f9f7cfedd5808bd3a0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_BEGIN_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00127\">qglobal.h:127</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_a6628914b29efec6584bcfe8eb081f391\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#a6628914b29efec6584bcfe8eb081f391\">QBBSystemLocaleData::readHourFormat</a></div><div class=\"ttdeci\">void readHourFormat()</div></div>\n\
<div class=\"ttc\" id=\"qreadwritelock_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qreadwritelock_8h.html\">qreadwritelock.h</a></div></div>\n\
<div class=\"ttc\" id=\"qlocale_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qlocale_8h.html\">qlocale.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_acff4f237af4de2413ebd2a087ac2a049\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#acff4f237af4de2413ebd2a087ac2a049\">QBBSystemLocaleData::readMeasurementSystem</a></div><div class=\"ttdeci\">void readMeasurementSystem()</div></div>\n\
<div class=\"ttc\" id=\"class_q_locale_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_locale.html\">QLocale</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qlocale_8h_source.html#l00133\">qlocale.h:133</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_a872268e150858da99bd104169acb0cfa\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#a872268e150858da99bd104169acb0cfa\">QBBSystemLocaleData::readRegionLocale</a></div><div class=\"ttdeci\">void readRegionLocale()</div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_a28faeb36eee7fb0a64b8081fbab41bcd\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a28faeb36eee7fb0a64b8081fbab41bcd\">Q_OBJECT</a></div><div class=\"ttdeci\">#define Q_OBJECT</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00157\">qobjectdefs.h:157</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_afa7e06e95d03410c145362fe1f2443b9\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#afa7e06e95d03410c145362fe1f2443b9\">QBBSystemLocaleData::timeFormat</a></div><div class=\"ttdeci\">QVariant timeFormat(QLocale::FormatType)</div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_af57f797c35dff8dc3ac1972b750b289b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#af57f797c35dff8dc3ac1972b750b289b\">QBBSystemLocaleData::dateTimeFormat</a></div><div class=\"ttdeci\">QVariant dateTimeFormat(QLocale::FormatType)</div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_aa28880ab0a76f097113f0056dd0e35bd\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#aa28880ab0a76f097113f0056dd0e35bd\">QBBSystemLocaleData::measurementSystem</a></div><div class=\"ttdeci\">uint measurementSystem()</div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_aeaa9734d1b7269c59f8cce4e06ce4f98\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#aeaa9734d1b7269c59f8cce4e06ce4f98\">QBBSystemLocaleData::installSocketNotifiers</a></div><div class=\"ttdeci\">void installSocketNotifiers()</div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_af7d5e64601495720817cdde9ee14cc75\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#af7d5e64601495720817cdde9ee14cc75\">QBBSystemLocaleData::regionLocale</a></div><div class=\"ttdeci\">QLocale regionLocale()</div></div>\n\
<div class=\"ttc\" id=\"class_q_b_b_system_locale_data_html_a1cf39c7aa5d88107831faaa65f5672bc\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_b_b_system_locale_data.html#a1cf39c7aa5d88107831faaa65f5672bc\">QBBSystemLocaleData::QBBSystemLocaleData</a></div><div class=\"ttdeci\">QBBSystemLocaleData()</div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00083\">qstring.h:83</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_object_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobject_8h_source.html#l00111\">qobject.h:111</a></div></div>\n\
<div class=\"ttc\" id=\"qsocketnotifier_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qsocketnotifier_8h.html\">qsocketnotifier.h</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ac10725c642e865540e4faaf733ff95ff\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div><div class=\"ttdeci\">#define QT_END_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00142\">qglobal.h:142</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_locale_html_a8dcd21376da83902acea50d9deeb5990\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_locale.html#a8dcd21376da83902acea50d9deeb5990\">QLocale::FormatType</a></div><div class=\"ttdeci\">FormatType</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qlocale_8h_source.html#l00659\">qlocale.h:659</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_byte_array_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qbytearray_8h_source.html#l00135\">qbytearray.h:135</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";