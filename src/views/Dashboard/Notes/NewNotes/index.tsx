import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { Job } from '@blocksuite/store';
import { DownloadIcon, ZipTransformer } from '@blocksuite/blocks';
import { SaveIcon } from 'lucide-react';

import BlockSuite from '../blockSuite';
import { configuration } from '../blockSuite/editor/globalDoc';
import ApiService from '../../../../services/ApiService';
import { StyledToolbar } from './styles';

import NoteList from '../components/list/index';
import Chat from '../components/chat/index';
import Quickbar from '../components/quickbar/index';

import {
  Text,
  Flex,
  Box,
  Stack,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import { MdOutlineLoyalty, MdCircle } from 'react-icons/md'; 

const NewNote = () => {
  const colors = {
    success: 'rgb(32, 173, 87)',
    info: 'rgb(59, 67, 255)',
    danger: 'rgb(239, 50, 50)'
  };
  const [savingState, setSavingState] = useState('');
  const [notes, setNotes] = useState([]);
  const [color, setColor] = useState(colors.info);
  const params = useParams();
  const pdfRef = useRef();
  const [noteId, setNoteId] = useState(params.id || null);

  const saveNote = useCallback(async () => {
    if (savingState === 'Saving note...' || savingState === 'Downloading...')
      return;

    try {
      setColor(colors.info);
      setSavingState('Saving note...');
      const { collection } = configuration;
      const job = new Job({ collection });
      const json = await job.docToSnapshot(configuration.doc);
      const title = json.meta.title || 'Enter Note Title';
      let summary = document.querySelector('affine-note').innerText;
      if (summary.length > 252) summary = `${summary.slice(0, 50)}...`;
      const docMetaTags = document
        .querySelector('doc-meta-tags')
        .shadowRoot.querySelectorAll('.tag-inline');
      const tags = Array.from(docMetaTags).map((tag) => tag.textContent);

      const zip = await ZipTransformer.exportDocs(collection, [
        configuration.doc
      ]);
      const arrayBuffer = await zip.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);

      let binary = '';
      for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
      }

      const note = btoa(binary);
      const data = {
        topic: title,
        tags: tags,
        note: note,
        summary: summary
      };

      if (noteId) {
        await ApiService.updateNote(noteId, data);
        setSavingState('Saved successfully!');
        setColor(colors.success);
      } else {
        const response = await ApiService.createNote(data);
        // setNoteId(response.id);
        setSavingState('Saved successfully!');
        setColor(colors.success);
      }
    } catch (e) {
      setSavingState(`Something went wrong while saving. ${e}`);
      setColor(colors.danger);
    }
  }, [savingState, noteId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      saveNote();
    }, 10000000000);

    return () => clearInterval(intervalId);
  }, [saveNote]);

  const handleSaveClick = () => {
    saveNote();
  };

  const handleDownloadClick = async () => {
    if (savingState === 'Saving note...' || savingState === 'Downloading...')
      return;

    try {
      setColor(colors.info);
      setSavingState('Downloading...');
      const { collection } = configuration;
      const job = new Job({ collection });
      const json = await job.docToSnapshot(configuration.doc);
      const title = json.meta.title;
      if (title === '') {
        setColor(colors.danger);
        setSavingState('Please set your title.');
        return;
      }

      setSavingState('Downloaded successfully!');
      setColor(colors.success);
    } catch (e) {
      setSavingState(`Something went wrong while downloading. Error: ${e}`);
      setColor(colors.danger);
    }
  };

  const [chat, SetChat] = useState(false);

  const onChat = () => () => {
    SetChat(!chat)
  }
  
  return (
    <>
      <Flex h="full">
        {/* List Panel */}
        <Box overflow="auto" p="5" flex="0.8" className="border-r" h="full" backgroundColor="#f5f5f5">
          {/* pass the notes in the NoteList */}
          {/* <NoteList notes={notes} /> */}
          <NoteList />
        </Box>

        {/* Content Panel */}
        <Box flex="2" p="4" h="full" overflow="auto" flexDirection="row" justifyContent="center" className="border-r">
          <Flex justify="space-between">
            <Text fontSize="20" fontWeight="600">Relatively Theory ...</Text>
            <Stack direction="row">
              <Flex alignItems="center">
                <MdOutlineLoyalty />
                <Text px="3">Tags</Text>
              </Flex>

              <Tag borderRadius="30px" px="3" colorScheme='white' border="1px solid #c5c5c5">
                <MdCircle color="red" size="12" />
                <TagLabel pl="3">
                  Physics
                </TagLabel>
              </Tag>
              <Tag borderRadius="30px" px="3" colorScheme='white' border="1px solid #c5c5c5">
                <MdCircle color="blue" size="12" />
                <TagLabel pl="3">
                  SAT
                </TagLabel>
              </Tag>
            </Stack>
          </Flex>

          <Stack
              width="100%"
              mb={{ base: '20px', md: '40px' }}
              color="black"
              spacing={4}
          >
            <Text fontSize={12}>Updated 29th May 2024 | 01:27pm </Text>
            <Text>
              ✅ Hello! ✅
              I have read your all requirements carefully and saw your reviews.
              Am very interested and confident in your project.
              I think you are a great client so that, hope to work for you.
              I have extensive experience in React, so I think am a great fit for your project.
              I fully understand what project you want and am confident in solving it easily and in a short time.
              I've bid on many assignments now, but your project particularly catches my eye.
              I can't help but feel the urge to do it, but I'm worried that I'll be elected by you because of other people who don't have the skills but are bombarded with bids.
              I hope that we can discuss your assignment as soon as possible and achieve great results.
              Am very interested and confident in your project.
              I think you are a great client so that, hope to work for you.
              I have extensive experience in React, so I think am a great fit for your project.
              I fully understand what project you want and am confident in solving it easily and in a short time.
              I've bid on many assignments now, but your project particularly catches my eye.
              I can't help but feel the urge to do it, but I'm worried that I'll be elected by you because of other people who don't have the skills but are bombarded with bids.
              I hope that we can discuss your assignment as soon as possible and achieve great results.
              Am very interested and confident in your project.
              I think you are a great client so that, hope to work for you.
              I have extensive experience in React, so I think am a great fit for your project.
              I fully understand what project you want and am confident in solving it easily and in a short time.
              I've bid on many assignments now, but your project particularly catches my eye.
              I can't help but feel the urge to do it, but I'm worried that I'll be elected by you because of other people who don't have the skills but are bombarded with bids.
              I hope that we can discuss your assignment as soon as possible and achieve great results.
              Am very interested and confident in your project.
              I think you are a great client so that, hope to work for you.
              I have extensive experience in React, so I think am a great fit for your project.
              I fully understand what project you want and am confident in solving it easily and in a short time.
              I've bid on many assignments now, but your project particularly catches my eye.
              I can't help but feel the urge to do it, but I'm worried that I'll be elected by you because of other people who don't have the skills but are bombarded with bids.
              I hope that we can discuss your assignment as soon as possible and achieve great results.
              Thanks.
            </Text>
          </Stack>
        </Box>

        {/* Chat Panel */}
        <Box overflow="auto" p="5" border="r" flex="1" h="full" backgroundColor="#f5f5f5" className={ chat? "" : "hidden" }>
          <Chat />
        </Box>
        
        {/* QuickBar Panel */}
        <Quickbar onChatChange={onChat} />
      </Flex>
    </>
  );
};

export default NewNote;
