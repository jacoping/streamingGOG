// ============================================================
// SETTINGS
// ============================================================

// Show debug info overlay (e.g. filename tag in play.html)
var DEBUG = true;

// Soglia redirect: dopo ogni video viene generato un numero
// random tra 0 e 1. Se è maggiore di questo valore, la pagina
// reindirizza su index.html. (0 = sempre, 1 = mai)
var REDIRECT_THRESHOLD = 0.8;

// Secondi prima che index.html ritorni su videos/play.html
// Il tempo effettivo è scelto a caso tra MIN e MAX ad ogni caricamento
var REDIRECT_MIN = 6;
var REDIRECT_MAX = 18;

// Secondi di inattività prima che play.html si auto-refreshi
var TIMEOUT_SECONDS = 60;
