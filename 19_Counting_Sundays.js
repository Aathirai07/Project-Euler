//Project Euler: Problem 19: Counting Sundays

//How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
//Solution
function countingSundays(firstYear, lastYear) {
    var result = 0;
    for (var year = firstYear; year <= lastYear; year++) {
        for (var month = 0; month < 12; month++) {
            if (new Date(year, month, 1).getDay() === 0)
                result++;
        }
    }
    console.log(result)
    return result;
}
countingSundays(1995, 2000);