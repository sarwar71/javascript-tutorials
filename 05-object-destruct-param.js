const student = {
    name: 'Murad Takla',
    age: 34,
    married: false,
    father: {
        name: 'Hasan Takla',
        age: 60
    },
    mother: {
        name: 'Arju Begum',
        age: 55
    }
}

/**
 * Print a student's name only
 */
function printName({name}) {
    console.log("in-printName")
    console.log("Name: " + name)
    console.log()
}

printName(student)

/**
 * Print a student's basic information
 */
function printBasicStudentInfo({father: {name: fatherName}, name}) {
    console.log("in-printBasicStudentInfo");
    console.log("Name: " + name + ", Father's Name: " + fatherName);
}

printBasicStudentInfo(student)

/*
Falsy value: false, 0, -0, 0n, "", null, undefined, NaN
Truthy value: all else
Truthy to be careful about: [], {}, " ", "0"

1=="1" -> true
1==="1" -> false
So always prefer to use === and !==
*/