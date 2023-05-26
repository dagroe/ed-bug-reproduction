import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store';
import ArrayProxy from '@ember/array';
import ItemModel from 'ember-data-bug/models/item';
import RSVP from 'rsvp';

export interface ItemsRouteModel {
  items: ArrayProxy<ItemModel>;
}

export default class ItemsRoute extends Route {
  @service
  declare store: Store;

  async model(): Promise<ItemsRouteModel> {
    return RSVP.hash({
      items: this.store.findAll('item')
    });
  }
}