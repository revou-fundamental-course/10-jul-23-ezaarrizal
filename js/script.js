//deklarasi variabel berdasarkan id yang terdapat pada file html
var berat = document.getElementById("berat");
var tinggi = document.getElementById("tinggi");
var pria = document.getElementById("pria");
var usia = document.getElementById("usia");
var wanita = document.getElementById("wanita");

//function perhitungan BMI
function perhitungan(){
    var inputBerat = Number(berat.value); //mengubah value dari variabel berat dari string ke number
    var inputTinggi = Number(tinggi.value)*1/100; // mengubah value dari variabel tinggi dari string ke number dan mengubah tinggi dari cm ke meter
    var bmi = (inputBerat/(inputTinggi*inputTinggi)); // melakukan perhitungan sesuai rumus BMI
    
    //membuat variabel untuk ditampilkan pada hasil
    var result = '';
    var tips1 = '';
    var tips2 = '';

    //percabangan yang mengelompokkan hasil sesuai dengan hasil perhitungan BMI 
    if(bmi<18.5){
        result = 'Kekurangan Berat Badan';
        tips1 = 'Cara terbaik untuk menambah berat badan adalah denhgan mengkonsumsi makanan yang kaya nutrisi dan berolahraga';
        tips2 = 'Jika Anda dikategori ini maka anda dianjurkan untuk menambah berat badan';
    }else if(18.5<=bmi&&bmi<=24.9){
        result = 'Normal(Ideal)';
        tips1 = 'Jaga Pola hidup Anda agar berat badan Anda tetap ideal';
        tips2 = 'Jika Anda dikategori ini maka Anda cukup mempertahankan pola hidup Anda';
    }else if(25<=bmi&&bmi<=29.9){
        result = 'Kelebihan Berat Badan';
        tips1 = 'Cara terbaik untuk menurunkan berat badan adalah mengatur kalor makanan yang dikonsumsi dan berolahraga';
        tips2 = 'Jika Anda dikategori ini maka Anda dianjurkan menurunkan berat badan';
    }else if(bmi>=30.0){
        result = 'Obesitas';
        tips1 = 'Cara terbaik untuk menurunkan berat badan adalah mengatur kalor makanan yang dikonsumsi dan berolahraga';
        tips2 = 'Jika Anda dikategori ini maka Anda dianjurkan menurunkan berat badan';
    }


//menggunakan querySelector untuk menuju pada id atau class yang sesuai pada html dan menampilkan hasil berdasarkan result, tips1 dan tips2
document.querySelector(".comment").innerHTML = `Anda <span id="comment">${result}</span>`;
document.querySelector(".tips1").innerHTML = `<span id="tips1">${tips1}</span>`;
document.querySelector(".tips2").innerHTML = `<span id="tips2">${tips2}</span>`;
//menampilkan hasil perhitungan pada id output dengan format dua angka di belakang koma
document.querySelector("#output").innerHTML = bmi.toFixed(2);
}

//function untuk button reset
function resetForm(){
    document.getElementById("formhitung").reset();
}


