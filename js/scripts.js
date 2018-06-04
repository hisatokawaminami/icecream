$(function(){
  var flavors = ["vanilla", "choco", "mint", "cookie", "strawberry"]
    flavors.forEach(function(flavor) {
      $("#fav-flavor").prepend('<li>' + flavor + '</li>');
    });
  });
