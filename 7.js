// looping sebanyak 10x
// cek angka nya bila ganjil munculkan 
// "loop 1 adalah Ganjil"
// "loop 2 adalah Genap"
// dst....

console.log('GANJIL')
for (let i = 1; i <= 10; i++){
  if(i % 2 != 0)
  console.log(i + ' ganjil')
}


console.log('GENAP')
for (let i = 2; i <= 10; i++){
  if(i% 2 == 0)
  console.log(i + ' genap')
}
