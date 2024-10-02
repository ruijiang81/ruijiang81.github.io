document.addEventListener('DOMContentLoaded', function() {
    var expandButtons = document.getElementsByClassName("expandable-button");
    
    for (var i = 0; i < expandButtons.length; i++) {
      expandButtons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  });