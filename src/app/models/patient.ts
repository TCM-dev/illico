export class Patient {
  constructor(
    public id: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public birthdate: Date
  ) {}
}
