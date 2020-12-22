import './index.styl'
var avatar = document.getElementsByClassName('avatar-user');
console.dir(avatar);
console.log('Content script working...')


chrome.runtime.sendMessage({"link":avatar[0].currentSrc}, function(response) {
        console.log(response);
});
