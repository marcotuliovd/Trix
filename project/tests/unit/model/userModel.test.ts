// import { ResultSetHeader } from 'mysql2/promise';
// import sinon from 'sinon';
// import { expect } from 'chai';
// import chai from 'chai';
// import sinonChai from 'sinon-chai';

// import * as model from '../../../src/model/userModel';
// import connection from '../../../src/model/connection';
// import { responseUser, userPost } from '../mocks/userMock';
// import { NewUser } from '../../../src/interface/userInterface';

// chai.use(sinonChai);

// describe('Teste de unidade do user model', function() {
//   afterEach(sinon.restore);

//   it('realizando cadastro na plataforma', async () => {
//     sinon
//           .stub(connection, 'execute')
//           .resolves(responseUser) as unknown as ResultSetHeader;

//     const result = await model.postUser(userPost);

//     expect(result).to.be.deep.equal(5);
//   });

// });