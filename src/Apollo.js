import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
	uri: 'https://tranquil-journey-87002.herokuapp.com/graphql',
	cache: new InMemoryCache()
});


export default client;
