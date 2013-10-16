You can easily customize shortcuts of EverEdit with GUI dialog. Scriptss/User Tools and Menu commands all support shortcut customization. And, EverEdit also supports multiple keys. For example, Ctrl+K,F will enable reading mode.

##Filter commands
You can input commands or menu text to filter commands quickly.

##Bind shortcut
Input first shortcut in New Keys area. If you want to use multiple keys, continue to input second key. EverEdit supports 4 functions keys:`Ctrl,Shift,Alt,Win`.

##Bind shortcut to a Script
There are a couple of built-in script commands in Add-Ons Menu. These commands don't be displayed in the shortcut dialog. If you want to bind shortcuts to these commands, There are 2 ways:

1. Drag and drop a script file into shortcut dialog to bind a shortcut
2. Click bind button.

##Format of shortcut
All shortcuts are saved with plain text format into key.ini, you can modify keys manually.

Example:

```
CSA+B
```

The chars before plus+ are( C: Control; S: Shift; A: Alt; W: Win )

The chars after plus are:

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