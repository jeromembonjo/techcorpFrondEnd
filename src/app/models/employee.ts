export interface Employee {}
// Les quatre roles definis par le cahier des charges.
export type Role = 'employee' | 'manager' | 'hr' | 'admin';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  role: Role;
  managerId?: number;        // optionnel : la direction n'a pas de manager
  readonly hiredAt: string;  // date ISO, jamais modifiee
}
