/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { remove } from "../provider/dataProvider";

type UseDeleteProps = {
    resource: string;
};

const useDelete = ({ resource }: UseDeleteProps) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => remove({ resource, id }),
        onSuccess: () => {
            // Làm mới lại API sau khi xóa thành công
            queryClient.invalidateQueries({
                queryKey: [resource],
            });
        },
    });
};

export default useDelete;
