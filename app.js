const brandLogos = {
  "Arçelik": `<svg viewBox="0 0 200 60" width="130" height="40"><rect width="200" height="60" rx="8" fill="#e11d48"/><text x="100" y="38" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="26" text-anchor="middle">arçelik</text></svg>`,
  "Beko": `<svg viewBox="0 0 200 60" width="130" height="40"><rect width="200" height="60" rx="8" fill="#0284c7"/><text x="100" y="38" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="30" font-style="italic" text-anchor="middle">beko</text></svg>`,
  "Bosch": `<svg viewBox="0 0 200 60" width="130" height="40"><rect width="200" height="60" rx="8" fill="#dc2626"/><text x="100" y="38" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="28" text-anchor="middle">BOSCH</text></svg>`,
  "Siemens": `<svg viewBox="0 0 200 60" width="130" height="40"><rect width="200" height="60" rx="8" fill="#0d9488"/><text x="100" y="38" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="26" text-anchor="middle">SIEMENS</text></svg>`,
  "Profilo": `<svg viewBox="0 0 200 60" width="130" height="40"><rect width="200" height="60" rx="8" fill="#1e40af"/><text x="100" y="38" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="26" text-anchor="middle">profilo</text></svg>`,
  "Vestel": `<svg viewBox="0 0 200 60" width="130" height="40"><rect width="200" height="60" rx="8" fill="#b91c1c"/><text x="100" y="38" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="28" text-anchor="middle">VESTEL</text></svg>`,
  "Samsung": `<svg viewBox="0 0 200 60" width="130" height="40"><rect width="200" height="60" rx="8" fill="#0369a1"/><text x="100" y="36" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="22" text-anchor="middle">SAMSUNG</text></svg>`,
  "LG": `<svg viewBox="0 0 200 60" width="130" height="40"><rect width="200" height="60" rx="8" fill="#a21caf"/><text x="40" y="40" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="32">LG</text><text x="120" y="36" fill="#fff" font-family="Arial, sans-serif" font-weight="bold" font-size="18">Life's Good</text></svg>`,
  "Altus": `<svg viewBox="0 0 200 60" width="130" height="40"><rect width="200" height="60" rx="8" fill="#334155"/><text x="100" y="38" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="26" text-anchor="middle">altus</text></svg>`,
  "Grundig": `<svg viewBox="0 0 200 60" width="130" height="40"><rect width="200" height="60" rx="8" fill="#1e293b"/><text x="100" y="38" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="24" text-anchor="middle">GRUNDIG</text></svg>`,
  "Diğer": `<svg viewBox="0 0 200 60" width="130" height="40"><rect width="200" height="60" rx="8" fill="#111827"/><text x="100" y="38" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="22" text-anchor="middle">ÖZEL SERVİS</text></svg>`
};

const brands = Object.keys(brandLogos);

const defaultParts = [
  { cat: "Buzdolabı", name: "Inverter Kompresör (Motor) - R600a", stock: 5, price: 5400 },
  { cat: "Buzdolabı", name: "Standart Kompresör Motoru 1/4 HP", stock: 8, price: 3850 },
  { cat: "Buzdolabı", name: "Elektronik Ana Kontrol Kartı", stock: 12, price: 2950 },
  { cat: "Buzdolabı", name: "Evaporatör Defrost Isıtıcısı Rezistans", stock: 15, price: 1450 },
  { cat: "Buzdolabı", name: "No-Frost Fan Motoru Komple", stock: 10, price: 1650 },
  { cat: "Buzdolabı", name: "Sensör Grubu (NTC / Defrost)", stock: 25, price: 850 },
  { cat: "Çamaşır Makinesi", name: "Inverter Kazan Motoru (Direct Drive / Inverter)", stock: 6, price: 4800 },
  { cat: "Çamaşır Makinesi", name: "Tahliye Pompa Motoru Komple", stock: 20, price: 1250 },
  { cat: "Çamaşır Makinesi", name: "Kazan Yıkama Rezistansı (NTC Sensörlü)", stock: 15, price: 1150 },
  { cat: "Çamaşır Makinesi", name: "Elektronik Power / Güç Kartı", stock: 9, price: 3200 },
  { cat: "Çamaşır Makinesi", name: "Kazan Körük Lastiği (Hijyenik Antibakteriyel)", stock: 14, price: 1350 },
  { cat: "Çamaşır Makinesi", name: "Elektronik Kapı Kilit Emniyet Anahtarı", stock: 22, price: 850 },
  { cat: "Bulaşık Makinesi", name: "Isıtıcılı Sirkülasyon Yıkama Pompası (Isı Pompası)", stock: 7, price: 4600 },
  { cat: "Bulaşık Makinesi", name: "Tahliye Pompası Motoru", stock: 18, price: 1200 },
  { cat: "Bulaşık Makinesi", name: "Anakart / Program Kartı", stock: 8, price: 2900 },
  { cat: "Bulaşık Makinesi", name: "Aquastop Su Giriş Hortumu & Ventili", stock: 12, price: 1850 },
  { cat: "Kurutma Makinesi", name: "Isı Pompası Kompresör Ünitesi", stock: 3, price: 6200 },
  { cat: "Fırın / Ocak", name: "Alt / Üst Pişirme Rezistansı", stock: 14, price: 1100 }
];

const demoCodes = [
  ["Bosch/Siemens", "Çamaşır M.", "E18", "Tahliye pompası tıkalı, pompa filtresi veya tahliye hortumu kapalı."],
  ["Bosch/Siemens", "Bulaşık M.", "E15", "Tabanda su birikti, emniyet şamandırası pompa çalıştırmayı engelliyor."],
  ["Arçelik/Beko", "Çamaşır M.", "E01", "NTC sıcaklık sensörü arızası veya kablo bağlantısı kopuk."],
  ["Arçelik/Beko", "Çamaşır M.", "E03", "Su tahliye edilemedi (Pompa motoru arızalı veya tıkalı)."],
  ["Samsung", "Çamaşır M.", "4E", "Su besleme hatası; ventil tıkalı veya su akışı yok."],
  ["LG", "Çamaşır M.", "IE", "Su girişi sağlanamıyor (Ventil veya musluk kapalı)."],
  ["LG", "Çamaşır M.", "OE", "Su tahliye edilemiyor (Pompa tıkalı veya arızalı)."],
  ["LG", "Çamaşır M.", "LE", "Motor kilitlenme arızası (Direct Drive motor / hall sensör hatası)."]
];

let services = JSON.parse(localStorage.getItem("tk_services") || "[]");
let parts = JSON.parse(localStorage.getItem("tk_parts") || JSON.stringify(defaultParts));
let settings = JSON.parse(localStorage.getItem("tk_settings") || '{"name":"ÖZEL TEKNİK SERVİS","phone":"0850 885 00 82","vat":20,"travel":0}');

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const money = n => new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(+n || 0);
const esc = x => String(x ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m]));

function persist() {
  localStorage.setItem("tk_services", JSON.stringify(services));
  localStorage.setItem("tk_parts", JSON.stringify(parts));
  localStorage.setItem("tk_settings", JSON.stringify(settings));
}

function login() {
  if ($("#loginUser").value && $("#loginPass").value) {
    localStorage.setItem("tk_login", "1");
    $("#login").classList.add("hidden");
    $("#app").classList.remove("hidden");
    $("#userBadge").textContent = $("#loginUser").value;
    renderAll();
  }
}

function logout() {
  localStorage.removeItem("tk_login");
  location.reload();
}

function toggleMobileMenu() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("overlay");
  if (sidebar && overlay) {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
  }
}

function handleFormTypeChange() {
  const type = $("#formType").value;
  const container = $("#dynamicFields");
  if (!container) return;

  if (type === "Fiyat Teklif Formu") {
    container.innerHTML = `
      <label>Teklif Geçerlilik Süresi
        <select name="offerValidity"><option>7 Gün Geçerli</option><option>14 Gün Geçerli</option><option>30 Gün Geçerli</option></select>
      </label>
      <label>Tahmini Montaj/Onarım Süresi<input name="offerLeadTime" placeholder="Örn: 2 İş Günü"></label>
      <label>Ödeme / Onay Şartı
        <select name="offerPayment"><option>İş Bitimi Peşin / Havale</option><option>%50 Peşinat / %50 İş Bitimi</option><option>Kredi Kartı Tek Çekim</option></select>
      </label>
      <label>Teklif Notu / Kapsamı<input name="offerNote" placeholder="Orijinal parça ve 1 yıl garanti dahildir."></label>
    `;
  } else if (type === "Cihaz Değişim Formu") {
    container.innerHTML = `
      <label>Değişim Sebebi
        <select name="changeReason"><option>Tamir Mümkün Değil (Ağır Arıza)</option><option>Yedek Parça Temin Edilemiyor</option><option>Kronik Müşteri Memnuniyetsizliği</option></select>
      </label>
      <label>Verilecek Yeni Cihaz Model<input name="newModel" placeholder="Örn: Bosch Serie 6 WGA252X0TR" required></label>
      <label>Yeni Cihaz Seri No<input name="newSerial" placeholder="Örn: 8840192301"></label>
      <label>Fark Ücreti / Mahsup<input type="number" name="exchangePriceDifference" value="0"></label>
    `;
  } else if (type === "İade / Hurda Fişi") {
    container.innerHTML = `
      <label>İade / Hurda Sebebi<input name="refundReason" placeholder="Kart tamiri ekonomik bulunmadı."></label>
      <label>Hurda Durumu
        <select name="refundStatus"><option>Cihaz Müşteriye İade Edildi</option><option>Hurdaya Ayrıldı / Geri Dönüşüm</option></select>
      </label>
      <label>İade Edilen Tutar (₺)<input type="number" name="refundAmount" value="0"></label>
      <label>Açıklama<input name="refundNote" placeholder="Ücret alınmadı."></label>
    `;
  } else {
    container.innerHTML = `
      <label>Tamir Garanti Süresi
        <select name="repairWarranty"><option>1 Yıl Parça & İşçilik Garantisi</option><option>6 Ay Garanti</option><option>Garanti Verilmiyor</option></select>
      </label>
      <label>Değişen Parçalar Summary<input name="replacedPartsSummary" placeholder="Örn: Pompa motoru"></label>
      <label>Cihaz Teslim Durumu
        <select name="deliveryState"><option>Çalışır Durumda Teslim Edildi</option><option>Atölyeye Alındı</option><option>Parça Bekliyor</option></select>
      </label>
      <label>Teknisyen Ek Notu<input name="techExtraNote" placeholder="Şebeke voltajı kontrol edildi."></label>
    `;
  }
}

function nav(p) {
  $$(".page").forEach(x => x.classList.toggle("active", x.id === p));
  $$(".nav").forEach(x => x.classList.toggle("active", x.dataset.page === p));
  const t = { dashboard: "Ana Panel", new: "Yeni Kayıt / Belge Formu", customers: "Müşteriler", history: "Servis & Belge Geçmişi", parts: "Stok Kataloğu", codes: "Arıza Kütüphanesi", reports: "Raporlar", settings: "Ayarlar" };
  $("#pageTitle").textContent = t[p];
  const sidebar = document.querySelector(".sidebar"), overlay = document.getElementById("overlay");
  if (sidebar) sidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("active");
  renderAll();
}

$$(".nav").forEach(b => b.onclick = () => nav(b.dataset.page));

function calc() {
  const f = $("#serviceForm");
  if (!f) return;
  const d = new FormData(f), base = +d.get("parts") + +d.get("labor") + +d.get("travel"), tot = base * (1 + (+d.get("vat") || 0) / 100);
  $("#total").textContent = money(tot);
}

$("#serviceForm").addEventListener("input", calc);
$("#serviceForm").addEventListener("reset", () => setTimeout(() => { clearSignature(); $("#photoPreview").innerHTML = ""; calc(); handleFormTypeChange(); }, 30));

let photoData = "";
$("#photo").addEventListener("change", e => {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = () => { photoData = r.result; $("#photoPreview").innerHTML = `<img class="photo" src="${photoData}">` };
  r.readAsDataURL(f);
});

$("#serviceForm").addEventListener("submit", e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const base = +d.parts + +d.labor + +d.travel;
  d.total = base * (1 + (+d.vat || 0) / 100);
  d.id = Date.now();
  
  let prefix = "SRV-";
  if (d.formType === "Fiyat Teklif Formu") prefix = "TKF-";
  else if (d.formType === "Cihaz Değişim Formu") prefix = "DGM-";
  else if (d.formType === "İade / Hurda Fişi") prefix = "IAD-";

  d.no = prefix + new Date().getFullYear() + "-" + String(services.length + 1).padStart(5, "0");
  d.date = new Date().toISOString();
  d.photo = photoData;
  d.signature = $("#signature").toDataURL();
  services.unshift(d);
  persist();
  alert("İşlem Başarıyla Oluşturuldu: " + d.no);
  e.target.reset();
  photoData = "";
  $("#photoPreview").innerHTML = "";
  clearSignature();
  handleFormTypeChange();
  nav("history");
});

const canvas = $("#signature"), ctx = canvas.getContext("2d");
let drawing = false;

function pos(e) {
  const r = canvas.getBoundingClientRect(), p = e.touches ? e.touches[0] : e;
  return { x: (p.clientX - r.left) * canvas.width / r.width, y: (p.clientY - r.top) * canvas.height / r.height };
}
function start(e) { drawing = true; ctx.beginPath(); const p = pos(e); ctx.moveTo(p.x, p.y); e.preventDefault(); }
function move(e) { if (!drawing) return; ctx.lineWidth = 2.5; ctx.strokeStyle = "#002b66"; const p = pos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); e.preventDefault(); }
function end() { drawing = false; }

canvas.addEventListener("pointerdown", start);
canvas.addEventListener("pointermove", move);
canvas.addEventListener("pointerup", end);
canvas.addEventListener("pointerleave", end);

function clearSignature() { ctx.clearRect(0, 0, canvas.width, canvas.height); }

function serviceRow(s) {
  let badgeStyle = "background:#eef2ff;color:#3949ab;";
  if (s.formType === "Fiyat Teklif Formu") badgeStyle = "background:#fef3c7;color:#92400e;";
  else if (s.formType === "Cihaz Değişim Formu") badgeStyle = "background:#dcfce7;color:#166534;";
  else if (s.formType === "İade / Hurda Fişi") badgeStyle = "background:#fee2e2;color:#991b1b;";

  return `<div class="row"><div><strong>${esc(s.no)} • ${esc(s.customer)} <span class="pill" style="${badgeStyle}">${esc(s.formType || "Servis Fişi")}</span></strong><small>${esc(s.brand)} • ${esc(s.category)} • ${esc(s.model || "-")} • ${new Date(s.date).toLocaleDateString("tr-TR")} <span class="status">${esc(s.status)}</span></small></div><div><span class="pill">${money(s.total)}</span> <button class="ghost" onclick="printService(${s.id})">PDF / Yazdır (2 Sayfa)</button></div></div>`;
}

function renderDash() {
  $("#statServices").textContent = services.length;
  $("#statOpen").textContent = services.filter(s => !["Tamamlandı", "İptal / Reddedildi"].includes(s.status)).length;
  $("#statCustomers").textContent = new Set(services.map(s => s.customer.toLowerCase())).size;
  $("#statRevenue").textContent = money(services.reduce((a, s) => a + (+s.total || 0), 0));
  $("#recent").innerHTML = services.slice(0, 6).map(serviceRow).join("") || '<div class="empty">Henüz kayıt yok.</div>';
}

function renderHistory() {
  const q = ($("#historySearch")?.value || "").toLowerCase();
  $("#historyList").innerHTML = services.filter(s => (s.no + " " + s.customer + " " + s.brand + " " + s.model + " " + (s.formType || "")).toLowerCase().includes(q)).map(serviceRow).join("") || '<div class="empty">Kayıt bulunamadı.</div>';
}

function renderCustomers() {
  const q = ($("#customerSearch")?.value || "").toLowerCase();
  const names = [...new Set(services.map(s => s.customer))].filter(n => n.toLowerCase().includes(q));
  $("#customerList").innerHTML = names.map(n => {
    const a = services.filter(s => s.customer === n), s = a[0];
    return `<div class="row"><div><strong>${esc(n)}</strong><small>${esc(s.phone)} • ${esc(s.address)}<br>${a.length} Kayıt • Son cihaz: ${esc(s.brand)} ${esc(s.category)}</small></div><span class="pill">${money(a.reduce((x, y) => x + (+y.total || 0), 0))}</span></div>`;
  }).join("") || '<div class="empty">Müşteri bulunamadı.</div>';
}

function renderParts() {
  const q = ($("#partSearch")?.value || "").toLowerCase();
  const filtered = parts.filter(p => (p.name + " " + (p.cat || "")).toLowerCase().includes(q));
  $("#partsList").innerHTML = filtered.map((p, i) => `
    <div class="row">
      <div>
        <strong>${esc(p.name)} <span class="pill" style="font-size:10px;">${esc(p.cat || "Genel")}</span></strong>
        <small>Stok Adedi: <b>${p.stock}</b> • Fiyat: <b style="color:#2563eb;">${money(p.price)}</b></small>
      </div>
      <div>
        <button class="ghost" onclick="changeStock(${i},-1)">−</button>
        <button class="ghost" onclick="changeStock(${i},1)">+</button>
      </div>
    </div>
  `).join("") || '<div class="empty">Parça bulunamadı.</div>';
}

function addPart() {
  const cat = prompt("Ürün Grubu (Örn: Buzdolabı, Çamaşır M.)", "Çamaşır Makinesi") || "Genel";
  const n = prompt("Parça Adı"); if (!n) return;
  const stock = +prompt("Stok Adedi", 1) || 0;
  const price = +prompt("Piyasa Fiyatı (₺)", 1000) || 0;
  parts.push({ cat, name: n, stock, price });
  persist();
  renderParts();
}

function changeStock(i, d) { parts[i].stock = Math.max(0, parts[i].stock + d); persist(); renderParts(); }

function renderCodes() {
  const q = ($("#codeSearch")?.value || "").toLowerCase();
  $("#codeList").innerHTML = demoCodes.filter(x => x.join(" ").toLowerCase().includes(q)).map(x => `
    <div class="row">
      <div>
        <strong>${esc(x[0])} • ${esc(x[1])} • Kod: <span style="color:#b42318; font-size:15px;">${esc(x[2])}</span></strong>
        <small>${esc(x[3])}</small>
      </div>
    </div>
  `).join("") || '<div class="empty">Arıza kodu bulunamadı.</div>';
}

function renderReports() {
  const total = services.reduce((a, s) => a + (+s.total || 0), 0), done = services.filter(s => s.status === "Tamamlandı").length;
  $("#reportGrid").innerHTML = `<div class="report"><b>Toplam İşlem Hacmi</b><strong>${money(total)}</strong></div><div class="report"><b>Tamamlanan İşlemler</b><strong>${done}</strong></div><div class="report"><b>Devam Eden / Açık</b><strong>${services.length - done}</strong></div>`;
}

function renderSettings() {
  $("#setName").value = settings.name; $("#setPhone").value = settings.phone; $("#setVat").value = settings.vat; $("#setTravel").value = settings.travel;
}

function saveSettings() {
  settings = { name: $("#setName").value, phone: $("#setPhone").value, vat: +$("#setVat").value || 0, travel: +$("#setTravel").value || 0 };
  persist(); alert("Ayarlar kaydedildi");
}

function printReport() {
  const w = open("", "_blank");
  w.document.write(`<html><body style="font-family:Arial;margin:40px"><h1>SERVİS RAPORU</h1><p>Toplam Kayıt: ${services.length}</p><p>Toplam Hacim: ${money(services.reduce((a, s) => a + (+s.total || 0), 0))}</p><script>print()<\/script></body></html>`);
  w.document.close();
}

// 2 SAYFALI DETAYLI YAZDIRMA ÇIKTISI (MARKAYA ÖZEL)
window.printService = function (id) {
  const s = services.find(x => x.id === id);
  if (!s) return;

  const brandTitle = `${s.brand ? s.brand.toUpperCase() : "ÖZEL"} SERVİS HİZMETLERİ`;
  const formHeading = (s.formType || "TEKNİK SERVİS FİŞİ").toUpperCase();
  const techName = "Hannan Güngördü";
  const logoSvg = brandLogos[s.brand] || brandLogos["Diğer"];

  const realisticTechSignature = `
    <div style="margin-top:5px; display:inline-block; text-align:center;">
      <svg width="200" height="50" viewBox="0 0 220 65">
        <path d="M 15 45 C 30 10, 45 50, 60 20 C 70 5, 80 55, 95 30 C 105 15, 115 40, 130 25 C 145 10, 155 50, 170 15 C 180 5, 195 35, 210 20" stroke="#1d4ed8" stroke-width="2.8" fill="none" stroke-linecap="round"/>
        <text x="30" y="58" font-family="'Brush Script MT', cursive, sans-serif" font-size="20" fill="#1e3a8a" font-weight="bold">Hannan Güngördü</text>
      </svg>
      <div style="font-size:8px; color:#1e3a8a; font-weight:bold;">Yetkili Servis E-İmza</div>
    </div>
  `;

  let specialBoxHTML = "";
  if (s.formType === "Fiyat Teklif Formu") {
    specialBoxHTML = `
      <div class="box">
        <div class="box-title">FİYAT TEKLİF DETAYLARI</div>
        <div class="field"><b>Teklif Geçerlilik Süresi:</b> ${esc(s.offerValidity || "7 Gün")}</div>
        <div class="field"><b>Tahmini Onarım Süresi:</b> ${esc(s.offerLeadTime || "1-2 İş Günü")}</div>
        <div class="field"><b>Ödeme Şartı:</b> ${esc(s.offerPayment || "İş Bitimi")}</div>
        <div class="field"><b>Teklif Notu:</b> ${esc(s.offerNote || "Orijinal parça ve 1 yıl garanti dahildir.")}</div>
      </div>
    `;
  } else if (s.formType === "Cihaz Değişim Formu") {
    specialBoxHTML = `
      <div class="box" style="background:#f0fdf4;">
        <div class="box-title" style="color:#166534;">CİHAZ DEĞİŞİM BİLGİLERİ</div>
        <div class="field"><b>Değişim Nedeni:</b> ${esc(s.changeReason || "Tamir Mümkün Değil")}</div>
        <div class="field"><b>Verilecek Yeni Cihaz Model:</b> <b>${esc(s.newModel || "-")}</b></div>
        <div class="field"><b>Yeni Cihaz Seri No:</b> ${esc(s.newSerial || "-")}</div>
        <div class="field"><b>Fark Ücreti / Mahsup:</b> ${money(s.exchangePriceDifference || 0)}</div>
      </div>
    `;
  } else {
    specialBoxHTML = `
      <div class="box">
        <div class="box-title">SERVİS / TAMİR KAPSAMI</div>
        <div class="field"><b>Garanti Süresi:</b> ${esc(s.repairWarranty || "1 Yıl Parça & İşçilik Garantisi")}</div>
        <div class="field"><b>Değişen Parçalar:</b> ${esc(s.replacedPartsSummary || "İşlem detayında belirtilmiştir.")}</div>
        <div class="field"><b>Cihaz Teslim Durumu:</b> ${esc(s.deliveryState || "Çalışır Durumda Teslim Edildi")}</div>
      </div>
    `;
  }

  const w = open("", "_blank");
  w.document.write(`
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <title>${esc(s.no)} - ${esc(formHeading)}</title>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; margin: 25px; color: #1e293b; line-height: 1.3; }
        .page-break { page-break-after: always; break-after: page; }
        .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #0f172a; padding-bottom: 12px; }
        .logo-area { display: flex; align-items: center; gap: 15px; }
        .company-title h1 { margin: 0; font-size: 18px; color: #0f172a; text-transform: uppercase; }
        .company-title h2 { margin: 3px 0 0; font-size: 14px; color: #2563eb; }
        .doc-info { text-align: right; }
        .doc-info .no { font-size: 18px; font-weight: bold; color: #b42318; }
        .box-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 15px 0; }
        .box { border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; background: #f8fafc; margin-bottom: 10px; }
        .box-title { font-size: 11px; font-weight: bold; color: #475569; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 6px; }
        .field { font-size: 12px; margin-bottom: 3px; }
        .field b { color: #0f172a; }
        .details-table { width: 100%; border-collapse: collapse; margin: 12px 0; }
        .details-table th, .details-table td { border: 1px solid #cbd5e1; padding: 8px; font-size: 12px; text-align: left; }
        .details-table th { background: #f1f5f9; color: #334155; font-weight: bold; }
        .total-box { text-align: right; font-size: 15px; font-weight: bold; color: #0f172a; margin: 10px 0; padding: 8px; background: #f1f5f9; border-radius: 6px; }
        .signatures { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 20px; text-align: center; }
        .sig-box { border-top: 1px dashed #94a3b8; padding-top: 8px; font-size: 11px; font-weight: bold; }
        
        /* 2. Sayfa Sözleşme Tasarımı */
        .contract-page h2 { font-size: 15px; text-align: center; border-bottom: 2px solid #111827; padding-bottom: 6px; margin-bottom: 15px; color: #111827; }
        .contract-section { font-size: 10.5px; line-height: 1.4; margin-bottom: 10px; color: #334155; text-align: justify; }
        .contract-section b { color: #0f172a; display: block; margin-bottom: 2px; }
        .contract-section ul { margin: 3px 0 3px 15px; padding: 0; }
        .contract-section li { margin-bottom: 2px; }

        @media print { button { display: none; } body { margin: 15px; } }
      </style>
    </head>
    <body>

      <!-- BİRİNCİ SAYFA: ÖN YÜZ / FORM -->
      <div class="page-break">
        <div class="header">
          <div class="logo-area">
            ${logoSvg}
            <div class="company-title">
              <h1>${esc(brandTitle)}</h1>
              <h2>${esc(formHeading)}</h2>
              <div style="font-size:11px; font-weight:bold; color:#1e40af; margin-top:2px;">Çağrı Merkezi: 0850 885 00 82</div>
            </div>
          </div>
          <div class="doc-info">
            <div class="no">${esc(s.no)}</div>
            <div style="font-size:11px; color:#64748b; margin-top:4px;">Tarih: ${new Date(s.date).toLocaleString("tr-TR")}</div>
          </div>
        </div>

        <div class="box-grid">
          <div class="box">
            <div class="box-title">Müşteri Bilgileri</div>
            <div class="field"><b>Ad Soyad:</b> ${esc(s.customer)}</div>
            <div class="field"><b>Telefon:</b> ${esc(s.phone)}</div>
            <div class="field"><b>Adres:</b> ${esc(s.address || "-")}</div>
          </div>
          <div class="box">
            <div class="box-title">Cihaz Bilgileri</div>
            <div class="field"><b>Marka / Ürün:</b> ${esc(s.brand)} • ${esc(s.category)}</div>
            <div class="field"><b>Model / Seri No:</b> ${esc(s.model || "-")} / ${esc(s.serial || "-")}</div>
            <div class="field"><b>Garanti Durumu:</b> ${esc(s.warranty)}</div>
            <div class="field"><b>Sorumlu Teknisyen:</b> <b>${esc(techName)}</b></div>
          </div>
        </div>

        ${specialBoxHTML}

        <div class="box">
          <div class="box-title">Tespit ve İşlem Detayı</div>
          <div class="field" style="margin-bottom:4px;"><b>Müşteri Şikâyeti:</b> ${esc(s.complaint)}</div>
          <div class="field" style="margin-bottom:4px;"><b>Teknisyen Teşhisi:</b> ${esc(s.diagnosis || "-")}</div>
          <div class="field" style="margin-bottom:4px;"><b>Açıklama / İşlem:</b> ${esc(s.work || "-")}</div>
          <div class="field"><b>Arıza Kodu:</b> <span style="color:#b42318; font-weight:bold;">${esc(s.code || "-")}</span></div>
        </div>

        <table class="details-table">
          <thead>
            <tr>
              <th>Kalem Açıklaması</th>
              <th style="width: 110px; text-align: right;">Tutar</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Yedek Parça / Malzeme Bedeli</td><td style="text-align: right;">${money(s.parts)}</td></tr>
            <tr><td>Teknik İşçilik / Onarım Hizmeti</td><td style="text-align: right;">${money(s.labor)}</td></tr>
            <tr><td>Servis / Yol Ücreti</td><td style="text-align: right;">${money(s.travel)}</td></tr>
            <tr><td>KDV (%${esc(s.vat)})</td><td style="text-align: right;">${money((+s.parts + +s.labor + +s.travel) * (+s.vat / 100))}</td></tr>
          </tbody>
        </table>

        <div class="total-box">GENEL TOPLAM: ${money(s.total)}</div>

        ${s.photo ? `<div style="margin:8px 0;"><b>Cihaz Görseli:</b><br><img style="max-width:140px; border-radius:6px; border:1px solid #ccc; margin-top:5px;" src="${s.photo}"></div>` : ""}

        <div class="signatures">
          <div class="sig-box">
            <b>Müşteri Onayı / İmza</b><br><span style="font-size:9px; color:#64748b;">(Arka sayfadaki şartları okudum, onaylıyorum)</span><br>
            ${s.signature ? `<img src="${s.signature}" style="max-width:160px; height:45px; margin-top:4px;">` : `<div style="height:45px;"></div>`}
          </div>
          <div class="sig-box">
            <b>Servis Yetkilisi / İmza</b><br><b>${esc(techName)}</b><br>
            ${realisticTechSignature}
          </div>
        </div>
      </div>

      <!-- İKİNCİ SAYFA: GARANTİ ŞARTLARI VE SERVİS HİZMET SÖZLEŞMESİ -->
      <div class="contract-page">
        <h2>GARANTİ ŞARTLARI VE SERVİS HİZMET SÖZLEŞMESİ</h2>

        <div class="contract-section">
          <b>1. GENEL ŞARTLAR VE MÜŞTERİ YÜKÜMLÜLÜKLERİ</b>
          1.1. İşbu formda belirtilen cihaz, Müşteri tarafından bildirilen arıza tespiti ve/veya bakım-onarım talebi doğrultusunda yetkili/özel servis tarafından teslim alınmış veya yerinde müdahale edilmiştir.<br>
          1.2. Müşteri, servis formunda yer alan iletişim, adres ve cihaz bilgilerinin eksiksiz ve doğru olduğunu kabul ve taahhüt eder. Yanlış bilgilendirmeden doğacak gecikme veya ek maliyetlerden servis sorumlu tutulamaz.<br>
          1.3. Onarım onayı verilen cihazların servis bedeli, işlem bitiminde veya cihaz tesliminde peşin/kredi kartı ile tahsil edilir. Fatura/fiş ibrazı olmaksızın garanti hakları talep edilemez.
        </div>

        <div class="contract-section">
          <b>2. GARANTİ KAPSAMI VE SÜRESİ</b>
          2.1. Servis tarafından cihazda <b>değiştirilen orijinal/yedek parçalar ve yapılan işçilik</b>, teslim/montaj tarihinden itibaren <b>1 (bir) yıl</b> süreyle garanti altındadır.<br>
          2.2. Garanti süresi boyunca, yalnızca değiştirilen parça veya doğrudan servisin yaptığı işçilik kusurundan kaynaklanan arızalar ücretsiz olarak giderilir. Cihazın tamamı için yeni bir garanti oluşturmaz.
        </div>

        <div class="contract-section">
          <b>3. GARANTİ HARİCİ DURUMLAR (EXCLUSIONS)</b>
          Aşağıdaki hallerde garanti geçerliliğini yitirir ve yapılacak müdahaleler ücrete tabidir:
          <ul>
            <li><b>Elektriksel Arızalar:</b> Şebeke voltaj dalgalanmaları, yüksek/düşük voltaj, hatalı topraklama hattından kaynaklanan kart ve motor yanmaları.</li>
            <li><b>Kullanıcı Hataları:</b> Kullanım kılavuzuna aykırı çalıştırma, kapasite üstü yükleme, uygun olmayan deterjan/kimyasal kullanımı, cihaza yabancı cisim (bozuk para, tel, düğme vb.) kaçması.</li>
            <li><b>Dış Etkenler:</b> Su kesintileri, yüksek/düşük su basıncı, donma, kireçlenme, sel, yangın, yıldırım düşmesi gibi doğal afetler.</li>
            <li><b>Yetkisiz Müdahale:</b> Servis bilgisi dışında üçüncü şahıslar veya kullanıcı tarafından cihaza müdahale edilmesi, mühür açılması.</li>
            <li><b>Fiziksel Hasarlar:</b> Taşıma, darbe, düşme, çizilme, kırılma, evcil hayvan kaynaklı tahribatlar.</li>
          </ul>
        </div>

        <div class="contract-section">
          <b>4. İADE, MÜŞTERİ ONAYI VE ARIZA TESPİT BEDELİ</b>
          4.1. Arıza tespiti sonrasında sunulan fiyat teklifinin onaylanmaması durumunda, cihaz için standart <b>Arıza Tespiti ve İnceleme Bedeli</b> tahsil edilir.<br>
          4.2. Müşteri onayı alınarak sipariş edilen veya cihaz üzerine montajı yapılan özel/elektronik parçaların iadesi ve iptali yasal olarak mümkün değildir.
        </div>

        <div class="contract-section">
          <b>5. HURDA VE DEĞİŞİM SÜREÇLERİ</b>
          5.1. Onarım maliyeti cihazın rayiç değerini aşan veya parça tedariki imkansız olan cihazlar, Müşteri onayı ile <b>Hurda / Ekonomik Ömrünü Tamamlamış Cihaz</b> statüsüne alınır.<br>
          5.2. Garanti kapsamında veya ücretli olarak değiştirilen eski/arızalı parçalar, çevre mevzuatı uyarınca Müşterinin aksi yönde yazılı talebi olmadıkça imha edilmek üzere servis tarafından muhafaza edilir.
        </div>

        <div class="contract-section">
          <b>6. CİHAZ TESLİMATI VE MÜLKİYETİN SAKLI TUTULMASI</b>
          6.1. Atölyede onarımı tamamlanan cihazların teslimi, bu Servis Formu karşılığında yapılır.<br>
          6.2. Onarımı tamamlandığı bildirilen ve <b>30 (otuz) gün</b> içerisinde teslim alınmayan veya ücreti ödenmeyen cihazlardan servis sorumlu tutulamaz; 60 günü aşan cihazlar için ardifiye ücreti yansıtılır.
        </div>

        <div class="contract-section">
          <b>7. YETKİLİ MAHKEME</b>
          İşbu sözleşmeden doğabilecek uyuşmazlıklarda Tüketici Hakem Heyetleri ve Gaziantep Mahkemeleri / İcra Daireleri yetkilidir.
        </div>

        <div style="margin-top:25px; display:flex; justify-content:space-between; align-items:flex-end;">
          <div style="font-size:10px; color:#64748b;">
            <b>Teknik Servis Formu - Sayfa 2/2</b><br>
            Tüm hakları saklıdır. © 2026
          </div>
          <div style="text-align:center; font-size:11px; font-weight:bold;">
            Müşteri Okudum / Onaylıyorum<br>
            <div style="height:35px;"></div>
            __________________________________
          </div>
        </div>
      </div>

      <script>print()<\/script>
    </body>
    </html>
  `);
  w.document.close();
};

function renderAll() {
  renderDash(); renderHistory(); renderCustomers(); renderParts(); renderCodes(); renderReports(); renderSettings();
}

$("#historySearch").oninput = renderHistory;
$("#customerSearch").oninput = renderCustomers;
$("#codeSearch").oninput = renderCodes;
$("#partSearch").oninput = renderParts;

$("#brand").innerHTML = brands.map(x => `<option>${x}</option>`).join("");
$("#serviceForm").querySelector('[name="vat"]').value = settings.vat;
$("#serviceForm").querySelector('[name="travel"]').value = settings.travel;

handleFormTypeChange();
calc();

if (localStorage.getItem("tk_login") === "1") {
  $("#login").classList.add("hidden");
  $("#app").classList.remove("hidden");
  $("#userBadge").textContent = "admin";
  renderAll();
  // --- PARÇA EKLEME VE HESAPLAMA SİSTEMİ ---

// Sayfa yüklendiğinde veya form açıldığında ilk boş parça satırını ekler
function initParts() {
  const container = document.getElementById('partsContainer');
  if (container && container.innerHTML === '') {
    addPartRow();
  }
}

// Yeni parça satırı ekleme
function addPartRow(partName = '', partPrice = 0) {
  const container = document.getElementById('partsContainer');
  if (!container) return;

  const row = document.createElement('div');
  row.className = 'part-row';
  row.innerHTML = `
    <input type="text" placeholder="Parça adı (Örn: Pompa, Kart, Rezistans)" class="p-name" value="${partName}" oninput="calculateTotals()">
    <input type="number" placeholder="Fiyat (₺)" class="p-price" value="${partPrice}" min="0" step=".01" oninput="calculateTotals()">
    <button type="button" class="danger-btn" onclick="removePartRow(this)">Sil</button>
  `;
  container.appendChild(row);
  calculateTotals();
}

// Parça satırını silme
function removePartRow(btn) {
  btn.closest('.part-row').remove();
  calculateTotals();
  
  // Eğer hiç satır kalmadıysa otomatik bir tane bırak
  const container = document.getElementById('partsContainer');
  if (container && container.children.length === 0) {
    addPartRow();
  }
}

// Tüm parça fiyatlarını toplayıp genel hesaba yansıtma
function calculateTotals() {
  let totalParts = 0;
  document.querySelectorAll('.p-price').forEach(input => {
    let val = parseFloat(input.value) || 0;
    totalParts += val;
  });

  const partsInput = document.getElementById('partsTotalInput');
  if (partsInput) {
    partsInput.value = totalParts.toFixed(2);
  }

  // Genel toplam hesaplamasını tetikle (varsa ana hesap fonksiyonun)
  if (typeof updateGrandTotal === 'function') {
    updateGrandTotal();
  }
}

// Sayfa açıldığında tetiklenmesi için
document.addEventListener('DOMContentLoaded', () => {
  initParts();
});

}
