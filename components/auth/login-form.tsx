"use client"

import { login } from "@/actions/login"
import { CardWrapper } from "@/components/auth/card-wrapper"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { FormError } from "@/components/form-error"
import { FromSuccess } from "@/components/form-success"
import { useState, useTransition } from "react"

export const LoginForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const[ isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password:"",
        }
    })
    

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("")
        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
            })
        })

        
    }


    return (
        <CardWrapper
            
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account? "
            backButtonHref="/auth/register"
            showSocial
        
        >
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="john.doe@example.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />



                        <FormField control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="******"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                    </div>

                    <FormError message={ error } />
                    <FromSuccess message={ success } />

                    {/* <FormError message="Something went wrong"/>
                    <FromSuccess message="Message is Success"/> */}

                    <Button disabled={isPending} type="submit" className="w-full">
                                Login
                    </Button>


                </form>

            </Form>
        </CardWrapper>
    )
}
