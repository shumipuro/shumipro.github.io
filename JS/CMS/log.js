var info = [
"",
"",
"",
"",
"",
"",
"",
"<li><time>22-10-11</time>さようなら。</li>",
"<li><time>22-9-22</time>こんにちは！！</li>",
"<li><time>22-9-17</time>当サイト設立</li>"
];

info.forEach(function(createElement){
    document.querySelector(".log ul").insertAdjacentHTML('beforeend', createElement);
});