/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Standards 2 (WDSII)
   
   */

// push API data

// glitch api url data object 

let glitchApi = {
    base: 'https://painted-rodent.glitch.me/api/',
    get: 'lists?accessToken=',
    post: 'items?accessToken=',
    update: '',
    _delete: '',
    token: '5b1064585f4ab8706d275f90'
};

let { base, post, get, update, _delete, token } = glitchApi;

const glitchGetApiUrl = `${base}${get}${token}`;

// glitchGetApiUrl = 'https://painted-rodent.glitch.me/api/lists?accessToken=5b1064585f4ab8706d275f90';

fetch(glitchGetApiUrl)
    .then((data) => data.json())
    .then((kanban) => forHtml(kanban));

const forHtml = (data) => {

    const kanbanBoard = document.querySelector('main');

    if (kanbanBoard) {

        let toDoSection = '';
        let inProgressSection = '';
        let completeSection = '';

        for (let i = 0; i < data[0].items.length; i++) {

            toDoSection += '<article>';
            toDoSection += '<h3>' + data[0].items[i].title + '</h3>';
            toDoSection += '<p>' + data[0].items[i].description + '</p>';
            toDoSection += '<time datetime="YYYY-MM-DD">' + data[0].items[i].dueDate + '</time>';
            toDoSection += '</article>';

        }

        for (let i = 0; i < data[1].items.length; i++) {

            inProgressSection += '<article>';
            inProgressSection += '<h3>' + data[1].items[i].title + '</h3>';
            inProgressSection += '<p>' + data[1].items[i].description + '</p>';
            inProgressSection += '<time datetime="YYYY-MM-DD">' + data[1].items[i].dueDate + '</time>';
            inProgressSection += '</article>';

        }

        for (let i = 0; i < data[2].items.length; i++) {

            completeSection += '<article>';
            completeSection += '<h3>' + data[2].items[i].title + '</h3>';
            completeSection += '<p>' + data[2].items[i].description + '</p>';
            completeSection += '<time datetime="YYYY-MM-DD">' + data[2].items[i].dueDate + '</time>';
            completeSection += '</article>';

        }

        kanbanBoard.querySelector('#toDo').insertAdjacentHTML('beforeend', toDoSection);
        kanbanBoard.querySelector('#inProgress').insertAdjacentHTML('beforeend', inProgressSection);
        kanbanBoard.querySelector('#complete').insertAdjacentHTML('beforeend', completeSection);

    }

};