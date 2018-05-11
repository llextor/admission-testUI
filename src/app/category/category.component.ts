import {Component, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from '../entities/category';
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

  ngOnInit() {
    this.getListOfCategories();
  }
  constructor(private categoryService: CategoryService) {
  }

  // появление полей для создания по нажатию кнопки
  enterCategory() {
    this.clickNewCategory = true;
  }

  addCategory(name: string) {
    this.clickNewCategory = false;
    // {name} as Category - объект с одним полем
    this.categoryService.addCategory({name} as Category)
      .subscribe(() => {
        console.log('New category has created');
        this.getListOfCategories();
      });
  }

  countAndRemove(id: number) {
    this.categoryService.counter(id)
      .subscribe(data => {
        if (confirm('Questions in category: ' + data + ' \nAre you sure?')) {
          this.categoryService.removeCategory(id)
            .subscribe(() => {
              console.log('Remove OK');
              this.getListOfCategories();
            });
        }
      });
  }

  getListOfCategories() {
    this.categoryService.getCategories().subscribe(data => this.categories = data as Category[]);
  }
}
