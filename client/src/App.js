import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';

import Home from '../src/pages/Home';
import Profile from '../src/pages/Profile';
import Animal from '../src/pages/Animal';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div id="main-title" className="font">
          Vet Record
        </div>
        <Routes>
          <Route path="/Animal" element={<Animal />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
       <Footer />
      </Router>


    </ApolloProvider>
  );
}

export default App;

