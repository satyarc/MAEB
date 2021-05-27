import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-member-add-edit',
  templateUrl: './member-add-edit.component.html',
  styleUrls: ['./member-add-edit.component.scss']
})
export class MemberAddEditComponent implements OnInit {

  baseUrl: string;
  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {
  }

  addMember(): void {
    
    const FamilyMember = new HttpParams()
      .set('FamilyMemberId', '15')
      .set('Lastname', 'Raj')
      .set('Firstname', 'Kapoor')
      .set('MemberID', '001')
      .set('DateOfBirth', '')
      .set('Relation', 'Husband')
      .set('CityCode', '002')
      .set('CountryCode', '003')
      .set('ZipCode', '005')
      .set('Address', 'xxx yyy zzz')
      .set('status', '')

    this.httpClient.post(this.baseUrl + 'FamilyMembers/Create', FamilyMember ).subscribe(result => {
    }, error => console.error(error));
  }

}




