import { getStockData } from "./script.js";
console.log(getStockData());

setInterval(() => {
    const stockData = getStockData();
    document.getElementById("stock-name").textContent = stockData.name;
    document.getElementById("stock-symbol").textContent = stockData.sym;
    document.getElementById("stock-price").textContent = stockData.price;
    document.getElementById("stock-time").textContent = stockData.time;
}, 1500);