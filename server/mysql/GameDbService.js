const debug = require('debug')('tqb-miniapp-petchain[GameDbService]')
const uuidGenerator = require('uuid/v4')
const moment = require('moment')
const ERRORS = require('../constants').ERRORS
// const qcloud = require('../qcloud')
// const { mysql } = qcloud
const { mysql } = require('../qcloud')

function saveHelloInfo(helloInfo) {
    const uuid = uuidGenerator()
    const create_time = moment().format('YYYY-MM-DD HH:mm:ss')
    const last_visit_time = create_time
    const id = 1

    // 查重并决定是插入还是更新数据
    return mysql('cHelloInfo').count('id as hasInfo').where({
        id
    })
        .then(res => {
            // 如果存在用户则更新
            if (res[0].hasInfo) {
                return mysql('cHelloInfo').update({
                    uuid, create_time, last_visit_time
                }).where({
                    id
                })
            } else {
                return mysql('cHelloInfo').insert({
                    uuid, create_time, last_visit_time, id
                })
            }
        })
        .then(() => ({
            helloinfo: helloInfo
        }))
        .catch(e => {
            debug('%s: %O', ERRORS.DBERR.ERR_WHEN_INSERT_TO_DB, e)
            throw new Error(`${ERRORS.DBERR.ERR_WHEN_INSERT_TO_DB}\n${e}`)
        })
}

/**
 * 通过 skey 获取用户信息
 * @param {string} skey 登录时颁发的 skey 为登录态标识
 */
function getHelloInfoById(id) {
    if (!skey) throw new Error(ERRORS.DBERR.ERR_NO_SKEY_ON_CALL_GETUSERINFOFUNCTION)

    return mysql('cHelloInfo').select('*').where({
        id
    })
}

module.exports = {
    saveHelloInfo,
    getHelloInfoById
}
