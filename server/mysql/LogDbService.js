const debug = require('debug')('qcloud-sdk[AuthDbService]')
const uuidGenerator = require('uuid/v4')
const moment = require('moment')
const ERRORS = require('../constants').ERRORS
const { mysql } = require('../qcloud')

function newPageLog(open_id, pagepath, message) {

  const create_time = moment().format('YYYY-MM-DD HH:mm:ss')

  return mysql('cPageLogs').insert({
    open_id, pagepath, create_time, message
  })
    .then(() => {
      status: 200
    })
    .catch(e => {
      debug('%s: %O', ERRORS.DBERR.ERR_WHEN_INSERT_TO_DB, e)
      throw new Error(`${ERRORS.DBERR.ERR_WHEN_INSERT_TO_DB}\n${e}`)
    })
}

module.exports = {
  newPageLog
}

