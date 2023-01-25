export const bottomNav = () => {
	let myFunction = ()=> {
		document.querySelector('.bottom-nav__hamburguer').addEventListener('click', function(e) {
			e.preventDefault();
			console.log(e);
			[].map.call(document.querySelectorAll('.bottom-nav__hamburguer'), function(el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.bottom-nav__menu--ham'), function(el) {
				el.classList.toggle('show-bottom-nav');

			});
		}); 
	};
	myFunction();
};
