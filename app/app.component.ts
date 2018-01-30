import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taller de Angular 5';

  ngStepperInit(){
    var element = document.getElementById('stepper');
    if(element.getAttribute('class')!="visible"){
       element.setAttribute("class", "visible");

    }
     
    else{
      element.setAttribute("class", "invisible");

    }
     

  }

}
