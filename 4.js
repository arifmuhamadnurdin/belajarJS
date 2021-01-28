/*
PSEUDOCODE

BEGIN

READ "nama" with value "nama murid"
READ "nilai" with value "inputan manual"
READ "absen" with value "inputan manual"

IF "nilai" larger than 100 OR "nilai" smaller than 0 OR "absen" smaller than 0
THEN DISPLAY equal to "Aduh kok begini sih"

ELSE IF "nilai" larger equal to 70 AND "absen" smaller than 5
THEN DISPLAY equal to "nama murid" "Lulus"

ELSE DISPLAY equal to "nama murid" "Tidak Lulus"

END

*/

var nama = 'arif'
var nilai = 90
var absen = 0

if (nilai > 100 || nilai < 0 || absen < 0) {
    console.log('aduh kok gini sih')
}else if (nilai >= 70 && absen < 5) {
    console.log(nama,'anda lulus')
}else{
    console.log(nama, 'anda tidak lulus')
}