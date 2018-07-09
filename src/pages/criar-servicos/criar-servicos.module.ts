import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarServicosPage } from './criar-servicos';

@NgModule({
  declarations: [
    CriarServicosPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarServicosPage),
  ],
})
export class CriarServicosPageModule {}
