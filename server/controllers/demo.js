async function get(ctx, next) {
  ctx.state.data = {
    msg: 'hello world'
  }
  ctx.body = "ok"
}

module.exports = {
  get
}