export interface IRegisterForm {
  firstname: string;
  lastname: string;
  login: string;
  email: string;
  password: string;
}

interface IClassNames {
  [className: string]: string;
}
export let styles: IClassNames;
