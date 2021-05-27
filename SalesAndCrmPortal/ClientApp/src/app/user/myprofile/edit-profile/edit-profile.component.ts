import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  //   $(document).ready(function() {

    
  //     var readURL = function(input) {
  //         if (input.files && input.files[0]) {
  //             var reader = new FileReader();
  
  //             reader.onload = function (e) {
  //                 $('.profile-pic').attr('src', e.target.result);
  //             }
      
  //             reader.readAsDataURL(input.files[0]);
  //         }
  //     }
      
  
  //     $(".file-upload").on('change', function(){
  //         readURL(this);
  //     });
      
  //     $(".upload-button").on('click', function() {
  //        $(".file-upload").click();
  //     });
  // });
  }

}
