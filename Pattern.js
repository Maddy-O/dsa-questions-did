let p1 = 3
let p2 = 5

let createPattern1 = (n) => {
    /**
        *****
        *****
        *****
        *****
        ***** 
     */
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < n; j++) {
            row += "*";
        }
        console.log(row);
    }
}

let createPattern2 = (n) => {
    /**
        *
        **
        ***
        ****
        *****
     */
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

let createPattern3 = (n) => {
    /**
        1
        12
        123
        1234
        12345
     */
    for (let i = 0; i <= n; i++) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row += `${j}`;
        }
        console.log(row);
    }
}

let createPattern4 = (n) => {
    /**
        1
        22
        333
        4444
        55555
     */
    for (let i = 0; i <= n; i++) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row += `${i}`;
        }
        console.log(row);
    }
}

let createPattern5 = (n) => {
    /**
        *****
        ****
        ***
        **
        *
     */
    for (let i = 0; i <= n; i++) {
        let row = ""
        for (let j = 0; j <= n - i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

let createPattern6 = (n) => {
    /**
        12345
        1234
        123
        12
        1
     */
    for (let i = 0; i <= n; i++) {
        let row = ""
        for (let j = 1; j <= n - i; j++) {
            row += `${j}`;
        }
        console.log(row);
    }
}

let createPattern7 = (n) => {
    /**
            *    
           ***   
          *****  
         ******* 
        *********
     */
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }
        console.log(row);
    }
}

let createPattern8 = (n) => {
    /**
        *********
         ******* 
          *****  
           ***   
            *    
     */
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < i; j++) {
            row += " ";
        }
        for (let j = 0; j < (2 * n - (2 * i + 1)); j++) {
            row += "*";
        }
        for (let j = 0; j < i; j++) {
            row += " ";
        }
        console.log(row);
    }
}

let createPattern = (n) => {
    /**
            *    
           ***   
          *****  
         ******* 
        *********
        *********
         ******* 
          *****  
           ***   
            *    
     */
    let a = createPattern7(n) + createPattern8(n);
    return a;

}

let print = () => {
    console.log(createPattern(p1));
    console.log(createPattern(p2));
}

print();