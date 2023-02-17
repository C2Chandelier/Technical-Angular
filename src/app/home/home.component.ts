import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  onSend(nom: string,mail: string) {
    console.log(nom + mail)
  }
}
