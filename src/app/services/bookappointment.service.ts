import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookappointmentService {

  constructor() { }

  doctorDetails=[{
    id:1,
    doctorName:"Dr.Narendra varma",
    doctorDetails:"Dermotologist",
    ConsultanceFee:500,
    doctorImg: "C:\capgemini\Project\doctorAppointment\src\assets\img\doctor1img.jpg"
     },
     {
      id:2,
      doctorName:"Dr.Anjali Kumari",
      doctorDetails:"Gynocologist",
      ConsultanceFee:1000,
      doctorImg:"C:\capgemini\Project\doctorAppointment\src\assets\img\doctor2img.png"
     },
     {
      id:3,
      doctorName:"Dr.Abhijeet Singh",
      doctorDetails:"cardiologist",
      ConsultanceFee:500,
      doctorImg:"C:\capgemini\Project\doctorAppointment\src\assets\img\doctor3img.jpg"
     },
     {
      id:4,
      doctorName:"Dr.Meena Pandey",
      doctorDetails:"Dentist",
      ConsultanceFee:1000,
      doctorImg:"https://stock.adobe.com/in/search?k=indian%20doctors"
     }
    ]
  }

