import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tooltip-demo',
  templateUrl : './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipDemoComponent {
  public dynamicTooltip:string = 'Address: Texas';
  public dynamicTooltipText:string = 'EShopper';

  public tooltipStateChanged(state: boolean):void {
    console.log(`Tooltip is open: ${state}`);
  }
}
