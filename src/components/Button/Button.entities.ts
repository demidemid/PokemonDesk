export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonColor: ButtonColors;
  readonly type: `button` | `reset` | `submit`;
  size: ButtonSizes;
}

// eslint-disable-next-line no-shadow
export enum ButtonColors {
  GREEN = 'green',
  YELLOW = 'yellow',
  RED = 'red',
}

export interface ICssClassName {
  name: string;
  class: string;
}

// eslint-disable-next-line no-shadow
export enum ButtonSizes {
  SMALL = `small`,
  MEDIUM = `medium`,
  BIG = `big`,
  AUTO = `auto`,
}
