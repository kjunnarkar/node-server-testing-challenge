const db = require('../data/db-config');
const Members = require('./membersModel');

describe('testing members model', () => {
    describe('add new members', () => {
        it('should perform insert of member into DB', async () => {
            const newMember = await Members.add({ First_Name: 'Kiran', Last_Name: 'Junnarkar' });
            expect(newMember.First_Name).toBe('Kiran');
            expect(newMember.Last_Name).toBe('Junnarkar');
        })
        
        it('should show length of 1 in the DB', async () => {
            await Members.add({ First_Name: 'Kiran', Last_Name: 'Junnarkar' });
            const newMember = await db('members');
            expect(newMember).toHaveLength(1);
        })
    });

    describe('deleting members', () => {
            it('should remove member from DB', async () => {
                await Members.remove(1);
                const removedMember = await db('members');
                expect(removedMember).toHaveLength(0);
            })
            it('should remove member from DB', async () => {
                await Members.remove(2);
                const removedMember = await db('members');
                expect(removedMember).toHaveLength(1);
        })
    })
})

beforeEach(async () => {
    await db('members').truncate();
})
