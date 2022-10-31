import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class NoteItemComponent extends Component {
  @action
  async onDeleteNote() {
    await this.args.note.destroyRecord();
  }
}
