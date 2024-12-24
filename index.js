const img = [
        'css/img/1.jpg',
        'css/img/2.jpg',
        'css/img/3.jpg',
        'css/img/4.jpg',
        'css/img/5.jpg',
        'css/img/6.jpg',
        'css/img/7.jpg',
        'css/img/8.jpg',
        'css/img/9.jpg',
        'css/img/10.jpg',
        ],
image = document.getElementById ('image');
button = document.getElementById ('button');

button.onclick = function() {
    image.src=img[Math.floor(Math.random()*img.length)];
};
    