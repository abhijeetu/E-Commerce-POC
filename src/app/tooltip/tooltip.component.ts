import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tooltip-demo',
  templateUrl : './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipDemoComponent {
  public dynamicTooltip:string = 'Digital Single Lense Reflex';
  public dynamicTooltipText:string = 'DSLR';

  public tooltipStateChanged(state: boolean):void {
    console.log(`Tooltip is open: ${state}`);
  }
}
