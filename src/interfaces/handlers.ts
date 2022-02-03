export class BaseHandler {
  public stringify(obj: any): string {
    return JSON.stringify(obj)
  }
}

export interface Users {
  firstName: string
  lastName: string
  email: string
  id: number
  hash: string
}
