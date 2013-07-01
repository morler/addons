function hasSel() {
    return App.ActiveDoc.HasSel();
}

function getSel() {
    return App.ActiveDoc.SelText;
}

function setSelText(s) {
    App.ActiveDoc.SelText = s;
}

function getSelStartPos() {
    return App.ActiveDoc.SelStartPos;
}

function getSelEndPos() {
    return App.ActiveDoc.SelEndPos;
}

function getLineText(index) {
    return App.ActiveDoc.GetLineText(index);
}

function setSel(startLine, startCol, endLine, endCol) {
    App.ActiveDoc.SetSel(startLine, startCol, endLine, endCol);
}