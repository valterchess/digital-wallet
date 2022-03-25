import UserParams from "@src/types/user-params";
import Timeline, { Event } from "@src/types/timeline";
import timelineRepo from "@src/ports/repo/timeline";

const createWelcomeEvent = (userParams: UserParams): Event => ({
    description: `welcome ${userParams.fullName}!`,
    datetime: new Date,
});
export default async (userParams: UserParams): Promise<Timeline> => {
    const timeline: Timeline = {
        userId: userParams.userId,
        events: [createWelcomeEvent(userParams)],
    };
    await timelineRepo.insert(timeline);
    return timeline;
}