$(document).ready(function(){
    var imgChoices = 6;
    var imgNum = Math.ceil(Math.random() * imgChoices);
    
    document.body.style.backgroundImage = "url('/components/photo_array/" + imgNum + ".jpg')";
    
});

