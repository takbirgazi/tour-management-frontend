import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSenOtpMutation, useVerifyOtpMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";



const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Please Input your OTP",
    }),
});

export default function Verify() {
    const location = useLocation();
    const navigate = useNavigate();
    const [email] = useState(location.state);
    const [confirmed, setConfirmed] = useState(false);
    const [senOtp] = useSenOtpMutation();
    const [verifyOtp] = useVerifyOtpMutation();

    useEffect(() => {
        if (!email) {
            navigate("/login");
        }
    }, [email, navigate]);

    const handelSendOtp = async () => {
        const toastId = toast.loading("Sending OTP...")
        try {
            const res = await senOtp({ email: email }).unwrap();
            if (res.success) {
                toast.success("OTP Send Successfully!", { id: toastId });
                setConfirmed(true);
            }

        } catch (error) {
            console.log(error)
        }
    }

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {

        const toastId = toast.loading("Verifying...")
        try {
            const res = await verifyOtp({
                email: email,
                otp: data.pin
            }).unwrap();

            if (res.success) {
                toast.success("Verified Successfully!", { id: toastId });
                navigate("/login")
            }

        } catch (error) {
            console.log(error)
        }



    }

    return (
        <div className="grid place-items-center min-h-screen">
            {confirmed ? (<Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>OTP Verification</CardTitle>
                    <CardDescription>
                        Enter your OTP for verify
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form id="otp-form" onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                            <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>One-Time Password</FormLabel>
                                        <FormControl>
                                            <InputOTP maxLength={6} {...field}>
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={0} />
                                                    <InputOTPSlot index={1} />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={2} />
                                                    <InputOTPSlot index={3} />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={4} />
                                                    <InputOTPSlot index={5} />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormDescription className="sr-only">
                                            Please enter the one-time password sent to your phone.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button form="otp-form" type="submit" className="w-full cursor-pointer">
                        Submit
                    </Button>
                </CardFooter>
            </Card>) : (
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>OTP Verification</CardTitle>
                        <CardDescription>
                            Click Send OTP to {email}.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex-col gap-2">
                        <Button onClick={handelSendOtp} type="submit" className="w-full cursor-pointer">
                            Send OTP
                        </Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}