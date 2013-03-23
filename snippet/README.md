##Foramt
You should use a specific format to define snippets of EverEdit. All the snippets were stored as a pure text format(ini), you can edit it directly with any text editor or Snippet Manager of EverEdit(Recommend).

###sample:
```c++
for (${1:unsigned int} ${2:i} = ${3:0}; $2 ${4:<} ${5:count}; $2${6:++}) {
    $0
}
```

##Define vars
It’s easy to define a var in snippet, for example:<code>${1:myvar}</code>. <code>1</code> means it’s the first var, the value should be 1~9, 0 is the last edit point. You’d better define vars with asc order.

##Use vars
We can make a reference of defined var, fox example <code>$1</code>. It means we ref the first var that has been defined yet. If you want to insert $, just input it twice <code>$$</code>.

##Jump
Use Tab or Shift+Tab to jump between edit points.

#Last edit point
<code>$0</code> is the last edit point. Cursor will not move around after reaching <code>$0</code>.

##Use snippet manager
Main **menu->View->Snippet** will open the snippet manager, right click the snippet item and edit a selected item. It will display as forllows:

```c++
@Title:For loop
@Trigger:for
@Snippet:Input content from next line!
for (${1:unsigned int} ${2:i} = ${3:0}; $2 ${4:<} ${5:count}; $2${6:++}) {
  $0
}
```
##Enable your snippet
A snippet file wouldn't become valid until you bind it in <code>Syntax Files</code>. You can use the below sequence to add a snippet.

```c++
Cpp.AddSnippet “my.snippet”
```

**Note**:EverEdit doesn’t support the nested vars, such as <code>${1:data ${2:text}}</code>.
