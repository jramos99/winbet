import {tnsSingleGames, tnsSingleBanner} from './components/tns-slider';
import {topNav} from './components/topNav';
import {bottomNav} from './components/bottomNav';
import {accordionCard} from './components/accordion';
import { closeModal } from './components/modal';

(()=>{
	topNav();
	bottomNav();
	
	if (document.body.classList.contains('inicio')) {	
		// functions here
		closeModal();
		tnsSingleGames();
		tnsSingleBanner();
	}else if (document.body.classList.contains('reglas')) {
		accordionCard();
	}
})();

