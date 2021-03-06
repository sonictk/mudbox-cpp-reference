var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>FrameCounter/FrameCounter.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_frame_counter_2_frame_counter_8cpp-example.html\', tocPrefix);\n\
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
            <h1>FrameCounter/FrameCounter.cpp</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
<div class=\"title\">FrameCounter/FrameCounter.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2009 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CREATED: August 2009</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;FrameCounter.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This macro provides some information about the plugin to Mudbox. It also</span></div>\n\
<div class=\"line\"><span class=\"comment\">// specifies a function that will be called after all the plug-ins are loaded</span></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#afa2df46a730e8fc8bceb9410c0ff6838\">MB_PLUGIN</a>( <span class=\"stringliteral\">&quot;FrameCounter&quot;</span>, <span class=\"stringliteral\">&quot;Sample plugin counts frames&quot;</span>, <span class=\"stringliteral\">&quot;Autodesk&quot;</span>, <span class=\"stringliteral\">&quot;http://www.mudbox3d.com&quot;</span>, FrameCounter::Initializer );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">CounterNode* FrameCounter::s_pCounter = NULL;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> FrameCounter::Initializer()</div>\n\
<div class=\"line\"><span class=\"comment\">// This is called after the plug-ins are all loaded.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Add two menu items, to the Mudbox interface.</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Add two menu items and a sub-menu with three items to the Edit menu</span></div>\n\
<div class=\"line\">    <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Interface()-&gt;AddCallbackMenuItem(<a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_interface.html#a8c68a0ac0b533f6b4dcff0a3c765200a\">mudbox::Interface::menuPlugins</a>, <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a1c01d8792db2181fbe1987637b31790f\">QString::null</a>, tr(<span class=\"stringliteral\">&quot;Start Counting Frames&quot;</span>), FrameCounter::StartCounting);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Interface()-&gt;AddCallbackMenuItem(<a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_interface.html#a8c68a0ac0b533f6b4dcff0a3c765200a\">mudbox::Interface::menuPlugins</a>, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#a1c01d8792db2181fbe1987637b31790f\">QString::null</a>, tr(<span class=\"stringliteral\">&quot;Stop Counting Frames&quot;</span>),  FrameCounter::StopCounting);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> FrameCounter::StartCounting()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( s_pCounter == NULL )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Create a new counter object.  This counter object will attach itself to to </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// Mudbox&#39;s frame callback, so it will receive an event each time a frame is rendered.</span></div>\n\
<div class=\"line\">        s_pCounter = <span class=\"keyword\">new</span> CounterNode;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Display a message on the HUD</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Interface()-&gt;HUDMessageShow(tr(<span class=\"stringliteral\">&quot;Frame count has started.&quot;</span>), <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_interface.html#a26e31204f799b1a1db85565fc5a98b99a6d1628d017e93eb59b9a74b0cdc9d904\">mudbox::Interface::HUDmsgFade</a> );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> FrameCounter::StopCounting()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( s_pCounter != NULL )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Tell the user how many frames have been displayed</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;Interface()-&gt;HUDMessageShow( tr(<span class=\"stringliteral\">&quot;Number of frames rendered: %1&quot;</span>).arg(s_pCounter-&gt;m_iNumberOfFrames), <a class=\"code\" href=\"#!/url=./cpp_ref/classmudbox_1_1_interface.html#a26e31204f799b1a1db85565fc5a98b99a6d1628d017e93eb59b9a74b0cdc9d904\">mudbox::Interface::HUDmsgFade</a> );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">        <span class=\"comment\">// delete the counter node, since it is no longer required.</span></div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> s_pCounter;</div>\n\
<div class=\"line\">        s_pCounter = NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"comment\">//---------------------------------------</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">CounterNode::CounterNode()      <span class=\"comment\">// constructor</span></div>\n\
<div class=\"line\">:   m_iNumberOfFrames(0)        <span class=\"comment\">// set the counter to 0</span></div>\n\
<div class=\"line\">,   m_eEachFrame(this)          <span class=\"comment\">// eventGate must be initialized with the &#39;owning&#39; node</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// attach the event member of this class to Mudbox&#39;s &#39;frame&#39; event.  That will</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// cause the &#39;OnEvent&#39; method to get called each time mudbox renders a frame.</span></div>\n\
<div class=\"line\">    m_eEachFrame.Connect( <a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;ViewPort()-&gt;FrameEvent );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> CounterNode::OnEvent( <span class=\"keyword\">const</span> EventGate &amp;cEvent )</div>\n\
<div class=\"line\"><span class=\"comment\">// This method will be called each time an event member is triggered</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// if this is the frame event (there could be other event objects in this class)</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( cEvent == m_eEachFrame ) </div>\n\
<div class=\"line\">    {    </div>\n\
<div class=\"line\">        m_iNumberOfFrames++;          <span class=\"comment\">// count the frame</span></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";