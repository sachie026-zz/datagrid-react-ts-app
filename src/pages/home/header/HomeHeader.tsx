import React from "react";

interface OwnProps {
  totalDataCount: number;
}

const HomeHeader: React.FC<OwnProps> = ({ totalDataCount }: OwnProps) => {
  return <div>Customers : {totalDataCount}</div>;
};

export default HomeHeader;
