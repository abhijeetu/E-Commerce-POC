import {Component, ViewChild} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'modal-demo',
  templateUrl: './pop-up.component.html'
})
export class ModalDemoComponent {

  @ViewChild('childModal') public childModal: ModalDirective;

  data = {};

  public showChildModal(): void {
    this.childModal.config.backdrop = false; // workaround
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
