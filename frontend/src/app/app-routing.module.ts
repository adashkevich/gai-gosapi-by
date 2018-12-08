import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/core/main/main.component';
import { AboutComponent } from './modules/core/about/about.component';
import { StatisticComponent } from './modules/core/statistic/statistic.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {
  path: 'about', component: AboutComponent
},
{
  path: 'statistic', component: StatisticComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
