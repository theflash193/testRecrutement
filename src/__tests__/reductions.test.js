const  reductions = require("../utils/reductions");

describe("", () => {
    test('should return percentage reduction equal to 61.75', () => {
        const offer = { "type": "percentage", "value": 5 };
        expect(reductions.applyMinusReduction(65, offer)).toBe(61.75);
    })

})

test('should return 65 minus 15', () => {
    const offer = { "type": "minus", "value": 15 };
    expect(reductions.applyPercentageReduction(65, offer)).toBe(50);
})

test('should return 65 slice to 100', () => {
    const offer = { "type": "slice", "sliceValue": 100, "value": 12 };
    expect(reductions.applySliceReduction(65, offer)).toBe(65);
})

test('should return 65 slice to 100', () => {
    const offer = { "type": "slice", "sliceValue": 100, "value": 12 };
    expect(reductions.applySliceReduction(265, offer)).toBe(241);
})

describe("test on getBestOffer", () => { 

    test('should return 65 slice to 100', () => {
        const offers = [];
        expect(reductions.getBestOffer(65, offers)).toBe(50);
    });

    test('should return 65 slice to 100', () => {
        const offers = [
            { "type": "percentage", "value": 5 },
            { "type": "minus", "value": 15 },
            { "type": "slice", "sliceValue": 100, "value": 12 }
          ];
        expect(reductions.getBestOffer(65, offers)).toBe(50);
    });
 });
