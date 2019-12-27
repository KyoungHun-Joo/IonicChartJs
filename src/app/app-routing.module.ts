import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'bubble',
    loadChildren: () => import('./bubble/bubble.module').then(m => m.BubblePageModule)
  },
  {
    path: 'line',
    loadChildren: () => import('./line/line.module').then(m => m.LinePageModule)
  },
  {
    path: 'polar',
    loadChildren: () => import('./polar/polar.module').then(m => m.PolarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
