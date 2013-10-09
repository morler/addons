Calltip is a very convenient function and it could display some helpful information such as function prototypes, help texts. EverEdit will popup a window above caret to show these info on inputting some chars.
 
##Useage
First of all, let's look the declaration of calltip.

```
void AddCallTip( string strPathName, bool bCase, string strWord="", string strBegin="(", string strSep=",", string strEnd=")", bool bRemoveSpace=false );
```

**strPathName:** File name of calltip. calltip mush be stored in calltip directory.

**bCase:** Case sensitive?

**strWord:** It means the chars that will be treated as word on inputting. It's difficult to understand this param. For example，in c or c++:

```
fclose   (fp);
```

There are some spaces between fclose and left parentheses, in this case, strWord will be " ". Of curse, if there are some other special chars, you should include them also.

**strBegin:** The start char on invoking a function, generally it would be left parentheses(. Calltip window will be displayed on inputting this char.

**strSep:** The delimiter of params, generally it would be comma.

**strEnd:** The end char of a function, generally it would be right parentheses)

**bRemoveSpace:** EerEdit will lookup the calltip file and try to find out proper text. bRemoveSpace means whether remove the spaces of strWord or not on matching text.

##How to make a calltip file
Calltip files are stored in calltip directory, the file name should be easily understand. One line saves one function. The prototype and description text are separated by \n. 

Example:

```
abs(int x):int\nReturns the absolute value of x
```

This function's prototype is `int abs(int x)`, we put the return type at tail to match text efficiently.

##Encoding of calltip file
Calltip must be saved with UTF-8 and without BOM.

##Last step
Calltip has a work scope, so you must link calltip with syntax file explicitly.


Example, link cpp.ecp to C/C++:

```
cpp.AddCallTip "c.ecp", True, " ", "(", ",", ")", True
```

If you just want this calltip work on some syntax regions(not global), you should link it with your regions as below.

```
rJsRegion.AddCallTip "js.ecp", True, "."
```
