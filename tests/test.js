var app = require('./tests/app.js');

var should = require('should');
var request = require('supertest');

describe('GET /user', function(){
    it('respond with json', function(done){
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
});

describe('GET /archives', function(){
    it('respond with json', function(done){
        request(app)
            .get('/archives')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
});

describe('GET /kontaktyi', function(){
    it('respond with json', function(done){
        request(app)
            .get('/kontaktyi')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
});
