import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPageModule } from './tabs/tabs.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'modal-spells',
    loadChildren: () => import('./modal-spells/modal-spells.module').then( m => m.ModalSpellsPageModule)
  },
  {
    path: 'modal-weapons',
    loadChildren: () => import('./modal-weapons/modal-weapons.module').then( m => m.ModalWeaponsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
