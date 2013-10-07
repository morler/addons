#About

EverEdit uses VBScript/JScript as the built-in script engine. You could use VBS/JScript to manage your documents and define syntax highlights. Recommend you use VBScript to write scripts for EverEdit. VBScript is very simple and powerful, you could expand VBScript ability via COM.

VBScript files should be saved with .mac or .evb and JScript shoule be .ejs.

#Save Script
In order to manage scripts, all the files should be placed in [macro] directory and EverEdit will automatically build a menu for scrips. After adding/deleting scripts, you'd better refresh the menu by clicking [Reload Macros...] from Addons menu.

#Bind a shortcut
Open shortcut manager and drag-drop a script file into the dialog or click [Bind] button to add a script file into Shortcut View and then just set the shortcut as normal commands.
 
#Built-in Object and Functions

##Application
Application object represent current main exe of EverEdit.

```
//functions
Menu CreateMenu();
void Sleep(DWORD dwMillisec);
void SendCommand(int nCmd);
void SendCommandEx(string strCommand);
void WebPreview(string strPathName);
Document NewDoc();
Document OpenDoc(string strPathName);
void OutputText(string strText, bool bClear=false, bool bTerminate=false);
string ShowInputBox(string strPrompt, string strTitle);
int ShowMsgBox(string strText, string strTitle, int buttons);
int ShowHtmlHelp(string strPathName, string strWord);
string CreateTempFile(bool bAutoDelete);
void DebugLibrary(string strPathName);

//properties
Document ActiveDoc;
HexDoc ActiveHex;
Document document;
OutputWindow OutputWindow;
string AppPath;
```

###Application's Functions

```
Menu CreateMenu();
Create a menu and the menu will follow the global cursor position.
```

```
void SendCommand(int nCmd);
Send a command into main window, main window is a integer which means the ID of menu item.
```

```
void SendCommandEx(string strText);
Send a command via a text description such as cm_edit_find etc...
Get more details through shortcut dialog.
```

```
void WebPreview(string strPathName);
Open a file with web view and the current document will link to the opened web view. So, you could use Ctrl+B to switch between them.
```

```
void OutputText(string strText, bool bClear=false, bool bTerminate=false);
Output some texts into OutputWindow.
bClear: Clear the exist content?
bTerminate: Terminate running process?
```

```
string ShowInputBox(string strPrompt, string strTitle);
Popup a input box.
strPrompt:promopt text
strTitle: title of input box.
```

```
int ShowMsgBox(string strText, string strTitle, int buttons);
Popup a message box.
strText: message text
strTitle: title of message box
buttons: buttons and icons.

Ref the below define values to set buttons:

#define MB_OK                       0x00000000L
#define MB_OKCANCEL                 0x00000001L
#define MB_ABORTRETRYIGNORE         0x00000002L
#define MB_YESNOCANCEL              0x00000003L
#define MB_YESNO                    0x00000004L
#define MB_RETRYCANCEL              0x00000005L
#define MB_CANCELTRYCONTINUE        0x00000006L

#define MB_ICONHAND                 0x00000010L
#define MB_ICONQUESTION             0x00000020L
#define MB_ICONEXCLAMATION          0x00000030L
#define MB_ICONASTERISK             0x00000040L
```

```
int ShowHtmlHelp(string strPathName, string strWord);
Open a chm or hlp file and locate the content via strWord.
strWord: If strWord is empty, start page will be displayed.
```

```
string CreateTempFile(bool bAutoDelete);
Create a temporary file.
bAutoDelete: delete this file automatically after closing EverEdit?
```

```
void DebugLibrary(string strPathName);
This function is used for debug a plugin that developed by C/C++.
You could attach process of EverEdit easily via this function.,
```

##Document
Document represents the text documents

```
//functions
Menu CreateMenu();
void SendCommand(int nCmd);
void Refresh();
bool HasSel();
void ClearSel();
void InsertAt(int line, int col, string strText);
void Insert(string strText);
void MoveCaret(int nLength);
void IndentInsert(string strText);
void Delete(int sline, int scol, int eline, int ecol);
void Delete(Pos spos, Pos epos);
void Delete();
void SetSyntax(string strText);
void SetCaretPos(int line, int col, bool bVisible);
void SetSel(int sline, int scol, int eline, int ecol);
void SetSel(Pos pos1, Pos pos2);
int AddSel(Pos pos1, Pos pos2);
Pos Offset2Pos(int nOffset);
int Pos2Offset(Pos pos);
int ReplaceAll(string strFind, string strReplace, bool bCase=true, bool bRegex=false, bool bWord=false);
int FindAll(string strFind, bool bCase=true, bool bRegex=false, bool bWord=false);
bool FindNext(string strFind, bool bCase=true, bool bRegex=false, bool bWord=false);
string GetWord(int flag);
string GetLineText(int nLine);
int  GetLineLength(int nLine);
int  GetWrapCount(int nLine);
int  InsertSnippet(string strSnippet);
void CommentLine(string strCommentLine, bool bComment);
void CommentBlock(string strCommentOn, string strCommnetOff, bool bComment);
void write(string strText);
void writeln(string strText);
void close();
bool ExportTo(string strPathName, int nCodepage=/*same as document*/, bool bBom=/*same as document*/, int nEol=/*same as document*/)
 
//properties
Pos SelStartPos;
Pos SelEndPos;
bool Dirty;
int CaretLine;
int CaretCol;
int LineCount;
string PathName;
string Scope;
string EndOfLine;
void GroupUndo;//set
Pos CaretPos;//get,set
string SelText;//get,set
int Codepage;//get,set
int TabStop;//get,set
bool SoftTab;//get,set
string Text;//get,set
```

###Document' Functions
```
Menu CreateMenu();
Create a menu and this menu will follow the caret of this document.
```

```
void Refresh();
Force to redraw current document.
```

```
bool HasSel();
Does current document contain normal selection?
Normal selection: True
Multiple Selection/Column Selection: False
```

```
void ClearSel();
Clear all selection(Normal/Multiple/Column)
```

```
void InsertAt(int line, int col, string strText);
Insert text var line and column.
```

```
void Insert(string strText);
Insert text on current caret position
```

```
void MoveCaret(int nLength);
Move caret to next position via nLength.
Note:Line breaks are also included.
```

```
void IndentInsert(string strText);
Insert text on caret position and the texts from second line will use same indent as first line.
```

```
void Delete(int sline, int scol, int eline, int ecol);
void Delete(Pos spos, Pos epos);
void Delete();

Delete text. Delete() is equal to Press Delete Key. 
```

```
void SetSyntax(string strText);
Set syntax highlight of current document.
strText: title of syntax highlight, ref Syntax Dialog to get more details about syntax title.
```

```
void SetSel(int sline, int scol, int eline, int ecol);
void SetSel(Pos pos1, Pos pos2);

Set normal selection.
```

```
int AddSel(Pos pos1, Pos pos2);

Add region into selection. 
```

```
Pos Offset2Pos(int nOffset);
int Pos2Offset(Pos pos);

Convert between offset and position.
```

```
int ReplaceAll(string strFind, string strReplace, bool bCase=true, bool bRegex=false, bool bWord=false);

strFind: find what
strReplace: replace to
bCase: case sensitive?
bRegex: use regular expression?
bWord: word only?
```

```
int FindAll(string strFind, bool bCase=true, bool bRegex=false, bool bWord=false);

Find text and output all matches to OutputWindow.
Note: This function doesn't support multiple line search.

bCase: case sensitive?
bRegex: use regular expression?
bWord: word only?
```

```
bool FindNext(string strFind, bool bCase=true, bool bRegex=false, bool bWord=false);

Find text from caret position and select it. If result exists, return True otherwise return False.
bCase: case sensitive?
bRegex: use regular expression?
bWord: word only?
```

```
string GetWord(int flag);
Get the word from caret position via flag.

Flag values as below:

#define GETWORD_LWORD           1
#define GETWORD_RWORD           2
#define GETWORD_WORD            GETWORD_LWORD|GETWORD_RWORD
#define GETWORD_LEDGE           4
#define GETWORD_REDGE           8
#define GETWORD_EDGE            GETWORD_LEDGE|GETWORD_REDGE
#define GETWORD_LSYNTAX         16
#define GETWORD_RSYNTAX         32
#define GETWORD_SYNTAX          GETWORD_LSYNTAX|GETWORD_RSYNTAX
#define GETWORD_LSYNTAX2        64
#define GETWORD_RSYNTAX2        128
#define GETWORD_SYNTAX2         GETWORD_LSYNTAX2|GETWORD_RSYNTAX2
```

```
int  GetWrapCount(int nLine);

Get sub lines' count.
```

```
int  InsertSnippet(string strSnippet);

Insert a snippet on caret position.
```

```
void CommentLine(string strCommentLine, bool bComment);
void CommentBlock(string strCommentOn, string strCommnetOff, bool bComment);

Comment lines with Line Comment Char or Block Comment Chars.
bComment:comment or uncomment?
```

```
void write(string strText);
void writeln(string strText);
void close();

simulate some js's funtions.
```

```
bool ExportTo(string strPathName, int nCodepage=/*same as document*/, bool bBom=/*same as document*/, int nEol=/*same as document*/)
Export current buffer into a file.

strPathName: destination directory
nCodepage: codepage, utf-8 is 65001 native encoding is 0.
bBom: add bom?
nEol: formant of line break(WIN=1,UNIX=2,MAC=3)
```

##Menu

```
void AddItem(int nCommand, string strText);

Add item into menu, nCommand must >0
```

```
int Popup();

Popup this menu
```

```
string GetText(int nCommand)

Get menu text via nComand
```

##Pos

```
int Line;//get,set
int Col;//get,set
```

##OutputWindow

```
void OutputText(string strText);
void OutputLine(string strText);
```

```
void SetJumpPattern(string strText, int file, int line, int col);

Set the jump pattern of output window with a regular expression.(Jump pattern: OutputWindow will navigate to proper files by clicking the line of output window )
Example:
SetJumpPattern "(.*?):(\d+):(\d+):", 0, 1, 2
```

```
void ClearJumpPattern();

Clear jump patterns.
```

```
void Clear();

Clear the text of OutputWindow
```

```
void Terminate();

Terminate running process.
```

```
void Show();
void Hide();

Show or hide OutputWindow
```

##HexDoc

```
void SendCommand(int uCommand);

Send a integer command.
```

**In developing and you can't use the below functions!**

```
void InsertText(int nOffset, string strText);
void InsertText(string strText);
void InsertBinary(int nOffset, string strText);
void InsertBinary(string strText);
void SetCaretPos(int nOffset);
int GetSize();
void InsertChar( int ch );

//properties
int CaretPos;//get,set
```
 
 
