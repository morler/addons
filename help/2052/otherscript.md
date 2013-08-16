##其它脚本引擎
EverEdit支持以ActiveScript的形式扩展的脚本引擎。目前内置以下几种：

```
VBScript
JScript
Python
PerlScript
RubyScript
```
##后缀对应
EverEdit依照规定的后缀去判断该使用的脚本引擎。对照后缀如下：

```
.mac : VBScript
.evb : VBScript
.ejs : JScript
.epy : Python
.epl : PerlScript
.erb : RubyScript
```

##脚本引擎的安装
Windows自win2000以来内部已集成了vbscript和jscript，因此对这两门语言不用特殊的安装，直接使用即可。

###Python脚本的安装

1. 首先下载python
2. 下载pywin32

因pywin32的部分封装问题，有可能会造成运行失败。如果脚本发生初始化错误，请按照如下修改：

1. 打开C:\Python32\Lib\site-packages\win32comext\axscript\client\framework.py
2. 找到556行左右的def SetScriptSite(self, site)函数
3. 注释掉其中的调试设置部分
4. 注释完毕的函数如下：

```
def SetScriptSite(self, site):
	# We should still work with an existing site (or so MSXML believes :)
	self.scriptSite = site
	#if self.debugManager is not None:
	#	self.debugManager.Close()
	#import traceback
	#try:
	#	import win32com.axdebug.axdebug # see if the core exists.
	#	from . import debug
	#	self.debugManager = debug.DebugManager(self)
	#except pythoncom.com_error:
	#	# COM errors will occur if the debugger interface has never been
	#	# seen on the target system
	#	trace("Debugging interfaces not available - debugging is disabled..")
	#	self.debugManager = None
	#except ImportError:
	#	trace("Debugging extensions (axdebug) module does not exist - debugging is disabled..")
	#	self.debugManager = None
	#except:
	#	traceback.print_exc()
	#	trace("*** Debugger Manager could not initialize - %s: %s" % (sys.exc_info()[0],sys.exc_info()[1]))
	#	self.debugManager = None

	try:
		self.lcid = site.GetLCID() 
	except pythoncom.com_error:
		self.lcid = win32api.GetUserDefaultLCID()
	self.Reset()
```

###Ruby的安装
下载并安装ActiveScriptRuby， http://www.artonx.org/data/asr/index.html

###Perl的安装
下载并安装ActiveState公司的ActivePerl。注意：作者尚未对ActivePerl、ActivePython测试成功。

