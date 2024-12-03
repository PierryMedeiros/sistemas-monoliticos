import InvoiceItem from "../domain/invoice-item.entity";

export default interface InvoiceItemsGateway {
  generate(invoiceItem: InvoiceItem): Promise<void>;
  find(id: string): Promise<InvoiceItem>;
}