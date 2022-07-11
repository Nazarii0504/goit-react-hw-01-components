import PropTypes from 'prop-types';
import { Container, Table, Head, Data, List } from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Head>Type</Head>
            <Head>Amount</Head>
            <Head>Currency</Head>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <List key={id}>
              <Data>{type}</Data>
              <Data>{amount}</Data>
              <Data>{currency}</Data>
            </List>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
