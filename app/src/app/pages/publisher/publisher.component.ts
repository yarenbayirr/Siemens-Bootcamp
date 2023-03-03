import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubjectproviderService } from '../subjectprovider.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  myForm: FormGroup | undefined;
    constructor(private subjectProvider: SubjectproviderService, private formBuilder: FormBuilder){
      this.subjectProvider.publish(2); 
    }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: '',
    });
    
      this.myForm.valueChanges.subscribe(val => {
        this.name = val;
      });
    
  }
  
  
   
}
