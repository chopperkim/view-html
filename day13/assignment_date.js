/*
1. 2020년 1월 1일부터 오늘까지의 날짜 수를 계산하는 프로그램을 작성하시오.
(소수점은 parseInt()를 사용하여 버린다.)
 */
const someday = new Date("2020-01-01")
const today = new Date()
const diff = today.getTime() - someday.getTime()
document.write(`1번: ${parseInt(diff / (1000 * 60 * 60 * 24))}일<br>`)

/*
2. 오늘부터 500일 후의 날짜를 출력하는 프로그램을 작성하시오.
 */
const day500 = new Date(today.getTime() + 500 * (1000 * 60 * 60 *24))
document.write(`2번: ${day500.toLocaleDateString()}<br>`)
/*
3. 올 해도 크리스마스가 얼마 남지 않았습니다.
 올해 크리스마스를 100일째 되는 날로 보내려면
  언제 사귀기 시작해야 했을까요?
그리고 내년 크리스 마스를 300일로 보내려면
언제 사귀기 시작해야 할까요?
 */
const christmas = new Date("2023-12-25")
const dDay = new Date(christmas.getTime() - (100 - 1) * (1000 * 60 * 60 * 24))
document.write(`3-1번: ${dDay.toLocaleDateString()}<br>`)

const christmas1 = new Date("2024-12-25")
const dDay1 = new Date(christmas1.getTime() - (400 - 1) * (1000 * 60 * 60 * 24))
document.write(`3-2번: ${dDay1.toLocaleDateString()}`)




