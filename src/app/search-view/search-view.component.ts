import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvShowTableComponent} from '../tv-show-table/tv-show-table.component';
import { EpisodateService } from '../episodate.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent, ReactiveFormsModule],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {

  name = new FormControl('') 
  shows = this.es.shows
  isLoading = this.es.isLoading
  constructor (private es : EpisodateService){   
    this.es.getShows()   
  }

  onClick( query: string, event?: Event){
    event?.preventDefault();
    this.es.newSearch.next(query)
  }
}
