import * as request from "supertest";
import app from "../../../../app";
describe("Get /",()=>{
it("SHOULD return 200Ok", done =>{
    request(app)
    .get("/")
    .end((err,res)=>{
        expect(res.status).toBe(200);
        done();
    });
});
});