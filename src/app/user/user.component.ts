import {Component, Input, Output, EventEmitter, computed} from '@angular/core';
import {User} from "./user.model";

// type User = {
//   id: string,
//   avatar: string,
//   name: string
// }

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  })

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
