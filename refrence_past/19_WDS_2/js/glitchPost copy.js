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
    // console.log(cards);
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

    if (sectionForm) {
        let formHtml = '';
        let newTaskForm = document.querySelector('#taskForm');

        if (!newTaskForm) {

            formHtml += '<form method="POST" id="taskForm" role="form">';


            formHtml += '<button class="close">&times;</button>';

            // title input id="titleInputDiv>
            formHtml += '<div id="titleInput>';
            formHtml += '<label for="taskTitle" Text>Title</label>';
            formHtml += '<input type="text" aria-label="task title field" name=taskName cols="70" rows="1" required id="taskTitle" minlength="2">';
            formHtml += '</div>';

            // task input id="descriptionInput
            formHtml += '<div id="descriptionInput>';
            formHtml += '<label for="taskName" Text>Description</label>';
            formHtml += '<input type="text" aria-label="task description field" name=taskDes cols="70" rows="3" required minlength="8" id="description" minlength="2" ></input>';
            formHtml += '</div>';

            // date input
            formHtml += '<div id= "dateInput">';
            formHtml += '<label for="entryDate" Text>Date</label>';
            // for some reason the line below breaks the page – TypeError: document.querySelector(...) is null glitchPost.js:107:50
            // formHtml += '<input type="date" datetime="YYYY-MM-DD id="dueDate" aria-label="task dude date picker"></input>';
            formHtml += '<input type="date" id="dueDate" aria-label="task dude date picker"></input>';

            formHtml += '</div>';

            // submit button
            formHtml += '<input type="submit" value="Submit" id="submit" aria-label="add new task">';

            formHtml += '</form>';

            // form insertion
            sectionForm.insertAdjacentHTML("afterbegin", formHtml);

            document.querySelector(".close").addEventListener("click", function() {
                window.location.reload();
            });

            const form = document.querySelector('#taskForm');

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
    }
}