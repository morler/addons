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

##How to mark selection with colors?
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

##How to move current document to another group?
1. Right click tab area of document bar and select [Move to ...group]
2. MainMenu->Window->[Move to ...group]

##Can I customize the style of Markdown preview?
Yes. Open the below files as your requirement:

```
export.ejs
mkd2html.ejs
webview.ejs
```

```
//Change this line
var css=App.AppPath+"\\mode\\markdown\\" + "default.css";
```

##How to disable the save button of toolbar if current document is not modified?
MainMenu->Tools->Settings->General->File->[Enable save function is document is not modified]

##How to customize snippets?
MainMenu->View->Snippet, you could use snippet manager to delete/modify/add items for exist ones. You can also create a new one, but don't forget to add it into proper syntax region.

For example:
```
cpp.AddSnippet "xxx.snippet"
```
##I installed the latest IE already, but why can't webpreview use some new features of browser?
Windows blocks some new features for normal applications that have embedded IE.

```
Key=HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BROWSER_EMULATION
```

Create a new registry key from above with path:

```
Name:everedit.exe
Type:REG_DWORD
Value:9000
```

##How to change the default text on creating documents?
These text are called template in EverEdit and all templates are stored in [template] folder, just open and edit it.

##How to create a new template and make it appears in the [new file] drop-down list?
EverEdit will display all templates that associated with syntax highlights. So, you need to bind a template your syntax first.

MainMenu->Tools->Settings->Syntax->Template

##Can I change the default abbrev shortcut of Emmet?
Yes. Open mode\html.esm:

```
[Menu4]
Key=C+E
Command0=3,Abbreviation,${AppPath}\mode\html\abbrev.ejs
```

Change the key to your favorite one suh as 
```
Key=`
or..
Key=C+K,E
```

##Can EverEdit support favorite files function?
EverEdit don't support this feature natively. But you can use project to simulate it.

##Can EverEdit open files which beyond 2GB?
You can use EverEdit x64 edition to open files with any size. EverEdit 32bit can only open files less than 2GB.

##I can't save my license to file!
If you installed EverEdit into Program Files directory on Windows Vista+, make sure you have right permission. If you couldn't save license to files, run EverEdit as administrator and try again!

