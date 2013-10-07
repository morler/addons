#简介
EverEdit内置VBS/JScript作为基础的脚本解释引擎。在EverEdit内部，VBS/JScript不仅可以用来进行常见的文本操作，也可以定义着色文件。VBS/JScript易学易懂，和Windows关系紧密。借助于VBS/JScript， EverEdit可以完成很多匪夷所思的功能，JScript和JavaScript非常的像，但是二者不是一回事，请不要混淆！ 本文并不着重于介绍VBS/JScript的基础语法和用法， 如您需要学习VBS/JScript的基础部分， 请参考相关文档。
 
**注意**：EverEdit识别的后缀为mac，evb和ejs，mac和evb为VBScript，ejs为JScript。

#脚本的保存

为了简化和方便管理，在EE中被调用的脚本，要统一地放置到安装目录下的[macro]目录中。您可以在[macro]目录中，使用子目录作为分类，脚本的后缀必须为mac，ejs或者evb，EE暂时不识别其它的后缀。所有被放置到[macro]目录中的文件都会显示在[addon]菜单中，如未显示，您可以点击[Reload Macros]试试看。

#绑定快捷键

您是不是觉得每次都通过鼠标来运行脚本效率非常的低下呢！没关系，EE为您准备了强大的快捷键。打开[Tools]-[Settings]-[Shortcut]，然后拖放一个脚本到这儿吧!具体的快捷键请参考快捷键
 
#内置对象和函数

##Application

```
//函数
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

//属性
Document ActiveDoc;
HexDoc ActiveHex;
Document document;
OutputWindow OutputWindow;
string AppPath;
```

###重要函数说明

```
Menu CreateMenu();
创建菜单。该菜单的弹出将会跟随鼠标位置。
```

```
void SendCommand(int nCmd);
发送整数形式的命令到主窗口，nCmd是整数值，对应着菜单中的某个菜单项的ID。
```

```
void SendCommandEx(string strText);
发送字符串形式的命令到主窗口，具体命令可参考快捷键中显示的文本。
```

```
void WebPreview(string strPathName);
web预览指定路径的文件，预览的web文件将会链接当前活动的文档窗口。可以使用C+B在链接的文档间切换。
```

```
void OutputText(string strText, bool bClear=false, bool bTerminate=false);
输出文本到输出窗口, bCase:是否清除当前文本；bTerminate:是否终止当前正在运行的程序。
```

```
string ShowInputBox(string strPrompt, string strTitle);
弹出文本输入框。strPrompt:提示文字；strTitle:对话框的标题。
```

```
int ShowMsgBox(string strText, string strTitle, int buttons);
弹出消息对话框。strText:对话框中的文本；strTitle:对话框的标题。buttons:对话框按钮的组合。

有以下几种组合(摘自MSDN):

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
显示chm或者hlp后缀的帮助文件。strPathName:帮助文件的全路径。
strWord:打开帮助文件时自动查找的词汇。如果为空，则定位到起始页。
```

```
string CreateTempFile(bool bAutoDelete);
创建临时文件。bAutoDelete:主程序结束时是否自动删除。
```

```
void DebugLibrary(string strPathName);
用于调试插件DLL。通过个简单的脚本(App.DebugLibrary "xxxx.dll")加载指定路径的DLL，
结合开发工具(比如Visual Studio)的附加到进程的功能，可以非常方便地达到调试DLL的目的。
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

###重要函数说明
```
Menu CreateMenu();
创建菜单。菜单的弹出位置将会跟随光标Caret。
```

```
void Refresh();
强制刷新、重绘文档。
```

```
bool HasSel();
当前文档是否含有普通选区。列选和多选会返回False。
```

```
void ClearSel();
清除选区包括多选和列选。
```

```
void InsertAt(int line, int col, string strText);
指定坐标处插入文本。
```

```
void Insert(string strText);
当前光标处插入文本。
```

```
void MoveCaret(int nLength);
以光标位置为基准，把光标移动指定长度。注意：换行符也会被计算在内。
```

```
void IndentInsert(string strText);
插入文本。被插入的文本从第二行开始按照首行的文本进行缩进。
```

```
void Delete(int sline, int scol, int eline, int ecol);
void Delete(Pos spos, Pos epos);
void Delete();
删除指定位置的文本。如果不带任何参数，相当与按一次delete键。
```

```
void SetSyntax(string strText);
设置文档的语法模式。strText:语法的标题,可以在语法配置中查找。
该设置会影响到所有和语法相关的设置，比如模式、工具分组等。
```

```
void SetSel(int sline, int scol, int eline, int ecol);
void SetSel(Pos pos1, Pos pos2);
设置普通选区。
```

```
int AddSel(Pos pos1, Pos pos2);
指定范围的文本。添加到选区。如果该范围和当前选区不重合，那么自动变成多选。
```

```
Pos Offset2Pos(int nOffset);
int Pos2Offset(Pos pos);
偏移和行列位置之间的转换。
```

```
int ReplaceAll(string strFind, string strReplace, bool bCase=true, bool bRegex=false, bool bWord=false);
替换全部。
```

```
int FindAll(string strFind, bool bCase=true, bool bRegex=false, bool bWord=false);
查找匹配的指定文本字符串，并显示到输出窗口。
```

```
bool FindNext(string strFind, bool bCase=true, bool bRegex=false, bool bWord=false);
以当前光标位置为基准，向下查找并高亮匹配的指定字符串，未找到则返回False。
```

```
string GetWord(int flag);
依据flag获取光标处的文本。flag的取值如下:

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
获取指定行的子行数。
```

```
int  InsertSnippet(string strSnippet);
插入snippet到光标处。
```

```
void CommentLine(string strCommentLine, bool bComment);
void CommentBlock(string strCommentOn, string strCommnetOff, bool bComment);
按照文档的语法模式注释、反注释当前行或者选区文本。
```

```
void write(string strText);
void writeln(string strText);
void close();
模拟js的操作。
```

```
bool ExportTo(string strPathName, int nCodepage=/*same as document*/, bool bBom=/*same as document*/, int nEol=/*same as document*/)
导出当前buffer到指定路径(如果文档被修改，则连同被修改的内容一起导出)。strPathName:目的路径；nCodepage:导出为指定编码的文件；bBom:是否添加BOM(仅在UTF 16/8下有效)；nEol:换行符的类型。换行符取值如下：

WIN=1
UNIX=2
MAC=3
```

##Menu

```
添加菜单项到该菜单,nCommand为该项目的ID(必须>0)
void AddItem(int nCommand, string strText);

弹出菜单
int Popup();

依据ID获取选定的菜单项
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

设置输出窗口的跳转模式。strText:用正则表达式描述的跳转模式, file/line/col:指定分组描述了文件名、行、列
void SetJumpPattern(string strText, int file, int line, int col);
void ClearJumpPattern();
void Clear();

终止输出窗口中正运行的进程
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
 
 
