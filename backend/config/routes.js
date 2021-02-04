module.exports = app =>{
  app.post('/users')
    .get(app.api.user.save)
}
