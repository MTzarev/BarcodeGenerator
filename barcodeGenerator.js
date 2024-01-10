function barcodeGenerator(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
 
    let start = startNumber.toString();
    let end = endNumber.toString();
    let barcode = "";
    for (let i = start.charAt(0); i <= end.charAt(0); i++) {
        for (let j = start.charAt(1); j <= end.charAt(1); j++) {
            for (let k = start.charAt(2); k <= end.charAt(2); k++) {
                for (let l = start.charAt(3); l <= end.charAt(3); l++) {
                    
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        barcode += `${i}${j}${k}${l}` + " ";
                        
                    }
                }
            }
        }
    }
    console.log(barcode);
}
barcodeGenerator(["2345", "6789"])

/*for (let i = 0; i < num.length; i++){
let inputAsNumber = Number(num[i]);
sum += inputAsNumber
    }
    console.log(`The sum of the digits is:${sum}`);*/