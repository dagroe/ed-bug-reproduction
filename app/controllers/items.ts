import Controller from '@ember/controller';
import {action} from '@ember/object';
import ItemModel from 'ember-data-bug/models/item';

export default class ItemController extends Controller {

  @action
  deleteItem(itemToDelete: ItemModel): void {
    const item = itemToDelete;
    item
        .destroyRecord()
        .then(() => {
        })
        .catch((e) => {
          item.rollbackAttributes();
          console.error(e);
        });

  }
}