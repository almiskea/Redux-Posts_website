import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsDetails from './components/posts_details';

export default (
<Route path="/" component={App} >
  <IndexRoute component={PostsIndex} />
  <Route path="posts/new" component={PostsNew} />
  <Route path="posts/:id" component={PostsDetails} />
</Route>
);
