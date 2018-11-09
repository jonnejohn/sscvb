import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProjectsModule } from './wizly-analytics/design/projects/projects.module';
import { CatalogModule } from './wizly-analytics/design/catalog/catalog.module';
import { BaseSharedModule } from './wizly-analytics/shared/base/base-shared.module';
import { DemoModule } from './wizly-analytics/demo/demo.module';
import { MyProcessesModule } from './wizly-analytics/myprocesses/myprocesses.module';
import { DocumentsModule } from './ui-features/documents/documents.module'; 
import { EbooksModule } from './ui-features/ebooks/ebooks.module'; 
import { SearchModule1 } from './wizly-analytics/search/search/search.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ProjectsModule,
    CatalogModule,
    MiscellaneousModule,
    BaseSharedModule,
    DemoModule,
    MyProcessesModule,
    DocumentsModule,
    EbooksModule,
   SearchModule1
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
