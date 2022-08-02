function tampil(){
    // membuat type datanya
    
    var a1 = "";
    var a2 = "";
    var a3 = "";

    var mahasiswa = []
    var pembungkus= []
        
    let con = true;

    // membuat pengulangan dalam penginputan
    while ( con === true) {
        // menginput datadari user
        a1 = prompt("nim")
        a2 = prompt("nama")
        a3 = prompt("jurusan")

        // memaskan inputan user ke dalam array pertama
        mahasiswa = [a1, a2, a3]
        // memasukan inputan user ke array pembungkus
        pembungkus.push(mahasiswa)
        
        // Menanyakan apakah mau berulang lagi atau tidak
        con =confirm('apakah anda sudah selesai?');
        }
        
        // Display
        console.log(pembungkus)
        pembungkus.forEach(function(e) {
                console.log(mahasiswa)
            });
}
