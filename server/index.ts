import * as next from 'next'
import * as express from 'express'
import * as path from 'path'
import * as serveStatic from 'serve-static'
import * as i18nextMiddleware from 'i18next-express-middleware'
import * as Backend from 'i18next-node-fs-backend'
import routes from './routes'
import i18n from './i18n'

const { i18nInstance } = i18n

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

i18nInstance
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
      fallbackLng: 'de',
      preload: ['de', 'fr', 'it', 'en'], // preload all languages
      ns: ['common'], // need to preload all the namespaces
      backend: {
        loadPath: path.join(process.cwd(), 'locales/{{lng}}/{{ns}}.json'),
        addPath: path.join(process.cwd(), 'locales/{{lng}}/{{ns}}.missing.json'),
      },
    }, () => {
      // loaded translations we can bootstrap our routes
      app.prepare()
        .then(() => {
          const server = express()

          // enable middleware for i18next
          server.use(i18nextMiddleware.handle(i18nInstance))

          // serve locales for client
          server.use('/locales', serveStatic(path.join(process.cwd(), 'locales')))

          // missing keys
          server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18nInstance, {}))

          // use next.js
          server.get('*', (req, res) => handle(req, res))

          server.listen(port, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
          })
        })
    },
  )
