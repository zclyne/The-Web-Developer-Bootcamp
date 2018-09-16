function average(list)
{
    var sum = 0;
    list.forEach(function(score) {
        sum += score;
    });
    return Math.round(sum/list.length);
}

var scores1 = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores1)); // 94
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); // 68