import { IModel } from './model';

export interface ICustomer extends IModel {
  FirstName: string;
  Gender: string;
  PhoneNumber: string;
  Country : string;
  Dob : Date;
  SelectedInterests : Array<string>

}
