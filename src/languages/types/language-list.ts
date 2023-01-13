type Language = {
  name: string;
  nativeName: string;
};

export type LanguageList = {
  [code: string]: Language;
};
