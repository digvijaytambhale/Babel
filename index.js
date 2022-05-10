import { renderChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime } from "./reading";
import {calculateCost, mapcalculateTotalConsumptions} from "./consumptionsOperations";

const readings = await getReadings();
console.log('readings', readings);

if(document.getElementById('total-cost')) {
    document.getElementById('total-cost').innerHTML = calculateCost(readings);
}
if(document.getElementById('total-consumption')) {
    document.getElementById('total-consumption').innerHTML = mapcalculateTotalConsumptions(readings);
}
renderChart(sortByTime(groupByDay(readings)).slice(-30));
