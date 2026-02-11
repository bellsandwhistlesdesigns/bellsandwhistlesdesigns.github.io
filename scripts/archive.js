// Archive left and right buttons 

console.log("archive.js is working");


document.querySelectorAll('[data-archive]').forEach(section => {
    const track = section.querySelector('.archive-track');
    const prevBtn = section.querySelector('.archive-scroll--prev');
    const nextBtn = section.querySelector('.archive-scroll--next');

    if (!track) return;

    const updateButtons = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;

      prevBtn.disabled = track.scrollLeft <= 0;
      nextBtn.disabled = track.scrollLeft >= maxScrollLeft - 1;
    };

    const scrollAmount = () => {
      const firstCard = track.querySelector('.archive-card');
      return firstCard ? firstCard.offsetWidth + 24 : 300;
    };

    prevBtn.addEventListener('click', () => {
      track.scrollBy({
        left: -scrollAmount(),
        behavior: 'smooth'
      });
    });

    nextBtn.addEventListener('click', () => {
      track.scrollBy({
        left: scrollAmount(),
        behavior: 'smooth'
      });
    });

    track.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);

    updateButtons();
  });

