console.log("here");

//add burger
$(".create-form").on("submit", function(event) {
  event.preventDefault();

  var burgerName = {
    name: $("#burger-name").val().trim(),
  };

  console.log(burgerName);

  $.ajax("/api/burgers", {
    type: "POST",
    data: burgerName,
  }).then(function() {
    // $("#burger-name").val() = "";
    location.reload();
  });
});

$(".eat-it").on("click", function(event) {
  var id = $(this).data("id");
});