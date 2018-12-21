import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProjects().subscribe(
      data => this.projects$ = data 
    );
  }

}
