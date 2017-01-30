import { Injectable } from '@angular/core';

import { Data} from '../assets/data/data';
import { rawData} from '../assets/data/rawData';

@Injectable()
export class DataServiceService {

  getrawData(): Promise<Data[]> {
	  return Promise.resolve(rawData);
  }

}
