import {useNavigate, useParams} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
import {Column, Container, Description, Poster, Subtitle, Title, ContainerSuggestions, BackButton} from "./style";
import {Movies} from "../Home/style";
import Movie from "../../components/Movie";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Button} from "@mui/material";

const GET_MOVIE = gql`
    query getMovie($id: Int!){
        movie(id: $id) {
            medium_cover_image
            summary
            rating
            description_intro
            title
            language
            genres
            id
        }
        suggestions(id: $id) {
            id
            medium_cover_image
        }
    }
`

const Details = () => {
	const navigate = useNavigate();
	const {id} = useParams();
	const {loading, data} = useQuery(GET_MOVIE, {
		variables: {id: parseInt(id)}
	})
	return (
		<>
			<Container>
				<BackButton>
					<Button sx={{color: "white", width: 40, height:40,  borderRadius: '50%', minWidth: "auto"}} fontSize={"large"} onClick={() => navigate(-1)}>
						<ArrowBackIcon fontSize={"large"} />
					</Button>
				</BackButton>
				<Column>
					<Title>{loading ? "Загрузка..." : data?.movie?.title}</Title>
					<Subtitle>
						{data?.movie?.language} · {data?.movie?.rating}
					</Subtitle>
					<Description>{data?.movie?.description_intro}</Description>
				</Column>
				<Poster bg={data?.movie?.medium_cover_image} />
			</Container>
			<ContainerSuggestions>
				{data?.suggestions && (
					<Movies>
						{data.suggestions.map((m) => (
							<Movie key={m.id} id={m.id} bg={m.medium_cover_image}/>
						))}
					</Movies>
				)}
			</ContainerSuggestions>
		</>
	)
}

export default Details;
