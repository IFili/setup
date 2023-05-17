function populateData() {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {

            const imageWrappers = document.querySelectorAll('.imageWrapper');
            let counter = 0; // initialize the counter variable
            data.forEach((jsonData, index) => {
                // Select the elements inside the current imageWrapper
                const imageWrapper = imageWrappers[index];
                const profileImage = imageWrapper.querySelector('.profileImageId');
                const name = imageWrapper.querySelector('.name');
                const date = imageWrapper.querySelector('.date');
                const icon = imageWrapper.querySelector('.icon-image');
                const postImage = imageWrapper.querySelector('.postImage-img');
                const caption = imageWrapper.querySelector('.caption-text');
                const likeIcon = imageWrapper.querySelector('.like-icon');
                const likeCounter = imageWrapper.querySelector('.like-counter');

                // Populate the data into the selected elements
                profileImage.src = jsonData.profile_image;
                name.textContent = jsonData.name;
                date.textContent = jsonData.date;
                // icon.src = jsonData.source_link; 
                if(jsonData.source_type === "facebook") {icon.src="facebook.svg"}
                if(jsonData.source_type === "twitter") {icon.src="twitter.svg"}
                if(jsonData.source_type === "instagram") {icon.src="instagram.svg"}
                postImage.src = jsonData.image;
                caption.textContent = jsonData.caption;
                likeCounter.textContent = jsonData.likes;

                counter++; // increment the counter
                if (counter === data.length) {
                    // stop the function when the counter reaches the length of the data array
                    const disableBtn = document.querySelector('.showMoreBtn');
                    disableBtn.style.display = "none";
                    return;
                }
            });
        });
}

document.addEventListener('DOMContentLoaded', populateData);
