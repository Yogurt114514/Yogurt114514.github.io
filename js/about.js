var meuicat = {
	runtime: function() {
		let t = new Date("2023/04/22 05:20:00")
			.getTime(),
			n = new Date()
			.getTime(),
			a = Math.round((n - t) / 1e3),
			l = (a / 7884e4)
			.toFixed(2);
		let c = document.getElementById("run-time");
		c && (c.innerHTML = `已稳定运行 ${l} 坤年 🏀`),
			setTimeout(meuicat.runtime, 1e3);
	}, // about 运行时间
}

function whenDOMReady() {
	if (location.pathname.startsWith('/about/')) meuicat.runtime();
}

whenDOMReady() // 打开网站先执行一次
document.addEventListener("pjax:complete", whenDOMReady) // pjax加载完成（切换页面）后再执行一次
