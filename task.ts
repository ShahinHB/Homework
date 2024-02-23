
const text: string = 'The rain in Spain stays mainly in the plain, rain Spain';

// Task 1
let spainList: RegExpMatchArray | null = text.match(/Spain/g);
console.log(spainList);


//Task 2
let rainList: { match: string, index: number }[] = [];
let rainRegex: RegExp = /rain/g;
let match: RegExpExecArray | null;


for (let i: number = 0; i < text.length; i++) {
  if (text.substring(i, i + 4) === 'rain') {
    rainList.push({ match: 'rain', index: i });
  }
}

rainList.forEach(occurrence => console.log(`${occurrence.match}, ${occurrence.index}`));

//Task 3
let textWithFrance: string = text.replace('Spain', 'France');
console.log(textWithFrance);
//Task 4
let textWithSun: string = text.replaceAll('rain', 'Sun');
console.log(textWithSun);

//Task 5
let plainPosition: number = text.search('plain');
console.log(plainPosition);


//Validations
let phoneRegex: RegExp = /^\d{10}$/;
let emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let ageRegex: RegExp = /^(0?[1-9]|[1-9][0-9])$/;
let passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const nameRegex: RegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
