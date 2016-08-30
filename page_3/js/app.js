$(document).ready(function() {
  $(".food_blogger").on('click', function () {
  		$(this).parent().find('.blogger_food').toggleClass("revert_");
      	$(this).parent().find('.food_blog').toggleClass("open_");
      	return false
  });
});