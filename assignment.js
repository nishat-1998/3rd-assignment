

//kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
/*var realMeter = kilometerToMeter(4);
console.log(realMeter);*/

//budgetCalculator
function budgetCalculator(watch,phone,laptop){
        var calculator = watch + phone + laptop;
        return calculator;
}
 var count = (5 *50 + 3 * 100 + 2 *300);
 /*console.log(count);*/


//hotelCost
function hotelCost(discount){
var cost = 0;
if(discount <=10){
    cost = discount * 100;
}
else if (discount <= 20) {
    var firstoffer = 10 * 100;
    var remaining = discount - 10;
    var secondoffer = remaining * 80;
    cost = firstoffer + secondoffer;
}else{
    var firstoffer = 10 * 100;
    var secondoffer = 10 * 80;
    var remaining = discount - 20;
    var thirdoffer = remaining * 50;
    cost = firstoffer + secondoffer + thirdoffer;
}

return cost;
}
/*var count= hotelCost(48);
console.log(count);*/

//megaFriend
function megaFriend(friendName){
    return friendName.reduce(function(meganame, friend) 
    {
      return meganame.length > friend.length ? meganame : friend;
    }, 
  "");
  }
 /* console.log(megaFriend(["Rokib", "Asif", "Mohsin","Abdullah"]));*/
