import sinon from 'sinon';
import { expect } from 'chai';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import * as service from '../../../src/service/transactionsService';
import * as model from '../../../src/model/transactionsModel';

chai.use(sinonChai);

describe('Teste de unidade do transactions service', function() {
  afterEach(sinon.restore);

  it('realizando deposito na plataforma', async () => {
    sinon
      .stub(model, 'deposit')
      .resolves('SUCESS');

    const result = await service.deposit('username', 10);

    expect(result).to.be.deep.equal('SUCESS');
  });

    it('realizando deposito falho na plataforma', async () => {
    sinon
      .stub(model, 'deposit')
      .resolves('FAILURE');

    const result = await service.deposit('username', 10);

    expect(result).to.be.deep.equal('FAILURE');
  });

    it('realizando saque na plataforma', async () => {
    sinon
      .stub(model, 'withdrawal')
      .resolves('SUCESS');

    const result = await service.withdrawal('username', 10);

    expect(result).to.be.deep.equal('SUCESS');
  });

      it('realizando saque falho na plataforma', async () => {
    sinon
      .stub(model, 'withdrawal')
      .resolves('FAILURE');

    const result = await service.withdrawal('username', 10);

    expect(result).to.be.deep.equal('FAILURE');
  });

    it('realizando trix na plataforma', async () => {
    sinon
      .stub(model, 'sendMoney')
      .resolves('SUCESS');

    const result = await service.sendMoney('username', 'gustavo', 10);

    expect(result?.status).to.be.deep.equal(200);
  });

    it('realizando trix incompleto na plataforma', async () => {
    sinon
      .stub(model, 'sendMoney')
      .resolves('INCOMPLETE_SEND');

    const result = await service.sendMoney('username', 'gustavo', 10);

    expect(result?.message).to.be.deep.equal('Trix não foi completado');
        expect(result?.status).to.be.deep.equal(410);
    });

    it('realizando trix sem saldo na plataforma', async () => {
    sinon
      .stub(model, 'sendMoney')
      .resolves('CHECK_BALANCE');

    const result = await service.sendMoney('username', 'gustavo', 10);

    expect(result?.message).to.be.deep.equal('verifique o saldo e o valor de envio');
    expect(result?.status).to.be.deep.equal(400);
    });

    it('realizando trix com dados errados na plataforma', async () => {
    sinon
      .stub(model, 'sendMoney')
      .resolves('FAILURE');

    const result = await service.sendMoney('username', 'gustavo', 10);

    expect(result?.message).to.be.deep.equal('sua requisição falhou, verifique os dados e tente mais tarde');
    expect(result?.status).to.be.deep.equal(400);
    });

});