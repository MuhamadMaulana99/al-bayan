
1. State
State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa di akses dari component lain. Component dapat merubah statenya sendiri.

Cara kerja component ini sederhana :
default valuenya adalah 0.
ada tombol minus dan plus untuk mengubah value nya.

Mari kita kupas satu persatu:
Inisialisi state.
Pada beberapa contoh inisialisasi di buat dengan menggunakan constructor(). Tapi saya lebih memilih style ini. karena lebih simple
Update State.
Untuk merubah state gunakan perintah this.setState(). Ketika state berubah secara otomatis component akan di render ulang. method disini menggunakan arrow function untuk menghindari problem javascript bind.
Read Component State.
Untuk membaca state gunakan perintah this.state.keyName
Call Method.
Semua perubahan state dilakukan di dalam method render()

Pengertian Props
Prop singkatan dari Property , Property yaitu data-data yang ada di dalam class, dan kebalikan dari state, yaitu  bisa diakses dari Luar

2. Prop
Prop singkatan dari Property. Ini cukup simple, apalagi jika anda sudah terbiasa dengan HTML, ini mirip seperti atrribute pada tag HTML. Dalam pembuatannya, jika dalam functional component maka prop ini adalah parameternya. Jika componentnya dalam bentuk class maka prop ini property dari class nya yang di akses melalui keyword ‘this’

Berikut beberapa poin penting dalam Prop
Prop itu read-only. Perhatikan contoh function ComponentA diatas, function ini hanya bisa membaca parameter props tetapi tidak bisa merubahnya. Yang bisa merubahnya adalah pemanggilnya yaitu <ComponentA />
Prop umumnya digunakan untuk komunikasi data component dari parent komponent ke child component.