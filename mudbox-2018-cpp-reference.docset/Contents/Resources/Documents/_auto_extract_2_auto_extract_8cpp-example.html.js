var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>AutoExtract/AutoExtract.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_auto_extract_2_auto_extract_8cpp-example.html\', tocPrefix);\n\
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
            <h1>AutoExtract/AutoExtract.cpp</h1>\n\
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
<div class=\"title\">AutoExtract/AutoExtract.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#include &quot;AutoExtract.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// The single instance of this class will sit in the memory for the whole session, and watch for map extraction nodes.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// When it finds a map extraction node with a specific name, it will execute it, then exit mudbox.</span></div>\n\
<div class=\"line\">AutoExtract g_cInstance;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/node_8h.html#a1d51ad935ab5d26fe95dff62601b602c\">IMPLEMENT_CLASS</a>( AutoExtract, Node, <span class=\"stringliteral\">&quot;autoextract&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">AutoExtract::AutoExtract( <span class=\"keywordtype\">void</span> ) :</div>\n\
<div class=\"line\">    FileEvent( this )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// The FileEvent attribute of this node is connected to Mudbox&#39;s main FileEvent node.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// When anything happens involving files, this node will be notified, and the OnNodeEvent</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// method will be called.</span></div>\n\
<div class=\"line\">    FileEvent.Connect( <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#ae9df9ee935ec6744f98a1585d9db01df\">Kernel</a>()-&gt;FileEvent );</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> AutoExtract::OnNodeEvent( <span class=\"keyword\">const</span> Attribute &amp;<a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#ac8729153468b5dcf13f971b21d84d4e5\">a</a>, <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a8d88d2a841f889dace76ffcd8d6b06da\">NodeEventType</a> <a class=\"code\" href=\"#!/url=./cpp_ref/_g_lee_8h.html#a653819996e713edf9c01a5b564199189\">t</a> )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// This method is called when any kind of event happens to any attribute of this node.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// So we need to check to make sure it is the right kind of event on the right</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// attribute.  We are interested in the &quot;post-read&quot; event, which is called after any kind of file</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// is read into Mudbox.  We look at the file name to be sure it is a scene (.mud) file, because</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// this same event will be triggered when Mudbox reads image files, stamps, stencils, etc.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( t == <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a8d88d2a841f889dace76ffcd8d6b06daa274758890f9a27906be7336f4b8e4780\">etValueChanged</a> &amp;&amp; a == FileEvent &amp;&amp; FileEvent.Value() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( FileEvent-&gt;m_eType == FileEventNotifier::typePostRead &amp;&amp; FileEvent-&gt;m_sFileName.right( 4 ) == <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/i18n_8h.html#a1b7f65502ea5b58cca15f85d9e78ca06\">NTRQ</a>( <span class=\"stringliteral\">&quot;.mud&quot;</span> ) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// We could go ahead here and do the extraction, but instead we are going to</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// request a &quot;deferred&quot; event, just in case Mudbox is still in the middle of</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// setting up the new scene.  When you do this, the same event is sent back</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// when Mudbox is idle, with &quot;t&quot; set to &quot;etDeferred&quot;.  This allows you to </span></div>\n\
<div class=\"line\">            <span class=\"comment\">// process the event when everything has settled down.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            RequestDeferredEvent( FileEvent );</div>\n\
<div class=\"line\">        };</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// If we have received the deferred event, it is time to extract the maps.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( t == <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespacemudbox.html#a8d88d2a841f889dace76ffcd8d6b06daae018520c41749d40418c6d9dcd72fde9\">etDeferred</a> &amp;&amp; a == FileEvent )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> bHadExtraction = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Look at all the nodes in the mudbox scene, and find the map extraction nodes.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// (An &quot;operation&quot; in the UI is stored as a Node in the scene.)</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( Node *pNode = Node::First(); pNode; pNode = pNode-&gt;Next() )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( pNode-&gt;IsKindOf( MapExtractor::StaticClass() ) )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                MapExtractor *pE = <span class=\"keyword\">dynamic_cast&lt;</span>MapExtractor *<span class=\"keyword\">&gt;</span>( pNode );</div>\n\
<div class=\"line\">                <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/mudbox_8h.html#a99d9d5b4fd434c7a38c2add8217e4c14\">MB_SAFELY</a>( pE )</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <span class=\"comment\">// Look for the string &quot;autoextract&quot; in the node&#39;s name, and disregard</span></div>\n\
<div class=\"line\">                    <span class=\"comment\">// any nodes that do not contain it.</span></div>\n\
<div class=\"line\">                    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html\">QString</a> sName = pE-&gt;Name();</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">if</span> ( sName.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_string.html#aaa6704aa527a375c50ac92dbb25b3a5a\">indexOf</a>( <span class=\"stringliteral\">&quot;autoextract&quot;</span> ) != -1 )</div>\n\
<div class=\"line\">                    {</div>\n\
<div class=\"line\">                        <span class=\"comment\">// Execute the map extraction in silent mode, which means the UI will not be visible (but the progress bar will)</span></div>\n\
<div class=\"line\">                        <span class=\"comment\">// and there will be no confirmation dialog boxes that could stop it from running.</span></div>\n\
<div class=\"line\">                        pE-&gt;Execute( <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                        bHadExtraction = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">                    };</div>\n\
<div class=\"line\">                };</div>\n\
<div class=\"line\">            };</div>\n\
<div class=\"line\">        };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// If any extractions were done, quit mudbox.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( bHadExtraction )</div>\n\
<div class=\"line\">            <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_q_core_application.html#aaa27c80c06b25695d1038ef540fea485\">QCoreApplication::exit</a>();</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">};</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";