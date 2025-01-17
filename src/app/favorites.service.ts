import { inject, Injectable, signal,effect } from '@angular/core';
import { StorageService } from './storage.service';



const FAVORITES_ID = "favourites"

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  storage = inject(StorageService<number[]>)
  favorites = signal<number[]>(this.storage.get(FAVORITES_ID))
  
  constructor(){
    effect(() => this.storage.set(FAVORITES_ID, this.favorites()))
  }

  toggleFavorites(fid: number){
    this.favorites.update(f => {
      let i = f.indexOf(fid)
      if (i != -1) {
        f.splice(i,1)
        return [...f]
      } else{
        return [...f, fid]
      }
    })
  }

}
