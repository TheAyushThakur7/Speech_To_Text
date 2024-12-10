document.getElementById("audio-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const fileInput = document.getElementById("audio-file");
    const formData = new FormData();
    formData.append("audio", fileInput.files[0]); // Use "audio" to match your backend

    // Make the API request to your backend here
    fetch('https://stt-backend-v1av.onrender.com', { // Add /transcribe endpoint
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Assuming the transcription is in data.transcription
        document.getElementById("transcription-text").textContent = data.transcription;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("transcription-text").textContent = 'An error occurred. Please try again.';
   });
});