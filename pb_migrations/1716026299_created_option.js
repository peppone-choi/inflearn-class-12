/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i7yog1sx3u89oi5",
    "created": "2024-05-18 09:58:19.745Z",
    "updated": "2024-05-18 09:58:19.745Z",
    "name": "option",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vh8uwaam",
        "name": "text",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i7yog1sx3u89oi5");

  return dao.deleteCollection(collection);
})
