var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>phonon/phonondefs.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'phonondefs_8h.html\', tocPrefix);\n\
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
            <h1>phonon/phonondefs.h File Reference</h1>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">phonondefs.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"phonondefs_8h.html#define-members\">Macros</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"textblock\"><code>#include &lt;QtCore/QtGlobal&gt;</code><br>\n\
<code>#include &quot;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonon__export_8h_source.html\">phonon_export.h</a>&quot;</code><br>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"define-members\"></a>\n\
Macros</h2></td></tr>\n\
<tr class=\"memitem:a3d261f04ae9240e1d38c477d3397f328\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h.html#a3d261f04ae9240e1d38c477d3397f328\">K_DECLARE_PRIVATE</a>(Class)</td></tr>\n\
<tr class=\"separator:a3d261f04ae9240e1d38c477d3397f328\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa475969f0fc80b52a915dfea822dbf71\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h.html#aa475969f0fc80b52a915dfea822dbf71\">PHONON_ABSTRACTBASE</a>(classname)</td></tr>\n\
<tr class=\"separator:aa475969f0fc80b52a915dfea822dbf71\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acf485bc1c779fe924f44f7081789ced0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h.html#acf485bc1c779fe924f44f7081789ced0\">PHONON_OBJECT</a>(classname)</td></tr>\n\
<tr class=\"separator:acf485bc1c779fe924f44f7081789ced0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9240e3331b7240727f54b1a4966efecd\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h.html#a9240e3331b7240727f54b1a4966efecd\">PHONON_HEIR</a>(classname)</td></tr>\n\
<tr class=\"separator:a9240e3331b7240727f54b1a4966efecd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Macro Definition Documentation</h2>\n\
<a class=\"anchor\" id=\"a3d261f04ae9240e1d38c477d3397f328\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define K_DECLARE_PRIVATE</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">Class</td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<b>Value:</b><div class=\"fragment\"><div class=\"line\"><span class=\"keyword\">inline</span> Class##Private* k_func() { <span class=\"keywordflow\">return</span> <span class=\"keyword\">reinterpret_cast&lt;</span>Class##Private *<span class=\"keyword\">&gt;</span>(k_ptr); } \\</div>\n\
<div class=\"line\">    inline <span class=\"keyword\">const</span> Class##Private* k_func()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> <span class=\"keyword\">reinterpret_cast&lt;</span><span class=\"keyword\">const </span>Class##Private *<span class=\"keyword\">&gt;</span>(k_ptr); } \\</div>\n\
<div class=\"line\">    friend <span class=\"keyword\">class </span>Class##Private;</div>\n\
</div><!-- fragment -->\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h_source.html#l00046\">46</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h_source.html\">phonondefs.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa475969f0fc80b52a915dfea822dbf71\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define PHONON_ABSTRACTBASE</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">classname</td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<b>Value:</b><div class=\"fragment\"><div class=\"line\"><span class=\"keyword\">protected</span>: \\ \\</div>\n\
<div class=\"line\">    classname(classname ## Private &amp;dd, <a class=\"code\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *parent); \\</div>\n\
<div class=\"line\">private:</div>\n\
<div class=\"ttc\" id=\"class_q_object_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobject_8h_source.html#l00111\">qobject.h:111</a></div></div>\n\
</div><!-- fragment --><p>Used in class declarations to provide the needed functions. This is used for abstract base classes.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">classname</td><td>The Name of the class this macro is used for.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<p>Example: </p><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;class AbstractEffect : public QObject</div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;  Q _OBJECT</div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;  Q_PROPERTY(int propertyA READ propertyA WRITE setPropertyA)</div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;  PHONON_ABSTRACTBASE(AbstractEffect)</div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;  public:</div>\n\
<div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;    int propertyA() const;</div>\n\
<div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;    void setPropertyA(int);</div>\n\
<div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;};</div>\n\
</div><!-- fragment --><dl class=\"section see\"><dt>See also</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h.html#acf485bc1c779fe924f44f7081789ced0\">PHONON_OBJECT</a> </dd>\n\
<dd>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h.html#a9240e3331b7240727f54b1a4966efecd\">PHONON_HEIR</a> </dd></dl>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h_source.html#l00074\">74</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h_source.html\">phonondefs.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acf485bc1c779fe924f44f7081789ced0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define PHONON_OBJECT</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">classname</td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<b>Value:</b><div class=\"fragment\"><div class=\"line\"><span class=\"keyword\">public</span>: \\ \\</div>\n\
<div class=\"line\">    classname(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *parent = 0); \\</div>\n\
<div class=\"line\">private:</div>\n\
<div class=\"ttc\" id=\"class_q_object_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobject_8h_source.html#l00111\">qobject.h:111</a></div></div>\n\
</div><!-- fragment --><p>Used in class declarations to provide the needed functions. This is used for classes that inherit <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> directly.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">classname</td><td>The Name of the class this macro is used for.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<p>Example: </p><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;class EffectSettings : public QObject</div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;  Q _OBJECT</div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;  Q_PROPERTY(int propertyA READ propertyA WRITE setPropertyA)</div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;  PHONON_OBJECT(EffectSettings)</div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;  public:</div>\n\
<div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;    int propertyA() const;</div>\n\
<div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;    void setPropertyA(int);</div>\n\
<div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;};</div>\n\
</div><!-- fragment --><dl class=\"section see\"><dt>See also</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h.html#aa475969f0fc80b52a915dfea822dbf71\">PHONON_ABSTRACTBASE</a> </dd>\n\
<dd>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h.html#a9240e3331b7240727f54b1a4966efecd\">PHONON_HEIR</a> </dd></dl>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h_source.html#l00108\">108</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h_source.html\">phonondefs.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9240e3331b7240727f54b1a4966efecd\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define PHONON_HEIR</td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">&#160;</td>\n\
          <td class=\"paramname\">classname</td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<b>Value:</b><div class=\"fragment\"><div class=\"line\"><span class=\"keyword\">public</span>: \\ \\</div>\n\
<div class=\"line\">    classname(<a class=\"code\" href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a> *parent = 0); \\</div>\n\
<div class=\"ttc\" id=\"class_q_object_html\"><div class=\"ttname\"><a href=\"#!/url=./cpp_ref/class_q_object.html\">QObject</a></div><div class=\"ttdef\"><b>Definition:</b> <a href=\"#!/url=./cpp_ref/qobject_8h_source.html#l00111\">qobject.h:111</a></div></div>\n\
</div><!-- fragment --><p>Used in class declarations to provide the needed functions. This is used for classes that inherit another <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_phonon.html\" title=\"The KDE Multimedia classes. \">Phonon</a> object.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">classname</td><td>The Name of the class this macro is used for.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<p>Example: </p><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;class ConcreteEffect : public AbstractEffect</div>\n\
<div class=\"line\"><a name=\"l00002\"></a><span class=\"lineno\">    2</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00003\"></a><span class=\"lineno\">    3</span>&#160;  Q _OBJECT</div>\n\
<div class=\"line\"><a name=\"l00004\"></a><span class=\"lineno\">    4</span>&#160;  Q_PROPERTY(int propertyB READ propertyB WRITE setPropertyB)</div>\n\
<div class=\"line\"><a name=\"l00005\"></a><span class=\"lineno\">    5</span>&#160;  PHONON_HEIR(ConcreteEffect)</div>\n\
<div class=\"line\"><a name=\"l00006\"></a><span class=\"lineno\">    6</span>&#160;  public:</div>\n\
<div class=\"line\"><a name=\"l00007\"></a><span class=\"lineno\">    7</span>&#160;    int propertyB() const;</div>\n\
<div class=\"line\"><a name=\"l00008\"></a><span class=\"lineno\">    8</span>&#160;    void setPropertyB(int);</div>\n\
<div class=\"line\"><a name=\"l00009\"></a><span class=\"lineno\">    9</span>&#160;};</div>\n\
</div><!-- fragment --><dl class=\"section see\"><dt>See also</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h.html#aa475969f0fc80b52a915dfea822dbf71\">PHONON_ABSTRACTBASE</a> </dd>\n\
<dd>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h.html#acf485bc1c779fe924f44f7081789ced0\">PHONON_OBJECT</a> </dd></dl>\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h_source.html#l00139\">139</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/phonondefs_8h_source.html\">phonondefs.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
\n\
<p><a href=\"#!/url=./cpp_ref/phonondefs_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";