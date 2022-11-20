var rank = [
"<li><a href=\"https://shumipro.netlify.app/contents/announce/000001/open-our-site\"><article><img width=\"300\" src=\"contents\\announce\\000001\\making-website-blue.png\" alt=\"テスト\"><h4 class=\"post-title\">サイトを公開しました</h4></article></a></li>",
"<li><a href=\"https://shumipro.netlify.app/contents/announce/000001/open-our-site\"><article><img width=\"300\" src=\"contents\\announce\\000001\\making-website-blue.png\" alt=\"テスト\"><h4 class=\"post-title\">サイトを公開しました</h4></article></a></li>",
"<li><a href=\"https://shumipro.netlify.app/contents/announce/000001/open-our-site\"><article><img width=\"300\" src=\"contents\\announce\\000001\\making-website-blue.png\" alt=\"テスト\"><h4 class=\"post-title\">サイトを公開しました</h4></article></a></li>"
];

var latest = [
"<li><a href=\"https://shumipro.netlify.app/contents/announce/000002/open-our-site\"><article><img width=\"300\" src=\"https://shumipro.netlify.app/image/main/noimage.png\" alt=\"記事\"><h4 class=\"post-title\">当サイトについて</h4></article></a></li>",
"<li><a href=\"https://shumipro.netlify.app/contents/announce/000002/open-our-site\"><article><img width=\"300\" src=\"https://shumipro.netlify.app/image/main/noimage.png\" alt=\"記事\"><h4 class=\"post-title\">当サイトについて</h4></article></a></li>",
"<li><a href=\"https://shumipro.netlify.app/contents/announce/000002/open-our-site\"><article><img width=\"300\" src=\"https://shumipro.netlify.app/image/main/noimage.png\" alt=\"記事\"><h4 class=\"post-title\">当サイトについて</h4></article></a></li>"
];

rank.forEach(function(createElement){
    document.querySelector(".rank-article ul").insertAdjacentHTML('beforeend', createElement);
});

latest.forEach(function(createElement){
    document.querySelector(".latest-article ul").insertAdjacentHTML('beforeend', createElement);
});