const floatingMessages = [
  "Open each page slowly and let every wish land with warmth.",
  "This layout is ready for your own photos and personal words.",
  "A birthday story feels extra special when it moves one page at a time.",
  "The final page is waiting with a bright little celebration."
];

const storyPages = [
  {
    nav: "Cover",
    eyebrow: "Page 01",
    title: "Open the birthday book",
    subtitle: "One celebration, five soft pages, and a heart full of good wishes.",
    body: "Today is a lovely excuse to pause and say what matters most. This birthday website opens like a tiny storybook so every message feels personal instead of rushed.",
    highlights: [
      "This day deserves sweetness, calm, and delight.",
      "The best wishes arrive with care, not hurry.",
      "Every page ahead is here to make someone smile."
    ],
    quote: "May your birthday begin with peace, glow with joy, and end with gratitude.",
    spark: "Take a happy breath and step into the celebration.",
    footer: "Start here, then move page by page through the wishes.",
    image: "images/test.png",
    imageAlt: "Birthday cover placeholder image",
    toast: "The birthday story is open. Let the wishes begin."
  },
  {
    nav: "Gratitude",
    eyebrow: "Page 02",
    title: "First, thank you for being wonderfully you",
    subtitle: "A heartfelt wish always starts by honoring the person at the center of the day.",
    body: "Some people bring ease, comfort, and brightness wherever they go. This page is for celebrating that rare kind of presence and the kindness that makes everyday life feel lighter.",
    highlights: [
      "Thank you for the warmth you bring into every room.",
      "Thank you for making ordinary days feel softer.",
      "Thank you for being a person others can lean on."
    ],
    quote: "Your kindness leaves a quiet sparkle on the lives around you.",
    spark: "Gratitude turns a simple wish into a memorable one.",
    footer: "Page two sets the heart of the whole birthday message.",
    image: "images/memory-1.svg",
    imageAlt: "Birthday gratitude illustration placeholder",
    toast: "A warm thank-you makes every birthday wish stronger."
  },
  {
    nav: "Memories",
    eyebrow: "Page 03",
    title: "Now let's smile at the memories",
    subtitle: "Shared laughter gives a birthday message its personal glow.",
    body: "Think of the random jokes, little adventures, and quiet moments that still feel bright in memory. A birthday wish becomes unforgettable when it carries the feeling of those moments forward.",
    highlights: [
      "The best memories are the ones that still feel alive.",
      "Joy grows when it is remembered together.",
      "Even small moments can become treasures."
    ],
    quote: "Every beautiful memory with you feels like a page worth saving forever.",
    spark: "A remembered smile can make the whole day sweeter.",
    footer: "This page keeps the birthday message personal and warm.",
    image: "images/memory-2.svg",
    imageAlt: "Birthday memories illustration placeholder",
    toast: "Good memories are one of the sweetest birthday gifts."
  },
  {
    nav: "Dreams",
    eyebrow: "Page 04",
    title: "Then wish boldly for the year ahead",
    subtitle: "Birthdays are beautiful moments to speak hope over what comes next.",
    body: "This is the page for courage, growth, success, and quiet confidence. Let the wish reach beyond today and speak to the wins, peace, and progress waiting in the coming year.",
    highlights: [
      "May effort turn into success and pride.",
      "May new doors open at the right time.",
      "May confidence grow beside every dream."
    ],
    quote: "May the next year meet you with open roads, brave hope, and shining victories.",
    spark: "A future-focused wish gives the story lift and momentum.",
    footer: "Only one page remains before the final birthday blessing.",
    image: "images/memory-3.svg",
    imageAlt: "Birthday dreams illustration placeholder",
    toast: "Big dreams deserve birthday wishes that sound fearless."
  },
  {
    nav: "Finale",
    eyebrow: "Page 05",
    title: "And here comes the final birthday wish",
    subtitle: "A closing page should feel like a hug, a blessing, and a bright send-off.",
    body: "May the days ahead be gentle to your heart, generous to your efforts, and full of reasons to laugh often. Keep glowing, keep growing, and keep stepping into life as beautifully as you already do.",
    highlights: [
      "May joy find you again and again.",
      "May calm stay close even in busy seasons.",
      "May love, laughter, and good news keep arriving."
    ],
    quote: "Happy Birthday. May your next chapter feel even brighter than the last.",
    spark: "Press celebrate and let the final page shower the screen with joy.",
    footer: "You reached the last page. Use Celebrate for the confetti moment.",
    image: "images/closing-bg.svg",
    imageAlt: "Birthday finale illustration placeholder",
    toast: "Happy Birthday! Wishing you joy, peace, and a year full of beautiful surprises."
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

let floatingIndex = 0;
let currentStep = 0;
let toastTimer;

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
  nextStep.textContent = currentStep === storyPages.length - 1 ? "Celebrate" : "Next Page";

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
renderPage(0);
