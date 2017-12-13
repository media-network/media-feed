import params from 'middlewares/params'

import {
  single as renderMedia,
  list as renderMediaList
} from './controllers/media'

export default app => {
  app.get('/',
    params({ currentPage: 1, tag: 'all' }, 'page-size', 'total-media'),
    renderMediaList()
  )

  app.get('/page/:page([0-9]+)',
    params({ tag: 'all' }, 'current-page', 'page-size', 'total-media'),
    renderMediaList()
  )

  app.get('/tags/:tag',
    params({ currentPage: 1 }, 'page-size', 'total-media', 'tag'),
    renderMediaList()
  )

  app.get('/tags/:tag/page/:page([0-9]+)',
    params({}, 'current-page', 'page-size', 'total-media', 'tag'),
    renderMediaList()
  )

  app.get('/m/:hash',
    params({}, 'hash'),
    renderMedia()
  )

  return app
}