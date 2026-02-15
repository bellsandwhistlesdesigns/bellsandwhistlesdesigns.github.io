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

  // Update active dot
  const index = Math.round(track.scrollLeft / scrollAmount());

  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
};
    // Create dots container
    const dotsContainer = document.createElement('div');
      dotsContainer.classList.add('archive-dots');
      section.appendChild(dotsContainer);
    const cards = track.querySelectorAll('.archive-card');
    const dots = [];

  cards.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.classList.add('archive-dot');
  if (index === 0) dot.classList.add('active');

  dot.addEventListener('click', () => {
    track.scrollTo({
      left: index * scrollAmount(),
      behavior: 'smooth'
    });
  });

  dotsContainer.appendChild(dot);
  dots.push(dot);
});



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

