import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-matiere',
  imports: [NgxPaginationModule,FormsModule,CommonModule],
  templateUrl: './matiere.component.html',
  styleUrl: './matiere.component.css'
})
export class MatiereComponent implements OnInit {
  // Liste initiale de matieres
  Matiere = [
    { code: '12', designation: 'John', Coefficient: '10 May 2022', Note: '123456789'},
    { code: '4', designation: 'Doe', Coefficient: '12 Oct 2021', Note: '987654321' },
    { code: '4', designation: 'Alice', Coefficient: '05 Sep 2021', Note: '456789123'},
    { code: '12', designation: 'John', Coefficient: '10 May 2022', Note: '123456789'},
    { code: '2', designation: 'John', Coefficient: '10 May 2022', Note: '123456789' },
    { code: '2', designation: 'John', Coefficient: '10 May 2022', Note: '123456789' },
    { code: '2', designation: 'John', Coefficient: '10 May 2022', Note: '123456789' },
    { code: '3', designation: 'John', Coefficient: '10 May 2022', Note: '123456789' },


  ];

  // Variables pour la pagination, la recherche et le modale
  searchTerm: string = '';
  filterMatieres: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;
  isModalOpen: boolean = false;

  // Nouveau matiere à ajouter
  newMatiere = {
    code: '',
    designation: '',
    Coefficient: '',
    Note: ''
  };

  ngOnInit() {
    this.filterMatieres = this.Matiere;
  }

  // Filtrage
  filterMatiere() {
    this.filterMatieres = this.Matiere.filter(matiere =>
      matiere.code.toLowerCase().includes(this.searchTerm.toLowerCase())
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

  // Ajouter un nouveau matiere
  addMatiere() {
    if (this.newMatiere.code && this.newMatiere.designation && this.newMatiere.Coefficient && this.newMatiere.Note) {
      this.filterMatieres = this.Matiere; // Mettre à jour les matieres affichés
      this.newMatiere = {
        code: '',
        designation: '',
        Coefficient: '',
        Note: ''
      };
      this.closeModal();
    }
  }
}