import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegmentationRoutingModule } from './segmentation-routing.module';
import { SegmentationComponent } from './segmentation/segmentation.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SegmentationRoutingModule,
    SharedModule
  ],
  declarations: [
    SegmentationComponent,
    DiscoveryComponent
  ],
  exports: []
})
export class SegmentationModule { }
