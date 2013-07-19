/*
  TextFX for EverEdit
  -------------------
    Written by Kaffa (kaffacoffee@outlook.com)
    Homepage: http://forum.everedit.net/
    20130713022754
*/
Include(App.AppPath + "\\macro\\common\\L.js");

//TextFX Characters
function convertQuotesToDoubleQuotes(s) {
    return s.replace(/'/g, '"');
}
function convertQuotesToSingleQuotes(s) {
    return s.replace(/"/g, "'");
}
function swapQuotes(s) {
    return s.replace(/["']/g, function(ch) {
        if (ch == "'") {
            return '"';
        }
        else if (ch == '"'){
            return "'";
        }
    });
}
function dropQuotes(s) {
    return s.replace(/["']/g, '');
}
function escapeDoubleQuotes(s) {
    return s.replace(/"/g, '\\"');
}
function escapeSingleQuotes(s) {
    return s.replace(/'/g, "\\'");
}
function escapeSingleQuotesToDoubleQuotes(s) {
    return s.replace(/'/g, '\\"');
}
function escapeQuotes(s) {
    return s.replace(/(["'])/g, '\\$1');
}
function unEscapeDoubleQuotes(s) {
    return s.replace(/\\"/g, '"');
}
function unEscapeSingleQuotes(s) {
    return s.replace(/\\'/g, "'");
}
function unEscapeDoubleQuotesToSingleQuotes(s) {
    return s.replace(/\\"/g, "'");
}
function unEscapeQuotes(s) {
    return s.replace(/(\\["'])/g, "$1");
}
function escapeDoubleQuotesToTwo(s) {
    return s.replace(/"/g, '""');
}
function escapeSingleQuotesToTwoDoubleQuotes(s) {
    return s.replace(/'/g, '""');
}
function unEscapeTwoDoubleQuotesToOne(s) {
    return s.replace(/""/g, '"');
}
function unEscapeTwoDoubleQuotesToSingleQuote(s) {
    return s.replace(/""/g, "'");
}
function upperCase(s) {
    return s.toUpperCase();
}
function lowerCase(s) {
    return s.toLowerCase();
}
function properCase(s) {
    s = s.toLowerCase().replace(/( [a-z])/g, function (ch) {
        return ch.toUpperCase();
    });
    return s.slice(0, 1).toUpperCase() + s.slice(1);
}
function sentenceCase(s) {
    s = s.toLowerCase().replace(/(. [a-z])/g, function (ch) {
        return ch.toUpperCase();
    });
    return s.slice(0, 1).toUpperCase() + s.slice(1);
}
function invertCase(s) {
    return s.replace(/[a-zA-Z]/g, function (ch) {
        if (/[a-z]/.test(ch)) {
            return ch.toUpperCase();
        }
        else if (/[A-Z]/.test(ch)) {
            return ch.toLowerCase();
        }
    });
}
function zapCharsToSpace(s) {
    return s.replace(/[\x00-\xff]/g, ' ').replace(/[^\x00-\xff]/g, '  ');
}
function zapNonPrintableCharsToSharp(s) {
    return s.replace(/[\t]/, '####').replace(/[\s]/, '#');
}

//TextFX Insert
//{"I:Current Full Path",pfinsertCurrentFullPath,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"I:Current File Name",pfinsertCurrentFileName,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"I:Current Directory",pfinsertCurrentDirectory,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"I:Date && Time - short format",pfinsertShortDateTime,0,FALSE NPPPLUGINACCELERATOR(&skinsertShortDateTime)},
//{"I:Date && Time - long format",pfinsertLongDateTime,0,FALSE NPPPLUGINACCELERATOR(NULL)},
function insertFullPath(s) {
    insert(geDoctFullName());
}
function insertFileName() {
    insert(getDocName());
}
function insertFileNameNonExt() {
    insert(getDocName().split(os.extsep)[0]);
}
function insertDirectory() {
    insert(getDocPath());
}
function insertDateShortFormat() {
    var d = new Date();
    var s = d.getYear().toString() + '-' + (d.getMonth() + 1).toString() + '-' + d.getDate().toString(); 
    insert(s);
}
function insertDate() {
    var d = new Date();
    var s = d.getYear().toString() + '-' + addLeadingZero(d.getMonth() + 1) + '-' + addLeadingZero(d.getDate());
    insert(s);
}
function insertDateKaffa() {
    var d = new Date();
    var s = d.getYear().toString() + addLeadingZero(d.getMonth() + 1) + addLeadingZero(d.getDate());
    insert(s);
}
function insertDateTimeShortFormat() {
    var d = new Date();
    var s = d.getYear().toString() + '-' + (d.getMonth() + 1).toString() + '-' + d.getDate().toString() + ' ' + 
            d.getHours().toString() + ':' + d.getMinutes().toString() + ':' + d.getSeconds().toString();
    insert(s);
}
function insertDateTime() {
    var d = new Date();
    var s = d.getYear().toString() + '-' + addLeadingZero(d.getMonth() + 1) + '-' + addLeadingZero(d.getDate()) + ' ' + 
            addLeadingZero(d.getHours()) + ':' + addLeadingZero(d.getMinutes()) + ':' + addLeadingZero(d.getSeconds());
    insert(s);
}
function insertDateTimeKaffa() {
    var d = new Date();
    var s = d.getYear().toString() + addLeadingZero(d.getMonth() + 1) + addLeadingZero(d.getDate()) + 
            addLeadingZero(d.getHours()) + addLeadingZero(d.getMinutes()) + addLeadingZero(d.getSeconds());
    insert(s);
}
//******************************************************************************************************
//struct FuncItem funcItem[]={
//{"!:TEXTFX NULL FUNCTION",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//#if NPPDEBUG /* { it wasn't automatic at first */
//{"Q:(Experimental) Temp Function",pftemp,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:(Experimental) Display Clipboard Info",pfinsertclipinfo,0,FALSE NPPPLUGINACCELERATOR(NULL)},
////{"Q:Convert EOLs",pfconverteol,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:(Experimental) Insert Menu Info",pfshowmenuinfo,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:(Experimental) ReSave",pfSave,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:(Experimental) ReLoad",pfReLoad,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:(Experimental) Insert Unicode Caps Tables",pfInsertUnicodeCapsTables,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:(Experimental) Clipboard GlobalAlloc size test",pfclipboardsizetest,0,FALSE NPPPLUGINACCELERATOR(NULL)},
////{"Q:(Experimental) Build New Menu",pfbuildmenu,0,FALSE NPPPLUGINACCELERATOR(NULL)},
////{"Q:(Experimental) Display wID",pfdisplaywIDtest,0,FALSE NPPPLUGINACCELERATOR(NULL)},
////{"Q:(Experimental) Build Dynamic Menus",buildallIDLOOKUP,0,FALSE NPPPLUGINACCELERATOR(NULL)},
////{"Q:(Experimental) Destroy Dynamic Menus",freeallIDLOOKUP,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:About (Experimental) Tools",pfAboutExperimental,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)}, // Notepad++ does not allow NULL functions so we pick a dummy
//#endif /* } */

//{"Convert quotes to \"",pfconvert1q2q,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Convert quotes to '",pfconvert2q1q,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Swap quotes (\" <-> ')",pfconvertqtswap,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Drop quotes \" && '",pfconvertqtdrop,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)}, // Notepad++ does not allow NULL functions so we pick a dummy
//{"Escape \" to \\\"",pfconvertescapesq,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Escape ' to \\'",pfconvertescape1qs1q,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Escape ' to \\\"",pfconvertescape1qsq,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Escape both \"&&' to \\\"&&\\'",pfconvertescapeboth,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"unEscape \\\" to \"",pfconvertunescapesq,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"unEscape \\' to '",pfconvertunescapes1q1q,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"unEscape \\\" to '",pfconvertunescapesq1q,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"unEscape both \\\"&&\\' to \"&&'",pfconvertunescapeboth,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Escape \" to \"\"",pfconvertescape2q22q,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Escape ' to \"\"",pfconvertescape1q22q,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"unEscape \"\" to \"",pfconvertunescape22q2q,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"unEscape \"\" to '",pfconvertunescape22q1q,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"UPPER CASE",pfconvertuppercase,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"lower case",pfconvertlowercase,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Proper Case",pfconvertpropercase,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Sentence case.",pfconvertsentencecase,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"iNVERT cASE",pfconvertinvertcase,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Zap all characters to space",pfzapspace,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Zap all non printable characters to #",pfzapnonprint,0,FALSE NPPPLUGINACCELERATOR(NULL)},

//{"Q:Mark Word or Find Reverse"/*" ∑±ÃÂ÷ß≥÷"*/,pfMarkWordFindReverse,0,FALSE NPPPLUGINACCELERATOR(&skMarkWordFindReverse)},
//{"Q:Mark Word or Find Forward",pfMarkWordFindForward,0,FALSE  NPPPLUGINACCELERATOR(&skMarkWordFindForward)},
//{"Q:+Mark Word or Find Case Sensitive",pfMarkWordFindCaseSensitive,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:+Mark Word or Find Whole Words",pfMarkWordFindWholeWord,0,FALSE NPPPLUGINACCELERATOR(NULL)},
////{"Q:Show Style",pfshowstyle,0,FALSE NPPPLUGINACCELERATOR(NULL)},
////{"Q:Find In Other View",pffindinotherview,0,FALSE NPPPLUGINACCELERATOR(NULL)},
////{"Q:Switch selection to rectangular",pfswitchseltorectangular,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:Find matching {([<Brace>])}",pffindmatchchar,0,FALSE  NPPPLUGINACCELERATOR(&skfindmatchchar)},//Ctrl-B in Notepad++
//{"Q:Mark to matching {([<Brace>])}",pfmarkmatchchar,0,FALSE  NPPPLUGINACCELERATOR(&skmarkmatchchar)},
//{"Q:Delete Marked {([<Brace>])} Pair",pfdeletebracepair,0,FALSE  NPPPLUGINACCELERATOR(&skdeletebracepair)},
////{"Q:Delete Between Marked {([<Brace>])} Pair",pfdeletebracepaircontents,0,FALSE  NPPPLUGINACCELERATOR(&skdeletebracepaircontents)},
//{"Q:Mark lines to matching {([<Brace>])}",pfmarkmatchline,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//#if ENABLE_AutoShowMatchline
//{"Q:Show line matching Brace])}",pfshowmatchline,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//#endif
//#if ENABLE_FINDREPLACE
//{"Q:Find/Replace",pffindreplace,0,FALSE  NPPPLUGINACCELERATOR(&skfindreplace)},
//#endif
//{"Q:Duplicate Line or Block",pfDuplicateLineOrBlock,0,FALSE  NPPPLUGINACCELERATOR(&skDuplicateLineOrBlock)},

//#if ENABLE_PUSHPOP
//{"Q:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:Push position",pfpushposition,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:Push position and jump to first occurance of (Clipboard)",pfpushjumpposition,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"Q:Recall/Pop position",pfpopposition,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//#endif
////{"V:Show/Hide 'All' Set Line Range",pfvizshowselectedalllines,0,FALSE NPPPLUGINACCELERATOR(NULL)}, // proposed
////{"V:Show/Hide 'All' Clear Range",pfvizshowselectedalllines,0,FALSE NPPPLUGINACCELERATOR(NULL)}, // proposed
//{"V:Show Between-Selected or All-Reset Lines",pfvizshowselectedalllines,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Hide Between-Selected or All-Reset Lines",pfvizhideselectedalllines,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Invert Visibility Between-Selected or All Lines",pfvizinvertselectedalllines,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Hide Lines with (Clipboard) text",pfvizhidecliplines,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Hide Lines without (Clipboard) text",pfvizhideclipclines,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Show Lines with (Clipboard) text",pfvizshowcliplines,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Show Lines without (Clipboard) text",pfvizshowclipclines,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Show More Lines around my position...",pfvizshowmorelines,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Hide/Show sequence all steps",pfvizsequenceall,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Hide/Show sequence singlestep start",pfvizsequencestart,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Hide/Show sequence singlestep next",pfvizsequencenext,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Hide/Show sequence singlestep rest",pfvizsequencerest,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Select as Hide/Show sequence",pfvizselectassequence,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Insert Show/Hide Sequence",pfvizinsertsequence,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Copy Visible Selection",pfvizcopyvisible,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Cut Visible Selection",pfvizcutvisible,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Delete Visible Selection",pfvizdeletevisible,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Copy Invisible Selection",pfvizcopyinvisible,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Cut Invisible Selection",pfvizcutinvisible,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Delete Invisible Selection",pfvizdeleteinvisible,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Copy Entire Selection (no append)",pfcopyallnoappend,0,FALSE  NPPPLUGINACCELERATOR(&skcopyallnoappend)},
//{"V:Cut Entire Selection (no append)",pfcutallnoappend,0,FALSE  NPPPLUGINACCELERATOR(&skcutallnoappend)},
//{"V:Copy && Append Entire Selection",pfcopyallappend,0,FALSE  NPPPLUGINACCELERATOR(&skcopyallappend)},
//{"V:Cut && Append Entire Selection",pfcutallappend,0,FALSE  NPPPLUGINACCELERATOR(&skcutallappend)},
//{"V:Paste as UTF-8/ANSI",pfVizPasteUTF8,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"V:Paste",pfVizPasteUNICODE,0,FALSE  NPPPLUGINACCELERATOR(&skVizPasteUNICODE)},
////{"V:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"W:+Viz Text Search Case Sensitive",pfVizCaseSensitive,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"W:+Viz Text Search Whole Words",pfVizWholeWords,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"W:+Viz Text Search Regex",pfVizRegex,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"W:+Viz Copy-Cut Appends to clipboard",pfVizCutCopyAppend,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"W:+Viz Copy-Cut always converts to CRLF",pfVizClipboardAlwaysCRLF,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"W:+Viz Copy-Cut replace [NUL] with space",pfVizClipboardReplaceNulls,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"W:+Viz Copy-Cut also in UTF-8",pfVizClipboardCopyAlsoUTF8,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"W:+Viz Copy-Cut not in UNICODE",pfVizClipboardNotUnicode,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"W:+Viz Paste retains position",pfVizPasteRetainsPosition,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"W:+Viz Paste/Append binary",pfVizPasteBinary,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"W:+Viz Paste converts EOL to editor",pfVizPasteToEditorEOL,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"W:+Viz Capture Keyboard Ctrl-C,X,V",pfCaptureCutCopyPaste,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Fill Down Insert",pffilldownins,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Fill Down Overwrite",pffilldownover,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Insert (Clipboard) through lines",pfinsertclipboardcolumn,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Reindent C++ code",pfreindentcode,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Leading space to tabs or tabs to spaces",pfspace2tabs,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Leading space to tabs or tabs to spaces width=8",pfspace2tabs8,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Trim Trailing Spaces",pftrimtrailingspace,0,FALSE NPPPLUGINACCELERATOR(NULL)}, // Notepad++ 3.2 is slow and only trims the entire file
//{"E:Indent text sticky left margin",pfindentlines,0,FALSE  NPPPLUGINACCELERATOR(&skindentlines)},
//{"E:Indent && surround { text lines }",pfindentlinessurround,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Delete Blank Lines",pfdeleteblanklines,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Delete Surplus Blank Lines",pfdeleteblanklines2,0,FALSE NPPPLUGINACCELERATOR(NULL)},
////{"E:Delete Every Other Line",pfdeleteevery2lines,0,FALSE NPPPLUGINACCELERATOR(NULL)}, // completely handled by viz now
//{"E:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Strip unquoted text (VB) separate by (Clipboard<=20)",pffindqtstringvb,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Strip unquoted text (C) separate by (Clipboard<=20)",pffindqtstringc,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Kill unquoted (VB) whitespace",pfkillwhitenonqtvb,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Kill unquoted (C) whitespace",pfkillwhitenonqtc,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Split lines at (clipboard character) or , (VB)",pfsplitlinesatchvb,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Split lines at (clipboard character) or , (C)",pfsplitlinesatchc,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Line up multiple lines by (,)",pflineupcomma,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Line up multiple lines by (=)",pflineupequals,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Line up multiple lines by (Clipboard Character)",pflineupclipboard,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Unwrap Text",pfunwraptext,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:ReWrap Text to (Clipboard or 72) width",pfrewraptext,0,FALSE NPPPLUGINACCELERATOR(NULL)},
////{"E:Extend selection as rectangular to end of file",pfextendblock,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"E:Pad rectangular selection with spaces",pfextendblockspaces,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Encode URI Component",pfencodeURIcomponent,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Encode HTML (&&<>\")",pfencodeHTML,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Strip HTML tags table tabs",pfstripHTMLtags,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Strip HTML tags table nontabs",pfstripHTMLnotabs,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Submit to W3C HTML Validator",pfsubmitHTML,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Submit to W3C CSS Validator",pfsubmitCSS,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert text to code command(\"text=\\\"value\\\"\");",pfprepostpendlines,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert Decimal Number to Binary",pfdecimal2binary,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert Decimal Number to Octal",pfdecimal2octal,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert Decimal Number to Hex",pfdecimal2hex,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert Hex Number to Decimal",pfhex2decimal,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert Octal Number to Decimal",pfoctal2decimal,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert Binary Number to Decimal",pfbinary2decimal,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert C-style Number to Decimal",pfcnum2decimal,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert text to Hex-16",pftohex16,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert text to Hex-32",pftohex32,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert text to Hex-64",pftohex64,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert text to Hex-128",pftohex128,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert hex byte runs into LE-WORDS",pfhexbyterunstolittlendian2,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert hex byte runs into LE-DWORDS",pfhexbyterunstolittlendian4,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert LE-words to hex byte runs",pflittlendiantohexbyteruns,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert Hex to text",pffromhex,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:ROT13 Text",pfrot13,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert EBCDIC to ASCII",pfEBCDIC2ascii,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert ASCII to EBCDIC",pfascii2EBCDIC,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert KOI8_R to CP1251",pfKOI8_Rtocp1251,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"C:Convert CP1251 to KOI8_R",pfcp1251toKOI8_R,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:Sort lines case sensitive (at column)",pfqsortlinesc,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:Sort lines case insensitive (at column)",pfqsortlinesnc,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:+Sort ascending",pfSortAscending,0,TRUE  NPPPLUGINACCELERATOR(NULL)},
//{"T:+Sort outputs only UNIQUE (at column) lines",pfSortLinesUnique,0,TRUE  NPPPLUGINACCELERATOR(NULL)},
//{"T:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:Insert Ascii Chart or Character",pfinsertasciichart,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:Insert Ruler",pfinsertruler,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:Insert Line Numbers",pfinsertlinenumbers,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:Delete Line Numbers or First Word",pfdeletefirstword,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:Clean eMail >Quoting",pfcleanemailquoting,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:UUdecode",pfuudecode,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:Base64 Decode",pfbase64decode,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:Word Count",pfwordcount,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:Add up numbers",pfaddup,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"T:Empty Undo Buffer (be sure to save)",pfemptyundobuffer,0,FALSE NPPPLUGINACCELERATOR(NULL)},

//{"I:Current Full Path",pfinsertCurrentFullPath,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"I:Current File Name",pfinsertCurrentFileName,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"I:Current Directory",pfinsertCurrentDirectory,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"I:Date && Time - short format",pfinsertShortDateTime,0,FALSE NPPPLUGINACCELERATOR(&skinsertShortDateTime)},
//{"I:Date && Time - long format",pfinsertLongDateTime,0,FALSE NPPPLUGINACCELERATOR(NULL)},

//#ifndef HighPerformance
//{"S:+Go Faster, use more memory",pfHighPerformance,0,TRUE  NPPPLUGINACCELERATOR(NULL)},
//#endif
//{"S:+Cancel Overwrite Mode moving from current line",pfBlockOverwrite,0,TRUE  NPPPLUGINACCELERATOR(NULL)},
//{"S:+Autoclose XHTML/XML <Tag>",pfAutoCloseHTMLtag,0,TRUE  NPPPLUGINACCELERATOR(NULL)},
//{"S:+Autoclose {([Brace",pfAutoCloseBrace,0,TRUE  NPPPLUGINACCELERATOR(NULL)},
//{"S:+Autoconvert typed leading spaces to tabs",pfAutoSpace2Tab,0,TRUE  NPPPLUGINACCELERATOR(NULL)},
//#if ENABLE_AutoShowMatchline
//{"S:+Autoshow line matching Brace])}",pfAutoShowMatchline,0,TRUE  NPPPLUGINACCELERATOR(NULL)},
//#endif
//{"S:+Autoconvert typed HTML/XML to &&entities;",pfAutoConvertHTML,0,TRUE  NPPPLUGINACCELERATOR(NULL)},
//{"S:+Disable Subclassing && advanced features",pfDisableSubclassing,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"S:+Move quick menus out of 'Plugins' menu",pfSeparateQuickMenus,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//#if ENABLE_WrapFriendlyHomeEnd
//{"S:+Improve Home-End Movement for Wrapped Text",pfWrapFriendlyHomeEnd,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//#endif
//{"S:+Ctrl-D also dups marked text",pfCtrlDAlsoDupsBlock,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"S:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"S:Visit Notepad++ && "PLUGIN_NAME" website",pfhNotepadweb,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"S:Help",pfhelp,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"S:About "PLUGIN_NAME,pfabout,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//#if NPPDEBUG
//{"H:>Online Help",pfmpxhelprebuild,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//#endif
//#if ENABLE_TIDYDLL
//{"D:About Tidy",pfabouttidy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"D:Visit HTML Tidy SourceForge website",pfhtmltidyweb,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"D:Download libTidy.DLL from SourceForge",pfgethtmltidyweb,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"D:Reload libTidy.DLL",pfreloadtidydll,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"D:Refresh Menu from "NPPTIDY_INI,pfmpxtidyrebuild,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"D:-",pfdummy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//{"D:Tidy (most recent "NPPTIDY_CFG")",pfhtmltidy,0,FALSE NPPPLUGINACCELERATOR(NULL)},
//#endif
//};

function getPopupFn(items) {
    var menu = App.ActiveDoc.CreateMenu();
    for (key in items) {
        menu.AddItem(key, items[key].text);
    }
    var cmd = menu.Popup();
    if (cmd == undefined) {
        return;
    }
    return items[cmd].fn;
}
