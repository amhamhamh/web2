var Body={
  setColor:function(color){
  // document.querySelector('body').style.color=color;
$('body').css('color',color);
},setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor=color;
$('body').css('color',color);
}
}
 var Links={
   setAColor:function(color){
     // i=0;
     // var alist=document.querySelectorAll('a');
     // while(i<alist.length){
     // alist[i].style.color=color;
     // i=i+1;}
   $('a').css('color',color);
 }
 }
function nightDayHandler(self) {
  var target=document.querySelector('body')
  if(self.value==='night'){
  Body.setBackgroundColor('lightgreen');
  Body.setColor('purple');
  self.value='day';
  Links.setAColor('yellow');
  }else{
    Body.setBackgroundColor('pink');
    Body.setColor('gray');
    self.value='night';
    Links.setAColor('red');
}
}
