$(function() {
    $("#header").load("header.html");
});

$(function() {
    $("#footer").load("footer.html");
});

// <!-- Slim Scroll Scripts -->
$(document).ready(function () {
    
    // Add slimscroll to element
    $('.scroll_content').slimscroll({
        height: '500px'
    })

});

// <!-- Page-Level Scripts -->
$(document).ready(function(){
    $('.dataTables-example').DataTable({
        pageLength: 5,
        responsive: true,
        dom: '<"html5buttons"B>lTfgitp',
        buttons: [
        { extend: 'copy'},
        {extend: 'csv'},
        {extend: 'excel', title: 'ExampleFile'},
        {extend: 'pdf', title: 'ExampleFile'},

        {extend: 'print',
        customize: function (win){
            $(win.document.body).addClass('white-bg');
            $(win.document.body).css('font-size', '10px');

            $(win.document.body).find('table')
            .addClass('compact')
            .css('font-size', 'inherit');
        }
        }
        ]

    });

});




var request = new XMLHttpRequest();
        request.open('GET', 'https://mocki.io/v1/39a8b06c-1a09-474e-b242-4ad5bd467ef1', true);
        request.onload = function () {
            var peserta = JSON.parse(this.response);
            console.log(peserta);

            document.getElementById('namaPeserta').innerHTML=peserta[0].name;
            document.getElementById('birthday').innerHTML=peserta[0].birthday;
            document.getElementById('email').innerHTML=peserta[0].email;
            document.getElementById('address').innerHTML=peserta[0].address;
            document.getElementById('phone').innerHTML=peserta[0].phone;
            document.getElementById('recommendation').innerHTML=peserta[0].recommendation;
        }

        request.send();
