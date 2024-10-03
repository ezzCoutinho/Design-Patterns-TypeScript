import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-function-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

export function validaEmailClass(
  emailValidatorClassAdapter: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidatorClassAdapter.isEmail(email)) {
    console.log('É válido.');
  } else {
    console.log('É inválido.');
  }
}
// instanciando fora de uma variável.
validaEmailClass(new EmailValidatorClassAdapter(), 'lammerlopes@hotmail.com');

export function validaEmailFn(
  emailValidatorFnAdapter: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidatorFnAdapter(email)) {
    console.log('É válido.');
  } else {
    console.log('É inválido.');
  }
}
// Não precisa da execução da function, pois ela espera um tipo.
validaEmailFn(emailValidatorFnAdapter, 'lammerlopes@hotmail.com');
