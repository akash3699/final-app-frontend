import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://192.168.44.71:4000/category'

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.url)
  }
}
