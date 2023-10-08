//IF ELSE
const id = 100;

if (id==100){
    console.log('Benar');
}else{
    console.log('Salah')
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