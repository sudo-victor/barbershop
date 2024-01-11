import { ICustomer } from "../../domain/customer";

export interface CreateCustomerInput {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
}

export interface CustomerRepository {
  findByCpf(cpf: string): Promise<ICustomer>
  save(customer: CreateCustomerInput): Promise<void>
}
