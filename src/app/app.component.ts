import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-move-in-med';

  constructor(private router: Router) {}


  goToHome() {
    this.router.navigate(['/homepage']); 
  }

  goToLogin() {
    this.router.navigate(['/loginepage']); 
  }

}
