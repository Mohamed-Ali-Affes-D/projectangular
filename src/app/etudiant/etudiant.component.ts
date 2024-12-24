import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-etudiant',
  imports: [NgxPaginationModule,FormsModule,CommonModule],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent implements OnInit {
  // Liste initiale de projets
  projects = [
    { nom: 'Ministry Wikipedia', prenom: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { nom: 'Elzero Shop', prenom: 'Doe', dateNaissance: '12 Oct 2021', telephone: '987654321', class: ['imgs/team-01.png', 'imgs/team-05.png'], status: 'In Progress', statusColor: 'bg-blue' },
    { nom: 'Bouba App', prenom: 'Alice', dateNaissance: '05 Sep 2021', telephone: '456789123', class: ['imgs/team-02.png'], status: 'Completed', statusColor: 'bg-green' },
    { nom: 'Ministry Wikipedia', prenom: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { nom: 'Ministry Wikipedia', prenom: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { nom: 'Ministry Wikipedia', prenom: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { nom: 'Ministry Wikipedia', prenom: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { nom: 'Ministry Wikipedia', prenom: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { nom: 'Ministry Wikipedia', prenom: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { nom: 'Ministry Wikipedia', prenom: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },
    { nom: 'Ministry Wikipedia', prenom: 'John', dateNaissance: '10 May 2022', telephone: '123456789', class: ['imgs/team-01.png', 'imgs/team-02.png'], status: 'Pending', statusColor: 'bg-orange' },

  ];

  // Variables pour la pagination, la recherche et le modale
  searchTerm: string = '';
  filteredEtudiants: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;
  isModalOpen: boolean = false;

  // Nouveau projet à ajouter
  newEtudiant = {
    nom: '',
    prenom: '',
    dateNaissance: '',
    telephone: '',
    class: [],
    status: 'Pending',
    statusColor: 'bg-orange'
  };

  ngOnInit() {
    this.filteredEtudiants = this.projects;
  }

  // Filtrage
  filterEtudiant() {
    this.filteredEtudiants = this.projects.filter(project =>
      project.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
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
  addEtudiant() {
    if (this.newEtudiant.nom && this.newEtudiant.prenom && this.newEtudiant.dateNaissance && this.newEtudiant.telephone) {
      this.projects.push({ ...this.newEtudiant, class: ['imgs/default.png'] });
      this.filteredEtudiants = this.projects; // Mettre à jour les projets affichés
      this.newEtudiant = {
        nom: '',
        prenom: '',
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