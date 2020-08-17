

$( document ).ready(function() {

    // Progress bar
    


    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#aaa' },
        to: { color: '#B0C4DE' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
    
            let value = Math.round(circle.value() * 256);
            circle.setText(value);

        }

});
let containerC = document.getElementById("circleC");

let circleC = new ProgressBar.Circle(containerC, {

    color: '#64DAF9',
    strokeWidth: 8,
    duration: 2000,
    from: { color: '#aaa' },
    to: { color: '#B0C4DE' },

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 1860);
        circle.setText(value);

    }

});
let containerD = document.getElementById("circleD");

let circleD = new ProgressBar.Circle(containerD, {

    color: '#64DAF9',
    strokeWidth: 8,
    duration: 2100,
    from: { color: '#aaa' },
    to: { color: '#B0C4DE' },

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        let value = Math.round(circle.value() * 2456);
        circle.setText(value);

    }

});

 // iniciando o loader somente quando o usuário chega ao elemento.

    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
    
            
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);
            
        
            stop = 1;
        }
       
    });

    // parallax

    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/anoni.jpg'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
    }, 250);

  // filtro do portfólio

  $('.filter-btn-box').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');
   
    $('.main-btn').removeClass('active');
    $(this).addClass('active');

   });

 // filtro do portfólio

 $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');
   
    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'corpo-btn') {
        eachBoxes('corpo', boxes)
    } else if(type == 'psi-btn'){
        eachBoxes('psi', boxes);
    } else if(type == 'socia-btn') {
        eachBoxes('socia', boxes);
    } else {
        eachBoxes ('all',boxes);
    }

 });

 function eachBoxes(type, boxes) {
 
    if(type == 'all') {
       $(boxes).fadeIn();
    } else {
       $(boxes).each( function() {
           if(!$(this).hasClass(type)) {
               $(this).fadeOut('slow');
           } else {
               $(this).fadeIn();
           }
        }); 
    }
 }

  // scroll para seções 
    let navBtn = $('.nav-item');

    let homeSection = $('#mainSlider');
    let jiujitsuSection = $('#about-area');
    let praxisSection = $('#services-area');
    let professoresSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function() {

        let btnId = $(this).attr('id');

        console.log(btnId);

        if(btnId == 'jiu-menu') {
            scrollTo = jiujitsuSection;
        } else if(btnId == 'praxis-menu') {
            scrollTo = praxisSection;
        } else if(btnId == 'professores-menu') {
            scrollTo = professoresSection;
        } else if(btnId == 'portfolio-menu') {
            scrollTo = portfolioSection;
        } else if(btnId == 'contato-menu') {
            scrollTo = contactSection;
        } else {
            scrollTo = homeSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
    });


});