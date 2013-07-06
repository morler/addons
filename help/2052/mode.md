#什么是模式
EverEdit拥有者强大的扩展能力，它可以为每一种编程语言定制一套独有的操作，比如包含菜单、工具条和快捷键。且这些操作只在这种特定的编程语言中起作用，并不会影响其它的。我们把定制出来的这一套东西，称之为模式。

**模式的主要构成元素**：

* 操作类型
* 命令
* 定义文件
* 工具条
* 菜单
* 快捷键

#操作类型
模式文件的操作支持多种类型，每个数字代表不同的类型，如下：

* 0：以snippet的形式插入文本
* 1：调用DLL里面的函数
* 2：执行EXE或者打开URL
* 3：执行一个脚本文件

用户在定义一个操作时一定要明白当前操作的类型是什么。

#命令格式
每个菜单或者按钮的命令遵循严格的格式，如下：

**格式**：{类型},{标题},{文本}

不同的部分之间以逗号进行分割(**不允许夹带空格**)。{文本}部分的具体格式，在调用不同的dll时，根据dll的要求而进行书写。

#定义文件
模式所有的操作被写在后缀为esm为后缀的文件中，放置于[mode]文件夹。模式文件的典型构成为：

```
[ToolBar]
Image16=common.bmp
[Button1]
Icon=5
Command0=...
...
[Menu1]
Command0=...
...
```

#工具条
工具条是由图片和操作构成的,显示在主工具条的下面，支持16x16或者32x32大小的Icon。

定义16x16大小的图片： Image16=common.bmp

定义32x32大小的图片： Image32=common.bmp

当用户在工具条上选择大图标、小图标时，EverEdit将会自动的使用用户定义的大、小图片切换显示。其中32大小的图片不定义的话，将会始终使用16大小的图片。**图片的格式**：位图或者png。

样例代码：

```
;定义第8个按钮
[Button8]
;使用第28个Icon
Icon=28
;定义第一个命令。
Command0=0,Block Quote,<blockquote>${SELECTED}</blockquote>
```

当有多个命令定义到一个按钮中时，按钮会自动显示下拉箭头，供用户进行选择。如下，定义多个操作：

```
[Button22]
Icon=14
command0=0,Text Box,<input type="text" name="$0">
command1=0,List Box,<select name="">\n\t<option value="$0" selected>\n\t<option value="">\n</select>
command2=0,Radio Button,<input type="radio" name="$0">
command3=0,Check Box,<input type="checkbox" name="$0">
```

如需在按钮之间插入分割条的话，使用如下代码：

```
[Button3]
SEP=TRUE
```

#菜单
菜单显示在[Help]之前，[Window]之后。一般不太常用的操作都可以放到菜单中，比如打开特定的网址、文件夹等。菜单的右侧会自动显示出绑定到该操作的快捷键。

样例：

```
[Menu1]
Command0=3,Beautify JS(Selection),${AppPath}\mode\js\jsBeautify.ejs
```

如需在菜单中插入分割线的话，使用如下代码：

```
[Menu14]
SEP=Y
```

#快捷键
模式文件中可以使用任意快捷键，包括多级快捷键。模式文件的快捷键将会覆盖全局快捷键，并且仅在该模式中起作用。快捷键同时可以用于模式的工具条按钮和菜单。

样例：

```
;定义Ctrl+Shift+B到某一个操作
Key=CS+B
Command0=...
```

#Dll函数原型说明
EverEdit的模式文件中同样支持对于dll中函数的调用，从而完成非常复杂的操作。Dll被调用的函数需要遵循以下的函数原型：

```
DWORD YourDllName(EE_Context* pContext, LPRECT lpButton, LPCTSTR lpText);
```

EE_Context：请参考EverEdit的插件SDK的资料。

lpButton：被点击的矩形大小，通常用于菜单弹出的位置判断

lpText：从定义文件传来的参数文本


样例代码：

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

#模式文件中调用Dll函数
样例代码：

```
Command0=1,Hover text,MyDll.dll,MyDllFunctionName,lpText
```

**注意**：lpText处的文本将会作为参数第三个传给MyDllFunctionName


#绑定模式文件到语法文件
在您定义完毕一个模式文件之后，EverEdit并不知道该模式将会被用在哪个语法文件中。所以需要绑定一下。

主菜单→工具→设置→语法着色，选定您的语法文件，然后点击高级，绑定即可！

