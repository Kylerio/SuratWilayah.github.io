document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate");
    const hasilSurat = document.getElementById("hasil-surat");
    const namaInput = document.getElementById("nama");

    // Buat objek atau array pasangan nama dan isi surat
    const dataSurat = {
        "Randy": "Salam super. Langsung ke main topic, saya bersyukur karena telah diajak retreat perkantas padahal bukan a part of perkantas itself, tapi yah namanya juga hidup mesti di gapapa in. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya cuma dua, ayam pecel dada sama es teh anget. Harapannya semoga survive dunia kerja, gaji gede, rumah gede, mobil gede. Makasih",
        
        "Fanny": "Halo kak, aku rio zodiaknya leo. Saya bersyukur kakak hadir di retreat ini tapi kalo ditanya alesannya apa saya juga bingung jawabnya hehe. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap semangat dan kasih yang terbaik. Harapan saya semoga Tuhan menyertai kakak apapun yang terjadi.",
        
        "Febryan": "puh sepuh ajarin dong puh. Langsung ke main topic, saya bersyukur atas kehadiran sepuh disini karena jujurly yang saya kenal cuma dikit. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap menyerah jangan semangat, harapan saya semoga yang disemogakan tersemogakan. Makasih",
        
        "Wilsa": "Halo kak. Saya bersyukur kakak hadir di retreat ini tapi kalo ditanya alesannya apa saya juga bingung jawabnya hehe. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap semangat dan kasih yang terbaik. Harapan saya semoga Tuhan menyertai kakak apapun yang terjadi.",
        
        "Daniel": "Halo bro. Gua bersyukur lu bisa hadir di retreat ini tapi kalo ditanya alesannya apa gua juga bingung jawabnya wkwkw. Unek-unek yang gua sampaikan gaada jadi langsung next. Pesan gua tetap semangat dan kasih yang terbaik. Harapan gua semoga Tuhan menyertai lu apapun yang terjadi.",
        
        "Nicho": "Halo bro. Gua bersyukur lu bisa hadir di retreat ini tapi kalo ditanya alesannya apa gua juga bingung jawabnya wkwkw. Unek-unek yang gua sampaikan gaada jadi langsung next. Pesan gua tetap semangat dan kasih yang terbaik. Harapan gua semoga Tuhan menyertai lu apapun yang terjadi.",
        
        "Gloria": "Halo Gloria. Saya bersyukur Gloria hadir di retreat ini tapi kalo ditanya alesannya apa saya juga bingung jawabnya hehe. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap semangat dan kasih yang terbaik. Harapan saya semoga Tuhan menyertai Gloria apapun yang terjadi.",
        
        "Pije": "Halo yang mulia baginda bang Pije. Saya bersyukur atas kehadiran yang mulia disini karena saya dapat berbincang-bincang sehingga mendapat petuah dan insight baru. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap berkarya dengan ide-ide yang luar biasa. Harapan saya semoga bisa tetap enjoy life ditengah hiruk pikuk kerasnya jakarta",
        
        "Rachel": "Halo kak, saya rio umur 20 tahun. Saya bersyukur atas kehadiran kakak tapi kalo ditanya alesannya apa saya juga bingung jawabnya hehe. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap semangat dan kasih yang terbaik. Harapan saya semoga Tuhan menyertai kakak apapun yang terjadi.",
        
        "Axel": "namanya juga hidup. Saya bersyukur atas kehadiran anda karena meramaikan suasana. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetep semangat karna ya namanya juga idup. Harapan saya semoga hujan duit. Salam goyang nasi padang",
    };

    generateButton.addEventListener("click", function () {
        const nama = namaInput.value.trim();

        if (nama === "") {
            alert("Silakan masukkan nama Anda.");
        } else if (dataSurat.hasOwnProperty(nama)) {
            const surat = `${dataSurat[nama]}`;
            hasilSurat.textContent = surat;
        } else {
            alert("Nama tidak ditemukan.");
        }
    });
});
