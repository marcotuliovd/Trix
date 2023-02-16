import sinon from 'sinon';
import { expect } from 'chai';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import * as service from '../../../src/service/userService';
import * as controller from '../../../src/controller/userController';
import { userLogin, userPost } from '../mocks/userMock';
import { Request, Response } from 'express';

chai.use(sinonChai);

const res = {
  status: sinon.stub().returnsThis(),
  json: sinon.stub().returnsThis(),
};

describe('Teste de unidade do user controller', function() {
  afterEach(sinon.restore);

  it('realizando cadastro na plataforma', async () => {
    sinon
      .stub(service, 'postUser')
      .resolves(9);
    

    const req = { body: userPost };

    const status = sinon.stub().returns(res as unknown as Request);

    await controller.postUser(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(201);
  });

    it('realizando cadastro na plataforma', async () => {
    sinon
      .stub(service, 'login')
      .resolves('USER_VALID');
    

    const req = { body: userLogin };

    const status = sinon.stub().returns(res as unknown as Request);

    await controller.login(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(200);
  });
});