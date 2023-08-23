import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store';
import ArrayProxy from '@ember/array';
import RSVP from 'rsvp';
import ListModel from 'ember-data-bug/models/list';

export interface ItemsRouteModel {
  lists: ArrayProxy<ListModel>;
}

export default class ItemsRoute extends Route {
  @service
  declare store: Store;

  async model(): Promise<ItemsRouteModel> {
    return RSVP.hash({
      lists: this.store.findAll('list')
    });
  }
}
