javascript:(function(){function%20e(e){var%20t=document.createElement(%22div%22);return%20t.innerHTML=e,t.childNodes[0].nodeValue}var%20t,o,a,l;if(document.getElementsByClassName(%22create-pattern%22).length%3E0){if(%22undefined%22!=typeof%20_paletteColorsUI){if(l=document.getElementsByClassName(%22create-pattern%22)[0].href.parseQuery().pID,window.localStorage%26%26window.localStorage.paletteHueID%26%26l==window.localStorage.paletteHueID){var%20r=document.getElementsByClassName(%22share-on%22)[0].parentElement.querySelector(%22input%22);r.value=window.localStorage.huePaletteBadge+%22%3Cbr%20/%3E%26rightarrow;%3Cbr%20/%3E%22+r.value;var%20n=document.getElementsByClassName(%22share-on%22)[0].parentElement.querySelectorAll(%22h5%22)[1];return%20n.innerHTML=%22Hue%20Badge%20Code%22,void(n.style.color=%22red%22)}if(t=_paletteColorsUI._colors,o=_paletteColorsUI._widths%3F_paletteColorsUI._widths.join(%22,%22):%220.2,0.2,0.2,0.2,0.2%22,a=document.getElementsByClassName(%22share-on%22)[0].parentElement.querySelector(%22input%22).value,t%26%26o%26%26a)try{window.localStorage.hueColors=t,window.localStorage.hueWidths=o,window.localStorage.huePaletteBadge=a}catch(i){}}window.localStorage%26%26window.localStorage.hueColors%26%26window.localStorage.hueWidths%26%26window.open(%22http://www.colourlovers.com/copaso/ColorPaletteSoftware%22)}else%20if(document.getElementById(%22pD_paletteDescription%22))if(_paletteID){try{window.localStorage.paletteHueID=_paletteID}catch(i){}window.location=%22http://www.colourlovers.com/palette/%22+_paletteID}else{var%20s=45;if(window.localStorage%26%26window.localStorage.hueAngle%26%26(s=window.localStorage.hueAngle),%22%22!=document.getElementById(%22pD_paletteDescription%22).value){var%20d=e(%22The%20current%20color%20hue%20angle%20is%20%22+s+%22%26deg;.%20Enter%20a%20new%20angle%20in%20the%20box.%20%20For%20example,%20180%26deg;%20will%20give%20you%20the%20complementary%20color,%20120%26deg;%20or%20240%26deg;%20gives%20a%20triad%20color,%2090%26deg;%20gives%20the%20farthest%20blend%20color,%2045%26deg;%20gives%20the%20hue%20+%202%20blend%20color,%20etc.%20%20You%20don%26apos;t%20need%20to%20include%20the%20degree%20symbol.%20%20Negative%20angles%20are%20allowed.%22),c=prompt(d,%22%22);c=parseInt(c,10),c%3E=-360%26%26360%3E=c%26%26(s=c);try{window.localStorage.hueAngle=s}catch(i){}}for(var%20g=-s,u=window.localStorage.hueColors.split(%22,%22),w=window.localStorage.hueWidths.split(%22,%22),h=[],p=Math.cos(g*Math.PI/180),m=Math.sin(g*Math.PI/180),S=0;5%3ES;S++){var%20v=new%20Array(3);v.r=parseInt(u[S].substring(0,2),16),v.g=parseInt(u[S].substring(2,4),16),v.b=parseInt(u[S].substring(4,6),16);var%20y=new%20Array(3);y.r=(.299+.701*p+.168*m)*v.r+(.587-.587*p+.33*m)*v.g+(.114-.114*p-.497*m)*v.b,y.g=(.299-.299*p-.328*m)*v.r+(.587+.413*p+.035*m)*v.g+(.114-.114*p+.292*m)*v.b,y.b=(.299-.3*p+1.25*m)*v.r+(.587-.588*p-1.05*m)*v.g+(.114+.886*p-.203*m)*v.b;var%20I=(%220%22+Math.round(y.r).toString(16)).slice(-2)+(%220%22+Math.round(y.g).toString(16)).slice(-2)+(%220%22+Math.round(y.b).toString(16)).slice(-2);colorBoxOnMouseDown(S),basicHex.value=I,updateBasicFromForm(%22%22,%22basicHex%22,!0),4%3ES%26%26(h[S]=Math.round(460*parseFloat(w[S])),S%3E0%26%26(h[S]+=h[S-1]))}_paletteWidthSlidersInitPositions=h,resetPaletteWidthSliders(),resetPaletteWidthSliders(),resetPaletteWidthSliders(),resetPaletteWidthSliders(),document.getElementById(%22pD_paletteDescription%22).value=window.localStorage.huePaletteBadge}else%20alert(%22To%20use%20this%20bookmarklet,%20you%20should%20be%20on%20a%20palette%20page%20or%20the%20COPASO%20page%20at%20COLOURlovers.com.%22)})();
