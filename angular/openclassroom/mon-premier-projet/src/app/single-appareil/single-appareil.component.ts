import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {
  
  appareil:any;
  name:string = 'appareil';
  status:string = 'statut';

  constructor(private appareilService:AppareilService,private route:ActivatedRoute) { }

  ngOnInit() {
    const id =this.route.snapshot.params['id'];
    this.appareil = this.appareilService.getAppareilById(+id);
    this.name = this.appareil.name;
    this.status = this.appareil.status;
  }

}
