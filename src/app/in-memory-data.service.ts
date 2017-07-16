import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Zero'},
      { id: 11, name: 'Narco' },
      { id: 12, name: 'Bombasto' },
      { id: 13, name: 'Magneta' },
      { id: 14, name: 'RubberMan' },
      { id: 15, name: 'Dynama' },
      { id: 16, name: 'Magma' },
      { id: 17, name: 'Tornado' },
      { id: 18, name: 'Celeritas' }
    ];
    return { heroes };
  }
}
