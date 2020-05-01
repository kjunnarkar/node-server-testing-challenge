const request = require('supertest');
const server = require('./server');
const Members = require('../members/membersModel');

describe('test the server APIs', () => {
    describe('GET /', () => {
        it('should return status 200 after getting list of members', async () => {
            const memberList = await request(server).get('/');
            expect(memberList.status).toBe(200);
        });

    });
});
