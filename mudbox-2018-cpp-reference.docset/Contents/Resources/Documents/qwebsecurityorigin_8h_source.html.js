var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>QtWebKit/qwebsecurityorigin.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qwebsecurityorigin_8h_source.html\', tocPrefix);\n\
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
            <h1>QtWebKit/qwebsecurityorigin.h Source File</h1>\n\
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
<div class=\"title\">qwebsecurityorigin.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/qwebsecurityorigin_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">/*</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">    Copyright (C) 2008 Nokia Corporation and/or its subsidiary(-ies)</span></div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"comment\"></span></div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">    This library is free software; you can redistribute it and/or</span></div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">    modify it under the terms of the GNU Library General Public</span></div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">    License as published by the Free Software Foundation; either</span></div>\n\
<div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">    version 2 of the License, or (at your option) any later version.</span></div>\n\
<div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\"></span></div>\n\
<div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">    This library is distributed in the hope that it will be useful,</span></div>\n\
<div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">    but WITHOUT ANY WARRANTY; without even the implied warranty of</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\">    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"comment\">    Library General Public License for more details.</span></div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"comment\"></span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"comment\">    You should have received a copy of the GNU Library General Public License</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"comment\">    along with this library; see the file COPYING.LIB.  If not, write to</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"comment\">    the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,</span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"comment\">    Boston, MA 02110-1301, USA.</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"comment\">*/</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#ifndef _WEBSECURITYORIGIN_H_</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"preprocessor\">#define _WEBSECURITYORIGIN_H_</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/qurl_8h.html\">QtCore/qurl.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./cpp_ref/qshareddata_8h.html\">QtCore/qshareddata.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"preprocessor\">#include &quot;<a class=\"code\" href=\"#!/url=./cpp_ref/qwebkitglobal_8h.html\">qwebkitglobal.h</a>&quot;</span></div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"keyword\">namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_web_core.html\">WebCore</a> {</div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;    <span class=\"keyword\">class </span>SecurityOrigin;</div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;    <span class=\"keyword\">class </span>ChromeClientQt;</div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;}</div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;<span class=\"keyword\">class </span>QWebSecurityOriginPrivate;</div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_database.html\">QWebDatabase</a>;</div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_frame.html\">QWebFrame</a>;</div>\n\
<div class=\"line\"><a name=\"l00036\"></a><span class=\"lineno\">   36</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_web_security_origin.html\">   37</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/qwebkitglobal_8h.html#a2cf7015b4db391efea79cf2a6a63b40b\">QWEBKIT_EXPORT</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_security_origin.html\">QWebSecurityOrigin</a> {</div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00039\"></a><span class=\"lineno\">   39</span>&#160;    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;QWebSecurityOrigin&gt;</a> allOrigins();</div>\n\
<div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> addLocalScheme(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&amp; scheme);</div>\n\
<div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> removeLocalScheme(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a>&amp; scheme);</div>\n\
<div class=\"line\"><a name=\"l00042\"></a><span class=\"lineno\">   42</span>&#160;    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a> localSchemes();</div>\n\
<div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;    ~<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_security_origin.html\">QWebSecurityOrigin</a>();</div>\n\
<div class=\"line\"><a name=\"l00045\"></a><span class=\"lineno\">   45</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00046\"></a><span class=\"lineno\">   46</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> scheme() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> host() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;    <span class=\"keywordtype\">int</span> port() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a> databaseUsage() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00051\"></a><span class=\"lineno\">   51</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a> databaseQuota() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;    <span class=\"keywordtype\">void</span> setDatabaseQuota(<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a> quota);</div>\n\
<div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;    <span class=\"keywordtype\">void</span> setApplicationCacheQuota(<a class=\"code\" href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a> quota);</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_list.html\">QList&lt;QWebDatabase&gt;</a> databases() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\">   57</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_security_origin.html\">QWebSecurityOrigin</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_security_origin.html\">QWebSecurityOrigin</a>&amp; other);</div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_security_origin.html\">QWebSecurityOrigin</a> &amp;operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_security_origin.html\">QWebSecurityOrigin</a>&amp; other);</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;<span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_web_security_origin.html#a0cb57720cd7218fd3e6034d417323fae\">   61</a></span>&#160;    <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_database.html\">QWebDatabase</a>;</div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_web_security_origin.html#a654832701d42bdc4e1d9c56c8cc2f5a5\">   62</a></span>&#160;    <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_frame.html\">QWebFrame</a>;</div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/class_q_web_security_origin.html#a35c0f279339eed1e53fe4b40aba37670\">   63</a></span>&#160;    <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span>WebCore::ChromeClientQt;</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_web_security_origin.html\">QWebSecurityOrigin</a>(QWebSecurityOriginPrivate* priv);</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;<span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_explicitly_shared_data_pointer.html\">QExplicitlySharedDataPointer&lt;QWebSecurityOriginPrivate&gt;</a> d;</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00069\"></a><span class=\"lineno\">   69</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;<span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"ttc\" id=\"class_q_explicitly_shared_data_pointer_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_explicitly_shared_data_pointer.html\">QExplicitlySharedDataPointer&lt; QWebSecurityOriginPrivate &gt;</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string_list.html\">QStringList</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstringlist_8h_source.html#l00066\">qstringlist.h:66</a></div></div>\n\
<div class=\"ttc\" id=\"qwebkitglobal_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qwebkitglobal_8h.html\">qwebkitglobal.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_web_frame_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_web_frame.html\">QWebFrame</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwebframe_8h_source.html#l00106\">qwebframe.h:106</a></div></div>\n\
<div class=\"ttc\" id=\"qglobal_8h_html_aacec69bbe5cd009ccdcaf50f9a0289aa\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qglobal_8h.html#aacec69bbe5cd009ccdcaf50f9a0289aa\">qint64</a></div><div class=\"ttdeci\">long long qint64</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qglobal_8h_source.html#l00947\">qglobal.h:947</a></div></div>\n\
<div class=\"ttc\" id=\"qurl_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qurl_8h.html\">qurl.h</a></div></div>\n\
<div class=\"ttc\" id=\"qshareddata_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qshareddata_8h.html\">qshareddata.h</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_web_security_origin_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_web_security_origin.html\">QWebSecurityOrigin</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwebsecurityorigin_8h_source.html#l00037\">qwebsecurityorigin.h:37</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_web_database_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_web_database.html\">QWebDatabase</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwebdatabase_8h_source.html#l00034\">qwebdatabase.h:34</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_string_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qstring_8h_source.html#l00083\">qstring.h:83</a></div></div>\n\
<div class=\"ttc\" id=\"class_q_list_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_list.html\">QList</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/backendcapabilities_8h_source.html#l00040\">backendcapabilities.h:40</a></div></div>\n\
<div class=\"ttc\" id=\"namespace_web_core_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespace_web_core.html\">WebCore</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwebdatabase_8h_source.html#l00027\">qwebdatabase.h:27</a></div></div>\n\
<div class=\"ttc\" id=\"qwebkitglobal_8h_html_a2cf7015b4db391efea79cf2a6a63b40b\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/qwebkitglobal_8h.html#a2cf7015b4db391efea79cf2a6a63b40b\">QWEBKIT_EXPORT</a></div><div class=\"ttdeci\">#define QWEBKIT_EXPORT</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qwebkitglobal_8h_source.html#l00045\">qwebkitglobal.h:45</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";