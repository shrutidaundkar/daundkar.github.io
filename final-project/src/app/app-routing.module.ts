import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PreviousWorkComponent } from './previous-work/previous-work.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'previous-work', component: PreviousWorkComponent},
  {path:'projects', component: ProjectsComponent},  
  {path:'contact', component: ContactComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
