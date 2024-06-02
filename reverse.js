const value = "NEGIE1";

const result = (string) => {
    return string.slice(0, -1).split("").reverse().join("") + string.slice(-1);
}
console.log(result(value));