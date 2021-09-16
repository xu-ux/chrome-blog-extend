var url = '';
var apiUrl = '';
function getUrl() {
    return url;
}


// 监听来自content-script的消息 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('content-script msg:',request,sender);
    url = sender.tab.url;
    sendResponse('background---> content-script msg:'+ JSON.stringify(request));
})

// 右键菜单
chrome.contextMenus.create({
    title: "获取当前页面信息",
    onclick:(info,tab) => {
        let pageUrl = info.pageUrl;
        let inputDom =document.createElement('input');
        inputDom.style.opacity = 0;//设置input标签设置为透明(不可见)
        inputDom.value = pageUrl; // 修改文本框的内容
        document.body.appendChild(inputDom);
        inputDom.select(); // 选中文本
        document.execCommand("copy");
        alert(`当前地址：${pageUrl} 已复制到粘贴板`)
    }
})