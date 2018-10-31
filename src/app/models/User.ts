export class User {
    id?: number;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    civility: string;
    company: string;
    subscribeToNewsLetter: boolean;


    constructor(
        id = null,
        firstName = null,
        lastName = null,
        name = null,
        email = null,
        civility = null,
        company = null,
        subscribeToNewsLetter = null,
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = name;
        this.email = email;
        this.civility = civility;
        this.company = company;
        this.subscribeToNewsLetter = subscribeToNewsLetter;
    }
    deserialize(data: User) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.name = data.name;
        this.email = data.email;
        this.civility = data.civility;
        this.company = data.company;
        this.subscribeToNewsLetter = data.subscribeToNewsLetter;
        return this;
    }
}
