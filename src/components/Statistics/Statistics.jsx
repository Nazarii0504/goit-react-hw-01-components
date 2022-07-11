import { Stats } from './Stats';
import PropTypes from 'prop-types';
import { Statistic, Title, List } from './Statistic.styled';

export const Statistics = ({ stats }) => {
  return (
    <Statistic>
      {Title && <Title>Upload stats</Title>}

      <List>
        {stats.map(data => (
          <Stats
            key={data.id}
            label={data.label}
            percentage={data.percentage}
          />
        ))}
      </List>
    </Statistic>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
