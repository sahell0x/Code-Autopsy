import z from "zod";


const viualizeTypes = z.object({
    data:z.string().min(10),
});

export default viualizeTypes;