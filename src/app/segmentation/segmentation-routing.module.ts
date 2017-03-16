import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoveryComponent } from './discovery/discovery.component';
import { SegmentationComponent } from './segmentation/segmentation.component';

const routes: Routes = [{
  path: 'segmentation',
  component: SegmentationComponent,
  children: [{
    path: 'discovery',
    component: DiscoveryComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [DiscoveryComponent, SegmentationComponent],
  providers: []
})
export class SegmentationRoutingModule { }
