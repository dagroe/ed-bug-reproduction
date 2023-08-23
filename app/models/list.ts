import Model, { attr, hasMany } from '@ember-data/model';
import ItemModel from 'ember-data-bug/models/item';

export default class ListModel extends Model {
  @attr('string')
  declare name: string;

  @hasMany('item', { async: false, inverse: 'lists' })
  declare items: ItemModel[];
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    list: ListModel;
  }
}
