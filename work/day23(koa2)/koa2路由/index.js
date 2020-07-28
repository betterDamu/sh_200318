const Koa = require("koa")
const Router = require("koa-router")
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router()


router.get("/a",(ctx)=>{
    console.log(ctx.query.name)
    ctx.body={a:"a"}
})
router.post("/b",(ctx)=>{
    console.log(ctx.request.body)
    ctx.body={b:"b-post"}
})
router.get("/c",(ctx)=>{
    console.log(ctx.request.headers,xxxx)
    ctx.body={c:"cccc"}
})
router.get("/user/:id",(ctx)=>{
    console.log(typeof +ctx.params.id)
    ctx.body={user:"user"}
})


app.use(bodyParser());
app.use(router.routes())
app.listen(8080)