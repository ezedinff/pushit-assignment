import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'clips', pathMatch: 'full' },
  {
    path: 'clips',
    loadChildren: () =>
      import('./containers/clips/clips.module').then((m) => m.ClipsModule),
  },
  {
    path: 'clips/:clipId',
    loadChildren: () =>
      import('./containers/clip/clip.module').then((m) => m.ClipModule),
  },
  {
    path: '**',
    redirectTo: 'clips'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
})
export class AppRoutingModule {}
