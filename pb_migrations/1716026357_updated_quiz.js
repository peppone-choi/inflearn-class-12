/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3m1ghf12tdl3a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m9ydtvle",
    "name": "options",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "i7yog1sx3u89oi5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jecyq0du",
    "name": "answer",
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
  collection.schema.removeField("m9ydtvle")

  // remove
  collection.schema.removeField("jecyq0du")

  return dao.saveCollection(collection)
})
