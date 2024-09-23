import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  yellow = 'text-yellow-500',
}

@Component({
  selector: 'lib-ngx-apx-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: 'ngx-apx-side-menu.component.html',
})
export class NgxApxSideMenuComponent {
  isAuthenticated = input(false);
  titleColor = input<TitleColor>(TitleColor.green);

  onSignOut = output();
  onSignIn = output();
}
