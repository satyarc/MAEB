import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-familymembers',
  templateUrl: './familymembers.component.html',
  styleUrls: ['./familymembers.component.scss']
})
export class FamilymembersComponent implements OnInit {

  public familyMembers: FamilyMember[];
  baseUrl: string;

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  ngOnInit(): void {
    this.httpClient.get<FamilyMember[]>(this.baseUrl + 'FamilyMembers').subscribe(result => {
      this.familyMembers = result;
    }, error => console.error(error));
  }

}

interface FamilyMember {
  FamilyMemberId: string;
  Lastname: string;
  Firstname: string;
  MemberID: string;
  DateOfBirth: Date;
  Relation: string;
  CityCode: string;
  CountryCode: string;
  ZipCode: string;
  Address: string;
  status: Int32Array;
}
