// import sinon from 'sinon';
// import { expect } from 'chai';
// import chai from 'chai';
// import sinonChai from 'sinon-chai';

// import * as service from '../../../src/service/userService';
// import * as controller from '../../../src/controller/userController';
// import { Response } from 'express';

// // import * as mock from '../mocks';

// chai.use(sinonChai);

// describe('Teste de unidade do user controller', function() {
//   afterEach(sinon.restore);

//   it('realizando cadastro na plataforma', async () => {
//     sinon
//       .stub(service, 'postUser')
//       .resolves(9);
    
//     const res = {};
//     const req = {};

//     const status = sinon.stub().returns(res);

//     await controller.postUser(req, res);

//     expect(status).to.have.been.calledWith(200);
//   });
// });