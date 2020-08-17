const tekst2 = "";

const liczba1 = 123;

const tekst1 = 'moja liczba to ' + liczba1;
const tekst3 = `moja liczba to ${ liczba1 }`;

const tablica1 = [1, 2, 3];
tablica1.forEach(liczba => console.log(liczba * 2));

const tablica = [1,2,3,4,5,6,7,8,9,10,123,4532];

tablica.forEach(liczba => {
    console.log(`${liczba}: ${liczba % 2 === 0 ? 'parzysta' : 'nieparzysta'}`);
});

const user1 = {
    name: 'Jan',
    age: 123,
    
    adres: {
        ulica: 'Orzechowa 12',
        kod: 78400,
        miasto: 'Szczecinek'
    }
};

const user2 = {
    name: 'Jan',
    age: 123,
    
    adres: {
        ulica: 'Orzechowa 12',
        kod: 78400,
        miasto: 'Szczecinek'
    }
};
const users = [user1, user2];

console.log(users);

console.log(
    'tekst1: ' + typeof tekst1,
    'liczba1: ' + typeof liczba1
)

