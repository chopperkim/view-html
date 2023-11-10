/*
1. 인공지능 컴퓨터와 가위, 바위, 보 게임을 할 수 있는
프로그램을 작성하시오.
(컴퓨터는 랜덤으로 하고, 사용자는 prompt로 입력을 받아서 처리)
 */
/*
let player = prompt("플레이어","")
let ranNum = Math.floor(Math.random() * (2 - 0 + 1) + 0)
const computerArr = ["가위", "바위", "보"]
let ai = computerArr[ranNum]

let result = ""
if (player === ai) {
    result = "비겼습니다."
} else if (player === "가위" && ai === "바위"
    || player === "바위" && ai === "보"
    || player === "보" && ai === "가위") {
    result = "AI 컴퓨터 승!"
} else {
    result = "플레이어 승!"
}

document.write(`플레이어: ${player}<br>`)
document.write(`AI: ${ai}<br>`)
document.write(`결과: ${result}`)
*/

/*
2. 로또 번호를 생성하는 프로그램을 작성하시오.
(1번 ~ 45번 중 6개의 번호를 추첨)
 */
let lottos = [];
for (let i = 1; i <= 45; i++) {
    lottos.push(i)
}
for (let i = 0; i < lottos.length; i++) {
    let ranNum = Math.floor(Math.random() * (44 - 0 + 1) + 0);
    [lottos[i], lottos[ranNum]] = [lottos[ranNum], lottos[i]]
    // let temp = lottos[i]
    // lottos[i] = lottos[ranNum]
    // lottos[ranNum] = temp
}
const lottoNumber = []
for (let i = 0; i < 6; i++) {
    lottoNumber[i] = lottos[i]
}
document.write(lottoNumber + "<br>")
let x = 10
let y= 20;
// let temp = x
// x = y
// y = temp

[x, y] = [y, x]
document.write(`${x}, ${y}<br>`)

const student = {
    studentName: "홍길동",
    subject: ["자바", "DB"],
    studentNumber: 1
}
let {
    studentName, subject, studentNumber
} = student
document.write(`${student["studentName"]}`)
// document.write(`${studentName}: ${subject}`)
