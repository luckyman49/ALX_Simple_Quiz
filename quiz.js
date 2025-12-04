// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the user's selected option
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    // Find the feedback element
    const feedback = document.getElementById("feedback");

    // Compare answers and show feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
