document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate");
    const hasilSurat = document.getElementById("hasil-surat");
    const namaInput = document.getElementById("nama");

    // Buat objek atau array pasangan nama dan isi surat
    const dataSurat = {
        "Randy": "Salam super. Langsung ke main topic, saya bersyukur karena telah diajak retreat perkantas padahal bukan a part of perkantas itself, tapi yah namanya juga hidup mesti di gapapa in. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya cuma dua, ayam pecel dada sama es teh anget. Harapannya semoga anda survive dunia kerja, gaji gede, rumah gede, mobil gede. Makasih banyak brok atas pelayanannya.",
        
        "Fanny": "Halo kak, aku rio zodiaknya leo. Saya bersyukur kakak hadir di retreat ini tapi kalo ditanya alesannya apa saya juga bingung jawabnya hehe. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap semangat dan kasih yang terbaik. Harapan saya semoga Tuhan menyertai kakak apapun yang terjadi. Terima kasih banyak kak atas pelayanannya :>.",
        
        "Febryan": "puh sepuh ajarin dong puh. Langsung ke main topic, saya bersyukur atas kehadiran sepuh disini karena jujurly yang saya kenal cuma dikit. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap menyerah jangan semangat, harapan saya semoga yang disemogakan tersemogakan. Makasih banyak atas pelayanannya",
        
        "Wilsa": "Halo kak. Saya bersyukur kakak hadir di retreat ini tapi kalo ditanya alesannya apa saya juga bingung jawabnya hehe. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap semangat dan kasih yang terbaik. Harapan saya semoga Tuhan menyertai kakak apapun yang terjadi. Terima kasih banyak kak atas pelayanannya. :>",
        
        "Daniel": "Halo bro. Gua bersyukur lu bisa hadir di retreat ini tapi kalo ditanya alesannya apa gua juga bingung jawabnya wkwkw. Unek-unek yang gua sampaikan gaada jadi langsung next. Pesan gua tetap semangat dan kasih yang terbaik. Harapan gua semoga Tuhan menyertai lu apapun yang terjadi. Semangat melayani brok.",
        
        "Nicho": "Halo bro. Gua bersyukur lu bisa hadir di retreat ini tapi kalo ditanya alesannya apa gua juga bingung jawabnya wkwkw. Unek-unek yang gua sampaikan gaada jadi langsung next. Pesan gua tetap semangat dan kasih yang terbaik. Harapan gua semoga Tuhan menyertai lu apapun yang terjadi. Semangat melayani brok.",
        
        "Gloria": "Halo Gloria. Saya bersyukur Gloria hadir di retreat ini tapi kalo ditanya alesannya apa saya juga bingung jawabnya hehe. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap semangat dan kasih yang terbaik. Harapan saya semoga Tuhan menyertai Gloria apapun yang terjadi. Semangat melayani Gloria.",
        
        "Pije": "Halo yang mulia baginda bang Pije. Saya bersyukur atas kehadiran yang mulia disini karena saya dapat berbincang-bincang sehingga mendapat petuah dan insight baru. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap berkarya dengan ide-ide yang luar biasa. Harapan saya semoga bisa tetap enjoy life ditengah hiruk pikuk kerasnya jakarta. Terima kasih banyak yang mulia atas pelayanannya.",
        
        "Rachel": "Halo kak, saya rio umur 20 tahun. Saya bersyukur atas kehadiran kakak tapi kalo ditanya alesannya apa saya juga bingung jawabnya hehe. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap semangat dan kasih yang terbaik. Harapan saya semoga Tuhan menyertai kakak apapun yang terjadi. Terima kasih banyak kak atas pelayanannya :>.",
        
        "bang andreas": "Halo bang. Saya bersyukur atas kehadiran bang andreas biarpun dateng malem2 tapi tetep mantep. Unek-unek yang saya sampaikan gaada jadi langsung next. Pesan saya tetap semangat bang biar jadi berkat dimanapun. Harapan saya semoga Tuhan menyertai disegala kondisi. Terima kasih banyak bang atas pelayanannya.",
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
