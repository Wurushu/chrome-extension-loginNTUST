function data(){
	chrome.tabs.executeScript({
		code: 'document.getElementById("code_box").value ="' + document.getElementById("code").value + '"'
	});
	chrome.tabs.executeScript({
		file: 'script2.js'
	});
}

document.getElementById('btn').addEventListener('click', data);