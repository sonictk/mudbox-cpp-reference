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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_q_palette-members.html\', tocPrefix);\n\
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
<div class=\"title\">QPalette Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aaa8c4d387c915f1966d18e387f07fb6da26bd8444261cc58df7a86753c79d2520\">Active</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aaa8c4d387c915f1966d18e387f07fb6da54991d225c58ce0af43461d4e9a82312\">All</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a3d510f7a92eec4339f343f876de29bbe\">AlternateBase</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a59cf64be1694f6b48639d3b730844f63\">alternateBase</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a49b67fba8870b2cddbd025273ceb87ff\">Background</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a64000d4c3b08a358de950738209290d8\">background</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288ad60985059c37381f4fbb8b7cb86cab46\">Base</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#af192ed879c4244d846644332c77d0fd9\">base</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a06dd3c9696e0a004995b37aa73f1eb2a\">BrightText</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a7750ba6e8affba6019015322ac9a7ddc\">brightText</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a740155613b96e31e4f5e602640c32bc2\">brush</a>(ColorGroup cg, ColorRole cr) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a7f1ec85c1fd9bf7d17a16ad5e536c250\">brush</a>(ColorRole cr) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#ab03f680e140e1f6f92fed2a12d1f08e7\">button</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a333e0ffafc59851e6c1261f251114560\">Button</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#acf48770654202ddf7209f8c5c744bf8a\">buttonText</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a0cc1b7e5c43622228f580cc507e52715\">ButtonText</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#ab6cda99d64c5cd957f063bc172f86aba\">cacheKey</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#ac9d74e54f34ade83eaf2363ea789b30c\">color</a>(ColorGroup cg, ColorRole cr) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a212ce778674cb44c1acb6251a8b58cde\">color</a>(ColorRole cr) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aaa8c4d387c915f1966d18e387f07fb6d\">ColorGroup</a> enum name</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288\">ColorRole</a> enum name</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aaa8c4d387c915f1966d18e387f07fb6da0650b2dde22d49f39e066ee117de1ac6\">Current</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a3cef48bcd4d217b24cdc36b0063ee9d0\">currentColorGroup</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288ab881c2fca9941a632de2b4af173a7906\">Dark</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a1fe7fda1215b43b91747e933ff0b9370\">dark</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aaa8c4d387c915f1966d18e387f07fb6daf31108c24daa76e574c8259d9fe46c09\">Disabled</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288aa027d72e915cf5e43cb38322edd8227e\">Foreground</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#abf3b2f4b67f6c94c4e2e63748a17b8d2\">foreground</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#af5075af97b44bc88cb1edad92059d88b\">highlight</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288aeb49826e8cab27cb166bfef2cdff6526\">Highlight</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a9d0fb2b362888a842b91b525055b9ee9\">highlightedText</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a110857b90692076034e242630c5d51c9\">HighlightedText</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aaa8c4d387c915f1966d18e387f07fb6da969c924a722daf6334fca64346092ae6\">Inactive</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a888791e875681ae0ebdd4ca656aaa193\">isBrushSet</a>(ColorGroup cg, ColorRole cr) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#ace161cd59a382db1f82cd1dc6dc79d6c\">isCopyOf</a>(const QPalette &amp;p) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a5c923047d1be4c5a650ec98b2cf9fc7d\">isEqual</a>(ColorGroup cr1, ColorGroup cr2) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a7e7d34132f9561c0d26c9834b359caee\">light</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a40f3b2e02173a504f9b3720d1dcede51\">Light</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288ad288cb65204ac772551b27769451efc2\">Link</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a01e7437e500275a1a4011484f2dbd8b3\">link</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a1f433957f504f62e76cd23525c0c639b\">linkVisited</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288afd46d4ea9ebc8ab49a4be828d8ed111a\">LinkVisited</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#ad44b5c4ef293b429cbee9083d5e4a0e3\">mid</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a66cc649b5e3124b4156729579dbfd188\">Mid</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a530dfeaf3f67742c1ac3349f4ba5fb9a\">Midlight</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#abe6f7ba138665921aec780990331f03f\">midlight</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aaa8c4d387c915f1966d18e387f07fb6da1581b773b5b2da6fc31ad9efbc8e59d0\">NColorGroups</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a5808157f99717a0bfc9ee83821646cac\">NColorRoles</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aaa8c4d387c915f1966d18e387f07fb6da5ecbcf0afce98b042f35ec71ba03fa4b\">Normal</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288aeeab01e7ac4c7040249ecf1d226440ea\">NoRole</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a1f11471a2f032b95585126524f75346c\">operator QVariant</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a018bf3087d2a4003e0ca58c47187ebb8\">operator!=</a>(const QPalette &amp;p) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a3f5204874f7856ae5a8bbd207349e064\">operator&lt;&lt;</a>(QDataStream &amp;s, const QPalette &amp;p)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">friend</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a39c7989a755780beb1770dc4d1cbce48\">operator=</a>(const QPalette &amp;palette)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#ac430278f4ce41d03695b8d19cd4e155d\">operator==</a>(const QPalette &amp;p) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a3c10acd2e93de198c9b70fef8051f159\">QPalette</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a4e5ad09ce9eca289ce18977d94937d1a\">QPalette</a>(const QColor &amp;button)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a6af59b3da3d0ce41869051526119e141\">QPalette</a>(Qt::GlobalColor button)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aaf9286a6042fb9d5a38b5aac29dd88cf\">QPalette</a>(const QColor &amp;button, const QColor &amp;window)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aecb9861adb398588d95b125599a6d66a\">QPalette</a>(const QBrush &amp;windowText, const QBrush &amp;button, const QBrush &amp;light, const QBrush &amp;dark, const QBrush &amp;mid, const QBrush &amp;text, const QBrush &amp;bright_text, const QBrush &amp;base, const QBrush &amp;window)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#af0f9b4eb6f2eb32a74bd935d578e4bcf\">QPalette</a>(const QColor &amp;windowText, const QColor &amp;window, const QColor &amp;light, const QColor &amp;dark, const QColor &amp;mid, const QColor &amp;text, const QColor &amp;base)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a1dbf3de9300fddee4f4c691104b167c3\">QPalette</a>(const QPalette &amp;palette)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a7a8b7e787c4d9e451ba67670389afdcc\">resolve</a>(const QPalette &amp;) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a8babbc2e3ce7a127c4d040520906d11a\">resolve</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a46e3bc56cc54c17f06769df1d961f48f\">resolve</a>(uint mask)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a3cc7ca8d62cbe098a67def24b8bb6511\">serialNumber</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a5aac16d47c1ba0e2afb6377e93c61094\">setBrush</a>(ColorRole cr, const QBrush &amp;brush)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a70f722c509fc2cfc142e26f9fe521c5e\">setBrush</a>(ColorGroup cg, ColorRole cr, const QBrush &amp;brush)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#ab97b89142c333be67065098f57e47563\">setColor</a>(ColorGroup cg, ColorRole cr, const QColor &amp;color)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a05e4c3297087986308ceaa512506cccb\">setColor</a>(ColorRole cr, const QColor &amp;color)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aef23be8baaf6c67df6cb8a61152eea4d\">setColorGroup</a>(ColorGroup cr, const QBrush &amp;windowText, const QBrush &amp;button, const QBrush &amp;light, const QBrush &amp;dark, const QBrush &amp;mid, const QBrush &amp;text, const QBrush &amp;bright_text, const QBrush &amp;base, const QBrush &amp;window)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a013c1487c284f5b065b7f66edf57b337\">setCurrentColorGroup</a>(ColorGroup cg)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a6e362ca9a42c5983e51f62a57fa65131\">shadow</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a90ff5566a155f26791fe3d68fb18e754\">Shadow</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a35d0dd9a40755601b657244976bfc14b\">Text</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aaba3170980978c42d8c773254b81f5dd\">text</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a112f2aa2746443376fd56a6f2678584a\">ToolTipBase</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a7068cfba0f8f09a32307a765cee09fe8\">toolTipBase</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a787a4d77beae5eb4b338aec626cde953\">ToolTipText</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#af34158ab155a242b2272f7621fc24ec8\">toolTipText</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288afaa0e0e40662bc85cee2e839768efcce\">Window</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a22482b9b84efa73421c9e14149ec9fee\">window</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a4ee340d585053bc8c9548da0cc95b280\">windowText</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#aa76c3f80e6bb034aa3b3d619c94d8288a7840953bcb44feb16565e62ce200cefd\">WindowText</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html#a6fed8b610926bed70487ad1f4f8de878\">~QPalette</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_q_palette.html\">QPalette</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";