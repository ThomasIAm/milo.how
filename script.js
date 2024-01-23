var path = '/images/',
    imgs = ['kont-lik.jpg'],
    i = Math.floor(Math.random()*imgs.length);
$('.el').append("<img src='"+path+imgs[i]+"'>").hide().fadeIn(2000);