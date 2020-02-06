/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Standards 2 (WDSII)
   
   */

// get API data

// glitchPostApiUrl = 'https://painted-rodent.glitch.me/api/items?accessToken=5b1064585f4ab8706d275f90';

const glitchPostApiUrl = `${base}${post}${token}`;

(function addTaskBtn() {

    const cards = document.querySelectorAll('main section');
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {

        const taskButton = cards[i].querySelector('.addTask');

        const section = cards[i];
        taskButton.addEventListener('click', function(e) {
            console.log(section);
            newTasks(e, section.id);
        });
    }
})();

function newTasks(e, targetSectionId) {
    let sectionForm = document.querySelector(` #${targetSectionId}`);

    const taskModal = document.querySelector("#taskModal");
    sectionForm.addEventListener("click", function() {
        taskModal.style.display = "block";
        console.log(123);
    });

    document.querySelector(".modalClose").addEventListener("click", function() {
        taskModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == taskModal) {
            taskModal.style.display = "none";
        }
    });

    const form = document.querySelector('#taskModal');

    if (form) {

        form.addEventListener('submit', function(e) {

            e.preventDefault();

            let listId = 0;

            if (targetSectionId == 'toDo') {
                listId = 1;
            } else if (targetSectionId == 'inProgress') {
                listId = 2;
            } else if (targetSectionId == 'complete') {
                listId = 3;
            }

            const taskTitle = document.querySelector('#taskTitle').value;
            const taskDescription = document.querySelector('#description').value;
            const taskDueDate = document.querySelector('#dueDate').value;

            const formData = {

                title: taskTitle,
                description: taskDescription,
                dueDate: new Date(taskDueDate),
                listId: listId

            };

            fetch(glitchPostApiUrl, {

                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'content-type': 'application/json'
                }

            })

            .then((response) => {

                    if (response.ok) {

                        return response.json();

                    }
                    throw response;
                })
                .then((data) => {
                    window.location.reload();
                })
                .catch((error) => {});
        });
    }
}