// Define initial data for each candidate
let candidates = {
    candidate1: {
        votes: 0,
        photos: ['candidate1_1.jpg', 'candidate1_2.jpg'] // Add more photos if needed
    },
    candidate2: {
        votes: 0,
        photos: ['candidate2_1.jpg', 'candidate2_2.jpg']
    },
    candidate3: {
        votes: 0,
        photos: ['candidate3_1.jpg', 'candidate3_2.jpg']
    },
    candidate4: {
        votes: 0,
        photos: ['candidate4_1.jpg', 'candidate4_2.jpg']
    }
};

// Function to handle votes with a photo change for 10 seconds
function vote(candidate) {
    // Get the candidate object
    const currentCandidate = candidates[candidate];

    // Disable the candidate button to prevent multiple votes during the photo change
    const candidateButton = document.getElementById(`candidate${candidate.charAt(candidate.length - 1)}`);
    candidateButton.style.pointerEvents = 'none';

    // Increment the vote count for the selected candidate
    currentCandidate.votes++;

    // Change the candidate photo to the next one
    const photoIndex = currentCandidate.votes % currentCandidate.photos.length;
    const candidatePhoto = document.querySelector(`#${candidate} img`);
    candidatePhoto.src = currentCandidate.photos[photoIndex];

    // Update the vote count display on the webpage
    document.getElementById(`count${candidate.charAt(candidate.length - 1)}`).innerText = `${currentCandidate.votes} votes`;

    // After 10 seconds, restore the original candidate photo and enable the candidate button again
    setTimeout(() => {
        candidatePhoto.src = currentCandidate.photos[0];
        candidateButton.style.pointerEvents = 'auto';
    }, 10000);
}
