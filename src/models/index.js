// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ClassicCoffee, SpecialityDrinks } = initSchema(schema);

export {
  ClassicCoffee,
  SpecialityDrinks
};