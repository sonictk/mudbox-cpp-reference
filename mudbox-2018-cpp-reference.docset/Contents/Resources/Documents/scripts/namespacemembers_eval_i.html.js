var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MOBPRO\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"GeneralUser\"><meta name=\"created\" content=\"2017-09-08\"><meta name=\"topicid\" content=\"GUID-02FA7DD3-6C7A-4C6A-B7BC-824765AE1CB2\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Namespace Members</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'namespacemembers_eval_i.html\', tocPrefix);\n\
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
            <h1>Namespace Members</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespace&#160;List</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespacemembers.html\"><span>Namespace&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow3\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers.html\"><span>All</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_enum.html\"><span>Enumerations</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespacemembers_eval.html\"><span>Enumerator</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_h.html#index_h\"><span>h</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/namespacemembers_eval_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_q.html#index_q\"><span>q</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespacemembers_eval_z.html#index_z\"><span>z</span></a></li>\n\
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
<div class=\"contents\">\n\
&#160;\n\
\n\
<h3><a class=\"anchor\" id=\"index_i\"></a>- i -</h3><ul>\n\
<li>IBeamCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ac8eabf66c9bfd464553917271e90ea63af1602112873b15bfd4428cfe61429a70\">Qt</a>\n\
</li>\n\
<li>IgnoreAction\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a7657ec1631bb69c83a7dc76316b8f6cbaad67e832a1150da68bc6d05a5e6ce828\">Qt</a>\n\
</li>\n\
<li>IgnoreAspectRatio\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a86e4b04306b681b8042f6e9b974ae1e1aa0619300727ec8c699945df3105be9bf\">Qt</a>\n\
</li>\n\
<li>IgnoredGesturesPropagateToParent\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a737aacbd58279ad135b5138d1210ea56a879654654cce8aabdf1619e1990b4160\">Qt</a>\n\
</li>\n\
<li>ImageInterface\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_accessible2.html#af1ef2c97e255bd7f21d3b7614b283d9da2ec7b7a698860725ceff0efbcca98482\">QAccessible2</a>\n\
</li>\n\
<li>ImAnchorPosition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af83a49c36ae3054a5490287abc3764b3a57811186e68af43b3093293b74df1bac\">Qt</a>\n\
</li>\n\
<li>ImCurrentSelection\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af83a49c36ae3054a5490287abc3764b3adaf89a0304762643ced79acd3a776240\">Qt</a>\n\
</li>\n\
<li>ImCursorPosition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af83a49c36ae3054a5490287abc3764b3ac7449a662ff884a6a307419c01322b7d\">Qt</a>\n\
</li>\n\
<li>ImFont\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af83a49c36ae3054a5490287abc3764b3a31aa93a202cce37fdb861d62ced8ad24\">Qt</a>\n\
</li>\n\
<li>ImhDialableCharactersOnly\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134abdc4b2564adeb9bc0fb082a364a2de69\">Qt</a>\n\
</li>\n\
<li>ImhDigitsOnly\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134a04c5d61325a1eae2eb053263a7990d84\">Qt</a>\n\
</li>\n\
<li>ImhEmailCharactersOnly\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134aca0a4c4622b89ac7d79cf06c1c46c2cc\">Qt</a>\n\
</li>\n\
<li>ImhExclusiveInputMask\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134aa30e2545bf2da0d87cbfd8ccad1c00b9\">Qt</a>\n\
</li>\n\
<li>ImhFormattedNumbersOnly\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134afba417162aba5e56b87d34806a88d101\">Qt</a>\n\
</li>\n\
<li>ImhHiddenText\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134ade789c4f3e3093fa40da0885d2777ccd\">Qt</a>\n\
</li>\n\
<li>ImhLowercaseOnly\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134ab61a87836d490c0962534da78be3815e\">Qt</a>\n\
</li>\n\
<li>ImhNoAutoUppercase\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134a8138d81d57715bd58897de7e89d8a11b\">Qt</a>\n\
</li>\n\
<li>ImhNone\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134ad3420fd1bd845e8e2da2b88bb1230593\">Qt</a>\n\
</li>\n\
<li>ImhNoPredictiveText\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134af3013458e871ea37cca805747e0d9652\">Qt</a>\n\
</li>\n\
<li>ImhPreferLowercase\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134a5658fbe6ebe41be45e7e58ba526dadd4\">Qt</a>\n\
</li>\n\
<li>ImhPreferNumbers\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134a21f8bc44833018903b8d9dd761b1025d\">Qt</a>\n\
</li>\n\
<li>ImhPreferUppercase\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134ae1cf02e5d4023ffefcb6ea8141f4d3ab\">Qt</a>\n\
</li>\n\
<li>ImhUppercaseOnly\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134ae8691891b30636d33f12716ebb8db516\">Qt</a>\n\
</li>\n\
<li>ImhUrlCharactersOnly\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ae0bf4bbf31aa4bd1242500868d8ef134a889ba292858d3d171ac8fd6fda40314d\">Qt</a>\n\
</li>\n\
<li>ImMaximumTextLength\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af83a49c36ae3054a5490287abc3764b3a3da8f94ec8aa592cc706114015b0cc4c\">Qt</a>\n\
</li>\n\
<li>ImMicroFocus\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af83a49c36ae3054a5490287abc3764b3a6f0245c4de94aa337e36c8b28094df11\">Qt</a>\n\
</li>\n\
<li>ImSurroundingText\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#af83a49c36ae3054a5490287abc3764b3aee698e584896de8420adea7ba327c460\">Qt</a>\n\
</li>\n\
<li>In\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_sql.html#a1ae778b32d25add125d98922975871f6ad8ff8dfc9381018e97fce86d909f8975\">QSql</a>\n\
</li>\n\
<li>IndirectRendering\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_g_l.html#aa1077b59e620f7846dab86128a8820f5ac0097e7e6cbedc678ad105dd2e61b55c\">QGL</a>\n\
</li>\n\
<li>InitialSortOrderRole\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a28105a4472738d85f6d50cb45a433904aa6618ee60272f65845d26f0f8bbd0f0f\">Qt</a>\n\
</li>\n\
<li>InOut\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_q_sql.html#a1ae778b32d25add125d98922975871f6af1c10908903c171d969b936d7b464a39\">QSql</a>\n\
</li>\n\
<li>IntersectClip\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a37c160b530b7e16e30de2b4fa3f32314af88fd70f3041228d268e368662b59c2d\">Qt</a>\n\
</li>\n\
<li>IntersectsItemBoundingRect\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a36d2dac75d98b68b12c25876046e8e51a4715a0dca553fb499ad3dd81d3e4a8c9\">Qt</a>\n\
</li>\n\
<li>IntersectsItemShape\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a36d2dac75d98b68b12c25876046e8e51ad9f6d30182246d55669adcdc3838fee7\">Qt</a>\n\
</li>\n\
<li>ISODate\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#ad3fab6f8a7fdf9fa0d9dea7d34750d84a98c85df0ec5d5580f27380ee66d8aa11\">Qt</a>\n\
</li>\n\
<li>ItemIsDragEnabled\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a11f2a85cbaa53402e5bb31e2cf25ec40ae4ed71e751cad28313fee0c84b1b5aa7\">Qt</a>\n\
</li>\n\
<li>ItemIsDropEnabled\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a11f2a85cbaa53402e5bb31e2cf25ec40afbe5caa44aeac0c2bd8db44e49cdc9e8\">Qt</a>\n\
</li>\n\
<li>ItemIsEditable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a11f2a85cbaa53402e5bb31e2cf25ec40afda9164314bce7089c28ded15e6b0a05\">Qt</a>\n\
</li>\n\
<li>ItemIsEnabled\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a11f2a85cbaa53402e5bb31e2cf25ec40a3f481dbba48fadfb79b69d43ee551a70\">Qt</a>\n\
</li>\n\
<li>ItemIsSelectable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a11f2a85cbaa53402e5bb31e2cf25ec40ab43a5b15573991413bc41d2caef6e8fb\">Qt</a>\n\
</li>\n\
<li>ItemIsTristate\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a11f2a85cbaa53402e5bb31e2cf25ec40a21c8c0a856ee0668398a3b0c3692725a\">Qt</a>\n\
</li>\n\
<li>ItemIsUserCheckable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_qt.html#a11f2a85cbaa53402e5bb31e2cf25ec40a5009cde54f7e5f9d562e044e63115f10\">Qt</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";