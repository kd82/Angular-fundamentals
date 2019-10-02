import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive
({
  selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;

  ngOnInit(): void {
      this.el.addEventListener('click', e => {
        this.$('#simple-modal').modal({});
      });
  }

  constructor(@Inject(ElementRef) elRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
      this.el = elRef.nativeElement;
  }

}
