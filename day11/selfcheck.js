// 1. 원의 넓이를 반환하는 함수
function getArea(radius) {
    return radius * radius * Math.PI
}
console.log(getArea(5))
// 2. 최대값 반환하는 함수
const getMax = (arr) => {
    let max = arr[0]
    for (const index in arr) {
        if (arr[index] > max) {
            max = arr[index]
        }
    }
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i]
    //     }
    // }
    return max
}
console.log(getMax([8, 48, 29, 10, 23, 98, 73, 61, 58, 25, 82]))


// 3. 체질량지수
function getBmi(height, weight) {
    height /= 100
    let bmi = weight / (height * height)
    console.log(bmi)
    let result = ''
    switch (true) {
        case bmi > 25:
            result = '비만'
            break
        case bmi >= 24 && bmi <= 25:
            result = '과체중'
            break
        case bmi >= 18.5 && bmi <= 23:
            result = '정상'
            break
        case bmi < 18.5:
            result = '저체중'
            break
    }
    return result
}
console.log(getBmi(173, 66))






