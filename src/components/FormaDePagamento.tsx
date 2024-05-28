import React, { useState } from 'react';
import "../styleComponents/FormaDePagamentoStyle.css";

const FormaDePagamento: React.FC = () => {
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  
    const handlePaymentClick = (payment: string) => {
      if (selectedPayment === payment) {
        setSelectedPayment(null);
      } else {
        setSelectedPayment(payment);
      }
    };
  
    return (
      <div className="inputGroup">
        <label htmlFor="formaPagamento">Forma de pagamento:</label>
        <div className="paymentButtons">
          <button
            className={`formaPagamentoButton ${
              selectedPayment === 'dinheiro' ? 'selected' : ''
            }`}
            onClick={() => handlePaymentClick('dinheiro')}
          >
            Dinheiro
          </button>
          <button
            className={`formaPagamentoButton ${
              selectedPayment === 'cartao' ? 'selected' : ''
            }`}
            onClick={() => handlePaymentClick('cartao')}
          >
            Cartão
          </button>
        </div>
      </div>
    );
  };
  
  export default FormaDePagamento;
