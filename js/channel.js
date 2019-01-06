console.log('🤯');
function toggleMe(n){var e=document.getElementById(n);if(!e){return!0};if('none'==e.style.display){e.style.display='block'}
  else{e.style.display='none'};return!0};document.onkeydown=function(e){switch(e.keyCode){case 82:getJoke();break}};function getJoke(){var e=new XMLHttpRequest();e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var n=JSON.parse(e.responseText)
    ;console.log(n.value);document.getElementById('response_icon_url').innerHTML=n.icon_url;document.getElementById('response_id').innerHTML=n.id;document.getElementById('response_url').innerHTML=n.url;document.getElementById('response_url').href=n.url;document.getElementById('response_text').innerHTML=n.value}};e.open('GET','/jokes/random',!0);e.send()};
