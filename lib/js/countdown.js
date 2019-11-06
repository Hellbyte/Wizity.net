function startCountdown(duration){
      clearInterval(Wizity.countdown);

      Wizity.countdown = setInterval(function(){
        var hours = Math.floor(duration / 3600);
        var minutes = Math.floor(duration / 60 % 60);
        var seconds = Math.floor(duration % 60);

        if(hours > 0){
          minutes = minutes < 10 ? '0'+ minutes : minutes;
          seconds = seconds < 10 ? '0'+ seconds : seconds;

          $('#communityHeader .info .options .time').text(hours +':'+ minutes +':'+ seconds);
        }

        else{
          seconds = seconds < 10 ? '0'+ seconds : seconds;

          $('#communityHeader .info .options .time').text(minutes +':'+ seconds);
        }

        if(duration > 5){
          if($('#communityHeader .info .options .time').hasClass('red') == true) $('#communityHeader .info .options .time').removeClass('red');
        }

        else if(duration <= 5 && duration > 0){
          if(!$('#communityHeader .info .options .time').hasClass('red') == true) $('#communityHeader .info .options .time').addClass('red');
        }

        else{
          clearInterval(Wizity.countdown);
        }

        duration--;
      }, 1000);
    }
