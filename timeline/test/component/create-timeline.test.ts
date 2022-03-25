import { expect } from "chai";
import UserParams from "@src/types/user-params";
import createTimeLine from "@src/controllers/create-timeline";
import timelineRepo from "@src/ports/repo/timeline";
import { SinonStub, stub, restore } from "sinon";

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

    it("return a timeline with all events inside", async () => {
        const userParams: UserParams = {
            userId: "some-user-id",
            fullName: "Some Body",
        };

       const timeline = await createTimeLine(userParams);
        expect(timeline.events).to.be.an("Array").that.has.length(1);
        expect(timeline.events[0].description).to.be.equal("welcome Some Body!");
    });
});