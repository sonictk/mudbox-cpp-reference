var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Member List</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_shared_pointer-members.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Member List</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
<div class=\"title\">QSharedPointer&lt; T &gt; Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#a9767611f8886aa3a43a01d4d9a529938\">Basic</a>(T *ptr=0)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#a602e1746db1d61b109dab20375dd9c8f\">Basic</a>(Qt::Initialization)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#ac8bb3912a3ce86b15842e79d0b421204\">clear</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#a13c57dab17e2c903cadfa5e35ba84064\">const_pointer</a> typedef</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#afdb67657e63a66ed3fae7b0c9fd81b48\">const_reference</a> typedef</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#a85f70738b9290c0955679659a6a39b52\">constCast</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#a93b6735a2f94359823e064d7b61fbce3\">create</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#af05b8dac609b28b04cf4034c18c8faf3\">d</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#aaaaa205cc058c6b94e3346cb51ebd01c\">data</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#a446567930e4c9955f1f97172e9e39782\">Data</a> typedef</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#a7c4f9fc5461e804fab5177ac9d731da3\">deref</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#aa694fffa198be38e0016462c467845fb\">deref</a>(Data *d, T *value)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#a3e4e2cc8c6f17ec0affa4c223cea4e20\">difference_type</a> typedef</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#a812f3063901eb206fc2d52c1f8cd6c6b\">dynamicCast</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#ae37fb942067e67c711beb897e7b7b5de\">element_type</a> typedef</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#aca95a43b5aea3776bc8289da02d9aaaa\">ExternalRefCount</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#a5a370ed53090bb8b70ee10087f137170\">ExternalRefCount</a>(Qt::Initialization i)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#ac22df975b725f1dabcdd4494bf7c35f8\">ExternalRefCount</a>(T *ptr)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#a96ec114edfa79f3084b05b294a4f2409\">ExternalRefCount</a>(T *ptr, Deleter deleter)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#a9b28a5e4d607b1e88bb3786065f4e15b\">ExternalRefCount</a>(const ExternalRefCount&lt; T &gt; &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#a3e64fcfcbca0e0b6794db1158e7d4e1a\">ExternalRefCount</a>(const ExternalRefCount&lt; X &gt; &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#abb0256986cd3798ad7f7ccd9cb8419f5\">internalConstruct</a>(T *ptr)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#a97ceca4e46b90d3f3ac2f350036f7031\">internalConstruct</a>(T *ptr, Deleter deleter)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#a1f1cf3b1c8f9ef70b2d00d9802bcb640\">internalCopy</a>(const ExternalRefCount&lt; X &gt; &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#a02ac9a26ea33e027f2f1ededb00671af\">internalCreate</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#a054251590be671d36e7e78ec634ed731\">internalFinishConstruction</a>(T *ptr)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#ae6f9486067486ae65cdc2fe525bae1e8\">internalSet</a>(Data *o, T *actual)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#a455c5ae679bbba4107901e8deb7e56f3\">internalSwap</a>(ExternalRefCount &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#ac02f2a4d7312eb91f40980adfd4e31b2\">isNull</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#af7263b065850e14a536501c2714ad1eb\">objectCast</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#a341e75c4ff7ac7c14c0c1dfec6d9c9f2\">operator RestrictedBool</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#ac8b1d32dbd52d431450c70b151cfa205\">operator!</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#abcc36ef133f26e7e3145b785df23eb18\">operator*</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#ac0ddd007dfcfef3121f74d0665dfd0cd\">operator-&gt;</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#a94f8fd6e24bb9cae0f0eeecf95923bb5\">operator=</a>(const QSharedPointer&lt; T &gt; &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#a1cba4bdc09d7f397eade8af4ad5dc2d9\">operator=</a>(const QSharedPointer&lt; X &gt; &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#a53eec1f283c8645c7dc801440f6c5335\">operator=</a>(const QWeakPointer&lt; X &gt; &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#ad25b518036b886d8f35a3c059301d007\">pointer</a> typedef</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#a7ebaafcd708527b39a21a69862f7f0ff\">QSharedPointer</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#a98671710ad01bd0d8bdf667f727d9451\">QSharedPointer</a>(T *ptr)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">explicit</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#a895fc82e9e7396187d941ad33f144027\">QSharedPointer</a>(T *ptr, Deleter d)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#aed1b8b613a6ce00f17be55fcce96b2e6\">QSharedPointer</a>(const QSharedPointer&lt; T &gt; &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#a3e182242e40e2b1da45e56366ee27ffd\">QSharedPointer</a>(const QSharedPointer&lt; X &gt; &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#af49e068f8e298aab71a5cce3aeb887bd\">QSharedPointer</a>(const QWeakPointer&lt; X &gt; &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#a031b3f8db2021b4febcc7b221cb1f464\">QSharedPointer</a>(Qt::Initialization i)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">explicit</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#af1a751325466c69f40d1ab8e3146a207\">ref</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#abe8933d436779a43cb5c1896ff5f2918\">reference</a> typedef</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#ab3fead35bb2f4639842bf4969f78e85d\">staticCast</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#aae63d1822973cdfa33e96f92a4c59a66\">swap</a>(QSharedPointer &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html#a409a017e759832908e41f6173c12620e\">toWeakRef</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_shared_pointer.html\">QSharedPointer&lt; T &gt;</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#a685b7a70f0ae1f2881cf8937d951c3b1\">Type</a> typedef</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#a8f9376121609317caccd24af8495577c\">value</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html#a265a253612b46abed17c61b0a5e5ce30\">value_type</a> typedef</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_basic.html\">Basic&lt; T &gt;</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html#a697bc2730f84f8f96e9d47da7c15fc07\">~ExternalRefCount</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_shared_pointer_1_1_external_ref_count.html\">ExternalRefCount&lt; T &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">protected</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";