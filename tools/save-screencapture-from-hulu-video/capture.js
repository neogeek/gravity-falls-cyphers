chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {

    if (msg.text === 'capture') {

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const video = document.querySelector('#content-video-player');

        const link = document.createElement('a');

        if (video && video.getAttribute('src').match(/hulu\.com/)) {

            canvas.setAttribute('width', video.clientWidth);
            canvas.setAttribute('height', video.clientHeight);

            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            link.setAttribute('href', canvas.toDataURL());

            link.download = 'screencapture.png';

            link.click();

        } else {

            alert('Error: No video found.');

        }

    }

});
