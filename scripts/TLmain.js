$(document).ready(function () {
  console.log("TLmain.js is running");

  function animateTimeline() {
    const events = $('.timeline-event');
    const eventDelay = 700;
    const visibleTime = 6000;
    let delay = 0;

    events.each(function (index) {
      const $event = $(this);

      $event.removeClass('visible bounce offscreen-left offscreen-right offscreen-center');

      const pos = index % 3;
      let startClass = '';
      if (pos === 0) startClass = 'offscreen-left';
      else if (pos === 1) startClass = 'offscreen-right';
      else startClass = 'offscreen-center';

      $event.addClass(startClass);

      setTimeout(() => {
        $event.removeClass(startClass).addClass('visible bounce');
        $event.prev('.landing-block').addClass('active');

        setTimeout(() => {
          $event.removeClass('bounce');
        }, 800);
      }, delay);

      delay += eventDelay;
    });

    // Reset after all events are in and visible
    const totalCycle = delay + visibleTime;
    setTimeout(() => {
      events.removeClass('visible');
      $('.landing-block').removeClass('active');
    }, totalCycle);
  }

  animateTimeline();
  setInterval(animateTimeline, 8100); // Matches delay + visibleTime
});
