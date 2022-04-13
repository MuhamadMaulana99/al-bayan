Apa Itu React Hooks?
React Hooks diperkenalkan oleh React Team untuk melakukan state management dan side effects di dalam function component. Dengan Hooks kita bisa menggunakan state dan lifecycle methods tanpa harus menulis class di React.
Bagaimana cara menggunakan React Hooks?
Oke langsung saja kita lihat bagaimana cara kerja state dan lifecycle di dalam functional component menggunakan State Hook dan Effect Hook, dan bagaimana perbedaannya dengan menggunakan state dan lifecycle di dalam class component.
Dengan React Hooks, kita bisa membuat component yang memiliki fungsional yang sama seperti diatas tanpa harus menggunakan class, namun tetap bisa menggunakan state. 

Kita bisa membandingkan component di atas yang ditulis menggunakan class dan function, keduanya memiliki output yang sama. Namun functional component terlihat lebih simpel dan elegan daripada class component.
Pada contoh diatas, kita menggunakan useState. useState adalah sebuah Hook, dan akan mengembalikan nilai dari state (pada contoh diatas: name) dan fungsi yang bisa kita gunakan untuk mengubah nilai tersebut (setName). Fungsi setName disini mirip dengan cara kerja this.setState.
Berbeda dengan this.state, state di dalam useState tidak harus berbentuk object. Dan kita bisa menggunakan lebih dari satu useState di dalam satu component

Menggunakan useEffect
Di dalam component biasanya kita melakukan “side effects” seperti data fetching, subscription, atau berinteraksi dengan DOM. Di dalam class component, kita bisa melakukan hal tersebut di dalam lifecycle methods (e.g componentWillMount, componentDidMount, componentWillUnmount). Bagaimana jika kita mau melakukannya di dalam functional component? kita bisa menggunakan useEffect.

Ketika component di atas di-render, componentDidMount akan mengatur judul dokumen berdasarkan nilai state name, agar judul dokumen juga berubah ketika kita mengedit state name, maka kita harus menggunakan componentDidUpdate.

Sama seperti useState, useEffect juga bisa digunakan lebih dari satu kali di dalam satu component untuk melakukan side effect yang berbeda. Pada contoh diatas, karena event resize tidak ada kaitan dengan menentukan judul dokumen maka kita membuat useEffect yang baru untuk melakukan subscribe dan unsubscribe event resize. Untuk melakukan unsubscribe di dalam useEffect, bisa dilakukan dengan me-return function, dan hasilnya akan sama seperti yang dilakukan componentWillUnmount.