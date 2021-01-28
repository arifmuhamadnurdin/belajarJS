/*
ALGORITMA

1. Jika poin antara 80 sampai 100 maka nilai adalah A
2. Jika poin antara 65 sampai 79 maka nilai adalah B
3. Jika poin antara 50 sampai 64 maka nilai adalah C
4. Jika poin antara 35 sampai 49 maka nilai adalah D
5. Jika poin antara 0 sampai 34 maka nilai adalah E
6. Jika poin kurang dari 0 dan lebih dari 100 maka nilai invalid
7. Selesai

*/

var poin = 34

if (poin >= 80 && poin <= 100) {
    console.log('Nilai A')
}else if (poin >= 65 && poin <= 79) {
    console.log('Nilai B')
}else if (poin >= 50 && poin <= 64) {
    console.log('Nilai C')
}else if (poin >= 35 && poin <= 49) {
    console.log('Nilai D')
}else if (poin >= 0 && poin <= 34) {
    console.log('Nilai E')
}else{
    console.log('Nilai Invalid')
}