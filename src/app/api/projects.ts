export class Projects {
  constructor(
    public id: number,
    public name: string,
    public details: string,
    public language: number,
    public framework: number,
    public tools: number,
    public database: number,
    public image: string,
    public link: string,
    public github: string
  ) {}
}
export class Tools {
  constructor(public tool: string, id: number) {}
}

export class Framework {
  constructor(public framework: string, id: number) {}
}

export class Database {
  constructor(public database: string, id: number) {}
}

export class Language {
  constructor(public language: string, id: number) {}
}
