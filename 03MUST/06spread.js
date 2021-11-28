const languages = ['JavaScript', 'Python', 'C#', 'C++'];
const dsl       = ['sql', 'html', 'css']

const allLanguages = [...languages, ...dsl];

console.log(languages);
console.log(dsl);
console.log(allLanguages);

const dates = {startDate:2020, endDate:2024};

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

const courseDataForYear = [dates, courseData]
console.log(courseDataForYear);
