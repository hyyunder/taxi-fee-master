function main(wait,distance)
{
    let money=0;
    if(distance<=2)
    {
        money=6;
    }else if(distance<=8){
        money=0.8*distance;
    }else{
        money=6.4+1.2*(distance-8);
    }
    money+=wait*0.25;
    return Math.round(money);
}
module.exports = main;