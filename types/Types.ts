export type DropDownProps = {
  inputValue: string;
  addItem: (item: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dropDownList: string[];
  expand: boolean;
  handleExpand: () => void;
  handleActive: (item: string) => void;
  activeList: string[];
};
