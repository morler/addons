#简介
EverEdit使用[deelx](http://www.regexlab.com/en/deelx)作为正则表达式引擎，借助于正则表达式，EverEdit可以完成很多非常复杂的操作! 重要特性如下：

* 支持 IGNORECASE, SINGLELINE, MULTILINE 等常见匹配模式。
* 命名分组
* 条件表达式
* 递归表达式等多种高级特性

本文不着重介绍正则的基本语法和使用，而是介绍EverEdit中对正则的扩展等独有的特点。

#转义字符
EverEdit对Deelx的转义字符进行了扩充，以便更好的适应日常使用。

<table>
	<tr>
		<td>字符</td>
		<td>说明</td>
		<td>区间</td>
	</tr>
	<tr>
		<td>\c</td>
		<td>汉字</td>
		<td>0x2E81,0x2E84,0x2E88,0x2E8B,0x2E8C,0x2E97,0x2EA7,0x2EAA,0x2EAE,0x2EB3,0x2EB6,0x2EB7,0x2EBB,0x2ECA,0x3007 0x3400~0x4DB5,0x4E00~0x9FBB,0xE815~0xE864,0xF900~0xFA2D,0xFA30~0xFA6A,0xFA70~0xFAD9</td>
	</tr>
	<tr>
		<td>\j</td>
		<td>平假名</td>
		<td>0x3040~0x309F</td>
	</tr>
	<tr>
		<td>\J</td>
		<td>片假名</td>
		<td>0x30A0~0x30FF</td>
	</tr>
	<tr>
		<td>\p</td>
		<td>CJK标点符号</td>
		<td>0x3000~0x303F</td>
	</tr>
</table>

#反向引用
在EverEdit的正则中，反向引用使用$进行表示，而不是\。比如$1标示第一个反向引用，$2标示第二个。在$可以被理解场合下，请使用两个$$标示$。
