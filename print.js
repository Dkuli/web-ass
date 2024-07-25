$(document).ready(function() {
    // Fungsi untuk menangani klik pada tombol "bayar"
    $("#bayar").click(function() {
        console.log("Tombol 'bayar' ditekan!");
        var kiriID = $("#kiri").attr("id");
        console.log("ID kiri:", kiriID);

       
        window.print();
    });

    
});
