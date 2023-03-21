import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.scss']
})
export class ForcastComponent {
  inputData:any;
  constructor(private service:DataService){}
  dummy="https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric"
  url1="https://api.openweathermap.org/data/2.5/weather?q=";
  url2="&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric"
  getweatherdata(){
    if(this.inputData){
    let city=this.inputData.toLowerCase()
    console.log(city)
    let getAPIurl=this.url1+city+this.url2;
    console.log(getAPIurl);
    console.log(this.dummy);
    this.service.getApi(getAPIurl).subscribe((res:any)=>{
      let data=[res]
      console.log(data);
    })
  }
  }
}
