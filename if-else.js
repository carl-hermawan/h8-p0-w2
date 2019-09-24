var nama = '';
var peran = '';
var template = 'Halo ' + peran + ' ' + nama + ", ";

if (nama === '') {
	console.log("Nama harus diisi!");
}	else if (nama !== '' && peran === ''){
		console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
}	else if (nama !== ''){
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    if (peran === 'Ksatria'){
      console.log(template + "kamu dapat menyerang dengan senjatamu!");
    }  else if (peran === 'Tabib'){
      console.log(template + "kamu akan membantu temanmu yang terluka.");
    } else if (peran === "Penyihir"){
      console.log(template + "ciptakan keajaiban yang membantu kemenanganmu!")
    }
} 