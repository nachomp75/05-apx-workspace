import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgxApxSideMenuComponent, TitleColor } from 'ngx-apx-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxApxSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'apx-testbed-app';

  isAuthenticated = signal(true);
  TitleColor = TitleColor;
}
