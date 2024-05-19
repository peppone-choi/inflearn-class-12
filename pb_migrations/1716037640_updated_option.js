/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7yog1sx3u89oi5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v8qu7ezh",
    "name": "quiz",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zs3m1ghf12tdl3a",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7yog1sx3u89oi5")

  // remove
  collection.schema.removeField("v8qu7ezh")

  return dao.saveCollection(collection)
})
