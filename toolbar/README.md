##About User Defined Toolbar
Most of users want to link a customized toolbar for some special file type,
such as HTML or Markdown. Everedit will switch this toolbar automatically on changing current view.

##File format
User defined toolbar is stored as a pure text file (ini format), you can edit with Everedit or any other text editors!

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

####Command Format
There are 3 params of a command.
<table>
	<tr>
		<td>type</td>
		<td>0:insert a snippet</br>1:call a dll function</td>
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

##Call a dll function from etb file
Example:

```
Command0=1,Hover text,MyDll.dll,MyDllFunctionName,lpText
```

The dll shoud be located at toolbar directory, otherwise you should tell the full path of dll to Everedit.

```
Command0=1,Hover text,c:\windows\MyDll.dll,MyDllFunctionName,lpText
```
##Link toolbar to a file type
1. Main menu->Tools->Syntax
1. Select your file type
1. Click advacned button
1. Select your toolbar
