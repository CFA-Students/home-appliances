import { Component, Input } from '@angular/core';

import { DevicesService } from '../device.service';
import { DeviceStatus } from '../device.model';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent {
  @Input() deviceName = 'washing machine';
  @Input() deviceStatus = DeviceStatus.Off;
  @Input() deviceIndex!: number;

  get isOn(): boolean {
    return this.deviceStatus === DeviceStatus.On;
  }

  constructor(private devicesService: DevicesService) {}

  toggleStatus(): void {
    this.devicesService.toggleStatus(this.deviceIndex);
  }
}
