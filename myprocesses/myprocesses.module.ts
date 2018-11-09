import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyProcessesComponent } from './myprocesses.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { Pipe, PipeTransform } from '@angular/core';
import { NewDemoModalComponent } from './modals/new-demo.component';
//import { NewDemoSearchModalComponent } from './modals/new-demosearch.component';
import { TreeModule } from 'angular-tree-component'; 
import { NewViewModalComponent } from './modals/new-view.component';
import { NewProcessModalComponent } from './modals/new-process.component';
import { AgGridModule } from "ag-grid-angular"; 
import { TreeviewModule } from 'ngx-treeview'; 

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ThemeModule,
      TreeModule,
      AgGridModule,
      TreeviewModule.forRoot(),
     
    ],
    declarations: [
       // DemoComponent,
        MyProcessesComponent,
        NewDemoModalComponent,
        //NewDemoSearchModalComponent,
        NewViewModalComponent,
        NewProcessModalComponent,
        
    ],
   
    
    entryComponents: [
        // ProjectSelectCellComponent,
        // ProjectPublishCheckCellComponent,
        // ProjectPublishButtonCellComponent,
        NewDemoModalComponent,
        //NewDemoSearchModalComponent,
        NewViewModalComponent,
        NewProcessModalComponent
        // DeleteProjectModalComponent,
        // PublishProjectModalComponent,
        // ExportProjectModalComponent,
        // ImportProjectModalComponent
      ]
})

export class MyProcessesModule { }