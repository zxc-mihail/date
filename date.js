const result = document.getElementById('result')
const getFullBtn = document.getElementById('getFullBtn')
const getDateBtn = document.getElementById('getDateBtn')
const getTimeBtn = document.getElementById('getTimeBtn')

// console.log(result.textContent)

let mode = 'time';

function getNull(value, type) {
    if (value < 10 && type == 'month') {return '0' + (value+1)}
    if (value < 10) {return ('0' + value)};
    return value
}

function showTime() {
    const date = new Date();
    const month = getNull(date.getMonth(), 'month')
    const minutes = getNull(date.getMinutes())
    const seconds = getNull(date.getSeconds()) 
    const hours = date.getHours()

    console.log(date)

    if (mode == 'time') {result.textContent = `${hours}:${minutes}:${seconds}`; return}
    if (mode == 'date') {result.textContent = `${date.getDate()}.${month}.${date.getFullYear()}`; return}
    const dayOfWeekById = date.getDay();
    let dayOfWeek;
    switch (dayOfWeekById) {
        case 0:
            dayOfWeek = 'Воскресенье'
            break
        case 1:
            dayOfWeek = 'Понедельник'
            break
        case 2:
            dayOfWeek = 'Вторник'
            break
        case 3:
            dayOfWeek = 'Среда'
            break
        case 4:
            dayOfWeek = 'Четверг'
            break
        case 5:
            dayOfWeek = 'Пятница'
            break
        case 6:
            dayOfWeek = 'Суббота'
            break
    }

    result.textContent = `${dayOfWeek} ${date.getDate()}.${month}.${date.getFullYear()} ${hours}:${minutes}:${seconds}`

}

getFullBtn.onclick = function() {mode = 'full'; 
                                    showTime()}
getDateBtn.onclick = function() {mode = 'date'; 
                                    showTime()}
getTimeBtn.onclick = function() {mode = 'time'; 
                                    showTime()}


showTime()
setInterval(showTime, 1000)