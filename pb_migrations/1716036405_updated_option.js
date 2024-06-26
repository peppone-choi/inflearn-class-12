/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7yog1sx3u89oi5")

  // remove
  collection.schema.removeField("xurvkdkq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7yog1sx3u89oi5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xurvkdkq",
    "name": "selected",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
