javascript:(function(){function%20e(e){var%20t=document.createElement(%22div%22);return%20t.innerHTML=e,t.childNodes[0].nodeValue}function%20t(e){var%20t=Math.round(e);return%20t%3E255%3F255:0%3Et%3F0:t}var%20o,a,l,r;if(document.getElementsByClassName(%22create-pattern%22).length%3E0){if(%22undefined%22!=typeof%20_paletteColorsUI){if(r=document.getElementsByClassName(%22create-pattern%22)[0].href.parseQuery().pID,window.localStorage%26%26window.localStorage.paletteHueID%26%26r==window.localStorage.paletteHueID){var%20n=document.getElementsByClassName(%22share-on%22)[0].parentElement.querySelector(%22input%22);n.value=window.localStorage.huePaletteBadge+%22%3Cbr%20/%3E%26rightarrow;%3Cbr%20/%3E%22+n.value;var%20i=document.getElementsByClassName(%22share-on%22)[0].parentElement.querySelectorAll(%22h5%22)[1];return%20i.innerHTML=%22Hue%20Badge%20Code%22,void(i.style.color=%22red%22)}if(o=_paletteColorsUI._colors,a=_paletteColorsUI._widths%3F_paletteColorsUI._widths.join(%22,%22):%220.2,0.2,0.2,0.2,0.2%22,l=document.getElementsByClassName(%22share-on%22)[0].parentElement.querySelector(%22input%22).value,o%26%26a%26%26l)try{window.localStorage.hueColors=o,window.localStorage.hueWidths=a,window.localStorage.huePaletteBadge=l}catch(s){}}window.localStorage%26%26window.localStorage.hueColors%26%26window.localStorage.hueWidths%26%26window.open(%22http://www.colourlovers.com/copaso/ColorPaletteSoftware%22)}else%20if(document.getElementById(%22pD_paletteDescription%22))if(_paletteID){try{window.localStorage.paletteHueID=_paletteID}catch(s){}window.location=%22http://www.colourlovers.com/palette/%22+_paletteID}else{var%20d=45;if(window.localStorage%26%26window.localStorage.hueAngle%26%26(d=window.localStorage.hueAngle),%22%22!=document.getElementById(%22pD_paletteDescription%22).value){var%20c=e(%22The%20current%20color%20hue%20angle%20is%20%22+d+%22%26deg;.%20Enter%20a%20new%20angle%20in%20the%20box.%20%20For%20example,%20180%26deg;%20will%20give%20you%20the%20complementary%20color,%20120%26deg;%20or%20240%26deg;%20gives%20a%20triad%20color,%2090%26deg;%20gives%20the%20farthest%20blend%20color,%2045%26deg;%20gives%20the%20hue%20+%202%20blend%20color,%20etc.%20%20You%20don%26apos;t%20need%20to%20include%20the%20degree%20symbol.%20%20Negative%20angles%20are%20allowed.%22),g=prompt(c,%22%22);g=parseInt(g,10),g%3E=-360%26%26360%3E=g%26%26(d=g);try{window.localStorage.hueAngle=d}catch(s){}}for(var%20u=-d,w=window.localStorage.hueColors.split(%22,%22),h=window.localStorage.hueWidths.split(%22,%22),p=[],m=Math.cos(u*Math.PI/180),S=Math.sin(u*Math.PI/180),v=0;5%3Ev;v++){var%20y=new%20Array(3);y.r=parseInt(w[v].substring(0,2),16),y.g=parseInt(w[v].substring(2,4),16),y.b=parseInt(w[v].substring(4,6),16);var%20I=new%20Array(3);I.r=(.299+.701*m+.168*S)*y.r+(.587-.587*m+.33*S)*y.g+(.114-.114*m-.497*S)*y.b,I.g=(.299-.299*m-.328*S)*y.r+(.587+.413*m+.035*S)*y.g+(.114-.114*m+.292*S)*y.b,I.b=(.299-.3*m+1.25*S)*y.r+(.587-.588*m-1.05*S)*y.g+(.114+.886*m-.203*S)*y.b;var%20b=(%220%22+t(I.r).toString(16)).slice(-2)+(%220%22+t(I.g).toString(16)).slice(-2)+(%220%22+t(I.b).toString(16)).slice(-2);colorBoxOnMouseDown(v),basicHex.value=b,updateBasicFromForm(%22%22,%22basicHex%22,!0),4%3Ev%26%26(p[v]=Math.round(460*parseFloat(h[v])),v%3E0%26%26(p[v]+=p[v-1]))}_paletteWidthSlidersInitPositions=p,resetPaletteWidthSliders(),resetPaletteWidthSliders(),resetPaletteWidthSliders(),resetPaletteWidthSliders(),document.getElementById(%22pD_paletteDescription%22).value=window.localStorage.huePaletteBadge}else%20alert(%22To%20use%20this%20bookmarklet,%20you%20should%20be%20on%20a%20palette%20page%20or%20the%20COPASO%20page%20at%20COLOURlovers.com.%22)})();