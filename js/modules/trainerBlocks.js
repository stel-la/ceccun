const elements = element;
const ls = window.localStorage;
const trnr = ls.getItem("trainerMode");

console.log(trnr)
if (trnr == "1") {
    return element.getElementsByTagName("div")[1].innerHTML;
} else {
    return element.getElementsByTagName("div")[0].innerHTML;
}