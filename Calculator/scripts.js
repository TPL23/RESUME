function clickbtn(val) {
    document.getElementById("TextBox").value=document.getElementById("TextBox").value+val

    
}
function clearbtn(){
    document.getElementById("TextBox").value=""

}
function Rsltbtn(){
    var text=document.getElementById("TextBox").value
    var Result=eval(text)
    document.getElementById("TextBox").value=Result
}