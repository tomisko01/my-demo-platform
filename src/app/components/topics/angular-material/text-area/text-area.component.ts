import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatDivider} from "@angular/material/divider";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";

const LONG_TEXT = '[I Versum] Dori me, interimo adapare dori me Ameno, ameno, latire, latire mo Dori me, ameno, oma nare imperavi ameno Dimere, dimere, mantiro, mantire mo Ameno [Chorum] (Oma nare imperavi emu nare, ameno) (Oma nare imperavi emu nare) Ameno, ameno do re-, ameno dori me Ameno dori me, ameno do- Dori me reo, ameno dori me Ameno dori me, dori me a- [Pontem] Ameno, oma nare imperavi ameno Dimere, dimere, mantiro, mantire mo Ameno [Chorum] (Oma nare imperavi emu nare, ameno) (Oma nare imperavi emu nare, ameno) Ameno do re-, ameno dori me Ameno dori me, ameno do- Dori me reo, ameno dori me Ameno dori me, do-ori me See upcoming rock shows Get tickets for your favorite artists You might also like Creepin’ Metro Boomin, The Weeknd & 21 Savage ​ballad of a homeschooled girl Olivia Rodrigo Did you know that there’s a tunnel under Ocean Blvd Lana Del Rey [II Versum] Ameno dori me, ameno dori me Do-omine (Do-omine, do-omine, do-omine, do-omine, do-omine, do-omine) Ameno, ameno dori-, ameno dori me Ameno dori me, ameno do- Dori me reo, ameno dori me Ameno dori me, do-ori me o- Ameno do re-, ameno dori me Ameno dori me, ameno do- (Dori me reo) (Ameno dori me)'

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [
    FormsModule,
    MatCheckbox,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatDivider,
    MatLabel,
    CdkTextareaAutosize
  ],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css'
})
export class TextAreaComponent {

  formBuilder = inject(FormBuilder)

  form = this.formBuilder.group({
    someText: ['', Validators.required],
    longText: [LONG_TEXT, Validators.required],
  })

}
