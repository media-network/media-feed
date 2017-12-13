import { getFrom as getMediaFrom } from 'services/media'

export function list() {
  return [
    (req, res, next) => {
      const { f, t = 100 } = req.query

      getMediaFrom(f, parseInt(t, 10))
        .then(media => {
          res.locals.media = media
          res.locals.lastId = media.length > 0 ?
            media[media.length - 1]._id : null

          next()
        })
        .catch(err => next(err))
    },
    (req, res, next) => res.render('media')
  ]
}
