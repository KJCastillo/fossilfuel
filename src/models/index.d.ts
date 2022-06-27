import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ClassicCoffeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SpecialityDrinksMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ClassicCoffee {
  readonly id: string;
  readonly title?: string | null;
  readonly subtitle?: string | null;
  readonly price?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ClassicCoffee, ClassicCoffeeMetaData>);
  static copyOf(source: ClassicCoffee, mutator: (draft: MutableModel<ClassicCoffee, ClassicCoffeeMetaData>) => MutableModel<ClassicCoffee, ClassicCoffeeMetaData> | void): ClassicCoffee;
}

export declare class SpecialityDrinks {
  readonly id: string;
  readonly title?: string | null;
  readonly subtitle?: string | null;
  readonly price?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SpecialityDrinks, SpecialityDrinksMetaData>);
  static copyOf(source: SpecialityDrinks, mutator: (draft: MutableModel<SpecialityDrinks, SpecialityDrinksMetaData>) => MutableModel<SpecialityDrinks, SpecialityDrinksMetaData> | void): SpecialityDrinks;
}