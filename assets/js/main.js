(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var themeColor = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    if (toggle) {
      toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }

    if (themeColor) {
      themeColor.setAttribute("content", theme === "dark" ? "#0d151b" : "#2c608c");
    }
  }

  if (toggle) {
    var storedTheme = null;

    try {
      storedTheme = window.localStorage.getItem("theme");
    } catch (error) {
      storedTheme = null;
    }

    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var initialTheme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : (prefersDark ? "dark" : "light");

    applyTheme(initialTheme);

    toggle.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme);

      try {
        window.localStorage.setItem("theme", nextTheme);
      } catch (error) {
        /* localStorage may be unavailable in private browsing. */
      }
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
