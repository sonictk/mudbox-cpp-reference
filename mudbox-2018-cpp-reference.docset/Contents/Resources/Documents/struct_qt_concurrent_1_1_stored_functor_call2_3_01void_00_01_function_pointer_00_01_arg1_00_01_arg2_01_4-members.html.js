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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_qt_concurrent_1_1_stored_functor_call2_3_01void_00_01_function_pointer_00_01_arg1_00_01_arg2_01_4-members.html\', tocPrefix);\n\
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
<div class=\"title\">StoredFunctorCall2&lt; void, FunctionPointer, Arg1, Arg2 &gt; Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_stored_functor_call2_3_01void_00_01_function_pointer_00_01_arg1_00_01_arg2_01_4.html\">StoredFunctorCall2&lt; void, FunctionPointer, Arg1, Arg2 &gt;</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_stored_functor_call2_3_01void_00_01_function_pointer_00_01_arg1_00_01_arg2_01_4.html#a1c0b4b9cd52519600f3c0d8b1779119d\">arg1</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_stored_functor_call2_3_01void_00_01_function_pointer_00_01_arg1_00_01_arg2_01_4.html\">StoredFunctorCall2&lt; void, FunctionPointer, Arg1, Arg2 &gt;</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_stored_functor_call2_3_01void_00_01_function_pointer_00_01_arg1_00_01_arg2_01_4.html#a293d8ec7e6e3e7d9352f573c219c41ef\">arg2</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_stored_functor_call2_3_01void_00_01_function_pointer_00_01_arg1_00_01_arg2_01_4.html\">StoredFunctorCall2&lt; void, FunctionPointer, Arg1, Arg2 &gt;</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_runnable.html#a64c0f7f7f99c10922f570668b10acb2f\">autoDelete</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_runnable.html\">QRunnable</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a02d5fa6b14e221f3012a794b905be166\">cancel</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a5d74787dedbc4e11c1ab15bf487e61f8a29b1ab762ed2db50bedb77ec99994924\">Canceled</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html#a8441c7d625cd1e05dc0458e94fdc1578\">canceledResult</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html\">QFutureInterface&lt; void &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#af67925e01b3d03900059be99e1ffc1c1\">exceptionStore</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a099142d807e414dbd1e54a35efe2b71c\">expectedResultCount</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a5d74787dedbc4e11c1ab15bf487e61f8ab68c130eb6caa378c2c394e9054bbb63\">Finished</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_stored_functor_call2_3_01void_00_01_function_pointer_00_01_arg1_00_01_arg2_01_4.html#ac34aeb463cc77ac7d14421a2cffa2c1f\">function</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_stored_functor_call2_3_01void_00_01_function_pointer_00_01_arg1_00_01_arg2_01_4.html\">StoredFunctorCall2&lt; void, FunctionPointer, Arg1, Arg2 &gt;</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html#a897b836c5ce2cd050247a8b6cf2f200a\">future</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html\">QFutureInterface&lt; void &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a571fc64f0229d1edca02f91629e110f5\">isCanceled</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#aa75a8d056ba4d5ba219391fcda7a526d\">isFinished</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a0eaf52e4ed386823bd1051f44d511fe6\">isPaused</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a918a3583794003aef5e8123097fdd0d4\">isProgressUpdateNeeded</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a04097ba4a296bdc8a2a51cb47429d6e5\">isResultReadyAt</a>(int index) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#aa514c13c962ad8caf9dbebe84e1f6b1d\">isRunning</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a4558af60ed2b596bab378a56106a23ff\">isStarted</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a02e08b4c4419f7a0aaa03d198ce6ead5\">isThrottled</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a12654db956b219a861073d19d24f1f55\">mutex</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a5d74787dedbc4e11c1ab15bf487e61f8a3e6ae43560d675d2e63a69271844efee\">NoState</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a699c88efe5f8dbc5137fc1abcf8a7fb4\">operator!=</a>(const QFutureInterfaceBase &amp;other) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html#af0b4b5dcc164e2fa22a5d19dab8cc002\">operator=</a>(const QFutureInterface&lt; void &gt; &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html\">QFutureInterface&lt; void &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#aa758f3c7eda6ead19ed77d0043d85143\">QFutureInterfaceBase::operator=</a>(const QFutureInterfaceBase &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#ac5f2875a0aef138a7ff0d0b04392bfa1\">operator==</a>(const QFutureInterfaceBase &amp;other) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a5d74787dedbc4e11c1ab15bf487e61f8a7038380f2ccd1d2edf36a73fd4c2d068\">Paused</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#adcb65166568a7ac92a372c046d46b684\">progressMaximum</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a6683bee9a2a4022e01575f6473cb30ab\">progressMinimum</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a79d615245f53ec65048f7600ce196484\">progressText</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a61665d7757b320ba152ad0c55bed9a23\">progressValue</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html#acc8086ee006afd28d1ee76f51c1a86e9\">QFutureInterface</a>(State initialState=NoState)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html\">QFutureInterface&lt; void &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html#a6da379b51717c68f0b9ef486bd53d55d\">QFutureInterface</a>(const QFutureInterface&lt; void &gt; &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html\">QFutureInterface&lt; void &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#ada34de836950d38a8afdfc9434f63f1e\">QFutureInterfaceBase</a>(State initialState=NoState)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a071b754b928fda0773b13af10cbd6ec6\">QFutureInterfaceBase</a>(const QFutureInterfaceBase &amp;other)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_runnable.html#acc3822940673c749d982f948f1fedfe7\">QRunnable</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_runnable.html\">QRunnable</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a471ba24f0daddb95a82fcc71a1254f84\">queryState</a>(State state) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a9d8e703014cf4f4f97dee0f3cf6a2d1a\">referenceCountIsOne</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a1b6e0cc119f1deab03d949dcb2684811\">reportCanceled</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#aa5096c96ce8938a0a9ed18d78cc07c0e\">reportException</a>(const QtConcurrent::Exception &amp;e)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html#aa8bdfb9ef8084785aca0f0fa7e024f1c\">reportFinished</a>(void *=0)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html\">QFutureInterface&lt; void &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#aac408f5ce949a53b22a129e708ebe137\">QFutureInterfaceBase::reportFinished</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html#ada06aadc90f4826319c9b0f98755472f\">reportResult</a>(const void *, int)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html\">QFutureInterface&lt; void &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html#a7cb6895ff7bd89bbd1442454dfc0dfc9\">reportResults</a>(const QVector&lt; void &gt; &amp;, int)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_3_01void_01_4.html\">QFutureInterface&lt; void &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a13f0f3815d00efc51b763a3f1371bb66\">reportResultsReady</a>(int beginIndex, int endIndex)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#acf7a5fbfd423f98c1fdd0900b0bf06f5\">reportStarted</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a29e2830aa63b07d3ca154e1410c36f3c\">resultCount</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a1e43b3493891a1a022fee069bda9173b\">resultStoreBase</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a9030ce99313bcc38893e1cf223ed8171\">resultStoreBase</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_run_function_task_3_01void_01_4.html#a13a43e6d814de94978c515cb084873b1\">run</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_run_function_task_3_01void_01_4.html\">RunFunctionTask&lt; void &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_stored_functor_call2_3_01void_00_01_function_pointer_00_01_arg1_00_01_arg2_01_4.html#a70f8eedaee07b69c995789224e208a8a\">runFunctor</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_stored_functor_call2_3_01void_00_01_function_pointer_00_01_arg1_00_01_arg2_01_4.html\">StoredFunctorCall2&lt; void, FunctionPointer, Arg1, Arg2 &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a5d74787dedbc4e11c1ab15bf487e61f8a2f5f2c4a8c4f4f0519d503dcdfbf55cb\">Running</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_runnable.html#a1c29746a02a2a798fa378903688df61f\">setAutoDelete</a>(bool _autoDelete)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_runnable.html\">QRunnable</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#abf6dde4a6d12f84376ac06691bf5e074\">setExpectedResultCount</a>(int resultCount)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a978dd3b5e11cdb3107a3c5c8bc144d4a\">setFilterMode</a>(bool enable)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a085d8c64bc0f15aa23e14d785d73bcf6\">setPaused</a>(bool paused)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#adfc5e5d29e7702a981515d6450c8fabb\">setProgressRange</a>(int minimum, int maximum)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#afaebe5e653a57352bc147b13bcf4d342\">setProgressValue</a>(int progressValue)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a2366fdb9a2872091123a1342ca608c03\">setProgressValueAndText</a>(int progressValue, const QString &amp;progressText)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a839485dd45288ff6e38c8e0e6ec973e1\">setRunnable</a>(QRunnable *runnable)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a161413beaff122ce7f33783cb0808383\">setThrottled</a>(bool enable)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_run_function_task_base.html#a97fe24b0add9ade785ef509a718fe34d\">start</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_qt_concurrent_1_1_run_function_task_base.html\">RunFunctionTaskBase&lt; void &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a5d74787dedbc4e11c1ab15bf487e61f8ac37ab8a82be99e808fa5ecf053075b08\">Started</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a5d74787dedbc4e11c1ab15bf487e61f8\">State</a> enum name</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_stored_functor_call2_3_01void_00_01_function_pointer_00_01_arg1_00_01_arg2_01_4.html#a349fd831866762d67a79914c95283cbb\">StoredFunctorCall2</a>(FunctionPointer _function, const Arg1 &amp;_arg1, const Arg2 &amp;_arg2)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_qt_concurrent_1_1_stored_functor_call2_3_01void_00_01_function_pointer_00_01_arg1_00_01_arg2_01_4.html\">StoredFunctorCall2&lt; void, FunctionPointer, Arg1, Arg2 &gt;</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a5d74787dedbc4e11c1ab15bf487e61f8aa363532e8683f725155d62c698d650b1\">Throttled</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a12697d4123d67f0c580f82f0271b6c16\">togglePaused</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#aae0601e3ff5ccb261a0731614bdad584\">waitForFinished</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a6420b6685fd980525ddc141aca234997\">waitForNextResult</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a7677fefd58c74e979f54ee3c5de0cd71\">waitForResult</a>(int resultIndex)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#a6cfd97aaf204be66d0c6297e58b5495a\">waitForResume</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html#ab46507e1389576813379dc774517061f\">~QFutureInterfaceBase</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_future_interface_base.html\">QFutureInterfaceBase</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_runnable.html#a5289220d9cad885dcd6ef85dcc3f75f0\">~QRunnable</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_runnable.html\">QRunnable</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";