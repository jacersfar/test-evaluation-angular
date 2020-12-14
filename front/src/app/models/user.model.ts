export class User {
    constructor(private _id: string, 
        private nom: string,
        private prenom: string,
        private age: number,
        private email: string,
        private password: string,
        private admin: boolean,
        private saltSecret: string) {}

    get Nom(): string {
        return this.nom;
    }
    set Nom(nom: string) {
        this.nom = nom;
    }

    get Prenom(): string {
        return this.prenom;
    }
    set Prenom(prenom) {
        this.prenom = this.prenom;
    }

    get Age(): number {
        return this.age;
    }

    set Age(age: number) {
        this.age = age;
    }
    get Email(): string {
        return this.email;
    }
    set Email(email: string) {
        this.email = email;
    }
    get Password(): string {
        return this.password;
    }
    set Password(password: string) {
        this.password = password;
    }
    get Admin(): boolean {
        return this.admin;
    }
    set Admin(admin: boolean) {
        this.admin = admin;
    }
    get SaltSecret(): string {
        return this.saltSecret;
    }
    set SaltSecret(saltSecret: string) {
        this.saltSecret = saltSecret;
    }
}