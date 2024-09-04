import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { IMAGE } from '../../../../../components/Editor/plugins/MarkdownTransformers';

interface Template {
  id: number;
  icon: string;
  title: string;
  img: string;
}

interface NoteSampleProps {
  template: Template;
  onSelectTemplate: (templateId: number) => void;
}

function NoteSample({ template, onSelectTemplate }: NoteSampleProps) {
  return (
    <Box
      display="block"
      m="15px"
      className="cursor-pointer"
      onClick={() => onSelectTemplate(template.id)}
      width="300px"
      border="1px solid #ededed" borderRadius="5px"
    >
      <Image src={template.img} alt="" width="100%" />
    </Box>
  );
}

export default NoteSample;
