import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import {  takeUntil } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data:DataService) { }

  products = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  ngOnInit(): void {
    this.data.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe(
      (data: HttpResponse<any>) => {
        console.log(data);
        this.products = data.body;
      }
    );  
  }

  public firstPage() {
    this.products = [];
    this.data.sendGetRequestToUrl(this.data.first).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.products = res.body;
    })
  }
  public previousPage() {

    if (this.data.prev !== undefined && this.data.prev !== '') {
      this.products = [];
      this.data.sendGetRequestToUrl(this.data.prev).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }

  }
  public nextPage() {
    if (this.data.next !== undefined && this.data.next !== '') {
      this.products = [];
      this.data.sendGetRequestToUrl(this.data.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }
  }
  public lastPage() {
    this.products = [];
    this.data.sendGetRequestToUrl(this.data.last).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.products = res.body;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
