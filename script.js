function tambahAbsen() {
  const namaInput = document.getElementById("namaInput");
  const daftarAbsen = document.getElementById("daftarAbsen");

  const nama = namaInput.value.trim();

  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  // Cek apakah sudah absen
  const sudahAbsen = Array.from(daftarAbsen.children).some(li => li.textContent === nama);
  if (sudahAbsen) {
    alert("Nama ini sudah absen.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = nama;
  daftarAbsen.appendChild(li);
  namaInput.value = "";
}
