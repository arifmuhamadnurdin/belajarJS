/*
BEGIN

READ "angka" with value random number start from 1 until 5
SWITCH expression of "angka"
CASE expression of number 1
DISPLAY "Coba lagi ya"
BREAK
CASE expression of number 2
DISPLAY "selamat kamu mendapat kupon sebanyak 5"
BREAK
CASE expression of number 3
DISPLAY "selamat kamu mendapatkan kupon sebanyak 15"
BREAK
CASE expression of number 4
DISPLAY "selamat kamu mendapat kupon sebanyak 50"
BREAK
CASE expression of number 5
DISPLAY "WOW, kamu menang jackpot! Selamat!!"
DEFAULT DISPLAY "I love you"


END

*/

var angka = 5

switch (angka) {
    case 1:
        console.log('Coba lagi ya')
        break;
    case 2:
        console.log('selamat kamu mendapat kupon sebanyak 5')
        break;
    case 3:
        console.log('selamat kamu mendapat kupon sebanyak 15')
        break;
    case 4:
        console.log('selamat kamu mendapat kupon sebanyak 50')
        break;
    case 5:
        console.log('WOW, kamu menang jackpot! Selamat!!')
        break;
    default:
        console.log('I love you')
        break;
}