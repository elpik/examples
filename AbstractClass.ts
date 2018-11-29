 abstract class Animal {
  public eat(food): void {
    // do something with food....
  }

  public sleep(hours: number): void {
    console.log(`Sleep next ${hours} hours`)
  }

  public abstract makeNoise(): void;
}



class Dog extends Animal {
  public makeNoise(): void {
    console.log('Gav Gav');
  }
}

class Cow extends Animal {
  public makeNoise(): void {
    console.log('Moo Moo');
  }
}