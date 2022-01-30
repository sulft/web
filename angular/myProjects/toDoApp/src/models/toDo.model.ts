export class toDo {
    public title:string;
    public description:string;
    public importance:number;
    public creationDate:Date;
    public updatedDate?:Date;

    constructor(title: string, description: string, importance: number, creationDate:Date, updatedDate?:Date) {
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.creationDate = creationDate;
        this.updatedDate = updatedDate;
    }
}