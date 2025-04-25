import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {NzIconModule} from "ng-zorro-antd/icon";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskSelectorComponent } from './task-selector/task-selector.component';
import { TaskComponent } from './task/task.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { Task1AComponent } from './tasks/1/A/task1-a.component';
import { Task1BComponent } from './tasks/1/B/task1-b.component';
import {RouterModule} from "@angular/router";
import {MarkdownModule} from "ngx-markdown";
import { SummaryComponent } from './summary/summary.component';
import { PreviewComponent } from './preview/preview.component';
import {Task2AComponent} from "src/app/tasks/2/A/task2-a.component";
import {Task2BComponent} from "src/app/tasks/2/B/task2-b.component";
import {Task3AComponent} from "src/app/tasks/3/A/task3-a.component";
import {Task3BComponent} from "src/app/tasks/3/B/task3-b.component";
import {Task4AComponent} from "src/app/tasks/4/A/task4-a.component";
import {Task4BComponent} from "src/app/tasks/4/B/task4-b.component";
import {Task5AComponent} from "src/app/tasks/5/A/task5-a.component";
import {Task5BComponent} from "src/app/tasks/5/B/task5-b.component";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { MinusOutline, PlusOutline, HomeOutline } from '@ant-design/icons-angular/icons';
import {NzListModule} from "ng-zorro-antd/list";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzModalModule} from "ng-zorro-antd/modal";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductListComponent } from './tasks/2/B/product-list/product-list.component';
import { BasketComponent } from './tasks/2/B/basket/basket.component';
//import { MyResultsComponent } from './tasks/4/A/my-results/my-results.component';
//import {MyGuessOfGradesComponent} from './tasks/4/A/my-guess-of-grades.component';
import {provideHttpClient} from '@angular/common/http';
//import { NgxChartsModule } from '@swimlane/ngx-charts';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { NamePipe } from './tasks/3/A/name.pipe';
import { PersonService } from './tasks/5/B/person.service';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ImageCropperComponent } from 'ngx-image-cropper';


const zorroModules = [
  NzButtonModule,
  NzCardModule,
  NzDividerModule,
  NzIconModule.forRoot([MinusOutline, PlusOutline, HomeOutline]),
  NzLayoutModule,
  NzListModule,
  NzMenuModule,
  NzModalModule,
  NzPopconfirmModule,
  NzTableModule,
  NzToolTipModule,
  NzInputModule
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NavigatorComponent,
    Task1AComponent,
    Task1BComponent,
    Task2AComponent,
    Task2BComponent,
    Task3AComponent,
    Task3BComponent,
    Task4AComponent,
    Task4BComponent,
    Task5AComponent,
    Task5BComponent,
    TaskSelectorComponent,
    SummaryComponent,
    PreviewComponent,
    ProductListComponent,
    BasketComponent,
    NamePipe
    //MyResultsComponent
    //MyGuessOfGradesComponent  
  ],
  imports: [
    ...zorroModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperComponent,
    ScrollingModule
    //NgxChartsModule
  ],
  providers: [    
    provideHttpClient(),
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private i18n: NzI18nService
  ) {
    this.i18n.setLocale(en_US);
  }
}
