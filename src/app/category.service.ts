import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://200.0.1.155:4000/category'

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.url)
  }
}
