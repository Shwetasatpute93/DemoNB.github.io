import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  enquiry(){

      this.route.navigate(['/home']);
  }

}
