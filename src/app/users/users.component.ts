import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IUserForm } from '../interface/IUsers';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  form!: IUserForm;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formInit()
  }
  formInit() {
    this.form = this.fb.nonNullable.group({
      username: this.fb.nonNullable.control('Jack'),
      firstName: this.fb.nonNullable.control('Rohan'),
      lastName: this.fb.nonNullable.control('K'),
      age: this.fb.control(25, { initialValueIsDefault: true }),
    });
  }

  loadFromHttp() {
    this.form.patchValue({
      age: 26,
      firstName: 'Goutam',
      lastName: 'Kumar',
      username: 'Limbo',
    });
  }

  reset() {
    this.form.reset();
  }
}
