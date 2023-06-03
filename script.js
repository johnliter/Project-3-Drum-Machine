// Event listener for keydown event to trigger drum pad with corresponding key
document.addEventListener("keydown", function (event) {
    const key = event.key.toUpperCase(); // Get the uppercase value of the pressed key
    const drumPad = document.getElementById(key); // Find the drum pad element with the matching id
    
    if (drumPad) {
      const audio = drumPad.querySelector("audio"); // Get the audio element within the drum pad
      audio.currentTime = 0; // Reset the audio to the beginning
      audio.play(); // Play the audio
      updateDisplay(drumPad.id); // Update the display with the drum pad id
      drumPad.classList.add("active"); // Add the "active" class to visually highlight the drum pad
      setTimeout(function() {
        drumPad.classList.remove("active"); // Remove the "active" class after a short duration
      }, 100);
    }
  });
  
// Function to update the display and display title with the drum pad id and title
function updateDisplay(text, title) {
    const display = document.getElementById("display");
    const displayTitle = document.getElementById("display-title");
    display.textContent = text;
    displayTitle.textContent = title;
  }
  
  // Event listeners for click events on each drum pad
  const drumPads = document.querySelectorAll(".drum-pad");
  drumPads.forEach(function (drumPad) {
    drumPad.addEventListener("click", function () {
      const audio = drumPad.querySelector("audio");
      const title = drumPad.getAttribute("title"); // Get the title attribute of the drum pad
      audio.currentTime = 0;
      audio.play();
      updateDisplay(drumPad.id, title); // Update the display and display title with the drum pad id and title
      drumPad.classList.add("active");
      setTimeout(function() {
        drumPad.classList.remove("active");
      }, 100);
    });
  });

  // Get the volume slider element
const volumeSlider = document.getElementById("volume-slider");

// Event listener for input event on the volume slider
volumeSlider.addEventListener("input", function () {
  const volume = volumeSlider.value / 100; // Convert the slider value to a decimal between 0 and 1

  // Update the volume of all audio elements
  const audioElements = document.querySelectorAll("audio");
  audioElements.forEach(function (audio) {
    audio.volume = volume;
  });
});
  