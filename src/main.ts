import { calculateExecutionTime } from "./utils"

calculateExecutionTime(() => {
    let data = "sadasdddddddddddddadsasdasdas"
    for (let index = 0; index < data.length; index++) {
        console.log(data[index]?.charCodeAt(0))
    }
})        