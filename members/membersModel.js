const db = require('../data/db-config');

module.exports = {
    add,
    remove,
    get
};

async function add(member) {
    const [id] = await db('members').insert(member, 'id');
    return db('members').where({ id }).first();
}

async function remove(id) {
    const removed = await db('members').where({ id }).del();
    return removed;
}

async function get() {
    return db('members');
}
