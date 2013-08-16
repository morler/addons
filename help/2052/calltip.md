##CallTip简介
CallTip顾名思义，就是在输入的时候，能够实时的显示一些简单的调用信息。在EverEdit中，当你输入某些特定的字符的时候，会在输入的上方自动的显示一些函数的原型信息。当然通过适当的配置，也可以显示其它的信息。

##CallTip使用
先来看一下CallTip在语法着色中的定义:

```
void AddCallTip( string strPathName, bool bCase, string strWord="", string strBegin="(", string strSep=",", string strEnd=")", bool bRemoveSpace=false );
```

**strPathName:** calltip的文件名称，calltip文件必须放在calltip文件夹下

**bCase:** calltip是否是大小写匹配的

**strWord:** 指定在输入的触发键时， 该触发键前面可以被认为是单词的字符。这个比较抽象，以c语言举例说明:

```
fclose   (fp);
```

`fclose`和`(`之间的空白，也就是空格，在这个地方就是strWord，当然如果这儿还有制表符，那么strWord中应该包含制表符等等。

**strBegin:** 函数调用的起始字符，一般是左括号。只有当输入该字符时，calltip才会显示。

**strSep:** 函数参数之间的分隔符，一般是逗号。

**strEnd:** 函数结束字符，一般是右括号。

**bRemoveSpace:** 该参数指定是否删除上文中的示例`fclose`和`(`之间的空白。

##Calltip文件的制作
calltip文件存储于calltip文件夹中，文件名称应该具有显著的意义。calltip文件被存储为不带BOM的UTF-8编码的文件。

每一行存储一个函数，每个函数分为两部分：函数原型和说明，中间用换行符\n隔开。

```
abs(int x):int\nReturns the absolute value of x
```
如上文所示，该函数的原型为`int abs(int x)`。我们把返回值的类型放在最后是为了进行高效的匹配。最后面的字符串是该函数的说明。

##最后一步
在您准备完上述工作之后，还有最后一步。每个calltip文件是有作用域的，您需要明确的告诉语法文件需要加载哪个calltip。

比如，c语言加载cpp.ecp:

```
cpp.AddCallTip "c.ecp", True, " ", "(", ",", ")", True
```

如果您期望该calltip只作用于某个特定的region，那么只需要该region加载calltip即可，比如html中的js:

```
rJsRegion.AddCallTip "js.ecp", True, "."
```
