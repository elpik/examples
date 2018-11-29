abstract class Animal {
  public eat(food): void {
    // do something with food....
  }

  public sleep(hours: number): void {
    console.log(`Sleep next ${hours} hours`)
  }

  public abstract makeNoise(): void;
}

interface InterfacePettable {
  train(trick: object): void
  bathe(): void
}

class Dog extends Animal implements InterfacePettable{
  public makeNoise(): void {
    console.log('Gav Gav');
  }
}

class Cow extends Animal {
  public makeNoise(): void {
    console.log('Moo Moo');
  }
}

interface InterfaceRidable {
  harness(type: string): void
  shoe(): void
}

class Horse extends Animal implements InterfaceRidable{
  public makeNoise(): void {
    console.log('Igogo');
  }
  harness(type: string): void {
    console.log('Horse harnessed')
  }
  shoe(): void {
    console.log('Horse shod')
  }
}
class Donkey extends Animal implements InterfaceRidable{
  public makeNoise(): void {
    console.log('Ia Ia');
  }
  harness(type: string): void {
    console.log('Donkey harnessed')
  }
  shoe(): void {
    console.log('Donkey shod')
  }
}

