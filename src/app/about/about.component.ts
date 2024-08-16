import { DatePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor,DatePipe,FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  info={
    nom:"Med",
    email:"med@gmail.com",
    tel:778627272
  }
  comments=[
    {date:new Date(),message:"A"},
    {date:new Date(),message:"B"},
    {date:new Date(),message:"C"}
  ];

 
  commentForm={date:null,message:""}

  constructor(){}

  ngOnInit(): void {}

  
  onAddCommentForm() {
    
  }
    

}
