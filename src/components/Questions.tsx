import React from 'react';
import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';

interface Review {
  key: number;
  quiz: string;
  answer: string;
}

interface Props {
  quiz: Review;
}

const Questions: React.FC<Props> = ({ quiz }) => {
  const items: CollapseProps['items'] = [
    {
      key: quiz.key,
      label: (
        <span className="text-sm font-medium text-gray-800">{quiz.quiz}</span>
      ),
      children: (
        <p className="text-sm text-gray-500 leading-6">{quiz.answer}</p>
      ),
    },
  ];

  return (
    <div className="border-b border-gray-200 py-2">
      <Collapse
        accordion
        ghost
        items={items}
        expandIconPosition="end"
        className="[&_.ant-collapse-content]:!px-0 [&_.ant-collapse-header]:!px-0"
      />
    </div>
  );
};

export default Questions;
