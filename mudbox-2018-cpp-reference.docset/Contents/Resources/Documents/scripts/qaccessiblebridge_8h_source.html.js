var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtGui/qaccessiblebridge.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qaccessiblebridge_8h_source.html\', tocPrefix);\n\
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
            <h1>QtGui/qaccessiblebridge.h Source File</h1>\n\
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
<div class=\"title\">qaccessiblebridge.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/qaccessiblebridge_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">/****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"comment\">** Copyright (C) 2014 Digia Plc and/or its subsidiary(-ies).</span></div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">** Contact: http://www.qt-project.org/legal</span></div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">** This file is part of the QtGui module of the Qt Toolkit.</span></div>\n\
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
<div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;<span class=\"preprocessor\">#ifndef QACCESSIBLEBRIDGE_H</span></div>\n\
<div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;<span class=\"preprocessor\">#define QACCESSIBLEBRIDGE_H</span></div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\">   45</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/qplugin_8h.html\">QtCore/qplugin.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\">   46</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/qfactoryinterface_8h.html\">QtCore/qfactoryinterface.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;QT_MODULE(Gui)</div>\n\
<div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_ACCESSIBILITY</span></div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_accessible_interface.html\">QAccessibleInterface</a>;</div>\n\
<div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\">   57</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_accessible_bridge.html\">   58</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_accessible_bridge.html\">QAccessibleBridge</a></div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_accessible_bridge.html#a206302136c6e47803c0411e314ceab85\">   61</a></span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_accessible_bridge.html#a206302136c6e47803c0411e314ceab85\">~QAccessibleBridge</a>() {}</div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_accessible_bridge.html#ac74027dc3699c19cc7be4b74317106f7\">setRootObject</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_accessible_interface.html\">QAccessibleInterface</a> *) = 0;</div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_accessible_bridge.html#a9488142f47e148683bbefc88cf46f3a6\">notifyAccessibilityUpdate</a>(<span class=\"keywordtype\">int</span>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_accessible_interface.html\">QAccessibleInterface</a>*, <span class=\"keywordtype\">int</span>) = 0;</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/struct_q_accessible_bridge_factory_interface.html\">   66</a></span>&#160;<span class=\"keyword\">struct </span>Q_GUI_EXPORT <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_accessible_bridge_factory_interface.html\">QAccessibleBridgeFactoryInterface</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_factory_interface.html\">QFactoryInterface</a></div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_accessible_bridge.html\">QAccessibleBridge</a> *create(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&amp; <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad977737dfc9a274a62741b9500c49a32\">name</a>) = 0;</div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/qaccessiblebridge_8h.html#ac8c9bcfb4cf71b24ff80c1730bda4ad4\">   71</a></span>&#160;<span class=\"preprocessor\">#define QAccessibleBridgeFactoryInterface_iid &quot;com.trolltech.Qt.QAccessibleBridgeFactoryInterface&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qwebkitplatformplugin_8h.html#a035669e7c0951949e1eb6b6505a5800f\">Q_DECLARE_INTERFACE</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_accessible_bridge_factory_interface.html\">QAccessibleBridgeFactoryInterface</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/qaccessiblebridge_8h.html#ac8c9bcfb4cf71b24ff80c1730bda4ad4\">QAccessibleBridgeFactoryInterface_iid</a>)</div>\n\
<div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_accessible_bridge_plugin.html\">   74</a></span>&#160;class Q_GUI_EXPORT <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_accessible_bridge_plugin.html\">QAccessibleBridgePlugin</a> : public <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a>, public <a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_accessible_bridge_factory_interface.html\">QAccessibleBridgeFactoryInterface</a></div>\n\
<div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a28faeb36eee7fb0a64b8081fbab41bcd\">Q_OBJECT</a></div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a760b2eb9f570e6f4e219628f7521488b\">Q_INTERFACES</a>(QAccessibleBridgeFactoryInterface:<a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_factory_interface.html\">QFactoryInterface</a>)</div>\n\
<div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00079\"></a><span class=\"lineno\">   79</span>&#160;    <span class=\"keyword\">explicit</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_accessible_bridge_plugin.html\">QAccessibleBridgePlugin</a>(QObject *parent = 0);</div>\n\
<div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;    ~<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_accessible_bridge_plugin.html\">QAccessibleBridgePlugin</a>();</div>\n\
<div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> keys() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_accessible_bridge.html\">QAccessibleBridge</a> *create(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;key) = 0;</div>\n\
<div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\">   84</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\">   85</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00086\"></a><span class=\"lineno\">   86</span>&#160;<span class=\"preprocessor\">#endif // QT_NO_ACCESSIBILITY</span></div>\n\
<div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;<span class=\"preprocessor\">#endif // QACCESSIBLEBRIDGE_H</span></div>\n\
<div class=\"ttc\" id=\"class_q_accessible_bridge_html_ac74027dc3699c19cc7be4b74317106f7\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_accessible_bridge.html#ac74027dc3699c19cc7be4b74317106f7\">QAccessibleBridge::setRootObject</a></div><div class=\"ttdeci\">virtual void setRootObject(QAccessibleInterface *)=0</div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_af0211888b9fea89f8a616cd6566c521e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_END_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00128\">qglobal.h:128</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_accessible_bridge_plugin_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_accessible_bridge_plugin.html\">QAccessibleBridgePlugin</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessiblebridge_8h_source.html#l00074\">qaccessiblebridge.h:74</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstringlist_8h_source.html#l00066\">qstringlist.h:66</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_a22466069bc24124bf4d749ca253f5e2b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div><div class=\"ttdeci\">#define QT_BEGIN_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00141\">qglobal.h:141</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_accessible_bridge_html_a206302136c6e47803c0411e314ceab85\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_accessible_bridge.html#a206302136c6e47803c0411e314ceab85\">QAccessibleBridge::~QAccessibleBridge</a></div><div class=\"ttdeci\">virtual ~QAccessibleBridge()</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessiblebridge_8h_source.html#l00061\">qaccessiblebridge.h:61</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ae7344b820974b9f9f7cfedd5808bd3a0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_BEGIN_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00127\">qglobal.h:127</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_factory_interface_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_factory_interface.html\">QFactoryInterface</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qfactoryinterface_8h_source.html#l00054\">qfactoryinterface.h:54</a></div></div>\n\
<div class=\"ttc\" id=\"qwebkitplatformplugin_8h_html_a035669e7c0951949e1eb6b6505a5800f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qwebkitplatformplugin_8h.html#a035669e7c0951949e1eb6b6505a5800f\">Q_DECLARE_INTERFACE</a></div><div class=\"ttdeci\">QT_BEGIN_NAMESPACE Q_DECLARE_INTERFACE(QWebKitPlatformPlugin,&quot;com.nokia.Qt.WebKit.PlatformPlugin/1.7&quot;)</div></div>\n\
<div class=\"ttc\" id=\"class_q_accessible_bridge_html_a9488142f47e148683bbefc88cf46f3a6\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_accessible_bridge.html#a9488142f47e148683bbefc88cf46f3a6\">QAccessibleBridge::notifyAccessibilityUpdate</a></div><div class=\"ttdeci\">virtual void notifyAccessibilityUpdate(int, QAccessibleInterface *, int)=0</div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_a28faeb36eee7fb0a64b8081fbab41bcd\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a28faeb36eee7fb0a64b8081fbab41bcd\">Q_OBJECT</a></div><div class=\"ttdeci\">#define Q_OBJECT</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00157\">qobjectdefs.h:157</a></div></div>\n\
<div class=\"ttc\" id=\"qplugin_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qplugin_8h.html\">qplugin.h</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_accessible_bridge_factory_interface_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_accessible_bridge_factory_interface.html\">QAccessibleBridgeFactoryInterface</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessiblebridge_8h_source.html#l00066\">qaccessiblebridge.h:66</a></div></div>\n\
<div class=\"ttc\" id=\"qfactoryinterface_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qfactoryinterface_8h.html\">qfactoryinterface.h</a></div></div>\n\
<div class=\"ttc\" id=\"qaccessiblebridge_8h_html_ac8c9bcfb4cf71b24ff80c1730bda4ad4\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qaccessiblebridge_8h.html#ac8c9bcfb4cf71b24ff80c1730bda4ad4\">QAccessibleBridgeFactoryInterface_iid</a></div><div class=\"ttdeci\">#define QAccessibleBridgeFactoryInterface_iid</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessiblebridge_8h_source.html#l00071\">qaccessiblebridge.h:71</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_ad977737dfc9a274a62741b9500c49a32\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#ad977737dfc9a274a62741b9500c49a32\">name</a></div><div class=\"ttdeci\">GLuint const GLchar * name</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01704\">GLee.h:1704</a></div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html_a760b2eb9f570e6f4e219628f7521488b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html#a760b2eb9f570e6f4e219628f7521488b\">Q_INTERFACES</a></div><div class=\"ttdeci\">#define Q_INTERFACES(x)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobjectdefs_8h_source.html#l00079\">qobjectdefs.h:79</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_accessible_bridge_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_accessible_bridge.html\">QAccessibleBridge</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessiblebridge_8h_source.html#l00058\">qaccessiblebridge.h:58</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00083\">qstring.h:83</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_object_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobject_8h_source.html#l00111\">qobject.h:111</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ac10725c642e865540e4faaf733ff95ff\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div><div class=\"ttdeci\">#define QT_END_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00142\">qglobal.h:142</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_accessible_interface_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_accessible_interface.html\">QAccessibleInterface</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qaccessible_8h_source.html#l00370\">qaccessible.h:370</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";