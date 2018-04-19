function addComment() {
	var commentItem = $("#new-comment").val();
	var date = moment().format('DD MMMM YYYY');
	
	if(commentItem) {
		$("#comment-list").append("<div class='questions__block'>  <div class='questions__name'> <span> " + 'Guest' + "</span> <span>" + date + "</span> </div> <div class='questions__comment'> <div class='blocks'></div> " + commentItem + "</div>");
		$("#new-comment").val("");
	}

	return false
}

	$(function() {
		$("#add-comment").on('click', function(e){
			e.preventDefault();
			addComment()
		});		
	});

	$(function () {
	    $(document).on("keydown", "body", function(e) {
	        if ((e.keyCode == 10 || e.keyCode == 13) && e.ctrlKey) {
	            $(this).parent().find("#add-comment").click();
	      	e.preventDefault();  
	      	addComment() 
	        }
	    });
	});