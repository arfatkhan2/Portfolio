const projectGalleries = {
  pepperball: {
    title: "PepperBall",
    description:
      "Responsive production website work for PepperBall, balancing confident product storytelling with clear navigation and reliable frontend implementation.",
    url: "https://pepperball.com/",
    images: [
      {
        src: "assets/hq/pepperball-1.jpg",
        thumb: "assets/optimized/thumbs/pepperball-1.jpg",
        alt: "PepperBall homepage screenshot",
      },
      {
        src: "assets/hq/pepperball-2.jpg",
        thumb: "assets/optimized/thumbs/pepperball-2.jpg",
        alt: "PepperBall product page screenshot",
      },
      {
        src: "assets/hq/pepperball-3.jpg",
        thumb: "assets/optimized/thumbs/pepperball-3.jpg",
        alt: "PepperBall website screenshot",
      },
      {
        src: "assets/hq/pepperball-4.jpg",
        thumb: "assets/optimized/thumbs/pepperball-4.jpg",
        alt: "PepperBall mobile experience screenshot",
      },
    ],
  },
  fourvisions: {
    title: "Four Visions",
    description:
      "A responsive commerce experience with expressive product presentation, disciplined layouts, and production-ready frontend behavior.",
    url: "https://fourvisions.com/",
    images: [
      {
        src: "assets/hq/fourvision-1.jpg",
        thumb: "assets/optimized/thumbs/fourvision-1.jpg",
        alt: "Four Visions homepage screenshot",
      },
      {
        src: "assets/hq/fourvision-2.jpg",
        thumb: "assets/optimized/thumbs/fourvision-2.jpg",
        alt: "Four Visions product page screenshot",
      },
      {
        src: "assets/hq/fourvision-3.jpg",
        thumb: "assets/optimized/thumbs/fourvision-3.jpg",
        alt: "Four Visions editorial commerce screenshot",
      },
      {
        src: "assets/hq/fourvision-4.jpg",
        thumb: "assets/optimized/thumbs/fourvision-4.jpg",
        alt: "Four Visions mobile experience screenshot",
      },
    ],
  },
  bannersolutions: {
    title: "Banner Solutions",
    description:
      "B2B commerce interface work designed around structured product discovery, clear catalog presentation, and confident purchasing decisions.",
    url: "https://www.bannersolutions.com/",
    images: [
      {
        src: "assets/hq/banner-1.jpg",
        thumb: "assets/optimized/thumbs/banner-1.jpg",
        alt: "Banner Solutions homepage screenshot",
      },
      {
        src: "assets/hq/banner-2.jpg",
        thumb: "assets/optimized/thumbs/banner-2.jpg",
        alt: "Banner Solutions product page screenshot",
      },
      {
        src: "assets/hq/banner-3.jpg",
        thumb: "assets/optimized/thumbs/banner-3.jpg",
        alt: "Banner Solutions catalog screenshot",
      },
      {
        src: "assets/hq/banner-4.jpg",
        thumb: "assets/optimized/thumbs/banner-4.jpg",
        alt: "Banner Solutions mobile experience screenshot",
      },
    ],
  },
  zoonvale: {
    title: "Zoon & Vale",
    description:
      "A mobile-first Kashmir travel platform for exploring packages, planning a trip, and moving from inspiration to a booking enquiry.",
    url: "https://zoonvale.in/",
    images: [
      {
        src: "assets/hq/zoon-vale-homepage.jpg",
        thumb: "assets/optimized/thumbs/zoon-vale-homepage.jpg",
        alt: "Zoon and Vale Kashmir travel website homepage",
      },
      {
        src: "assets/hq/zoon-vale-winter-package.jpg",
        thumb: "assets/optimized/thumbs/zoon-vale-winter-package.jpg",
        alt: "Zoon and Vale Kashmir Winter Escape package page",
      },
      {
        src: "assets/hq/zoon-vale-trip-planner.jpg",
        thumb: "assets/optimized/thumbs/zoon-vale-trip-planner.jpg",
        alt: "Zoon and Vale trip planning flow",
      },
      {
        src: "assets/hq/zoon-vale-mobile-navigation.jpg",
        thumb: "assets/optimized/thumbs/zoon-vale-mobile-navigation.jpg",
        alt: "Zoon and Vale mobile navigation",
      },
      {
        src: "assets/hq/zoon-vale-mobile-blog.jpg",
        thumb: "assets/optimized/thumbs/zoon-vale-mobile-blog.jpg",
        alt: "Zoon and Vale mobile travel journal",
      },
    ],
  },
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const themePreference = window.matchMedia("(prefers-color-scheme: dark)");
const finePointer = window.matchMedia("(pointer: fine)");
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const siteHeader = document.querySelector("[data-header]");
const brand = document.querySelector(".brand");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNavigation = document.querySelector("[data-mobile-navigation]");
const mobileMenuCloseItems = Array.from(document.querySelectorAll("[data-menu-close]"));
const mobileNavigationActions = Array.from(mobileNavigation?.querySelectorAll("a") || []);
const navLinks = Array.from(document.querySelectorAll("[data-nav-target]"));
const revealItems = Array.from(document.querySelectorAll(".reveal"));
const countItems = Array.from(document.querySelectorAll("[data-count]"));
const portraitFrame = document.querySelector(".portrait-frame");
const projectReelRoots = Array.from(document.querySelectorAll("[data-project-reel]"));
const resumeTriggers = Array.from(document.querySelectorAll(".resume-trigger"));
const resumeModal = document.querySelector(".resume-modal");
const resumeDialog = document.querySelector(".resume-book");
const resumeFrame = document.querySelector(".resume-frame");
const resumeCloseItems = Array.from(document.querySelectorAll("[data-resume-close]"));
const galleryTriggers = Array.from(document.querySelectorAll("[data-gallery-project]"));
const galleryModal = document.querySelector(".project-gallery-modal");
const galleryDialog = document.querySelector(".project-gallery");
const galleryCloseItems = Array.from(document.querySelectorAll("[data-gallery-close]"));
const galleryImage = document.querySelector("[data-gallery-image]");
const galleryTitle = document.querySelector("[data-gallery-title]");
const galleryDescription = document.querySelector("[data-gallery-description]");
const galleryLink = document.querySelector("[data-gallery-link]");
const galleryThumbs = document.querySelector("[data-gallery-thumbs]");
const galleryCount = document.querySelector("[data-gallery-count]");
const pageRoots = [
  document.querySelector(".site-header"),
  document.querySelector("main"),
  document.querySelector(".site-footer"),
].filter(Boolean);
const navigationPageRoots = [
  document.querySelector("main"),
  document.querySelector(".site-footer"),
  document.querySelector(".skip-link"),
].filter(Boolean);
const navigationHeaderControls = [
  document.querySelector(".theme-toggle"),
  document.querySelector(".header-link"),
].filter(Boolean);

let activeModal = null;
let activeDialog = null;
let activeGallery = null;
let activeGalleryIndex = 0;
let lastFocusedElement = null;
let navigationScrollY = 0;
let navigationBodyStyles = null;
let navigationFocusTimer = null;

const readStoredTheme = () => {
  try {
    return window.localStorage.getItem("arfat-portfolio-theme");
  } catch {
    return null;
  }
};

const storeTheme = (theme) => {
  try {
    window.localStorage.setItem("arfat-portfolio-theme", theme);
  } catch {
    // The selected theme still applies for this visit when storage is unavailable.
  }
};

const applyTheme = (theme, persist = false) => {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  themeToggle?.setAttribute("aria-pressed", String(isDark));
  themeToggle?.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  if (themeColor) {
    themeColor.content = document.body.classList.contains("nav-open")
      ? "#090c0a"
      : isDark
        ? "#10120f"
        : "#f2efe8";
  }
  if (persist) storeTheme(theme);
};

const storedTheme = readStoredTheme();
applyTheme(storedTheme || (themePreference.matches ? "dark" : "light"));

themeToggle?.addEventListener("click", () => {
  applyTheme(document.body.classList.contains("dark") ? "light" : "dark", true);
});

themePreference.addEventListener?.("change", (event) => {
  if (!readStoredTheme()) applyTheme(event.matches ? "dark" : "light");
});

const isNavigationOpen = () => document.body.classList.contains("nav-open");

const setNavigationBackgroundInert = (isInert) => {
  [...navigationPageRoots, ...navigationHeaderControls].forEach((element) => {
    element.inert = isInert;
  });
};

const lockNavigationScroll = () => {
  if (navigationBodyStyles) return;
  navigationScrollY = window.scrollY || document.documentElement.scrollTop;
  navigationBodyStyles = {
    position: document.body.style.position,
    top: document.body.style.top,
    right: document.body.style.right,
    left: document.body.style.left,
    width: document.body.style.width,
  };
  document.body.style.position = "fixed";
  document.body.style.top = `-${navigationScrollY}px`;
  document.body.style.right = "0";
  document.body.style.left = "0";
  document.body.style.width = "100%";
};

const unlockNavigationScroll = () => {
  if (!navigationBodyStyles) return;
  Object.entries(navigationBodyStyles).forEach(([property, value]) => {
    document.body.style[property] = value;
  });
  navigationBodyStyles = null;
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, navigationScrollY);
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
};

const focusHashTarget = (hash) => {
  if (!hash?.startsWith("#")) return;
  const target = document.querySelector(hash);
  if (!(target instanceof HTMLElement)) return;
  const hadTabIndex = target.hasAttribute("tabindex");
  if (!hadTabIndex) target.tabIndex = -1;
  window.requestAnimationFrame(() => {
    target.focus({ preventScroll: true });
    if (!hadTabIndex) {
      target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
    }
  });
};

const closeNavigation = ({ restoreFocus = false } = {}) => {
  if (!menuToggle || !mobileNavigation) return;
  const wasOpen = isNavigationOpen();
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  mobileNavigation.classList.remove("is-open");
  mobileNavigation.setAttribute("aria-hidden", "true");
  mobileNavigation.inert = true;
  document.body.classList.remove("nav-open");
  if (themeColor) themeColor.content = document.body.classList.contains("dark") ? "#10120f" : "#f2efe8";
  window.clearTimeout(navigationFocusTimer);
  navigationFocusTimer = null;

  if (wasOpen) {
    setNavigationBackgroundInert(false);
    unlockNavigationScroll();
    if (restoreFocus && window.innerWidth <= 960) {
      menuToggle.focus({ preventScroll: true });
    }
  }
};

const openNavigation = () => {
  if (!menuToggle || !mobileNavigation || window.innerWidth > 960) return;
  lockNavigationScroll();
  mobileNavigation.inert = false;
  mobileNavigation.setAttribute("aria-hidden", "false");
  mobileNavigation.classList.add("is-open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation");
  document.body.classList.add("nav-open");
  if (themeColor) themeColor.content = "#090c0a";
  setNavigationBackgroundInert(true);

  window.clearTimeout(navigationFocusTimer);
  navigationFocusTimer = window.setTimeout(() => {
    if (isNavigationOpen()) {
      mobileNavigation.querySelector(".route-link")?.focus({ preventScroll: true });
    }
    navigationFocusTimer = null;
  }, 60);
};

menuToggle?.addEventListener("click", () => {
  if (isNavigationOpen()) closeNavigation({ restoreFocus: true });
  else openNavigation();
});

mobileMenuCloseItems.forEach((item) => {
  item.addEventListener("click", () => closeNavigation({ restoreFocus: true }));
});

mobileNavigationActions.forEach((link) => {
  link.addEventListener("click", () => {
    const hash = link.hash;
    const isRoute = link.matches("[data-nav-target]");
    const opensResume = link.matches(".resume-trigger");
    closeNavigation({ restoreFocus: !isRoute && !opensResume });
    if (isRoute) focusHashTarget(hash);
  });
});

brand?.addEventListener("click", () => {
  if (!isNavigationOpen()) return;
  closeNavigation();
  focusHashTarget(brand.hash);
});

const syncHeaderHeight = () => {
  if (!siteHeader) return;
  document.documentElement.style.setProperty("--header-height", `${siteHeader.offsetHeight}px`);
};

if ("ResizeObserver" in window && siteHeader) {
  new ResizeObserver(syncHeaderHeight).observe(siteHeader);
}
syncHeaderHeight();

window.addEventListener("resize", () => {
  syncHeaderHeight();
  if (window.innerWidth > 960) closeNavigation();
});

const updateScrollProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
  document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
  siteHeader?.classList.toggle("is-scrolled", scrollTop > 18);

  if (reducedMotion.matches || !finePointer.matches) return;

  if (portraitFrame) {
    const portraitShift = Math.min(scrollTop * 0.025, 10);
    portraitFrame.style.setProperty("--portrait-shift", `${portraitShift.toFixed(2)}px`);
  }
};

let viewportFrame = null;
const requestViewportUpdate = () => {
  if (viewportFrame) return;
  viewportFrame = window.requestAnimationFrame(() => {
    viewportFrame = null;
    updateScrollProgress();
  });
};

window.addEventListener("scroll", requestViewportUpdate, { passive: true });
window.addEventListener("resize", requestViewportUpdate);
requestViewportUpdate();

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  document.documentElement.classList.add("motion-ready");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 }
  );

  revealItems.forEach((item, index) => {
    item.style.setProperty("--delay", `${(index % 3) * 55}ms`);
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const renderCount = (item, value) => {
  const prefix = item.dataset.prefix || "";
  const suffix = item.dataset.suffix || "";
  item.textContent = `${prefix}${value}${suffix}`;
};

const countUp = (item) => {
  const target = Number(item.dataset.count || 0);
  if (reducedMotion.matches) {
    renderCount(item, target);
    return;
  }

  const duration = 950;
  const start = performance.now();
  renderCount(item, 0);

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    renderCount(item, Math.round(target * eased));
    if (progress < 1) window.requestAnimationFrame(tick);
  };

  window.requestAnimationFrame(tick);
};

if ("IntersectionObserver" in window) {
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        countUp(entry.target);
        countObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.55 }
  );
  countItems.forEach((item) => countObserver.observe(item));
}

const observedSections = Array.from(
  document.querySelectorAll("#projects, #experience, #skills, #credentials, #contact")
);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-22% 0px -58%", threshold: [0, 0.1, 0.35] }
  );
  observedSections.forEach((section) => sectionObserver.observe(section));
}

const setPageInert = (isInert) => {
  pageRoots.forEach((root) => {
    root.inert = isInert;
  });
};

const getFocusableElements = (container) =>
  Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => !element.hidden && element.getClientRects().length > 0);

const openModal = (modal, dialog, trigger) => {
  if (!modal || !dialog) return;
  lastFocusedElement = trigger || document.activeElement;
  activeModal = modal;
  activeDialog = dialog;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeNavigation();
  setPageInert(true);
  window.requestAnimationFrame(() => dialog.focus());
};

const closeModal = (modal) => {
  if (!modal || !modal.classList.contains("is-open")) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  setPageInert(false);
  activeModal = null;
  activeDialog = null;
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
  lastFocusedElement = null;
};

const openResume = (trigger) => {
  if (resumeFrame && !resumeFrame.hasAttribute("src") && resumeFrame.dataset.src) {
    resumeFrame.src = resumeFrame.dataset.src;
  }
  openModal(resumeModal, resumeDialog, trigger);
};

const closeResume = () => closeModal(resumeModal);

resumeTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    const focusReturn = trigger.closest("[data-mobile-navigation]") ? menuToggle : trigger;
    openResume(focusReturn);
  });
});

resumeCloseItems.forEach((item) => item.addEventListener("click", closeResume));

const setGalleryImage = (index, focusThumb = false) => {
  if (!activeGallery || !galleryImage || !galleryThumbs) return;
  const normalizedIndex = (index + activeGallery.images.length) % activeGallery.images.length;
  const image = activeGallery.images[normalizedIndex];
  activeGalleryIndex = normalizedIndex;
  galleryImage.src = image.src;
  galleryImage.alt = image.alt;
  if (galleryCount) galleryCount.textContent = `${normalizedIndex + 1} / ${activeGallery.images.length}`;

  const thumbs = Array.from(galleryThumbs.querySelectorAll(".project-gallery-thumb"));
  thumbs.forEach((thumb, thumbIndex) => {
    const isActive = thumbIndex === normalizedIndex;
    thumb.setAttribute("aria-current", String(isActive));
    thumb.setAttribute("aria-pressed", String(isActive));
  });
  if (focusThumb) thumbs[normalizedIndex]?.focus();
};

const initializeProjectReel = (root) => {
  const key = root.dataset.projectReel;
  const gallery = projectGalleries[key];
  const firstImage = root.querySelector(":scope > img");
  const projectNumber = root.querySelector(":scope > .project-number");
  const galleryButton = root.querySelector(":scope > .project-open");

  if (!gallery || !firstImage || !projectNumber || !galleryButton) return;

  const toolbar = document.createElement("div");
  toolbar.className = "project-reel-toolbar";

  const chrome = document.createElement("span");
  chrome.className = "project-reel-chrome";
  chrome.setAttribute("aria-hidden", "true");
  for (let index = 0; index < 3; index += 1) chrome.append(document.createElement("i"));

  const domain = document.createElement("span");
  domain.className = "project-reel-domain";
  try {
    domain.textContent = `Interface proof reel / ${new URL(gallery.url).hostname.replace(/^www\./, "")}`;
  } catch {
    domain.textContent = "Interface proof reel";
  }

  toolbar.append(chrome, domain, projectNumber);

  const reel = document.createElement("ol");
  reel.className = "screen-reel";
  reel.tabIndex = 0;
  reel.setAttribute("aria-label", `${gallery.title} screenshots`);

  const slides = gallery.images.map((image, index) => {
    const isMobile = /mobile/i.test(image.alt);
    const slide = document.createElement("li");
    slide.className = `screen-shot${isMobile ? " screen-shot-mobile" : ""}`;

    const figure = document.createElement("figure");
    const media = document.createElement("div");
    media.className = "screen-shot-media";

    const preview = index === 0 ? firstImage : document.createElement("img");
    if (index !== 0) {
      preview.src = image.thumb;
      preview.dataset.reelSrc = image.src.replace("assets/hq/", "assets/optimized/");
      preview.alt = image.alt;
      preview.width = isMobile ? 1000 : 1800;
      preview.height = isMobile ? 1800 : 1000;
      preview.loading = "lazy";
      preview.decoding = "async";
    }
    preview.draggable = false;
    media.append(preview);

    const caption = document.createElement("figcaption");
    const frameLabel = document.createElement("span");
    frameLabel.textContent = `${String(index + 1).padStart(2, "0")} · ${isMobile ? "Mobile" : "Desktop"} capture`;
    const frameState = document.createElement("span");
    frameState.textContent =
      index === 0 ? "Start" : index === gallery.images.length - 1 ? "Final frame" : "Next frame";
    caption.append(frameLabel, frameState);

    figure.append(media, caption);
    slide.append(figure);
    reel.append(slide);
    return slide;
  });

  const loadSlide = (index) => {
    const slide = slides[index];
    const image = slide?.querySelector("img[data-reel-src]");
    if (!image) return;
    image.src = image.dataset.reelSrc;
    delete image.dataset.reelSrc;
  };

  const progress = document.createElement("div");
  progress.className = "project-reel-progress";
  progress.setAttribute("aria-hidden", "true");
  progress.append(document.createElement("i"));

  const footer = document.createElement("div");
  footer.className = "project-reel-footer";

  const meta = document.createElement("div");
  meta.className = "project-reel-meta";

  const count = document.createElement("span");
  count.className = "project-reel-count";
  count.id = `${key}-reel-count`;
  count.setAttribute("aria-live", "polite");
  count.setAttribute("aria-atomic", "true");

  const hint = document.createElement("span");
  hint.className = "project-reel-hint";
  hint.id = `${key}-reel-hint`;
  hint.textContent = "Swipe / scroll / arrow keys";
  reel.setAttribute("aria-describedby", hint.id);
  meta.append(count, hint);

  const actions = document.createElement("div");
  actions.className = "project-reel-actions";

  const previous = document.createElement("button");
  previous.className = "project-reel-button";
  previous.type = "button";
  previous.setAttribute("aria-label", `Previous ${gallery.title} screenshot`);
  previous.textContent = "←";

  const next = document.createElement("button");
  next.className = "project-reel-button";
  next.type = "button";
  next.setAttribute("aria-label", `Next ${gallery.title} screenshot`);
  next.textContent = "→";

  actions.append(previous, next, galleryButton);
  footer.append(meta, actions);

  root.classList.add("project-proof-board");
  root.setAttribute("role", "region");
  root.setAttribute("aria-label", `${gallery.title} interface proof reel`);
  root.replaceChildren(toolbar, reel, progress, footer);

  let activeIndex = 0;
  let scrollFrame = null;

  const setActiveIndex = (index) => {
    activeIndex = Math.max(0, Math.min(slides.length - 1, index));
    loadSlide(activeIndex);
    root.dataset.reelIndex = String(activeIndex);
    count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === slides.length - 1;
    galleryButton.dataset.galleryIndex = String(activeIndex);
    galleryButton.setAttribute(
      "aria-label",
      `Open ${gallery.title} gallery at screenshot ${activeIndex + 1} of ${slides.length}`
    );
    slides.forEach((slide, slideIndex) => {
      if (slideIndex === activeIndex) slide.setAttribute("aria-current", "true");
      else slide.removeAttribute("aria-current");
    });
  };

  const updateFromScroll = () => {
    scrollFrame = null;
    const reelCenter = reel.scrollLeft + reel.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - reelCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    const maxScroll = reel.scrollWidth - reel.clientWidth;
    const reelProgress = maxScroll > 0 ? reel.scrollLeft / maxScroll : 0;
    root.style.setProperty("--reel-progress", Math.max(0, Math.min(1, reelProgress)).toFixed(4));
    if (nearestIndex !== activeIndex) setActiveIndex(nearestIndex);
  };

  const goToSlide = (index, behavior = reducedMotion.matches ? "auto" : "smooth") => {
    const normalizedIndex = Math.max(0, Math.min(slides.length - 1, index));
    loadSlide(normalizedIndex);
    loadSlide(normalizedIndex + 1);
    const targetLeft = slides[normalizedIndex].offsetLeft - slides[0].offsetLeft;
    reel.scrollTo({ left: targetLeft, behavior });
    setActiveIndex(normalizedIndex);
  };

  previous.addEventListener("click", () => goToSlide(activeIndex - 1));
  next.addEventListener("click", () => goToSlide(activeIndex + 1));

  reel.addEventListener(
    "scroll",
    () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateFromScroll);
    },
    { passive: true }
  );

  const preloadAdjacentSlides = () => {
    loadSlide(activeIndex - 1);
    loadSlide(activeIndex + 1);
  };

  reel.addEventListener("pointerdown", preloadAdjacentSlides, { passive: true });
  reel.addEventListener("wheel", preloadAdjacentSlides, { passive: true });

  reel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goToSlide(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goToSlide(slides.length - 1);
    }
  });

  window.addEventListener("resize", () => goToSlide(activeIndex, "auto"));
  setActiveIndex(0);
};

projectReelRoots.forEach(initializeProjectReel);

const openProjectGallery = (key, trigger, initialIndex = 0) => {
  const gallery = projectGalleries[key];
  if (!gallery || !galleryModal || !galleryDialog || !galleryThumbs) return;

  activeGallery = gallery;
  activeGalleryIndex = 0;
  if (galleryTitle) galleryTitle.textContent = gallery.title;
  if (galleryDescription) galleryDescription.textContent = gallery.description;
  if (galleryCount) galleryCount.setAttribute("aria-live", "polite");
  if (galleryLink) {
    galleryLink.href = gallery.url;
    galleryLink.hidden = !gallery.url;
  }

  galleryThumbs.replaceChildren();
  gallery.images.forEach((image, index) => {
    const button = document.createElement("button");
    button.className = "project-gallery-thumb";
    button.type = "button";
    button.setAttribute("aria-label", `Show image ${index + 1} of ${gallery.images.length}`);
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-current", "false");

    const thumb = document.createElement("img");
    thumb.src = image.thumb;
    thumb.alt = "";
    thumb.width = 180;
    thumb.height = 100;
    thumb.loading = "lazy";
    thumb.decoding = "async";
    button.append(thumb);
    button.addEventListener("click", () => setGalleryImage(index));
    galleryThumbs.append(button);
  });

  const requestedIndex = Number(initialIndex);
  setGalleryImage(Number.isFinite(requestedIndex) ? requestedIndex : 0);
  openModal(galleryModal, galleryDialog, trigger);
};

const closeProjectGallery = () => {
  closeModal(galleryModal);
  galleryImage?.removeAttribute("src");
  activeGallery = null;
  activeGalleryIndex = 0;
};

galleryTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openProjectGallery(trigger.dataset.galleryProject, trigger, trigger.dataset.galleryIndex || 0);
  });
});

galleryCloseItems.forEach((item) => item.addEventListener("click", closeProjectGallery));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (galleryModal?.classList.contains("is-open")) closeProjectGallery();
    else if (resumeModal?.classList.contains("is-open")) closeResume();
    else if (isNavigationOpen()) closeNavigation({ restoreFocus: true });
    return;
  }

  if (activeGallery && galleryModal?.classList.contains("is-open")) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setGalleryImage(activeGalleryIndex + 1, true);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setGalleryImage(activeGalleryIndex - 1, true);
    }
  }

  if (event.key === "Tab" && isNavigationOpen() && mobileNavigation) {
    const navigationFocusable = [brand, menuToggle, ...getFocusableElements(mobileNavigation)].filter(
      (element) => element instanceof HTMLElement && !element.inert
    );
    if (!navigationFocusable.length) return;

    const first = navigationFocusable[0];
    const last = navigationFocusable[navigationFocusable.length - 1];
    const currentIndex = navigationFocusable.indexOf(document.activeElement);

    if (currentIndex === -1) {
      event.preventDefault();
      (menuToggle || first).focus();
    } else if (event.shiftKey && currentIndex === 0) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && currentIndex === navigationFocusable.length - 1) {
      event.preventDefault();
      first.focus();
    }
    return;
  }

  if (event.key !== "Tab" || !activeModal || !activeDialog) return;
  const focusable = getFocusableElements(activeDialog);
  if (!focusable.length) {
    event.preventDefault();
    activeDialog.focus();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const currentYear = document.querySelector("[data-current-year]");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
