import {tnsSingle, tnsSingleGames} from './components/tns-slider';
import {topNav} from './components/topNav';
import {bottomNav} from './components/bottomNav';
import {accordionCard} from './components/accordion';

(()=>{
	topNav();
	bottomNav();
	if (document.body.classList.contains('inicio')) {	
		// functions here
		tnsSingle();
		tnsSingleGames();
	}else if (document.body.classList.contains('reglas')) {
		accordionCard();
	}
})();

