import { MDXProvider } from "@mdx-js/react";
import {
  Accordion,
  Alert,
  AlertDialog,
  Avatar,
  AspectRatioBox,
  AvatarGroup,
  Badge,
  Box,
  Breadcrumb,
  Button,
  ButtonGroup,
  Callout,
  Code,
  Checkbox,
  CheckboxGroup,
  CloseButton,
  Collapse,
  ControlBox,
  CircularProgress,
  Divider,
  Drawer,
  Editable,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputAddon,
  InputGroup,
  Kbd,
  Link,
  List,
  ListItem,
  OrderedList,
  Stack,
  SimpleGrid,
  Menu,
  Modal,
  NumberInput,
  Portal,
  Popover,
  Progress,
  PseudoBox,
  Radio,
  RadioGroup,
  RadioButtonGroup,
  Select,
  Skeleton,
  Slider,
  Spinner,
  Stat,
  Switch,
  Tabs,
  Tag,
  Text,
  Textarea,
  Tooltip,
  UnorderedList,
  VisuallyHidden,
} from '@chakra-ui/react'

export default function MDXCompProvider(props) {
  const state = {
    h1: (props) => <Heading as="h1" size="xl" mt={3} mb={2} {...props} />,
    h2: (props) => <Heading as="h2" size="lg" mt={3} mb={2} {...props} />,
    h3: (props) => <Heading as="h3" size="md" mt={3} mb={2} {...props} />,
    h4: (props) => <Heading as="h4" size="sm" mt={3} mb={2} {...props} />,
    h5: (props) => <Heading as="h5" size="xs" mt={3} mb={2} {...props} />,
    p: (props) => <Text as="p" mb={3} lineHeight={2} {...props} />,
    ul: (props) => <UnorderedList my={2}>{props.children}</UnorderedList>,
    ol: (props) => <OrderedList my={2}>{props.children}</OrderedList>,
    li: (props) => <ListItem>{props.children}</ListItem>,
    a: (props) => <Link as="a" color="brand.500" {...props} />,
    Accordion,
    Alert,
    AlertDialog,
    Avatar,
    AspectRatioBox,
    AvatarGroup,
    Badge,
    Box,
    Breadcrumb,
    Button,
    ButtonGroup,
    Callout,
    Code,
    Checkbox,
    CheckboxGroup,
    CloseButton,
    Collapse,
    ControlBox,
    CircularProgress,
    Divider,
    Drawer,
    Editable,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    FormErrorMessage,
    Grid,
    Heading,
    Icon,
    IconButton,
    Image,
    Input,
    InputAddon,
    InputGroup,
    Kbd,
    Link,
    List,
    ListItem,
    Stack,
    SimpleGrid,
    Menu,
    Modal,
    NumberInput,
    Portal,
    Popover,
    Progress,
    PseudoBox,
    Radio,
    RadioGroup,
    RadioButtonGroup,
    Select,
    Skeleton,
    Slider,
    Spinner,
    Stat,
    Switch,
    Tabs,
    Tag,
    Text,
    Textarea,
    Tooltip,
    VisuallyHidden,
  };

  return (
    <MDXProvider components={state}>
      <Box {...props} />
    </MDXProvider>
  );
}