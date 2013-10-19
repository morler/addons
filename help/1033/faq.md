##How to config the size of Tab?
Each syntax higlight has it own tab size setting.

**Temporary Change**: Click status bar's Tab area and select your tab size.

**Permanent Change**: Open syntax dialog, find your syntax file, and then change the tab size.
##How to change syntax highlight for current file?
1. Click syntax area of statusbar
2. MainMenu->Document->Change Type

##How to hide column marker?
1. MainMenu->View->Show Symbols->Column Marker
2. Go goto syntax dialog and config column marker via advanced button.

##How to change current encoding of document?
1. Click encoding area of statusbar and select Convert Encoding
2. MainMenu->Document->Convert Encoding

##How to set default encoding and line break format?
MainMenu->Tools->Settings->General->File->New file or 0 byte file

##How to set default encoding and line break format for empty file?
MainMenu->Tools->Settings->General->File->New file or 0 byte file

##How to set default syntax highlight
Open syntax dialog and click the green check button. If you want to remove default highlight, just click the remove button.

##How to config line height?
MainMenu->View->Line Spacing

##How to display white space, control chars?
MainMenu->View->Show Symbols

##How to change the style of folding?
MainMenu->Tools->Settings->General->Style->Folding Style

##How to higlight selection?
Right click->Custom Marker

##How to delete duplicated lines or blank lines?
Right click->Delete->Delete duplicated lines or Delete blank lines

##How to comment selection quickly?
Right click->Format->Line Comment or Block comment, the most useful shortcut is `Ctr+/`

##How to reload all syntax highlights without restarting EverEdit?
MainMenu->Document->Advanced->Update Syntax

##How to make EverEdit topmost?
MainMenu->Window->Always on Top

##How to sort lines by length of each line?
MainMenu->Tools->Sort->check [sort by length of line]

##How to use soft space?
1. Temporary Change:Click tab area and select soft space
2. Permanent Chang:Open syntax dialog and check [use spaces to replace tab]

##How to paste text to each line from clipboard?
Right click->Other paste->Paste at line tail

##How to paste text that copied from other programs with column mode?
Right click->Other paste->Paste as Column

##How to convert case? How to convert tabs to spaces or spaces to tabs?
Right click->Convert

##How to set a special font for Chinese/Japanese/Korean characters?
MainMenu->Tools->Settings->Set Font

Select your current font and check [CJK characters use second font].

##How to terminate current running external tools in output window?
Right click in output window and select terminate

##Does EverEdit support Emmet(Zencoding)?
Yes, Everedit fully supports Emmet, you can use most of Emment's commands. Ctrl+E is default shortcut for abbreviation, other commands can be got from MainMenu->Html.

**Note**:Emment only works on html scope.

##Can I use EverEdit to beautify some sources?
There are 3 built-in beautify tools: HTML/JavaScript/CSS. Other beautify commands can be easily added from external tools/scripts/plugins.

##Dose EverEdit supports markdown?
Yes, EverEdit not only supports highlight of markdown but also preview function and EverEdit provides many built-in commands for markdown. Just switch to markdown mode and Enjoy!

##EverEdit如何把当前文件放在另一个分组中
在标签上点击右键，选择`移动到垂直或者水平分组`即可。在`窗口`菜单中也有相同的命令。

##EverEdit的Markdown预览能指定CSS样式吗
可以。markdown预览支持外挂css样式。打开`mode\markdown.esm`，找到下面这一行：

```
Command0=1,Markdown Preview,${AppPath}\mode\markdown\MarkdownBar.dll,MarkdownPreview,github.css
```

后面的*.css改为您需要的css即可，css文件应该放在`mode\markdown`目录下。

##如何让保存图标在文件没有被修改时变为灰色
主菜单→工具→通常→文件→文件未被修改时也可以保存，去掉这个勾即可。

##如何添加自己的代码片段
可以通过主`菜单→查看→代码片段`来添加、修改、删除代码片段。您可以新建自己的代码片段分组，作为日常使用。代码片段被存储为一个ini文件于snippet目录，您可以直接编辑该文件来达到批量追加的目的，具体请参考snippet的帮助资料。

如果您希望自己添加的分组能够出现在某种编程语言当中，那么需要在该语法文件中进行绑定。比如绑定c.snippet到C++中：

```
cpp.AddSnippet "c.snippet"
```
##为什么EverEdit的内置浏览器不是安装的最新版浏览器呢
Windows对使用内置IE进行显示文件进行了一些控制，按照如下设置修改默认注册表设置即可：

打开如下的key：
```
Key=HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BROWSER_EMULATION
```

新建一个Type为`REG_DWORD`的值，输入9000(十进制)，保存即可。

##如何更改HTML/C++新建文件时的默认文字
这些文字在EverEdit均存储于模板文件中[template]文件夹下，因此你只要修改对应的模板文件即可

##如何自定义新建文件的下拉列表，使之可以显示自己的模板文件
EverEdit会自动显示所有已设置模板的语法文件。一次你只要到对应的语法着色中，为该语言设定模板文件即可。模板文件存储在[template]文件夹中。

##主题对话框有哪些使用技巧呢
主题对话框支持颜色的复制和粘贴。你可以把光标放到一个颜色上，然后右键，复制或者粘贴即可。主题对话框同时还支持多选，按Shift或者Ctrl进行扩展选择。多选之后支持对选择的部分一次性设置颜色或者属性。

##我的EverEdit在编辑某些文件时突然变的特别慢
主菜单→工具→常规→性能，检查一下[语法高亮的字符个数上限]是否设置的过大，典型的值应该小于1000.

##Emmet的展开快捷键是Ctrl+E，可以更改为其它的吗？
当然可以，EverEdit的模式支持单级或者多级快捷键。打开mode\html.esm，找到如下的代码：

```
[Menu4]
Key=C+E
Command0=3,Abbreviation,${AppPath}\mode\html\abbrev.ejs
```

把上面的Key改为您喜欢的快捷键即可。比如改为Tab上方的`符号。

```
[Menu4]
Key=`
Command0=3,Abbreviation,${AppPath}\mode\html\abbrev.ejs
```

##EverEdit有文件收藏夹功能吗
EverEdit没有为开发专门的收藏夹功能，不过可以通过快捷目录或者工程来模拟。使用工程的话，可以自定义目录名称，非常方便。推荐使用工程来模拟收藏夹。

