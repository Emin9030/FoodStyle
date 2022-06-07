import React, { FC, memo } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { RootNavigation } from './modules/navigation/rootNavigation';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const App: FC = memo(() => {
	const client = new ApolloClient({
		uri: 'https://api-dev.foodstyles.com/graphql',
		cache: new InMemoryCache(),
		headers: { 'Authorization': "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjI1LCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU0NjA1Mjk4LCJleHAiOjE2NTUyMTAwOTh9.tcZYnRP_8QYLH8EI6v3CQ-_y3p4vGsnOfdCjKkjX9EkDHGSEoe2QpEfwJsDCLdOGFelgTOGyDHEOr9c6qr8SL5r8-yke1W33Xc4oG1KAwruxuZ0wSfw4hxUTHblRhVvFwx9R1sVC1JEOQpErcKaxwxxHYoZipDf6hzeAppZ5hLMYoHBJDJ3GF6IkHuguO0SQ4EE27i_d2WzhflbfbKZ-ylvoVD6sQ-WiUjBtDk6gewvwBcscExTOwV5g0b8qu424RFLSkTYwtmVNO6QMRwVcdpsQD3kI4-4VL4MOKXSj-f5KrCvtx2LK2fEKuSC0JERWyXz0yTMSDdxtxXAtmho6ig" }
	});

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar backgroundColor={'#f4b942'}/>
			<ApolloProvider {...{ client }}>
				<RootNavigation />
			</ApolloProvider>
		</SafeAreaView>
	);
});

export default App;
