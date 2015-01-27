$(document).ready(function(){
    var imgChoices = 6;
    var imgNum = Math.ceil(Math.random() * imgChoices);
    
    document.body.style.backgroundImage = "url('/mojosite/components/photo_array/" + imgNum + ".jpg')";
});

