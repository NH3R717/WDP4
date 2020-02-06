/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
 */

const xhr = new XMLHttpRequest();
xhr.onload = function() {
    const data = JSON.parse(xhr.responseText);
    const navBttns = document.querySelectorAll("#index #locations button");
    let imgCount = "";

    /*
     ** (index.html) id=locations
     */

    const featured = document.querySelector("#imageSlider");

    function locationSlide(index) {
        featured.querySelector("h3").innerHTML =
            data.locations[index].city + ", " + data.locations[index].state;
        featured.querySelector("h4").innerHTML = data.locations[index].title;
        featured.querySelector("p").innerHTML = data.locations[index].text;
    }
    if (featured) {
        locationSlide(0);
        navBttns[0].addEventListener("click", function() {
            imgCount -= 1;
            if (imgCount < 0) {
                imgCount = data.locations.length - 1;
                locationSlide(imgCount);
            } else {
                locationSlide(imgCount % data.locations.length);
            }
        });
        navBttns[6].addEventListener("click", function() {
            imgCount += 1;
            if (imgCount >= data.locations.length) {
                imgCount = 0;
                locationSlide(imgCount);
            } else {
                locationSlide(imgCount);
            }
        });

        for (let i = 0; i < 5; i++) {
            navBttns[i + 1].addEventListener("click", function() {
                locationSlide(i);
                imgCount = i;
            });
        }
    }

    /*
     ** (index.html) id=posts
     */

    const posts = document.querySelectorAll("#posts article");
    if (posts) {
        for (let i = 0; i < posts.length; i++) {
            posts[i].querySelector("img").src = data.posts[i].imageURL;
            posts[i].querySelector("img").alt = data.posts[i].title;
            posts[i].querySelector("h3").innerHTML = data.posts[i].title;
            posts[i].querySelector("h4").innerHTML = data.posts[i].subtitle;
            posts[i].querySelector("p").innerHTML = data.posts[i].text;
        }
    }

    /*
     ** (index.html) id=events
     */

    const events = document.querySelectorAll("#index #events li");
    if (events) {
        for (let i = 0; i < events.length; i++) {
            events[i].querySelector("time").innerHTML = data.events[i].date;
            events[i].querySelector("h4").innerHTML = data.events[i].title;
            events[i].querySelector("p").innerHTML = data.events[i].text;
        }
    }

    /*
     ** (index.html) id=hikers
     */

    const hikers = document.querySelectorAll("#hikers li");
    if (hikers) {
        for (let i = 0; i < hikers.length; i++) {
            var hikerFullName =
                data.hikers[i].lastname + ", " + data.hikers[i].firstname;
            hikers[i].querySelector("img").src = data.hikers[i].imageURL;
            hikers[i].querySelector("img").alt = hikerFullName;
            hikers[i].querySelector("h4").innerHTML = hikerFullName;
            hikers[i].querySelector("p").innerHTML =
                data.hikers[i].city + ", " + data.hikers[i].state;
        }
    }

    /*
     ** (index.html) id=about
     */

    const about = document.querySelector("#about");
    if (about) {
        about.querySelector("h4").innerHTML = data.about.title;
        about.querySelector("p").innerHTML = data.about.text;
    }

    /*
     ** (all pages) id=footer
     */

    const copy = document.querySelector("#footer");
    if (copy) {
        copy.querySelector("p").innerHTML = data.about.copyright;
    }

    /*
     ** (blog.html) id=blogPage
     */

    const blogPage = document.querySelectorAll("#blogPage article");
    if (blogPage) {
        for (let i = 0; i < blogPage.length; i++) {
            blogPage[i].querySelector(".blogImage").src = data.posts[i].imageURL;
            blogPage[i].querySelector(".blogImage").alt = data.posts[i].title;
            blogPage[i].querySelector("h3").innerHTML = data.posts[i].author;
            blogPage[i].querySelector("h4").innerHTML = data.posts[i].postDate;
            blogPage[i].querySelector("h2").innerHTML = data.posts[i].title;
            blogPage[i].querySelector("p").innerHTML = data.posts[i].text
        }
    }

    /*
     ** (events.html) id=eventsPage
     */

    const eventsPage = document.querySelectorAll("#eventsPage article");
    if (eventsPage) {
        for (let i = 0; i < eventsPage.length; i++) {
            eventsPage[i].querySelector("h3").innerHTML = data.events[i].title;
            // eventsPage[i].querySelector("h3").innerHTML = data.events[i].sponsor;
            eventsPage[i].querySelector("h4").innerHTML = data.events[i].date;
            eventsPage[i].querySelector(".locationState").innerHTML = data.events[i].location + ", " + data.events[i].state;
            eventsPage[i].querySelector("p").innerHTML = data.events[i].text;
        }
    }

    /*
     ** (contact.html) id=contactPage
     */

    console.log(about);
    console.log(copy);
    console.log(blogPage);
    console.log(eventsPage);

};

xhr.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json', true);
xhr.send(null);

var A = 23;
console.log(A);