halaman routing tersdiri dari
1. home
2. dashboard
3. aboute


library yang sangat familiar adalah react-router dan reach/router. Sebenernya yang dipakai untuk routing di React biasanya react-router-dom anak dari react-router, yang mana selain react-router-dom juga terdapat react-router-native yang bisa digunakan untuk development aplikasi Android dan iOS.

Disana kita mengimport BrowserRouter, Route, dan Switch yang akan kita gunakan dari react-router-dom, kemudian kita import component yang akan dijadikan halaman.

Karena component App dijadikan router, maka component ini akan merender halaman yang path di browser sama dengan path yang ada di route. Jika tidak ada path yang sesuai, maka component yang akan dirender yaitu component Notfound.

BrowserRouter digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk mensingkronasi UI dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang.

Switch digunakan untuk membungkus node Route, yang mana hanya akan merender satu Route saat pathnya cocok dengan URL.

Route digunakan untuk merender UI saat path cocok dengan URL saat ini. Di dalam Component Route ini kita menggunakan exact, yang mana bertugas untuk memastikan Route hanya merender component yang memiliki path dan location.pathname yang cocok. Jika tidak ada yang cocok, maka Route yang akan dirender yaitu Route terakhir dengan component Notfound.

Setelah itu kita menuju ke halaman utama, yaitu halaman Home. Di halaman Home ini, hanya ada tulisan informasi bahwa sekarang aplikasi berada di halaman Home. Lalu ada sebuah link untuk menuju ke halaman Profil.