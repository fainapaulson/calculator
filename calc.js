function displayData(n){
    result.value+=n
}
function allClear(){
    result.value=""
}
function evalExpre(){
    result.value=eval(result.value)
}
function backSpace(){
    s=result.value
    result.value=s.slice(0,-1)
}