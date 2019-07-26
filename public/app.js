
$(funnction(){
    var $comments = $("comments")
})







$(document).on("click", "#make-new", function() {
    // AJAX POST call to the submit route on the server
    // This will take the data from the form and send it to the server
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "/submit",
      data: {
        comment: $("#comment").val(),
        
      }
    })