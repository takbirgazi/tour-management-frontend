import { DeleteConfirmation } from "@/components/layout/DeleteConfirmation";
import { AddTourTypeModal } from "@/components/modules/admin/tourType/AddTourTypeModal";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAllTourTypesQuery, useRemoveTourTypesMutation } from "@/redux/features/tour/tour.api";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";


const AddTourTypes = () => {
    const { data } = useAllTourTypesQuery(undefined);
    const [removeTourType] = useRemoveTourTypesMutation();

    const handleDeleteTour = async (tourTypeId: string) => {
        const toastId = toast.loading("Deleting...")
        try {
            const res = await removeTourType(tourTypeId).unwrap();
            if (res.success) {
                toast.success("Tour Type Deleted Successfully!", { id: toastId });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-2">
            <div className="flex justify-between py-8">
                <h2 className="text-2xl font-bold">Tour Types</h2>
                <AddTourTypeModal />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-lg">Name</TableHead>
                        <TableHead className="text-right text-lg">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data?.map((tourType: { _id: string, name: string }, ind: number) => <TableRow key={ind}>
                            <TableCell className="">{tourType.name}</TableCell>
                            <TableCell className="text-right"><DeleteConfirmation onConfirm={() => handleDeleteTour(tourType._id)}><Button className="cursor-pointer"><Trash2 /></Button></DeleteConfirmation></TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default AddTourTypes;