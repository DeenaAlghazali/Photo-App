let heart = document.querySelectorAll('.fa-heart');
let comment = document.querySelectorAll('.fa-comment-alt');
let move_right = document.querySelector('#move-right');
let move_left = document.querySelector('#move-left');
let first_img = document.querySelector('.first-img');
let second_img = document.querySelector('.second-img');
let third_img = document.querySelector('.third-img');
let fourth_img = document.querySelector('.fourth-img');


let group1 = document.querySelector('.group1');
let group2 = document.querySelector('.group2');
let group3 = document.querySelector('.group3');
let group4 = document.querySelector('.group4');

const groups = [group1, group2, group3, group4]
const img1 = `../images/P1.png`;
const img2 = `../images/P2.png`;
const img3 = `../images/P3.png`;
const img4 = `../images/P4.png`;
const img5 = `../images/p5.jpg`;
const img6 = `../images/p6.jpg`;
const img7 = `../images/p7.jpg`;
const img8 = `../images/p8.jpg`;

heart.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.style.color = 'red';
    });
});

comment.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.style.color = '#16a085';
    });
});
let count = 1;

move_left.addEventListener('click', () => {
    count++;
    if (count == 4) count = 1
    for (let i = 0; i < groups.length - 1; i++) {
        groups[i].style.display = "none";
    }
    groups[count - 1].style.display = "block";
    groups[count].style.display = "block";
});


let j = 1;
move_right.addEventListener('click', () => {
    j++;
    if (j > 4) j = 1
    for (let i = 0; i < groups.length - 1; i++) {
        groups[i].style.display = "none";
    }
    groups[j - 1].style.display = "block";
    groups[j - 2].style.display = "block";

;});

