import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  li: any;
  lis: any;
  

  constructor(private http : HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((Response:any) => {
      this.li = Response;
      console.log(this.li);
    })
  }

  showdata(item:any){
    this.lis="Name :" + item.name + " , " + "username :" + item.username }

}
