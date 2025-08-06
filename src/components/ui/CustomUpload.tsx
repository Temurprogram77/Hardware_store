import React from 'react';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

interface Props {
  regex?: RegExp; // Fayl nomini tekshirish uchun
  multiple?: boolean;
  className?: string;
}

const CustomUpload: React.FC<Props> = ({ regex, multiple = true, className }) => {

  const props: UploadProps = {
    name: 'files',
    multiple,
    beforeUpload: (file) => {
      if (regex && !regex.test(file.name)) {
        message.error(`Fayl "${file.name}" noto‘g‘ri formatda!`);
        return Upload.LIST_IGNORE;
      }
      return true;
    }
  };

  return (
    <Upload.Dragger {...props} className={className}>
      <p className="ant-upload-drag-icon">
        <UploadOutlined />
      </p>
      <p className="ant-upload-text">
        Нажмите для загрузки или перетащите файл в это поле
      </p>
    </Upload.Dragger>
  );
};

export default CustomUpload;
