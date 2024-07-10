//================= Type Literal & union ( | ) ==================

//  union use for two types or more than two types ( "|" )

let trafficLight: "red" | "yellow" | "green" = "red" ;
console.log(trafficLight);

// Type Literal

let age: "ten year old" = "ten year old" ;
console.log(age);


//  Type Intersection

type student = {
    name: string,
    rollNumber: number,
}

type teacher ={
    name: string,
    exp: number,
}

let std1 : student = {
    name: "areeb",
    rollNumber : 456, 
} 
console.log(std1);

let Teacher: teacher = {
    name: "Hamza",
    exp: 6,
}
console.log(Teacher);

let both : teacher & student = {
    name: "Aiman",
    rollNumber: 1234,
    exp:7,
}
console.log(both);


let country: "Pakistan" | "India" | "China" | "Afghanistan" = "Pakistan";
console.log(country);