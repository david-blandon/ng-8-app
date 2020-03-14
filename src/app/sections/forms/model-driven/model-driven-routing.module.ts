import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadChildren: () => import('./model-driven-basic/model-driven-basic.module').then(module => module.ModelDrivenBasicModule)
      },
      {
        path: 'validation',
        loadChildren: () => import('./model-driven-validation/model-driven-validation.module').then(module => module.ModelDrivenValidationModule)
      },  
      {
        path: 'grouping',
        loadChildren: () => import('./model-driven-grouping/model-driven-grouping.module').then(module => module.ModelDrivenGroupingModule)
      }, 
      {
        path: 'form-array',
        loadChildren: () => import('./model-driven-form-array/model-driven-form-array.module').then(module => module.ModelDrivenFormArrayModule)
      },       
      {
        path: 'custom-validation',
        loadChildren: () => import('./model-driven-custom-validation/model-driven-custom-validation.module').then(module => module.ModelDrivenCustomValidationModule)
      },        
      {
        path: 'reactive',
        loadChildren: () => import('./model-driven-reactive/model-driven-reactive.module').then(module => module.ModelDrivenReactiveModule)
      },                
      {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full',
      },
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelDrivenRoutingModule { }
