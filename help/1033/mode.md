##About User Mode
Most of users want to link a customized toolbar/menu/shortcuts for some special file type,
such as HTML or Markdown. Everedit will switch the toolbar/menu automatically on changing current view.

##File format
**User mode** file is stored as a pure text file (ini format), you can edit with Everedit or any other text editors!

###Import an icon list
```
[ToolBar]
ImageXX=your image file.bmp
```
**Image16**: the icon size is 16\*16

**Image32**: the icon size is 32\*32

You can bind a bmp or png file with 16\*16 or 32\*32.
**Note**:Everedit only supports 16\*16 or 32\*32 now.

###Add a button
```
[ButtonID]
Icon=image index
Command0=type,title,text
```

###Bind a shortcut
**Note**:The shortcut will overwrite the global keys.
Sample:
```
Key=CAS+S
```
**C**:Control

**A**:Alt

**S**:Shift

Keys list:

```
LeftMouseButton
RightMouseButton
Control-Break
MiddleMouseButton
X1MouseButton
X2MouseButton
Undefined
Backspace
Tab
Clear
Enter
Shift
Control
Alt
Pause
CapsLock
IMEKanaMode
IMEJunjaMode
IMEFinalMode
IMEHanjaMode
Esc
IMEConvert
IMENonconvert
IMEAccept
IMEModeChange
Space
PageUp
PageDown
End
Home
Left
Up
Right
Down
Select
Print
Execute
PrintScreen
Ins
Del
Help
0
1
2
3
4
5
6
7
8
9
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
P
Q
R
S
T
U
V
W
X
Y
Z
LeftWin
RightWin
App
Sleep
Num0
Num1
Num2
Num3
Num4
Num5
Num6
Num7
Num8
Num9
Mul
Add
Separator
Sub
Decimal
Div
F1
F2
F3
F4
F5
F6
F7
F8
F9
F10
F11
F12
F13
F14
F15
F16
F17
F18
F19
F20
F21
F22
F23
F24
NumLock
ScrollLock
LeftShift
RightShift
LeftControl
RightControl
LeftAlt
RightAlt
BrowserBack
BrowserForward
BrowserRefresh
BrowserStop
BrowserSearch
BrowserFavorites
BrowserHome
VolumeMute
VolumeDown
VolumeUp
NextTrack
PreviousTrack
StopMedia
Play/PauseMedia
StartMail
SelectMedia
StartApp1
StartApp2
;
Equal
Comma
-
.
/
`
[
\\
]
'
IMEProcessKey
VK_PACKET
Attn
CrSel
ExSel
EraseEOF
Play
Zoom
PA1
Clear
```

####Command Format
There are 3 params of a command.
<table>
	<tr>
		<td>type</td>
		<td>0:insert a snippet</td>
	</tr>
	<tr>
		<td></td>
		<td>1:call a dll function</td>
	</tr>
	<tr>
		<td></td>
		<td>2:Run a exe or open a URL</td>
	</tr>
	<tr>
		<td></td>
		<td>3:Execute a macro file</td>
	</tr>
	<tr>
		<td>title</td>
		<td>Toolbar will display this text on mouse hovering the button(<i>can't be empty</i>)</td>
	</tr>
	<tr>
		<td>text</td>
		<td>type is 0:Everedit will insert this text on current caret pos</br>type is 1:Everedit will call this dll function</br>(<i>can't be empty</i>)</td>
	</tr>
</table>

##DLL Fucntion
The dll should be a pure C DLL and located at toolbar directory, and the format of functions should follow the below type define.

```
DWORD YourDllName(EE_Context* pContext, LPRECT lpButton, LPCTSTR lpText);
```

##Sample code of dll
```
#include <windows.h>
#include "eecore.h"
#include "eesdk.h"

extern "C" {
    _declspec(dllexport) DWORD MyToolBarCallBack(EE_Context* pContext, LPRECT lpRect, LPCTSTR lpText);
};

DWORD MyToolBarCallBack(EE_Context* pContext, LPRECT lpRect, LPCTSTR lpText)
{
	::MessageBox(pContext->hMain, _T("Hello world!"), _T("My DLL"), MB_OK );
	return 0;
}

BOOL APIENTRY DllMain( HMODULE hModule,
                       DWORD  ul_reason_for_call,
                       LPVOID lpReserved
                )
{
    switch (ul_reason_for_call)
    {
        case DLL_PROCESS_ATTACH:
        case DLL_THREAD_ATTACH:
        case DLL_THREAD_DETACH:
        case DLL_PROCESS_DETACH:
        break;
    }
    return TRUE;
}
```


##Call a dll function from ESM file
Example:

```
Command0=1,Hover text,MyDll.dll,MyDllFunctionName,lpText
```

The dll shoud be located at toolbar directory, otherwise you should tell the full path of dll to Everedit.

```
Command0=1,Hover text,c:\windows\MyDll.dll,MyDllFunctionName,lpText
```
##Link ESM file to a syntax type
1. Main menu->Tools->Syntax
1. Select your file type
1. Click advacned button
1. Select your toolbar
