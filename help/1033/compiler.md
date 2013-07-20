##VC 2005/VC 2008/VC 2008/VC2010
**Create a bat file and save as c:\vc.bat (Example for VC 2008)**

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

**External tool:**

```
Title:VC
Command:"c:\vc.bat"
Arguments:"$(FilePath)"
Initial Directory:$(FileDir)
ActionPattern:Capture Output
```
```
Location Pattern:
Regular Expression:^(.*?)\((\d+)\) :
FilePath: Capture 1
Line: Capture 2:
```

##Tiny C Compiler: TCC
**External tool:**

```
Title:TCC
Command:"c:\Program Files (x86)\tcc\tcc.exe" -run
Arguments:"$(FilePath)"
Initial Directory:$(FileDir)
Action Pattern: Capture Output
```
```
Location Pattern:
Regular Expression:^(.*):(\d+)
FilePath:Capture 1
Line:Capture 2
```

##CSharp 
**Create a bat file and save as c:\charp.bat**

```
@ECHO OFF
"c:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe" /target:exe %1

SET exefile=%~n1.exe
IF EXIST "%exefile%" (
	 ECHO Run: %exefile%
	 "%exefile%"
)
```

**External tool:**

```
Title:CSharp
Command:"c:\csharp.bat"
Arguments:"$(FilePath)"
Initial Directory:$(FileDir)
ActionPattern:Capture Output
```