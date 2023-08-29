export const ORDER = {
  STATUS: {
    0: 'waiting_for_payment',
    1: 'processing',
    2: 'shipping',
    3: 'completed',
    4: 'cancelled'
  }
}

export const PAYMENT = {
  METHOD: {
    0: 'credit_card',
    1: 'bank_transfer',
    2: 'momo',
    3: 'zalopay',
    4: 'paypal',
    5: 'cash_on_delivery'
  },
  STATUS: {
    0: 'unpaid',
    1: 'paid'
  }
}
