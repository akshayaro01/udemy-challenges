const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;


const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
if (dolphinsAverage === koalasAverage) {
    console.log("drawkoalas average is "+koalasAverage+" dolphin average is "+dolphinsAverage)
}
else if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("dolphin win dolphin score is "+dolphinsAverage)
}
else if
    (koalasAverage > dolphinsAverage && koalasAverage >= 100) {

    console.log("koalas win koalas score is "+koalasAverage)
} 
else
{
    console.log("average is not greater then 100 koalas average is "+koalasAverage+" dolphin average is "+dolphinsAverage)
}
//last