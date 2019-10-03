import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'user-bookshelf',
            children: [
              {
                path: ':userId',
                loadChildren: () =>
                  import('../user-bookshelf/user-bookshelf.module').then(m => m.UserBookshelfPageModule)
              },
              {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
              }
            ]
          },
          {
            path: 'user-reading',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../user-reading/user-reading.module').then(m => m.UserReadingPageModule)
              }
            ]
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
