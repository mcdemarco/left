javascript:(function(){function%20e(e){var%20o=new%20Array(3);return%20o.r=parseInt(e.substring(0,2),16),o.g=parseInt(e.substring(2,4),16),o.b=parseInt(e.substring(4,6),16),o}function%20o(e){var%20o=(%220%22+t(e.r).toString(16)).slice(-2)+(%220%22+t(e.g).toString(16)).slice(-2)+(%220%22+t(e.b).toString(16)).slice(-2);return%20o}function%20t(e){var%20o=Math.round(e);return%20o%3E255%3F255:0%3Eo%3F0:o}function%20a(e,o){var%20t=Math.round(o%3Fe.r/o:e.r);return%20t%3E255||0%3Et%3F!1:(t=Math.round(o%3Fe.g/o:e.g),t%3E255||0%3Et%3F!1:(t=Math.round(o%3Fe.b/o:e.b),t%3E255||0%3Et%3F!1:!0))}var%20l,r,n,w,s;if(document.getElementsByClassName(%22create-pattern%22).length%3E0||document.getElementsByClassName(%22create-a-palette%22).length%3E0){if(document.getElementsByClassName(%22create-a-palette%22).length%3E0){if(l=document.getElementsByClassName(%22create-a-palette%22)[0].href.parseQuery().colors,w=document.getElementsByClassName(%22share-on%22)[0].parentElement.querySelector(%22input%22).value,l%26%26w){if(window.localStorage%26%26window.localStorage.wash2Color%26%26window.localStorage.wash2Color.toUpperCase()==l){try{window.localStorage.wash2ColorBadge=w}catch(c){}return%20void(window.location=%22http://www.colourlovers.com/palette/%22+window.localStorage.wash2PaletteID)}try{window.localStorage.hue2Color=l,window.localStorage.hue2ColorBadge=w}catch(c){}}}else%20if(%22undefined%22!=typeof%20_paletteColorsUI){if(s=document.getElementsByClassName(%22create-pattern%22)[0].href.parseQuery().pID,window.localStorage%26%26window.localStorage.wash2PaletteID%26%26s==window.localStorage.wash2PaletteID){var%20i=document.getElementsByClassName(%22share-on%22)[0].parentElement.querySelector(%22input%22);i.value=window.localStorage.hue2PaletteBadge+(window.localStorage.wash2ColorBadge%3F%22%3Cbr%20/%3E+%20%22+window.localStorage.washPercentage+%22%25%20%3Cbr%20/%3E%22+window.localStorage.wash2ColorBadge:%22%20+%20%23%22+window.localStorage.wash2Color)+%22%3Cbr%20/%3E=%3Cbr%20/%3E%22+i.value;var%20d=document.getElementsByClassName(%22share-on%22)[0].parentElement.querySelectorAll(%22h5%22)[1];return%20d.innerHTML=%22WashTo%20Badge%20Code%22,void(d.style.color=%22red%22)}if(r=_paletteColorsUI._colors,n=_paletteColorsUI._widths%3F_paletteColorsUI._widths.join(%22,%22):%220.2,0.2,0.2,0.2,0.2%22,w=document.getElementsByClassName(%22share-on%22)[0].parentElement.querySelector(%22input%22).value,r%26%26n%26%26w)try{window.localStorage.hue2Colors=r,window.localStorage.hue2Widths=n,window.localStorage.hue2PaletteBadge=w}catch(c){}}window.localStorage%26%26window.localStorage.hue2Color%26%26window.localStorage.hue2Colors%26%26window.localStorage.hue2Widths%26%26window.open(%22http://www.colourlovers.com/copaso/ColorPaletteSoftware%22)}else%20if(document.getElementById(%22pD_paletteDescription%22))if(_paletteID){try{window.localStorage.wash2PaletteID=_paletteID}catch(c){}window.localStorage%26%26window.localStorage.wash2Color%3Fwindow.location=%22http://www.colourlovers.com/color/%22+window.localStorage.wash2Color:window.location=%22http://www.colourlovers.com/palette/%22+_paletteID}else{var%20g=33;window.localStorage%26%26window.localStorage.washPercentage%26%26(g=window.localStorage.washPercentage);var%20h,u=g/100,p=1-u;if(h=window.localStorage%26%26window.localStorage.hue2Swatch%3FparseInt(window.localStorage.hue2Swatch,10):0,%22%22!=document.getElementById(%22pD_paletteDescription%22).value){h=(h+1)%255;try{window.localStorage.hue2Swatch=h}catch(c){}}var%20S=window.localStorage.hue2Colors.split(%22,%22),m=window.localStorage.hue2Widths.split(%22,%22),C=window.localStorage.hue2Color,y=[],v=e(S[h]),B=e(C),b=new%20Array(3);if(b.r=B.r/u-v.r*(p/u),b.g=B.g/u-v.g*(p/u),b.b=B.b/u-v.b*(p/u),a(b)){var%20f=o(b);try{window.localStorage.wash2Color=f,window.localStorage.wash2ColorBadge=%22%22}catch(c){}for(var%20I=0;5%3EI;I++){if(colorBoxOnMouseDown(I),I==h)basicHex.value=C;else{var%20D=e(S[I]),E=new%20Array(3);E.r=D.r*p+b.r*u,E.g=D.g*p+b.g*u,E.b=D.b*p+b.b*u;var%20P=o(E);basicHex.value=P}updateBasicFromForm(%22%22,%22basicHex%22,!0),4%3EI%26%26(y[I]=Math.round(460*parseFloat(m[I])),I%3E0%26%26(y[I]+=y[I-1]))}_paletteWidthSlidersInitPositions=y,resetPaletteWidthSliders(),resetPaletteWidthSliders(),resetPaletteWidthSliders(),resetPaletteWidthSliders(),document.getElementById(%22pD_paletteDescription%22).value=window.localStorage.hue2PaletteBadge+%22%20+%20%22+g+%22%25%20%23%22+f+%22%20to%20%22+window.localStorage.hue2ColorBadge}else{for(var%20_=0;5%3E_;_++)_==h%3F(colorBoxOnMouseDown(_),basicHex.value=C,updateBasicFromForm(%22%22,%22basicHex%22,!0)):remHex(_);document.getElementById(%22pD_paletteDescription%22).value=%22No%20wash%20color%20found%20for%20swatch%20%22+(h+1)+%22%20at%20%22+g+%22%25.%20%20Try%20another%20swatch%20(by%20clicking%20WashTo%20again)%20or%20adjust%20your%20wash%20percentage%20in%20the%20Wash%20bookmarklet.%22}}else%20alert(%22To%20use%20this%20bookmarklet,%20you%20should%20be%20on%20a%20color%20or%20palette%20page%20or%20the%20COPASO%20page%20at%20COLOURlovers.com.%22)})();
