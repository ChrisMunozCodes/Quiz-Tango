// This js file is only connected to index.html, that way when the user goes to make a new quiz, none of the localStorage is saved from last time.

window.addEventListener('load', () => {
    localStorage.clear()
})