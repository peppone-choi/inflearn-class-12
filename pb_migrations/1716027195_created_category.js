/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "z62wttme9d8wg9c",
    "created": "2024-05-18 10:13:15.468Z",
    "updated": "2024-05-18 10:13:15.468Z",
    "name": "category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vuucx4pb",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zqxwcscp",
        "name": "quizItem",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "zs3m1ghf12tdl3a",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z62wttme9d8wg9c");

  return dao.deleteCollection(collection);
})
