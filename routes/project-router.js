const express = require("express");
const router = express.Router();
const db = require("./../data/helpers/projectModel");

// TODO:
// get
// /api/projects
// /api/projects/:id
// - `get()`: calling get returns an array of all the resources contained in the database. If you pass an `id` to this method it will return the resource with that id if one is found.

router.get("/", async (req, res) => {
  console.log(req.query);
  try {
    projects = await db.get();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      error: "There was an error while getting the projects."
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await db.get(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res
      .status(500)
      .json({ error: "The project information could not be retrieved." });
  }
});

// TODO:
// post
// /api/projects
// - `insert()`: calling insert passing it a resource object will add it to the database and return the newly created resource.

router.post("/", async (req, res) => {
  try {
    const project = await db.insert(req.body);
    if (project) {
      res.status(201).json(project);
    } else {
      res.status(500).json({
        error: "There was an error while saving the action to the database"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "There was an error while saving the action to the database"
    });
  }
});

// TODO:
// put
// /api/projects/:id
// - `update()`: accepts two arguments, the first is the `id` of the resource to update, and the second is an object with the `changes` to apply. It returns the updated resource. If a resource with the provided `id` is not found, the method returns `null`.

router.put("/:id", async (req, res) => {
  try {
    const project = await db.update(req.params.id, req.body);
    if (project) {
      res.status(200).json(project);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "The project information could not be modified" });
  }
});

// TODO:
// delete
// /api/projects/:id
// - `remove()`: the remove method accepts an `id` as it's first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted.

// TODO:
// get
// /api/projects/:id
// The `projectModel.js` helper includes an extra method called `getProjectActions()` that takes a _project id_ as it's only argument and returns a list of all the _actions_ for the _project_.

module.exports = router;
