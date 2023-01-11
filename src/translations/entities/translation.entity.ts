interface Resource {
  key: string;
  value: string;
}

export class Translation {
  id: number;
  language: string;
  namespace: string;
  resources: Resource[];
}
