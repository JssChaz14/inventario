export interface Employee {
  uid: string;
  name: string;
  nip: string;
  niprepeat: string;
  phone: string;
  email: string;
  number: number;
  status: boolean;
  job?: string;
  jobCategory?: string;
  date: Date;
}