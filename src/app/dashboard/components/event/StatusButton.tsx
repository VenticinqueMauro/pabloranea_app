import { useStore } from "@/store/dashboard";
import { Button } from "@nextui-org/react";
import { Pause, Play } from "lucide-react";
import { toast } from "sonner";

export default function StatusButton({ id, status }: { id: string, status?: string }) {

    const { setRefresh } = useStore();

    const handleStatus = async () => {

        const newStatus = {
            status: status === 'active' ? 'inactive' : 'active'
        }

        try {
            const res = await fetch(`/api/event/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newStatus)
            })

            const { message } = await res.json()
            setRefresh();
            toast.success(message)
        } catch (error: any) {
            throw new Error(error)
        }
    }

    return (
        <>
            {
                status === 'active' ? (
                    <Button size="sm" radius="full" isIconOnly color="warning" variant="flat" aria-label="edit" onClick={handleStatus}>
                        <Pause size={16} />
                    </Button >
                ) : (
                    <Button size="sm" radius="full" isIconOnly color="success" variant="flat" aria-label="edit" onClick={handleStatus}>
                        <Play size={16} />
                    </Button >
                )
            }
        </>

    )
}