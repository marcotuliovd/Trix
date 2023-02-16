import sinon from 'sinon';
import { expect } from 'chai';
import chai from 'chai';
import sinonChai from 'sinon-chai';

import * as service from '../../../src/service/userService';
import * as model from '../../../src/model/userModel';
import { userPost } from '../mocks/userMock';

chai.use(sinonChai);

describe('Teste de unidade do user service', function() {
  afterEach(sinon.restore);

  it('realizando cadastro na plataforma', async () => {
    sinon
      .stub(model, 'postUser')
      .resolves(9);

    const result = await service.postUser(userPost);

    expect(result).to.be.deep.equal(9);
  });

  it('realizando login na plataforma', async () => {
    sinon
      .stub(model, 'login')
      .resolves('nvndvnds');

    const result = await service.login('username', 'nvndvnds');

    expect(result).to.be.deep.equal('USER_VALID');
  });

    it('realizando login falho na plataforma', async () => {
    sinon
      .stub(model, 'login')
      .resolves('nvndvnds');

    const result = await service.login('username', 'mdsmvdsmvosdv');

    expect(result).to.be.deep.equal('USER_INVALID');
  });
});