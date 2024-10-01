// Quando nos usarmos unknown temos que usar type guards.
// Composite validation moderno.
// Component
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// Leaf
export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'number';
  }
}

//Composite
export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }

    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

// Só funciona se for um por vez.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateEmail = new ValidateEmail();
const validateString = new ValidateString();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const validateNumber = new ValidateNumber();
const validationComposite = new ValidationComposite();
// validationComposite.add(validateEmail);
validationComposite.add(validateString);
// validationComposite.add(validateNumber);
console.log(validationComposite.validate('2'));
