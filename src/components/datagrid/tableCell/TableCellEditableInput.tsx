import React, { useEffect } from "react";

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

  useEffect(() => {
    // precaution: set on editing to false, while unmouting the component
    // this will make sure that the editable input componenet should not stay visible
    return () => onCancel();
  }, []);

  return (
    <div className="editable-input-container">
      <input type="text" value={cellEditValue} onChange={onChange} />
      <button onClick={onSaveClickHandler}>Save</button>
      <button onClick={onCancel}>X</button>
    </div>
  );
};

export default TableCellEditableInput;
