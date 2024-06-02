const sentence = "Saya sangat senang mengerjakan soal algoritma"

const longest = (stc) => {
    return stc.split(' ').reduce((a, b) => a.length > b.length ? a : b)
} 

console.log(longest(sentence));