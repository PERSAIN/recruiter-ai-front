import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './presentation/layouts/dashboardLayout/dashboardLayout.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'audio-to-text',
        loadComponent: () =>
          import(
            './presentation/pages/audioToTextPage/audioToTextPage.component'
          ),
        data: {
          icon: 'fa-solid fa-comment-dots',
          title: 'Audio to text',
          description: 'Convert audio to text',
        },
      },
      {
        path: 'assistant',
        loadComponent: () =>
          import('./presentation/pages/assistantPage/assistantPage.component'),
        data: {
          icon: 'fa-solid fa-user',
          title: 'Assistant',
          description: 'Information about the assistant',
        },
      },
      {
        path: 'compare-files',
        loadComponent: () =>
          import('./presentation/pages/compareFilesPage/compareFilesPage.component'),
        data: {
          icon: 'fa-solid fa-user',
          title: 'Compare files',
          description: 'Compare files checking keywords',
        },
      },
      {
        path: 'video-to-text',
        loadComponent: () =>
          import('./presentation/pages/videoToTextPage/videoToTextPage.component'),
        data: {
          icon: 'fa-solid fa-user',
          title: 'Asistente',
          description: 'Convert video to text',
        },
      },
      {
        path: '**',
        redirectTo: 'assistant',
        pathMatch: 'full',
      },
    ],
  },
];
