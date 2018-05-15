const cheerio = require('cheerio');

function findImg (dom,callBack){
	let $ = cheerio.load(dom);

	var imgPath = $('.rich_media_content')
	imgPath.find('p').each(function(i,elem){
		var imgSrc = $(this).find('img').attr('data-src')
		if (imgSrc != undefined) {
			callBack(imgSrc,i)
		}
	})
}

module.exports = {
	findImg:findImg
}