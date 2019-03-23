const express = require("express");
const router = express.Router();
const db = require("./../data/helpers/actionModel");

// TODO:
// get
// /api/actions
// /api/actions/:id
// - `get()`: calling get returns an array of all the resources contained in the database. If you pass an `id` to this method it will return the resource with that id if one is found.

// TODO:
// post
// /api/actions
// - `insert()`: calling insert passing it a resource object will add it to the database and return the newly created resource.

// TODO:
// put
// /api/actions/:id
// - `update()`: accepts two arguments, the first is the `id` of the resource to update, and the second is an object with the `changes` to apply. It returns the updated resource. If a resource with the provided `id` is not found, the method returns `null`.

// TODO:
// delete
// /api/actions/:id
// - `remove()`: the remove method accepts an `id` as it's first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted.

module.exports = router;
