import {NgModule} from '@angular/core'
import {CardComponent} from "./card/card.component";

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent] // tell angular that what is here, is available for all components
})

export class SharedModule{}
