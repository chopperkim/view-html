// prompt로 두명의 사용자로부터 가위, 바위, 보를 입력받아
// 누가 이겼는지 결과를 출력하는 프로그램을 작성하시오.
// 출력 결과
// 철수: 가위
// 영희: 보
// 결과: 철수 승!!
let cheolsu = prompt("철수","가위")
let yeonghee = prompt("영희","가위")

let result = ""
if (cheolsu === yeonghee) {
    result = "비겼습니다."
} else if (cheolsu === "가위" && yeonghee === "바위"
            || cheolsu === "바위" && yeonghee === "보"
            || cheolsu === "보" && yeonghee === "가위") {
    result = "영희 승!"
} else {
    result = "철수 승!"
}

document.write(`철수: ${cheolsu}<br>`)
document.write(`영희: ${yeonghee}<br>`)
document.write(`결과: ${result}`)










