const emoji = {
  heart: "\u{1F496}",
  cake: "\u{1F382}",
  party: "\u{1F389}",
  face: "\u{1F973}",
  balloon: "\u{1F388}",
  sparkles: "\u{2728}",
  camera: "\u{1F4F8}",
  star: "\u{1F31F}",
  pink: "\u{1F495}",
  dizzy: "\u{1F4AB}",
  flower: "\u{1F338}",
  door: "\u{1F6AA}"
};

const floatingMessages = [
  `Happiest Birthday Dear Siddhi ${emoji.heart}${emoji.cake}`,
  `Every page here is sending love, smiles, and warm wishes to Siddhi. ${emoji.party}`,
  `This birthday story is made to feel sweet, personal, and full of joy. ${emoji.face}`,
  `The slideshow is now playing every photo from the images folder. ${emoji.heart}${emoji.balloon}`
];

const galleryCaptions = [
  `Cake, candles, and Siddhi's happy smile. ${emoji.cake}`,
  `A lovely candid moment from Siddhi's celebration. ${emoji.heart}`,
  `One more memory worth keeping close forever. ${emoji.sparkles}`,
  `A sweet photo from a joyful birthday day. ${emoji.party}`,
  `Laughter that deserves its own little frame. ${emoji.face}`
];

const photoFiles = [
  "1000001590.jpg.jpeg",
  "1000068604.jpg.jpeg",
  "1000141034.jpg.jpeg",
  "1000141066.jpg.jpeg",
  "1000141073.jpg.jpeg",
  "1000141078.jpg.jpeg",
  "1000141080.jpg.jpeg",
  "1000141412.jpg.jpeg",
  "1000141449.jpg.jpeg",
  "1000141450.jpg.jpeg",
  "1000141455.jpg.jpeg",
  "1000141460.jpg.jpeg",
  "1000141474.jpg.jpeg",
  "1000141477.jpg.jpeg",
  "1000142031.jpg.jpeg",
  "1000142385.png.",
  "1000213150.png",
  "1000214609.jpg.jpeg",
  "1000214612.jpg.jpeg",
  "1000214615.jpg.jpeg",
  "1000214618.jpg.jpeg",
  "1000214656.jpg.jpeg"
];

const portraitImage = `images/${photoFiles[0]}`;

const galleryImages = photoFiles.map((fileName, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    src: `images/${fileName}`,
    title: `Siddhi Memory ${number}`,
    description: galleryCaptions[index % galleryCaptions.length]
  };
});

const storyPages = [
  {
    nav: "Cover",
    eyebrow: "Page 01",
    title: `Happiest Birthday Dear Siddhi ${emoji.heart}${emoji.cake}`,
    subtitle: "One special day, five lovely pages, and a heart full of wishes made just for you.",
    body: "Today is all about Siddhi and the joy she brings. This birthday website opens like a tiny storybook so every message feels warm, personal, and full of love.",
    highlights: [
      `May Siddhi's day be full of smiles, cake, and sweet surprises. ${emoji.cake}`,
      `May every little moment today feel soft, bright, and happy. ${emoji.heart}`,
      `Every page ahead is here to celebrate Siddhi with love. ${emoji.party}`
    ],
    quote: `Happiest Birthday Dear Siddhi, may your day begin with love and shine with joy. ${emoji.heart}`,
    spark: `Take a happy breath, smile, and step into your celebration. ${emoji.face}`,
    footer: "Start here and open each birthday wish one page at a time.",
    image: portraitImage,
    imageAlt: "Birthday portrait cover image",
    toast: `Happiest Birthday Dear Siddhi ${emoji.heart}${emoji.cake} Let the wishes begin.`
  },
  {
    nav: "Gratitude",
    eyebrow: "Page 02",
    title: `Siddhi, thank you for being so wonderful ${emoji.heart}`,
    subtitle: "A heartfelt wish begins by celebrating the person who makes life brighter.",
    body: "Some people carry warmth, sweetness, and calm wherever they go, and Siddhi is one of them. This page is for honoring that gentle, happy presence.",
    highlights: [
      `Thank you for the warmth you bring into every room. ${emoji.heart}`,
      `Thank you for making ordinary days feel softer and brighter. ${emoji.sparkles}`,
      `Thank you for being someone people truly love and value. ${emoji.party}`
    ],
    quote: `Siddhi, your kindness leaves a lovely sparkle on the hearts around you. ${emoji.pink}`,
    spark: `A thank-you full of love makes the whole wish feel deeper. ${emoji.heart}`,
    footer: "This page carries the heart of Siddhi's birthday message.",
    image: portraitImage,
    imageAlt: "Birthday portrait on the gratitude page",
    toast: `Sending Siddhi warm gratitude and birthday love. ${emoji.heart}`
  },
  {
    nav: "Memories",
    eyebrow: "Page 03",
    title: `Let's smile at Siddhi's sweet memories ${emoji.camera}`,
    subtitle: "Shared laughter gives every birthday wish its most personal glow.",
    body: "Think of the happy jokes, little adventures, and quiet moments that still make you smile. Those memories turn this birthday wish into something truly special for Siddhi.",
    highlights: [
      `The best memories are the ones that still feel alive. ${emoji.dizzy}`,
      `Joy grows when it is remembered together. ${emoji.heart}`,
      `Even small moments can become beautiful treasures. ${emoji.balloon}`
    ],
    quote: `Every beautiful memory with Siddhi feels like a page worth saving forever. ${emoji.pink}`,
    spark: `A remembered smile can make the whole birthday feel even sweeter. ${emoji.cake}`,
    footer: "This page keeps Siddhi's birthday story personal and warm.",
    image: portraitImage,
    imageAlt: "Birthday portrait on the memories page",
    toast: `Happy memories make Siddhi's birthday story glow. ${emoji.sparkles}`
  },
  {
    nav: "Dreams",
    eyebrow: "Page 04",
    title: `Big wishes for Siddhi's year ahead ${emoji.sparkles}`,
    subtitle: "Birthdays are beautiful moments to send hope into the future.",
    body: "This page is for courage, growth, success, and gentle confidence. May Siddhi's coming year be filled with peace, progress, bright chances, and happy surprises.",
    highlights: [
      `May effort turn into success and pride. ${emoji.party}`,
      `May new doors open at the perfect time. ${emoji.door}${emoji.sparkles}`,
      `May confidence grow beside every dream. ${emoji.heart}`
    ],
    quote: `May Siddhi's next year be full of hope, wins, peace, and shining moments. ${emoji.star}`,
    spark: `A future full of love and hope makes every birthday wish feel bigger. ${emoji.dizzy}`,
    footer: "Only one more page remains before Siddhi's final birthday blessing.",
    image: portraitImage,
    imageAlt: "Birthday portrait on the dreams page",
    toast: `Wishing Siddhi a year full of dreams, wins, and joy. ${emoji.party}`
  },
  {
    nav: "Finale",
    eyebrow: "Page 05",
    title: `One final wish for Siddhi ${emoji.heart}${emoji.party}`,
    subtitle: "A closing page should feel like a hug, a blessing, and a smile all at once.",
    body: "May Siddhi's days ahead be gentle, joyful, and full of reasons to smile often. Keep glowing, keep growing, and keep making life beautiful just by being yourself.",
    highlights: [
      `May joy find Siddhi again and again. ${emoji.heart}`,
      `May calm stay close even in busy seasons. ${emoji.flower}`,
      `May love, laughter, and good news keep arriving. ${emoji.cake}${emoji.party}`
    ],
    quote: `Happiest Birthday Dear Siddhi. May your next chapter feel brighter than ever. ${emoji.pink}`,
    spark: `Press celebrate and let the hearts and confetti fill the screen. ${emoji.face}`,
    footer: "You reached Siddhi's final page. Press celebrate for the birthday moment.",
    image: portraitImage,
    imageAlt: "Birthday portrait on the finale page",
    toast: `Happiest Birthday Dear Siddhi ${emoji.heart}${emoji.cake}${emoji.party} Wishing you love, joy, and beautiful surprises.`
  }
];

const floatingNote = document.getElementById("floatingNote");
const celebrateNow = document.getElementById("celebrateNow");
const toast = document.getElementById("birthdayToast");
const revealElements = document.querySelectorAll(".reveal");
const stepDots = document.getElementById("stepDots");
const progressCount = document.getElementById("progressCount");
const meterFill = document.getElementById("meterFill");
const pageEyebrow = document.getElementById("pageEyebrow");
const pageNavTitle = document.getElementById("pageNavTitle");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const pageBody = document.getElementById("pageBody");
const pageHighlights = document.getElementById("pageHighlights");
const pageQuote = document.getElementById("pageQuote");
const pageSpark = document.getElementById("pageSpark");
const pageFooter = document.getElementById("pageFooter");
const pageImage = document.getElementById("pageImage");
const pageCard = document.getElementById("pageCard");
const prevStep = document.getElementById("prevStep");
const nextStep = document.getElementById("nextStep");
const slideshowShell = document.getElementById("slideshowShell");
const slideshowImage = document.getElementById("slideshowImage");
const slideTitle = document.getElementById("slideTitle");
const slideDescription = document.getElementById("slideDescription");
const slideCount = document.getElementById("slideCount");
const slideProgress = document.getElementById("slideProgress");
const slideThumbs = document.getElementById("slideThumbs");
const slidePrev = document.getElementById("slidePrev");
const slideNext = document.getElementById("slideNext");
const slideOpen = document.getElementById("slideOpen");
const galleryLightbox = document.getElementById("galleryLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCount = document.getElementById("lightboxCount");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const slideIntervalMs = 3600;

let floatingIndex = 0;
let currentStep = 0;
let currentSlideIndex = 0;
let lightboxIndex = 0;
let toastTimer;
let slideTimer;

function updateFloatingNote() {
  floatingNote.textContent = floatingMessages[floatingIndex];
  floatingIndex = (floatingIndex + 1) % floatingMessages.length;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function launchConfetti() {
  const colors = ["#c55c75", "#efb66e", "#ffd8a8", "#8bc3d7", "#fff0d4"];

  for (let index = 0; index < 34; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${3 + Math.random() * 2}s`;
    piece.style.transform = `rotate(${Math.random() * 260}deg)`;
    document.body.appendChild(piece);

    window.setTimeout(() => {
      piece.remove();
    }, 5600);
  }
}

function renderStepDots() {
  stepDots.innerHTML = "";

  storyPages.forEach((page, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `step-dot${index === currentStep ? " active" : ""}`;
    button.setAttribute("aria-label", `Open ${page.nav} page`);
    button.innerHTML = `
      <strong>${String(index + 1).padStart(2, "0")}</strong>
      <span>${page.nav}</span>
    `;

    button.addEventListener("click", () => {
      renderPage(index);
    });

    stepDots.appendChild(button);
  });
}

function animatePageCard() {
  pageCard.classList.remove("page-enter");
  void pageCard.offsetWidth;
  pageCard.classList.add("page-enter");
}

function renderSlideThumbs() {
  slideThumbs.innerHTML = "";

  galleryImages.forEach((photo, index) => {
    const thumb = document.createElement("button");
    thumb.type = "button";
    thumb.className = `slide-thumb${index === currentSlideIndex ? " active" : ""}`;
    thumb.setAttribute("aria-label", `Show ${photo.title}`);
    thumb.innerHTML = `<img src="${photo.src}" alt="${photo.title} thumbnail">`;

    thumb.addEventListener("click", () => {
      renderSlide(index);
      startSlideshow();
    });

    slideThumbs.appendChild(thumb);
  });
}

function renderSlide(index) {
  currentSlideIndex = (index + galleryImages.length) % galleryImages.length;
  const selectedPhoto = galleryImages[currentSlideIndex];

  slideshowImage.src = selectedPhoto.src;
  slideshowImage.alt = selectedPhoto.title;
  slideTitle.textContent = selectedPhoto.title;
  slideDescription.textContent = selectedPhoto.description;
  slideCount.textContent = `${currentSlideIndex + 1} / ${galleryImages.length}`;
  slideProgress.style.width = `${((currentSlideIndex + 1) / galleryImages.length) * 100}%`;

  renderSlideThumbs();
}

function moveSlide(direction) {
  renderSlide(currentSlideIndex + direction);
}

function stopSlideshow() {
  window.clearInterval(slideTimer);
}

function startSlideshow() {
  stopSlideshow();
  slideTimer = window.setInterval(() => {
    moveSlide(1);
  }, slideIntervalMs);
}

function updateLightbox(index) {
  lightboxIndex = (index + galleryImages.length) % galleryImages.length;
  const selectedPhoto = galleryImages[lightboxIndex];

  lightboxImage.src = selectedPhoto.src;
  lightboxImage.alt = `${selectedPhoto.title} full view`;
  lightboxTitle.textContent = selectedPhoto.title;
  lightboxCount.textContent = `${lightboxIndex + 1} / ${galleryImages.length}`;
}

function openLightbox(index) {
  updateLightbox(index);
  galleryLightbox.classList.add("open");
  galleryLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  galleryLightbox.classList.remove("open");
  galleryLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

function moveLightbox(direction) {
  updateLightbox(lightboxIndex + direction);
}

function renderPage(index) {
  currentStep = index;
  const page = storyPages[currentStep];

  pageEyebrow.textContent = page.eyebrow;
  pageNavTitle.textContent = page.nav;
  pageTitle.textContent = page.title;
  pageSubtitle.textContent = page.subtitle;
  pageBody.textContent = page.body;
  pageQuote.textContent = page.quote;
  pageSpark.textContent = page.spark;
  pageFooter.textContent = page.footer;
  pageImage.src = page.image;
  pageImage.alt = page.imageAlt;

  progressCount.textContent = `${currentStep + 1} / ${storyPages.length}`;
  meterFill.style.width = `${((currentStep + 1) / storyPages.length) * 100}%`;
  prevStep.disabled = currentStep === 0;
  nextStep.textContent = currentStep === storyPages.length - 1 ? `Celebrate ${emoji.party}` : `Next Page ${emoji.heart}`;

  pageHighlights.innerHTML = "";
  page.highlights.forEach((highlight) => {
    const item = document.createElement("li");
    item.textContent = highlight;
    pageHighlights.appendChild(item);
  });

  renderStepDots();
  animatePageCard();
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

celebrateNow.addEventListener("click", () => {
  launchConfetti();
  showToast(storyPages[currentStep].toast);
});

slidePrev.addEventListener("click", () => {
  moveSlide(-1);
  startSlideshow();
});

slideNext.addEventListener("click", () => {
  moveSlide(1);
  startSlideshow();
});

slideOpen.addEventListener("click", () => {
  openLightbox(currentSlideIndex);
});

slideshowShell.addEventListener("mouseenter", () => {
  stopSlideshow();
});

slideshowShell.addEventListener("mouseleave", () => {
  startSlideshow();
});

lightboxClose.addEventListener("click", () => {
  closeLightbox();
});

lightboxPrev.addEventListener("click", () => {
  moveLightbox(-1);
});

lightboxNext.addEventListener("click", () => {
  moveLightbox(1);
});

galleryLightbox.addEventListener("click", (event) => {
  if (event.target === galleryLightbox) {
    closeLightbox();
  }
});

prevStep.addEventListener("click", () => {
  if (currentStep > 0) {
    renderPage(currentStep - 1);
  }
});

nextStep.addEventListener("click", () => {
  if (currentStep === storyPages.length - 1) {
    launchConfetti();
    showToast(storyPages[currentStep].toast);
    return;
  }

  renderPage(currentStep + 1);
});

document.addEventListener("keydown", (event) => {
  if (galleryLightbox.classList.contains("open")) {
    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      moveLightbox(1);
    }

    if (event.key === "ArrowLeft") {
      moveLightbox(-1);
    }

    return;
  }

  if (event.key === "ArrowRight") {
    if (currentStep === storyPages.length - 1) {
      launchConfetti();
      showToast(storyPages[currentStep].toast);
      return;
    }

    renderPage(currentStep + 1);
  }

  if (event.key === "ArrowLeft" && currentStep > 0) {
    renderPage(currentStep - 1);
  }
});

updateFloatingNote();
window.setInterval(updateFloatingNote, 3200);
renderSlide(0);
startSlideshow();
renderPage(0);
