import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(
    public firstName: string,
    public userName: string,
  ) {}

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av. Brasil', number: 34 },
          { street: 'Rua Alberto De Nóbrega', number: 99 },
        ]);
      }, 2000);
    });
  }
}
