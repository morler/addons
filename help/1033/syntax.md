##Color defines
When you are preparing the syntax files, you must want to distinguish the colors of each type. There are a couple of built-in colors in EverEdit.

**Note:** The value of each color should be defined in Themes.

<table>
  <tr>
		<th>Value</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><code>COLOR_DEFAULT</code></td>
		<td>Normal text without any syntax state</td>
	</tr>
	<tr>
		<td><code>COLOR_COMMENT1</code></td>
		<td>Single line comment, example:<code>//</code> in C/C++</td>
	</tr>
	<tr>
		<td><code>COLOR_COMMENT2</code></td>
		<td>Block line comment, example:<code>/*your comment*/</code> in C/C++</td>
	</tr>
	<tr>
		<td><code>COLOR_STRING1</code></td>
		<td>Single quoted string, example:<code>'your single quoted string'</code> in PHP</td>
	</tr>
	<tr>
		<td><code>COLOR_STRING2</code></td>
		<td>Double quoted string, example:<code>"your double quoted string"</code> in PHP</td>
	</tr>
	<tr>
		<td><code>COLOR_TAG</code></td>
		<td>Use for HTML/XML tag match, EverEdit could find the matched tag automatically</td>
	</tr>
	<tr>
		<td><code>COLOR_MACRO</code></td>
		<td>Macro define, example:<code>#define/Import/Range VALUE 100</code> in C/C++/C#/Java</br></td>
	</tr>
	<tr>
		<td><code>COLOR_URL</code></td>
		<td>URL, example:<code>http://www.everedit.net</code></td>
	</tr>
	<tr>
		<td><code>COLOR_EMAIL</code></td>
		<td>Email address, example:<code>support@everedit.net</code></td>
	</tr>
	<tr>
		<td><code>COLOR_NUMBER</code></td>
		<td>Numbers, example:<code>10,0x20,1.35</code></td>
	</tr>
	<tr>
		<td><code>COLOR_FOUND</code></td>
		<td>When you search something, EverEdit will use this state to draw the found text</td>
	</tr>
	<tr>
		<td><code>COLOR_PAIR</code></td>
		<td>Paired strings, expample:<code>()[]{}<>""''</code></td>
	</tr>
	<tr>
		<td><code>COLOR_FUNCTION</code></td>
		<td>Function name</td>
	</tr>
	<tr>
		<td><code>COLOR_VAR</code></td>
		<td>Variables</td>
	</tr>
	<tr>
		<td><code>COLOR_SUBLAN</code></td>
		<td>Sub-language, example:<code><script></script></code> in HTML</td>
	</tr>
	<tr>
		<td><code>COLOR_OPERATOR</code></td>
		<td>Operators, example:<code>+-*/ ++ --</code></td>
	</tr>
	<tr>
		<td><code>COLOR_WORD1</code></td>
		<td>Key word 1, built-in keywords. example:<code>int bool double do while</code> in C/C++/Java</td>
	</tr>
	<tr>
		<td><code>COLOR_WORD2</code></td>
		<td>Key word 2, framework keywords. example:<code>CString CMap CArray</code> in MFC</td>
	</tr>
	<tr>
		<td><code>COLOR_WORD3</code></td>
		<td>Key word 3</td>
	</tr>
	<tr>
		<td><code>COLOR_WORD4</code></td>
		<td>Key word 4</td>
	</tr>
	<tr>
		<td>
		<code>COLOR_HIGHLIGHT1</code>~<code>COLOR_HIGHLIGHT8</code>
		</td>
		<td>User defined highlight, used for custom marker</td>
	</tr>
	<tr>
		<td><code>COLOR_IGNORE</code></td>
		<td>The foreground color of text will be same as the background. It can only be displayed on selecting</td>
	</tr>
	<tr>
		<td><code>COLOR_CONCEAL</code></td>
		<td>The text will not be displayed expect activating or selecting this line</td>
	</tr>
</table>

##Script

SyntaxItem

```
//Functions
void Capture(int group, int state);
//Properties
string Name;//get,set
```

WordItem

```
//Properties
bool AutoCase;//get,set
string Name;//get,set
```

SyntaxRegion

```
//Functions
bool AddSnippet(string strPathName, bool bCase)
void AddItem(SyntaxItem item );
void AddWord(WordItem item );
void AddRegion(SyntaxRegion child );
void FoldText(string strFold, bool bFCase, string strUnFold, bool bUFCase);
void CommentBlock(string strOn, string strOff);
void CommentLine(string strText);
void SetPairs(string strText);
void IndentText(string strIndnet, bool c1, string strUnIndnet, bool c2);
void AddCallTip( string strPathName, bool bCase, string strWord="", string strBegin="(", string strSep=",", string strEnd=")", bool bRemoveSpace=false );

//Properties
void TransRegion;
string Name;//get;set
```

Parser

```
//Functions
bool AddSnippet(string strPathName );
void AddItem(SyntaxItem item );
void AddWord(WordItem item );
void AddRegion(SyntaxRegion child);
SyntaxRegion CopyRegion(SyntaxRegion pCopy);
SyntaxItem CreateItem(int state, string strMatch, bool bCase, bool bToRight=false);
WordItem CreateWord(int state, string strMatch, bool bCase, string strDelimiters="");
SyntaxRegion CreateRegion(int state, string strBegin, string strEnd, bool bCase, bool bToRight=false );
SyntaxRegion CreateStringRegion(int state, string strChar, string strEscape, bool mline );
void FoldText(string strFold, bool bFCase, string strUnFold, bool bUFCase);
void IndentText(string strIndnet, bool c1, string strUnIndnet, bool c2);
void FoldAnyText(int nLevel, string strText);
void SetPairs(string strText);
void CommentBlock(string strOn, string strOff);
void CommentLine(string strText);
void AddCallTip( string strPathName, bool bCase, string strWord="", string strBegin="(", string strSep=",", string strEnd=")", bool bRemoveSpace=false );
 
//Properties
string Name;//get,set
string FoldingMethod;//get,set
string WordChars;//get,set
SyntaxRegion DefaultRegion;//get
```

##Sample:Create a syntax highlight for C++
This is a sample that tells you hot to define a new syntax highlight for EverEdit!

Well, let's look at some key syntax elements of C/C++:

```
Single line comment
Multiple line comment
String
Key word
```

Mose of syntax schemes contain the above key elements, so we should highlight these text.

###1. Create a File
Create a mycpp.mac and put it into (syntax) folder;

###2. Include color define file
There are a couple of colors which can be used in EverEdit, so let's include the colors define.

```
Include( ".\const.mac" )
```

###3. Create a Parser object
```
Set cpp=Parser.CreateParser()
```

###4. Add single line comment match
This match should be a region which starts from // and ends with End of Line(EOL).

```
Set regionLine=cpp.CreateRegion( COLOR_COMMENT1, "+//+", "$", True )
```

Note:The text surrounded with plus(+) means that this is a normal string match, otherwise it will be a match with regular expression.(This usage is valid in CreateRegion function).

###5. Add multiple line comment match
```
regionBlock=cpp.CreateRegion( COLOR_COMMENT1, "+/*+", "+*/+", True )
```

###6. Add string match
``` 
Set regionString=cpp.CreateStringRegion( COLOR_STRING1, """", "\", False )
```

The last param of CreateStringRegion means whether the match will be continue to next line!

###7. Add key word match
``` 
Set itemWord2=cpp.CreateWord(COLOR_WORD1, "int float double char void for while if else return break continue", True)
```

There are 4 params in CreateWord function. The last one is a string which contains the delimiters that can be treated as word.

For example:
``` 
cpp.CreateWord(COLOR_WORD1, "bottom-top bottom-right", True, "-")
```

###8. Add matches into Parser
``` 
cpp.AddRegion( regionLine )
cpp.AddRegion( regionBlock )
cpp.AddRegion( regionString )
cpp.AddItem( itemWord )
```

###9. Overview

```
Include( ".\const.mac" )
Set cpp=Parser.CreateParser()
Set regionLine=cpp.CreateRegion( COLOR_COMMENT1, "+//+", "", True )
Set regionBlock=cpp.CreateRegion( COLOR_COMMENT1, "+/*+", "+*/+", True )
Set regionString=cpp.CreateStringRegion( COLOR_STRING1, """", "\", False )
Set itemWord=cpp.CreateItem(COLOR_WORD1, "\b(int|float|double|char|void|for|while|if|else|return|break|continue)\b", True)
cpp.AddRegion( regionLine )
cpp.AddRegion( regionBlock )
cpp.AddRegion( regionString )
cpp.AddItem( itemWord )
```

##Sample2:Enhance C++ syntax highlight

###1. Add todo match in comment region

Create todo Match:

```
Set itemTodo=cpp.CreateItem(COLOR_HIGHLIGHT1, "\bTODO\b", True)
```


Add todo match into single/multiple line comment:

```
regionLine.AddItem( itemTodo )
regionBlock.AddItem( itemTodo )
```

###2. Code folding

C++ source files are normally folded begin with { and end with }
```
cpp.FoldText "\{", False, "\}", False
```

###3. Auto Indent

``` 
cpp.IndentText "\{$", False, "^\s*}$", False

```

###4. Add auto pair complete
``` 
cpp.SetPairs "[]{}()""""''"
```

###5. Add quick line comment
``` 
cpp.CommentLine "//"
cpp.CommentBlock "/*", "*/"
```
Now you can use <key>Ctrl+/</key> to comment your selelction or current line quickly.
