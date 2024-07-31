import express, {Application, Request, Response } from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()
const PORT: number = parseInt(process.env.PORT || '3000')

async function main(){
    app.use(bodyParser.json())
    app.use('/pages', express.static(path.join(__dirname, 'pages')))
    app.get('/', (req: Request, res: Response) => {
        res.redirect('pages/main/index.html')
    })
    app.listen(PORT, () => {
        console.log(`Servidor iniciado na porta ${PORT}`);
    })
}
main()