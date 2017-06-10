/**
 * Created by USER on 10/06/2017.
 */
/**
 *
 * @param name
 * @param rollNumber
 */
let display = (name: string, rollNumber: number) => {
    return `My Name is:${name},My Roll number is ${rollNumber}`
}

let message = display("Karthik", 12345);
console.log(message);
