function getArrayMaxNumber(arr) {
    let max = 0
    // 배열의 최대값이 리턴되도록
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}
function getArrayMinNumber(arr) {
    let min = 100
    // 배열의 최대값이 리턴되도록
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min
}

const max = getArrayMaxNumber([10, 50, 30])
const min = getArrayMinNumber([10, 50, 30])
console.log(`${max}, ${min}`)













