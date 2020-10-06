let $emoji = document.getElementById('emoji')

let emoji = []

for (let i = 127744 ; i < 127794; i++ )  {emoji.push ( `<div class = "emoji"> &#${i} <code>${i}</code>
</div>` )}

$emoji.innerHTML += emoji.join('')


