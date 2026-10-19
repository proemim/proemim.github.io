/* ==========================================================================
   Rémi Mehtali — site interactions
   Plain JavaScript, no dependencies.
   ========================================================================== */

(function () {
  "use strict";

  var root = document.documentElement;

  /* ------------------------------------------------------------------------
     Theme
     ------------------------------------------------------------------------ */

  var themeToggle = document.getElementById("theme-toggle");
  var themeLabel = themeToggle ? themeToggle.querySelector(".theme-label") : null;
  var themeColor = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    var isDark = theme === "dark";
    root.setAttribute("data-theme", theme);

    if (themeLabel) {
      themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
    }

    if (themeToggle) {
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }

    if (themeColor) {
      themeColor.setAttribute("content", isDark ? "#0d151b" : "#4682B4");
    }
  }

  if (themeToggle) {
    var storedTheme = null;

    try {
      storedTheme = window.localStorage.getItem("theme");
    } catch (error) {
      storedTheme = null;
    }

    var initialTheme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    applyTheme(initialTheme);

    themeToggle.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme);

      try {
        window.localStorage.setItem("theme", nextTheme);
      } catch (error) {
        /* localStorage may be unavailable in private browsing. */
      }
    });
  }

  /* ------------------------------------------------------------------------
     Interactive sketch tabs
     ------------------------------------------------------------------------ */

  var sketchTabs = Array.prototype.slice.call(document.querySelectorAll(".sketch-tab"));

  function activateTab(tab) {
    sketchTabs.forEach(function (item) {
      var selected = item === tab;
      var panel = document.getElementById(item.getAttribute("aria-controls"));

      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;

      if (panel) {
        panel.hidden = !selected;
      }
    });
  }

  if (sketchTabs.length) {
    sketchTabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        activateTab(tab);
      });

      tab.addEventListener("keydown", function (event) {
        var nextIndex = null;

        if (event.key === "ArrowRight") nextIndex = (index + 1) % sketchTabs.length;
        if (event.key === "ArrowLeft") nextIndex = (index - 1 + sketchTabs.length) % sketchTabs.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = sketchTabs.length - 1;

        if (nextIndex !== null) {
          event.preventDefault();
          activateTab(sketchTabs[nextIndex]);
          sketchTabs[nextIndex].focus();
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     Active section in the left overview
     ------------------------------------------------------------------------ */

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".menu a[href^='#']"));
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href");
      return id && id.length > 1 ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  function setActiveSection() {
    if (!sections.length) return;

    var marker = window.scrollY + Math.min(window.innerHeight * 0.28, 220);
    var current = sections[0];

    sections.forEach(function (section) {
      var top = section.getBoundingClientRect().top + window.scrollY;
      if (top <= marker) current = section;
    });

    var pageIsScrollable = document.documentElement.scrollHeight > window.innerHeight + 8;
    var atBottom = pageIsScrollable && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
    if (atBottom) current = sections[sections.length - 1];

    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + current.id;
      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if (sections.length) {
    var ticking = false;

    function requestActiveUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        setActiveSection();
        ticking = false;
      });
    }

    window.addEventListener("scroll", requestActiveUpdate, { passive: true });
    window.addEventListener("resize", requestActiveUpdate);
    setActiveSection();
  }

  /* ------------------------------------------------------------------------
     Copy email
     ------------------------------------------------------------------------ */

  var copyButton = document.getElementById("copy-email");

  function fallbackCopy(text, onSuccess) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      onSuccess();
    } catch (error) {
      /* If copying fails, the visible mailto link still works. */
    } finally {
      document.body.removeChild(textarea);
    }
  }

  if (copyButton) {
    copyButton.addEventListener("click", function () {
      var email = copyButton.getAttribute("data-email") || "";
      var label = copyButton.querySelector("span");
      var use = copyButton.querySelector("use");
      var originalLabel = label ? label.textContent : "";
      var resetTimer = null;

      function showCopied() {
        if (label) label.textContent = "Copied";
        if (use) use.setAttribute("href", "#i-check");
        copyButton.classList.add("is-copied");

        if (resetTimer) window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(function () {
          if (label) label.textContent = originalLabel;
          if (use) use.setAttribute("href", "#i-copy");
          copyButton.classList.remove("is-copied");
        }, 1800);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(showCopied).catch(function () {
          fallbackCopy(email, showCopied);
        });
      } else {
        fallbackCopy(email, showCopied);
      }
    });
  }

  /* ------------------------------------------------------------------------
     Footer year
     ------------------------------------------------------------------------ */

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
