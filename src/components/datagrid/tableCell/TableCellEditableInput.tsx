import React from "react";

interface OwnProps {
  cellCurrentValue: any;
  onSaveClick: (updatedCellValue: any) => void;
  onCancel: () => void;
}

const TableCellEditableInput: React.FC<OwnProps> = ({
  cellCurrentValue,
  onSaveClick,
  onCancel,
}: OwnProps) => {
  const [cellEditValue, setCellEditValue] = React.useState(cellCurrentValue);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCellEditValue(e.currentTarget.value);
  };

  const onSaveClickHandler = () => {
    onSaveClick(cellEditValue);
  };

  return (
    <div className="editable-input-container">
      <input type="text" value={cellEditValue} onChange={onChange} />
      <button onClick={onSaveClickHandler}>Save</button>
      <button onClick={onCancel}>X</button>
    </div>
  );
};

export default TableCellEditableInput;
