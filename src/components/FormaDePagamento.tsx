import React, { useState } from 'react';
import "../styleComponents/FormaDePagamentoStyle.css";

interface FormaDePagamentoProps {
  setFormaPagamento: (pagamento: string) => void; // Função para atualizar a forma de pagamento em Home.tsx
}

const FormaDePagamento: React.FC<FormaDePagamentoProps> = ({ setFormaPagamento }) => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePaymentClick = (payment: string) => {
    setSelectedPayment(payment); // Atualiza o estado local com a forma de pagamento selecionada
    setFormaPagamento(payment); // Chama a função para atualizar o estado em Home.tsx
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
            selectedPayment === 'cartao-credito' ? 'selected' : ''
          }`}
          onClick={() => handlePaymentClick('cartao-credito')}
        >
          Cartão de Crédito
        </button>
        <button
          className={`formaPagamentoButton ${
            selectedPayment === 'cartao-debito' ? 'selected' : ''
          }`}
          onClick={() => handlePaymentClick('cartao-debito')}
        >
          Cartão de Débito
        </button>
      </div>
    </div>
  );
};

export default FormaDePagamento;
