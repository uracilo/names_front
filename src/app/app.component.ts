import { Component } from '@angular/core';
import { JsonService } from './json.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Service Levels';
  
  data:any;

  constructor(public json: JsonService){
    this.json.getJson('https://namesapi.herokuapp.com/').subscribe((res: any) => {
      this.data=res
      console.log(res)
    })
  }


  
}

