const tnsSingleBanner = ()=> {
	const slider = tns({ 
		container           : '#tnsSingleBanner',
		items               : 1, 
		slideBy             : 1,
		speed               : 1000,
		nav					: false,
		mode                : 'gallery',
		mouseDrag           : true,
		autoplay			: true,
		autoplayButtonOutput : false,
		edgePadding			: "50px",
		controlsText: [ 
		'<i role="button" class="fas fa-chevron-left"></i>',
		'<i role="button" class="fas fa-chevron-right"></i>'
		],
		responsive: {
			0: {
				items: 1,
			},
			640: {
				items: 1,
			},
			960: {
				items: 1,
			}
		},
	}); 
};

const tnsSingleGames = ()=> {
	const slider = tns({ 
		container           : '#tnsSingleGames',
		items               : 1, 
		slideBy             : 1,
		speed               : 1000,
		nav					: false,
		mode                : 'gallery',
		mouseDrag           : true,
		autoplay			: true,
		autoplayButtonOutput : false,
		edgePadding			: "50px",
		controlsText: [ 
		'<i role="button" class="fas fa-chevron-left"></i>',
		'<i role="button" class="fas fa-chevron-right"></i>'
		],
		responsive: {
			0: {
				items: 1,
			},
			640: {
				items: 2,
			},
			960: {
				items: 3,
			}
		},
	}); 
};

export {
	tnsSingleGames,
	tnsSingleBanner
}
