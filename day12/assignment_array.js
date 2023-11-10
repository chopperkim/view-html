/*
 문제 1. 사람 이름을 계속 입력 받아 배열에 저장하고
 그 저장된 이름을 출력하는 프로그램을 작성하시오.
 (단, 입력의 마지막은 null(취소버튼)이나 ""(공백문자)를
  입력했을 때로 한다.
 */
/*
let names = []
while (true) {
    let inputName = prompt("이름을 입력하세요.", "")
    if (inputName == null || inputName === "") {
        break
    }
    names.push(inputName)
}
names.forEach(value => document.write(value + "<br>"))
*/
/*
let names = []
const saveNames = function () {
    let inputName = prompt("이름을 입력하세요.", "")
    if (inputName != null && inputName !== "") {
        names.push(inputName)
        saveNames()
    }
    return names
}

saveNames().forEach(value => document.write(value + "<br>"))
*/

/*
function inputName() {
    var name = prompt("이름을 입력하세요 (종료하려면 '그만'을 입력하세요):");
    if (name && name.toLowerCase() !== "그만") {
        // 입력된 이름이 '그만'이 아니면 배열에 추가합니다.
        names.push(name);
        inputName(); // 다음 이름을 입력받기 위해 함수를 재귀 호출합니다.
    } else {
        // '그만'이 입력되면 이름을 출력합니다.
        if (names.length > 0) {
            console.log("저장된 이름:");
            for (var i = 0; i < names.length; i++) {
                console.log(names[i]);
            }
        } else {
            console.log("아무 이름도 저장되지 않았습니다.");
        }
    }
}
// 함수를 호출하여 프로그램을 시작합니다.
// inputName();
*/

/*
 문제 2. 서로 중복되지 않은 정수 5개를 입력 받아
 출력하는 프로그램을 작성하시오.
 프롬프트로 입력받기
 예제
 숫자 입력하세요. => 5
 숫자 입력하세요. =>10
 숫자 입력하세요. => 10 => 다시 입력하세요(alert)
 숫자 입력하세요. => 15
 숫자 입력하세요. => 5 => 다시 입력하세요(alert)
 숫자 입력하세요. => 20
 숫자 입력하세요. => 25
 출력 => 입력하신 숫자는 : 5, 10, 15, 20, 25입니다.
*/

let numbers = []
for(let i = 0; i < 5; i++) {
    let inputNum = prompt("숫자를 입력하세요.", "")
    numbers.push(inputNum)
    for (let j = 0; j < i; j++) {
        if (numbers[j] === numbers[i]) {
            alert("중복된 정수입니다.")
            numbers.pop()
            i--
            break
        }
    }
}
numbers.forEach(value => document.write(`${value}<br>`))




/*
var uniqueNumbers = [];
function inputUniqueNumbers() {
    if (uniqueNumbers.length < 5) {
        var input = prompt(`서로 중복되지 않는 정수 ${uniqueNumbers.length + 1}개를 입력하세요:`);
        var number = parseInt(input);

        if (!isNaN(number) && uniqueNumbers.indexOf(number) === -1) {
            uniqueNumbers.push(number);
        } else {
            alert("올바른 정수를 입력하세요.");
        }

        inputUniqueNumbers(); // 다음 정수를 입력받기 위해 함수를 재귀 호출합니다.
    } else {
        console.log("입력된 서로 중복되지 않는 정수:");
        console.log(uniqueNumbers);
    }
}

inputUniqueNumbers();
*/
