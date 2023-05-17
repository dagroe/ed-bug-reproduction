import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class ItemModel extends Model {
  @attr('string')
  declare name: string;
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    item: ItemModel;
  }
}
