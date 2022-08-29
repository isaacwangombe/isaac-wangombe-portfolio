import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { trigger, transition, useAnimation } from '@angular/animations';

import { flipInX, slideOutLeft } from 'ng-animate';

import {
  Projects,
  Tools,
  Language,
  Database,
  Framework,
} from '../api/projects';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('flipInX', [
      transition(
        '* => *',
        useAnimation(flipInX, { params: { timing: 1, delay: 0 } })
      ),
    ]),
    trigger('slideOutLeft', [transition('* => *', useAnimation(slideOutLeft))]),
  ],
})
export class ProjectsComponent implements OnInit {
  project: Projects[];
  byTools: Projects[];
  byLanguage: Projects[];
  byDatabase: Projects[];
  byFramework: Projects[];

  tools: Tools[];
  language: Language[];
  database: Database[];
  framework: Framework[];
  // Selected in html
  selectedLanguage: string = '';
  selectedTool: string = '';
  selectedDatabase: string = '';
  selectedFramework: string = '';

  // cloudinary
  cloud: string = environment.cloudinary;

  // Animation
  flipInX: any;
  slideOutLeft: any;

  constructor(private httpClient: HttpClient, private modalService: NgbModal) {}
  ngOnInit(): void {
    this.getAllDatabases();
    this.getAllFrameworks();
    this.getAllProjects();
    this.getAllTools();
    this.getAlllanguages();
    this.projectsByDatabase();
    this.projectsByFramework();
    this.projectsByLanguage();
    this.projectsByTools();
  }
  @Output()
  selectedChanged: EventEmitter<string> = new EventEmitter<string>();
  onSelectedChanged() {}

  getAllProjects() {
    this.httpClient
      .get<any>(environment.allProjectsApi)
      .subscribe((response) => {
        this.project = response;
      });
  }
  getAllTools() {
    this.httpClient.get<any>(environment.allTools).subscribe((response) => {
      this.tools = response;
    });
  }
  getAlllanguages() {
    this.httpClient.get<any>(environment.allLanguage).subscribe((response) => {
      this.language = response;
    });
  }
  getAllDatabases() {
    this.httpClient.get<any>(environment.allDb).subscribe((response) => {
      this.database = response;
    });
  }
  getAllFrameworks() {
    this.httpClient.get<any>(environment.allFramework).subscribe((response) => {
      this.framework = response;
    });
  }

  projectsByDatabase() {
    this.httpClient
      .get<any>(environment.projectsByDb + this.selectedDatabase)
      .subscribe((response) => {
        this.byDatabase = response;
      });
  }

  projectsByFramework() {
    this.httpClient
      .get<any>(environment.projectsByFramework + this.selectedFramework)
      .subscribe((response) => {
        this.byFramework = response;
      });
  }

  projectsByTools() {
    this.httpClient
      .get<any>(environment.projectsByTools + this.selectedTool)
      .subscribe((response) => {
        this.byTools = response;
      });
  }

  projectsByLanguage() {
    this.httpClient
      .get<any>(environment.projectsByLanguage + this.selectedLanguage)
      .subscribe((response) => {
        this.byLanguage = response;
      });
  }

  closeResult: string;

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  langShow = false;
  dbShow = false;
  frameShow = false;
  toolShow = false;
  AllShow = true;
  langList = false;
  frameList = false;
  showLangList = false;
  showFrameList = false;
  showAllList = false;

  togglelanguage() {
    this.langShow = true;
    this.frameShow = false;
    this.toolShow = false;
    this.dbShow = false;
    this.AllShow = false;
  }

  toggleframework() {
    this.langShow = false;
    this.frameShow = true;
    this.toolShow = false;
    this.dbShow = false;
    this.AllShow = false;
  }

  toggleAll() {
    this.langShow = false;
    this.frameShow = false;
    this.toolShow = false;
    this.dbShow = false;
    this.AllShow = true;
  }

  toggleLangList() {
    this.showLangList = !this.showLangList;
    this.showFrameList = false;
    this.showAllList = false;
  }
  toggleFrameList() {
    this.showLangList = false;
    this.showFrameList = !this.showFrameList;
    this.showAllList = false;
  }
  toggleAllList() {
    this.showLangList = false;
    this.showFrameList = false;
    this.showAllList = !this.showAllList;
  }
}
