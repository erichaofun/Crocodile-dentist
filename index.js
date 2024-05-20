var random = Math.floor(Math.random() * 10+1);
    console.log(random);


    function imagechg(){

        $(".teeth").css('visibility' , 'visible');
        $(".button-container").css('background-image' , 'none');
        $(".tittle").css('visibility' , 'hidden');
        $(".instruction").css('visibility' , 'hidden');

    };

    $("button").click(function() {
    var teeth=(this.id);
    gameover(teeth);
    this.disabled = true;
    this.style.opacity = "0.7";

    //$(this).fadeOut(.75);
    //this.style.display='none';

    });

    function gameover(key){


    if (key==random) {
        alert(" Game Over It's you ");

    }
        

    else{
        console.log(" Press another teeth ");

    }

    }
   
