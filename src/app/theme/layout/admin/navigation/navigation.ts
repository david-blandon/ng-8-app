import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'routing',
    title: 'Routing',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'routing-basic',
        title: 'Manejo Básico',
        type: 'item',
        url: '/observables/basic',
        icon: 'feather icon-home'
      },
      {
        id: 'routing-can-deactivate',
        title: 'canDeActivate',
        type: 'item',
        url: '/routing/can-deactivate',
        icon: 'feather icon-layout'
      },
      {
        id: 'routing-subject',
        title: 'Subject',
        type: 'item',
        url: '/observables/subject',
        icon: 'feather icon-layout'
      }
    ]
  },
  {
    id: 'observables',
    title: 'Observadores',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'observable-basic',
        title: 'Manejo Básico',
        type: 'item',
        url: '/observables/basic',
        icon: 'feather icon-home'
      },
      {
        id: 'observable-operator',
        title: 'Operadores',
        type: 'item',
        url: '/observables/operator',
        icon: 'feather icon-layout'
      },
      {
        id: 'observable-subject',
        title: 'Subject',
        type: 'item',
        url: '/observables/subject',
        icon: 'feather icon-layout'
      }
    ]
  },
  {
    id: 'form-element',
    title: 'FORMULARIOS',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'template-driven',
        title: 'Template Driven',
        type: 'collapse',
        children: [
          {
            id: 'template-driven-basic',
            title: 'Manejo Basico',
            type: 'item',
            url: '/forms/template-driven/basic',
            icon: 'feather icon-server'
          },
          {
            id: 'template-driven-validation',
            title: 'Validaciones',
            type: 'item',
            url: '/forms/template-driven/validation',
            icon: 'feather icon-pie-chart'
          },
          {
            id: 'template-driven-grouping',
            title: 'Agrupar Controles',
            type: 'item',
            url: '/forms/template-driven/grouping',
            icon: 'feather icon-pie-chart'
          },
          {
            id: 'template-driven-setting-patching',
            title: 'Manejo de datos',
            type: 'item',
            url: '/forms/template-driven/setting-patching',
            icon: 'feather icon-pie-chart'
          }
        ],
        icon: 'feather icon-box',
      },
      {
        id: 'forms-element',
        title: 'Model Driven',
        type: 'collapse',
        children: [
          {
            id: 'model-driven-basic',
            title: 'Manejo Basico',
            type: 'item',
            url: '/forms/model-driven/basic',
            icon: 'feather icon-server'
          },
          {
            id: 'model-driven-validation',
            title: 'Validaciones',
            type: 'item',
            url: '/forms/model-driven/validation',
            icon: 'feather icon-pie-chart'
          },
          {
            id: 'model-driven-grouping',
            title: 'Agrupar Controles',
            type: 'item',
            url: '/forms/model-driven/grouping',
            icon: 'feather icon-pie-chart'
          },
          {
            id: 'model-driven-form-array',
            title: 'Controles Dinamicos',
            type: 'item',
            url: '/forms/model-driven/form-array',
            icon: 'feather icon-pie-chart'
          },
          {
            id: 'model-driven-custom-validation',
            title: 'Validaciones Personalizadas',
            type: 'item',
            url: '/forms/model-driven/custom-validation',
            icon: 'feather icon-pie-chart'
          },
          {
            id: 'model-driven-setting-patching',
            title: 'Manejo reactivo de datos',
            type: 'item',
            url: '/forms/model-driven/reactive',
            icon: 'feather icon-pie-chart'
          }
        ],
        icon: 'feather icon-file-text'
      }
    ]
  },

  {
    id: 'ngrx',
    title: 'Ngrx',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'todo',
        title: 'ToDo',
        type: 'item',
        url: '/ngrx/todo',
        icon: 'feather icon-home'
      }
    ]
  },
    {
    id: 'pages',
    title: 'Otros',
    type: 'group',
    icon: 'feather icon-file-text',
    children: [
      {
        id: 'auth',
        title: 'Autenticación',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          }
        ]
      },
    ]
  },
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
