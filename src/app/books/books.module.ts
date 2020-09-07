import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { BooksRoutingModule } from './books-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Card } from './../../lit-element/card';
import { StoreModule } from "@ngrx/store";
import { BookReducer } from "./store/book-store.reducer";
import { EffectsModule } from "@ngrx/effects";
import { BooksEffect } from './store/book-store.effects';

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('books', BookReducer),
    EffectsModule.forFeature([BooksEffect])
  ],
  entryComponents: [Card],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BooksModule { }
