
//let myVar = setInterval(function(){ imageChanger()}, 5000); 
  
function imageChanger (){ 
     
  let images = ["https://images.pexels.com/photos/395085/pexels-photo-395085.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/428430/pexels-photo-428430.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/588251/pexels-photo-588251.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"];
  
  
 // var random = Math.floor(Math.random() * 3);
  
console.log(random);
 
   $('#myTopnav').css('background', 'url('+images[2]+')');
     
  };
  
  imageChanger();



  
  
