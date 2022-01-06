//Write a javascript program which accept a string as input and reverse it??
const reverse = str => str.split(' ').reverse().join(' ');
console.log(reverse('I love my India')); // 'India my love I'
console.log(reverse('Oh my Oh'));