import { expect } from "chai";
import UserParams from "@src/types/user-params";
import createTimeLine from "@src/controllers/create-timeline";
import timelineRepo from "@src/ports/repo/timeline";
import Sinon, { SinonStub, stub, restore } from "sinon";

let insertTimeline: SinonStub;

describe("Create Timeline", () => {

    beforeEach(() => {
        insertTimeline = stub(timelineRepo, "insert");
    });

    afterEach(() => restore());


    it("Persist a timeline in the database", async () => {
        const userParams: UserParams = {
            userId: "some-user-id",
            fullName: "Some Body",
        };

        await createTimeLine(userParams);
        expect(insertTimeline).to.have.been.calledOnce;
    });
});