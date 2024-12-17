const taskPercentage = document.querySelector("#percentage")
const currentTime = document.querySelector("#currentTime")
const currentDate = document.querySelector("#currentDate")
const numberOfTasks = document.querySelector("#number_of_tasks")
const completedTasks = document.querySelector('#completed_tasks')

const taskListRenderDiv = document.querySelector("#taskDiv")
const newTaskButton = document.querySelector("#newTaskButton")
// creating tasks

const randInt = () => {
    let random = Math.floor(Math.random()*1000+1)
    console.log(random)
    return random
}

const storeTask = (value,id,taskStatus=false) => {
    let dataHolder = JSON.parse(localStorage.getItem("tasks")) || []

    const taskToStore = {
        task_name : value,
        task_id : id,
        checkedStatus : taskStatus
    }

    dataHolder.push(taskToStore)
    localStorage.setItem("tasks",`${JSON.stringify(dataHolder)}`)
}

const createTasks = () => {
    let randomId = randInt() // random number
    // let elementType = "div"
    const taskGroup = document.createElement("div")
    taskGroup.setAttribute("class",randomId)
    taskGroup.setAttribute("id","taskElementGroup")

    const checkboxDiv = document.createElement("div")
    const checkboxElement = document.createElement("input")
    checkboxElement.setAttribute("type","checkbox")
    checkboxElement.setAttribute("id","inputCheckbox")

    const labelDiv = document.createElement("div")
    const labelElement = document.createElement("input")
    labelElement.setAttribute("id","taskName")

    labelElement.style.background = "none"
    labelElement.style.border = "none"
    labelElement.style.outline = "none"
    labelElement.style.textWrap = "wrap"
    labelElement.placeholder = "New Task"
    
    labelDiv.style.width = "100%"
    labelDiv.style.display = "flex"
    labelDiv.style.flexDirection = "column"
    
    
    checkboxDiv.appendChild(checkboxElement)
    taskGroup.appendChild(checkboxDiv)

    labelDiv.appendChild(labelElement)
    taskGroup.appendChild(labelDiv)

    taskListRenderDiv.appendChild(taskGroup)

    labelElement.addEventListener('keydown',(event)=>{
        if (event.key === "Enter" && labelElement.value.split(' ').join('').length !==0){
            console.log(labelElement.value)
            storeTask(labelElement.value,randomId)
        }
    })

    // after the tasks are created it is to be displayed in the tasklist
    /* for that this program accesses the localstorage and then create a number of labelElement which is
    equal to the number of tasks in the array in LS, i.e. length of LS
    
    And since labelElement is a HTMLInputElement, it sets, the input.value equal to the task name*/
}

newTaskButton.addEventListener('click',()=>{
    createTasks()
})



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

let totalNumberOfTasks = JSON.parse(localStorage.getItem("tasks")).length // get it from the local storage and showcase it
let numberOfTasksCompleted = 2 // get it from the local storage and showcase it

numberOfTasks.textContent = totalNumberOfTasks
completedTasks.textContent = numberOfTasksCompleted
taskPercentage.textContent += `${(numberOfTasksCompleted/totalNumberOfTasks*100 || 0).toFixed(0)}%`
