/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zs3m1ghf12tdl3a",
    "created": "2024-05-18 09:57:17.543Z",
    "updated": "2024-05-18 09:57:17.543Z",
    "name": "Quiz",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "umdvy1u7",
        "name": "question",
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
  const collection = dao.findCollectionByNameOrId("zs3m1ghf12tdl3a");

  return dao.deleteCollection(collection);
})
