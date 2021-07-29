import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// create class instance
const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// add user and company marker
customMap.addMarker(user);
customMap.addMarker(company);
