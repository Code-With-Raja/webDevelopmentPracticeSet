document.getElementById('image-input').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            var imagePreview = document.getElementById('image-preview');
            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('video-input').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var video = document.createElement('video');
            video.controls = true;
            video.src = e.target.result;
            var videoPreview = document.getElementById('video-preview');
            videoPreview.innerHTML = '';
            videoPreview.appendChild(video);
        };
        reader.readAsDataURL(file);
    }
});
