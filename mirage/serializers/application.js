import { JSONAPISerializer } from 'miragejs';

export default class ApplicationSerializer extends JSONAPISerializer {
  typeKeyForModel(model) {
    return model.modelName;
  }

  shouldIncludeLinkageData(_relationshipKey, _model) {
    return true;
  }
}
