var mongoose = require('mongoose'); // 'mongose' yerine 'mongoose' yaptık

// Tırnak işaretleri düzeltildi ve gereksiz tekrarlar silindi
//var dbURI = 'mongodb+srv://MertAcar56:l2311Mert@cluster0.7kol0ty.mongodb.net/?appName=Cluster0';
var dbURI = 'mongodb://localhost/mekanbul';  
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongodb ' + dbURI + ' adresine bağlandı');
    // Bağlantı başarılı olunca veri ekleme fonksiyonunu çalıştır:
    
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

