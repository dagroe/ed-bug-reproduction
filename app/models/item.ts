import Model, { attr, hasMany } from '@ember-data/model';

export default class ItemModel extends Model {
  @attr('string')
  declare name: string;

  @hasMany('list', { async: false, inverse: 'items' })
  declare lists: ItemModel[];
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    item: ItemModel;
  }
}
