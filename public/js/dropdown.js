  // Code for the suggestion dropdown UI functionality. 

  // Note: Inside style CSS the class "suggestion-shown" has a rule that looks for an element with "suggestion-shown" that also has the class="suggestion-container". If the element contains
  // suggestion-container but not suggestion-shown, display: none.

  // That way we can look for what category the user has selected, and show only the relevant buttons.
//

const dropdowns = document.querySelectorAll('.dropdown');
const suggestionContainer = document.querySelector('.suggestion-container');

// Add suggestion-shown class to suggestionContainer element
suggestionContainer.classList.add('suggestion-shown');

// For each dropdown, add a click event listener
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', () => {
    // Get the next sibling element of the dropdown
    const submenu = dropdown.nextElementSibling;
    // Get the parent element of the dropdown
    const parent = dropdown.parentNode;
    // Toggle the class 'active' on the parent element
    parent.classList.toggle('active');

    if (submenu.style.maxHeight) {
      // close submenu
      submenu.style.maxHeight = null;
      suggestionContainer.classList.remove('suggestion-shown');
    } else {
      // open submenu
      // Setting the max height of the dropdown ui to its scroll height, "opening" the menu.
      submenu.style.maxHeight = submenu.scrollHeight + 'px';
      suggestionContainer.classList.add('suggestion-shown');
      
      const activeDropdown = document.querySelector('.active .dropdown');
      const lightingSelected = document.querySelector('.lighting-click.selected');
      const moodSelected = document.querySelector('.mood-click.selected');
      

      // If there is an active dropdown and either lightingSelected or moodSelected is selected
      if (activeDropdown && (lightingSelected || moodSelected)) {
        // Get the element with class 'suggestion-style'
        const styleSuggestions = document.querySelector('.suggestion-style');
        // Remove the class 'suggestion-shown' from styleSuggestions
        styleSuggestions.classList.remove('suggestion-shown');
      }
    }
  });
});

const promptSuggestionsText = document.querySelector('.prompt-suggestions-text');
if (promptSuggestionsText) {
  promptSuggestionsText.addEventListener('click', () => {
    const activeDropdown = document.querySelector('.active .dropdown');
    if (activeDropdown) {
      // close active dropdown
      const submenu = activeDropdown.nextElementSibling;
      submenu.style.maxHeight = null;
      activeDropdown.parentNode.classList.remove('active');
    }

    suggestionContainer.classList.toggle('suggestion-shown');
  });
}