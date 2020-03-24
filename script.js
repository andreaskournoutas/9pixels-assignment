var header = document.getElementById('header');
var headerPrimaryMenu = document.getElementById('header-primary-menu');
var headerSubmenu = document.getElementById('header-submenu');
var headerInner = document.getElementById('header-inner');
var aboutUsLink = document.getElementById('about-us');
var card = document.getElementsByClassName('card');
var cardImageWrapper = document.getElementsByClassName('card__image-wrapper');
var cardImageOverlayText = document.getElementsByClassName('card__image-overlay-text');

function setHeaderSubmenuStyling() {
    headerSubmenu.style.width = headerInner.clientWidth + 'px';
    headerSubmenu.style.paddingLeft =  aboutUsLink.offsetLeft;
}

function expandHeaderSubmenu() {
    headerSubmenu.classList.add('header__submenu--open');
}

function contractHeaderSubmemnu() {
    headerSubmenu.classList.remove('header__submenu--open');
}

function changeHeaderSize() {
    if (window.scrollY > 9) {
        header.classList.remove('header--top');
    }
    else {
        header.classList.add('header--top');
    }
}

function mouseoverCard() {
    this.getElementsByClassName('card__image-overlay')[0].classList.add('card__image-overlay--open');
    this.getElementsByClassName('card__arrow')[0].classList.add('card__arrow--inverse');
}

function mouseoutCard() {
    this.getElementsByClassName('card__image-overlay')[0].classList.remove('card__image-overlay--open');
    this.getElementsByClassName('card__arrow')[0].classList.remove('card__arrow--inverse');
}

function cardImageOverlayTextSize() {
    for (var i = 0; i < cardImageOverlayText.length; i++) {
        cardImageOverlayText[i].style.width = (cardImageWrapper[0].clientWidth - 40) + 'px';
        cardImageOverlayText[i].style.height = (cardImageWrapper[0].clientHeight - 40) + 'px';
    }
}

setHeaderSubmenuStyling();
cardImageOverlayTextSize();

window.onscroll = function() {
    changeHeaderSize();
    contractHeaderSubmemnu();
}

aboutUsLink.onclick = expandHeaderSubmenu;

for (var i = 0; i < card.length; i++) {
    card[i].onmouseover = mouseoverCard;
    card[i].onmouseout = mouseoutCard;
}

window.onresize = function() {
    setHeaderSubmenuStyling();
    contractHeaderSubmemnu();
    cardImageOverlayTextSize();
}