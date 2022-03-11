var a = 5;
let b = `kampus merdeka`;
const nama = `budi`;
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];
let getLengkap_arr = lengkap_arr[2];

function perkenalan(){ 
    let asal = `indonesia`;
    return console.log(
        `Perkenalkan nama saya ${nama} nomor urut ${a} sekarang saya sedang mengikuti ${b} berasal dari ${asal}`
    );
}

if(terdaftar === true){
    console.log(`${getLengkap_arr} terdaftar sebagai kegiatan kampus merdeka`);
} else{
    console.log(`${getLengkap_arr} Tidak terdaftar di kampus merdeka`)
}

//  var a = b.toString;
// nama = b;

console.log(`array = ${nama}`);
console.log(`a adalah  = ${b}`);
console.log(`b adalah = ${b}`);