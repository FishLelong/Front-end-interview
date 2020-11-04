import { addMessages, init, getLocaleFromNavigator } from '../web_modules/svelte-i18n.js';

/*
const supported = [
  'de',
  'en',
  'es',
  'fa',
  'fr',
  'ga',
  'id',
  'it',
  'kr',
  'pl',
  'pt-br',
  'ro',
  'ru',
  'tr',
  'uk',
  'zh-TW',
];
*/

// de
import de from './config/locales/de.json.proxy.js';
// en
import en from './config/locales/en.json.proxy.js';

// es
import es from './config/locales/es.json.proxy.js';
// fa
import fa from './config/locales/fa.json.proxy.js';
// import fr from './config/locales/fr.json';

// ga
import ga from './config/locales/ga.json.proxy.js';

// id
import id from './config/locales/id.json.proxy.js';

// it
import it from './config/locales/it.json.proxy.js';

// kr
import kr from './config/locales/kr.json.proxy.js';

// pl
import pl from './config/locales/pl.json.proxy.js';

// pt-br
import ptbr from './config/locales/pt-br.json.proxy.js';

// ro
import ro from './config/locales/ro.json.proxy.js';

// ru
import ru from './config/locales/ru.json.proxy.js';

// tr
import tr from './config/locales/tr.json.proxy.js';

// uk
import uk from './config/locales/uk.json.proxy.js';

// zh-TW
import zhTW from './config/locales/zh-TW.json.proxy.js';
// // de
addMessages('de', de);

// en
addMessages('en', en);

// es
addMessages('es', es);

// fa
addMessages('fa', fa);

// fr
// addMessages('fr', fr);

// ga
addMessages('ga', ga);

// id
addMessages('id', id);

// it
addMessages('it', it);

// kr
addMessages('kr', kr);
// pl
addMessages('pl', pl);

// ptbr
addMessages('pt-br', ptbr);

// ro
addMessages('ro', ro);

// ru
addMessages('ru', ru);

// tr
addMessages('tr', tr);
// uk
addMessages('uk', uk);
// zh-TW
addMessages('zh-TW', zhTW);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
