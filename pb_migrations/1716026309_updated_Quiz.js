/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3m1ghf12tdl3a")

  collection.name = "quiz"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3m1ghf12tdl3a")

  collection.name = "Quiz"

  return dao.saveCollection(collection)
})
