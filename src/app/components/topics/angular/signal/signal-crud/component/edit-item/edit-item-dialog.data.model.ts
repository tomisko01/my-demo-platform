import {elden} from "../../../../../../../typings";


export type EditItemDialogData = {
  mode: 'create' | 'update';
  title: string;
  item?: elden.Item;
}
