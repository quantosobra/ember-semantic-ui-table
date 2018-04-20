import { A as emberArray } from '@ember/array';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.get('/people', function(schema, request) {
    let { page, limit, sort, dir, search } = request.queryParams;
    let people = schema.people.all().models;
    let meta = { total: people.length };

    page = Number(page || 1);
    limit = Number(limit || 20);
    dir = dir || 'asc';

    if (search) {
      people = emberArray(people).filterBy('firstName', search);
    }

    if (sort) {
      people = emberArray(people).sortBy(sort);
      if (dir !== 'asc') {
        people = people.reverse();
      }
    }

    let offset = (page - 1) * limit;
    people = people.slice(offset, offset + limit);

    return { people, meta };
  });
}
