import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClassesService } from 'src/app/Services/classes.service';
import { classes } from 'src/app/Models/classes';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})

export class ClassesComponent implements OnInit {
  // classList:classes[];
  classListOfCat:classes[]=[];
//  @Input() receivedCatID:number = 0;

  constructor( private router:Router,
    private classService:ClassesService) {
      // this.classList=[

      //   { id : 1, name: "Shirt" ,quantity: 4,price:250 ,imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Wpp6S_fatll3GogsMYuL-qQa5bImRx4O-Q&usqp=CAU",catID: 1},
      //   { id: 3, name: "Scurt" ,quantity: 0,price:540 ,imgURL: 'https://images.vestiairecollective.com/cdn-cgi/image/w=500,h=500,q=80,f=auto,https://images.vestiairecollective.com/cdn-cgi/image//produit/black-glitter-zara-shorts-15968966-1_2.jpg',catID:1 },
      //   { id : 7, name: "Woman SHOES" ,quantity: 2,price:500 ,imgURL: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.6435-9/121980556_115387393679302_5166892952962981396_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=973b4a&_nc_ohc=XXR2XbDWYeoAX-e7udL&_nc_ht=scontent.fcai19-4.fna&oh=00_AT_SRLZmx4Z0R9QFuMkuyl8PJWPiyHZ4EUzctA2lye7zGg&oe=62E8B7AB',catID: 2},
      //   { id : 9, name: "SHOES" ,quantity: 1,price:700 ,imgURL: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.6435-9/121980556_115387393679302_5166892952962981396_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=973b4a&_nc_ohc=XXR2XbDWYeoAX-e7udL&_nc_ht=scontent.fcai19-4.fna&oh=00_AT_SRLZmx4Z0R9QFuMkuyl8PJWPiyHZ4EUzctA2lye7zGg&oe=62E8B7AB',catID: 2},
      //   { id : 13, name: "Sport skecher " ,quantity:4 ,price:2000 ,imgURL:'https://m.media-amazon.com/images/I/71P6H0h9ocL._AC_SX500_.jpg' ,catID: 2},
      //   { id : 15, name: "skechers" ,quantity:5 ,price:1200 ,imgURL:'https://m.media-amazon.com/images/I/41QHXdpABbL._AC_.jpg' ,catID: 2},
      //   { id : 17, name: "ULTIMATTE MATTE LIPSTICK" ,quantity:8 ,price:300 ,imgURL:'https://static.zara.net/photos///2021/V/2/1/p/4110/813/611/2/w/563/4110813611_6_1_1.jpg?ts=1619781353335' ,catID: 3},
      //   { id : 19, name: "VELVET PIGMENT LIP GLOSS" ,quantity:5 ,price:290 ,imgURL:'https://static.zara.net/photos///2021/V/2/1/p/4130/321/643/2/w/563/4130321643_6_1_1.jpg?ts=1622191591968' ,catID: 3},
      //   { id : 22, name: "FLEUR DE PATCHOUL" ,quantity:1 ,price:500 ,imgURL:'https://static.zara.net/photos///2022/V/2/1/p/0160/005/999/2/w/563/0160005999_6_1_1.jpg?ts=1642436934351' ,catID: 3},
      //   { id : 22, name: "Powder BRUSH" ,quantity:4 ,price:400 ,imgURL:'https://static.zara.net/photos///2021/V/2/1/p/4150/501/250/2/w/563/4150501250_6_1_1.jpg?ts=1619781394729' ,catID: 3}, ] ;

    }

  ngOnChanges(): void {

  // this.classService.getclassByCatID(this.receivedCatID).subscribe(classList=>{
  //   this.classListOfCat=classList;
  // })

  }

  ngOnInit(): void {
    this.classService.getAllclass().subscribe(response=>{
      this.classListOfCat=response;
      console.log(this.classListOfCat);
    });


  }
  // openClassDetails(calID:number){

  //   this.router.navigate(['classes',calID]);

  // }

}



