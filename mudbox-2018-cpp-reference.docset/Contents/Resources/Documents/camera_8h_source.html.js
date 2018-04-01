var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Mudbox/camera.h Source File</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'camera_8h_source.html\', tocPrefix);\n\
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
            <h1>Mudbox/camera.h Source File</h1>\n\
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
<div class=\"title\">camera.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./cpp_ref/camera_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;<span class=\"comment\">// Copyright (c) 2008 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;<span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;<span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;<span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;<span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;<span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;<span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;<span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\">// CREATED: October 2008</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"keyword\">namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html\">mudbox</a> {</div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./cpp_ref/classmudbox_1_1_camera.html\">   20</a></span>&#160;<span class=\"keyword\">class </span><a class=\"code\" href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_camera.html\">Camera</a> : <span class=\"keyword\">virtual</span> <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_group_node.html\">GroupNode</a></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/node_8h.html#a431009564592a24e5f46f5df421131a1\">DECLARE_CLASS</a>;</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;    <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_camera.html\">Camera</a>( <span class=\"keywordtype\">void</span> );</div>\n\
<div class=\"line\"><a name=\"l00033\"></a><span class=\"lineno\">   33</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00034\"></a><span class=\"lineno\">   34</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00035\"></a><span class=\"lineno\">   35</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00037\"></a><span class=\"lineno\">   37</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> Forward( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00038\"></a><span class=\"lineno\">   38</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00040\"></a><span class=\"lineno\">   40</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> Up( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00041\"></a><span class=\"lineno\">   41</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00043\"></a><span class=\"lineno\">   43</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> Right( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00044\"></a><span class=\"lineno\">   44</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\">   48</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">float</span> Yaw( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00054\"></a><span class=\"lineno\">   54</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">float</span> Pitch( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">float</span> Roll( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> Position( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetYawPitchRoll(</div>\n\
<div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\">   75</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> &amp;vYPR      </div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> AddYawPitchRoll(</div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> &amp;vYPR      </div>\n\
<div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetForwardUpRight(</div>\n\
<div class=\"line\"><a name=\"l00097\"></a><span class=\"lineno\">   97</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> &amp;vForward,     </div>\n\
<div class=\"line\"><a name=\"l00098\"></a><span class=\"lineno\">   98</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> &amp;vUp,          </div>\n\
<div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> &amp;vRight        </div>\n\
<div class=\"line\"><a name=\"l00100\"></a><span class=\"lineno\">  100</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00101\"></a><span class=\"lineno\">  101</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00107\"></a><span class=\"lineno\">  107</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetTarget(</div>\n\
<div class=\"line\"><a name=\"l00108\"></a><span class=\"lineno\">  108</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> &amp;vTarget,                      </div>\n\
<div class=\"line\"><a name=\"l00109\"></a><span class=\"lineno\">  109</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> &amp;vUpDir = <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a>( 0, 1, 0 )    </div>\n\
<div class=\"line\"><a name=\"l00110\"></a><span class=\"lineno\">  110</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00111\"></a><span class=\"lineno\">  111</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00113\"></a><span class=\"lineno\">  113</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetPosition(</div>\n\
<div class=\"line\"><a name=\"l00114\"></a><span class=\"lineno\">  114</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> &amp;vPosition     </div>\n\
<div class=\"line\"><a name=\"l00115\"></a><span class=\"lineno\">  115</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00116\"></a><span class=\"lineno\">  116</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> MoveForward(</div>\n\
<div class=\"line\"><a name=\"l00119\"></a><span class=\"lineno\">  119</span>&#160;        <span class=\"keywordtype\">float</span> fRange    </div>\n\
<div class=\"line\"><a name=\"l00120\"></a><span class=\"lineno\">  120</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\">  121</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00123\"></a><span class=\"lineno\">  123</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> MoveUp(</div>\n\
<div class=\"line\"><a name=\"l00124\"></a><span class=\"lineno\">  124</span>&#160;        <span class=\"keywordtype\">float</span> fRange    </div>\n\
<div class=\"line\"><a name=\"l00125\"></a><span class=\"lineno\">  125</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00126\"></a><span class=\"lineno\">  126</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00128\"></a><span class=\"lineno\">  128</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> MoveRight(</div>\n\
<div class=\"line\"><a name=\"l00129\"></a><span class=\"lineno\">  129</span>&#160;        <span class=\"keywordtype\">float</span> fRange    </div>\n\
<div class=\"line\"><a name=\"l00130\"></a><span class=\"lineno\">  130</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00131\"></a><span class=\"lineno\">  131</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00133\"></a><span class=\"lineno\">  133</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> MoveBackward(</div>\n\
<div class=\"line\"><a name=\"l00134\"></a><span class=\"lineno\">  134</span>&#160;        <span class=\"keywordtype\">float</span> fRange    </div>\n\
<div class=\"line\"><a name=\"l00135\"></a><span class=\"lineno\">  135</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00136\"></a><span class=\"lineno\">  136</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00138\"></a><span class=\"lineno\">  138</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> MoveDown(</div>\n\
<div class=\"line\"><a name=\"l00139\"></a><span class=\"lineno\">  139</span>&#160;        <span class=\"keywordtype\">float</span> fRange    </div>\n\
<div class=\"line\"><a name=\"l00140\"></a><span class=\"lineno\">  140</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00141\"></a><span class=\"lineno\">  141</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00143\"></a><span class=\"lineno\">  143</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> MoveLeft(</div>\n\
<div class=\"line\"><a name=\"l00144\"></a><span class=\"lineno\">  144</span>&#160;        <span class=\"keywordtype\">float</span> fRange    </div>\n\
<div class=\"line\"><a name=\"l00145\"></a><span class=\"lineno\">  145</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00146\"></a><span class=\"lineno\">  146</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00156\"></a><span class=\"lineno\">  156</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> Project(</div>\n\
<div class=\"line\"><a name=\"l00157\"></a><span class=\"lineno\">  157</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> &amp;vWorldPosition    </div>\n\
<div class=\"line\"><a name=\"l00158\"></a><span class=\"lineno\">  158</span>&#160;        ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00159\"></a><span class=\"lineno\">  159</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00167\"></a><span class=\"lineno\">  167</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> UnProject(</div>\n\
<div class=\"line\"><a name=\"l00168\"></a><span class=\"lineno\">  168</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> &amp;vScreenPosition   </div>\n\
<div class=\"line\"><a name=\"l00169\"></a><span class=\"lineno\">  169</span>&#160;        ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00170\"></a><span class=\"lineno\">  170</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00172\"></a><span class=\"lineno\">  172</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_matrix.html\">mudbox::Matrix</a> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_matrix.html\">Matrix</a>(</div>\n\
<div class=\"line\"><a name=\"l00173\"></a><span class=\"lineno\">  173</span>&#160;        <span class=\"keywordtype\">bool</span> bOffscreen = <span class=\"keyword\">false</span>     </div>\n\
<div class=\"line\"><a name=\"l00174\"></a><span class=\"lineno\">  174</span>&#160;        ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00175\"></a><span class=\"lineno\">  175</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00182\"></a><span class=\"lineno\">  182</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">float</span> FOV( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00183\"></a><span class=\"lineno\">  183</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00185\"></a><span class=\"lineno\">  185</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">float</span> Near( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00186\"></a><span class=\"lineno\">  186</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00188\"></a><span class=\"lineno\">  188</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">float</span> Far( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00189\"></a><span class=\"lineno\">  189</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00193\"></a><span class=\"lineno\">  193</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">float</span> AspectRatio( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00194\"></a><span class=\"lineno\">  194</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00196\"></a><span class=\"lineno\">  196</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetFOV(</div>\n\
<div class=\"line\"><a name=\"l00197\"></a><span class=\"lineno\">  197</span>&#160;        <span class=\"keywordtype\">float</span> fFOV          </div>\n\
<div class=\"line\"><a name=\"l00198\"></a><span class=\"lineno\">  198</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00199\"></a><span class=\"lineno\">  199</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00201\"></a><span class=\"lineno\">  201</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetNear(</div>\n\
<div class=\"line\"><a name=\"l00202\"></a><span class=\"lineno\">  202</span>&#160;        <span class=\"keywordtype\">float</span> fNear     </div>\n\
<div class=\"line\"><a name=\"l00203\"></a><span class=\"lineno\">  203</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00204\"></a><span class=\"lineno\">  204</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00206\"></a><span class=\"lineno\">  206</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetFar(</div>\n\
<div class=\"line\"><a name=\"l00207\"></a><span class=\"lineno\">  207</span>&#160;        <span class=\"keywordtype\">float</span> fFar  </div>\n\
<div class=\"line\"><a name=\"l00208\"></a><span class=\"lineno\">  208</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00209\"></a><span class=\"lineno\">  209</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00213\"></a><span class=\"lineno\">  213</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetAspectRatio(</div>\n\
<div class=\"line\"><a name=\"l00214\"></a><span class=\"lineno\">  214</span>&#160;        <span class=\"keywordtype\">float</span> fAspectRatio  </div>\n\
<div class=\"line\"><a name=\"l00215\"></a><span class=\"lineno\">  215</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00216\"></a><span class=\"lineno\">  216</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00221\"></a><span class=\"lineno\">  221</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">float</span> Scale2D( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00222\"></a><span class=\"lineno\">  222</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00228\"></a><span class=\"lineno\">  228</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">float</span> Angle2D( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00229\"></a><span class=\"lineno\">  229</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00234\"></a><span class=\"lineno\">  234</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> Position2D( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00235\"></a><span class=\"lineno\">  235</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00241\"></a><span class=\"lineno\">  241</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetScale2D(</div>\n\
<div class=\"line\"><a name=\"l00242\"></a><span class=\"lineno\">  242</span>&#160;        <span class=\"keywordtype\">float</span> fScale2D      </div>\n\
<div class=\"line\"><a name=\"l00243\"></a><span class=\"lineno\">  243</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00244\"></a><span class=\"lineno\">  244</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00250\"></a><span class=\"lineno\">  250</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetAngle2D(</div>\n\
<div class=\"line\"><a name=\"l00251\"></a><span class=\"lineno\">  251</span>&#160;        <span class=\"keywordtype\">float</span> fAngle2D      </div>\n\
<div class=\"line\"><a name=\"l00252\"></a><span class=\"lineno\">  252</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00253\"></a><span class=\"lineno\">  253</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00259\"></a><span class=\"lineno\">  259</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetPosition2D(</div>\n\
<div class=\"line\"><a name=\"l00260\"></a><span class=\"lineno\">  260</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> &amp;vPosition2D   </div>\n\
<div class=\"line\"><a name=\"l00261\"></a><span class=\"lineno\">  261</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00262\"></a><span class=\"lineno\">  262</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00264\"></a><span class=\"lineno\">  264</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> CopyFrom(</div>\n\
<div class=\"line\"><a name=\"l00265\"></a><span class=\"lineno\">  265</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_camera.html\">Camera</a> &amp;cOther    </div>\n\
<div class=\"line\"><a name=\"l00266\"></a><span class=\"lineno\">  266</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00267\"></a><span class=\"lineno\">  267</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00268\"></a><span class=\"lineno\">  268</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00270\"></a><span class=\"lineno\">  270</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> IsEqualTo(</div>\n\
<div class=\"line\"><a name=\"l00271\"></a><span class=\"lineno\">  271</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_camera.html\">Camera</a> &amp;cOther    </div>\n\
<div class=\"line\"><a name=\"l00272\"></a><span class=\"lineno\">  272</span>&#160;        ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00273\"></a><span class=\"lineno\">  273</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00281\"></a><span class=\"lineno\">  281</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> Pick(</div>\n\
<div class=\"line\"><a name=\"l00282\"></a><span class=\"lineno\">  282</span>&#160;        <span class=\"keywordtype\">float</span> fXPosition,       </div>\n\
<div class=\"line\"><a name=\"l00283\"></a><span class=\"lineno\">  283</span>&#160;        <span class=\"keywordtype\">float</span> fYPosition,       </div>\n\
<div class=\"line\"><a name=\"l00284\"></a><span class=\"lineno\">  284</span>&#160;        <a class=\"code\" href=\"#!/url=./cpp_ref/structmudbox_1_1_surface_point.html\">SurfacePoint</a> &amp;sResult   </div>\n\
<div class=\"line\"><a name=\"l00285\"></a><span class=\"lineno\">  285</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00286\"></a><span class=\"lineno\">  286</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00288\"></a><span class=\"lineno\">  288</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_screen_space_picker.html\">ScreenSpacePicker</a> *GetScreenSpacePicker() <span class=\"keyword\">const</span>; </div>\n\
<div class=\"line\"><a name=\"l00289\"></a><span class=\"lineno\">  289</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00291\"></a><span class=\"lineno\">  291</span>&#160;    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> Aim() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00292\"></a><span class=\"lineno\">  292</span>&#160;    </div>\n\
<div class=\"line\"><a name=\"l00297\"></a><span class=\"lineno\">  297</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetAim(</div>\n\
<div class=\"line\"><a name=\"l00298\"></a><span class=\"lineno\">  298</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">Vector</a> &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a>     </div>\n\
<div class=\"line\"><a name=\"l00299\"></a><span class=\"lineno\">  299</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00300\"></a><span class=\"lineno\">  300</span>&#160;    </div>\n\
<div class=\"line\"><a name=\"l00302\"></a><span class=\"lineno\">  302</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> Orthographic() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00303\"></a><span class=\"lineno\">  303</span>&#160;    </div>\n\
<div class=\"line\"><a name=\"l00305\"></a><span class=\"lineno\">  305</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetOrthographic(</div>\n\
<div class=\"line\"><a name=\"l00306\"></a><span class=\"lineno\">  306</span>&#160;        <span class=\"keywordtype\">bool</span> isOrtho        </div>\n\
<div class=\"line\"><a name=\"l00307\"></a><span class=\"lineno\">  307</span>&#160;        );</div>\n\
<div class=\"line\"><a name=\"l00308\"></a><span class=\"lineno\">  308</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00310\"></a><span class=\"lineno\">  310</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> IsDirty( <span class=\"keywordtype\">void</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00311\"></a><span class=\"lineno\">  311</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00313\"></a><span class=\"lineno\">  313</span>&#160;    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> SetDirty( <span class=\"keywordtype\">bool</span> bDirty );</div>\n\
<div class=\"line\"><a name=\"l00314\"></a><span class=\"lineno\">  314</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00315\"></a><span class=\"lineno\">  315</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00316\"></a><span class=\"lineno\">  316</span>&#160;}; <span class=\"comment\">// end of namespace mudbox</span></div>\n\
<div class=\"line\"><a name=\"l00317\"></a><span class=\"lineno\">  317</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00318\"></a><span class=\"lineno\">  318</span>&#160;</div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_vector_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_vector.html\">mudbox::Vector</a></div><div class=\"ttdoc\">Represents a 3D vector or point with S23E8 floating point elements. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/math_8h_source.html#l00035\">math.h:35</a></div></div>\n\
<div class=\"ttc\" id=\"structmudbox_1_1_surface_point_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/structmudbox_1_1_surface_point.html\">mudbox::SurfacePoint</a></div><div class=\"ttdoc\">Describes a location somewhere on the surface of a Mesh. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/mesh_8h_source.html#l00340\">mesh.h:340</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_matrix_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_matrix.html\">mudbox::Matrix</a></div><div class=\"ttdoc\">This class represents a 4x4 transformation matrix. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/math_8h_source.html#l01122\">math.h:1122</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_group_node_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_group_node.html\">mudbox::GroupNode</a></div><div class=\"ttdoc\">This is the base class for all nodes that are transformable objects in the Mudbox scene...</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/transformation_8h_source.html#l00022\">transformation.h:22</a></div></div>\n\
<div class=\"ttc\" id=\"_g_lee_8h_html_a14cfbe2fc2234f5504618905b69d1e06\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/_g_lee_8h.html#a14cfbe2fc2234f5504618905b69d1e06\">v</a></div><div class=\"ttdeci\">const GLdouble * v</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/_g_lee_8h_source.html#l01174\">GLee.h:1174</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_screen_space_picker_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_screen_space_picker.html\">mudbox::ScreenSpacePicker</a></div><div class=\"ttdoc\">ScreenSpacePicker objects are used to translate the user action of clicking in the view into a picked...</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/mesh_8h_source.html#l01229\">mesh.h:1229</a></div></div>\n\
<div class=\"ttc\" id=\"classmudbox_1_1_camera_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/classmudbox_1_1_camera.html\">mudbox::Camera</a></div><div class=\"ttdoc\">Represents a camera (point of view) in a Mudbox scene. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/camera_8h_source.html#l00020\">camera.h:20</a></div></div>\n\
<div class=\"ttc\" id=\"namespacemudbox_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/namespacemudbox.html\">mudbox</a></div><div class=\"ttdoc\">Class: ConvolutionKernel. </div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/array_8h_source.html#l00015\">array.h:15</a></div></div>\n\
<div class=\"ttc\" id=\"node_8h_html_a431009564592a24e5f46f5df421131a1\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/node_8h.html#a431009564592a24e5f46f5df421131a1\">DECLARE_CLASS</a></div><div class=\"ttdeci\">#define DECLARE_CLASS</div><div class=\"ttdoc\">This macro should be used in declaration of classes which are inherited from the Node class (or any d...</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/node_8h_source.html#l00091\">node.h:91</a></div></div>\n\
<div class=\"ttc\" id=\"dllinterface_8h_html_aecc26481a5bdb4445048f4fb0f3bb417\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/dllinterface_8h.html#aecc26481a5bdb4445048f4fb0f3bb417\">MBDLL_DECL</a></div><div class=\"ttdeci\">#define MBDLL_DECL</div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/dllinterface_8h_source.html#l00035\">dllinterface.h:35</a></div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";