const express = require("express");
const router = express.Router();
const db = require("./../data/helpers/actionModel");

// TODO:
// get
// /api/actions
// /api/actions/:id
// - `get()`: calling get returns an array of all the resources contained in the database. If you pass an `id` to this method it will return the resource with that id if one is found.
router.get("/", async (req, res) => {
  try {
    actions = await db.get();
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({
      error: "There was an error while getting the users."
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const action = await db.get(req.params.id);
    res.status(200).json(action);
  } catch (error) {
    res
      .status(500)
      .json({ error: "The action information could not be retrieved." });
  }
});

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
