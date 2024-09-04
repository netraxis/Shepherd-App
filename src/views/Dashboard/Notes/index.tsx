import CustomSideModal from '../../../components/CustomComponents/CustomSideModal';
import { useCustomToast } from '../../../components/CustomComponents/CustomToast/useCustomToast';
import DropDownFilter from '../../../components/CustomComponents/DropDownFilter';
import DocumentCard from '../../../components/DocumentCard';
import TagModal from '../../../components/TagModal';
import UploadModal from '../../../components/UploadModal';
import { DeleteModal } from '../../../components/deleteModal';
import LoaderOverlay from '../../../components/loaderOverlay';
import CustomTabPanel from '../../../components/tabPanel';
import { encodeQueryParams } from '../../../helpers';
import uploadFile from '../../../helpers/file.helpers';
import FileProcessingService from '../../../helpers/files.helpers/fileProcessing';
import { UploadMetadata } from '../../../helpers/s3Handler';
import { useSearch } from '../../../hooks';
import documentStore from '../../../state/documentStore';
import flashcardStore from '../../../state/flashcardStore';
import noteStore from '../../../state/noteStore';
import userStore from '../../../state/userStore';
import { NoteDetails, StudentDocument } from '../../../types';
import { useFlashcardWizard } from '../FlashCards/context/flashcard';
import SetupFlashcardPage from '../FlashCards/forms/flashcard_setup';
import Pagination from '../components/Pagination';
import ActionDropdown from './components/actionButton';
import { StyledImage } from './styles';
import {
  SimpleGrid,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tab,
  Text,
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  MenuItem,
  MenuList,
  MenuButton,
  Tag,
  TagLabel,
  Box,
  Image,
  Stack,
  Menu,
} from '@chakra-ui/react';
import { MdLibraryBooks, MdAutoGraph, MdEventNote, MdCardTravel, MdCircle } from 'react-icons/md';  // Import the icon

import { PhoneIcon } from '@chakra-ui/icons';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaThLarge, FaThList, FaAngleDown, FaSortAmountDown } from 'react-icons/fa';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { MultiSelect } from 'react-multi-select-component';
import { useNavigate, useLocation } from 'react-router-dom';
import { MAX_FILE_NAME_LENGTH } from '../../../helpers/constants';
import NoteSample from './components/noteSample';
import { template } from 'lodash';

const templates = [
  {
    id: 1,
    icon: 'plus',
    title: 'Blank document',
    img: '/images/note/card1.png'
  },
  {
    id: 2,
    icon: 'plus',
    title: 'Resume',
    img: '/images/note/card2.png'
  },
  {
    id: 3,
    icon: 'plus',
    title: 'Resume',
    img: '/images/note/card3.png'
  },
  {
    id: 4,
    icon: 'plus',
    title: 'Letter',
    img: '/images/note/card4.png'
  },
];

const YourFlashCardIcon = () => (
  <StyledImage marginRight="10px">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="10"
      height="14"
    >
      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
  </StyledImage>
);

// YourEditTagsIcon.jsx
const YourEditTagsIcon = () => (
  <StyledImage marginRight="10px">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        fill="#6E7682"
        d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
      />
    </svg>
  </StyledImage>
);

const YourOpenDocchatIcon = () => (
  <StyledImage marginRight="10px">
    <IoChatboxEllipsesOutline />
  </StyledImage>
);

// YourDeleteIcon.jsx
const YourDeleteIcon = () => (
  <StyledImage marginRight="10px">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.08317 2.50033V0.750326C3.08317 0.428162 3.34434 0.166992 3.6665 0.166992H8.33317C8.65535 0.166992 8.9165 0.428162 8.9165 0.750326V2.50033H11.8332V3.66699H10.6665V11.2503C10.6665 11.5725 10.4053 11.8337 10.0832 11.8337H1.9165C1.59434 11.8337 1.33317 11.5725 1.33317 11.2503V3.66699H0.166504V2.50033H3.08317ZM4.24984 1.33366V2.50033H7.74984V1.33366H4.24984Z"
        fill="#F53535"
      />
    </svg>
  </StyledImage>
);

interface Option {
  label: string;
  value: string;
}

const NotesDirectory: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const toast = useCustomToast();
  const [hasSearched, setHasSearched] = useState(false);

  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Array<string | number>>([]);
  const [activeTab, setActiveTab] = useState<'notes' | 'files'>('notes');
  const { fetchFlashcards } = flashcardStore();
  const {
    setFlashcardData,
    flashcardData,
    resetFlashcard,
    isMinimized,
    isLoading: flashcardWizardLoading,
    setMinimized
  } = useFlashcardWizard();
  const [multiSelected, setMultiSelected] = useState<any>([]);
  const [confirmReady, setConfirmReady] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { user } = userStore();

  useEffect(() => {
    if (flashcardData?.documentId || flashcardData?.noteDoc) {
      setMinimized(false);
    }
    return () => {
      setMinimized(flashcardWizardLoading);
    };
  }, [flashcardWizardLoading]);

  const {
    fetchNotes,
    pagination: notesPagination,
    storeNoteTags,
    isLoading: notesIsLoading,
    deleteNote,
    notes,
    tags: noteTags
  } = noteStore();

  const {
    fetchStudentDocuments,
    pagination: docsPagination,
    storeDocumentTags,
    isLoading: docsIsLoading,
    deleteStudentDocument,
    studentDocuments,
    tags: docTags,
    saveDocument
  } = documentStore();

  const [selectedContent, setSelectedContent] = useState<Array<string>>([]);
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState({
    active: false,
    message: ''
  });

  const handleSelectChange = (id: string, checked: boolean) => {
    setSelectedContent((prevselectedContent) => {
      if (checked) {
        return [...prevselectedContent, id];
      } else {
        return prevselectedContent.filter((existingId) => existingId !== id);
      }
    });
  };

  const handleSelectionChange = (selectedOptions: Option[]) => {
    setMultiSelected(selectedOptions);

    const selectedTags = selectedOptions
      .map((option) => option.value)
      .join(',');

    const query: { [key: string]: any } = {};
    if (selectedTags) {
      query.tags = selectedTags;
    }

    fetchItems(query);
  };

  const fetchItems = activeTab === 'notes' ? fetchNotes : fetchStudentDocuments;
  const pagination = activeTab === 'notes' ? notesPagination : docsPagination;

  const isLoading =
    activeTab === 'notes' ? notesIsLoading : docsIsLoading || loading;
  const [openSideModal, setOpenSideModal] = useState(false);
  const storeTags = activeTab === 'notes' ? storeNoteTags : storeDocumentTags;
  const items = activeTab === 'notes' ? notes : studentDocuments;
  const itemsCount = items.length;
  const itemName = activeTab === 'notes' ? 'Notes' : 'Files';
  const tags = activeTab === 'notes' ? noteTags : docTags;

  const actionFunc = useCallback(
    (query: string) => {
      if (!hasSearched) setHasSearched(true);
      fetchItems({ search: query });
    },
    [fetchItems, hasSearched]
  );

  const handleSearch = useSearch(actionFunc);

  const filterOptions: Option[] = tags.map((tag) => ({
    label: tag,
    value: tag
  }));

  const isAllSelected = useMemo(() => {
    if (activeTab === 'notes') {
      return notes.every((note) => selectedContent.includes(note._id));
    } else {
      return studentDocuments.every((document) =>
        selectedContent.includes(document._id)
      );
    }
  }, [notes, selectedContent, studentDocuments, activeTab]);

  const gotoEditNote = (note: NoteDetails) => {
    const noteURL = `/dashboard/notes/new-note/${note._id}`;
    navigate(noteURL);
  };

  const gotoEditPdf = async (document: StudentDocument) => {
    const { title, documentUrl } = document;
    try {
      navigate(`/dashboard/notes/new-note`, {
        state: {
          documentUrl,
          docTitle: title
        }
      });
    } catch (error) {
      // console.log({ error });
    }
  };

  const [deleteItem, setDeleteItem] = useState<{
    note?: NoteDetails;
    document?: StudentDocument; // New field for Document details
    ids?: string[];
    currentDeleteType: 'single' | 'multiple';
  } | null>(null);

  const [tagEditItem, setTagEditItem] = useState<{
    note?: NoteDetails;
    document?: StudentDocument; // New field for Document details
    ids?: string[];
  } | null>(null);

  useEffect(() => {
    fetchStudentDocuments({ page: 1, limit: 20 }); // Replace with your actual fetchStudentDocuments function
    fetchNotes({ page: 1, limit: 20 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ingestDocument = async (document: StudentDocument) => {
    try {
      setLoading(true);
      if (document.ingestId) {
        const query = encodeQueryParams({
          documentUrl: document.documentUrl,
          docTitle: document.title,
          documentId: document.ingestId,
          sid: user._id
        });
        navigate(`/dashboard/docchat${query}`);
      } else {
        const fileProcessor = new FileProcessingService(
          { ...document, student: user?._id },
          true
        );
        const processData = await fileProcessor.process();

        const {
          data: [{ documentId }]
        } = processData;
        const query = encodeQueryParams({
          documentUrl: document.documentUrl,
          docTitle: document.title,
          documentId: documentId,
          sid: user._id
        });
        navigate(`/dashboard/docchat${query}`);
      }
    } catch (error) {
      toast({ title: 'Failed to load document', status: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const ingestNote = async (note?: NoteDetails) => {
    try {
      setLoading(true);
      const query = encodeQueryParams({
        noteId: note?._id,
        sid: user._id
      });
      navigate(`/dashboard/docchat${query}`);

      // if (document.ingestId) {
      //   navigate('/dashboard/docchat', {
      //     state: {
      //       documentUrl: document.documentUrl,
      //       docTitle: document.title,
      //       documentId: document.ingestId
      //     }
      //   });
      // } else {
      //   const fileProcessor = new FileProcessingService(
      //     { ...document, student: user?._id },
      //     true
      //   );
      //   const processData = await fileProcessor.process();

      //   const {
      //     data: [{ documentId }]
      //   } = processData;

      //   navigate('/dashboard/docchat', {
      //     state: {
      //       documentUrl: document.documentUrl,
      //       docTitle: document.title,
      //       documentId
      //     }
      //   });
      // }
    } catch (error) {
      toast({ title: 'Failed to load document', status: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const options = (note: NoteDetails) => [
    {
      label: 'Generate flashcard',
      onClick: () => {
        resetFlashcard();
        setFlashcardData((prev) => ({
          ...prev,
          deckname: '',
          studyType: '',
          studyPeriod: '',
          numQuestions: 0,
          timerDuration: '',
          hasSubmitted: false,
          noteDoc: note._id
        }));
        setOpenSideModal(true);
      },
      icon: <YourFlashCardIcon />
    },
    {
      label: 'Edit Tags',
      onClick: () => setTagEditItem({ note }),
      icon: <YourEditTagsIcon />
    },
    {
      label: 'Open in DocChat',
      onClick: () => {
        ingestNote(note);
      },
      icon: <YourOpenDocchatIcon />
    },
    {
      label: 'Delete',
      onClick: () => setDeleteItem({ note, currentDeleteType: 'single' }),
      color: '#F53535',
      icon: <YourDeleteIcon />
    }
  ];

  const documentOptions = (studentDocument: StudentDocument) => [
    {
      label: 'Flashcard',
      onClick: () => {
        resetFlashcard();
        setFlashcardData((prev) => ({
          ...prev,
          deckname: '',
          studyType: '',
          studyPeriod: '',
          numQuestions: 0,
          timerDuration: '',
          hasSubmitted: false,
          ingestId: studentDocument.documentUrl,
          documentId: studentDocument.documentUrl
        }));
        setOpenSideModal(true);
      },
      icon: <YourFlashCardIcon />
    },
    {
      label: 'Edit Tags',
      onClick: () => setTagEditItem({ document: studentDocument }),
      icon: <YourEditTagsIcon />
    },
    {
      label: 'Open in DocChat',
      onClick: () => ingestDocument(studentDocument),
      icon: <YourOpenDocchatIcon />
    },
    {
      label: 'Delete',
      onClick: () =>
        setDeleteItem({
          document: studentDocument,
          currentDeleteType: 'single'
        }),
      color: '#F53535',
      icon: <YourDeleteIcon />
    }
  ];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const activeTabFromQuery = queryParams.get('activeTab');

    if (activeTabFromQuery && activeTabFromQuery !== activeTab) {
      setActiveTab(activeTabFromQuery as 'notes' | 'files');
    }
  }, [location, activeTab]);

  const handleTabChange = (index: number) => {
    const tab = index === 0 ? 'notes' : 'files';
    setActiveTab(tab);
    const currentQuery = new URLSearchParams(location.search);
    currentQuery.set('activeTab', tab);
    navigate(`${location.pathname}?${currentQuery.toString()}`);
    if (selectedTags.length) {
      setSelectedTags([]);
    }
    setDeleteItem(null);
    setTagEditItem(null);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags([tag]);
    fetchNotes({ tags: tag });
  };

  const onTagSubmit = async (tags: string[]) => {
    const ids =
      tagEditItem?.ids ||
      ((activeTab === 'notes'
        ? tagEditItem?.note?._id
        : tagEditItem?.document?._id) as string);

    const isSaved = await storeTags(ids, tags); // Using storeTags based on activeTab

    if (isSaved) {
      toast({
        position: 'top-right',
        title: `Tags Added for ${
          tagEditItem?.note?.topic || tagEditItem?.document?.title || 'Item'
        }`,
        status: 'success'
      });
      setTagEditItem(null);
    } else {
      toast({
        position: 'top-right',
        title: `Failed to add tags for ${
          tagEditItem?.note?.topic || tagEditItem?.document?.title || 'Item'
        }`,
        status: 'error'
      });
    }
  };

  const editableTags = useMemo(() => {
    if (activeTab === 'notes') return tagEditItem?.note?.tags || [];
    return tagEditItem?.document?.tags || [];
  }, [activeTab, tagEditItem]);

  const handleTemplateClick = (templateId) => {
    console.log(1);
    navigate(`/dashboard/notes/new-note`);
  };

  const NotesTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
      <>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          justifyContent="space-around"
          mb="20px"
        >
          {templates.map((template) => (
            <NoteSample
              template={template}
              onSelectTemplate={handleTemplateClick}
            />
          ))}
        </SimpleGrid>
      </>
    );
  };

  const renderEmptyState = () => {
    if (isLoading) return;
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'start'}
      >
        <Box>
          <Text
            fontFamily="Inter"
            fontWeight="600"
            fontSize="32px"
            lineHeight="30px"
            paddingLeft="4px"
            color="#212224"
          >
            Notes
          </Text>
          <ActionDropdown
            onOptionClick={(option) => {
              if (option === 'upload-document') {
                setOpenUploadModal(true);
              } else {
                navigate('/dashboard/notes/notes-template');
              }
            }}
          />
        </Box>
      </Box>
    );
  };

  const onTagDelete = async () => {
    // Generate the ID or IDs to delete based on whether you are in 'notes' or 'documents' tab
    const id =
      deleteItem?.ids?.join(',') ||
      ((activeTab === 'notes'
        ? deleteItem?.note?._id
        : deleteItem?.document?._id) as string);

    // Assume you have a deleteItem function that works for documents, similar to deleteNote for notes
    const deleteFunc =
      activeTab === 'notes' ? deleteNote : deleteStudentDocument;

    const isDeleted = await deleteFunc(id);

    if (isDeleted) {
      toast({
        position: 'top-right',
        title: `${
          deleteItem?.note?.topic || deleteItem?.document?.title
        } deleted successfully`,
        status: 'success'
      });
      setDeleteItem(null);
    } else {
      toast({
        position: 'top-right',
        title: `Failed to delete ${
          deleteItem?.note?.topic || deleteItem?.document?.title
        }`,
        status: 'error'
      });
    }
  };

  const onSelectionChange = (item: string | number | (string | number)[]) => {
    const tags = Array.isArray(item) ? item.join(',') : (item as string);

    const query: { [key: string]: any } = {};
    if (tags || tags.length) {
      query.tags = tags;
    }
    fetchItems(query);
  };

  return (
    <>
      {/* {isLoading && <LoaderOverlay />} */}
      {(tagEditItem?.note || tagEditItem?.document || tagEditItem?.ids) && (
        <TagModal
          tags={editableTags}
          onSubmit={onTagSubmit}
          onClose={() => setTagEditItem(null)}
          isOpen={Boolean(tagEditItem)}
        />
      )}

      <UploadModal
        isOpen={openUploadModal}
        onClose={() => {
          setOpenUploadModal(false);
          setFile(null);
        }}
        accept="application/pdf"
        isLoading={isUploadingFile}
        progress={progress}
        countdown={countdown}
        setProgress={setProgress}
        confirmReady={confirmReady}
        file={file}
        setFile={setFile}
        onUpload={(file) => {
          const uploadEmitter = uploadFile(file, {
            studentID: user?._id as string,
            documentID: file.name
          });

          let readableFileName = file.name
            .toLowerCase()
            .replace(/\.pdf$/, '')
            .replace(/_/g, ' ');

          if (readableFileName.length > MAX_FILE_NAME_LENGTH) {
            readableFileName = readableFileName.substring(
              0,
              MAX_FILE_NAME_LENGTH
            );
            setCountdown((prev) => ({
              active: true,
              message: `The file name has been truncated to ${MAX_FILE_NAME_LENGTH} characters`
            }));
            setProgress(5);
          }

          setCountdown(() => ({
            active: true,
            message: 'Uploading... your document is being uploaded'
          }));

          uploadEmitter.on('progress', (progress: number) => {
            if (!isUploadingFile) {
              setIsUploadingFile(true);

              setProgress(progress);
              setLoading(true);
            }
          });
          uploadEmitter.on('complete', async (responseData: UploadMetadata) => {
            const { fileUrl: documentUrl, documentID, name } = responseData;
            try {
              const title =
                documentID ||
                name ||
                decodeURIComponent(
                  (documentUrl.match(/\/([^/]+)(?=\.\w+\?)/) || [])[1] || ''
                ).replace('uploads/', '');

              const response = await saveDocument({ title, documentUrl });
              if (response) {
                setOpenUploadModal(false);
                toast({
                  title: 'Document saved',
                  status: 'success',
                  position: 'top-right'
                });
                setFile(null);
                setConfirmReady(true);
                setCountdown((prev) => ({
                  active: false,
                  message: 'Document uploaded'
                }));
              } else {
                toast({
                  title: 'Failed to save document',
                  status: 'error',
                  position: 'top-right'
                });
                setConfirmReady(false);
              }
              setIsUploadingFile(false);
            } catch (error) {
              toast({
                title: 'Failed to save document',
                status: 'error',
                position: 'top-right'
              });
            } finally {
              setIsUploadingFile(false);
            }
          });
          uploadEmitter.on('error', (error) => {
            toast({
              title: 'Failed to save document',
              status: 'error',
              position: 'top-right'
            });
            setIsUploadingFile(false);
          });
        }}
      />

      <CustomSideModal
        onClose={() => {
          setOpenSideModal(false);
          resetFlashcard();
        }}
        isOpen={openSideModal}
      >
        <div style={{ margin: '3rem 0', overflowY: 'auto' }}>
          <SetupFlashcardPage showConfirm isAutomated />
        </div>
      </CustomSideModal>

      <DeleteModal
        entity={activeTab === 'notes' ? 'note' : 'document'} // Set entity based on activeTab
        isLoading={isLoading}
        isOpen={Boolean(deleteItem)}
        onCancel={() => setDeleteItem(null)}
        onDelete={() => onTagDelete()}
        onClose={() => null}
      />

      <Flex h="full">
        <Box className='px-10 py-5 border-r h-full shrink-0 overflow-auto' flex="1">
          {renderEmptyState()}
        </Box>

        <Box flex="5" p="4" overflow="auto" backgroundColor="#f5f5f5">
            <Flex justify="space-between">
              <Text fontSize="2xl">Templates</Text>
              <Text color="blue" pr="5" cursor="pointer">{`View More ->`}</Text>
            </Flex>
            
            <Flex>
              <NotesTemplate />
            </Flex>

            <Stack
              direction={{ base: 'column', md: 'row-reverse' }}
              width="100%"
              mb={{ base: '20px', md: '40px' }}
              alignItems="center"
              justifyContent="space-start"
              color="#E5E6E6"
              spacing={4}
              paddingRight={10}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                alignItems={{ base: 'flex-start', md: 'center' }}
                width={{ base: '100%', md: 'auto' }}
              >
                {/* <MultiSelect
                  options={filterOptions}
                  value={multiSelected}
                  onChange={handleSelectionChange}
                  labelledBy="Select"
                  valueRenderer={() => (
                    <span
                      style={{
                        fontWeight: '500',
                        color: 'rgb(110, 118, 130)',
                        fontSize: '0.875rem',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Filter By Tags
                    </span>
                  )}
                /> */}
                <Menu>
                  <MenuButton>
                    <Flex
                      cursor="pointer"
                      // border="1px solid #E5E6E6"
                      padding="5px 10px"
                      // borderRadius="6px"
                      alignItems="center"
                      mb={{ base: '10px', md: '0' }}
                      width={{ base: '-webkit-fill-available', md: 'auto' }}
                    >
                      <Text
                        fontWeight="400"
                        fontSize={{ base: '12px', md: '14px' }}
                        marginRight="5px"
                        color="#5E6164"
                        width={{ base: '100%', md: 'auto' }}
                      >
                        Sort By: A-Z
                      </Text>
                      <FaAngleDown color="#96999C" size="12px" /> |
                    </Flex>
                  </MenuButton>
                  <MenuList
                    fontSize="14px"
                    minWidth={'185px'}
                    borderRadius="8px"
                    backgroundColor="#FFFFFF"
                    boxShadow="0px 0px 0px 1px rgba(77, 77, 77, 0.05), 0px 6px 16px 0px rgba(77, 77, 77, 0.08)"
                  >
                    <Text color="blue" fontWeight="600" p="6px 8px 6px 8px">A-Z</Text>
                    <MenuItem
                      color="#212224"
                      _hover={{ bgColor: '#F2F4F7' }}
                      onClick={() => fetchFlashcards({ sort: 'createdAt' })}
                      fontSize="14px"
                      lineHeight="20px"
                      fontWeight="400"
                      p="6px 8px 6px 8px"
                    >
                      Best Match
                    </MenuItem>
                    <MenuItem
                      color="#212224"
                      fontSize="14px"
                      onClick={() => fetchFlashcards({ sort: 'updatedAt' })}
                      _hover={{ bgColor: '#F2F4F7' }}
                      lineHeight="20px"
                      fontWeight="400"
                      p="6px 8px 6px 8px"
                    >
                      Newest
                    </MenuItem>
                    <MenuItem
                      color="#212224"
                      fontSize="14px"
                      onClick={() => fetchFlashcards({ sort: 'updatedAt' })}
                      _hover={{ bgColor: '#F2F4F7' }}
                      lineHeight="20px"
                      fontWeight="400"
                      p="6px 8px 6px 8px"
                    >
                      Oldest
                    </MenuItem>
                  </MenuList>
                  &nbsp;<FaThLarge cursor="pointer" color="rgb(114 114 114)" size="20px" />
                  &nbsp;&nbsp;<FaThList cursor="pointer" color="rgb(114 114 114)" size="20px" />
                </Menu>
              </Flex>

              <Flex>
                <InputGroup
                  size="sm"
                  borderRadius="6px"
                  width={{ base: '100%'}}
                  pr="100"
                >
                  <InputLeftElement marginRight={'10px'} pointerEvents="none" height="48px">
                    <BsSearch color="#5E6164" size="14px" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    variant="outline"
                    onChange={(e) => handleSearch(e.target.value)}
                    size="lg"
                    placeholder="Enter a topic"
                    borderRadius="20px"
                    backgroundColor="white"
                    width={{base:'70%', sm:'350px', md:'450px', lg:'700px'}}
                  />
                </InputGroup>
              </Flex>
            </Stack>
            
            <Flex justify="center" gap="10" pt="6">
              <Button leftIcon={<MdLibraryBooks />} variant="outline" colorScheme="blue">
                <Text color="black">Flashcards</Text> 
              </Button>
              <Button leftIcon={<MdAutoGraph />} variant="outline" colorScheme="yellow">
                <Text color="black">Quizzes</Text> 
              </Button>
              <Button leftIcon={<MdEventNote />} variant="outline" colorScheme="purple">
                <Text color="black">Notes</Text> 
              </Button>
              <Button leftIcon={<MdCardTravel />} variant="outline" colorScheme="green">
                <Text color="black">Study Plans</Text> 
              </Button>
            </Flex>

            <Stack spacing="4" pt="7">
              <Flex justify="space-between">
                <Text display="flex" alignItems="center">Title &nbsp;<FaSortAmountDown color="rgb(114 114 114)" size="16px" /></Text>
                <Text>Tags |</Text>
                <Text>Created On |</Text>
                <Text>Last Updated |</Text>
              </Flex>
              <Box border="1px" borderColor="gray.200" p="2" borderRadius="xl" backgroundColor="#fff">
                <Flex justify="space-between">
                  <Text>Relativity Theory</Text>
                  <Stack direction="row">
                    <Tag borderRadius="30px" px="5" py="2" colorScheme='white' border="1px solid #c5c5c5">
                      <MdCircle color="red" size="10" />
                      <TagLabel pl="3">
                      Physics
                      </TagLabel>
                    </Tag>
                    <Tag borderRadius="30px" px="5" py="2" colorScheme='white' border="1px solid #c5c5c5">
                      <MdCircle color="blue" size="10" />
                      <TagLabel pl="3">
                      SAT
                      </TagLabel>
                    </Tag>
                  </Stack>
                  <Text>May 29th, 2024</Text>
                  <Text>May 29th, 2024 | 01:27pm</Text>
                </Flex>
              </Box>
              <Box border="1px" borderColor="gray.200" p="2" borderRadius="xl" backgroundColor="#fff">
                <Flex justify="space-between">
                  <Text>Relativity Theory</Text>
                  <Stack direction="row">
                    <Tag borderRadius="30px" px="5" py="2" colorScheme='white' border="1px solid #c5c5c5">
                      <MdCircle color="red" size="10" />
                      <TagLabel pl="3">
                      Physics
                      </TagLabel>
                    </Tag>
                    <Tag borderRadius="30px" px="5" py="2" colorScheme='white' border="1px solid #c5c5c5">
                      <MdCircle color="blue" size="10" />
                      <TagLabel pl="3">
                      SAT
                      </TagLabel>
                    </Tag>
                  </Stack>
                  <Text>May 29th, 2024</Text>
                  <Text>May 29th, 2024 | 01:27pm</Text>
                </Flex>
              </Box>
            </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default NotesDirectory;
