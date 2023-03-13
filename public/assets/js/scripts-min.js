(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var accordionCard = function accordionCard() {
	var acc = document.getElementsByClassName("accordion__header");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			var active = document.querySelector(".active");
			if (active && active !== this) {
				active.classList.remove("active");
				// active.nextElementSibling.style.display = "none";
			}
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}
};

exports.accordionCard = accordionCard;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var bottomNav = exports.bottomNav = function bottomNav() {
	var myFunction = function myFunction() {
		document.querySelector('.bottom-nav__hamburguer').addEventListener('click', function (e) {
			e.preventDefault();
			console.log(e);
			[].map.call(document.querySelectorAll('.bottom-nav__hamburguer'), function (el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.bottom-nav__menu--ham'), function (el) {
				el.classList.toggle('show-bottom-nav');
			});
		});
	};
	myFunction();
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});


var tnsSingleGames = function tnsSingleGames() {
	var slider = tns({
		container: '#tnsSingleGames',
		items: 1,
		slideBy: 1,
		speed: 1000,
		nav: false,
		mode: 'gallery',
		mouseDrag: true,
		autoplay: true,
		autoplayButtonOutput: false,
		edgePadding: "50px",
		controlsText: ['<i role="button" class="fas fa-chevron-left"></i>', '<i role="button" class="fas fa-chevron-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			640: {
				items: 2
			},
			960: {
				items: 3
			}
		}
	});
};

exports.tnsSingleGames = tnsSingleGames;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = exports.topNav = function topNav() {
	var myFunction = function myFunction() {
		var inner = document.querySelector('.hamburger-inner');
		var innerAfter = document.querySelector('.hamburger-inner::after');
		document.querySelector('.hamburger').addEventListener('click', function (e) {
			e.preventDefault();
			console.log(e);
			[].map.call(document.querySelectorAll('.hamburger'), function (el) {
				el.classList.toggle('is-active');
				if (el.className.includes('is-active')) {
					el.classList.add('white');
					inner.classList.add('red');
				} else {
					el.classList.remove('white');
					inner.classList.remove('red');
				}
			});
			[].map.call(document.querySelectorAll('.top-nav__menu'), function (el) {
				el.classList.toggle('show-top-nav');
				// console.log(el)
			});
		});
	};
	myFunction();
};

},{}],5:[function(require,module,exports){
'use strict';

var _tnsSlider = require('./components/tns-slider');

var _topNav = require('./components/topNav');

var _bottomNav = require('./components/bottomNav');

var _accordion = require('./components/accordion');

(function () {
	(0, _topNav.topNav)();
	(0, _bottomNav.bottomNav)();
	if (document.body.classList.contains('inicio')) {
		// functions here

		(0, _tnsSlider.tnsSingleGames)();
	} else if (document.body.classList.contains('reglas')) {
		(0, _accordion.accordionCard)();
	}
})();

},{"./components/accordion":1,"./components/bottomNav":2,"./components/tns-slider":3,"./components/topNav":4}]},{},[5]);

//# sourceMappingURL=scripts-min.js.map
