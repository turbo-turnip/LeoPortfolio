const { log } = console;
const posts = document.querySelectorAll(".post");
const postTimeSpans = document.querySelectorAll(".post .date");
let postTimes = [
    new Date(2021, 2, 11),
    new Date(2021, 2, 11),
    new Date(2021, 2, 11)
];

posts.forEach((post, idx) => {
    // date stuff from stack overflow https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-to-dayes
    let d = new Date();
    let currentDate = new Date(d.getFullYear(), (d.getMonth()+1), d.getDate());
    let oneDay = 24*60*60*1000;
    const diffDays = Math.round(Math.abs((postTimes[idx] - currentDate) / oneDay));
    postTimeSpans[idx].innerHTML = `${diffDays} days ago`;
});

const filterInput = document.querySelector("input.filter");

filterInput.addEventListener("input", e => {
    for (let i = 0; i < posts.length; i++) {
        const postHashtags = posts[i].querySelectorAll(".post-description span");
        let postStatus = [];
        for (let j = 0; j < postHashtags.length; j++) {
            postStatus.push(1);
            if (!e.target.value) {
                postStatus[j] = 1;
            }
            if (postHashtags[j].innerHTML.indexOf(e.target.value) < 0) {
                postStatus[j] = 0;
            } else {
                postStatus[j] = 1;
            }
        }
        if (postStatus.includes(1)) {
            posts[i].style.display = "block";
        } else {
            posts[i].style.display = "none";
        }
    }
});
