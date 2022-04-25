graphql
Dilihat dari data Google Trend selama 5 tahun terakhir, popularitas GraphQL terus mengalami peningkatan, sehingga diprediksikan menjadi salah satu trend yang akan diminati di dunia programming pada tahun 2020. Oleh karenanya, ada baiknya jika Anda memahami cara kerja serta fungsi-fungsi di dalamnya.

GraphQL adalah bahasa query dan runtime sisi server untuk Application Programming Interfaces (API) yang memprioritaskan untuk memberi klien data sesuai dengan apa yang mereka minta. Pada intinya,  GraphQL merupakan bahasa untuk query database dari aplikasi sisi klien. Di backend, GraphQL dapat akan menspesifikasikan kepada API bagaimana data disajikan kepada klien.

Pada awalnya, bahasa query ini dikembangkan oleh Facebook di tahun 2012 dan digunakan secara internal untuk aplikasi mobile mereka, namun saat ini sudah banyak digunakan untuk produksi perusahaan-perusahaan besar lain seperti GitHub, Yelp, dan lain-lain.

Bahasa ini juga dirancang untuk membuat API menjadi lebih cepat, fleksibel serta rama bagi pengembang. Sebagai alternatif REST, GraphQL memungkinkan pengembang untuk bisa membuat permintaan yang menarik data dari berbagai sumber data dalam satu panggilan API.

Selain itu,  pengelola API juga akan mendapatt fleksibilitas untuk bisa menambah dan mengurangi bidang tanpa harus mempengaruhi query yang ada. Pengembang juga dapat membangun API dengan metode apa pun yang mereka inginkan.

Terdapat 3 karakteristik utama di dalamnya, yaitu:

Memungkinkan klien untuk menentukan data yang dibutuhkan secara spesifik.
Mudah untuk mengumpulkan data dari berbagai sumber.
Menggunakan GraphQL type system untuk menggambarkan data.

Keuntungan Menggunakan GraphQL
Tipe data akan terdefinisi dengan baik sehingga dapat mengurangi miskomunikasi antara klien dan server.
Memungkinkan API aplikasi untuk berkembang tanpa memecah kueri yang ada.
Memiliki banyak ekstensi yang bersifat open source sehingga beberapa fitur yang tidak tersedia dapat ditambahkan.
Bersifat introspective. Klien dapat melakukan permintaan list tipe data yang tersedia sehingga sangat ideal untuk auto-generating documentation.
Klien mendapat apa yang mereka minta tanpa over fetching atau menerima lebih banyak data dari yang dibutuhkan.


1. One-To-One (1-1)

Mempunyai pengertian "Setiap baris data pada tabel pertama dihubungkan hanya ke satu baris data pada tabel ke dua". Contohnya : relasi antara tabel guru dan siswa. Satu baris guru hanya berhubungan dengan satu baris siswa begitu juga sebaliknya.

2. One-To-Many (1-N)

Mempunyai pengertian "Setiap baris data dari tabel pertama dapat dihubungkan ke satu baris atau lebih data pada tabel ke dua". Contohnya : relasi pengambilan mata kuliah antara tabel mahasiswa dan tabel mata kuliah . Satu baris mahasiswa atau satu mahasasiswa bisa berhubungan dengan satu baris atau lebih mata kuliah.


3. MANY TO ONE (Banyak ke Satu)
Relasi di bawah menggambarkan bahwa untuk setiap entitas di himpunan entitas A (Mahasiswa) berpasangan dengan maksimal 1 entitas di himpunan entitas B (Mata Kuliah). Asumsikan bahwa untuk 1 mata kuliah dapat di kontrak oleh banyak mahasiswa.
 Dari A (Mahasiswa) ke B (Mata Kuliah) kardinalitasnya maksimal adalah 1, dan dari B (Mata Kuliah) ke A (Mahasiswa) kardinalitasnya maksimal adalah banyak. Oleh karena itu relasi ini berkardinalitas banyak ke 1.
