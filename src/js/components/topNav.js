export const topNav = () => {
	let myFunction = ()=> {
		const inner = document.querySelector('.hamburger-inner')
		const innerAfter = document.querySelector('.hamburger-inner::after')
		document.querySelector('.hamburger').addEventListener('click', function(e) {
			e.preventDefault();
			console.log(e);
			[].map.call(document.querySelectorAll('.hamburger'), function(el) {
				el.classList.toggle('is-active');
				if(el.className.includes('is-active')) {
					el.classList.add('white')
					inner.classList.add('red')
				} else {
					el.classList.remove('white')
					inner.classList.remove('red')
					
				}
			});
			[].map.call(document.querySelectorAll('.top-nav__menu'), function(el) {
				el.classList.toggle('show-top-nav');
				// console.log(el)
			});
			
		}); 
	};
	myFunction();
};
