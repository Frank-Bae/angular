import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

// don't forget to import the component you want to export
import { ViewComponentComponent } from './view-component/view-component.component';

// This module only contains components within its folder. The best
// way to build feature module. Can create thourgh cli ng g module ____
// to create a component within the module ng g c modulename/name of component

@NgModule({
  declarations: [ViewComponentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  // The export allows which component you want other modules/components to use
  exports: [
    ViewComponentComponent
  ]
})
export class ViewModule { }
