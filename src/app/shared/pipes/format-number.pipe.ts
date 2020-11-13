import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toLocaleString('pt-BR');
  }

}
