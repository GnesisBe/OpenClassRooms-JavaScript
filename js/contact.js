class Contact {
    
    constructor(lastname, firstname) {
        this.lastname = lastname;
        this.firstname = firstname;
    }

    getUserInfo() {
        console.log(`Nom : ${this.lastname}, prénom : ${this.firstname}`);
    }
}

user_1 = new Contact('Doe', 'John');
user_2 = new Contact('Swift', 'Gad');

let users = [
    user_1,
    user_2
];

function addUser() {
    let lastname = prompt('Entrez le prénom du contact');
    let firstname = prompt('Entrez le nom du contact');
    let user = new Contact(lastname, firstname);
    console.log(`Le contact à bien été ajouté`);
    users.push(user);
}

function getUsersList() {
    console.log('Voici la liste des contacts :');
    
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        console.log(`Nom : ${element.lastname}, prénom : ${element.firstname}`);
    }
}




console.log('Bienvenue dans le gestionnaire de contacts !');
console.log('1 : Lister les contacts');
console.log('2 : Ajouter un contact');
console.log('0 : Quitter');

let choice = prompt('Choississez une option');

for (let index = 0; choice != '0'; index++) {
    if(choice === '1') {
        getUsersList();
    } else if(choice === '2') {
        addUser();
    }
    console.log('\n\n');
    console.log('1 : Lister les contacts');
    console.log('2 : Ajouter un contact');
    console.log('0 : Quitter');

    choice = prompt('Choississez une option');
}

if(choice === '0') {
    console.log('Quitter');
}
