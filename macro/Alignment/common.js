function alert(message) {
    var script = new ActiveXObject("MSScriptControl.ScriptControl");
    script.Language = "VBScript";
    var code = 'MsgBox("' + message + '")';
    return script.Eval(code);
}

function prompt(message, defaultValue) {
    return ShowInputBox(defaultValue, message);
}

function confirm(message){
    var vbYesNo = 4;
    var vbYes = 6; 
    var vbNo = 7;
    
    var script = new ActiveXObject("MSScriptControl.ScriptControl");
    script.Language = "VBScript";
    var prompt = message;
    var buttons = vbYesNo;
    var title = "";
    var code = 'MsgBox("' + message + '","' + buttons + '","' + title + '")';
    var result = script.Eval(code);
    if (result == vbYes) {
        result = true;
    }
    else if (result == vbNo) {
        result = false;
    }
    return result == vbYes;
}

function now() {
    var now = new Date();
    var year = now.getFullYear().toString();
    var month = (now.getMonth() + 1).toString();
    var date = now.getDate().toString();
    var hour = now.getHours().toString();
    var minute = now.getMinutes().toString();
    if (minute == "0") {
        minute = "00";
    }
    var second = now.getSeconds().toString();
    if (second == "0") {
        second = "00";
    }
    var result = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    return result;
}

function dump(arr, level) {
    if (!level) { 
        level = 0; 
    }
    var dumped_text = "";
    var level_padding = "";
    for (var i = 0; i < level + 1; i++) { 
        level_padding += "    ";
    }
    if (typeof(arr) == 'object') {  
        for (var item in arr) {
            var value = arr[item];
            if (typeof(value) == 'object') { 
                dumped_text += level_padding + "'" + item + "' ...\n";
                dumped_text += dump(value,level+1);
            } else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    } else { 
        dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
}

function trim(s) {  
    return s.replace(/(^\s*)|(\s*$)/g, "");  
}

function space(len) {
    var arr = [];
    while (arr.length < len) {
        arr.push(' ');
    }
    return arr.join('');
}

function getLinesep(text) {
    var LINE_SEP = {
        "PC": "\r\n",
        "UNIX": "\n",
        "MAC": "\r"
    }
    var linesep = false;
    if (text.indexOf("\r\n") != -1) {
        linesep = LINE_SEP.PC;
    }
    else if (text.indexOf("\n") != -1) {
        linesep = LINE_SEP.UNIX;
    }
    else if (text.indexOf("\r") != -1) {
        linesep = LINE_SEP.MAC;
    }
    return linesep;
}

function regexEscape(str, except) {
	str = str.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function(ch){
		if (except && except.indexOf(ch) != -1) {
			return ch;
		}
		return "\\" + ch;
	}); 
	return str;
};

function getDisplayLength(s) {
	return s.replace(/[^\x00-\xff]/g, '**').length;
};
