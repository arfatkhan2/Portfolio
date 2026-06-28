const revealItems = document.querySelectorAll(".reveal");
const countItems = document.querySelectorAll("[data-count]");
const themeToggle = document.querySelector(".theme-toggle");
const skillLogos = document.querySelectorAll(".skill-mark img");
const resumeTriggers = document.querySelectorAll(".resume-trigger");
const resumeModal = document.querySelector(".resume-modal");
const resumeDialog = document.querySelector(".resume-book");
const resumeCloseItems = document.querySelectorAll("[data-resume-close]");
const projectCarousel = document.querySelector("[data-project-carousel]");
const projectCards = projectCarousel ? Array.from(projectCarousel.querySelectorAll(".project-card")) : [];
const projectPrev = document.querySelector("[data-project-prev]");
const projectNext = document.querySelector("[data-project-next]");
const projectCount = document.querySelector("[data-project-count]");
const galleryCards = document.querySelectorAll("[data-gallery-project]");
const galleryModal = document.querySelector(".project-gallery-modal");
const galleryDialog = document.querySelector(".project-gallery");
const galleryCloseItems = document.querySelectorAll("[data-gallery-close]");
const galleryImage = document.querySelector("[data-gallery-image]");
const galleryTitle = document.querySelector("[data-gallery-title]");
const galleryDescription = document.querySelector("[data-gallery-description]");
const galleryLink = document.querySelector("[data-gallery-link]");
const galleryThumbs = document.querySelector("[data-gallery-thumbs]");
const galleryCount = document.querySelector("[data-gallery-count]");

const projectGalleries = {
  pepperball: {
    title: "PepperBall Website",
    description: "Responsive production website work for PepperBall with clean product presentation and careful frontend implementation.",
    url: "https://pepperball.com/",
    images: [
      {
        src: "assets/optimized/pepperball-1.jpg",
        alt: "PepperBall homepage screenshot"
      },
      {
        src: "assets/optimized/pepperball-2.jpg",
        alt: "PepperBall product page screenshot"
      },
      {
        src: "assets/optimized/pepperball-3.jpg",
        alt: "PepperBall website screenshot"
      },
      {
        src: "assets/optimized/pepperball-4.jpg",
        alt: "PepperBall mobile screenshot"
      }
    ]
  },
  fourvisions: {
    title: "Four Visions Website",
    description: "Responsive e-commerce interface work with polished product presentation and structured layouts.",
    url: "https://fourvisions.com/",
    images: [
      {
        src: "assets/optimized/fourvision-1.jpg",
        alt: "Four Visions homepage screenshot"
      },
      {
        src: "assets/optimized/fourvision-2.jpg",
        alt: "Four Visions product page screenshot"
      },
      {
        src: "assets/optimized/fourvision-3.jpg",
        alt: "Four Visions website screenshot"
      },
      {
        src: "assets/optimized/fourvision-4.jpg",
        alt: "Four Visions mobile screenshot"
      }
    ]
  },
  bannersolutions: {
    title: "Banner Solutions Website",
    description: "B2B e-commerce interface work for structured product discovery and production-ready catalog UI.",
    url: "https://www.bannersolutions.com/",
    images: [
      {
        src: "assets/optimized/banner-1.jpg",
        alt: "Banner Solutions homepage screenshot"
      },
      {
        src: "assets/optimized/banner-2.jpg",
        alt: "Banner Solutions product page screenshot"
      },
      {
        src: "assets/optimized/banner-3.jpg",
        alt: "Banner Solutions website screenshot"
      },
      {
        src: "assets/optimized/banner-4.jpg",
        alt: "Banner Solutions mobile screenshot"
      }
    ]
  },
  berger: {
    title: "Analytics Dashboard - Berger Paints",
    description: "Internal analytics dashboard work with real-time order and inventory insights, filters, exports, and WebSocket data feeds.",
    url: "https://www.bergerpaints.com/",
    images: [
      {
        src: "https://images.bergerpaints.com/2024-11/banner-desktop-six-min.png?VersionId=uxDChmouN6PbYxpfaRqwGhvUFXrMmaw8&format=webp&width=640&quality=75",
        alt: "Berger Paints website visual"
      },
      {
        src: "https://images.bergerpaints.com/2026-04/navbigimg.png?VersionId=b80.eXgvjci3eKfun6EYkAaScxmG9uNl&format=webp&width=256&quality=75",
        alt: "Berger Paints logo"
      }
    ]
  },
  invoice: {
    title: "PDF Invoice Automation",
    description: "Automated branded document generation pipeline for invoices and loan reports using Next.js SSR and Puppeteer.",
    url: "",
    images: [
      {
        src: "assets/project-invoice-placeholder.svg",
        alt: "PDF invoice automation placeholder"
      }
    ]
  }
};

const updateScrollProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
  document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

const countUp = (item) => {
  const target = Number(item.dataset.count || 0);
  const suffix = item.dataset.suffix || "";
  const duration = 900;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    item.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      countUp(entry.target);
      countObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.6 }
);

revealItems.forEach((item, index) => {
  item.style.setProperty("--delay", `${Math.min(index, 6) * 55}ms`);
  observer.observe(item);
});

countItems.forEach((item) => countObserver.observe(item));

skillLogos.forEach((logo) => {
  logo.addEventListener("error", () => {
    logo.remove();
  });
});

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

const openResume = () => {
  if (!resumeModal || !resumeDialog) return;
  resumeModal.classList.add("is-open");
  resumeModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("resume-open");
  resumeDialog.focus();
};

const closeResume = () => {
  if (!resumeModal) return;
  resumeModal.classList.remove("is-open");
  resumeModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("resume-open");
};

const setGalleryImage = (gallery, index) => {
  if (!galleryImage || !galleryThumbs || !gallery.images[index]) return;
  const image = gallery.images[index];
  galleryImage.decoding = "async";
  galleryImage.src = image.src;
  galleryImage.alt = image.alt;
  if (galleryCount) galleryCount.textContent = `${index + 1} / ${gallery.images.length}`;
  galleryThumbs.querySelectorAll(".project-gallery-thumb").forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("is-active", thumbIndex === index);
  });
};

const openProjectGallery = (key) => {
  const gallery = projectGalleries[key];
  if (!gallery || !galleryModal || !galleryDialog || !galleryImage || !galleryThumbs) return;

  galleryModal.classList.add("is-open");
  galleryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("project-gallery-open");

  if (galleryTitle) galleryTitle.textContent = gallery.title;
  if (galleryDescription) galleryDescription.textContent = gallery.description;
  if (galleryLink) {
    galleryLink.href = gallery.url || "#";
    galleryLink.hidden = !gallery.url;
  }

  galleryThumbs.replaceChildren();
  gallery.images.forEach((image, index) => {
    const button = document.createElement("button");
    const thumb = document.createElement("img");
    button.className = "project-gallery-thumb";
    button.type = "button";
    button.setAttribute("aria-label", `Show image ${index + 1}`);
    thumb.src = image.thumb || image.src;
    thumb.alt = "";
    thumb.loading = "lazy";
    thumb.decoding = "async";
    button.append(thumb);
    button.addEventListener("click", () => setGalleryImage(gallery, index));
    galleryThumbs.append(button);
  });

  setGalleryImage(gallery, 0);
  galleryDialog.focus();
};

const closeProjectGallery = () => {
  if (!galleryModal) return;
  galleryModal.classList.remove("is-open");
  galleryModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("project-gallery-open");
};

const getProjectOffset = (card) => card.offsetLeft - projectCarousel.offsetLeft;

const getProjectIndex = () => {
  if (!projectCarousel || !projectCards.length) return 0;
  return projectCards.reduce((closestIndex, card, index) => {
    const currentDistance = Math.abs(projectCarousel.scrollLeft - getProjectOffset(card));
    const closestDistance = Math.abs(projectCarousel.scrollLeft - getProjectOffset(projectCards[closestIndex]));
    return currentDistance < closestDistance ? index : closestIndex;
  }, 0);
};

const updateProjectCarousel = () => {
  if (!projectCards.length) return;
  const activeIndex = getProjectIndex();
  if (projectCount) projectCount.textContent = `${activeIndex + 1} / ${projectCards.length}`;
  if (projectPrev) projectPrev.disabled = activeIndex === 0;
  if (projectNext) projectNext.disabled = activeIndex === projectCards.length - 1;
};

const scrollToProject = (index) => {
  if (!projectCards[index]) return;
  projectCarousel.scrollTo({
    left: getProjectOffset(projectCards[index]),
    behavior: "smooth",
  });
};

resumeTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    openResume();
  });
});

resumeCloseItems.forEach((item) => {
  item.addEventListener("click", closeResume);
});

galleryCloseItems.forEach((item) => {
  item.addEventListener("click", closeProjectGallery);
});

galleryCards.forEach((card) => {
  let pointerStartX = 0;
  let pointerStartY = 0;
  let didDrag = false;

  card.addEventListener("pointerdown", (event) => {
    pointerStartX = event.clientX;
    pointerStartY = event.clientY;
    didDrag = false;
  });

  card.addEventListener("pointermove", (event) => {
    const deltaX = Math.abs(event.clientX - pointerStartX);
    const deltaY = Math.abs(event.clientY - pointerStartY);
    if (deltaX > 8 || deltaY > 8) didDrag = true;
  });

  card.addEventListener("click", () => {
    if (didDrag) return;
    openProjectGallery(card.dataset.galleryProject);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openProjectGallery(card.dataset.galleryProject);
  });
});

if (projectCarousel && projectCards.length) {
  let projectFrame = null;

  projectPrev?.addEventListener("click", () => {
    scrollToProject(Math.max(getProjectIndex() - 1, 0));
  });

  projectNext?.addEventListener("click", () => {
    scrollToProject(Math.min(getProjectIndex() + 1, projectCards.length - 1));
  });

  projectCarousel.addEventListener(
    "scroll",
    () => {
      if (projectFrame) cancelAnimationFrame(projectFrame);
      projectFrame = requestAnimationFrame(updateProjectCarousel);
    },
    { passive: true }
  );

  window.addEventListener("resize", updateProjectCarousel);
  updateProjectCarousel();
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeResume();
    closeProjectGallery();
  }
});

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

updateScrollProgress();
