EverEdit对外部工具提供了完美的支持，通过外部工具您可以在EverEdit中轻易的配置各种编译器，从而完成简单的IDE工作。如果不通知外部工具，也可以通过脚本来实现。
脚本配合mode可以为某种语言开发出一系列定制的操作。

以下举例说明几种常见的编译器的设定：

##VC 2005/VC 2008/VC 2008/VC2010
**创建一个批处理，内容如下，另存为c:\vc.bat。您需要根据VS的环境修改其中的部分内容。**

```
@ECHO OFF
CALL "%VS90COMNTOOLS%vsvars32.bat"
"c:\Program Files (x86)\Microsoft Visual Studio 9.0\VC\bin\cl.exe" %1

SET exefile=%~n1.exe
IF EXIST "%exefile%" (
ECHO Run: %exefile%
"%exefile%"
)
```

**外部工具:**

```
标题:VC
命令:"c:\vc.bat"
参数:"$(FilePath)"
初始目录:$(FileDir)
动作模式:捕获输出
```
```
错误定位:
Regular Expression:^(.*?)\((\d+)\) :
FilePath: Capture 1
Line: Capture 2:
```

##Tiny C Compiler: TCC
**外部工具:**

```
标题:TCC
命令:"c:\Program Files (x86)\tcc\tcc.exe" -run
参数:"$(FilePath)"
初始目录:$(FileDir)
Action Pattern: 捕获输出
```
```
错误定位:
Regular Expression:^(.*):(\d+)
FilePath:Capture 1
Line:Capture 2
```

##CSharp 
**创建一个批处理，内容如下，另存为c:\csharp.bat。您需要根据自己的环境修改其中的部分内容。**

```
@ECHO OFF
"c:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe" /target:exe %1

SET exefile=%~n1.exe
IF EXIST "%exefile%" (
	 ECHO Run: %exefile%
	 "%exefile%"
)
```

**外部工具:**

```
标题:CSharp
命令:"c:\csharp.bat"
参数:"$(FilePath)"
初始目录:$(FileDir)
动作模式:捕获输出
```