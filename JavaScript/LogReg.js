const signInBtn = document.querySelector('.signin-btn'); /*declaring first sign in botton */
const signUpBtn = document.querySelector('.signup-btn'); /*declaring first sign up botton */
const formBox = document.querySelector('.form-box');
const body = document.body; /*declaring the hole page*/

signUpBtn.addEventListener('click', function() {
    formBox.classList.add('active'); /*With a click on regester btn make class active*/
    body.classList.add('active'); /*making a change background color by active */
});

signInBtn.addEventListener('click', function() {
    formBox.classList.remove('active'); /*With a click on Login btn make class Unactive*/
    body.classList.remove('active'); /*making a change background color back  by Unactive */
});