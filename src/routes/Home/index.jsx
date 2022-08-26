import {gql, useQuery} from "@apollo/client";
import {Container, Header, Loading, Movies, Subtitle, Title} from "./style";
import Movie from "../../components/Movie";
import {Pagination} from "@mui/material";
import {useNavigate, useSearchParams } from "react-router-dom";

const GET_MOVIES = gql(`
	query getMovies($page: Int) {
		movies(page: $page){
			info {
				count
				pages
				next
				prev
		    },
			results {
			    id
			    medium_cover_image
		    }
		}
	}
`)
// const LOGIN = gql(`
// 	mutation Login($email:String!, $password:String!){
// 		login(email:$email, password:$password)
// 	}
// `)

const Home = () => {
	const [searchParams] = useSearchParams();
	const page = searchParams.get('page')
	const navigate = useNavigate();
	// const [loginUser] = useMutation(LOGIN)
	const {loading, data} = useQuery(GET_MOVIES, {
		variables: {
			page:  parseInt(page) || 1
		}
	})
	const handleChange = (event, value) => {
		navigate({
			pathname: '/',
			search: `?page=${value}`,
		})
	};
	// const login = async () => {
	// 	const {data: {login: status}} = await loginUser({
	// 		variables: {
	// 			email: "deurlex@gmail.com",
	// 			password: "260696vlad"
	// 		}
	// 	})
	// 	console.log(status)
	// }
	return (
		<Container>
			<Header>
				<Title>Apollo 2021</Title>
				{/*<Button onClick={login}>Login</Button>*/}
				<Subtitle>База фильмов на React, Apollo, GraphQL</Subtitle>
			</Header>
			{loading && <Loading>Загрузка...</Loading>}
			{
				!loading &&
				data?.movies?.results && (
					<>
						<Movies>
							{data.movies.results.map((m) => (
								<Movie key={m.id} id={m.id} bg={m.medium_cover_image}/>
							))}
						</Movies>
						<Pagination
							sx={{pb:1.5}}
							count={data.movies.info.count}
							page={data.movies.info.pages}
							onChange={handleChange}
							shape="rounded"
						/>
					</>
				)
			}
		</Container>
	)
}

export default Home;
