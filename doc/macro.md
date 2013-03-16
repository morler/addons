# 简介
***
EverEdit内置VBS/JScript作为基础的脚本解释引擎. 在EverEdit内部，VBS/JScript不仅可以用来进行常见的文本操作, 也可以定义着色文件.

VBS/JScript易学易懂, 和Windows关系紧密. 借助于VBS/JScript, EverEdit可以完成很多匪夷所思的功能. 本文并不着重于介绍VBS/JScript的基础语法和用法, 如您需要学习VBS/JScript的基础部分, 请参考这儿.

**注意:**从2.10版本加入对JScript支持,识别的后缀为mac,ejs和evb. JScript和JavaScript非常的像,但是二者不是一回事,请不要混淆!

# 名称约定
***
如未特别注明, 下文的脚本均指用VBS写成的脚本文件, EE指EverEdit.

# 脚本如何保存
***
为了简化和方便管理, 在EE中被调用的脚本, 要统一地放置到安装目录下的[macro]目录中. 您可以在[macro]目录中, 使用子目录作为分类, 脚本的后缀必须为mac,ejs或者evb, EE暂时不识别其它的后缀. 所有被放置到[macro]目录中的文件都会显示在[macro]菜单中, 如未显示, 您可以点击[Refresh]试试看.

# Hello World
***
通过脚本, 在EE中插入文本是一件非常简单的事情, 下面的例子向您展示了EE中的Hello World. 这个脚本会在当前光标处插入”Hello, Wolrd”文本字样.

> App.ActiveDoc.Insert("Hello, World!")

保存上面文本到[macro]目录为Hello.mac, 然后点击[macro]菜单, 看看您刚才添加的文件出现了吗!如果未出现, 请点击[Refresh].

**注意**:菜单中的菜单项不会显示后缀, Hello.mac会自动去掉.mac而显示为Hello. 总言而之, EE会使用文件名作为菜单项! 所以最好为您的文件命名一个有明确意义的不重复的名称!

好了, 点击Hello, 看看您的文档是不是被插入了Hello, World呢!

# 为脚本绑定快捷键
***
您是不是觉得每次都通过鼠标来运行脚本效率非常的低下呢!

没关系, EE为您准备了强大的快捷键. 打开[Tools]-[Preferences]-[Shortcut], 在下拉框中选择[Script], 您会看到所有保存于macro中的脚本均以树状的形式显示出来了.

找到刚才添加的Hello, 为其指派一个单级或多级快捷键, 然后按下您刚才输入的快捷键试试吧!

# App根实例
***
App是EE中的根对象, 绝大多数的对象的实例均由其创建而来. App表示您当前正在操作的EE的主窗口, 在您要获取一个对象的实例的时候, 您首先要看一下如何从App获取吧!

**注意:** 为了提高效率, 这里面的App不同于Syntax Highlight中的App. 同时App在脚本并不必显示调用. 比如调用ActiveDoc, 可以直接使用ActiveDoc, 不过我们仍然建议您使用App.ActiveDoc这种形式.

# 函数
***
<code>
//创建一个菜单
Menu CreateMenu();
 
//Sleep指定毫秒
void Sleep(int millisec);
 
//发送命令到主窗口
void SendCommand(int nCmd);
 
//新建一个文本文档
Document NewDoc();
 
//以文本方式打开指定文档
Document OpenDoc(string lpPathName);
 
//输出文本到输出窗口
//clear:是否清空输出窗口
//terminate:是否结束正在运行的线程
void OutputText(string text, bool clear=false, bool terminate=false);
</code>