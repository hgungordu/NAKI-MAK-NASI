// Marka SVG Logoları (Mobil / Masaüstü ve Fişlerde Resmi Görünüm İçin)
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
  "Klima / Genel": `<svg viewBox="0 0 200 60" width="130" height="40"><rect width="200" height="60" rx="8" fill="#0f766e"/><text x="100" y="38" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="22" text-anchor="middle">AIR SERVICE</text></svg>`
};

const brands = Object.keys(brandLogos);

// Genişletilmiş Arıza Kodları Kütüphanesi
const demoCodes = [
  // Bosch & Siemens
  ["Bosch/Siemens", "Çamaşır M.", "E18 / F18", "Tahliye pompası tıkalı veya filtre/boru kapalı."],
  ["Bosch/Siemens", "Çamaşır M.", "E16 / F16", "Kapı kilidi hatası (Sıkı kapanmamış veya kilit arızalı)."],
  ["Bosch/Siemens", "Çamaşır M.", "E23 / F23", "Aquastop devreye girdi, alt tepside su sızıntısı var."],
  ["Bosch/Siemens", "Bulaşık M.", "E15", "Tabanda su birikti, güvenlik şamandırası aktif."],
  ["Bosch/Siemens", "Bulaşık M.", "E09 / E11", "Isıtma elemanı (Rezistanslı sirkülasyon pompası) arızası."],
  ["Bosch/Siemens", "Buzdolabı", "E20 / E21", "Evaporatör sensör veya fan motoru devresi arızası."],

  // Arçelik & Beko & Altus
  ["Arçelik/Beko", "Çamaşır M.", "E01", "NTC sıcaklık sensörü açık veya kısa devre."],
  ["Arçelik/Beko", "Çamaşır M.", "E03", "Su tahliye edilemedi (Pompa veya seviye şalteri)."],
  ["Arçelik/Beko", "Çamaşır M.", "E07", "Su alma hatası (Musluk kapalı veya ventilde sorun var)."],
  ["Arçelik/Beko", "Bulaşık M.", "E01", "Su sızıntısı emniyeti (Float switch tetiklendi)."],
  ["Arçelik/Beko", "Bulaşık M.", "E02", "Su alma zaman aşımı (Ventil veya prosestat arızalı)."],
  ["Arçelik/Beko", "Buzdolabı", "E4", "Defrost ısıtıcı veya defrost sensör arızası."],
  ["Arçelik/Beko", "Klima", "CH05 / CH06", "İç ve dış ünite arası haberleşme hatası."],

  // Samsung
  ["Samsung", "Çamaşır M.", "4E / 4C", "Su besleme hatası (Su girişi yetersiz veya ventil arızalı)."],
  ["Samsung", "Çamaşır M.", "5E / 5C", "Su tahliye hatası (Pompa filtresi tıkalı)."],
  ["Samsung", "Çamaşır M.", "dE / dC", "Kapı açık uyarısı veya kapı kilit mekanizması arızası."],
  ["Samsung", "Buzdolabı", "RD", "Hava damperi (Damper motoru) çalışma hatası."],
  ["Samsung", "Klima", "E101 / E102", "İç ünite ve dış ünite iletişim bağlantısı kopuk."],

  // LG
  ["LG", "Çamaşır M.", "OE", "Tahliye hortumu veya pompa tıkalı, su boşaltılamıyor."],
  ["LG", "Çamaşır M.", "IE", "Cihaza yeterli su girişi sağlanamıyor."],
  ["LG", "Çamaşır M.", "UE", "Dengesiz yük tespiti (Çamaşır sıkmada dengesiz dağılmış)."],
  ["LG", "Çamaşır M.", "LE", "Motor kilitlenme arızası (Direct Drive motor / Hall sensörü)."],

  // Vestel & Regal
  ["Vestel", "Çamaşır M.", "E01", "Cihaz kapısı tam kapatılmadı."],
  ["Vestel", "Çamaşır M.", "E02", "Su seviye sensörü veya ventil su alma hatası."],
  ["Vestel", "Çamaşır M.", "E03", "Pompa arızalı veya pompa filtresi tıkanmış."],
  ["Vestel", "Bulaşık M.", "F5", "Yetersiz su girişi uyarısı."]
];

let services = JSON.parse(localStorage.getItem("tk_services") || "[]");
let parts = JSON.parse(localStorage.getItem("tk_parts") || JSON.stringify([{ name: "Pompa Motoru", stock: 4, price: 950 }, { name: "Rezistans", stock: 6, price: 850 }, { name: "Anakart / Kart Tamiri", stock: 10, price: 1800 }]));
let settings = JSON.parse(localStorage.getItem("tk_settings") || '{"name":"TEKNİK SERVİS HİZMETLERİ","phone":"0850 885 00 82","vat":20,"travel":0}');

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

function nav(p) {
  $$(".page").forEach(x => x.classList.toggle("active", x.id === p));
  $$(".nav").forEach(x => x.classList.toggle("active", x.dataset.page === p));
  const t = { dashboard: "Ana Panel", new: "Yeni Kayıt / Teklif Formu", customers: "Müşteriler", history: "Servis & Teklif Geçmişi", parts: "Stok / Parçalar", codes: "Arıza Kütüphanesi", reports: "Raporlar", settings: "Ayarlar" };

  const currentBrand = $("#brand") ? $("#brand").value : "";
  if (p === "new" && currentBrand) {
    $("#pageTitle").textContent = currentBrand.toUpperCase() + " TEKNİK SERVİS HİZMETLERİ";
  } else {
    $("#pageTitle").textContent = t[p];
  }

  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("overlay");
  if (sidebar) sidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("active");

  renderAll();
}

$$(".nav").forEach(b => b.onclick = () => nav(b.dataset.page));

function updateBrandTitle(brandName) {
  if (!brandName) return;
  const titleText = brandName.toUpperCase() + " TEKNİK SERVİS HİZMETLERİ";
  const pageTitle = $("#pageTitle");
  if (pageTitle && document.querySelector("#new.page.active")) {
    pageTitle.textContent = titleText;
  }
  const sideBrand = $("#sideBrandTitle");
  if (sideBrand) {
    sideBrand.textContent = brandName.toUpperCase() + " SERVİS";
  }
}

function calc() {
  const f = $("#serviceForm");
  if (!f) return;
  const d = new FormData(f), base = +d.get("parts") + +d.get("labor") + +d.get("travel"), tot = base * (1 + (+d.get("vat") || 0) / 100);
  $("#total").textContent = money(tot);
}

$("#serviceForm").addEventListener("input", calc);
$("#serviceForm").addEventListener("reset", () => setTimeout(() => { clearSignature(); $("#photoPreview").innerHTML = ""; calc() }, 30));

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
  const prefix = d.formType === "Fiyat Teklif Formu" ? "TKF-" : "TK-";
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
  nav("history");
});

// İmza Canvası İşlemleri
const canvas = $("#signature"), ctx = canvas.getContext("2d");
let drawing = false;

function pos(e) {
  const r = canvas.getBoundingClientRect(), p = e.touches ? e.touches[0] : e;
  return { x: (p.clientX - r.left) * canvas.width / r.width, y: (p.clientY - r.top) * canvas.height / r.height };
}
function start(e) { drawing = true; ctx.beginPath(); const p = pos(e); ctx.moveTo(p.x, p.y); e.preventDefault(); }
function move(e) { if (!drawing) return; const p = pos(e); ctx.lineWidth = 2.5; ctx.strokeStyle = "#002b66"; ctx.lineTo(p.x, p.y); ctx.stroke(); e.preventDefault(); }
function end() { drawing = false; }

canvas.addEventListener("pointerdown", start);
canvas.addEventListener("pointermove", move);
canvas.addEventListener("pointerup", end);
canvas.addEventListener("pointerleave", end);

function clearSignature() { ctx.clearRect(0, 0, canvas.width, canvas.height); }

function serviceRow(s) {
  const isProposal = s.formType === "Fiyat Teklif Formu";
  return `<div class="row"><div><strong>${esc(s.no)} • ${esc(s.customer)} <span class="pill" style="${isProposal ? 'background:#fef3c7;color:#92400e;' : ''}">${esc(s.formType || "Servis Fişi")}</span></strong><small>${esc(s.brand)} • ${esc(s.category)} • ${esc(s.model || "-")} • ${new Date(s.date).toLocaleDateString("tr-TR")} <span class="status">${esc(s.status)}</span></small></div><div><span class="pill">${money(s.total)}</span> <button class="ghost" onclick="printService(${s.id})">PDF / Yazdır</button></div></div>`;
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
  $("#partsList").innerHTML = parts.map((p, i) => `<div class="row"><div><strong>${esc(p.name)}</strong><small>Stok: ${p.stock} • Birim: ${money(p.price)}</small></div><div><button class="ghost" onclick="changeStock(${i},-1)">−</button> <button class="ghost" onclick="changeStock(${i},1)">+</button></div></div>`).join("");
}

function addPart() {
  const n = prompt("Parça adı"); if (!n) return;
  const stock = +prompt("Stok", 1) || 0, price = +prompt("Birim fiyat", 0) || 0;
  parts.push({ name: n, stock, price }); persist(); renderParts();
}

function changeStock(i, d) { parts[i].stock = Math.max(0, parts[i].stock + d); persist(); renderParts(); }

function renderCodes() {
  const q = ($("#codeSearch")?.value || "").toLowerCase();
  $("#codeList").innerHTML = demoCodes.filter(x => x.join(" ").toLowerCase().includes(q)).map(x => `<div class="row"><div><strong>${esc(x[0])} • ${esc(x[1])} • Code: <span style="color:#b42318;">${esc(x[2])}</span></strong><small>${esc(x[3])}</small></div></div>`).join("") || '<div class="empty">Arıza kodu bulunamadı.</div>';
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

function exportBackup() {
  const blob = new Blob([JSON.stringify({ services, parts, settings }, null, 2)], { type: "application/json" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
  a.download = "teknik-servis-yedek-" + new Date().toISOString().slice(0, 10) + ".json"; a.click();
}

function importBackup(e) {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const x = JSON.parse(r.result); services = x.services || []; parts = x.parts || []; settings = x.settings || settings;
      persist(); renderAll(); alert("Yedek başarıyla yüklendi");
    } catch { alert("Geçersiz yedek dosyası"); }
  };
  r.readAsText(f);
}

function printReport() {
  const w = open("", "_blank");
  w.document.write(`<html><body style="font-family:Arial;margin:40px"><h1>${esc(settings.name)}</h1><h2>Servis ve Teklif Raporu</h2><p>Çağrı Merkezi: 0850 885 00 82</p><p>Toplam İşlem: ${services.length}</p><p>Toplam Hacim: ${money(services.reduce((a, s) => a + (+s.total || 0), 0))}</p><script>print()<\/script></body></html>`);
  w.document.close();
}

// BİREBİR GERÇEKÇİ RESMİ SERVİS FİŞİ VE FİYAT TEKLİF FORMU ÇIKTISI
window.printService = function (id) {
  const s = services.find(x => x.id === id);
  if (!s) return;

  const brandTitle = s.brand ? s.brand.toUpperCase() + " TEKNİK SERVİS HİZMETLERİ" : "TEKNİK SERVİS HİZMETLERİ";
  const formHeading = (s.formType || "TEKNİK SERVİS FİŞİ").toUpperCase();
  const isProposal = s.formType === "Fiyat Teklif Formu";
  const techName = "Hannan Güngördü";
  const logoSvg = brandLogos[s.brand] || brandLogos["Arçelik"];

  // Gerçekçi Islak/E-İmza (Mavi mürekkep efektli SVG imza)
  const realisticTechSignature = `
    <div style="margin-top:5px; display:inline-block; text-align:center;">
      <svg width="220" height="65" viewBox="0 0 220 65" style="border-bottom:1px solid #1e3a8a;">
        <path d="M 15 45 C 30 10, 45 50, 60 20 C 70 5, 80 55, 95 30 C 105 15, 115 40, 130 25 C 145 10, 155 50, 170 15 C 180 5, 195 35, 210 20" stroke="#1d4ed8" stroke-width="2.8" fill="none" stroke-linecap="round"/>
        <path d="M 25 35 Q 80 5, 185 40" stroke="#1e40af" stroke-width="2" fill="none" stroke-linecap="round"/>
        <text x="30" y="58" font-family="'Brush Script MT', cursive, sans-serif" font-size="20" fill="#1e3a8a" font-weight="bold">Hannan Güngördü</text>
      </svg>
      <div style="font-size:9px; color:#1e3a8a; font-weight:bold; margin-top:2px;">E-İmza ile Onaylanmıştır</div>
    </div>
  `;

  // Belge Türüne Göre Dinamik Yasal Metinler & Konular
  const proposalTerms = `
    <div style="font-size:10px; color:#444; margin-top:12px; line-height:1.4; border-top:1px solid #ddd; padding-top:8px;">
      <b>TEKLİF KOŞULLARI VE BİLGİLENDİRME:</b><br>
      1. Bu fiyat teklifi düzenlendiği tarihten itibaren <b>7 iş günü</b> geçerlidir.<br>
      2. Müşteri onayı sonrasında temin edilecek orijinal yedek parçalar 1 (bir) yıl servis garantimiz altındadır.<br>
      3. İşbu teklif formu onaylandıktan sonra servis randevusu ve montaj/tamir süreci başlatılacaktır.<br>
      4. Fiyatlara belirtilen KDV oranı dahildir.
    </div>
  `;

  const serviceTerms = `
    <div style="font-size:10px; color:#444; margin-top:12px; line-height:1.4; border-top:1px solid #ddd; padding-top:8px;">
      <b>SERVİS VE GARANTİ ŞARTLARI:</b><br>
      1. Değiştirilen orijinal yedek parçalar ve yapılan işçilik <b>1 (Bir) Yıl</b> süreyle servisimizin garantisi altındadır.<br>
      2. Kullanım hataları, voltaj dalgalanmaları ve dış etken kaynaklı arızalar garanti kapsamı dışındadır.<br>
      3. Müşteri, cihaz tesliminde yapılan testleri onaylamış ve cihazı çalışır durumda teslim almıştır.
    </div>
  `;

  const w = open("", "_blank");
  w.document.write(`
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <title>${esc(s.no)} - ${esc(formHeading)}</title>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; margin: 30px; color: #1e293b; line-height: 1.3; }
        .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #0f172a; padding-bottom: 12px; }
        .logo-area { display: flex; align-items: center; gap: 15px; }
        .company-title h1 { margin: 0; font-size: 18px; color: #0f172a; text-transform: uppercase; }
        .company-title h2 { margin: 3px 0 0; font-size: 14px; color: #2563eb; letter-spacing: 0.5px; }
        .doc-info { text-align: right; }
        .doc-info .no { font-size: 18px; font-weight: bold; color: #b42318; }
        .box-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 15px 0; }
        .box { border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; background: #f8fafc; }
        .box-title { font-size: 11px; font-weight: bold; color: #475569; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 6px; }
        .field { font-size: 12px; margin-bottom: 3px; }
        .field b { color: #0f172a; }
        .details-table { width: 100%; border-collapse: collapse; margin: 12px 0; }
        .details-table th, .details-table td { border: 1px solid #cbd5e1; padding: 8px; font-size: 12px; text-align: left; }
        .details-table th { background: #f1f5f9; color: #334155; font-weight: bold; }
        .total-box { text-align: right; font-size: 16px; font-weight: bold; color: #0f172a; margin: 10px 0; padding: 10px; background: #f1f5f9; border-radius: 6px; }
        .signatures { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 30px; text-align: center; }
        .sig-box { border-top: 1px dashed #94a3b8; padding-top: 8px; font-size: 12px; font-weight: bold; }
        .photo-thumb { max-width: 180px; height: auto; border-radius: 6px; border: 1px solid #ccc; margin-top: 10px; }
        @media print { button { display: none; } body { margin: 15px; } }
      </style>
    </head>
    <body>

      <div class="header">
        <div class="logo-area">
          ${logoSvg}
          <div class="company-title">
            <h1>${esc(brandTitle)}</h1>
            <h2>${esc(formHeading)}</h2>
            <div style="font-size:12px; font-weight:bold; color:#1e40af; margin-top:2px;">Çağrı Merkezi / Destek: 0850 885 00 82</div>
          </div>
        </div>
        <div class="doc-info">
          <div class="no">${esc(s.no)}</div>
          <div style="font-size:11px; color:#64748b; margin-top:4px;">Tarih: ${new Date(s.date).toLocaleString("tr-TR")}</div>
        </div>
      </div>

      <div class="box-grid">
        <div class="box">
          <div class="box-title">Müşteri / İletişim Bilgileri</div>
          <div class="field"><b>Ad Soyad:</b> ${esc(s.customer)}</div>
          <div class="field"><b>Telefon:</b> ${esc(s.phone)}</div>
          <div class="field"><b>Adres:</b> ${esc(s.address || "-")}</div>
        </div>
        <div class="box">
          <div class="box-title">Cihaz & Servis Detayları</div>
          <div class="field"><b>Marka / Ürün:</b> ${esc(s.brand)} • ${esc(s.category)}</div>
          <div class="field"><b>Model / Seri No:</b> ${esc(s.model || "-")} / ${esc(s.serial || "-")}</div>
          <div class="field"><b>Garanti Durumu:</b> ${esc(s.warranty)}</div>
          <div class="field"><b>Sorumlu Teknisyen:</b> <b>${esc(techName)}</b></div>
        </div>
      </div>

      <div class="box">
        <div class="box-title">${isProposal ? "Teklif Detayı & Arıza Tespiti" : "Arıza Bilgisi ve Yapılan İşlemler"}</div>
        <div class="field" style="margin-bottom:6px;"><b>Müşteri Şikâyeti / Talep:</b> ${esc(s.complaint)}</div>
        <div class="field" style="margin-bottom:6px;"><b>Teknisyen Tespiti:</b> ${esc(s.diagnosis || "-")}</div>
        <div class="field" style="margin-bottom:6px;"><b>${isProposal ? "Önerilen İşlem / Teklif Kapsamı" : "Yapılan İşlem / Karar"}:</b> ${esc(s.work || "-")}</div>
        <div class="field"><b>Arıza Kodu / Kütüphane Notu:</b> <span style="color:#b42318; font-weight:bold;">${esc(s.code || "-")}</span></div>
      </div>

      <table class="details-table">
        <thead>
          <tr>
            <th>İşlem / Parça Kalemi</th>
            <th style="width: 120px; text-align: right;">Tutar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yedek Parça / Malzeme Bedeli</td>
            <td style="text-align: right;">${money(s.parts)}</td>
          </tr>
          <tr>
            <td>Teknik İşçilik / Onarım Hizmeti</td>
            <td style="text-align: right;">${money(s.labor)}</td>
          </tr>
          <tr>
            <td>Servis / Yol Ücreti</td>
            <td style="text-align: right;">${money(s.travel)}</td>
          </tr>
          <tr>
            <td>Hesaplanan KDV (%${esc(s.vat)})</td>
            <td style="text-align: right;">${money((+s.parts + +s.labor + +s.travel) * (+s.vat / 100))}</td>
          </tr>
        </tbody>
      </table>

      <div class="total-box">
        HESAPLANAN GENEL TOPLAM: ${money(s.total)}
      </div>

      ${s.photo ? `<div style="margin:10px 0;"><b>Fotoğraf / Ek Belge:</b><br><img class="photo-thumb" src="${s.photo}"></div>` : ""}

      ${isProposal ? proposalTerms : serviceTerms}

      <div class="signatures">
        <div class="sig-box">
          <b>Müşteri Onayı / İmza</b><br>
          <span style="font-size:10px; color:#64748b;">(${isProposal ? "Teklifi Okudum, Onaylıyorum" : "Cihazı Eksiksiz Teslim Aldım"})</span><br>
          ${s.signature ? `<img src="${s.signature}" style="max-width:180px; height:50px; margin-top:5px;">` : `<div style="height:50px;"></div>`}
        </div>
        <div class="sig-box">
          <b>Teknisyen / Yetkili İmza</b><br>
          <b>${esc(techName)}</b><br>
          ${realisticTechSignature}
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

$("#brand").innerHTML = brands.map(x => `<option>${x}</option>`).join("");
$("#brand").addEventListener("change", (e) => updateBrandTitle(e.target.value));

$("#serviceForm").querySelector('[name="vat"]').value = settings.vat;
$("#serviceForm").querySelector('[name="travel"]').value = settings.travel;
calc();

if (localStorage.getItem("tk_login") === "1") {
  $("#login").classList.add("hidden");
  $("#app").classList.remove("hidden");
  $("#userBadge").textContent = "admin";
  renderAll();
}
