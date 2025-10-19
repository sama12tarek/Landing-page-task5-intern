const html = document.documentElement;
function toggleMode() {
  const isDark = html.classList.contains("dark");
  html.classList.toggle("dark", !isDark);
  localStorage.setItem("darkMode", String(!isDark));
}
window.onload = function () {
  const mode = localStorage.getItem("darkMode"); // ثابت في كل الأماكن
  if (mode === "true") {
    html.classList.add("dark");
    console.log('dark')
  } else {
    html.classList.remove("dark");
    console.log('light')
  }
};



function toggleNavbar() {
  if (menue) {
    menue.classList.toggle("hidden");
  }
}
