class Dog {
  private _raiting: number;

  public makeNoise(): void {
    console.log('Gav Gav');
  }

  private calculateSizeOfBowl() {
    const bowlSize = this.size*.25
    if (bowlSize > 2) {
      return 'big';
    }
    return 'small'
  }

  feed (type: string):void {
    const bowlsize = this.calculateSizeOfBowl();
    console.log(`Dog eat ${bowlsize} of ${type}`);
  }

  get raiting(): number {
    return this._raiting;
  }

  set raiting(value: number) {
    if (value > 5) {
      this._raiting = 5;
    } else {
      this._raiting = value;
    }
  }
}

// class RussianBorzaya extends Dog {
//
// }


class Format {
  /**
   * Format price. e.g. 1236.56 -> 1 236,56   1236 -> 1 236
   * @param {Number} price
   * @return {String}
   */
  static PRICE(price: number): string {
    if (price.toString().indexOf('.') > -1) {
      return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ').replace(/\./g, ',');
    }
    return price.toFixed(0).replace(/\d(?=(\d{3})+)/g, '$& ').replace(/\./g, ',');
  }

  /**
   * Format product code by remove leading zero
   * @param {String} code Product code
   * @return {String}
   */
  static productCode(code: string): string {
    return code.replace(/^0*/, '');
  }
}