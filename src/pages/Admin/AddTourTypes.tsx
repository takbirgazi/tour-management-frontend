import { AddTourTypeModal } from "@/components/modules/admin/tourType/AddTourTypeModal";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAllTourTypesQuery } from "@/redux/features/tour/tour.api";


const AddTourTypes = () => {
    const { data } = useAllTourTypesQuery(undefined);

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
                        data?.map((tourType: { name: string }, ind: number) => <TableRow key={ind}>
                            <TableCell className="">{tourType.name}</TableCell>
                            <TableCell className="text-right">Delete</TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default AddTourTypes;