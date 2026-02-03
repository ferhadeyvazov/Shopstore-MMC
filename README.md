# 🛍️ Shopstore MMC

<div align="center">

![Shopstore MMC Banner](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWPBGKynL0Kfjp4rSTPasJFFVLX8YSt_rAA&s)

<p>Apple LLC-nin rəsmi satıcıları üçün hazırlanmış modern bir onlayn mağaza platformu.</p>

<a href="https://testshopstore.netlify.app/" target="_blank">🌐 Canlı Demo</a> &nbsp;|&nbsp;
<a href="https://github.com/ferhadeyvazov/Shopstore-MMC">📁 GitHub Repo</a>

</div>

---

## 📋 Layihə Haqqında

**Shopstore MMC** — Apple LLC-nin rəsmi reseller'ı olan Shopstore MMC üçün hazırlanmış, tam cavab verir, responsive bir e-commerce veb sayt layihesidir. Sayt Azerbaycan dilli interfeys ilə Apple, Samsung, Xiaomi kimi brend məhsulların onlayn satışını teşkilat edirdi.

Layiha **HTML, CSS, JavaScript** texnoloyiları ilə sıfırdan quruluşu, backend asılılığı olmadan, yalnız frontend əsasında işleyen bir sistem hesab edildikdir.

---

## ✨ Əsas Xüsusiyyətlər

| Xüsusiyyət | Təsvir |
|---|---|
| 🏷️ **Məhsul Kataloqu** | Apple, Samsung, Xiaomi və digər brend məhsulların categoriya üzrə göstərilmesi |
| 🔥 **Günün Endirimi** | CountDown timer ilə vaxt sınırlandırılmış qiymat endirimli məhsullar |
| 📈 **Satış Liderləri** | En çox satılan məhsullar bölümü |
| 🛒 **Səbət Sistemi** | Məhsul əlavə/silmə və sifariş jurnalı |
| 🔄 **Müqayisə Bölümü** | Məhsulları bir-birilə müqayisə etmə imkanı |
| 📰 **Xəbərlər & Kampaniyalar** | Aktual xəbərlər və kampaniya bildirimları |
| 📱 **Responsive Dizayn** | Tam uyğun mobil, planşet və desktop görünüş |
| 🌐 **Dil Dəyişimi** | Azerbaycan, İngilis və Rusca dil dəstəyi |
| 🔔 **Abunə Sistemi** | E-mail ilə bülten abunəliyi |
| 📲 **App Store Linki** | Apple, Google, Huawei app mağazalarına yönləndirme |

---

## 📁 Proyekt Struktur

```
Shopstore-MMC/
│
├── .vscode/                 # VS Code konfiqurasiyanı
│   └── settings.json
│
├── Fonts/                   # Özel shrift fayllara
│
├── css/                     # Stillaşma fayllara
│   └── *.css
│
├── data/                    # Məhsul danışıq (JSON/JS verileri)
│
├── frameworks/              # 3rd-party kitabxanalar (Swiper, vb.)
│
├── img/                     # Bütün görüntü varlıqları
│   ├── Apple mehsullari/
│   ├── Samsung mehsullari/
│   ├── Xiaomi mehsullari/
│   ├── gameImg/
│   ├── satisLiderleri/
│   ├── swiperImg/
│   ├── Logo/
│   └── footer_app/
│
├── js/                      # JavaScript ssenari fayllara
│   └── *.js
│
├── pages/                   # Daxili sahifə qovluqları
│   ├── basket/              # Səbət sahifəsi
│   ├── kampaniyalar/        # Kampaniyalar sahifəsi
│   ├── loginandregister/    # Giriş / Qeydiyyat sahifəsi
│   ├── magazalarimiz/       # Mağazalar haritəsi
│   ├── muqayise/            # Müqayisə sahifəsi
│   ├── news/                # Xəbərlər sahifəsi
│   ├── nomreler/            # Nömrə / Kontakt sahifəsi
│   ├── smartfonlar/         # Smartfonlar / Outlet
│   └── deliveryandpayments/ # Çatdırılma və ödəniş
│
└── index.html               # Ana (əsas) sahifə
```

---

## 🛠️ İstifadə Olunan Texnologiyalar

<div align="center">

| Texnoloji | Nə üçün |
|---|---|
| **HTML5** | Sahifə quruluşu və semantik markup |
| **CSS3** | Stil, layout, animasiya və responsive dizayn |
| **JavaScript (ES6+)** | DOM idarəsi, interaktivlik və dinamik məlumat |
| **SCSS / Less** | CSS preprocessor (kiçik miqdar) |
| **Swiper.js** | Ana banner slider / karusel |
| **Netlify** | Hosting və deployment |

**Dil Nisbəti (GitHub):**

- HTML — 58.0%
- JavaScript — 26.7%
- CSS — 13.8%
- SCSS — 0.8%
- Less — 0.7%

</div>

---

## 🚀 Proyekti Qurmaq və Çalışdırmaq

### 1. Repozitoru Klonlayın

```bash
git clone https://github.com/ferhadeyvazov/Shopstore-MMC.git
cd Shopstore-MMC
```

### 2. Faylları Açın

Hər hansi bir backend server olmadığından, layiha yalnız statik HTML/CSS/JS fayllardan ibarətdir. Siz onu birbaşa brauzerde aça bilərsiniz:

```
index.html   ←  Bu faylı brauzerde açın
```

> 💡 **Eyni origin problem olsun deyə** — IDE-dən `Live Server` uzadıcı (VS Code) ya da `http-server` npm paketi ilə lokal server çalışdırmaq tövsiyə edilir.

### 3. VS Code ilə (Tövsiyə Edilir)

```bash
code .
```

Sonra `index.html` faylını sağ tıklayaraq → **Open with Live Server** seçin.

---

## 📱 Sahifə Xəritəsi

| Sahifə | Yol |
|---|---|
| Ana Səhifə | `/index.html` |
| Səbət | `/pages/basket/basket` |
| Kampaniyalar | `/pages/kampaniyalar/campaign` |
| Xəbərlər | `/pages/news/news` |
| Müqayisə | `/pages/muqayise/muqayise` |
| Giriş / Qeydiyyat | `/pages/loginandregister/login-register` |
| Mağazalar | `/pages/magazalarimiz/stores` |
| Smartfonlar / Outlet | `/pages/smartfonlar/telefonlar` |
| Nömrə / Kontakt | `/pages/nomreler/nomreler` |
| Çatdırılma & Ödəniş | `/pages/deliveryandpayments/deliveryandpayment` |

---

## 🌍 Deploy Etmək (Netlify)

1. [netlify.com](https://netlify.com) saytında hesab yaradın.
2. GitHub repozitorunu bağlayın.
3. **Publish directory** olaraq ana qovluqu (`/`) seçin.
4. **Deploy** düymə sinirlayın.

> Sayt artıq `testshopstore.netlify.app` ünvanında yayımlanmış vəiyyətdə evar.

---

## 📞 Bizə Müraciət Etmək

| Kanal | Əlaqə |
|---|---|
| 📞 Qaynar Xətt | `*6777` |
| 📱 Mobil | +994 55 777-67-77 / +994 70 777-67-77 |
| ☎️ Telefon | +994 12 599-67-77 |
| 💬 WhatsApp | [+994 55 777-67-77](https://wa.me/994557776777) |
| 📲 Telegram | [+994 55 777-67-77](https://t.me/994557776777) |
| 📘 Facebook | [shopstoreba](https://www.facebook.com/shopstoreba) |
| 📸 Instagram | [shopstore.az](https://www.instagram.com/shopstore.az/) |

---

## 👨‍💻 Müəllif

Bu onlayn mağaza **[Fərhad Eyvazov](https://ferhaddev.netlify.app/)** tərəfindən hazırlanmışdır.

---

## 📄 Lisenziya

Bu layihə şəxsi / portfolio layihə hesab edilməkdədir. Əlavə lisenziya sualları üçün müəllifə müraciət edə bilərsiniz.

---

<div align="center">

© 2024 Shopstore MMC — Bütün hüquqları qorunur.

</div>
