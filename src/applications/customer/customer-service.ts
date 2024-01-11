import { ICustomer } from "../../domain/customer";
import { CreateCustomerInput, CustomerRepository } from "../repositories/customer-repository";

export class CustomerService {
  constructor(private customerRepository: CustomerRepository) {}

  async create(input: CreateCustomerInput) {
    const customerExists = await this.customerRepository.findByCpf(input.cpf)
    if (customerExists) {
      throw new Error("Customer already exists")
    }

    await this.customerRepository.save(customerExists)
  }
}