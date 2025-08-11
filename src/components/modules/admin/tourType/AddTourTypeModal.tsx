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
import { useAddTourTypesMutation } from "@/redux/features/tour/tour.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Description } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";



const tourTypeSchema = z.object({
  name: z.string().min(3, { error: "Tour Type minimum 3 character" }),
})

export function AddTourTypeModal() {
  const [addTour] = useAddTourTypesMutation();

  const form = useForm({
    resolver: zodResolver(tourTypeSchema),
    defaultValues: {
      name: ""
    }
  });

  const onSubmit = async (data: z.infer<typeof tourTypeSchema>) => {
    const addTourData = await addTour(data);
    if (addTourData.data.success) {
      toast.success("Tour Type Create Successfully!")
    }

  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>+ New</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Tour Type</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form id="add_tour_type" onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="py-5">
                    <FormLabel>Tour Type Name</FormLabel>
                    <FormControl>
                      <Input className="focus-visible:ring-0" placeholder="Write Tour Type" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Description className="sr-only">
            This is tour type name.
          </Description>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button form="add_tour_type" type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}