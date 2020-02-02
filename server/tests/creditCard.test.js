const httpStatus = require('http-status');
const app = require('../app');
const { clearDatabase } = require('../utils/mongoose.utils');

after(async () => {
  await clearDatabase();
});

describe('## Credit Card APIs', () => {
  let creditCard;

  before(async () => {
    const response = await request(app).post('/api/credit-cards').send({
      name: "Test Credit Card",
      cashBackOnAllOther: 1
    })

    creditCard = response.body
  });

  describe('# GET /api/credit-card/:creditCardId', () => {
    it('should get credit card details', async () => {
      const response = await request(app).get(`/api/credit-cards/${creditCard._id}`);

      expect(response.status).to.equal(httpStatus.OK);
    });
  });

  describe('# GET /api/credit-cards', () => {
    it('should get all credit cards', async () => {
      const response = await request(app).get('/api/credit-cards');

      expect(response.status).to.equal(httpStatus.OK);
    });
  });

  describe('# POST /api/credit-cards', () => {
    it('should create new credit card', async () => {
      const response = await request(app).post('/api/credit-cards').send({
        name: "Test Credit Card 2",
        cashBackOnAllOther: 1
      })

      expect(response.status).to.equal(httpStatus.CREATED);
    });
  });
});
