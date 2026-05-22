# TIF-13 ⚽ Football Game Frontend

React + TypeScript + Three.js ile yapılmış, PES 13'e benzer 3D futbol oyunu frontend'i.

## 🎮 Özellikler

- ✅ 3D Futbol Sahası (Three.js)
- ✅ Oyuncu Modelleri ve Animasyonları
- ✅ Takım Yönetim Sistemi
- ✅ Transfer Pazarı
- ✅ Skor Tahtası ve Oyun Süresi HUD'u
- ✅ Ana Menü
- ✅ State Management (Zustand)

## 🚀 Başlangıç

### Gereksinimler
- Node.js 16+
- npm veya yarn

### Kurulum

```bash
# Depoyu klonla
git clone https://github.com/Caganakirmak/tif-13.git
cd tif-13

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm start
```

Browser'da `http://localhost:3000` adresine git.

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── GamePitch.tsx       # Ana oyun ekranı (3D görünüm)
│   ├── GamePitch.css
│   ├── TeamManager.tsx     # Takım yönetimi
│   ├── TeamManager.css
│   ├── TransferMarket.tsx  # Transfer pazarı
│   ├── TransferMarket.css
│   ├── MainMenu.tsx        # Ana menü
│   └── MainMenu.css
├── scenes/
│   └── stadium.ts          # Three.js sahası, oyuncu, top
├── store/
│   └── gameStore.ts        # Zustand state management
├── types/
│   └── game.ts             # TypeScript interfaces
├── App.tsx                 # Ana component
└── index.tsx               # Entry point
```

## 🎮 Menü Seçenekleri

1. **🎮 Maç Oyna** - 3D futbol sahası ile oyun
2. **👥 Takım Yönetimi** - Takım ve oyuncu yönetimi
3. **💰 Transfer Pazarı** - Oyuncu alım-satım

## 🛠️ Teknolojiler

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Three.js** - 3D Rendering
- **Zustand** - State Management
- **CSS3** - Styling

## 📝 Mock Data

Şu anda mock veriler kullanılıyor:
- Galatasaray vs Fenerbahçe
- Ronaldo, Messi, Neuer gibi gerçek futbolcular

## 🎯 Gelecek Özellikler

- [ ] Oyuncu hareketi ve kontrolleri
- [ ] Gerçek maç simülasyonu
- [ ] Multiplayer desteği
- [ ] Daha fazla takım ve oyuncu
- [ ] Turnuva modu
- [ ] Ses efektleri ve müzik
- [ ] Backend API entegrasyonu

## 📄 Lisans

MIT License - Ayrıntılar için LICENSE dosyasına bakın.

## 👨‍💻 Geliştirici

[@Caganakirmak](https://github.com/Caganakirmak)

---

**Keyifli oynamalar!** ⚽🎮
