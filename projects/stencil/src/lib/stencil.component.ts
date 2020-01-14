import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'stencil-stencil',
  template: `
    <p>
      stencil works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StencilComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
