const email = "test!naver.com"

if (!email.includes("@")) {
    console.log("올바른 이메일 형식이 아닙니다.")
}
if (email.indexOf("@")) {
    console.log("올바른 이메일 형식이 아닙니다.")
}

let arr = email.split("!")
console.log(`${arr[0]}, ${arr[1]}`)

console.log("1234567890".charAt(1))
console.log("1234567890".slice(1))
console.log("1234567890".substr(1, 2))








