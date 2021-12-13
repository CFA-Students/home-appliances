import { Component } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { Device } from './devices/device.model';
import { DevicesService } from './devices/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private devicesService: DevicesService,
  ) {}

  get isAuth(): boolean {
    return this.authService.isAuth;
  }

  get #oneDeviceIsTurnedOn(): boolean {
    return this.devicesService.oneDeviceIsTurnedOn;
  }

  get #oneDeviceIsTurnedOff(): boolean {
    return this.devicesService.oneDeviceIsTurnedOff;
  }

  get devices(): Device[] {
    return this.devicesService.devices;
  }

  get canTurnOnAll(): boolean {
    return this.isAuth && !this.#oneDeviceIsTurnedOn;
  }

  get canTurnOffAll(): boolean {
    return this.isAuth && !this.#oneDeviceIsTurnedOff;
  }

  turnOnEveryDevices(): void {
    console.log('Turning on every devices !');
    this.devicesService.turnOnAll();
  }

  turnOffEveryDevices(): void {
    console.log('Turning off every devices !');
    this.devicesService.turnOffAll();
  }
}
