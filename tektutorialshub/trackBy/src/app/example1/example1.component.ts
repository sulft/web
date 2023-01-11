import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {
  title: string = "Top 5 Movies version classique";
  
  movies:Movie[]=[];
 
  mTitle:string="";
  mDirector:string="";

  ngOnInit() {
    this.Refresh();
  }
 
  remove(i:number) {
    this.movies.splice(i,1);
  }
 
  addMovie() {
    this.movies.push({ title: this.mTitle, director: this.mDirector})
    this.mTitle=""
    this.mDirector=""
  }
 
  Refresh() {
    console.log("refresh")
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore'},
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder'},
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo'},
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer'},
      { title: 'Warcraft', director: 'Duncan Jones'},
    ]
  }

  trackByFn(index:number,item:Movie) {
    return item.director;
  }
}

class Movie {
  title?: string;
  director?: string;
}