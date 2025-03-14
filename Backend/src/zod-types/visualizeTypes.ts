import z from "zod";


const viualizeTypes = z.object({
    data:z.string().min(5),
});

export default viualizeTypes;