
import { useForm } from "react-hook-form";
import { InputText } from "../components/inputText";
import { zodResolver } from "@hookform/resolvers/zod"; 
import * as z from "zod"; 


// 1. Definisi Schema
const schema = z.object({ 
nama: z.string().min(1, "Nama wajib diisi"),
email: z.string().email("Email tidak valid"), 
password: z.string().min(8, "Minimal 8 karakter"), 
password_confirm: z.string().min(8, "Konfirmasi password minimal 8 karakter"),
}).refine((data) => data.password === data.password_confirm, {
message: "Password tidak cocok",
path: ["password_confirm"],
});

// 2. Otomatis buat tipe data dari schema
type FormData = z.infer<typeof schema>;

export default function RegisterForm() { 
    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Input Nama */}
                <InputText 
                    label="Nama"
                    nama="nama lengkap"
                    register={register("nama")}
                    error={errors.nama?.message} 
                />

                {/* Input Email */}
                <InputText 
                    label="Email"
                    nama="email"
                    register={register("email")}
                    error={errors.email?.message} 
                />

                {/* Input Password  */}
                <div className="mb-4">
                    <label>Password</label>
                    <input 
                        type="password"
                        {...register("password")}
                        className="border w-full p-2 rounded-full"
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                {/* Input Konfirmasi Password */}
                <div className="mb-4">
                    <label>Konfirmasi Password</label>
                    <input 
                        type="password"
                        {...register("password_confirm")}
                        className="border w-full p-2 rounded-full"
                    />
                    {errors.password_confirm && <p className="text-red-500">{errors.password_confirm.message}</p>}
                </div>

                <div className="flex justify-center mt-6"> 
                        <button 
                        type="submit" 
                        className="w-full md:w-1/2 bg-[#D81B60] text-white font-bold py-3 px-6 rounded-full hover:bg-[#E91E63] transition duration-300">
                            Login
                        </button>
                </div>
            </form>
        </div>
    );
}