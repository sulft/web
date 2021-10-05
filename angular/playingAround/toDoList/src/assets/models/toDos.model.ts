export class ToDos {
    id:number;
    titre:string;
    description:string;
    date:Date;

    constructor(
        id:number,
        titre:string,
        date:Date,
        description?:string) 
        {
            this.id = id;
            this.titre = titre;
            this.description = description || "";
            this.date = date;
    }
}