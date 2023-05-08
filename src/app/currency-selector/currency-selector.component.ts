import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Currency } from '../model/currency';
import { currencies } from '../model/currencies';
@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css'],
})
export class CurrencySelectorComponent {
@ViewChild('code')codeRef!: ElementRef;
 @ViewChild('conversionRate')conversionRateRef!: ElementRef; 
 @Output() newCurrency = new EventEmitter<Currency>();

  onAddItem(){
    const ingCode = this.codeRef.nativeElement.value;
    const ingRate = this.conversionRateRef.nativeElement.value;
    const newcurrencies = new Currency(ingCode, ingRate);
    this.newCurrency.emit(newcurrencies);
  }
}
