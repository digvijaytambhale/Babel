const mapTotalConsumptionsCost = (vals) => {
    let reducer;
    let temp = vals.map(function(item){
        return item.value;
    });
    reducer = temp.reduce((acc, currVal)=> {
        return acc + currVal;
    })
    console.log('reducer', reducer);
    return reducer;
}
export const calculateCost = (readings) => {
    let totalCost = mapTotalConsumptionsCost(readings)*0.138;
    console.log('totalCost', totalCost);
    return Math.ceil(totalCost);
}

export const mapcalculateTotalConsumptions = (readings) => {
    let totalConsumption = mapTotalConsumptionsCost(readings);
    return totalConsumption;
}