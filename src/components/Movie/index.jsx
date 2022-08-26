import {Link} from "react-router-dom";
import {Container, Poster} from "./style";

const Movie = ({id, bg}) => {
	return (
		<Container>
			<Link to={`/movies-react/${id}`}>
				<Poster bg={bg} />
			</Link>
		</Container>
	)
}

export default Movie;
