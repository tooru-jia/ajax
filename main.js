var trigger =$('#trigger');
var card = $('#card');
var loaded  = false; 

trigger.on('click',
    function(){
        // card.load('card.html');
        // card.toggle();
        
        if(card.is(':visible')){
            card.slideUp()
        }else{
            if(!loaded){
                card.load('card.html');
                loaded = true;}
            card.slideDown()
        }
    })

var form =$('#search');
var input = $('input#username');
var result = $('#result');
var username;

form.on('submit',function(e){
    e.preventDefault();
    username = input.val();
    $.ajax({
        url:'https://api.github.com/users/'+ username,
        method: 'get',
        success:function(data){
            console.log("success")
        },
        error: function(){
            console.log("failed")
        }
            
    })
        
     .done(function(data){
         console.log("data:",data)
         var html =
         '<div>username: '+data.login + '</div>'+
         '<div>info: '+(data.bio || 'none') + '</div>'

        result.html(html);        
     })



})