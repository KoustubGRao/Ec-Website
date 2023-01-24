var cardbody = document.getElementsByClassName('card-body');
var cardheight = cardbody[0].style.height;
console.log('cardheight');
var git_link = document.getElementsByClassName('git-link');

for(i = 0; i < git_link.length; i++){
    git_link[i].style.top = cardheight;
}