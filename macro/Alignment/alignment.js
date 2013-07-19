/*
  alignment.js
  ------------
    Written by Kaffa (kaffacoffee@outlook.com)
    Homepage: http://forum.everedit.net/
    20130717233031
*/
Include(App.AppPath + "\\macro\\common\\L.js");

function alignment(sep) {
    if (!hasSel()) {
        return;
    }
    
    var startLine = getSelStartPos().Line;
    var startCol = 0;
    var endLine = getSelEndPos().Line;
    var endCol = getLineText(endLine).length;
    setSel(startLine, startCol, endLine, endCol);
    
    var sel = getSelText();
    var regex = "^([\\s]*)(.*?)([\\s]*)" + regexEscape(sep) + "([\\s]*)(.*?)([\\s]*)$";
    var re = new RegExp(regex, "gm");
    if (re.exec(sel) == null) {
        return;
    }
    
    re = new RegExp(regex, "gm");
    var maxlen = 0;
    var arr = [];
    while ((arr = re.exec(sel)) != null) {
        var len = getDisplayLength(arr[2]);
        if (maxlen < len) {
            maxlen = len;
        }
    }
    re = new RegExp(regex, "gm");
    var firstMatch = re.exec(sel);
    var linesep = getLinesep(sel);
    var indent = firstMatch[1].replace(/(\r\n)|(\r)|(\n)/g, "");
    
    var list = [];
    var selLines = sel.split(linesep);
    var i = 0;
    for (; i < selLines.length; i++) {
        var line = selLines[i];
        re = new RegExp(regex, "g");
        arr = re.exec(line);
        if (arr != null) {
            list.push(indent + arr[2] + space(maxlen - getDisplayLength(arr[2])) + " " + sep + " " + arr[5]);
        }
        else {
            list.push(indent + trim(line).replace(/(\r\n)|(\r)|(\n)/g, ""));
        }
    }
    setSelText(list.join(linesep));
}