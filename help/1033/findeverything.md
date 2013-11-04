##What's Find Everything?

EverEdit supports universal find window from version 3.0(MainMenu->Search->Find Everything). It combines all find operations into a input/result docking window such as text find/replace, open files,tags search etc...

##Exact Match
In order to find text/files exatctly, you can limit your search range with below heading chars:

```
#：查找打开的文件或者工程中的文件。直接输入#的话，将会显示出所有已打开的文件
@：在工程文件或者已打开的文件中进行符号查找(符号解析由ctags执行)
/：在当前文档中执行文本查找，查找默认为增量查找
!：执行外部程序
纯数字：在当前文档中进行行跳转
```

##Tags的刷新
在打开工程文件的时候，依据相关设定，工程会自动刷新并创建tags。如果删除、修改、增加了文件，tags是不会自动刷新的。这个时候如果需要显示最新的tags，可以使用菜单命令或者当焦点在输入框的时候，按F5。

同样，已打开的文件中的tags也是不会自动刷新的，需要用户手动刷新。Tags刷新完成时在状态栏会有相应的文本提示信息。

##Tags的自动完成
一旦tags被创建完毕，那么在文件中输入字符时，tags就有可能被显示出来。自动完成中出现的Tags的提示符为#。

##Tags符号的意义
在进行tags查找时，对应的条目均以一个字母表示的icon进行显示，各个icon的意义如下：

```
F：Function 函数
C：Class 类
D：Define 定义
V：Var 变量
E：Enum 枚举
N：Namespace 命名空间
T：Type 类型
```

##字符串查找操作
查找和替换， 有四种操作:

```
/find/replace/mode
/find/replace/
/find/mode
/find
```

其中mode各个字符的参数含义为:

```
r:正则表达式
a:全部(查找全部， 替换全部)
i:忽略大小写
w:全字匹配
f:高速模式
o:在所有打开的文件中执行全部替换
H:不高亮
```

如果不指定mode， 那么默认为 大小写区分，普通查找，非高速模式，查找高亮，非全字匹配.

当是高速模式的时候， 始终进行全部替换， 不论是否设置a!

比如我们要想查找单词ever的时候， 可以这么写/ever;要想让它不匹配大小写，这么写/ever/i;使用正则式的话，这么写/ever/ir.

如果我们要把ever替换为now的话， 这么写/ever/now/;使用模式的话/ever/now/ir等等!

技巧:在用命令行进行查找时， Enter是向下查找， Ctrl+Enter是向上查找; 进行替换的时候， 如果想忽略本次替换， 请使用Shift+Enter. 
