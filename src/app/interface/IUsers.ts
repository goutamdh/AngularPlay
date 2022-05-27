import { FormControl, FormGroup } from "@angular/forms";

export interface IUserForm
  extends FormGroup<{
    username: FormControl<string>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    age: FormControl<number>;
  }> {}
