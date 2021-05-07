let greeting: string = "Hello world!";
let arr: string[] = ['Hello', 'World', '!'];
let arr2: (string | boolean)[] = ['Hello', 'World', true];

function fullname(firstname: string, lastname?: string): string {
    return `${firstname} ${lastname}`;
}

fullname('Johan')

interface User {
    name: string,
    epost: string,
    age: number
}

let user: User = {
    name: 'Johan Kivi',
    epost: 'johan.kivi@zocom.se',
    age: 39
}
