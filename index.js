/**
 * 设置系统剪贴板的内容
 * @param {string} data 需要设置的内容
 * @returns {Promise} 设置状态
 */
export function setClipboardData(data) {
	return new Promise((success, fail) => {
		// #ifndef H5
		uni.setClipboardData({ data, success, fail });
		// #endif

		// #ifdef H5
		// navigator.clipboard.writeText(data).then(success).catch(fail);
		const textarea = document.createElement('textarea');
		textarea.value = data;
		textarea.readOnly = 'readOnly';
		document.body.appendChild(textarea);
		textarea.select();
		textarea.setSelectionRange(0, data.length);
		document.execCommand('copy');
		textarea.remove();
		success(data);
		// #endif
	});
}

/**
 * 获取系统剪贴板内容
 * @returns {Promise} 剪贴板内容
 */
export function getClipboardData() {
	return new Promise((success, fail) => {
		// #ifndef H5
		uni.getClipboardData({ success, fail });
		// #endif

		// #ifdef H5
		navigator.clipboard.readText().then(success).catch(fail);
		// #endif
	});
}
