import Visual from './modules/Visual/index';

/* debug */
// import SiteSpeedChecker from './debug/SiteSpeedChecker';
// import LongTaskChecker from './debug/LongTaskChecker';

// new SiteSpeedChecker().getAll();
// new LongTaskChecker().observe();

const v = new Visual({
    el: '#webgl'
});
v.init();

const tick = () => {
    requestAnimationFrame(tick);
    v.update();
}

tick();