var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Mudbox/mudboxVersions.h File Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'mudbox_versions_8h.html\', tocPrefix);\n\
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
            <h1>Mudbox/mudboxVersions.h File Reference</h1>\n\
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
<div class=\"title\">mudboxVersions.h File Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"mudbox_versions_8h.html#define-members\">Macros</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"define-members\"></a>\n\
Macros</h2></td></tr>\n\
<tr class=\"memitem:aad58736c7184fcfc5ff6f5b9bd67b577\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h.html#aad58736c7184fcfc5ff6f5b9bd67b577\">INTRODUCED_IN_MUDBOX_2013_OR_EARLIER</a>&#160;&#160;&#160;0</td></tr>\n\
<tr class=\"separator:aad58736c7184fcfc5ff6f5b9bd67b577\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afeb180763994d70bccbd518deede8e98\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h.html#afeb180763994d70bccbd518deede8e98\">INTRODUCED_IN_MUDBOX_2014</a>&#160;&#160;&#160;1</td></tr>\n\
<tr class=\"separator:afeb180763994d70bccbd518deede8e98\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a97ffc78af3325743cb1a83d76805cbe0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h.html#a97ffc78af3325743cb1a83d76805cbe0\">INTRODUCED_IN_MUDBOX_2014_EXT1</a>&#160;&#160;&#160;2</td></tr>\n\
<tr class=\"separator:a97ffc78af3325743cb1a83d76805cbe0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab2cfc498a2065972acd42f72b3a9d13b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h.html#ab2cfc498a2065972acd42f72b3a9d13b\">INTRODUCED_IN_MUDBOX_2015</a>&#160;&#160;&#160;3</td></tr>\n\
<tr class=\"separator:ab2cfc498a2065972acd42f72b3a9d13b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a14635b1a0f096b27c9c285c387100d84\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h.html#a14635b1a0f096b27c9c285c387100d84\">INTRODUCED_IN_MUDBOX_2016</a>&#160;&#160;&#160;4</td></tr>\n\
<tr class=\"separator:a14635b1a0f096b27c9c285c387100d84\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a84db1760a1e1f97099a577d4a20303f7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h.html#a84db1760a1e1f97099a577d4a20303f7\">INTRODUCED_IN_MUDBOX_2016_EXT1</a>&#160;&#160;&#160;5</td></tr>\n\
<tr class=\"separator:a84db1760a1e1f97099a577d4a20303f7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2a8045001dcdf13856f5df7d6d23c3e1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h.html#a2a8045001dcdf13856f5df7d6d23c3e1\">INTRODUCED_IN_MUDBOX_2017</a>&#160;&#160;&#160;6</td></tr>\n\
<tr class=\"separator:a2a8045001dcdf13856f5df7d6d23c3e1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4df3a942d1d53598ffe940ba76db5ad7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h.html#a4df3a942d1d53598ffe940ba76db5ad7\">INTRODUCED_IN_MUDBOX_2018</a>&#160;&#160;&#160;7</td></tr>\n\
<tr class=\"separator:a4df3a942d1d53598ffe940ba76db5ad7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a43b958029035f9be37761bf152c8661c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h.html#a43b958029035f9be37761bf152c8661c\">MUDBOX_VERSION_NAMES</a></td></tr>\n\
<tr class=\"separator:a43b958029035f9be37761bf152c8661c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7424df23d6f66a6d4fd87a2198c2a847\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">#define&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h.html#a7424df23d6f66a6d4fd87a2198c2a847\">INTRODUCED_IN_CURRENT_VERSION</a>&#160;&#160;&#160;7</td></tr>\n\
<tr class=\"separator:a7424df23d6f66a6d4fd87a2198c2a847\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Macro Definition Documentation</h2>\n\
<a class=\"anchor\" id=\"aad58736c7184fcfc5ff6f5b9bd67b577\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define INTRODUCED_IN_MUDBOX_2013_OR_EARLIER&#160;&#160;&#160;0</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html#l00026\">26</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html\">mudboxVersions.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afeb180763994d70bccbd518deede8e98\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define INTRODUCED_IN_MUDBOX_2014&#160;&#160;&#160;1</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html#l00027\">27</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html\">mudboxVersions.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a97ffc78af3325743cb1a83d76805cbe0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define INTRODUCED_IN_MUDBOX_2014_EXT1&#160;&#160;&#160;2</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html#l00028\">28</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html\">mudboxVersions.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab2cfc498a2065972acd42f72b3a9d13b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define INTRODUCED_IN_MUDBOX_2015&#160;&#160;&#160;3</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html#l00029\">29</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html\">mudboxVersions.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a14635b1a0f096b27c9c285c387100d84\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define INTRODUCED_IN_MUDBOX_2016&#160;&#160;&#160;4</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html#l00030\">30</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html\">mudboxVersions.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a84db1760a1e1f97099a577d4a20303f7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define INTRODUCED_IN_MUDBOX_2016_EXT1&#160;&#160;&#160;5</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html#l00031\">31</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html\">mudboxVersions.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2a8045001dcdf13856f5df7d6d23c3e1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define INTRODUCED_IN_MUDBOX_2017&#160;&#160;&#160;6</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html#l00032\">32</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html\">mudboxVersions.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4df3a942d1d53598ffe940ba76db5ad7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define INTRODUCED_IN_MUDBOX_2018&#160;&#160;&#160;7</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html#l00033\">33</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html\">mudboxVersions.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a43b958029035f9be37761bf152c8661c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define MUDBOX_VERSION_NAMES</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<b>Value:</b><div class=\"fragment\"><div class=\"line\">{\\</div>\n\
<div class=\"line\">    <span class=\"stringliteral\">&quot;&quot;</span>,\\</div>\n\
<div class=\"line\">    <span class=\"stringliteral\">&quot;Mudbox 2014&quot;</span>,\\</div>\n\
<div class=\"line\">    <span class=\"stringliteral\">&quot;Mudbox 2014 Ext 1&quot;</span>,\\</div>\n\
<div class=\"line\">    <span class=\"stringliteral\">&quot;Mudbox 2015&quot;</span>,\\</div>\n\
<div class=\"line\">    <span class=\"stringliteral\">&quot;Mudbox 2016&quot;</span>,\\</div>\n\
<div class=\"line\">    <span class=\"stringliteral\">&quot;Mudbox 2016 Ext 1&quot;</span>,\\</div>\n\
<div class=\"line\">    <span class=\"stringliteral\">&quot;Mudbox 2017&quot;</span>,\\</div>\n\
<div class=\"line\">    <span class=\"stringliteral\">&quot;Mudbox 2018&quot;</span>\\</div>\n\
<div class=\"line\">    }</div>\n\
</div><!-- fragment -->\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html#l00037\">37</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html\">mudboxVersions.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7424df23d6f66a6d4fd87a2198c2a847\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">#define INTRODUCED_IN_CURRENT_VERSION&#160;&#160;&#160;7</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Definition at line <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html#l00050\">50</a> of file <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html\">mudboxVersions.h</a>.</p>\n\
\n\
</div>\n\
</div>\n\
\n\
<p><a href=\"#!/url=./cpp_ref/mudbox_versions_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";