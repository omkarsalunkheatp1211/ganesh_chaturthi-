document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

var githubButtons = document.querySelectorAll(".btn#github");

githubButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    window.open("https://github.com/omkarsalunkheatp1211", "_blank");
  });
});
