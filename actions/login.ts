"use server"
import { LoginSchema } from "@/schemas";
import * as z from "zod";
// interface valueprops{
//     values:any
// }


export const login = async  (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)
    if (!validatedFields.success) {
        return {error:"Invalid fields"}
    }

    return {
        success:"Email send!"
    }
}
    
