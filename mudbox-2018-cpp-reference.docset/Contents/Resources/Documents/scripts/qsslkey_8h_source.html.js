var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtNetwork/qsslkey.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qsslkey_8h_source.html\', tocPrefix);\n\
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
            <h1>QtNetwork/qsslkey.h Source File</h1>\n\
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
<div class=\"title\">qsslkey.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/qsslkey_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">/****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"comment\">** Copyright (C) 2014 Digia Plc and/or its subsidiary(-ies).</span></div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">** Contact: http://www.qt-project.org/legal</span></div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">**</span></div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">** This file is part of the QtNetwork module of the Qt Toolkit.</span></div>\n\
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
<div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;<span class=\"preprocessor\">#ifndef QSSLKEY_H</span></div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;<span class=\"preprocessor\">#define QSSLKEY_H</span></div>\n\
<div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\">   45</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\">   46</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/qnamespace_8h.html\">QtCore/qnamespace.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/qbytearray_8h.html\">QtCore/qbytearray.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/qsharedpointer_8h.html\">QtCore/qsharedpointer.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/qssl_8h.html\">QtNetwork/qssl.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;QT_MODULE(Network)</div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\">   57</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_OPENSSL</span></div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;<span class=\"keyword\">template</span> &lt;<span class=\"keyword\">typename</span> A, <span class=\"keyword\">typename</span> B&gt; <span class=\"keyword\">struct </span><a class=\"code\" href=\"#!/url=./cpp_ref/struct_q_pair.html\">QPair</a>;</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_i_o_device.html\">QIODevice</a>;</div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;<span class=\"keyword\">class </span>QSslKeyPrivate;</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">   64</a></span>&#160;<span class=\"keyword\">class </span>Q_NETWORK_EXPORT <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a></div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a>();</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> &amp;encoded, <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a4de33cd7d95971e57351315e6a4be3f6\">QSsl::KeyAlgorithm</a> algorithm,</div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;            <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a58a475663b20c6846eb7af470b07a709\">QSsl::EncodingFormat</a> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae2d3db041c6004a67047659b42f73a44\">format</a> = <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a58a475663b20c6846eb7af470b07a709ad068dc337677a90335ff07bf657e3514\">QSsl::Pem</a>,</div>\n\
<div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;            <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">QSsl::KeyType</a> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a> = <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238ca9e9a60b6101abeb799a0e55d6f28d08c\">QSsl::PrivateKey</a>,</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> &amp;passPhrase = <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>());</div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_i_o_device.html\">QIODevice</a> *device, <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a4de33cd7d95971e57351315e6a4be3f6\">QSsl::KeyAlgorithm</a> algorithm,</div>\n\
<div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;            <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a58a475663b20c6846eb7af470b07a709\">QSsl::EncodingFormat</a> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae2d3db041c6004a67047659b42f73a44\">format</a> = <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a58a475663b20c6846eb7af470b07a709ad068dc337677a90335ff07bf657e3514\">QSsl::Pem</a>,</div>\n\
<div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;            <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">QSsl::KeyType</a> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a> = <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238ca9e9a60b6101abeb799a0e55d6f28d08c\">QSsl::PrivateKey</a>,</div>\n\
<div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> &amp;passPhrase = <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>());</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a> &amp;other);</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;    ~<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a>();</div>\n\
<div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a> &amp;operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a> &amp;other);</div>\n\
<div class=\"line\"><a name=\"l00079\"></a><span class=\"lineno\">   79</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;    <span class=\"keywordtype\">bool</span> isNull() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;    <span class=\"keywordtype\">void</span> clear();</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;    <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3c8469415bbc83dd1341af15c67f1cef\">length</a>() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\">   84</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">QSsl::KeyType</a> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a>() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\">   85</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a4de33cd7d95971e57351315e6a4be3f6\">QSsl::KeyAlgorithm</a> algorithm() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00086\"></a><span class=\"lineno\">   86</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> toPem(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> &amp;passPhrase = <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>()) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> toDer(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a> &amp;passPhrase = <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a>()) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_qt.html#ade48a6dd7fcc2782d6c9fe768f8d87e2\">Qt::HANDLE</a> handle() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;    <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a637f7084f9654006932237127d7be263\">operator==</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a> &amp;key) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html#ab929ddf37a4529de18890748b65f1811\">   93</a></span>&#160;    <span class=\"keyword\">inline</span> <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html#ab929ddf37a4529de18890748b65f1811\">operator!=</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a> &amp;key)<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> !<a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a637f7084f9654006932237127d7be263\">operator==</a>(key); }</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;<span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_explicitly_shared_data_pointer.html\">QExplicitlySharedDataPointer&lt;QSslKeyPrivate&gt;</a> d;</div>\n\
<div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html#a7fbecb9a520557b25c5edf17eadc22d1\">   97</a></span>&#160;    <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_certificate.html\">QSslCertificate</a>;</div>\n\
<div class=\"line\"><a name=\"l00098\"></a><span class=\"lineno\">   98</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00100\"></a><span class=\"lineno\">  100</span>&#160;<span class=\"preprocessor\">#ifndef QT_NO_DEBUG_STREAM</span></div>\n\
<div class=\"line\"><a name=\"l00101\"></a><span class=\"lineno\">  101</span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a>;</div>\n\
<div class=\"line\"><a name=\"l00102\"></a><span class=\"lineno\">  102</span>&#160;Q_NETWORK_EXPORT <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a> <a class=\"code\" href=\"#!/url=./cpp_ref/qsslkey_8h.html#a0db9a74b4709f720fb127d82413a69b1\">operator&lt;&lt;</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a> debug, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a> &amp;key);</div>\n\
<div class=\"line\"><a name=\"l00103\"></a><span class=\"lineno\">  103</span>&#160;<span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00104\"></a><span class=\"lineno\">  104</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00105\"></a><span class=\"lineno\">  105</span>&#160;<span class=\"preprocessor\">#endif // QT_NO_OPENSSL</span></div>\n\
<div class=\"line\"><a name=\"l00106\"></a><span class=\"lineno\">  106</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00107\"></a><span class=\"lineno\">  107</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div>\n\
<div class=\"line\"><a name=\"l00108\"></a><span class=\"lineno\">  108</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00109\"></a><span class=\"lineno\">  109</span>&#160;<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div>\n\
<div class=\"line\"><a name=\"l00110\"></a><span class=\"lineno\">  110</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00111\"></a><span class=\"lineno\">  111</span>&#160;<span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a63267399cd2a2ee217572c11d2e54f07\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a63267399cd2a2ee217572c11d2e54f07\">type</a></div><div class=\"ttdeci\">GLuint GLuint GLsizei GLenum type</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00872\">GLee.h:872</a></div></div>\n\
<div class=\"ttc\" id=\"qsslkey_8h_html_a0db9a74b4709f720fb127d82413a69b1\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qsslkey_8h.html#a0db9a74b4709f720fb127d82413a69b1\">operator&lt;&lt;</a></div><div class=\"ttdeci\">Q_NETWORK_EXPORT QDebug operator&lt;&lt;(QDebug debug, const QSslKey &amp;key)</div></div>\n\
<div class=\"ttc\" id=\"class_q_explicitly_shared_data_pointer_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_explicitly_shared_data_pointer.html\">QExplicitlySharedDataPointer&lt; QSslKeyPrivate &gt;</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_ssl_html_aab0feaba617470cb4aa830dc5935238c\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238c\">QSsl::KeyType</a></div><div class=\"ttdeci\">KeyType</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qssl_8h_source.html#l00056\">qssl.h:56</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_af0211888b9fea89f8a616cd6566c521e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#af0211888b9fea89f8a616cd6566c521e\">QT_END_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_END_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00128\">qglobal.h:128</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_ssl_key_html_ab929ddf37a4529de18890748b65f1811\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_ssl_key.html#ab929ddf37a4529de18890748b65f1811\">QSslKey::operator!=</a></div><div class=\"ttdeci\">bool operator!=(const QSslKey &amp;key) const </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qsslkey_8h_source.html#l00093\">qsslkey.h:93</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_a22466069bc24124bf4d749ca253f5e2b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#a22466069bc24124bf4d749ca253f5e2b\">QT_BEGIN_HEADER</a></div><div class=\"ttdeci\">#define QT_BEGIN_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00141\">qglobal.h:141</a></div></div>\n\
<div class=\"ttc\" id=\"qssl_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qssl_8h.html\">qssl.h</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_ssl_html_a4de33cd7d95971e57351315e6a4be3f6\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a4de33cd7d95971e57351315e6a4be3f6\">QSsl::KeyAlgorithm</a></div><div class=\"ttdeci\">KeyAlgorithm</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qssl_8h_source.html#l00066\">qssl.h:66</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_ssl_html_aab0feaba617470cb4aa830dc5935238ca9e9a60b6101abeb799a0e55d6f28d08c\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_ssl.html#aab0feaba617470cb4aa830dc5935238ca9e9a60b6101abeb799a0e55d6f28d08c\">QSsl::PrivateKey</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qssl_8h_source.html#l00057\">qssl.h:57</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_debug_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_debug.html\">QDebug</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qdebug_8h_source.html#l00062\">qdebug.h:62</a></div></div>\n\
<div class=\"ttc\" id=\"namespacemudbox_html_a637f7084f9654006932237127d7be263\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespacemudbox.html#a637f7084f9654006932237127d7be263\">mudbox::operator==</a></div><div class=\"ttdeci\">bool operator==(const Attribute &amp;cA, const AttributeInstance&lt; type &gt; &amp;cB)</div><div class=\"ttdoc\">This operator compares the two attributes and NOT their values. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/node_8h_source.html#l00577\">node.h:577</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ae7344b820974b9f9f7cfedd5808bd3a0\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ae7344b820974b9f9f7cfedd5808bd3a0\">QT_BEGIN_NAMESPACE</a></div><div class=\"ttdeci\">#define QT_BEGIN_NAMESPACE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00127\">qglobal.h:127</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_ae2d3db041c6004a67047659b42f73a44\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#ae2d3db041c6004a67047659b42f73a44\">format</a></div><div class=\"ttdeci\">GLenum GLsizei GLenum format</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l00873\">GLee.h:873</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_i_o_device_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_i_o_device.html\">QIODevice</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qiodevice_8h_source.html#l00066\">qiodevice.h:66</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a3c8469415bbc83dd1341af15c67f1cef\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a3c8469415bbc83dd1341af15c67f1cef\">length</a></div><div class=\"ttdeci\">GLuint GLsizei GLsizei * length</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01713\">GLee.h:1713</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_ssl_html_a58a475663b20c6846eb7af470b07a709ad068dc337677a90335ff07bf657e3514\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a58a475663b20c6846eb7af470b07a709ad068dc337677a90335ff07bf657e3514\">QSsl::Pem</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qssl_8h_source.html#l00062\">qssl.h:62</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_qt_html_ade48a6dd7fcc2782d6c9fe768f8d87e2\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_qt.html#ade48a6dd7fcc2782d6c9fe768f8d87e2\">Qt::HANDLE</a></div><div class=\"ttdeci\">unsigned long HANDLE</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qnamespace_8h_source.html#l01675\">qnamespace.h:1675</a></div></div>\n\
<div class=\"ttc\" id=\"qsharedpointer_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qsharedpointer_8h.html\">qsharedpointer.h</a></div></div>\n\
<div class=\"ttc\" id=\"qbytearray_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qbytearray_8h.html\">qbytearray.h</a></div></div>\n\
<div class=\"ttc\" id=\"qnamespace_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qnamespace_8h.html\">qnamespace.h</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_q_ssl_html_a58a475663b20c6846eb7af470b07a709\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_q_ssl.html#a58a475663b20c6846eb7af470b07a709\">QSsl::EncodingFormat</a></div><div class=\"ttdeci\">EncodingFormat</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qssl_8h_source.html#l00061\">qssl.h:61</a></div></div>\n\
<div class=\"ttc\" id=\"struct_q_pair_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/struct_q_pair.html\">QPair</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qabstracteventdispatcher_8h_source.html#l00056\">qabstracteventdispatcher.h:56</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_ac10725c642e865540e4faaf733ff95ff\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#ac10725c642e865540e4faaf733ff95ff\">QT_END_HEADER</a></div><div class=\"ttdeci\">#define QT_END_HEADER</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00142\">qglobal.h:142</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_ssl_certificate_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_ssl_certificate.html\">QSslCertificate</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qsslcertificate_8h_source.html#l00070\">qsslcertificate.h:70</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_byte_array_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_byte_array.html\">QByteArray</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qbytearray_8h_source.html#l00135\">qbytearray.h:135</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_ssl_key_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_ssl_key.html\">QSslKey</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qsslkey_8h_source.html#l00064\">qsslkey.h:64</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";