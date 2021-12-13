export enum DeviceStatus {
  On = 'on',
  Off = 'off',
}

export class Device {
  constructor(private _name: string, private _status: DeviceStatus) {}

  get name(): string {
    return this._name;
  }

  get status(): DeviceStatus {
    return this._status;
  }

  set status(newValue: DeviceStatus) {
    this._status = newValue;
  }
}
