export class Name {
    title?: string;
    first_name: string;
    middle_name?: string;
    last_name: string;
  
    constructor(first_name: string, last_name: string, middle_name?: string, title?: string) {
      this.title = title;
      this.first_name = first_name;
      this.last_name = last_name;
      this.middle_name = middle_name;
    }
}

export enum Language{
    HU,
    EN
}