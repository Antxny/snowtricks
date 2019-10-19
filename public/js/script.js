$(document).ready(function() {
	setInterval(function(){
		$(".arrow").effect("bounce", { direction:'down', times:2 }, 1000);
	}, 4000);
	$(".arrow").click(function() {
	    $([document.documentElement, document.body]).animate({
	        scrollTop: $(".tricks").offset().top - 66
	    }, 1000);
	});

	$('#DeleteModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var trickname = button.data('trickname') // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)
		modal.find('.modal-title').text(trickname)
		modal.find('.modal-body input').val(trickname)
	})

	var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };
    $('.thumbnail-upload').on('change', function() {
        $('.preview-thumbnail').empty();
        imagesPreview(this, 'div.preview-thumbnail');
    });

});