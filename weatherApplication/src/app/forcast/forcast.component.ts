import { Component } from '@angular/core';
import { DataService } from '../data.service';
import {DatePipe} from  '@angular/common'
@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.scss']
})
export class ForcastComponent {
  inputData:any;
  image="rainy"
  scattered:any="assets/weather (1).png";
  broken:any="assets/weather-icon-android-3.jpg"
  rainy:any="assets/sunny and rainy.png"
  smoke:any="assets/kindpng_1780516.png"
  sunny:any="assets/Sunny Weather.png"
  Night:any="assets/night-mode.png"
  weatherDetails: any;
  url1="https://api.openweathermap.org/data/2.5/weather?q=";
  url2="&appid=0dff09323c7d5e87c82d71246c689790&units=metric"

  constructor(private service:DataService,private date:DatePipe){}

  getweatherdata(){
    if(this.inputData){
    let city=this.inputData.toLowerCase()
    console.log(city)
    let getAPIurl=this.url1+city+this.url2;
    console.log(getAPIurl);
    this.service.getApi(getAPIurl).subscribe((res:any)=>{
      this.image=res.weather[0].description
      this.weatherDetails=res
      console.log(this.weatherDetails);
      console.log(this.image);
    })
  }
  }

}
