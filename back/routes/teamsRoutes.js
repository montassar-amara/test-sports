const express = require('express');
const { getTeamById } = require('../controllers/teamController');
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Team:
 *          type: object
 *          required:
 *              - name
 *              - thumbnail
 *          properties:
 *              _id:
 *                  type: string
 *                  description: auto generated id
 *              name:
 *                  type: string
 *                  description: the team name
 *              thumbnail:
 *                  type: string
 *                  description: the team logo
 *              players:
 *                  type: array
 *                  items:
 *                      type: Player
 *                      $ref: '#/components/schemas/Player'  
 *                  description: an array of the players
 */
/**
 * @swagger
 * /team/{id}:
 *  get:
 *      summary: Returns the requested team by id
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Team id
 *            example: 5d2d01fdda07b95bb8f16f0a
 *      responses:
 *          200:
 *              description: The requested team
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: Team
 *                          $ref: '#/components/schemas/Team'                 
 */
router.route("/team/:id").get(getTeamById);

module.exports = router;