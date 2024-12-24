import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { NoutfoundComponent } from './noutfound/noutfound.component';
import { MatiereComponent } from './matiere/matiere.component';
import { NoteComponent } from './note/note.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
    { path: 'dashboard', component: DashboardComponent },
    { path: 'etudiant', component: EtudiantComponent },
    { path: 'matiere', component: MatiereComponent },
    { path: 'note', component: NoteComponent },
    { path: 'notfound', component: NoutfoundComponent },
    // Fallback route
    { path: '**', redirectTo: '/notfound' }
  ];