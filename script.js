// Define initial vote counts for each candidate
let votes = {
    candidate1: 0,
    candidate2: 0,
    candidate3: 0,
    candidate4: 0
};

// Function to handle votes with a 10-second pause
function vote(candidate) {
    // Disable the candidate button to prevent multiple votes during the pause
    const candidateButton = document.getElementById(`candidate${candidate.charAt(candidate.length - 1)}`);
    candidateButton.style.pointerEvents = 'none';

    // Increment the vote count for the selected candidate
    votes[candidate]++;
    
    // Update the vote count display on the webpage
    document.getElementById(`count${candidate.charAt(candidate.length - 1)}`).innerText = `${votes[candidate]} votes`;

    // After 10 seconds, enable the candidate button again
    setTimeout(() => {
        candidateButton.style.pointerEvents = 'auto';
    }, 10000);
}
