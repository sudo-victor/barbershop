import { ICustomer } from "../../entities/customer";

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
