// Date의 getTime(): 1970년 1월 1일 0시 0분 0초 000밀리초를 기준으로 new Date()를 실행한
// 시각까지의 지난 시간으로 단위는 밀리초
const date = new Date()
document.write(date.toLocaleString() + "<br>")
document.write(`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 `)
document.write(`${date.getDay()}요일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초<br>`)
document.write(`경과 일자: ${date.getTime() / (1000 * 60 * 60 * 24)}일 경과<br>`)

// const date1 = new Date(2022, 11, 23) 시간을 안쓰면 0시 0분 0초로 세팅되고
// 문자열로 설정할 경우 시간을 안쓰면 9시로 세팅
const date1 = new Date(2022, 11, 23)
const date2 = new Date("2022-12-25")
const dateDiff = date2.getTime() - date1.getTime()
const interval = dateDiff / (1000 * 60 * 60 * 24)
document.write(`두 날짜의 차이는 ${interval}일입니다`)



