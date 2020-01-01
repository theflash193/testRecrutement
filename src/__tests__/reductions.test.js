import {applyPercentageReduction, applySliceReduction, applyMinusReduction, getBestOffer} from '../utils/reductions'

describe("Pourcentage ", () => {
    describe("when parametres are undefined", () => { 
        test('should return undefined', () => {
            expect(applyPercentageReduction(undefined, undefined)).toBeUndefined();
        })
     })
    describe("when a prametre is (value: 5, prize: 65)", () => { 
        test('should return percentage reduction equal to 61.75', () => {
            const offer = { "type": "percentage", "value": 5 };
            expect(applyPercentageReduction(65, offer)).toBe(61.75);
        })
     })
})

describe("Minus", () => {
    describe("when parametres are undefined", () => { 
        test('should return undefined', () => {
            expect(applyMinusReduction(undefined, undefined)).toBeUndefined();
        })
     })
    describe("when a prametre is (value: 15, prize: 65)", () => { 
        test('should return 50', () => {
            const offer = { "type": "minus", "value": 15 };
            expect(applyMinusReduction(65, offer)).toBe(50);
        })
     })
})

describe("Slice", () => {
    describe("when parametres are undefined", () => { 
        test('should return undefined', () => {
            expect(applySliceReduction(undefined, undefined)).toBeUndefined();
        })
     })
    describe("when a prametre is (value: 15, prize: 65)", () => { 
        test('should return 65 slice to 100', () => {
            const offer = { "type": "slice", "sliceValue": 100, "value": 12 };
            expect(applySliceReduction(65, offer)).toBe(65);
        })
     })

    describe("when a prametre is (sliceValue: 100, value: 12, prize: 65)", () => { 
        test('should return 241', () => {
            const offer = { "type": "slice", "sliceValue": 100, "value": 12 };
            expect(applySliceReduction(265, offer)).toBe(241);
        })
     })
    
})

describe("getBestOffer", () => {
    describe("when parametres are undefined", () => { 
        test('should return undefined', () => {
            expect(getBestOffer(undefined, undefined)).toBeUndefined();
        })
    })
    describe("when parametre is offers is ((type: percentage, value: 5), (type: minus, value: 5), (type: minus, sliceValue: 100, value: 12) )", () => { 
        test('should return 50', () => {
            const offers = [
                { "type": "percentage", "value": 5 },
                { "type": "minus", "value": 15 },
                { "type": "slice", "sliceValue": 100, "value": 12 }
            ];
            expect(getBestOffer(65, offers)).toBe(50);
        });
    })
})
