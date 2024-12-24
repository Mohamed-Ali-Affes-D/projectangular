import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-note',
  imports: [NgxPaginationModule,FormsModule,CommonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit {
  // Liste initiale de projets
  projects = [
    { code: 'Ministry Wikipedia', matiere: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { code: 'Elzero Shop', matiere: 'Doe', dateNaissance: '12 Oct 2021', telephone: '987654321', class: ['imgs/team-01.png', 'imgs/team-05.png'], status: 'In Progress', statusColor: 'bg-blue' },
    { code: 'Bouba App', matiere: 'Alice', dateNaissance: '05 Sep 2021', telephone: '456789123', class: ['imgs/team-02.png'], status: 'Completed', statusColor: 'bg-green' },
    { code: 'Ministry Wikipedia', matiere: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { code: 'Ministry Wikipedia', matiere: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { code: 'Ministry Wikipedia', matiere: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { code: 'Ministry Wikipedia', matiere: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { code: 'Ministry Wikipedia', matiere: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { code: 'Ministry Wikipedia', matiere: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { code: 'Ministry Wikipedia', matiere: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { code: 'Ministry Wikipedia', matiere: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },

  ];

  // Variables pour la pagination, la recherche et le modale
  searchTerm: string = '';
  filteredProjects: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;
  isModalOpen: boolean = false;

  // Nouveau projet à ajouter
  newProject = {
    code: '',
    matiere: '',
    dateNaissance: '',
    telephone: '',
    class: [],
    status: 'Pending',
    statusColor: 'bg-orange'
  };

  ngOnInit() {
    this.filteredProjects = this.projects;
  }

  // Filtrage
  filterProjects() {
    this.filteredProjects = this.projects.filter(project =>
      project.code.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.currentPage = 1;
  }

  // Ouvrir le modale
  openModal() {
    this.isModalOpen = true;
  }

  // Fermer le modale
  closeModal() {
    this.isModalOpen = false;
  }

  // Ajouter un nouveau projet
  addProject() {
    if (this.newProject.code && this.newProject.matiere && this.newProject.dateNaissance && this.newProject.telephone) {
      this.projects.push({ ...this.newProject, class: ['imgs/default.png'] });
      this.filteredProjects = this.projects; // Mettre à jour les projets affichés
      this.newProject = {
        code: '',
        matiere: '',
        dateNaissance: '',
        telephone: '',
        class: [],
        status: 'Pending',
        statusColor: 'bg-orange'
      };
      this.closeModal();
    }
  }
}