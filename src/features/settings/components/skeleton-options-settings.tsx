import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonOptionsSettings = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full h-auto">
      <div className="p-6 border border-zinc-500 rounded-md w-full h-full">
        <Skeleton className="mb-2 rounded-xl w-72 h-8" />
        <Skeleton className="mb-8 rounded-xl w-96 h-4" />
        <Skeleton className="rounded-xl w-60 h-4" />

        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-3 pt-6 w-full max-w-[80%] h-32">
            <Skeleton className="rounded-xl w-1/3" />
            <Skeleton className="rounded-xl w-1/3" />
            <Skeleton className="rounded-xl w-1/3" />
          </div>
          <div className="flex justify-center pt-4 w-full">
            <Skeleton className="rounded-xl w-[22rem] h-4" />
          </div>
        </div>

        <Separator className="my-6" />
        <Skeleton className="rounded-xl w-72 h-4" />
        <Skeleton className="mt-2 rounded-xl w-[32rem] h-4" />
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 mt-6">
          <div>
            <Skeleton className="mt-4 rounded-xl w-60 h-5" />
            <Skeleton className="mt-4 rounded-xl w-full h-8" />
            <Skeleton className="mt-4 rounded-xl w-56 h-4" />
          </div>
          <div>
            <Skeleton className="mt-4 rounded-xl w-60 h-5" />
            <Skeleton className="mt-4 rounded-xl w-full h-8" />
            <Skeleton className="mt-4 rounded-xl w-56 h-4" />
          </div>
        </div>

        <div className="flex justify-end">
          <Skeleton className="mt-4 rounded-xl w-56 h-8" />
        </div>


      </div>
    </div>
  )
}
export default SkeletonOptionsSettings