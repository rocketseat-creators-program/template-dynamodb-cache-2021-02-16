const Koa = require('koa')
const Router = require('koa-router')

const db = require('../db')
const config = require('../config')
const { getPatientInfo } = require('./patient')

const app = new Koa()
const router = new Router()

db.connect()

router.get('/', async (ctx, next) => {
    ctx.body = 'Running'
  })

router.get('/patient/:id', async (ctx, next) => {
    const patientId = ctx.params.id
    ctx.body = await getPatientInfo(patientId)
  })

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.api.port)
