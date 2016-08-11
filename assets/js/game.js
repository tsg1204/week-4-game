$(document).ready(function(){
    $('#titleYou').hide();
    $('#titleEnem').hide();
    $('#titleDef').hide();
    $('#yPowers').hide();
    $('#defPowers').hide();
    $('.characters').on("click", function(){
        var imgId = $(this).attr('id');
        console.log(imgId);
        $('.characters').remove();
        $('#titleFirst').remove();
        if (imgId =='heracles') {
            $("#attacker").append('<img src="assets/images/heracles.jpg"/>'); 
            $('#titleYou').show();
            $('#titleEnem').show();
            $('#enemies').append('<div id="achillies2" class="enemies"><img src="assets/images/achilles.jpg"/></div>');

            $('#enemies').append('<div id="perseus2"class="enemies"><img src="assets/images/perseus.jpg"/></div>');

            $('#enemies').append('<div id="zeus2" class="enemies"><img src="assets/images/zeus.jpg"/></div>');

        };
        if (imgId == 'perseus') {
            $("#attacker").append('<img src="assets/images/perseus.jpg"/>'); 
            $('#titleYou').show();
            $('#titleEnem').show();
            $('#enemies').append('<div id="achilles2" class="enemies"><img src="assets/images/achilles.jpg"/></div>');

            $('#enemies').append('<div id="heracles2"class="enemies"><img src="assets/images/heracles.jpg"/></div>');

            $('#enemies').append('<div id="zeus2" class="enemies"><img src="assets/images/zeus.jpg"/></div>');
        };
        if (imgId == 'zeus') {
            $("#attacker").append('<img src="assets/images/zeus.jpg"/>'); 
            $('#titleYou').show();
            $('#titleEnem').show();
            $('#enemies').append('<div id="achilles2" class="enemies"><img src="assets/images/achilles.jpg"/></div>');

            $('#enemies').append('<div id="perseus2"class="enemies"><img src="assets/images/perseus.jpg"/></div>');

            $('#enemies').append('<div id="heracles2" class="enemies"><img src="assets/images/heracles.jpg"/></div>');
        };
        if (imgId == 'achilles') {
            $("#attacker").append('<img src="assets/images/achilles.jpg"/>'); 
            $('#titleYou').show();
            $('#titleEnem').show();
            $('#enemies').append('<div id="heracles2" class="enemies"><img src="assets/images/heracles.jpg"/></div>');

            $('#enemies').append('<div id="perseus2"class="enemies"><img src="assets/images/perseus.jpg"/></div>');

            $('#enemies').append('<div id="zeus2" class="enemies"><img src="assets/images/zeus.jpg"/></div>');
        };


        $('.enemies').on("click", function(){
            var imgId = $(this).attr('id');
            console.log(imgId);
            $(this).remove();

            if (imgId == 'heracles2') {
                $('#titleDef').show();
                $("#defender").append('<img src="assets/images/heracles.jpg"/>'); 
            }
            if (imgId == 'perseus2') {
                $('#titleDef').show();
                $("#defender").append('<img src="assets/images/perseus.jpg"/>'); 
            }
            if (imgId == 'zeus2') {
                $('#titleDef').show();
                $("#defender").append('<img src="assets/images/zeus.jpg"/>'); 
            }
            if (imgId == 'achilles2') {
                $('#titleDef').show();
                $("#defender").append('<img src="assets/images/achilles.jpg"/>'); 
            }

        });



    });



});

