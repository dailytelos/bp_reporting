//used for logging in a textarea window, console

function consoleOut(out) {
    
    var stext = $("#logwin").val();
    
    if(isObject(out) || isArray(out) ) {
        $("#logwin").val(stext + "\n" + JSON.stringify(out));
        return;
    }
    
    $("#logwin").val(stext + "\n" + out);
    
    $("#logwin").scrollTop($("#logwin")[0].scrollHeight);
    return;
}