import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AnalisisComponent } from './pages/analisis/analisis.component';

const routes: Routes = [
    {path: 'analisis', component: AnalisisComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule{}