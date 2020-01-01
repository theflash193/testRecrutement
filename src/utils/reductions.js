// return the total reduction by applying the minus offer
const applyMinusReduction = (totalPrize, offer) => { 
    if (totalPrize === undefined || totalPrize === undefined)
        return undefined;
    return totalPrize - offer.value;
}

// return the total reduction by applying the percentage offer
const applyPercentageReduction = (totalPrize, offer) => {
    if (totalPrize === undefined || totalPrize === undefined)
        return undefined;
    return totalPrize - ((totalPrize * offer.value) / 100);
}

// return the total reduction by applying the slice offer
const applySliceReduction = (totalPrize, offer) => {
    let slice;

    if (totalPrize === undefined || totalPrize === undefined)
        return undefined;
    slice = (totalPrize / offer.sliceValue) >> 0;
    return  totalPrize - (slice * offer.value);
}

// return the best offer
const getBestOffer = (prize, offers) => {
    let allReductions;

    if (prize === undefined || offers === undefined)
        return undefined;
    // create a array of all reduction then sort it to find the best offer
    allReductions = offers.map((offer) => {
        switch (offer.type) {
            case "minus":
                return applyMinusReduction(prize, offer);
            case "percentage":
                return applyPercentageReduction(prize, offer);
            case "slice":
                return applySliceReduction(prize, offer);
        }
     });
     allReductions.sort((a, b) => a > b);
    return allReductions[0];
}

module.exports = {applyMinusReduction, applyPercentageReduction, applySliceReduction, getBestOffer};
