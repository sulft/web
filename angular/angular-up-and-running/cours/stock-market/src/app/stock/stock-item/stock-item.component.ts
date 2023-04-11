import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent {
  @Input() stock: Stock;
  @Output() toggleFavorite: EventEmitter<Stock> = new EventEmitter<Stock>();

  ngOnInit() {}

  onToggleFavorite(event: any): void {
    this.toggleFavorite.emit(this.stock);
  }

  changeStockPrice(): void {
    this.stock.price += 5;
  }
}
