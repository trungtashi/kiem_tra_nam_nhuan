let year = parseInt(prompt('Nhập năm'))
let leapYear = false

let div4 = year%4 == 0
if(div4){
    let div100 = year % 100 == 0
    if(div100){
        let div400 = year%400 == 0
        if(div400){
            leapYear = true
        }
    }
    else
    {
        leapYear = true
    }
}
if(leapYear){
    alert(year + ' là năm nhuận')
}
else
{
    alert(year + ' không phải năm nhuận')
}