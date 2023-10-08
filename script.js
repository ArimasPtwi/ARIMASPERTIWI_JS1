//1. IF, ELSE, NESTED IF
//IF ELSE
const id = 100;

if (id == 100) {
    console.log('Benar');
} else {
    console.log('Salah');
}

//NESTED IF
let nilai = 75;

if (nilai >= 65) {
    console.log("Anda lulus.");

    if (nilai >= 90) {
        console.log("Anda mendapat nilai A.");
    } else if (nilai >= 80) {
        console.log("Anda mendapat nilai B.");
    } else {
        console.log("Anda mendapat nilai C.");
    }
} else {
    console.log("Anda tidak lulus.");
}



//2. SWITCH CASE
const fruit = 'apple';

switch (fruit) {
    case 'apple':
        console.log('fruit is apple');
        break;
    case 'banana':
        console.log('fruit is kiwi');
        break;
    default:
        console.log('other');
        break;
}


//3. FOR STATEMENT
// Looping dengan penghitung
for (let i = 0; i < 10; i++) {
    console.log("Iterasi ke-" + (i + 1));
}

//Looping dengan elemen-elemen dalam sebuah array
const fruits = ["Apel", "Pisang", "Jeruk", "Nanas"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Buah ke-" + (i + 1) + ": " + fruits[i]);
}


//4. WHILE, DO WHILE
// WHILE
let x = 1
while (x <= 5) {
    console.log('data x ke - ', x);
    x++;
}

//DO WHILE
let y = 1
do {
    console.log('data y ke -', y);
    y++;
} while (y <= 5)


//5. FUNCTION
//FUNGSI TANPA PARAMETER
function pembuka() {
    console.log("Halo, Aku Arimas Pertiwi dari Program Web Development👋🏻");
}
// Memanggil fungsi
pembuka();


// FUNGSI DENGAN PARAMETER
function tambahkan(angka1, angka2) {
    return angka1 + angka2;
}
// Memanggil fungsi 
const hasil = tambahkan(100, 3);
console.log("Hasil penambahan: " + hasil);