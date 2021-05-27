import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.scss']
})
export class RaiseticketComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  submit(){
    this.router.navigate(['/user/support-help/ticket']);
  }
}
