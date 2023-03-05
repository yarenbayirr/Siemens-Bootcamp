import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user?: User;

  constructor( private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.apiService.getUsersById(id).subscribe((x) => {
      this.user = x;
    });

    this.activatedRoute.params.subscribe((param: any) => {
      console.log(param);
      this.apiService.getUsersById(param.id).subscribe((x) => {
        this.user = x;
      });
    });
  }
}
