import Controller from '@ember/controller';
import {action} from '@ember/object';
import ListModel from 'ember-data-bug/models/list';

export default class ListsController extends Controller {

  @action
  async updateList(list: ListModel): Promise<void> {
    list.name = `${list.name} (modified)`;
    await list
      .save();
  }
}
