#State/Color defines
When you are preparing the syntax files, you must want to distinguish the colors of each type. There are a couple of built-in colors in EverEdit.

**Attention:** The value of each color should be defined in Themes.


##COLOR_IGNORE&COLOR_CONCEAL
**COLOR_IGNORE**: The foreground color of text will be same as the background. It can only be displayed on selecting.
**COLOR_CONCEAL**: The text will not be displayed expect activating or selecting this line.


#Parser
You should use this class to create syntax parsers, define some rules to describe your specific file type, and then EverEdit could draw the text according to your rules.


#SyntaxWord
SyntaxWord is a collection list which contains your keywords. We can use SyntaxWord to define keyword match, it’s faster than regular expression match. Besides, there is a useful property of SyntaxWord, AutoCase! The SyntaxWord with AutoCase property could automatic correct your input with right case.

#SyntaxItem
SyntaxItem was generally be used to describe a regular expression match pattern. A SyntaxItem can be added to multiple SyntaxRegion, but the Color/State was only one which belongs to its parent region. If you want to match a same string, but the Color/State was different, you should create it again.

#SyntaxRegion
SyntaxRegion is a very important object in EverEdit’s parser. If you create a parser, EverEdit will create a default region automatically; all other regions will be added to this default region. Region can be added recursively, but one region just has only one parent region. Do not try to add a same region to multiple parent regions.


#Sample
##Create a simple C++ Parser
....
