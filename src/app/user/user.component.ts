import {Component, Input, Output, EventEmitter, computed} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string; // !: => definitely will be set to a value
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar;
  })

  onSelectUser() {
    this.select.emit(this.id)
  }
}
