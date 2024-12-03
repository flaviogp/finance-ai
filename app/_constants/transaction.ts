import { TransactionCatergory, TransactionPaymentMethod, TransactionType } from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
    EDUCATION: "Educação",
    ENTERTAINMENT: "Entretenimento",
    FOOD: "Alimentação",
    HEALTH: "Saúde",
    HOUSING: "Moradia",
    OTHER: "Outros",
    SALARY: "Salário",
    TRANSPORTATION: "Transporte",
    UTILITY: "Utilidades",
  };
  
  export const TRANSACTION_PAYMENT_METHOD_LABELS = {
    BANK_TRANSFER: "Transferência Bancária",
    BANK_SLIP: "Boleto Bancário",
    CASH: "Dinheiro",
    CREDIT_CARD: "Cartão de Crédito",
    DEBIT_CARD: "Cartão de Débito",
    OTHER: "Outros",
    PIX: "Pix",
  };

  export const TRANSACTION_TYPE_OPTIONS = [
    {
      value: TransactionType.EXPENSE,
      label: "Despesa",
    },
    {
      value: TransactionType.DEPOSIT,
      label: "Depósito",
    },
    {
      value: TransactionType.INVESTMENT,
      label: "Investimento",
    },
  ];
  
  export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
    {
      value: TransactionPaymentMethod.BANK_TRANSFER,
      label: "Transferência Bancária",
    },
    {
      value: TransactionPaymentMethod.BANK_SLIP,
      label: "Boleto Bancário",
    },
    {
      value: TransactionPaymentMethod.CASH,
      label: "Dinheiro",
    },
    {
      value: TransactionPaymentMethod.CREDIT_CARD,
      label: "Cartão de Crédito",
    },
    {
      value: TransactionPaymentMethod.DEBIT_CARD,
      label: "Cartão de Débito",
    },
    {
      value: TransactionPaymentMethod.OTHER,
      label: "Outros",
    },
    {
      value: TransactionPaymentMethod.PIX,
      label: "Pix",
    },

  ]
  export const TRANSACTION_CATEGORY_OPTIONS = [
    {
      value: TransactionCatergory.EDUCATION,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCatergory.EDUCATION],
    },
    {
      value: TransactionCatergory.ENTERTAINMENT,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCatergory.ENTERTAINMENT
      ],
    },
    {
      value: TransactionCatergory.FOOD,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCatergory.FOOD],
    },
    {
      value: TransactionCatergory.HEALTH,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCatergory.HEALTH],
    },
    {
      value: TransactionCatergory.HOUSING,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCatergory.HOUSING],
    },
    {
      value: TransactionCatergory.OTHER,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCatergory.OTHER],
    },
    {
      value: TransactionCatergory.SALARY,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCatergory.SALARY],
    },
    {
      value: TransactionCatergory.TRANSPORTATION,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCatergory.TRANSPORTATION],
    },
    {
      value: TransactionCatergory.UTILITY,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCatergory.UTILITY],
    },

  ]