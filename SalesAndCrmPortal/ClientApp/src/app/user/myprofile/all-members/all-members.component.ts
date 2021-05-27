import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.scss']
})


export class AllMembersComponent implements OnInit {

  public customers: Customer[];
  baseUrl: string;
  

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

    ngOnInit(): void {
      this.httpClient.get<Customer[]>(this.baseUrl + 'Customers').subscribe(result => {
        this.customers = result;
      }, error => console.error(error));
    }

}

interface Customer {
  CustomerId: string;
  CustomerLastName: string;
  CustomerFirstName: string;
  AgentId: string;
  DateOfBirth: Date;
  MembershipDuration: string;
  CityCode: string;
  CountryCode: string;
  ZipCode: string;
  Address: string;
  Phone: string;
}
