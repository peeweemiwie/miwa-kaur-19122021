import { StyledCard } from '../shared/Card';
import { Container, Row } from '../shared/Wrapper';

const NotFound = () => {
	return (
		<Row>
			<Container>
				<StyledCard>
					<p>Sorry... We can't find a page you are looking for...</p>
					<button>Back to Home</button>
				</StyledCard>
			</Container>
		</Row>
	);
};

export default NotFound;
