(function() {

    $("pre").css("user-select", "all");
    $("code").css("user-select", "auto");
    $("#google-center-div").hide();
    $(".adsbygoogle").remove();
    $(".hide-article-box").remove();
    $("#article_content").css({
        "height": "auto",
        "overflow": "auto"
    })
    console.log('成功启动去除复制限制');
    console.log('成功启动去除关注限制');
})()



// 监听来自background的消息 
chrome.runtime.sendMessage({ greeting: 'content-script ---> background/popup' }, function(response) {
    console.log('background msg:' + response);
});


