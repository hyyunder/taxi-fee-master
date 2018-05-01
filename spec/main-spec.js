'use strict';
const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...

    it('出租车行驶1公里的费用',function(){
        var result=main(0,1);
        expect(result).toEqual(6);
    });

    it('出租车行驶7公里的费用',function(){
        var result=main(0,7);
        expect(result).toEqual(6);
    });

    it('出租车行驶9公里的费用',function(){
        var result=main(0,9);
        expect(result).toEqual(8);
    });

    it('出租车等待3分钟，行驶2公里的费用',function(){
        var result=main(3,2);
        expect(result).toEqual(7);
    });
});
