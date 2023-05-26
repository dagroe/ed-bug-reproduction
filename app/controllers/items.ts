import Controller from '@ember/controller';
import {action} from '@ember/object';
import ItemModel from 'ember-data-bug/models/item';

export default class ItemController extends Controller {

  @action
  deleteItem(itemToDelete: ItemModel): void {
    itemToDelete
      .destroyRecord()
      .then(() => {
      })
      .catch((e) => {
        itemToDelete.rollbackAttributes();
        console.error(e);
      });
  }
}