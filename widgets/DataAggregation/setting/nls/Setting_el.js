// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"dijit/_editor/nls/commands":{bold:"\u0388\u03bd\u03c4\u03bf\u03bd\u03b1",copy:"\u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",cut:"\u0391\u03c0\u03bf\u03ba\u03bf\u03c0\u03ae","delete":"\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae",indent:"\u0395\u03c3\u03bf\u03c7\u03ae",insertHorizontalRule:"\u039f\u03c1\u03b9\u03b6\u03cc\u03bd\u03c4\u03b9\u03b1 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae",insertOrderedList:"\u0391\u03c1\u03b9\u03b8\u03bc\u03b7\u03bc\u03ad\u03bd\u03b7 \u03bb\u03af\u03c3\u03c4\u03b1",
insertUnorderedList:"\u039b\u03af\u03c3\u03c4\u03b1 \u03bc\u03b5 \u03ba\u03bf\u03c5\u03ba\u03af\u03b4\u03b5\u03c2",italic:"\u03a0\u03bb\u03ac\u03b3\u03b9\u03b1",justifyCenter:"\u03a3\u03c4\u03bf\u03af\u03c7\u03b9\u03c3\u03b7 \u03c3\u03c4\u03bf \u03ba\u03ad\u03bd\u03c4\u03c1\u03bf",justifyFull:"\u03a0\u03bb\u03ae\u03c1\u03b7\u03c2 \u03c3\u03c4\u03bf\u03af\u03c7\u03b9\u03c3\u03b7",justifyLeft:"\u03a3\u03c4\u03bf\u03af\u03c7\u03b9\u03c3\u03b7 \u03b1\u03c1\u03b9\u03c3\u03c4\u03b5\u03c1\u03ac",justifyRight:"\u03a3\u03c4\u03bf\u03af\u03c7\u03b9\u03c3\u03b7 \u03b4\u03b5\u03be\u03b9\u03ac",
outdent:"\u039c\u03b5\u03af\u03c9\u03c3\u03b7 \u03c0\u03b5\u03c1\u03b9\u03b8\u03c9\u03c1\u03af\u03bf\u03c5",paste:"\u0395\u03c0\u03b9\u03ba\u03cc\u03bb\u03bb\u03b7\u03c3\u03b7",redo:"\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7 \u03b1\u03bd\u03b1\u03af\u03c1\u03b5\u03c3\u03b7\u03c2",removeFormat:"\u0391\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7 \u03bc\u03bf\u03c1\u03c6\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2",selectAll:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03cc\u03bb\u03c9\u03bd",strikethrough:"\u0394\u03b9\u03b1\u03b3\u03c1\u03ac\u03bc\u03bc\u03b9\u03c3\u03b7",
subscript:"\u0394\u03b5\u03af\u03ba\u03c4\u03b7\u03c2",superscript:"\u0395\u03ba\u03b8\u03ad\u03c4\u03b7\u03c2",underline:"\u03a5\u03c0\u03bf\u03b3\u03c1\u03ac\u03bc\u03bc\u03b9\u03c3\u03b7",undo:"\u0391\u03bd\u03b1\u03af\u03c1\u03b5\u03c3\u03b7",unlink:"\u0391\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7 \u03b4\u03b9\u03b1\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7\u03c2",createLink:"\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03b4\u03b9\u03b1\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7\u03c2",
toggleDir:"\u0395\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae \u03ba\u03b1\u03c4\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2",insertImage:"\u0395\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2",insertTable:"\u0395\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae/\u03a4\u03c1\u03bf\u03c0\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 \u03c0\u03af\u03bd\u03b1\u03ba\u03b1",toggleTableBorder:"\u0395\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7\u03c2 \u03c0\u03b5\u03c1\u03b9\u03b3\u03c1\u03ac\u03bc\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c0\u03af\u03bd\u03b1\u03ba\u03b1",
deleteTable:"\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03c0\u03af\u03bd\u03b1\u03ba\u03b1",tableProp:"\u0399\u03b4\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1 \u03c0\u03af\u03bd\u03b1\u03ba\u03b1",htmlToggle:"\u03a0\u03c1\u03c9\u03c4\u03bf\u03b3\u03b5\u03bd\u03ae\u03c2 \u03ba\u03ce\u03b4\u03b9\u03ba\u03b1\u03c2 HTML",foreColor:"\u03a7\u03c1\u03ce\u03bc\u03b1 \u03c0\u03c1\u03bf\u03c3\u03ba\u03b7\u03bd\u03af\u03bf\u03c5",hiliteColor:"\u03a7\u03c1\u03ce\u03bc\u03b1 \u03c6\u03cc\u03bd\u03c4\u03bf\u03c5",
plainFormatBlock:"\u03a3\u03c4\u03c5\u03bb \u03c0\u03b1\u03c1\u03b1\u03b3\u03c1\u03ac\u03c6\u03bf\u03c5",formatBlock:"\u03a3\u03c4\u03c5\u03bb \u03c0\u03b1\u03c1\u03b1\u03b3\u03c1\u03ac\u03c6\u03bf\u03c5",fontSize:"\u039c\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2 \u03b3\u03c1\u03b1\u03bc\u03bc\u03b1\u03c4\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2",fontName:"\u038c\u03bd\u03bf\u03bc\u03b1 \u03b3\u03c1\u03b1\u03bc\u03bc\u03b1\u03c4\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2",tabIndent:"\u0395\u03c3\u03bf\u03c7\u03ae \u03bc\u03b5 \u03c4\u03bf \u03c0\u03bb\u03ae\u03ba\u03c4\u03c1\u03bf Tab",
fullScreen:"\u0395\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae \u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2 \u03c0\u03bb\u03ae\u03c1\u03bf\u03c5\u03c2 \u03bf\u03b8\u03cc\u03bd\u03b7\u03c2",viewSource:"\u03a0\u03c1\u03bf\u03b2\u03bf\u03bb\u03ae \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 HTML",print:"\u0395\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7",newPage:"\u039d\u03ad\u03b1 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1",systemShortcut:'\u0397 \u03b5\u03bd\u03ad\u03c1\u03b3\u03b5\u03b9\u03b1 "${0}" \u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03b7 \u03c3\u03c4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03c0\u03bb\u03bf\u03ae\u03b3\u03b7\u03c3\u03b7\u03c2 \u03bc\u03cc\u03bd\u03bf \u03bc\u03ad\u03c3\u03c9 \u03bc\u03b9\u03b1\u03c2 \u03c3\u03c5\u03bd\u03c4\u03cc\u03bc\u03b5\u03c5\u03c3\u03b7\u03c2 \u03c0\u03bb\u03b7\u03ba\u03c4\u03c1\u03bf\u03bb\u03bf\u03b3\u03af\u03bf\u03c5. \u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b7 \u03c3\u03c5\u03bd\u03c4\u03cc\u03bc\u03b5\u03c5\u03c3\u03b7 ${1}.',
ctrlKey:"ctrl+${0}",appleKey:"\u2318${0}",_localized:{}},"dijit/_editor/nls/FontChoice":{fontSize:"\u039c\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2",fontName:"\u0393\u03c1\u03b1\u03bc\u03bc\u03b1\u03c4\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac",formatBlock:"\u039c\u03bf\u03c1\u03c6\u03ae",serif:"\u03bc\u03b5 \u03c0\u03b1\u03c4\u03bf\u03cd\u03c1\u03b5\u03c2 (serif)","sans-serif":"\u03c7\u03c9\u03c1\u03af\u03c2 \u03c0\u03b1\u03c4\u03bf\u03cd\u03c1\u03b5\u03c2 (sans-serif)",monospace:"\u03c3\u03c4\u03b1\u03b8\u03b5\u03c1\u03bf\u03cd \u03c0\u03bb\u03ac\u03c4\u03bf\u03c5\u03c2",
cursive:"\u03c0\u03bb\u03ac\u03b3\u03b9\u03bf\u03b9",fantasy:"\u03c6\u03b1\u03bd\u03c4\u03b1\u03c3\u03af\u03b1\u03c2",noFormat:"\u03a7\u03c9\u03c1\u03af\u03c2",p:"\u03a0\u03b1\u03c1\u03ac\u03b3\u03c1\u03b1\u03c6\u03bf\u03c2",h1:"\u0395\u03c0\u03b9\u03ba\u03b5\u03c6\u03b1\u03bb\u03af\u03b4\u03b1",h2:"\u0394\u03b5\u03c5\u03c4\u03b5\u03c1\u03b5\u03cd\u03bf\u03c5\u03c3\u03b1 \u03b5\u03c0\u03b9\u03ba\u03b5\u03c6\u03b1\u03bb\u03af\u03b4\u03b1",h3:"\u0394\u03b5\u03c5\u03c4\u03b5\u03c1\u03b5\u03cd\u03bf\u03c5\u03c3\u03b1 \u03b5\u03c0\u03b9\u03ba\u03b5\u03c6\u03b1\u03bb\u03af\u03b4\u03b1 \u03c4\u03c1\u03af\u03c4\u03bf\u03c5 \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5",
pre:"\u03a0\u03c1\u03bf-\u03bc\u03bf\u03c1\u03c6\u03bf\u03c0\u03bf\u03b9\u03b7\u03bc\u03ad\u03bd\u03bf",1:"xx-\u03bc\u03b9\u03ba\u03c1\u03ac",2:"x-\u03bc\u03b9\u03ba\u03c1\u03ac",3:"\u03bc\u03b9\u03ba\u03c1\u03ac",4:"\u03bc\u03b5\u03c3\u03b1\u03af\u03b1",5:"\u03bc\u03b5\u03b3\u03ac\u03bb\u03b1",6:"x-\u03bc\u03b5\u03b3\u03ac\u03bb\u03b1",7:"xx-\u03bc\u03b5\u03b3\u03ac\u03bb\u03b1",_localized:{}},"dojox/editor/plugins/nls/Preview":{preview:"\u03a0\u03c1\u03bf\u03b5\u03c0\u03b9\u03c3\u03ba\u03cc\u03c0\u03b7\u03c3\u03b7",
_localized:{}},"dojox/editor/plugins/nls/FindReplace":{findLabel:"\u0395\u03cd\u03c1\u03b5\u03c3\u03b7:",findTooltip:"\u039a\u03b1\u03c4\u03b1\u03c7\u03c9\u03c1\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c0\u03bf\u03c5 \u03b8\u03ad\u03bb\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03b5\u03bd\u03c4\u03bf\u03c0\u03af\u03c3\u03b5\u03c4\u03b5",replaceLabel:"\u0391\u03bd\u03c4\u03b9\u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7 \u03bc\u03b5:",replaceTooltip:"\u039a\u03b1\u03c4\u03b1\u03c7\u03c9\u03c1\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bc\u03b5 \u03c4\u03bf \u03bf\u03c0\u03bf\u03af\u03bf \u03b8\u03ad\u03bb\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b1\u03c4\u03b1\u03c3\u03c4\u03ae\u03c3\u03b5\u03c4\u03b5 \u03c4\u03bf \u03b1\u03bd\u03b1\u03b6\u03b7\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf",
findReplace:"\u0395\u03cd\u03c1\u03b5\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7",matchCase:"\u0394\u03b9\u03ac\u03ba\u03c1\u03b9\u03c3\u03b7 \u03c0\u03b5\u03b6\u03ce\u03bd/\u03ba\u03b5\u03c6\u03b1\u03bb\u03b1\u03af\u03c9\u03bd",matchCaseTooltip:"\u0394\u03b9\u03ac\u03ba\u03c1\u03b9\u03c3\u03b7 \u03c0\u03b5\u03b6\u03ce\u03bd/\u03ba\u03b5\u03c6\u03b1\u03bb\u03b1\u03af\u03c9\u03bd",backwards:"\u03a0\u03c1\u03bf\u03c2 \u03c4\u03b1 \u03c0\u03af\u03c3\u03c9",
backwardsTooltip:"\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5 \u03c0\u03c1\u03bf\u03c2 \u03c4\u03b1 \u03c0\u03af\u03c3\u03c9",replaceAllButton:"\u0391\u03bd\u03c4\u03b9\u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7 \u03cc\u03bb\u03c9\u03bd",replaceAllButtonTooltip:"\u0391\u03bd\u03c4\u03b9\u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7 \u03cc\u03bb\u03bf\u03c5 \u03c4\u03bf\u03c5 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5",
findButton:"\u0395\u03cd\u03c1\u03b5\u03c3\u03b7",findButtonTooltip:"\u0395\u03cd\u03c1\u03b5\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5",replaceButton:"\u0391\u03bd\u03c4\u03b9\u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7",replaceButtonTooltip:"\u0391\u03bd\u03c4\u03b9\u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5",replaceDialogText:"\u0391\u03bd\u03c4\u03b9\u03ba\u03b1\u03c4\u03b1\u03c3\u03c4\u03ac\u03b8\u03b7\u03ba\u03b1\u03bd ${0} \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03c3\u03b5\u03b9\u03c2.",
eofDialogText:"\u03a4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b1 \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7: ${0}",eofDialogTextFind:"\u03b5\u03bd\u03c4\u03bf\u03c0\u03af\u03c3\u03c4\u03b7\u03ba\u03b5",eofDialogTextReplace:"\u03b1\u03bd\u03c4\u03b9\u03ba\u03b1\u03c4\u03b1\u03c3\u03c4\u03ac\u03b8\u03b7\u03ba\u03b5",_localized:{}},"dojox/editor/plugins/nls/PasteFromWord":{pasteFromWord:"\u0395\u03c0\u03b9\u03ba\u03cc\u03bb\u03bb\u03b7\u03c3\u03b7 \u03b1\u03c0\u03cc \u03c4\u03bf Word",instructions:"\u0395\u03c0\u03b9\u03ba\u03bf\u03bb\u03bb\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03c0\u03b5\u03c1\u03b9\u03b5\u03c7\u03cc\u03bc\u03b5\u03bd\u03bf \u03b1\u03c0\u03cc \u03c4\u03bf Word \u03c3\u03c4\u03bf \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9 \u03c0\u03bb\u03b1\u03af\u03c3\u03b9\u03bf. \u038c\u03c4\u03b1\u03bd \u03c4\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b3\u03b9\u03b1 \u03b5\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03b5\u03af\u03bd\u03b1\u03b9 \u03c3\u03c9\u03c3\u03c4\u03cc, \u03c0\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03ba\u03bf\u03c5\u03bc\u03c0\u03af \u0395\u03c0\u03b9\u03ba\u03cc\u03bb\u03bb\u03b7\u03c3\u03b7. \u0393\u03b9\u03b1 \u03bd\u03b1 \u03b1\u03ba\u03c5\u03c1\u03ce\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b5\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5, \u03c0\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03ba\u03bf\u03c5\u03bc\u03c0\u03af \u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7.",
_localized:{}},"dojox/editor/plugins/nls/InsertAnchor":{insertAnchor:"\u0395\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03b1\u03b3\u03ba\u03af\u03c3\u03c4\u03c1\u03c9\u03c3\u03b7\u03c2",title:"\u0399\u03b4\u03b9\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2 \u03b1\u03b3\u03ba\u03af\u03c3\u03c4\u03c1\u03c9\u03c3\u03b7\u03c2",anchor:"\u038c\u03bd\u03bf\u03bc\u03b1:",text:"\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae:",set:"\u039f\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2",cancel:"\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"\u0395\u03bd\u03cc\u03c4\u03b7\u03c4\u03b1 \u03c0\u03b1\u03c1\u03ac\u03b8\u03b5\u03c3\u03b7\u03c2",_localized:{}},"widgets/DataAggregation/setting/nls/strings":{locatorUrl:"\u0394\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 URL \u0395\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf\u03c5 \u0395\u03bd\u03c4\u03bf\u03c0\u03b9\u03c3\u03bc\u03bf\u03cd",set:"\u039f\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2",locatorName:"\u038c\u03bd\u03bf\u03bc\u03b1 \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf\u03c5 \u03b5\u03bd\u03c4\u03bf\u03c0\u03b9\u03c3\u03bc\u03bf\u03cd",
locatorExample:"\u03a0\u03b1\u03c1\u03ac\u03b4\u03b5\u03b9\u03b3\u03bc\u03b1",countryCode:"\u039a\u03c9\u03b4\u03b9\u03ba\u03bf\u03af \u03c7\u03ce\u03c1\u03b1\u03c2 \u03ae \u03c0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ae\u03c2",eg:"\u03c0.\u03c7. ",countryCodeHint:"\u0395\u03ac\u03bd \u03b1\u03c6\u03ae\u03c3\u03b5\u03c4\u03b5 \u03ba\u03b5\u03bd\u03ae \u03b1\u03c5\u03c4\u03ae\u03bd \u03c4\u03b7\u03bd \u03c4\u03b9\u03bc\u03ae, \u03b8\u03b1 \u03b3\u03af\u03bd\u03b5\u03b9 \u03b1\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7 \u03c3\u03b5 \u03cc\u03bb\u03b5\u03c2 \u03c4\u03b9\u03c2 \u03c7\u03ce\u03c1\u03b5\u03c2 \u03ba\u03b1\u03b9 \u03c0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ad\u03c2",
minCandidateScore:"\u0395\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03b7 \u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 \u03c5\u03c0\u03bf\u03c8\u03b7\u03c6\u03af\u03bf\u03c5",minCandidateScoreHint:"\u0395\u03ac\u03bd \u03b1\u03c5\u03c4\u03ae \u03b7 \u03c4\u03b9\u03bc\u03ae \u03bc\u03b5\u03af\u03bd\u03b5\u03b9 \u03ba\u03b5\u03bd\u03ae \u03b8\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af \u03c9\u03c2 \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03b7 \u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 \u03c5\u03c0\u03bf\u03c8\u03b7\u03c6\u03af\u03bf\u03c5 \u03c4\u03bf 90",
enableSingleField:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2 \u03bc\u03bf\u03bd\u03bf\u03cd \u03c0\u03b5\u03b4\u03af\u03bf\u03c5",singleFieldHint:"\u03a4\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2 \u03b8\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c3\u03b5 \u03bc\u03bf\u03bd\u03cc \u03c0\u03b5\u03b4\u03af\u03bf",enableMultiField:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ce\u03bd \u03c0\u03b5\u03b4\u03af\u03c9\u03bd",
multiFieldHint:"\u03a4\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2 \u03b8\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c3\u03b5 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ac \u03c0\u03b5\u03b4\u03af\u03b1",enableXYField:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 X/Y",xyFieldHint:"\u03a4\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03b8\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03bf\u03c5\u03bd \u03c4\u03b9\u03bc\u03ad\u03c2 \u03c3\u03c5\u03bd\u03c4\u03b5\u03c4\u03b1\u03b3\u03bc\u03ad\u03bd\u03c9\u03bd X/Y",
instructionGeocode:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ad\u03c3\u03c4\u03b5 \u03ba\u03b1\u03b9 \u03c0\u03b1\u03c1\u03b1\u03bc\u03b5\u03c4\u03c1\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c5\u03c0\u03b7\u03c1\u03b5\u03c3\u03af\u03b5\u03c2 \u03b5\u03bd\u03c4\u03bf\u03c0\u03b9\u03c3\u03bc\u03bf\u03cd \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c3\u03af\u03b1\u03c2.",invalidUrlTip:"\u0397 URL \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 ${URL} \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7 \u03ae \u03c7\u03c9\u03c1\u03af\u03c2 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2.",
geocodeTabLabel:"\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c3\u03af\u03b1\u03c2",lookupList:"\u039f\u03bd\u03cc\u03bc\u03b1\u03c4\u03b1 \u03c0\u03b5\u03b4\u03af\u03c9\u03bd \u03b3\u03b9\u03b1 \u03b1\u03bd\u03b1\u03b3\u03bd\u03ce\u03c1\u03b9\u03c3\u03b7",isRecognized:"\u03a4\u03b1 \u03bf\u03bd\u03cc\u03bc\u03b1\u03c4\u03b1 \u03c0\u03b5\u03b4\u03af\u03c9\u03bd \u03c3\u03c4\u03bf\u03bd \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9 \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 \u03b1\u03bd\u03b1\u03b3\u03bd\u03c9\u03c1\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03b1 \u03b3\u03b9\u03b1 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf",
needsEditablePointLayers:"\u039f webmap \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 \u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd \u03ad\u03bd\u03b1 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03ac\u03c3\u03b9\u03bc\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c3\u03b7\u03bc\u03b5\u03af\u03c9\u03bd.",editpageAlias:"\u03a8\u03b5\u03c5\u03b4\u03ce\u03bd\u03c5\u03bc\u03bf",
configureFields:"\u0394\u03b9\u03b1\u03bc\u03cc\u03c1\u03c6\u03c9\u03c3\u03b7 \u03c0\u03b5\u03b4\u03af\u03c9\u03bd \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5",configureSingleFields:"\u0394\u03b9\u03b1\u03bc\u03cc\u03c1\u03c6\u03c9\u03c3\u03b7 \u03b5\u03bd\u03cc\u03c2 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 \u03bc\u03af\u03b1\u03c2 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2",configureMultiFields:"\u0394\u03b9\u03b1\u03bc\u03cc\u03c1\u03c6\u03c9\u03c3\u03b7 \u03c0\u03b5\u03b4\u03af\u03c9\u03bd \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ae\u03c2 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2",
configureXYFields:"\u0394\u03b9\u03b1\u03bc\u03cc\u03c1\u03c6\u03c9\u03c3\u03b7 \u03c0\u03b5\u03b4\u03af\u03c9\u03bd X/Y",noFields:"\u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b5\u03bd\u03ad\u03c1\u03b3\u03b5\u03b9\u03b1 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03ba\u03b1\u03b8\u03bf\u03c1\u03af\u03c3\u03b5\u03c4\u03b5 \u03ad\u03bd\u03b1 \u03ae \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1 \u03c0\u03c1\u03bf\u03c2 \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7.",
display:"\u039f\u03b8\u03cc\u03bd\u03b7",duplicate:"\u0395\u03cd\u03c1\u03b5\u03c3\u03b7 \u03b4\u03b9\u03c0\u03bb\u03cc\u03c4\u03c5\u03c0\u03bf\u03c5",duplicateTip:"\u0391\u03bd\u03b1\u03b6\u03b7\u03c4\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf \u03b1\u03c5\u03c4\u03cc \u03b3\u03b9\u03b1 \u03af\u03b4\u03b9\u03b5\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03bc\u03b5\u03c4\u03b1\u03be\u03cd \u03c4\u03bf\u03c5 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5 \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \u03ba\u03b1\u03b9 \u03c4\u03bf\u03c5 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd./n \u038c\u03c0\u03bf\u03c4\u03b5 \u03b4\u03b9\u03b1\u03c0\u03b9\u03c3\u03c4\u03ce\u03bd\u03b5\u03c4\u03b1\u03b9 \u03cc\u03c4\u03b9 \u03bf\u03b9 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03af\u03b4\u03b9\u03b5\u03c2, \u03b7 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae \u03b1\u03c0\u03cc \u03c4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf \u03b4\u03b5\u03bd \u03b8\u03b1 \u03b5\u03bd\u03c4\u03bf\u03c0\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03ba\u03b1\u03b9 \u03b8\u03b1 \u03b5\u03c0\u03b9\u03c3\u03b7\u03bc\u03b1\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c9\u03c2 \u03b4\u03b9\u03c0\u03bb\u03cc\u03c4\u03c5\u03c0\u03bf.",
noSelectField:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c0\u03c1\u03ce\u03c4\u03b1 \u03c4\u03b7 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1 \u00abFeature Layer\u00bb.",newNamePlaceholder:"",xyFieldsLabelX:"X (\u0393\u03b5\u03c9\u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03cc \u03bc\u03ae\u03ba\u03bf\u03c2)",xyFieldsLabelY:"Y (\u0393\u03b5\u03c9\u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03cc \u03c0\u03bb\u03ac\u03c4\u03bf\u03c2)",xyFieldsX:"X",xyFieldsY:"Y",easting:"\u039f\u03c1\u03b9\u03b6\u03cc\u03bd\u03c4\u03b9\u03b1 \u03c3\u03c5\u03bd\u03c4\u03b5\u03c4\u03b1\u03b3\u03bc\u03ad\u03bd\u03b7",
northing:"\u039a\u03b1\u03c4\u03b1\u03ba\u03cc\u03c1\u03c5\u03c6\u03b7 \u03c3\u03c5\u03bd\u03c4\u03b5\u03c4\u03b1\u03b3\u03bc\u03ad\u03bd\u03b7",lon:"\u0393\u0395\u03a9\u0393\u03a1. \u039c\u0397\u039a\u039f\u03a3",lat:"\u0393\u0395\u03a9\u0393\u03a1. \u03a0\u039b\u0391\u03a4\u039f\u03a3",layerOptionHint:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c3\u03c4\u03bf \u03bf\u03c0\u03bf\u03af\u03bf \u03b8\u03b1 \u03c5\u03c0\u03bf\u03b2\u03bb\u03b7\u03b8\u03bf\u03cd\u03bd \u03c4\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1.",
layerFieldTitle:"\u0398\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd",tempSymbolHint:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03bf \u03c3\u03cd\u03bc\u03b2\u03bf\u03bb\u03bf \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c4\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7 \u03c4\u03c9\u03bd \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd.",
tempSymbolTitle:"\u03a3\u03cd\u03bc\u03b2\u03bf\u03bb\u03bf \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7\u03c2",maxRecords:"\u039c\u03ad\u03b3. \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ad\u03c2",maxRecordsHint:"\u039c\u03ad\u03b3. \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ce\u03bd \u03c0\u03c1\u03bf\u03c2 \u03b5\u03bd\u03c4\u03bf\u03c0\u03b9\u03c3\u03bc\u03cc",searchRadius:"\u0391\u03ba\u03c4\u03af\u03bd\u03b1 \u03b1\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7\u03c2",
searchRadiusHint:"\u0391\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03b1\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7 \u03b4\u03b9\u03c0\u03bb\u03ce\u03bd \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd \u03b1\u03c0\u03cc \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf",requiresInteger:"\u039a\u03b1\u03c4\u03b1\u03c7\u03c9\u03c1\u03af\u03c3\u03c4\u03b5 \u03b1\u03c1\u03b9\u03b8\u03bc\u03b9\u03ba\u03ae \u03c4\u03b9\u03bc\u03ae.",
requiresInteger0100:"\u039a\u03b1\u03c4\u03b1\u03c7\u03c9\u03c1\u03af\u03c3\u03c4\u03b5 \u03b1\u03c1\u03b9\u03b8\u03bc\u03b9\u03ba\u03ae \u03c4\u03b9\u03bc\u03ae \u03b1\u03c0\u03cc \u03c4\u03bf 0 \u03c9\u03c2 \u03c4\u03bf 100.",requiresLocator:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ad\u03c3\u03c4\u03b5 \u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd \u03ad\u03bd\u03b1 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf \u03b5\u03bd\u03c4\u03bf\u03c0\u03b9\u03c3\u03bc\u03bf\u03cd.",
layerFields:"\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5",layerFieldsHint:"\u0391\u03c0\u03cc \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \u03ba\u03b1\u03b8\u03bf\u03c1\u03af\u03c3\u03c4\u03b5 \u03c0\u03b5\u03b4\u03af\u03b1 \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b1\u03bd\u03c4\u03b9\u03c3\u03c4\u03bf\u03b9\u03c7\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03bc\u03b5 \u03c4\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1 \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2.",
locatorError:"\u03a4\u03bf \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf \u03b5\u03bd\u03c4\u03bf\u03c0\u03b9\u03c3\u03bc\u03bf\u03cd \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf \u03ae \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03c1\u03bf\u03c3\u03b2\u03ac\u03c3\u03b9\u03bc\u03bf.",optionNotMatch:"\u039f\u03b9 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2 \u03c0\u03b5\u03b4\u03af\u03c9\u03bd \u03b4\u03b5\u03bd \u03c3\u03c5\u03bc\u03c6\u03c9\u03bd\u03bf\u03cd\u03bd \u03bc\u03b5 \u03cc\u03bb\u03b1 \u03c4\u03b1 \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03b1 \u03b5\u03bd\u03c4\u03bf\u03c0\u03b9\u03c3\u03bc\u03bf\u03cd. \u0397 \u03b1\u03bd\u03b1\u03c4\u03ba\u03b1\u03c4\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 \u03b5\u03bd\u03b4\u03ad\u03c7\u03b5\u03c4\u03b1\u03b9 \u03bd\u03b1 \u03bc\u03b7\u03bd \u03b5\u03ba\u03c4\u03b5\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03bc\u03b5 \u03c4\u03bf\u03bd \u03b1\u03bd\u03b1\u03bc\u03b5\u03bd\u03cc\u03bc\u03b5\u03bd\u03bf \u03c4\u03c1\u03cc\u03c0\u03bf.",
targetLayerTabTitle:"\u0398\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd",locationSettingsTabTitle:"\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c3\u03af\u03b1\u03c2",generalSettingsTabTitle:"\u0393\u03b5\u03bd\u03b9\u03ba\u03ad\u03c2 \u03c1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2",addTargetLayersLabel:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd",
introductoryText:"\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03b5\u03ba\u03c0\u03b1\u03b9\u03b4\u03b5\u03c5\u03c4\u03b9\u03ba\u03bf\u03cd \u03c0\u03b5\u03c1\u03b9\u03b5\u03c7\u03bf\u03bc\u03ad\u03bd\u03bf\u03c5 \u03b3\u03b9\u03b1 \u03c4\u03bf widget",defaultStartPageInstructions:"\u0391\u03c5\u03c4\u03cc \u03c4\u03bf widget \u03b8\u03b1 \u03b2\u03bf\u03b7\u03b8\u03ac \u03c3\u03c4\u03b7\u03bd \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03ba\u03b1\u03b9 \u03c3\u03c4\u03b7\u03bd \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf \u03c3\u03c4\u03bf \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c3\u03c4\u03bf\u03bd \u03c7\u03ac\u03c1\u03c4\u03b7.\x3cbr/\x3e \x3cbr/\x3e \u039f\u03b9 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03b5\u03bd\u03c4\u03cc\u03c2 \u03c4\u03bf\u03c5 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03b9\u03b1\u03c7\u03c9\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03b5\u03c2 \u03bc\u03b5 \u03ba\u03cc\u03bc\u03bc\u03b1, \u03c3\u03c4\u03b7\u03bb\u03bf\u03b8\u03ad\u03c4\u03b7, \u03ac\u03bd\u03c9 \u03c4\u03b5\u03bb\u03b5\u03af\u03b1 \u03ae \u03ba\u03ac\u03b8\u03b5\u03c4\u03bf.",
noTargetLayerConfiguredErrorMsg:"\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03c0\u03b1\u03c1\u03b1\u03bc\u03b5\u03c4\u03c1\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af \u03ba\u03b1\u03bd\u03ad\u03bd\u03b1 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd.",noFieldsForTargetLayer:"\u039f\u03b9 \u03c1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd.",
locationSettingsNotConfigured:"\u039f\u03b9 \u03c1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c3\u03af\u03b1 \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03b1\u03c1\u03b1\u03bc\u03b5\u03c4\u03c1\u03bf\u03c0\u03bf\u03b9\u03b7\u03bc\u03ad\u03bd\u03b5\u03c2 \u03cc\u03c0\u03c9\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9.",questionMark:";",_localized:{}}});