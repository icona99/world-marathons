import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { CutTextPipe } from './pipes/cut-text.pipe';




@NgModule({
  declarations: [
    EmailDirective,
    CutTextPipe,
 
  ],
  imports: [
    CommonModule
  ],
  exports:[EmailDirective,CutTextPipe]
})
export class SharedModule { }
