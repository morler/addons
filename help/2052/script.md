#简介
EverEdit内置VBS/JScript作为基础的脚本解释引擎。在EverEdit内部，VBS/JScript不仅可以用来进行常见的文本操作，也可以定义着色文件。VBS/JScript易学易懂，和Windows关系紧密。借助于VBS/JScript， EverEdit可以完成很多匪夷所思的功能，JScript和JavaScript非常的像，但是二者不是一回事，请不要混淆！ 本文并不着重于介绍VBS/JScript的基础语法和用法， 如您需要学习VBS/JScript的基础部分， 请参考这儿。
 
**注意**：EverEdit识别的后缀为mac，evb和ejs，mac和evb为VBScript，ejs为JScript。

#脚本的保存

为了简化和方便管理，在EE中被调用的脚本，要统一地放置到安装目录下的[macro]目录中。您可以在[macro]目录中，使用子目录作为分类，脚本的后缀必须为mac，ejs或者evb，EE暂时不识别其它的后缀。所有被放置到[macro]目录中的文件都会显示在[addon]菜单中，如未显示，您可以点击[Reload Macros]试试看。
绑定快捷键

您是不是觉得每次都通过鼠标来运行脚本效率非常的低下呢！没关系，EE为您准备了强大的快捷键。打开[Tools]-[Settings]-[Shortcut]，然后拖放一个脚本到这儿吧!具体的快捷键请参考快捷键
 
#内置对象和函数

##Application

```
//函数
Menu CreateMenu();
void Sleep(DWORD dwMillisec);
void SendCommand(int nCmd);
void SendCommandEx(string strText);
void WebPreview(string strText);
Document NewDoc();
Document OpenDoc(string strPathName);
void OutputText(string strText, bool bClear=false, bool bTerminate=false);
string ShowInputBox(string strPrompt, string strTitle);
int ShowMsgBox(string strText, string strTitle, int buttons);
 
//属性
Document ActiveDoc;
HexDoc ActiveHex;
Document document;
OutputWindow OutputWindow;
string AppPath;
```

##Document

```
//函数
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
int ReplaceAll(string strFind, string strReplace, bool bCase=true, bool bRegex=false, bool bWor=false);
int FindAll(string strFind, bool bCase=true, bool bRegex=false, bool bWord=false);
string GetWord(int flag);
string GetLineText(int);
int  GetLineLength(int);
int  GetWrapCount(int);
int  InsertSnippet(string strSnippet);
void CommentLine(string strCommentLine, bool bComment);
void CommentBlock(string strCommentOn, string strCommnetOff, bool bComment);
void write(string strText);
void writeln(string strText);
void close();
 
//属性
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

##Menu

```
void AddItem(int nCommand, string strText);
int Popup();
string GetText(int nCommand)
```

##Pos

```
int Line;//get,set
int Col;//get,set
```

##OutputWindow

```
//函数
void OutputText(string strText);
void OutputLine(string strText);
void SetJumpPattern(string strText, int file, int line, int col);
void ClearJumpPattern();
void Clear();
void Terminate();
void Show();
void Hide();
```

##HexDoc

```
//函数
void InsertText(int nOffset, string strText);
void InsertText(string strText);
void InsertBinary(int nOffset, string strText);
void InsertBinary(string strText);
void SetCaretPos(int nOffset);
int GetSize();
void InsertChar( int ch );
void SendCommand(int uCommand);
//属性
int CaretPos;//get,set
```
 
 
