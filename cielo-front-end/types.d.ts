export type Payments = {
  id: string;
  merchantId?: string;
  paymentNode?: number;
  cnpjRoot: number;
  date?: string;
  paymentType?: string;
  cardBrand: string;
  authorizationCode?: string;
  truncatedCardNumber?: string;
  grossAmount: number;
  netAmount: number;
  terminal?: string;
  administrationFee?: number;
  channelCode?: number;
  channel?: string;
  withdrawAmount?: number;
  minimumMDRAmmount?: number;
  mdrTaxAmount?: number;
  mdrFeeAmount?: number;
  status: "Aprovada" | "Pendente" | "pending" | "processing" | "success" | "failed";
};

export type TransactionResult = {
  summary: {
    totalQuantity: number;
    totalAmount: number;
    totalNetAmount: number;
    totalAverageAmount: number;
    initialDate: string;
    finalDate: string;
  };
  pagination: {
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    numPages: number;
    lastPage: boolean;
    firstPage: boolean;
  };
  items: Payments[];
}[];

