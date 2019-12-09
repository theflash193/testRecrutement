// return the total reduction by applying the minus offer
const applyMinusReduction = (totalPrize, offer) => { 
    return totalPrize - offer.value;
}

// return the total reduction by applying the percentage offer
const applyPercentageReduction = (totalPrize, offer) => {
    return totalPrize - ((totalPrize * offer.value) / 100);
}

// return the total reduction by applying the slice offer
const applySliceReduction = (totalPrize, offer) => {
    let slice;

    slice = (totalPrize / offer.sliceValue) >> 0;
    return  totalPrize - (slice * offer.value);
}

// return the best offer
const getBestOffer = (prize, offers) => {
    // create a array of all reduction then sort it to find the best offer
    allReductions = offers.map((offer) => {
        switch (offer.type) {
            case "minus":
                return applyMinusReduction(prize, offer);
            case "percentage":
                return `percentage`(prize, offer);
            case "slice":
                return slice(prize, offer);
        }
     });
     allReductions.sort((a, b) => a > b);
    return allReductions[0];
}

module.exports = {applyMinusReduction, applyPercentageReduction, applySliceReduction, getBestOffer};
