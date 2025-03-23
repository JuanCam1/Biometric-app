import type { FC } from "react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: number;
  name: string;
  Icon: LucideIcon;
  value: number;
}
const CardInfo: FC<Props> = ({ id, name, Icon, value }) => {
  return (
    <Card className="dark:bg-zinc-900 mx-2 dark:border-zinc-600">
      <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
        <CardTitle className="font-medium text-base">{name}</CardTitle>
        <Icon className="size-5 dark:text-white" />
      </CardHeader>
      <CardContent>
        <div className="font-bold text-3xl text-center">{value}</div>
      </CardContent>
    </Card>
  )
}
export default CardInfo