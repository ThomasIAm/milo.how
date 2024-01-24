var path = '/images/',
    imgs = [
        'bank.jpg', 'hang.jpg', 'kont-lik.jpg', 'mand.jpg', 'overlap.jpg', 'paal.jpg', 'rek.jpg', 'schuw.jpg', 'stoel.jpg',
        'strangle.jpg', 'tand.jpg', 'tong.jpg', 'tv.jpg', 'yo.jpg', 'was.jpeg'
    ],
    i = Math.floor(Math.random()*imgs.length);
$('.el').append("<img src='"+path+imgs[i]+"'>").hide().fadeIn(2000);