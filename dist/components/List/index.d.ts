import { FC, ForwardRefExoticComponent, RefAttributes } from "react";
import { ListProps } from "./list";
import { ListItemProps } from "./listItem";
export declare type IListComponent = ForwardRefExoticComponent<ListProps & RefAttributes<HTMLUListElement>> & {
    Item: FC<ListItemProps>;
};
declare const ListComponent: IListComponent;
export default ListComponent;
