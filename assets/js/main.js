/* RetroShoot Cabina — progressive enhancement only */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- scroll reveal (IntersectionObserver, no scroll listeners) ---- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  function show(el) {
    var parent = el.parentElement;
    var siblings = parent
      ? Array.prototype.slice.call(parent.querySelectorAll(":scope > .reveal"))
      : [el];
    var idx = siblings.indexOf(el);
    el.style.transitionDelay = (idx > 0 ? Math.min(idx * 70, 350) : 0) + "ms";
    el.classList.add("in");
  }

  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        show(entry.target);
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0 });

    revealEls.forEach(function (el) {
      // already in or above the viewport (deep link / restored scroll): show now
      if (el.getBoundingClientRect().top < window.innerHeight * 0.94) {
        show(el);
      } else {
        io.observe(el);
      }
    });
  }

  /* ---- no autoplaying video loop when motion is reduced ---- */
  if (reduce) {
    document.querySelectorAll('.showcase__video iframe').forEach(function (f) {
      var src = f.getAttribute("src") || "";
      f.setAttribute("src", src.replace(/background=1&(amp;)?/i, "").replace(/autoplay=1/i, "autoplay=0"));
    });
    document.querySelectorAll("video[autoplay]").forEach(function (v) {
      v.removeAttribute("autoplay");
      v.setAttribute("controls", "");
      try { v.pause(); } catch (e) {}
    });
  }

  /* ---- nav "stuck" border via sentinel ---- */
  var nav = document.querySelector(".nav");
  var sentinel = document.getElementById("top");
  if (nav && sentinel && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      nav.classList.toggle("is-stuck", !entries[0].isIntersecting);
    }, { rootMargin: "-71px 0px 0px 0px" }).observe(sentinel);
  }

  /* ---- smooth-scroll for in-page anchors with header offset ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.pageYOffset - 78;
      window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
      history.replaceState(null, "", id);
    });
  });
})();
