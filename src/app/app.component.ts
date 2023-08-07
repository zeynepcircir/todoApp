import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Zeynep Çırçır';
  items: [
    {description: "kahvaltı", action:"no"},
    {description: "sinema", action:"no"},
    {description: "ders", action:"no"},
    {description: "temizlik", action:"no"}
  ];
}
