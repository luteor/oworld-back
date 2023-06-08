const logger = require('../../services/logger');

/** Class representing an abstract core controller. */
class CoreController {
  static dataMapper;

  /**
   * responds with all entries from a table
   *
   * @param {Object} _
   * @param {Object} request
   */
  async getAll(request, response) {
    logger.info(`${this.constructor.name} getAll`);
    const useView = request.query.useView === 'true';
    const results = await this.constructor.dataMapper.findAll(useView);
    response.json(results);
  }

  /**
   * responds with one entry from a table
   *
   * @param {Object} request
   * @param {Object} response
   */
  async getOne(request, response) {
    logger.info(`${this.constructor.name} getOne`);
    const { field, value } = request.query;
    const results = await this.constructor.dataMapper.findOneByField(field, value);
    response.json(results);
  }
}

module.exports = CoreController;
