"use client";

import { Button } from "@/components/button";
import Input from "@/components/input";
import InputPassword from "@/components/input-password";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { authSchema } from "@/libs/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type Inputs = z.infer<typeof authSchema>;
export default function SimpleReactHookForm() {
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit: SubmitHandler<Inputs> = (data) => {
    console.log("data", data);
  };

  return (
    <Form {...form}>
      <form className="w-[500px] max-w-[500px] p-4 space-y-4" onSubmit={form.handleSubmit(submit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Input placeholder="dzungmv@gmail.com" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
        control={form.control}
        name="password"
        render={({field}) => (
            <FormItem>
                <InputPassword {...field} />
                <FormMessage/>
            </FormItem>
        )}
        />

        <Button variant='outline'>
          <span>Submit</span>
        </Button>
      </form>
    </Form>
  );
}
