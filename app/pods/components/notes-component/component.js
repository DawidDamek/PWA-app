import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class NotesComponent extends Component {
  @service store;

  @tracked title;
  @tracked description;
  @tracked titleElement;
  @tracked descriptionElement;

  get notes() {
    return this.store.findAll('note');
  }

  @action
  onTitleChange({ target }) {
    this.title = target;
  }

  @action
  onDescriptionChange({ target }) {
    this.description = target;
  }

  @action
  async onNoteSave() {
    this.store
      .createRecord('note', {
        title: this.title.value,
        description: this.description.value,
      })
      .save();
    this.title.value = '';
    this.description.value = '';
  }
}
