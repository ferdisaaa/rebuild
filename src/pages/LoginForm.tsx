import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputText } from "../components/inputText";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"; 

const schema = z.object({ 
  email: z.string().email("Email tidak valid"), 
  password: z.string().min(8, "Minimal 8 karakter"), 
}); 

type FormData = z.infer<typeof schema>; 
export default function LoginForm() { 
    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <InputText 
                        label="Email"
                        nama="email"
                        register={register("email")}
                        error={errors.email?.message} 
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label><br />
                    <input 
                        id="password"
                        type="password"
                        {...register("password")} 
                        placeholder="Masukan password"
                    />
                    {/* PERBAIKAN: Gunakan 'errors' */}
                    {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
                </div>

                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}