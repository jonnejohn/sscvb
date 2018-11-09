import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ProjectsComponent } from './wizly-analytics/design/projects/projects.component';
import { CatalogComponent } from './wizly-analytics/design/catalog/catalog.component';
import { DemoComponent } from './wizly-analytics/demo/demo.component';
import { DocumentsComponent } from './ui-features/documents/documents.component';
import { EbooksComponent } from './ui-features/ebooks/ebooks.component';
import { MyProcessesComponent } from './wizly-analytics/myprocesses/myprocesses.component';
import { SearchComponent1 } from './wizly-analytics/search/search/search.component';
//import { SearchComponent } from './wizly-analytics/search/search.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'demo/:id',
    component: DemoComponent,
  },
    
   {
    path: 'performance',
    loadChildren: './performance/performance.module#PerformanceModule',
  },{
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
 
  // {
  // path:'wizly-analytics/demo/:id-no',
  // component: DemoComponent
  // },
  // analytics
  {
    path: 'wizly-analytics/design/projects',
    component: ProjectsComponent,
  },{
    path: 'wizly-analytics/design/catalog',
    component: CatalogComponent,
  },
  {
    //path: 'wizly-analytics/search/search',
   path: 'wizly-analytics/search/search/:strg',
     component:SearchComponent1,
     
   
  },{
    path: 'wizly-analytics/demo',
    component: DemoComponent,
  },{
    path: 'wizly-analytics/myprocesses',
    component: MyProcessesComponent,
  }, {
    path: 'ui-features/documents',
    component: DocumentsComponent,
  }, {
    path: 'ui-features/ebooks',
    component: EbooksComponent,
  },{
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
