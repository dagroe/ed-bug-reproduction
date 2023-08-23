export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  const items = server.createList('item', 2);
  server.create('list', {name: 'list #1', items: items});
}
