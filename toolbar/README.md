##ToolBar's format

User defined toolbar is stored as a pure text file(ini format), you can edit with Everedit or any other text editors!

##How to import an image file
[ToolBar]
ImageXX=**common.bmp**

Image16: the icon size is 16*16
Image32: the icon size is 32*32

**Note**:Everedit only supports 16*16 or 32*32 now.

**Image Format:**The image should be a bitmap(RGB with alpha).

##How to add a button
[ButtonXX]
Icon=XX
Command0=XX,XX,XX

##Command Format
There are 3 params of a command.

* type(0:a text inserting command, 1:a dll function, can't be empty)
* Hover Text(he toolbar will display this text on mouse hovering this button, can't be empty)
* Text(can't be empty)
  * type is 0:Everedit will insert this text
	* type is 1:The format of this part should be DllName,FunctionName,Some Vars; Everedit will execute [FunctionName](EE_Plugin*, button rect, text) in [DllName]

##Dll Fucntion
The dll should be a pure C DLL and located at toolbar directory, and the format of functions should follow the below define.

DWORD FunctionName(EE_Plugin*, LPRECT, LPCTSTR)
