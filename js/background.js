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
	onclick:(info,tab) => { alert(`当前地址：${info.pageUrl} 窗口索引：${tab.index}`)}
})