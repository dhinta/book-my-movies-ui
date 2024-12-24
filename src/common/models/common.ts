export enum NavigationDirection {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
}

export enum Permissions {
  MANAGE_MOVIES = 'org:movies:manage',
}

export interface Language {
  code: string;
  name: string;
}
