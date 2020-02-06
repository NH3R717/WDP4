/*
 * events.js
 * 
 */


/* form validation */


var B = 49;
console.log(B);

let contactForm = document.querySelector("#contactForm");

// function for validates loops through each field (requiredFields) determining if presents of data upon blur event

function validateForm() {
    for (let i = 0; i < requiredFields.length; i++) {
        requiredFields[i].addEventListener('blur', validateRequired);
    }
}

// function for informing user that field submissions is empty after blur event

function validateRequired(event) {
    let target = event.target;
    let parent = target.parentElement;
    let error = '<label class="error">Please complete the required information.</label>';

    if (!target.value.length) {
        if (!parent.querySelector('.error')) {
            parent.insertAdjacentHTML('afterend', error);
        }
    } else {
        parent.removeChild(parent.querySelector('.error'));
    }
}

// calls validateForm() and validateRequired() upon input and blur events

let requiredFields = contactForm.querySelectorAll('.required');
for (let i = 0; i < requiredFields.length; i++) {
    requiredFields[i].addEventListener('input', validateForm);
    requiredFields[i].addEventListener('blur', validateRequired);
}


/* weather button */


(function() {

    function weatherData() {
        // function variables and function call
        const url = "https://api.openweathermap.org/data/2.5/weather?id=1819730&appid=752eccc4d76263ad69799217910d067f";
        let xhr;

        makeRequest();

        // nested function – create and send an XHR request
        function makeRequest() {
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = responseMethod;
            xhr.open('GET', url);
            xhr.send();
        }

        function responseMethod() {
            let weatherButton = document.querySelector('#weatherButton');
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // event listener available if page loads without error calls weather display function
                    weatherButton.addEventListener('click', updateUISuccess);

                } else {
                    // this page is busted
                }
            }
        }

        // nested function – execute code based on successfully pulling data from XHR request and activation of event listener

        function updateUISuccess() {
            let response = JSON.parse(xhr.responseText);
            let condition = response.weather[0].description;
            let weatherBox = document.querySelector("#currentWeather");
            let weatherMessage = "The current weather in Hong Kong is " + condition + ".";
            weatherBox.insertAdjacentHTML('afterend', weatherMessage);
        }
    }

    weatherData();

})();