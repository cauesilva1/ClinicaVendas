// VendaPdf.tsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

interface Venda {
  nome: string;
  telefone: string;
  cpf: string;
  rua: string;
  bairro: string;
  complemento: string;
  procedimento: string;
  profissional: string;
  valor: string;
  horario: string;
  data: string;
  formaPagamento: string;
}

interface Props {
  venda: Venda;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const VendaPdf: React.FC<Props> = ({ venda }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Nota de Venda</Text>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.text}>{venda.nome}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Telefone:</Text>
          <Text style={styles.text}>{venda.telefone}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>CPF:</Text>
          <Text style={styles.text}>{venda.cpf}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.text}>{`${venda.rua}, ${venda.bairro}, ${venda.complemento}`}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Procedimento:</Text>
          <Text style={styles.text}>{venda.procedimento}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Profissional:</Text>
          <Text style={styles.text}>{venda.profissional}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Valor:</Text>
          <Text style={styles.text}>{venda.valor}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Horário:</Text>
          <Text style={styles.text}>{venda.horario}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.text}>{venda.data}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Forma de Pagamento:</Text>
          <Text style={styles.text}>{venda.formaPagamento}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default VendaPdf;
