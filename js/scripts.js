$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>meow</li>");
    $("ul#dog").prepend("<li>woof</li>");
    $('li').click(function() {
      $("ul#cat").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#dog").children("li").first().click(function() {
        $(this).remove();
      });
    });
  });

  $("button#woof").click(function() {
    $("ul#cat").prepend("<li>meow</li>");
    $("ul#dog").prepend("<li>woof</li>");
    $('li').click(function() {
      $("ul#dog").children("li").first().click(function() {
        $(this).remove();
      });
      $("ul#cat").children("li").first().click(function() {
        $(this).remove();
      });
    });
  });

  $("button#warning").click(function() {
    $("ul#cat").after("<img src='images/cat.png'>");
    $("img").click(function() {
      $(this).remove();
    });
  });

  $("button#primary").click(function() {
    $("ul#dog").after("<img src='images/dog.jpg'>");
    $("img").click(function() {
      $(this).remove();
    });
  });





  $("body").css("background-color", "purple");
});
