import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'phoenicians',
    loadChildren: () => import('./phoenicians/phoenicians.module').then( m => m.PhoeniciansPageModule)
  },
  {
    path: 'romans',
    loadChildren: () => import('./romans/romans.module').then( m => m.RomansPageModule)
  },
  {
    path: 'sumerians',
    loadChildren: () => import('./sumerians/sumerians.module').then( m => m.SumeriansPageModule)
  },
  {
    path: 'greeks',
    loadChildren: () => import('./greeks/greeks.module').then( m => m.GreeksPageModule)
  },
  {
    path: 'egyptians',
    loadChildren: () => import('./egyptians/egyptians.module').then( m => m.EgyptiansPageModule)
  },
  {
    path: 'persians',
    loadChildren: () => import('./persians/persians.module').then( m => m.PersiansPageModule)
  },
  {
    path: 'romansgallery',
    loadChildren: () => import('./romansgallery/romansgallery.module').then( m => m.RomansgalleryPageModule)
  },
  {
    path: 'egyptiansgallery',
    loadChildren: () => import('./egyptiansgallery/egyptiansgallery.module').then( m => m.EgyptiansgalleryPageModule)
  },
  {
    path: 'greeksgallery',
    loadChildren: () => import('./greeksgallery/greeksgallery.module').then( m => m.GreeksgalleryPageModule)
  },
  {
    path: 'phoeniciansgallery',
    loadChildren: () => import('./phoeniciansgallery/phoeniciansgallery.module').then( m => m.PhoeniciansgalleryPageModule)
  },
  {
    path: 'sumeriansgallery',
    loadChildren: () => import('./sumeriansgallery/sumeriansgallery.module').then( m => m.SumeriansgalleryPageModule)
  },
  {
    path: 'persiansgallery',
    loadChildren: () => import('./persiansgallery/persiansgallery.module').then( m => m.PersiansgalleryPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
