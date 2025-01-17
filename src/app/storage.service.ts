import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService<Type> {

  get(key:string): Type {
    return JSON.parse(localStorage.getItem(key) ?? "[]") as Type
  }

  set(key: string, value : Type){
      localStorage.setItem(key, JSON.stringify(value))
  }

}
