do{
    var x= prompt("enter your txt");
}while(isFinite(x))
var i=1;
while(i<=6){
    document.write("<h" +i+ "> Welcome"+x+"!</h"+i+">");
    i++;
}
