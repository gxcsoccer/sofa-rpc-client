'use strict';

const Controller = require('sofa-node-demo').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
