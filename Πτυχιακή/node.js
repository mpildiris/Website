// Get the ul element
var ulElement = document.getElementById("topmenu");

// Get all the li elements inside the ul
var liElements = ulElement.getElementsByTagName("li");

// Loop through each li element
for (var i = 0; i < liElements.length; i++) {
  // Add event listener for mouseover (hover)
  liElements[i].addEventListener("mouseover", function() {
    // Add a CSS class to change the text color to red
    this.firstChild.style.color = "red";
  });

  // Add event listener for mouseout (hover out)
  liElements[i].addEventListener("mouseout", function() {
    // Remove the added CSS class to revert the color back to its original
    this.firstChild.style.color = "";
  });
}
//menu list at the top right of the website 

document.addEventListener('DOMContentLoaded', function() {
  var dropbtn = document.querySelector('.dropbtn');
  var dropdownContent = document.querySelector('.dropdown-content');

  // Toggle dropdown visibility when dropbtn is clicked
  dropbtn.addEventListener('click', function() {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  // Close dropdown when clicking anywhere else on the page
  document.addEventListener('click', function(event) {
    if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.style.display = 'none';
    }
  });
});



// Get the ul element
var ulElement = document.getElementById("topmenu");

// Get all the li elements inside the ul
var liElements = ulElement.getElementsByTagName("li");

// Loop through each li element
for (var i = 0; i < liElements.length; i++) {
  // Add event listener for mouseover (hover)
  liElements[i].addEventListener("mouseover", function() {
    // Add a CSS class to change the text color to red
    this.firstChild.style.color = "red";
  });

  // Add event listener for mouseout (hover out)
  liElements[i].addEventListener("mouseout", function() {
    // Remove the added CSS class to revert the color back to its original
    this.firstChild.style.color = "";
  });
}

// Get the ul element
var ulElement = document.getElementById("topmenu");

// Get all the li elements inside the ul
var liElements = ulElement.getElementsByTagName("li");

// Loop through each li element
for (var i = 0; i < liElements.length; i++) {
  // Add event listener for mouseover (hover)
  liElements[i].addEventListener("mouseover", function() {
    // Add a CSS class to change the text color to red
    this.firstChild.style.color = "red";
  });

  // Add event listener for mouseout (hover out)
  liElements[i].addEventListener("mouseout", function() {
    // Remove the added CSS class to revert the color back to its original
    this.firstChild.style.color = "";
  });
}

// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
  var greekBtn = document.getElementById("greek-btn");
  var englishBtn = document.getElementById("english-btn");
  var elementsToTranslate = document.querySelectorAll(".translate");

  function switchToGreek() {
    // Replace the following text with the Greek translation
    for (var i = 0; i < elementsToTranslate.length; i++) {
      elementsToTranslate[i].innerText = "Καλώς ήλθατε!"; // Replace with Greek text
    }
  }

  function switchToEnglish() {
    // Replace the following text with the English translation
    for (var i = 0; i < elementsToTranslate.length; i++) {
      elementsToTranslate[i].innerText = "Welcome!"; // Replace with English text
    }
  }

  greekBtn.addEventListener("click", switchToGreek);
  englishBtn.addEventListener("click", switchToEnglish);
});

// Get the ul element
var ulElement = document.getElementById("topmenu");

// Get all the li elements inside the ul
var liElements = ulElement.getElementsByTagName("li");

// Loop through each li element
for (var i = 0; i < liElements.length; i++) {
  // Add event listener for mouseover (hover)
  liElements[i].addEventListener("mouseover", function() {
    // Add a CSS class to change the text color to red
    this.firstChild.style.color = "red";
  });

  // Add event listener for mouseout (hover out)
  liElements[i].addEventListener("mouseout", function() {
    // Remove the added CSS class to revert the color back to its original
    this.firstChild.style.color = "";
  });
}


// Here is the language switch

