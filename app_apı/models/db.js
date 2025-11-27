var mongoose = require('mongoose'); // 'mongose' yerine 'mongoose' yaptık

// Tırnak işaretleri düzeltildi ve gereksiz tekrarlar silindi
var dbURI = 'mongodb+srv://MertAcar56:l2311Mert@cluster0.7kol0ty.mongodb.net/?appName=Cluster0';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongodb ' + dbURI + ' adresine bağlandı');
    // Bağlantı başarılı olunca veri ekleme fonksiyonunu çalıştır:
    seedData(); 
});

mongoose.connection.on('error', function (err) {
    console.log('Mongodb bağlantı hatası: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongodb bağlantısı kesildi');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongodb bağlantısı uygulama sonlandırılarak kapatıldı');
        process.exit(0);
    });
});

require('./venue'); // Şemanızın (Modelin) bulunduğu dosya yolu doğru olmalı

async function seedData() {
    try {
        // Model ismini buraya yazdığınız şema ismine göre doğru çağırmalısınız.
        // Genelde model dosyasında 'Venue' olarak tanımlanır.
        const Venue = mongoose.model('Venue'); 
        
        const newVenues = [
            {
                name: "Mado",
                address: "Iyaş Park AVM Girişi, Isparta",
                rating: 3,
                foodanddrink: ["Dondurma", "Baklava", "Çay"],
                coords: [37.7855, 30.5585],
                openingTimes: [{ days: "Pzt-Paz", opening: "09:00", closing: "23:00", closed: false }]
            },
            {
                name: "Simit Sarayı",
                address: "Üniversite Yolu, Isparta",
                rating: 4,
                foodanddrink: ["Simit", "Çay", "Portakal Suyu"],
                coords: [37.8300, 30.5200],
                openingTimes: [{ days: "Pzt-Cum", opening: "07:00", closing: "20:00", closed: false }]
            },
            {
                name: "Kahve Dünyası",
                address: "Centrum Garden, Isparta",
                rating: 5,
                foodanddrink: ["Türk Kahvesi", "Çikolata", "Mocha"],
                coords: [37.7838, 30.5568],
                openingTimes: [{ days: "Pzt-Paz", opening: "10:00", closing: "22:00", closed: false }]
            },
            {
                name: "Leman Kültür",
                address: "Kafeler Cad. Isparta",
                rating: 4,
                foodanddrink: ["Tost", "Bira", "Patates"],
                coords: [37.7710, 30.5510],
                openingTimes: [{ days: "Pzt-Paz", opening: "11:00", closing: "01:00", closed: false }]
            },
            {
                name: "Antre Gurme",
                address: "Sanayi Mahallesi, Isparta",
                rating: 5,
                foodanddrink: ["Steak", "Şarap", "Salata"],
                coords: [37.7950, 30.5700],
                openingTimes: [{ days: "Sal-Paz", opening: "12:00", closing: "23:00", closed: false }]
            }
        ];

        console.log("Mekan kontrolü ve ekleme işlemi başlıyor...");
        
        for (const venueData of newVenues) {
            const exists = await Venue.findOne({ name: venueData.name });

            if (!exists) {
                await Venue.create(venueData);
                console.log(`EKLENDİ: ${venueData.name}`);
            } else {
                console.log(`ATLANDI (Zaten Var): ${venueData.name}`);
            }
        }
        console.log("Veritabanı kontrol işlemi tamamlandı.");

    } catch (err) {
        console.log("Veri ekleme hatası:", err);
    }
}