import { StyledCard } from '../shared/Card';
import { Container, Row } from '../shared/Wrapper';
import { LinkButtonText } from '../shared/Buttons';
import { Color } from '../variables';

const NotFound = () => {
	return (
		<Row>
			<Container>
				<StyledCard>
					<p>
						Sorry... We can't find a page you are looking for...
						<LinkButtonText to='/' color={Color.primary}>
							Take me back to Home
						</LinkButtonText>
					</p>
				</StyledCard>
			</Container>
		</Row>
	);
};

export default NotFound;
