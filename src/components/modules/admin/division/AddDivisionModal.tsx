import SingleImageUpload from "@/components/SingleImageUpload";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddDivisionMutation } from "@/redux/features/division/division.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Description } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
// import { toast } from "sonner";
import z from "zod";



const divisionTypeSchema = z.object({
    name: z.string().min(3, { error: "Division Name minimum 3 character" }),
    description: z.string().min(20, { error: "Division Description minimum 20 character" }).optional(),
})

export function AddDivisionModal() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [addDivision] = useAddDivisionMutation();

    const form = useForm({
        resolver: zodResolver(divisionTypeSchema),
        defaultValues: {
            name: "",
            description: ""
        }
    });

    const onSubmit = async (data: z.infer<typeof divisionTypeSchema>) => {
        const formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("file", image as File);
        // console.log(formData.get("data"));
        // console.log(formData.get("file"));
        const toastId = toast.loading("Uploading...");
        try {
            const res = await addDivision(formData).unwrap();
            if (res.success) {
                toast.success("Division Create Successfully!", { id: toastId });
                setOpen(false)
            }else{
                console.log(res)
            }
        } catch (error) {
            console.log(error);
            toast.error("Division Create Failed!", { id: toastId })
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>+ New</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Division</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form id="add_tour_division" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="py-3">
                                    <FormLabel>Division Name</FormLabel>
                                    <FormControl>
                                        <Input className="focus-visible:ring-0" placeholder="Write Name" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="py-3">
                                    <FormLabel>Division Description</FormLabel>
                                    <FormControl>
                                        <Textarea className="focus-visible:ring-0" placeholder="Write Description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                    <SingleImageUpload onChange={setImage} />
                </Form>
                <Description className="sr-only">
                    This is tour division.
                </Description>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button form="add_tour_division" type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};