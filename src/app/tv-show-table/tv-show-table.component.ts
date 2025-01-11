import { Component, input, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Signal } from '@angular/core';
import { Show } from '../episodate.service';

@Pipe({name: 'magicYear', standalone: true}) 
export class  MagicYearPipe implements PipeTransform{
  transform(value: string): string{
    let r = new RegExp(/(?<year>\d{4})/).exec(value)?.groups?.['year']
    return   r ? r : ""
  }
}

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule, MagicYearPipe],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {
  shows = input<Show[]>([])  
  isLoading = input<Boolean>(true) 
}
