var rank = ["<li><a href=\"contents\\announce\\000001.html\"><article><img width=\"300\" src=\"image\\000001\\making-website-blue.png\" alt=\"テスト\"><h4 class=\"post-title\">サイトを公開しました</h4></article></a></li>",
"<li><a href=\"contents\\announce\\000001.html\"><article><img width=\"300\" src=\"image\\000001\\making-website-blue.png\" alt=\"テスト\"><h4 class=\"post-title\">サイトを公開しました</h4></article></a></li>",
"<li><a href=\"contents\\announce\\000001.html\"><article><img width=\"300\" src=\"image\\000001\\making-website-blue.png\" alt=\"テスト\"><h4 class=\"post-title\">サイトを公開しました</h4></article></a></li>"];

var latest = ["<li><a href=\"contents\\announce\\000001.html\"><article><img width=\"300\" src=\"image\\000001\\making-website-blue.png\" alt=\"テスト\"><h4 class=\"post-title\">サイトを公開しました</h4></article></a></li>",
"<li><a href=\"contents\\announce\\000001.html\"><article><img width=\"300\" src=\"image\\000001\\making-website-blue.png\" alt=\"テスト\"><h4 class=\"post-title\">サイトを公開しました</h4></article></a></li>",
"<li><a href=\"contents\\announce\\000001.html\"><article><img width=\"300\" src=\"image\\000001\\making-website-blue.png\" alt=\"テスト\"><h4 class=\"post-title\">サイトを公開しました</h4></article></a></li>"];

var m,n;
if(typeof setting === 'undefined'){
    m = -3;
    n = -3;
}
else{
    m = -6;
    n = -20;
}

rank.slice(m).forEach(function(createElement){
    document.querySelector(".rank-article ul").insertAdjacentHTML('beforeend', createElement);
});
    
latest.slice(n).forEach(function(createElement){
    document.querySelector(".latest-article ul").insertAdjacentHTML('beforeend', createElement);
});