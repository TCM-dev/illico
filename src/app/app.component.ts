import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      console.log(user)
      if(!user) {
        this.router.navigate(['/login'])
      }
    })
  }
}
