export class Article {
    title:string;
    link:string;
    votes:number;

    constructor(title:string, link:string, votes?:number) {
        this.link = link;
        this.title = title;
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes += 1
    }

    voteDown() {
        this.votes -= 1
    }

    domain(): string {
        try {
            // e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
            // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return '';
        }
    }
}

