$(document).ready(function(){
alert('Welcome! click ok to use my calculator')
});
function pushed(btn){
$("#txt").val($("#txt").val() + btn);
};
function equl(){
$("#txt").val(eval($("#txt").val()));
};
function del(){
$("#txt").val("");
};
function cancl(){
$("#txt").val($("#txt").val().slice(0,-1));
};