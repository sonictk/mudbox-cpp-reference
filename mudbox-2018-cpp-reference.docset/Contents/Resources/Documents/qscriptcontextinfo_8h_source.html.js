var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtScript/qscriptcontextinfo.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qscriptcontextinfo_8h_source.html\', tocPrefix);\n\
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
            <h1>QtScript/qscriptcontextinfo.h Source File</h1>\n\
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
<div class=\"title\">qscriptcontextinfo.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">/****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"comment\">** Copyright (C) 2014 Digia Plc and/or its subsidiary(-ies).</span></div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">** Contact: http://www.qt-project.org/legal</span></div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">** This file is part of the QtScript module of the Qt Toolkit.</span></div>\n\
<div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">** $QT_BEGIN_LICENSE:LGPL-ONLY$</span></div>\n\
<div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">** GNU Lesser General Public License Usage</span></div>\n\
<div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">** This file may be used under the terms of the GNU Lesser</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\">** General Public License version 2.1 as published by the Free Software</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"comment\">** Foundation and appearing in the file LICENSE.LGPL included in the</span></div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"comment\">** packaging of this file.  Please review the following information to</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"comment\">** ensure the GNU Lesser General Public License version 2.1 requirements</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"comment\">** will be met: http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html.</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"comment\">** If you have questions regarding the use of this file, please contact</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"comment\">** us via http://www.qt-project.org/.</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"comment\">** $QT_END_LICENSE$</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"comment\">****************************************************************************/</span></div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"preprocessor\">#ifndef QSCRIPTCONTEXTINFO_H</span></div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"preprocessor\">#define QSCRIPTCONTEXTINFO_H</span></div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/qobjectdefs_8h.html\">QtCore/qobjectdefs.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/qlist_8h.html\">QtCore/qlist.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/qstringlist_8h.html\">QtCore/qstringlist.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/qsharedpointer_8h.html\">QtCore/qsharedpointer.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;QT_MODULE(Script)</div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;class <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context.html\">QScriptContext</a>;</div>\n\
<div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_DATASTREAM</span></div>\n\
<div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a>;</div>\n\
<div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;<span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;<span class=\"keyword\">class </span>QScriptContextInfoPrivate;</div>\n\
<div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">   45</a></span>&#160;<span class=\"keyword\">class </span>Q_SCRIPT_EXPORT <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a></div>\n\
<div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\">   46</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_DATASTREAM</span></div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;    <span class=\"keyword\">friend</span> Q_SCRIPT_EXPORT <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h.html#a984a88f954f0173ebbc6fbf6c907ec65\">operator&lt;&lt;</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a> &amp;);</div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;    <span class=\"keyword\">friend</span> Q_SCRIPT_EXPORT <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h.html#aee4ec4c03b6ab10c76a96b38f078fa26\">operator&gt;&gt;</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a> &amp;);</div>\n\
<div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;<span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371\">   53</a></span>&#160;    <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371\">FunctionType</a> {</div>\n\
<div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371a42c336270f4d39f0e52d77132c9c41fc\">   54</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371a42c336270f4d39f0e52d77132c9c41fc\">ScriptFunction</a>,</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371a0e238352bb901e4b5ad6532b5a728c73\">   55</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371a0e238352bb901e4b5ad6532b5a728c73\">QtFunction</a>,</div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371ab09259f9e2a756fcfb07db98bfd458f4\">   56</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371ab09259f9e2a756fcfb07db98bfd458f4\">QtPropertyFunction</a>,</div>\n\
<div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371a73ba821733f6803016ccad79f7c249d9\">   57</a></span>&#160;        NativeFunction</div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;    };</div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a>(<span class=\"keyword\">const</span> QScriptContext *<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13d8da38dfb6a72a4896eaa6e3f0cba3\">context</a>);</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a> &amp;other);</div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a>();</div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;    ~<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a>();</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a> &amp;operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a> &amp;other);</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;    <span class=\"keywordtype\">bool</span> isNull() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a> scriptId() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> fileName() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;    <span class=\"keywordtype\">int</span> lineNumber() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;<span class=\"preprocessor\">#ifdef QT_DEPRECATED</span></div>\n\
<div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;    QT_DEPRECATED <span class=\"keywordtype\">int</span> columnNumber() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;<span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> functionName() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;    FunctionType functionType() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00079\"></a><span class=\"lineno\">   79</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> functionParameterNames() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;    <span class=\"keywordtype\">int</span> functionStartLineNumber() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;    <span class=\"keywordtype\">int</span> functionEndLineNumber() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\">   84</span>&#160;    <span class=\"keywordtype\">int</span> functionMetaIndex() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\">   85</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00086\"></a><span class=\"lineno\">   86</span>&#160;    <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a637f7084f9654006932237127d7be263\">operator==</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a> &amp;other) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;    <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./cpp_ref/qbytearray_8h.html#ae6561cb91aa056d85ac61b6cf59ef070\">operator!=</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a> &amp;other) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;<span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_explicitly_shared_data_pointer.html\">QExplicitlySharedDataPointer&lt;QScriptContextInfoPrivate&gt;</a> d_ptr;</div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;    Q_DECLARE_PRIVATE(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a>)</div>\n\
<div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\">   93</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h.html#ae7313bdd702bad7ff1b7533b961b680f\">   95</a></span>&#160;<span class=\"keyword\">typedef</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;QScriptContextInfo&gt;</a> <a class=\"code\" href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h.html#ae7313bdd702bad7ff1b7533b961b680f\">QScriptContextInfoList</a>;</div>\n\
<div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\">   97</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_DATASTREAM</span></div>\n\
<div class=\"line\"><a name=\"l00098\"></a><span class=\"lineno\">   98</span>&#160;Q_SCRIPT_EXPORT <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h.html#a984a88f954f0173ebbc6fbf6c907ec65\">operator&lt;&lt;</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a> &amp;);</div>\n\
<div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;Q_SCRIPT_EXPORT <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h.html#aee4ec4c03b6ab10c76a96b38f078fa26\">operator&gt;&gt;</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a> &amp;, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a> &amp;);</div>\n\
<div class=\"line\"><a name=\"l00100\"></a><span class=\"lineno\">  100</span>&#160;<span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00101\"></a><span class=\"lineno\">  101</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00102\"></a><span class=\"lineno\">  102</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00103\"></a><span class=\"lineno\">  103</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00104\"></a><span class=\"lineno\">  104</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00105\"></a><span class=\"lineno\">  105</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00106\"></a><span class=\"lineno\">  106</span>&#160;<span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"ttc\" id=\"qscriptcontextinfo_8h_html_ae7313bdd702bad7ff1b7533b961b680f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h.html#ae7313bdd702bad7ff1b7533b961b680f\">QScriptContextInfoList</a></div><div class=\"ttdeci\">QList&lt; QScriptContextInfo &gt; QScriptContextInfoList</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h_source.html#l00095\">qscriptcontextinfo.h:95</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_explicitly_shared_data_pointer_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_explicitly_shared_data_pointer.html\">QExplicitlySharedDataPointer&lt; QScriptContextInfoPrivate &gt;</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_af0211888b9fea89f8a616cd6566c521e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_END_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00128\">qglobal.h:128</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstringlist_8h_source.html#l00066\">qstringlist.h:66</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_a22466069bc24124bf4d749ca253f5e2b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div><div class=\"ttdeci\">#define QT_BEGIN_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00141\">qglobal.h:141</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_aacec69bbe5cd009ccdcaf50f9a0289aa\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a></div><div class=\"ttdeci\">long long qint64</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00947\">qglobal.h:947</a></div></div>\n\
<div class=\"ttc\" id=\"qscriptcontextinfo_8h_html_a984a88f954f0173ebbc6fbf6c907ec65\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h.html#a984a88f954f0173ebbc6fbf6c907ec65\">operator&lt;&lt;</a></div><div class=\"ttdeci\">Q_SCRIPT_EXPORT QDataStream &amp; operator&lt;&lt;(QDataStream &amp;, const QScriptContextInfo &amp;)</div></div>\n\
<div class=\"ttc\" id=\"class_q_script_context_info_html_a42a11575cc237e37732d560240e04371a0e238352bb901e4b5ad6532b5a728c73\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371a0e238352bb901e4b5ad6532b5a728c73\">QScriptContextInfo::QtFunction</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h_source.html#l00055\">qscriptcontextinfo.h:55</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_script_context_info_html_a42a11575cc237e37732d560240e04371\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371\">QScriptContextInfo::FunctionType</a></div><div class=\"ttdeci\">FunctionType</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h_source.html#l00053\">qscriptcontextinfo.h:53</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_data_stream_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_data_stream.html\">QDataStream</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qdatastream_8h_source.html#l00071\">qdatastream.h:71</a></div></div>\n\
<div class=\"ttc\" id=\"namespacemudbox_html_a637f7084f9654006932237127d7be263\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespacemudbox.html#a637f7084f9654006932237127d7be263\">mudbox::operator==</a></div><div class=\"ttdeci\">bool operator==(const Attribute &amp;cA, const AttributeInstance&lt; type &gt; &amp;cB)</div><div class=\"ttdoc\">This operator compares the two attributes and NOT their values. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/node_8h_source.html#l00577\">node.h:577</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ae7344b820974b9f9f7cfedd5808bd3a0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_BEGIN_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00127\">qglobal.h:127</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_script_context_info_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_script_context_info.html\">QScriptContextInfo</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h_source.html#l00045\">qscriptcontextinfo.h:45</a></div></div>\n\
<div class=\"ttc\" id=\"qbytearray_8h_html_ae6561cb91aa056d85ac61b6cf59ef070\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qbytearray_8h.html#ae6561cb91aa056d85ac61b6cf59ef070\">operator!=</a></div><div class=\"ttdeci\">bool operator!=(const QByteArray &amp;a1, const QByteArray &amp;a2)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qbytearray_8h_source.html#l00533\">qbytearray.h:533</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_script_context_info_html_a42a11575cc237e37732d560240e04371a42c336270f4d39f0e52d77132c9c41fc\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371a42c336270f4d39f0e52d77132c9c41fc\">QScriptContextInfo::ScriptFunction</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h_source.html#l00054\">qscriptcontextinfo.h:54</a></div></div>\n\
<div class=\"ttc\" id=\"qsharedpointer_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qsharedpointer_8h.html\">qsharedpointer.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_script_context_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_script_context.html\">QScriptContext</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qscriptcontext_8h_source.html#l00039\">qscriptcontext.h:39</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a13d8da38dfb6a72a4896eaa6e3f0cba3\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a13d8da38dfb6a72a4896eaa6e3f0cba3\">context</a></div><div class=\"ttdeci\">GLXContext context</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l10414\">GLee.h:10414</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00083\">qstring.h:83</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/backendcapabilities_8h_source.html#l00040\">backendcapabilities.h:40</a></div></div>\n\
<div class=\"ttc\" id=\"qscriptcontextinfo_8h_html_aee4ec4c03b6ab10c76a96b38f078fa26\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h.html#aee4ec4c03b6ab10c76a96b38f078fa26\">operator&gt;&gt;</a></div><div class=\"ttdeci\">Q_SCRIPT_EXPORT QDataStream &amp; operator&gt;&gt;(QDataStream &amp;, QScriptContextInfo &amp;)</div></div>\n\
<div class=\"ttc\" id=\"qlist_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qlist_8h.html\">qlist.h</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ac10725c642e865540e4faaf733ff95ff\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div><div class=\"ttdeci\">#define QT_END_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00142\">qglobal.h:142</a></div></div>\n\
<div class=\"ttc\" id=\"qstringlist_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qstringlist_8h.html\">qstringlist.h</a></div></div>\n\
<div class=\"ttc\" id=\"qobjectdefs_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qobjectdefs_8h.html\">qobjectdefs.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_script_context_info_html_a42a11575cc237e37732d560240e04371ab09259f9e2a756fcfb07db98bfd458f4\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_script_context_info.html#a42a11575cc237e37732d560240e04371ab09259f9e2a756fcfb07db98bfd458f4\">QScriptContextInfo::QtPropertyFunction</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qscriptcontextinfo_8h_source.html#l00056\">qscriptcontextinfo.h:56</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";