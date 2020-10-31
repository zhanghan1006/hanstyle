import { FC, ForwardRefExoticComponent, RefAttributes } from "react";
import List, { ListProps } from "./list";
import ListItem, { ListItemProps } from "./listItem";

export type IListComponent = ForwardRefExoticComponent<
  ListProps & RefAttributes<HTMLUListElement>
> & {
  Item: FC<ListItemProps>;
};

const ListComponent = List as IListComponent;

ListComponent.Item = ListItem;

export default ListComponent;
