import { Component, OnInit, inject } from '@angular/core';
import { AuthGoogleService } from '../services/auth-google.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, MatToolbarModule, MatButtonModule,MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  private authService = inject(AuthGoogleService);
  private router  = inject(Router);
  profile:any;

  ngOnInit(): void {
    this.showData();
  }

  showData(){
    debugger;
   this.profile = this.authService.getProfile();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
