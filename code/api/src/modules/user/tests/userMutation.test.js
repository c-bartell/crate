import request from 'supertest';
import express from 'express';
import setupGraphQL from '../../../setup/graphql'

describe('user queries', () => {
  let server = express();
  beforeAll(() => {
    setupGraphQL(server)
  })

  it('can successfully mutate a users style', async (done) => {
    const response = await request(server)
      .post('/')
      .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlRoZSBVc2VyIiwiZW1haWwiOiJ1c2VyQGNyYXRlLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjEzMDgzMTcyfQ.cqVaMXWS8lP8JB8S982rsMcbey55MzWZMA6M0xUTFSM")
      .send({ query: 'mutation {userAddStyle(surveyResults: "Edgy, Edgy, Classy, Casual") { id email style } } '})
      .expect(200)
      expect(response.body).toMatchObject({
        data: {
          userAddStyle: {
              id: 2,
              email: "user@crate.com",
              style: "Edgy"
          }
        }
      })
    done();
  }),

  it('can successfully mutate a users style with a tie for result from survey',
  async (done) => {
    const response = await request(server)
      .post('/')
      .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlRoZSBVc2VyIiwiZW1haWwiOiJ1c2VyQGNyYXRlLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjEzMDgzMTcyfQ.cqVaMXWS8lP8JB8S982rsMcbey55MzWZMA6M0xUTFSM")
      .send({ query: 'mutation {userAddStyle(surveyResults: "Edgy, Edgy, Classy, Classy") { id email style } } '})
      .expect(200)
      expect(response.body).toMatchObject({
        data: {
          userAddStyle: {
              id: 2,
              email: "user@crate.com",
              style: "Edgy but Classy"
          }
        }
      })
    done();
  })
})
