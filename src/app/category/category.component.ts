import { Component, OnInit } from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from '../entities/Category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  nameOfCategory: string;
  clickNewCategory: boolean;
  constructor(private categoryService: CategoryService,
              private routes: Router) {


  }
  enterCategory() {
    this.clickNewCategory = true;
  }
  addCategory(name: string) {
    const category: Category = {
      name: name
    }
    console.log(category);
    this.clickNewCategory = false;
    this.categoryService.addCategory(category)
      .subscribe(() => {
        console.log('New category has created');
        this.ngOnInit();

      });
  }
  removeCategory(id: number) {
    this.categoryService.removeCategory(id)
      .subscribe(() => {
      console.log('Remove OK');
      this.ngOnInit();
    });
  }
  deleteById(id: number) {
    this.categoryService.counter(id)
      .subscribe(data => {
        if (confirm('Questions in category: ' + data + ' \nAre you sure?')) {
          this.removeCategory(id);
        }
      });
  }
  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(data => {
        this.categories = data as Category[];
      }   );
  }

}
