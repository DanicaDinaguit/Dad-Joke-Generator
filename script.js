const jokeButton = document.getElementById("jokeButton");
const jokeText = document.getElementById("jokeText");

document.addEventListener("DOMContentLoaded", getJoke);

jokeButton.addEventListener("click", getJoke);

async function getJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    });
    const data = await response.json();
    jokeText.textContent = data.joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
    jokeText.textContent = "Oops! Failed to fetch joke. Please try again.";
  }
}
