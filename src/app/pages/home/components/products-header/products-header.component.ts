import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css'],
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortCountChange = new EventEmitter<string>();
  sort = 'desc';
  itemsShowCount = 12;
  onSortUpdated = (newSort: string) => {
    this.sort = newSort;
    this.sortCountChange.emit(newSort);
  };
  onItemsUpdated = (count: number) => {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  };
  onColumnsUpdated = (colsNum: number) => {
    this.columnsCountChange.emit(colsNum);
  };
}
