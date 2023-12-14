import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  character: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCharacterDetails();
  }

  getCharacterDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getCharacter(id).subscribe((data) => {
      this.character = data;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
