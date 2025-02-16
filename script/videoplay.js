const video = document.getElementById('video');
        const playPauseBtn = document.getElementById('playPauseBtn');

        playPauseBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playPauseBtn.textContent = 'ផ្អាក';
                video.muted = false; // Unmute the video
            } else {
                video.pause();
                playPauseBtn.textContent = 'លេង';
                video.muted = false; // Unmute the video
            }
        });

        // Ensure video plays automatically on load
        video.addEventListener('ended', () => {
            video.currentTime = 0; // Reset video to the start
            video.play(); // Auto replay after it ends
            video.muted = false; // Unmute the video
        });