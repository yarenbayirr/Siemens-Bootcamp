import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user?: User;

  constructor( private activatedRoute: ActivatedRoute,
    private router: Router,
    private userApiService: UserapiService){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.userApiService.getUsersById(id).subscribe((x) => {
      this.user = x;
    });

    this.activatedRoute.params.subscribe((param: any) => {
      console.log(param);
      this.userApiService.getUsersById(param.id).subscribe((x) => {
        this.user = x;
      });
    });
  }
}
