import * as nextRoutes from 'next-routes';

const routes = nextRoutes();

routes
    .add('home', '/', 'index')
    .add('a', '/test', 'a')
    .add('b', '/hello', 'b');

export default routes;
