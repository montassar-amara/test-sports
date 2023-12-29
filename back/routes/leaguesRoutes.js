const express = require('express');
const { filterLeagues, getLeagueById } = require('../controllers/leagueController');
const router = express.Router();


/**
 * @swagger
 * components:
 *  schemas:
 *      League:
 *          type: object
 *          required:
 *              - name
 *              - sport
 *          properties:
 *              _id:
 *                  type: string
 *                  description: auto generated id
 *              name:
 *                  type: string
 *                  description: the league name
 *              sport:
 *                  type: string
 *                  description: the sport 
 *              teams:
 *                  type: array
 *                  items:
 *                      type: Team
 *                      $ref: '#/components/schemas/Team'  
 *                  description: an array of the teams
 *      Player:
 *          type: object
 *          required:
 *              - name
 *              - thumbnail
 *              - position
 *          properties:
 *              _id:
 *                  type: string
 *                  description: auto generated id
 *              name:
 *                  type: string
 *                  description: the player name
 *              thumbnail:
 *                  type: string
 *                  description: the player image 
 *              positon:
 *                  type: string
 *                  description: the player position
 *              born:
 *                  type: date
 *                  description: the player date of birth
 *              signin:
 *                  type: object
 *                  properties:
 *                      currency:
 *                          type: string
 *                          description: the currency of the amount
 *                      amount:
 *                          type: number
 *                          description: the amount of the singin
 *                  description: the player signin data
 * 
 */


/**
 * @swagger
 * /leagues:
 *  post:
 *      summary: Returns the list of leagues corresponding to the filter
 *      parameters:
 *          - in: body
 *            name: filter
 *            schema:
 *              type: string
 *            required: true
 *            description: league name
 *            example: league
 *      responses:
 *          200:
 *              description: a list of leagues
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: League
 *                              $ref: '#/components/schemas/League'                 
 */
router.route("/leagues").post(filterLeagues);

/**
 * @swagger
 * /league/{id}:
 *  get:
 *      summary: Returns the requested league by id
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: League id
 *            example: 5d2cdd30da07b95bb8f16ed9
 *      responses:
 *          200:
 *              description: The requested League
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: League
 *                          $ref: '#/components/schemas/League'                 
 */
router.route("/league/:id").get(getLeagueById);

module.exports = router;