/*!
 * actual 0.2.0+201402061122
 * https://github.com/ryanve/actual
 * MIT License 2014 Ryan Van Etten
 */
!function(a,b,c){"undefined"!=typeof module&&module.exports?module.exports=c():a[b]=c()}(this,"actual",function(){function a(b,c,d,e){var f,g,h,i,j=a.mq;for(c="string"==typeof c?c:"",d=d>0?c?+d:d>>0:1,e=e>0?+e:0>e?-e:"px"==c?256:c?32:1,b+=":",c+=")",i=d;e&&i>=0;i+=e){if(h=j("(min-"+b+i+c),g=j("(max-"+b+i+c),h&&g)return j("("+b+(i>>0)+c)?i>>0:i;null==f?e=(f=!g)?h&&e:-e:(g?f:!f)&&(f=!f,e=-e/2)}return 0}function b(b){return function(c){return a(c,b)}}function c(b){return function(c){return a(b,c)}}var d="matchMedia",e="undefined"!=typeof window&&window;return a.actual=a,a.feature=c,a.as=b,a.mq=e[d]||e[d="msMatchMedia"]?function(a){return!!e[d](a).matches}:function(){return!1},a});