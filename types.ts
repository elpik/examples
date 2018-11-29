interface DogOptions {
  size:string,
  color:string,
  shortTail: boolean,
}

class Dog {
  private _raiting: number;
  options: DogOptions;

  public makeNoise(): void {
    console.log('Gav Gav');
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


