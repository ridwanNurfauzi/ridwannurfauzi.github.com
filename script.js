function onReady(cb) {
    let intervalId = window.setInterval(() => {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            cb.call(this);
        }
    }, 1000);
}
onReady(() => {
    document.querySelector('.loading').style.visibility = 'hidden';
    document.querySelector('.loading').style.animation = 'loading-last-animation 1s';
});