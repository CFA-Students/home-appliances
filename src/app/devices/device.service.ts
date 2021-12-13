import { Injectable } from '@angular/core';

import { Device, DeviceStatus } from './device.model';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  #devices = [
    new Device('washing machine', DeviceStatus.On),
    new Device('fan', DeviceStatus.Off),
    new Device('phone', DeviceStatus.On),
    new Device('television', DeviceStatus.Off),
    new Device('smartwatch', DeviceStatus.Off),
  ];

  get devices(): Device[] {
    return this.#devices;
  }

  get oneDeviceIsTurnedOn(): boolean {
    const turnedOffDevice = this.#devices.find(
      (device) => device.status === DeviceStatus.Off,
    );

    // if undefined, all devices are turned on
    return turnedOffDevice === undefined;
  }

  get oneDeviceIsTurnedOff(): boolean {
    const turnedOnDevice = this.#devices.find(
      (device) => device.status === DeviceStatus.On,
    );

    // if undefined, all devices are turned on
    return turnedOnDevice === undefined;
  }

  turnOnAll(): void {
    this.#devices.map((device) => (device.status = DeviceStatus.On));
  }

  turnOffAll(): void {
    this.#devices.map((device) => (device.status = DeviceStatus.Off));
  }

  toggleStatus(index: number) {
    const device = this.#devices[index];
    const toggledStatus =
      device.status === DeviceStatus.Off ? DeviceStatus.On : DeviceStatus.Off;

    device.status = toggledStatus;
  }
}
