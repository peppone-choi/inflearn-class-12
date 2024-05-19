/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3m1ghf12tdl3a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kiciakid",
    "name": "selected",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "i7yog1sx3u89oi5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3m1ghf12tdl3a")

  // remove
  collection.schema.removeField("kiciakid")

  return dao.saveCollection(collection)
})
