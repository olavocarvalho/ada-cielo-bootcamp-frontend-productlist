import { Skeleton } from "./ui/skeleton";


const SkeletonElement = () => (
    <div className="p-4 w-[250px] border-gray-300 rounded-lg shadow-md">
        <div className="space-y-2">
            <Skeleton className="h-4 w-[160px] bg-slate-300" />
            <Skeleton className="h-4 w-[100px] bg-slate-300" />
        </div>
    </div>
);

const SkeletonList = ({ count }: { count: number }) => { 
  const skeletons = Array.from({ length: count }, (_, index) => (
    <SkeletonElement key={index} />
  ));
  return <>  
            <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                    {skeletons}
                </div>
            </div>
        </>
};

interface LoadingProps {
    width?: string,
    shape?: string,
    count?: number
  }

const Loading = ({ width, count } : LoadingProps) => {
  return (
      <SkeletonList count={count? count : 1} />
  );
};

export default Loading;
