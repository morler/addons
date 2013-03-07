#Foramt
You should use a specific format to define snippets of EverEdit. All the snippets were stored as pure text format(ini), you can edit it directly with any text editor or Snippet Manager of EverEdit(Recommend).

**A snippet sample:**

    for (${1:unsigned int} ${2:i} = ${3:0}; $2 ${4:<} ${5:count}; $2${6:++}) {
        $0
    }


#Define vars
It’s easy to define a var in snippet, for example:${1:myvar}. 1 means it’s the first var, the value should be 1~9, 0 is the last edit point. You’d better define vars with order.

#Use vars
We can ref the var after defining, fox example $1. It means we ref the first var that has been defined. If you want to insert $, just input it twice $$.

#Jump
Use Tab or Shift+Tab to jump between each edit point

#Last edit point
$0 is the last edit point. Cursor will not move after reach $0

#Use snippet manager
Main menu->View->Snippet will open the snippet manager, right click the snippet item and edit. It will display as forllows:
    @Title:For loop
    @Trigger:for
    @Snippet:Input content from next line!
    for (${1:unsigned int} ${2:i} = ${3:0}; $2 ${4:<} ${5:count}; $2${6:++}) {
      $0
    }
#Enable your snippet
A snippet file can’t be valid until you bind it in Syntax Files. You can use the below sequence to add a snippet.
    Cpp.AddSnippet “my.snippet”


#Others
EverEdit doesn’t support the nested vars, such as ${1:data ${2:text}}.
