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
    cpp_ref_adsk_ref_toc.initNavTree(\'classmudbox_1_1_surface_smoother-members.html\', tocPrefix);\n\
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
<div class=\"title\">SurfaceSmoother Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_surface_smoother.html\">SurfaceSmoother</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#af9b698b4c57a322a068470b610d801bc\">AddAttribute</a>(Attribute::AttributeType type, const QString &amp;id)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a8f8d921d42c9ca152b81ecafa26de4d7\">AddChild</a>(TreeNode *pChild, bool bFirst=false) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a8722e30232c47de6b544b6057beb3c59\">Annex</a>(Node *pSource, const QString &amp;sCategory=&quot;&quot;)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a78110abd390112ba0498deddba29d688\">AttributeByID</a>(const QString &amp;sID) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a2606b9d3ad5583e093659229183d8939\">AttributeByIndex</a>(int iIndex) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a1b6d780ff2615eadb77a2553cbe3d6bb\">AttributeByName</a>(const QString &amp;sName) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#aacd3053ee50dd14440bb408dfafd3bbb\">AttributeCount</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#aa89c1bf223deb9a7b2276097c82212f5\">AttributeValue</a>(const QString &amp;sAttributeID) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a96ba0923ecc1b8eb75025f642f5768c3\">ByID</a>(int iID)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a680782ea8a8dd62572f6c40a61f4d857\">ByName</a>(const QString &amp;sClass, const QString &amp;sName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a91f929f7cab5b91223a8c41b5d2cd5d4\">CheckValidity</a>(Node::DiagnosticLevel iLevel=dgnLevel2) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a4af55b252dcecf719f083e2ecc16d332\">ChildByClass</a>(const ClassDesc *pClass, bool bAutoCreate=true) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a3e7cdd990060e1d798c2e3e4c51b16cf\">ChildByClass</a>(bool bAutoCreate=true) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a54fd3126a95ce8ac86f1b420f08ad0a7\">ChildByClass</a>(const ClassDesc *pClass, unsigned int iIndex=0) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a77ea2e55f18697ec9ad3a19f90642fac\">ChildByClass</a>(unsigned int iIndex=0) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#ad3c9664ff493aec61e62b36d6e25aa1d\">ContentChanged</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a77f13cfbb15d9b648b2988fab7c75235\">CopyTo</a>(Node *pNode) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a87e97a6e281727030402220ac599a1df\">CreatePropertiesWindow</a>(QWidget *pParent)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a84909c313c63388d1aef138ed0c1d543\">DeleteChildByClass</a>(const ClassDesc *pClass)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a0b581a0e9b92d0c736b440f3cf357303ae5c95df68b780375ce008fc737d62691\">dgnLevel1</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a0b581a0e9b92d0c736b440f3cf357303ab97722d02241324d119f8fa93048b4d0\">dgnLevel2</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a0b581a0e9b92d0c736b440f3cf357303a62c607e0db492c387fa78560798481b1\">dgnLevel3</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a0b581a0e9b92d0c736b440f3cf357303\">DiagnosticLevel</a> enum name</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a8af8e812b1d02f71a2d8ae67e909b010\">DisplayName</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a661669cf31f1005b88dd846cc20ae4a1\">Duplicate</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#ac7b8ff7bbc20a9bb25ac1b013d43f53b\">First</a>(void)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#aead6ff9bfe104e144b2149bd2e9a2321\">FirstChild</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a49b29374f062c1d28d2a3754a3c46438\">HelpID</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#acfd9e3c61228705dfc8776e62d33632f\">HiddenFromUI</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a6e19703231e1a24f23cfe94eecb81691\">ID</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a9275c37732a487188576210012e18953\">Info</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a142c0db072aa31b763329707d27cd7bd\">Initialize</a>(void)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#ab5f8993ed895edbe9db4692e1f8728cb\">IsKindOf</a>(const ClassDesc *pClass) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#ae4581e87c3824fe12d96f36a6e0dbfb5\">LoadTemplate</a>(const QString &amp;sFileName=&quot;&quot;, bool bStartEvent=false)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a4bc99f762f377ba582d690eaed227d96\">Locked</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a353586fa0179e0822663302efbec748d\">LogAttributes</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#ad572aaf1b24cfb77a4c606ab544a2873\">m_pThis</a></td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a12db299c07b740dde0ab999301e98a20\">MoveChild</a>(TreeNode *pChild, TreeNode *pAfter)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a1c226db9ed67ed302e6c32e768fbee67\">Name</a>(const ClassDesc *pClass=0) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a3422dfa13e8f63e04922aa87c7ef3a71\">Next</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">inline</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a9a03d2514990aea5390344e4c71b1d08\">NextSibling</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a6fec4ce5aba0ef9c2552705f39606ad7\">Node</a>(const QString &amp;sStringID=&quot;&quot;, const QString &amp;sDisplayName=&quot;&quot;)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a2a97ce347f4b0664eb76c634b136ba19\">OnEvent</a>(const EventGate &amp;cEvent)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#ae187c5f8159848116290e15ee0040d80\">OnLinked</a>(const TreeNode *pOldParent)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#aaa05aea8ebe7ddc268c5776075c2d462\">OnNodeEvent</a>(const Attribute &amp;cAttribute, NodeEventType cType)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a9ddcaa915380bccaad0f0fe8112e3e29\">Parent</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a2cb07e75d0dbbf7f5a19cb3d9c0ddde6\">PrevSibling</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a316c1dc6e93390e44e736dd74f93748d\">ReferenceCount</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#aacfaa57582c03a7cecd43c4393642337\">ReferenceNode</a>(unsigned int iIndex) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a7a24e9d255b61025970ad595e49a2550\">ReferencePointer</a>(unsigned int iIndex) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a41a8d58d2eda8ea1e10b0adb4eacd967\">RemoveChild</a>(TreeNode *pChild) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#ae2dcc9502ec85602f942dfd256431b2f\">RequestDeferredEvent</a>(Attribute &amp;cAttribute)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a10d731451c1f07686aeaa20d230c4d76\">SaveTemplate</a>(const QString &amp;sFileName=&quot;&quot;, bool bSaveOnlyVisible=false)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#ab6cacad27ca0e44222c82c39dbc3b767\">Serialize</a>(Stream &amp;s)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a25fcaa7b32c6530290549dd278894cbd\">SetAttributeValue</a>(const QString &amp;sAttributeID, const QString &amp;sNewValue)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#ae7b4f2ec7c24799de16e8056c3878859\">SetDisplayName</a>(const QString &amp;sDisplayName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a240e3cbd0b3819733ba8416981d18e34\">SetHelpID</a>(const QString &amp;sHelpID)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a81e9b44f24edc6de418e135e98f66f9f\">SetHiddenFromUI</a>(bool b)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#ab2ca3075f470e485bbb65834ace2baf3\">SetID</a>(int iID)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a4381acb4d5a4732d38df2511d7d1ddf2\">SetLocked</a>(bool b)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#abbcb71bef5b8aa8a2a9fe8997eb04711\">SetName</a>(const QString &amp;sName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a7ae904f4a2f542fd429369b684ebdf6b\">SetStringID</a>(const QString &amp;sName)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a9695c3507365781d20601a81a7da78c0\">SetVersion</a>(unsigned int iVersion)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#aa50f6300b40361d20fcc3ce2bad16b79\">SetVisible</a>(bool b)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_surface_smoother.html#ae48e8c108e3af0502b710110061c7b59\">SmoothNormal</a>(unsigned int iFaceIndex, double fUCoordinate, double fVCoordinate, bool bConsiderCrease=true, bool bConsiderHarden=true) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_surface_smoother.html\">SurfaceSmoother</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_surface_smoother.html#a76500cb035faac4a5e5fe50e9b7e5707\">SmoothPosition</a>(unsigned int iFaceIndex, double fUCoordinate, double fVCoordinate, bool bConsiderCrease=true, bool bConsiderHarden=true) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_surface_smoother.html\">SurfaceSmoother</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_surface_smoother.html#a407f84d0c1b1c2a960e78e6b9d7c7549\">SmoothTangent</a>(unsigned int iFaceIndex, double fUCoordinate, double fVCoordinate, bool bConsiderCrease=true, bool bConsiderHarden=true) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_surface_smoother.html\">SurfaceSmoother</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_surface_smoother.html#ae6a4651597da5b03feb016e78f2b943c\">SmoothTextureCoordinate</a>(unsigned int iFaceIndex, double fUCoordinate, double fVCoordinate) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_surface_smoother.html\">SurfaceSmoother</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#a3fe14ff366db2d528843038965439df4\">StartHashing</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#ab11b6acc46c5164a0d5dba6ea18da4b3\">StringID</a>(const ClassDesc *pClass=0) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a025ba1e2c366cf84b46f2f39811ffcbb\">TreeNode</a>(void)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a7ee364dcd1d7fa72d142196a01c95715\">UniqueChildName</a>(const TreeNode *pChild, const QString &amp;sPrefix=&quot;&quot;) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#aad4f8e11ed65f476b32ff51a759ef72b\">Version</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#a7096d6c8c2c1b4ee3c3b4212879c8d3d\">Visible</a>(void) const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html#af6670876e359464a8cc8df9554df29fe\">~Node</a>(void)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_node.html\">Node</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html#ad7da41876016b0cccb4815179f3bcf2f\">~TreeNode</a>(void)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classmudbox_1_1_tree_node.html\">TreeNode</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";