/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const itemPage = 9;
function showPage(list, page) {
 const firstIndex = (itemPage*page) - itemPage;
 const lastIndex = (itemPage*page);
 const studentList = document.querySelector('.student-list');
 studentList.innerHTML = '';
   
 for (let i = 0; i < list.length; i++) {
            if (i >= firstIndex && i < lastIndex) {
               const html =  `<li class="student-item cf">
               <div class="student-details">
                 <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
                 <h3>${list[i].name.first}${list[i].name.last}</h3>
                 <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                 <span class="date">Joined ${list[i].registered.date}</span>
               </div>
             </li>`
               studentList.insertAdjacentHTML('beforeEnd',html);
            }
         }
      }


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
 const numOfPages = Math.ceil(list.length/itemPage)
 const linkList = document.querySelector('.link-list')
 linkList.innerHTML = '';
 for (let i = 1; i < numOfPages +1; i++) {
    document.createElement('button')
    const button = `<li>
    <button type="button">${i}</button>
  </li>`
    linkList.insertAdjacentHTML('beforeEnd',button);
 }
 linkList.querySelector('BUTTON').className = 'active';
 linkList.addEventListener('click',(event) =>{
   if (event.target.tagName == 'BUTTON' ) {
      document.querySelector('.active').className = '';
      event.target.className = 'active'
      console.log(document.querySelector('.active'))
      showPage(list,event.target.textContent)
   }  
 })   
}


// Call functions
addPagination(data)
showPage(data,1)
