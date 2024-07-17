import fs from "fs";

export function calculateExecutionTime(func: () => void): number {
    const startTime = Date.now();
    func();
    const endTime = Date.now();
    const logTime = () => { let d: Date = new Date(endTime); return `${d.toDateString()} ${d.toLocaleTimeString()}` }
    let executionTime = endTime - startTime;
    const logContent = `[${logTime()}] Execution Time for ${func.name} | ${executionTime.toFixed(4)} milliseconds\n`;
    console.log(logContent);
    fs.appendFile("log.txt", logContent, (err) => {
        if (err) throw err;
        console.log("Execution time logged.");
    });
    return executionTime;
}
