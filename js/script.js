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
// Variable set for the quantity of item shown on the page
const itemPage = 9;
/*
The function `showPage`
*/
function showPage(list, page) {
/*
The Index variables declare here are the one that gave the numbers between each page is going to display
the number will be the position in tha data array  
*/
 const firstIndex = (itemPage*page) - itemPage;
 const lastIndex = (itemPage*page);
 //`studenList` is use to get the ul tag with class student-list in the DOM
 const studentList = document.querySelector('.student-list');
 studentList.innerHTML = '';
/*
The loop is use to check all the array
The conditional code wil only display the information of the index 
between the first and last index variable created above
*/
 for (let i = 0; i < list.length; i++) {
            if (i >= firstIndex && i < lastIndex) {
               const html =  `<li class="student-item cf">
               <div class="student-details">
                 <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
                 <h3>${list[i].name.first} ${list[i].name.last}</h3>
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
/* 
`numOfPages` is a variable  created to ensure the exact number of pages 
necesary to display all the data information with the require distribution
using the array length and the quantity of student wanted per page
*/
 const numOfPages = Math.ceil(list.length/itemPage)
//`linkList` it is use to get the ul tag with class link-list
 const linkList = document.querySelector('.link-list')
 linkList.innerHTML = '';
/*
The loop is use to create the buttons require for each of the pages 
The buttons are insert by using `insertAdjacentHTML`
*/ 
for (let i = 1; i < numOfPages +1; i++) {
    document.createElement('button')
    const button = `<li>
    <button type="button">${i}</button>
  </li>`
    linkList.insertAdjacentHTML('beforeEnd',button);
 }
 /*
 The first button is selected with the following line
 linkList.querySelector('BUTTON')
 and assing the class active to it
 this make the first make the active one when it is first load
 */
 linkList.querySelector('BUTTON').className = 'active';

 /*
Add the event listener to ul tag  with the buttons
After the conditional code check the target of the click
it a button it will:
1. Remove the active class one the button that was active
2. Add the active class to the new button that has been click
3.Will call the function `showPage` to display the page require
   with the student on this page.
 */
 linkList.addEventListener('click',(event) =>{
   if (event.target.tagName == 'BUTTON' ) {
      document.querySelector('.active').className = '';
      event.target.className = 'active'
      console.log(document.querySelector('.active'))
      showPage(list,event.target.textContent)
   }  
 })   
}


/*
 Call functions, passing the parameter of the array of student 
 and the first page as default when the web is loaded
*/
addPagination(data)
showPage(data,1)
