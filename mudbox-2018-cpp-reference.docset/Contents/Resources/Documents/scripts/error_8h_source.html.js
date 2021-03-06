var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Mudbox/error.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'error_8h_source.html\', tocPrefix);\n\
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
            <h1>Mudbox/error.h Source File</h1>\n\
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
<div class=\"title\">error.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/error_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"comment\">// Copyright (c) 2008 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"comment\">// CREATED: October 2008</span></div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\">#include &lt;QtCore/QCoreApplication&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"keyword\">namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html\">mudbox</a> {</div>\n\
<div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html\">   46</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html\">Error</a></div>\n\
<div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/qcoreapplication_8h.html#af36246d0c49dc6f1d54e495dd2c0a4ef\">Q_DECLARE_TR_FUNCTIONS</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html\">mudbox::Error</a>);</div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;<span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#abd9940bb2d65490b9f56e9c57a20f08e\">   51</a></span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#abd9940bb2d65490b9f56e9c57a20f08e\">m_sErrorMessage</a>;</div>\n\
<div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a99377a844056173a08cd05b2be0b0109\">   52</a></span>&#160;    <span class=\"keywordtype\">bool</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a99377a844056173a08cd05b2be0b0109\">m_bOnHeap</a>;</div>\n\
<div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a9fc454c4e5789a0ecac27af57001585b\">   53</a></span>&#160;    <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *m_pFunction, *<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a9fc454c4e5789a0ecac27af57001585b\">m_pSource</a>;</div>\n\
<div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a4d6371bf50c94682f491c212fa940bbc\">   54</a></span>&#160;    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a4d6371bf50c94682f491c212fa940bbc\">m_iLine</a>;</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281d\">   57</a></span>&#160;    <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a></div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;    {</div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da9286acaad543b91c3e0f08f9b43e6c21\">   59</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da9286acaad543b91c3e0f08f9b43e6c21\">codeOk</a>,</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281dabe0fe72a1d8fd750703158f9179d564f\">   60</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281dabe0fe72a1d8fd750703158f9179d564f\">codeOutOfMemory</a>,</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da3d1d1ce46e4a8c38abf00c3f117e4f6e\">   61</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da3d1d1ce46e4a8c38abf00c3f117e4f6e\">codeHardwareFailure</a>,</div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da4a005047c401b6b6d497b7e9b610fd80\">   62</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da4a005047c401b6b6d497b7e9b610fd80\">codeOutOfVideoMemory</a>,</div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da1f67536bd5c4f9609e36c6319619417f\">   63</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da1f67536bd5c4f9609e36c6319619417f\">codeUnspecified</a>,</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281dafd56e2fc519c818d79c7103e74d33dc6\">   64</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281dafd56e2fc519c818d79c7103e74d33dc6\">codeUserSkip</a>,</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da9c0746834cc31829508b7cd175da78ab\">   65</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da9c0746834cc31829508b7cd175da78ab\">codeUserIgnore</a>,</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da1c53c85fb17f08cb7c693d42ce38e73d\">   66</a></span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da1c53c85fb17f08cb7c693d42ce38e73d\">codeUserCancel</a>,</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da15d19033923fce1faf7c34337e91955a\">   67</a></span>&#160;        codeUnknown = 0xffffffff</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;    } m_eCode;</div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;<span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html\">Error</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sMessage, <span class=\"keywordtype\">bool</span> bOnHeap, Code eCode = codeUnspecified );</div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html\">Error</a>(</div>\n\
<div class=\"line\"><a name=\"l00081\"></a><span class=\"lineno\">   81</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sMessage,                </div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;        Code eCode = codeUnspecified,       </div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;        <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *pFunction = 0,          </div>\n\
<div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\">   84</span>&#160;        <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *pSourceFileName = 0,    </div>\n\
<div class=\"line\"><a name=\"l00085\"></a><span class=\"lineno\">   85</span>&#160;        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> iLine = 0              </div>\n\
<div class=\"line\"><a name=\"l00086\"></a><span class=\"lineno\">   86</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html\">Error</a> *Format( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sMessage );</div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\">   93</span>&#160;    <span class=\"keyword\">enum</span> Code Code( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;Message( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\">   97</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00104\"></a><span class=\"lineno\">  104</span>&#160;    <span class=\"keywordtype\">void</span> Report(</div>\n\
<div class=\"line\"><a name=\"l00105\"></a><span class=\"lineno\">  105</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> &amp;sPre = <span class=\"stringliteral\">&quot;&quot;</span>        </div>\n\
<div class=\"line\"><a name=\"l00106\"></a><span class=\"lineno\">  106</span>&#160;        ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00107\"></a><span class=\"lineno\">  107</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00109\"></a><span class=\"lineno\">  109</span>&#160;    <span class=\"keywordtype\">void</span> Discard( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00110\"></a><span class=\"lineno\">  110</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00112\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a845c8c6eb1a94792a8afc20bcfd0842f\">  112</a></span>&#160;    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a845c8c6eb1a94792a8afc20bcfd0842f\">ThrowBadAlloc</a>( <span class=\"keywordtype\">void</span> ) { <span class=\"keywordflow\">throw</span> &amp;s_cBadAlloc; };</div>\n\
<div class=\"line\"><a name=\"l00113\"></a><span class=\"lineno\">  113</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00114\"></a><span class=\"lineno\">  114</span>&#160;    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html\">Error</a> s_cBadAlloc;</div>\n\
<div class=\"line\"><a name=\"l00115\"></a><span class=\"lineno\">  115</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00116\"></a><span class=\"lineno\">  116</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00117\"></a><span class=\"lineno\">  117</span>&#160;}; <span class=\"comment\">// end of namespace mudbox</span></div>\n\
<div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;</div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_a4d6371bf50c94682f491c212fa940bbc\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a4d6371bf50c94682f491c212fa940bbc\">mudbox::Error::m_iLine</a></div><div class=\"ttdeci\">unsigned int m_iLine</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00054\">error.h:54</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_af31477bc48f67856bedb0fa8e5b5281da4a005047c401b6b6d497b7e9b610fd80\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da4a005047c401b6b6d497b7e9b610fd80\">mudbox::Error::codeOutOfVideoMemory</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00062\">error.h:62</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html\">mudbox::Error</a></div><div class=\"ttdoc\">Holds information about an error. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00046\">error.h:46</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_af31477bc48f67856bedb0fa8e5b5281da1c53c85fb17f08cb7c693d42ce38e73d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da1c53c85fb17f08cb7c693d42ce38e73d\">mudbox::Error::codeUserCancel</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00066\">error.h:66</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_a99377a844056173a08cd05b2be0b0109\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a99377a844056173a08cd05b2be0b0109\">mudbox::Error::m_bOnHeap</a></div><div class=\"ttdeci\">bool m_bOnHeap</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00052\">error.h:52</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_af31477bc48f67856bedb0fa8e5b5281da9c0746834cc31829508b7cd175da78ab\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da9c0746834cc31829508b7cd175da78ab\">mudbox::Error::codeUserIgnore</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00065\">error.h:65</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_af31477bc48f67856bedb0fa8e5b5281dabe0fe72a1d8fd750703158f9179d564f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281dabe0fe72a1d8fd750703158f9179d564f\">mudbox::Error::codeOutOfMemory</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00060\">error.h:60</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_abd9940bb2d65490b9f56e9c57a20f08e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#abd9940bb2d65490b9f56e9c57a20f08e\">mudbox::Error::m_sErrorMessage</a></div><div class=\"ttdeci\">QString m_sErrorMessage</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00051\">error.h:51</a></div></div>\n\
<div class=\"ttc\" id=\"namespacemudbox_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespacemudbox.html\">mudbox</a></div><div class=\"ttdoc\">Class: ConvolutionKernel. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/array_8h_source.html#l00015\">array.h:15</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_af31477bc48f67856bedb0fa8e5b5281da3d1d1ce46e4a8c38abf00c3f117e4f6e\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da3d1d1ce46e4a8c38abf00c3f117e4f6e\">mudbox::Error::codeHardwareFailure</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00061\">error.h:61</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_a845c8c6eb1a94792a8afc20bcfd0842f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a845c8c6eb1a94792a8afc20bcfd0842f\">mudbox::Error::ThrowBadAlloc</a></div><div class=\"ttdeci\">static void ThrowBadAlloc(void)</div><div class=\"ttdoc\">Throws a static bad alloc exception. (No memory allocation is required to report allocation problems...</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00112\">error.h:112</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00083\">qstring.h:83</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_af31477bc48f67856bedb0fa8e5b5281da1f67536bd5c4f9609e36c6319619417f\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da1f67536bd5c4f9609e36c6319619417f\">mudbox::Error::codeUnspecified</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00063\">error.h:63</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_a9fc454c4e5789a0ecac27af57001585b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#a9fc454c4e5789a0ecac27af57001585b\">mudbox::Error::m_pSource</a></div><div class=\"ttdeci\">const char * m_pSource</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00053\">error.h:53</a></div></div>\n\
<div class=\"ttc\" id=\"qcoreapplication_8h_html_af36246d0c49dc6f1d54e495dd2c0a4ef\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qcoreapplication_8h.html#af36246d0c49dc6f1d54e495dd2c0a4ef\">Q_DECLARE_TR_FUNCTIONS</a></div><div class=\"ttdeci\">#define Q_DECLARE_TR_FUNCTIONS(context)</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qcoreapplication_8h_source.html#l00267\">qcoreapplication.h:267</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_af31477bc48f67856bedb0fa8e5b5281d\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281d\">mudbox::Error::Code</a></div><div class=\"ttdeci\">Code</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00057\">error.h:57</a></div></div>\n\
<div class=\"ttc\" id=\"dllinterface_8h_html_aecc26481a5bdb4445048f4fb0f3bb417\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a></div><div class=\"ttdeci\">#define MBDLL_DECL</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/dllinterface_8h_source.html#l00035\">dllinterface.h:35</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_af31477bc48f67856bedb0fa8e5b5281dafd56e2fc519c818d79c7103e74d33dc6\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281dafd56e2fc519c818d79c7103e74d33dc6\">mudbox::Error::codeUserSkip</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00064\">error.h:64</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_error_html_af31477bc48f67856bedb0fa8e5b5281da9286acaad543b91c3e0f08f9b43e6c21\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_error.html#af31477bc48f67856bedb0fa8e5b5281da9286acaad543b91c3e0f08f9b43e6c21\">mudbox::Error::codeOk</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/error_8h_source.html#l00059\">error.h:59</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";