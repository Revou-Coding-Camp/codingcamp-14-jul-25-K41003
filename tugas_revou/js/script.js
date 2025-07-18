// File: js/script.js

window.onload = function () {
  // Clear stored username on each load to force name input
  localStorage.removeItem("userName");

  // Show main content by default
  const mainContent = document.getElementById("main-content");
  if (mainContent) mainContent.classList.remove("hidden");

  // Add event listener for Enter Your Name button on home page
  const enterNameBtn = document.getElementById("enterNameBtn");
  const usernameSpan = document.getElementById("username");
  if (enterNameBtn) {
    enterNameBtn.addEventListener("click", function () {
      const name = prompt("Please enter your name:");
      if (name && name.trim() !== "") {
        if (usernameSpan) usernameSpan.textContent = name.trim();
      }
    });
  }

  // Add event listener for landing overlay submit button
  const landingSubmitBtn = document.getElementById("landingSubmitBtn");
  const landingNameInput = document.getElementById("landingNameInput");
  const landingOverlay = document.getElementById("landing-overlay");
  if (landingSubmitBtn && landingNameInput && landingOverlay) {
    landingSubmitBtn.addEventListener("click", function () {
      const name = landingNameInput.value.trim();
      if (name !== "") {
        if (usernameSpan) usernameSpan.textContent = name;
        if (landingOverlay) landingOverlay.style.display = "none";
      } else {
        alert("Please enter your name.");
      }
    });
  }
};

// Navigasi ke section dengan show/hide
function showSection(sectionId) {
  const sections = ['home', 'profile', 'portfolio', 'message'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === sectionId) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });
}

// Scroll ke Message Us
function scrollToMessage() {
  showSection("message");
}

// Validasi dan tampilkan hasil form
function handleSubmit(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const tgl = document.getElementById("tgl").value;
  const pesan = document.getElementById("pesan").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!nama || !tgl || !pesan || !gender) {
    alert("Harap isi semua data dengan lengkap.");
    return false;
  }

  const output = document.getElementById("output");
  output.innerHTML = `
    <p><strong>Current time:</strong> ${new Date().toString()}</p>
    <p><strong>Nama :</strong> ${nama}</p>
    <p><strong>Tanggal Lahir :</strong> ${tgl}</p>
    <p><strong>Jenis Kelamin :</strong> ${gender.value}</p>
    <p><strong>Pesan :</strong> ${pesan}</p>
  `;

  return false;
}
