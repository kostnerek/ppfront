const tasks = ['Learn HTML', 'Learn CSS', 'Learn JS'];
const [task1, task2, task3] = tasks;

const courseData = {
    name:'projektowanie i programowanie front-end',
    shortcut: "ppfront",
    year:'2',
    content:{
        types:{
            lectures:true,
            laboratories:true,
            projects:true
        },
        hours:{
            lectures:15,
            laboratories:15,
            projects:15
        }
    }
}

const {lectures, laboratories, projects} = courseData.content.hours;
const lectureHours = courseData.content.hours.lectures;
