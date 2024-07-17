import {Component} from '@angular/core'
import {MatButton} from "@angular/material/button"

@Component({
  selector: 'app-getter-setter',
  templateUrl: './getter-setter.component.html',
  styleUrl: './getter-setter.component.css',
  imports: [
    MatButton
  ],
  standalone: true
})
export class GetterSetterComponent {

  user = {
    firstname: 'John',
    lastname: 'Smith',
    _id: null as number | null,
    get fullName() {
      return this.firstname + ' ' + this.lastname
    },
    set id(userId: number) {
      console.log(`Setting userid to ` + userId)
      this._id = userId
    },
    get id() {
      console.log(`Call to get user id`)
      if (this._id === undefined || this._id === null) {
        throw new Error('id is undefined')
      } else {
        return this._id
      }
    }
  }

  printoutName() {
    console.log(this.user.fullName)
    this.user.id = 123

    console.log(this.user.id)
  }

}
