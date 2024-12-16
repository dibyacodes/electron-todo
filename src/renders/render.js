const taskPercentage = document.querySelector("#percentage")
const currentTime = document.querySelector("#currentTime")
const currentDate = document.querySelector("#currentDate")
const numberOfTasks = document.querySelector("#number_of_tasks")
const completedTasks = document.querySelector('#completed_tasks')

let day = new Date()
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
currentDate.innerHTML = `${day.getDate()} ${months[day.getMonth()]} ${day.getFullYear()}`

const clock = () => {
    setInterval(() => {
        let nowDate = new Date()
        let meridiem = nowDate.getHours() >=12 ? 'pm' : 'am'
        currentTime.innerHTML = `${nowDate.getHours()%12 || 12}:${String(nowDate.getMinutes()).padStart(2,'0')} ${meridiem}`
    }, 1000);
}

clock()

let totalNumberOfTasks = 2 // get it from the local storage and showcase it
let numberOfTasksCompleted = 2 // get it from the local storage and showcase it

numberOfTasks.textContent = totalNumberOfTasks
completedTasks.textContent = numberOfTasksCompleted
taskPercentage.textContent += `${(numberOfTasksCompleted/totalNumberOfTasks*100 || 0).toFixed(0)}%`
