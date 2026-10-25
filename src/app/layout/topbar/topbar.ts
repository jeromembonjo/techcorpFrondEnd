import { Component, input, output } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.html',
  // L'element hote remplace le <header> : il garde le role "banniere".
  host: { class: 'app__header topbar', role: 'banner' },
})
export class Topbar {
  readonly user = input.required<Employee>();
  readonly initials = input.required<string>();
  readonly navOpen = input(false);

  readonly menuToggle = output<void>();
}
