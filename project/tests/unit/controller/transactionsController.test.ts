import sinon from 'sinon';
import { expect } from 'chai';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import * as service from '../../../src/service/transactionsService';
import * as controller from '../../../src/controller/transactionsController';
import { userLogin, userPost } from '../mocks/userMock';
import { Request, Response } from 'express';

chai.use(sinonChai);

const res = {
  status: sinon.stub().returnsThis(),
  json: sinon.stub().returnsThis(),
};

describe('Teste de unidade do user controller', function() {
  afterEach(sinon.restore);

  it('realizando deposito na plataforma', async () => {
    sinon
      .stub(service, 'deposit')
      .resolves('SUCESS');
    

    const req = { body: userPost };

    const status = sinon.stub().returns(res as unknown as Request);

    await controller.deposit(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(200);
  });

    it('realizando deposito falho na plataforma', async () => {
    sinon
      .stub(service, 'deposit')
      .resolves('FAILURE');
    

    const req = { body: userPost };

    const status = sinon.stub().returns(res as unknown as Request);

    await controller.deposit(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(404);
  });

      it('realizando saque na plataforma', async () => {
    sinon
      .stub(service, 'withdrawal')
      .resolves('SUCESS');
    

    const req = { body: userPost };

    const status = sinon.stub().returns(res as unknown as Request);

    await controller.withdrawal(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(200);
  });

       it('realizando saque sem saldo na plataforma', async () => {
    sinon
      .stub(service, 'withdrawal')
      .resolves('UNAVAILABLE_BALANCE');
    

    const req = { body: userPost };

    const status = sinon.stub().returns(res as unknown as Request);

    await controller.withdrawal(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(401);
  });

    it('realizando saque dados errados na plataforma', async () => {
    sinon
      .stub(service, 'withdrawal')
      .resolves('FAILURE');
    

    const req = { body: userPost };

    const status = sinon.stub().returns(res as unknown as Request);

    await controller.withdrawal(req as Request, res as unknown as Response);

    expect(res.status).to.have.been.calledWith(404);
  });


});